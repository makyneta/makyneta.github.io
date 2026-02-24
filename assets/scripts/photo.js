document.addEventListener('DOMContentLoaded', () => {

  /* ── CURSOR ── */
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');

  if (cursor && ring) {
    let mx=0, my=0, rx=0, ry=0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
    });

    (function loop() {
      rx += (mx - rx) * .12;
      ry += (my - ry) * .12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(loop);
    })();

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width  = '18px';
        cursor.style.height = '18px';
        ring.style.width    = '56px';
        ring.style.height   = '56px';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width  = '10px';
        cursor.style.height = '10px';
        ring.style.width    = '36px';
        ring.style.height   = '36px';
      });
    });
  }

  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05 });

    revealEls.forEach(el => obs.observe(el));
  }

  /* ── SLIDESHOW ── */
  const slides   = document.querySelectorAll('.hero-slide');
  const dotsWrap = document.getElementById('hero-dots');

  if (slides.length && dotsWrap) {
    let current = 0;
    let timer   = null;

    slides.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'hero-dot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    });

    function goTo(idx) {
      const dots = dotsWrap.querySelectorAll('.hero-dot');
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = idx;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
      resetTimer();
    }

    function next() { goTo((current + 1) % slides.length); }

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(next, 5000);
    }

    resetTimer();
  }

});