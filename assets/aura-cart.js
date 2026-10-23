/* ============================================================
   Aura — real Shopify AJAX cart
   Renders & syncs the cart drawer (snippets/aura-globals.liquid),
   wires the featured-product form, sticky bar, and header cart
   button to /cart/add.js, /cart.js, /cart/change.js.
   ============================================================ */
(function () {
  var overlay = document.getElementById('drawer-overlay');
  var drawer = document.getElementById('drawer');
  if (!drawer || !overlay) return;

  var itemsEl = document.getElementById('drawer-items');
  var drawerCount = document.getElementById('drawer-count');
  var headerCount = document.getElementById('cart-count');
  var subtotalEl = document.getElementById('drawer-subtotal');
  var totalEl = document.getElementById('drawer-total');
  var discountRow = document.getElementById('drawer-discount-row');
  var discountEl = document.getElementById('drawer-discount');
  var closeBtn = document.getElementById('drawer-close');
  var openBtn = document.getElementById('cart-open');

  function money(c) {
    return (c / 100).toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + '\u00a0€';
  }
  function openD() { drawer.classList.add('open'); overlay.classList.add('open'); }
  function closeD() { drawer.classList.remove('open'); overlay.classList.remove('open'); }

  // Brief confirmation toast on a successful add (the drawer also opens, but the
  // toast makes the "it worked" feedback unmissable, esp. on desktop).
  // The visual toast is aria-hidden; screen readers get the message from two
  // permanent live regions (a polite one for « Ajouté », an alert for errors) —
  // flipping aria-live on an existing region isn't reliably announced.
  var toastEl, toastTimer, liveStatus, liveAlert;
  function liveRegion(role) {
    var el = document.createElement('div');
    el.className = 'aura-sr';
    el.setAttribute('role', role);
    document.body.appendChild(el);
    return el;
  }
  function announce(el, msg) {
    el.textContent = '';
    setTimeout(function () { el.textContent = msg; }, 60);   // re-announce identical messages
  }
  function toast(msg, isError) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'aura-toast';
      toastEl.setAttribute('aria-hidden', 'true');
      document.body.appendChild(toastEl);
      liveStatus = liveRegion('status');
      liveAlert = liveRegion('alert');
    }
    announce(isError ? liveAlert : liveStatus, msg);
    toastEl.classList.toggle('is-error', !!isError);
    toastEl.innerHTML = '<span class="tick">' + (isError ? '!' : '✓') + '</span><span>' + esc(msg) + '</span>';
    // force reflow so the .show transition replays on back-to-back adds
    void toastEl.offsetWidth;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, isError ? 5000 : 2200);
  }
  function added() { toast('Ajouté au panier'); }

  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  // POST to a Shopify cart endpoint and reject on a non-2xx answer (e.g. 422 when
  // stock runs out) so a refused add never shows « Ajouté au panier ». Shopify's
  // `description` is already in the shop language (French).
  var GENERIC_ERR = "Impossible d'ajouter au panier pour le moment. Réessayez dans un instant.";
  function post(url, payload) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (data) {
        if (!r.ok || data.status >= 400) {
          var err = new Error(typeof data.description === 'string' && data.description ? data.description : GENERIC_ERR);
          err.shopify = true;
          throw err;
        }
        return data;
      });
    });
  }
  function failed(err) {
    toast(err && err.shopify ? err.message : GENERIC_ERR, true);
    return refresh().catch(function () {}); // resync: a multi-item add can partly succeed
  }

  // One add at a time: repeated taps while a request is in flight are ignored and
  // the add buttons are marked busy, so a double-tap can't add the pack twice.
  var busy = false;
  function setBusy(on) {
    busy = on;
    document.querySelectorAll('[data-aura-atc], #sticky-btn').forEach(function (b) {
      b.disabled = on;
      b.setAttribute('aria-busy', on ? 'true' : 'false');
    });
  }
  function guarded(run) {
    if (busy) return Promise.resolve();
    setBusy(true);
    return run()
      .then(function () {
        // The add succeeded: a failed drawer refresh must not turn it into an
        // « Impossible d'ajouter » error — confirm the add either way.
        return refresh().catch(function () {}).then(function () { openD(); added(); });
      }, failed)
      .then(function () { setBusy(false); });
  }

  function render(cart) {
    if (headerCount) {
      headerCount.textContent = cart.item_count;
      headerCount.classList.toggle('is-empty', cart.item_count === 0);
    }
    if (drawerCount) drawerCount.textContent = cart.item_count + (cart.item_count === 1 ? ' article' : ' articles');

    // Empty cart: a way back to the product instead of a 0 € checkout (the foot
    // with totals + « Paiement » is hidden via .is-empty).
    drawer.classList.toggle('is-empty', !cart.items.length);
    if (itemsEl) {
      if (!cart.items.length) {
        var tpl = document.getElementById('drawer-empty-tpl');
        itemsEl.innerHTML = tpl ? tpl.innerHTML : '<p class="drawer-empty-t">Votre panier est vide.</p>';
      } else {
        itemsEl.innerHTML = cart.items.map(function (it) {
          var thumb = it.image
            ? '<img class="thumb" src="' + esc(it.image) + '" alt="" style="object-fit:cover;">'
            : '<div class="thumb"></div>';
          var ptitle = (it.product_title || '').replace('Bas de contention', 'Chaussettes de compression');
          return '<div class="drawer-item" data-key="' + esc(it.key) + '">' + thumb +
            '<div><div class="n">' + esc(ptitle) + '</div>' +
            '<div class="m">' + esc(it.variant_title) + '</div>' +
            '<div class="qty"><button type="button" data-dec aria-label="Retirer une paire">−</button><span>' + it.quantity + '</span><button type="button" data-inc aria-label="Ajouter une paire">+</button></div></div>' +
            '<div class="p">' + money(it.final_line_price) + '</div></div>';
        }).join('');
      }
    }
    // Surface the automatic discount (Buy X get Y) so the −50% is visible before checkout.
    var saved = cart.total_discount || 0;
    if (subtotalEl) subtotalEl.textContent = money(saved > 0 ? cart.total_price + saved : cart.total_price);
    if (discountRow) discountRow.hidden = saved <= 0;
    if (discountEl) discountEl.textContent = '−' + money(saved);
    if (totalEl) totalEl.textContent = money(cart.total_price);
    // Shipping row: « Offerte » once the cart reaches the free-shipping threshold.
    var shipEl = document.getElementById('drawer-shipping');
    if (shipEl) {
      var freeFrom = parseInt(drawer.getAttribute('data-free-shipping') || '6000', 10);
      var free = cart.total_price >= freeFrom;
      shipEl.textContent = free ? 'Offerte' : 'Offerte dès ' + money(freeFrom);
      shipEl.classList.toggle('is-free', free);
    }
  }

  function refresh() {
    return fetch('/cart.js', { headers: { Accept: 'application/json' } })
      .then(function (r) { if (!r.ok) throw new Error('cart ' + r.status); return r.json(); })
      .then(render);
  }
  function add(id, qty) {
    return guarded(function () { return post('/cart/add.js', { id: id, quantity: qty }); });
  }
  // Multi-variant add (bundle picker): one request, several pairs/colours.
  // Shopify adds a multi-item request all-or-nothing on stock errors in practice,
  // but failed() resyncs the drawer either way.
  function addItems(items) {
    return guarded(function () { return post('/cart/add.js', { items: items }); });
  }
  // A multi-pair tier is selected: add the fully-composed bundle, or flag the
  // first unsized pair inline if it isn't ready. Returns true if it handled the
  // click (so the single-add path is skipped).
  function handleBundle(bundle) {
    var size = bundle ? parseInt(bundle.dataset.size || '0', 10) : 0;
    if (size <= 1) return false;
    if (busy) return true;
    if (bundle.value) { addItems(JSON.parse(bundle.value)); }
    else { document.dispatchEvent(new CustomEvent('aura:bundleincomplete')); }
    return true;
  }
  // Quantity changes run one after another (fast +/+ taps would otherwise race
  // and the last response to land would win). Each answer re-renders the drawer.
  var changeQueue = Promise.resolve();
  function change(key, qty) {
    changeQueue = changeQueue.then(function () {
      return post('/cart/change.js', { id: key, quantity: qty }).then(render);
    }).catch(function (err) {
      toast(err && err.shopify ? err.message : 'Impossible de modifier la quantité. Réessayez.', true);
      return refresh().catch(function () {});
    });
    return changeQueue;
  }

  // open / close
  if (openBtn) openBtn.addEventListener('click', function (e) { e.preventDefault(); refresh().then(openD); });
  if (closeBtn) closeBtn.addEventListener('click', closeD);
  overlay.addEventListener('click', closeD);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeD(); });

  // qty +/- (event delegation)
  if (itemsEl) itemsEl.addEventListener('click', function (e) {
    var item = e.target.closest('.drawer-item'); if (!item) return;
    var key = item.getAttribute('data-key');
    var q = parseInt(item.querySelector('.qty span').textContent, 10) || 1;
    var span = item.querySelector('.qty span');
    // Bump the visible count right away so the next tap builds on it (the queued
    // request then confirms or corrects it via render()).
    if (e.target.hasAttribute('data-inc')) { span.textContent = q + 1; change(key, q + 1); }
    else if (e.target.hasAttribute('data-dec')) { span.textContent = Math.max(q - 1, 0); change(key, Math.max(q - 1, 0)); }
  });

  // No size chosen yet -> reveal the hint + scroll, and block the add.
  function ensureVariant(vi) {
    if (vi && vi.value) return true;
    var row = document.querySelector('[data-aura-size-row]');
    var hint = document.querySelector('[data-aura-size-hint]');
    if (hint) hint.hidden = false;
    if (row) {
      // remove+reflow+re-add so the shake replays even if already flagged
      row.classList.remove('size-missing'); void row.offsetWidth;
      row.classList.add('size-missing');
      row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return false;
  }

  // featured product form -> AJAX add + open drawer
  document.querySelectorAll('form[data-aura-buy]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      if (handleBundle(f.querySelector('[data-aura-bundle]'))) return;
      var vi = f.querySelector('[data-aura-variant]');
      var qi = f.querySelector('[data-aura-qty]');
      if (!ensureVariant(vi)) return;
      add(vi.value, parseInt(qi.value, 10) || 1);
    });
  });

  // sticky bar -> add the confirmed bundle, or the currently selected variant
  var stickyBtn = document.getElementById('sticky-btn');
  if (stickyBtn) stickyBtn.addEventListener('click', function () {
    if (handleBundle(document.querySelector('[data-aura-bundle]'))) return;
    var vi = document.querySelector('[data-aura-variant]');
    var qi = document.querySelector('[data-aura-qty]');
    if (!vi) { refresh().then(openD); return; }
    if (!ensureVariant(vi)) return;
    add(vi.value, parseInt(qi.value, 10) || 1);
  });

  // pack CTA -> jump to the buy box and select the 6-pair tier (so the shopper
  // composes the pairs in the real picker). No buy box on the page (e.g. the
  // homepage) -> the button is a real link to the product with ?pack=6, and the
  // block below preselects that tier when the product page loads.
  // The pack card advertises a colour mix (« Bordeaux ×2 · Noir ×2 · Gris ×2 »),
  // carried on the button as data-pack-mix; the buy box applies it to the pairs
  // (aura:packmix, handled in aura-featured-product) so what's added matches the card.
  var packBtn = document.getElementById('pack-cta-btn');
  function packMix(qty) {
    var raw = packBtn && packBtn.getAttribute('data-pack-mix');
    var mix = raw ? raw.split(',').map(function (s) { return s.trim(); }).filter(Boolean) : [];
    return mix.length === qty ? mix : null;
  }
  function selectPack(qty, smooth) {
    var tier = document.querySelector('[data-aura-packs] .pack[data-pack-qty="' + qty + '"]');
    if (!tier) return false;
    if (smooth) {
      var target = document.querySelector('form[data-aura-buy]') || tier.closest('.shopify-section') || tier;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Arriving from another page (?pack=): land on the selected tier once the
      // images above it have their size — 'instant' overrides html{scroll-behavior:smooth},
      // which otherwise gets cancelled mid-load and leaves the shopper at the top.
      var land = function () { tier.scrollIntoView({ behavior: 'instant', block: 'start' }); };
      if (document.readyState === 'complete') land(); else window.addEventListener('load', land, { once: true });
    }
    tier.click();
    var mix = packMix(qty);
    if (mix) document.dispatchEvent(new CustomEvent('aura:packmix', { detail: { mix: mix } }));
    return true;
  }
  if (packBtn) packBtn.addEventListener('click', function (e) {
    if (selectPack(6, true)) e.preventDefault();
  });
  var params = new URLSearchParams(window.location.search);
  var packParam = parseInt(params.get('pack') || '', 10);
  if (packParam > 1 && selectPack(packParam, false) && window.history && history.replaceState) {
    // Drop ?pack= so a reload or a shared link doesn't re-jump to the buy box.
    params.delete('pack');
    var qs = params.toString();
    history.replaceState(history.state, '', window.location.pathname + (qs ? '?' + qs : '') + window.location.hash);
  }

  // checkout
  var checkoutBtn = document.getElementById('drawer-checkout');
  if (checkoutBtn) checkoutBtn.addEventListener('click', function () { window.location.href = '/checkout'; });

  refresh().catch(function () {});
})();
