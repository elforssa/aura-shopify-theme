// ============ Gallery + product configurator ============
(function(){
  const swatches = document.querySelectorAll('#swatches .swatch');
  const thumbs   = document.querySelectorAll('.gallery-thumb');
  const main     = document.getElementById('gallery-ph');
  const tag      = document.getElementById('gallery-tag');
  const label    = document.getElementById('gallery-label');
  const colorName= document.getElementById('color-name');
  const sticky   = document.getElementById('sticky-thumb');
  const stickyCol= document.getElementById('sticky-color');
  const sticky_sw= document.querySelectorAll('#sticky-swatches .sw');

  function isDark(hex) {
    const c = hex.replace('#','');
    const r = parseInt(c.substr(0,2),16);
    const g = parseInt(c.substr(2,2),16);
    const b = parseInt(c.substr(4,2),16);
    return (r*299 + g*587 + b*114) / 1000 < 140;
  }
  function setColor(color, name) {
    main.style.setProperty('--swatch', color);
    main.dataset.dark = isDark(color) ? '1' : '0';
    tag.textContent = name + ' · No. 0' + (['Cream','Marine','Argile','Corail'].indexOf(name)+1);
    label.textContent = 'Aura V2 · ' + name;
    if (isDark(color)) {
      label.style.background = 'rgba(8,18,42,0.5)';
      label.style.color = '#F4EFE7';
      label.style.borderColor = 'rgba(255,255,255,0.15)';
    } else {
      label.style.background = '';
      label.style.color = '';
      label.style.borderColor = '';
    }
    colorName.textContent = name;
    sticky.style.background = color;
    stickyCol.textContent = name;
    sticky_sw.forEach(s => s.classList.toggle('active', s.dataset.color === color));
    swatches.forEach(s => s.classList.toggle('active', s.dataset.color === color));
  }
  swatches.forEach(s => s.addEventListener('click', () => setColor(s.dataset.color, s.dataset.name)));
  sticky_sw.forEach(s => s.addEventListener('click', () => setColor(s.dataset.color, s.dataset.name)));
  thumbs.forEach(t => t.addEventListener('click', () => {
    thumbs.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    if (t.dataset.color && t.dataset.name && t.dataset.name !== 'Detail') {
      setColor(t.dataset.color, t.dataset.name);
    }
  }));

  // Sizes
  const sizes = document.querySelectorAll('#sizes .size');
  const stickySize = document.getElementById('sticky-size');
  sizes.forEach(s => s.addEventListener('click', () => {
    sizes.forEach(x => x.classList.remove('active'));
    s.classList.add('active');
    stickySize.textContent = s.querySelector('.sz').textContent + ' · ' + s.querySelector('.eu').textContent.replace('EU ','');
  }));

  // Packs
  const packs = document.querySelectorAll('#packs .pack');
  const atcPrice = document.getElementById('atc-price');
  const stickyPrice = document.getElementById('sticky-price');
  const stickyWas = document.querySelector('#sticky-atc .price .was');
  packs.forEach(p => p.addEventListener('click', () => {
    packs.forEach(x => x.classList.remove('active'));
    p.classList.add('active');
    if (atcPrice) atcPrice.textContent = p.dataset.price + ' €';
    if (stickyPrice) stickyPrice.textContent = p.dataset.price + ' €';
    if (stickyWas) {
      if (p.dataset.was !== p.dataset.price) {
        stickyWas.textContent = p.dataset.was + ' €';
        stickyWas.style.display = '';
      } else {
        stickyWas.style.display = 'none';
      }
    }
  }));
})();

// ============ Announcement bar: rotate the promo on small screens ============
(function(){
  var bar = document.querySelector('.announce');
  if (!bar) return;
  var msgs = bar.querySelectorAll('.announce-msg');
  if (msgs.length < 2) return;
  var i = 0;
  if (!bar.querySelector('.announce-msg.is-active')) msgs[0].classList.add('is-active');
  var mq = window.matchMedia('(max-width: 749px)');
  setInterval(function(){
    if (!mq.matches) return;   // desktop shows all messages inline — only rotate on phone
    msgs[i].classList.remove('is-active');
    i = (i + 1) % msgs.length;
    msgs[i].classList.add('is-active');
  }, 4000);
})();

// ============ Carousel arrows (reviews + personas) ============
function auraCarousel(trackId, prevId, nextId, step){
  const track = document.getElementById(trackId);
  const prev  = document.getElementById(prevId);
  const next  = document.getElementById(nextId);
  if (!track || !prev || !next) return;
  prev.addEventListener('click', () => track.scrollBy({ left: -step, behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left:  step, behavior: 'smooth' }));
}
auraCarousel('reviews-track', 'rev-prev', 'rev-next', 400);
auraCarousel('personas', 'personas-prev', 'personas-next', 360);

// ============ FAQ accordion ============
(function(){
  document.querySelectorAll('#faq-list .faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (item.classList.contains('open')) a.style.maxHeight = a.scrollHeight + 'px';
    q.addEventListener('click', () => {
      const willOpen = !item.classList.contains('open');
      document.querySelectorAll('#faq-list .faq-item').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-a').style.maxHeight = '0';
      });
      if (willOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
})();

// ============ Sticky ATC ============
// Persistent buy bar: once the main buy box has scrolled past, the bar slides up
// and stays visible for the whole "shopping zone", then tucks away near the
// footer so it never covers the footer content. (Trimmed to ~64px and shaped as
// a floating pill, so it stays out of the way while remaining reachable.)
(function(){
  const atc = document.getElementById('sticky-atc');
  const trigger = document.getElementById('product');
  const footer = document.querySelector('footer');
  if (!atc || !trigger) return;

  // Desktop: the buy box is tall (pair picker open), so the main « Ajouter » can
  // start below the fold — show the bar whenever that button is off-screen
  // (above OR below). Phone: unchanged — only once the buy box has scrolled past.
  const mainAtc = document.querySelector('[data-aura-atc]');
  const desktop = window.matchMedia('(min-width: 750px)');
  function atcOffscreen() {
    if (!mainAtc) return false;
    const r = mainAtc.getBoundingClientRect();
    return r.top > window.innerHeight || r.bottom < 0;
  }
  function inZone() {
    const vh = window.innerHeight;
    const beforeFooter = footer ? footer.getBoundingClientRect().top > vh * 0.95 : true;
    if (desktop.matches) return atcOffscreen() && beforeFooter;
    const pastBuyBox = trigger.getBoundingClientRect().bottom < vh * 0.4;
    return pastBuyBox && beforeFooter;
  }

  function update() { atc.classList.toggle('show', inZone()); }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

// Cart drawer is handled by assets/aura-cart.js (real Shopify AJAX cart).
