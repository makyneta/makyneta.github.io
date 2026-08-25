// =========================================================
// MAKYNETA — shared behavior across all pages
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  loadPartial('/assets/ui/header/music.html', '#header', initHeader);
  loadPartial('/assets/ui/footer/music.html', '#footer', initFooter);
  animateHeroName();
  buildWaveforms();
  setupScrollReveal();
});

/* Fetches an HTML fragment and injects it into the target element.
   Falls back silently if the fragment isn't reachable (e.g. opened
   from the filesystem without a local server) so the page still works. */
function loadPartial(url, targetSelector, onLoaded) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`${url} responded with ${res.status}`);
      return res.text();
    })
    .then(html => {
      target.innerHTML = html;
      if (typeof onLoaded === 'function') onLoaded(target);
    })
    .catch(() => {
      // Fragment not reachable (e.g. file:// without a dev server).
      // Leave the slot empty rather than breaking the page.
    });
}

/* Wires up the injected header: scroll state, active link, mobile overlay */
function initHeader(target) {
  const header = target.querySelector('[data-header]');
  if (!header) return;

  buildWaveforms(header);
  markActiveNav(header);

  const toggle = header.querySelector('[data-nav-toggle]');
  const overlay = header.querySelector('[data-nav-overlay]');
  if (toggle && overlay) {
    toggle.addEventListener('click', () => {
      const isOpen = overlay.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        overlay.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* Wires up the injected footer: current year, active link */
function initFooter(target) {
  buildWaveforms(target);
  markActiveNav(target);
  const yearEl = target.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* Highlights the nav link matching the current page filename */
function markActiveNav(scope) {
  const current = (location.pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index';
  scope.querySelectorAll('[data-nav]').forEach(link => {
    if (link.dataset.nav === current) link.classList.add('is-active');
  });
}

/* Splits the hero name into letters and animates them in sequence */
function animateHeroName() {
  const el = document.querySelector('[data-hero-name]');
  if (!el) return;
  const text = el.textContent.trim();
  el.textContent = '';
  [...text].forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.animationDelay = `${0.03 * i}s`;
    el.appendChild(span);
  });
}

/* Generates the bar elements for any .waveform that doesn't have them yet */
function buildWaveforms(root = document) {
  root.querySelectorAll('.waveform').forEach(wf => {
    if (wf.children.length) return;
    const bars = wf.classList.contains('mini') ? 9 : 12;
    for (let i = 0; i < bars; i++) {
      wf.appendChild(document.createElement('span'));
    }
  });
}

/* Observes .reveal / .reveal-stagger elements and adds is-visible on entering the viewport */
function setupScrollReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!('IntersectionObserver' in window) || !targets.length) {
    targets.forEach(t => t.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(t => io.observe(t));
}