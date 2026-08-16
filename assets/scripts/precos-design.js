/* ── Progress ── */
window.addEventListener('scroll', function () {
  var b = document.getElementById('bar');
  if (!b) return;
  b.style.width =
    Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100, 100) + '%';
});

/* ── Reveal ── */
var ro = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  },
  { threshold: 0.06 }
);
document.querySelectorAll('.reveal').forEach(function (el) { ro.observe(el); });

/* Staggered card entrance */
var cards = document.querySelectorAll('.plan-card');
var cro = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        setTimeout(function () { e.target.classList.add('card-visible'); }, e.target.dataset.delay || 0);
        cro.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);
cards.forEach(function (el, i) { el.dataset.delay = i * 120; cro.observe(el); });

/* ── Price toggle: Promo 2026 / Normal ── */
var btnPromo = document.getElementById('toggle-promo');
var btnNormal = document.getElementById('toggle-normal');
var hint = document.getElementById('toggle-hint');

function setMode(mode) {
  document.querySelectorAll('.plan-price').forEach(function (el) {
    var promo = parseInt(el.dataset.promo, 10);
    var normal = parseInt(el.dataset.normal, 10);
    var strike = el.parentNode.querySelector('.price-strike');

    if (mode === 'promo') {
      el.textContent = promo + '€';
      if (promo < normal) {
        strike.textContent = normal + '€';
        strike.style.display = '';
      } else {
        strike.style.display = 'none';
      }
    } else {
      el.textContent = normal + '€';
      strike.style.display = 'none';
    }
  });

  btnPromo.classList.toggle('active', mode === 'promo');
  btnNormal.classList.toggle('active', mode === 'normal');
  hint.textContent = mode === 'promo' ? 'até 31 dez 2026' : 'preço sem promoção';
}

btnPromo.addEventListener('click', function () { setMode('promo'); });
btnNormal.addEventListener('click', function () { setMode('normal'); });
