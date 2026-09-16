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
    return (c / 100).toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + ' €';
  }
  function openD() { drawer.classList.add('open'); overlay.classList.add('open'); }
  function closeD() { drawer.classList.remove('open'); overlay.classList.remove('open'); }

  // Brief confirmation toast on a successful add (the drawer also opens, but the
  // toast makes the "it worked" feedback unmissable, esp. on desktop).
  var toastEl, toastTimer;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'aura-toast';
      toastEl.setAttribute('role', 'status');
      toastEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastEl);
    }
    toastEl.innerHTML = '<span class="tick" aria-hidden="true">✓</span><span>' + msg + '</span>';
    // force reflow so the .show transition replays on back-to-back adds
    void toastEl.offsetWidth;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2200);
  }
  function added() { toast('Ajouté au panier'); }

  function render(cart) {
    if (headerCount) {
      headerCount.textContent = cart.item_count;
      headerCount.classList.toggle('is-empty', cart.item_count === 0);
    }
    if (drawerCount) drawerCount.textContent = cart.item_count + (cart.item_count === 1 ? ' article' : ' articles');

    if (itemsEl) {
      if (!cart.items.length) {
        itemsEl.innerHTML = '<p style="padding:24px 0;color:var(--muted);font-size:14px;">Votre panier est vide.</p>';
      } else {
        itemsEl.innerHTML = cart.items.map(function (it) {
          var thumb = it.image
            ? '<img class="thumb" src="' + it.image + '" alt="" style="object-fit:cover;">'
            : '<div class="thumb"></div>';
          var ptitle = (it.product_title || '').replace('Bas de contention', 'Chaussettes de compression');
          return '<div class="drawer-item" data-key="' + it.key + '">' + thumb +
            '<div><div class="n">' + ptitle + '</div>' +
            '<div class="m">' + (it.variant_title || '') + '</div>' +
            '<div class="qty"><button type="button" data-dec aria-label="Moins">−</button><span>' + it.quantity + '</span><button type="button" data-inc aria-label="Plus">+</button></div></div>' +
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
  }

  function refresh() {
    return fetch('/cart.js', { headers: { Accept: 'application/json' } })
      .then(function (r) { return r.json(); })
      .then(render);
  }
  function add(id, qty) {
    return fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ id: id, quantity: qty })
    }).then(function (r) { return r.json(); })
      .then(function () { return refresh(); })
      .then(openD).then(added);
  }
  // Multi-variant add (bundle picker): one request, several pairs/colours.
  function addItems(items) {
    return fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ items: items })
    }).then(function (r) { return r.json(); })
      .then(function () { return refresh(); })
      .then(openD).then(added);
  }
  // A multi-pair tier is selected: add the fully-composed bundle, or flag the
  // first unsized pair inline if it isn't ready. Returns true if it handled the
  // click (so the single-add path is skipped).
  function handleBundle(bundle) {
    var size = bundle ? parseInt(bundle.dataset.size || '0', 10) : 0;
    if (size <= 1) return false;
    if (bundle.value) { addItems(JSON.parse(bundle.value)); }
    else { document.dispatchEvent(new CustomEvent('aura:bundleincomplete')); }
    return true;
  }
  function change(key, qty) {
    return fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ id: key, quantity: qty })
    }).then(function (r) { return r.json(); }).then(render);
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
    if (e.target.hasAttribute('data-inc')) change(key, q + 1);
    else if (e.target.hasAttribute('data-dec')) change(key, Math.max(q - 1, 0));
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
  // homepage) -> fall back to opening the cart drawer.
  var packBtn = document.getElementById('pack-cta-btn');
  if (packBtn) packBtn.addEventListener('click', function () {
    var tier = document.querySelector('[data-aura-packs] .pack[data-pack-qty="6"]');
    if (tier) {
      var target = document.querySelector('form[data-aura-buy]') || tier.closest('.shopify-section') || tier;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      tier.click();
    } else {
      refresh().then(openD);
    }
  });

  // checkout
  var checkoutBtn = document.getElementById('drawer-checkout');
  if (checkoutBtn) checkoutBtn.addEventListener('click', function () { window.location.href = '/checkout'; });

  refresh();
})();
