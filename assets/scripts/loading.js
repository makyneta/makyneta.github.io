  /* Loader */
  const loader = document.getElementById('loader');
  const countEl = document.getElementById('loaderCount');
  let n = 0;
  const tick = setInterval(() => {
    n = Math.min(n + Math.floor(Math.random()*12)+4, 100);
    countEl.textContent = String(n).padStart(3,'0');
    if (n >= 100) {
      clearInterval(tick);
      loader.classList.add('filling');
      setTimeout(() => loader.classList.add('hidden'), 1800);
    }
  }, 40);

  /* Scroll reveal */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal, .discipline-card').forEach(el => obs.observe(el));