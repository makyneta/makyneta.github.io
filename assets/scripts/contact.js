  /* Scroll reveal */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  /* Form async submit (Formspree) */
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('.submit-btn');
    btn.style.opacity = '0.6'; btn.style.pointerEvents = 'none';
    status.className = 'form-status'; status.textContent = '';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        status.textContent = '✓ Message sent — I\'ll get back to you shortly.';
        status.classList.add('form-status', 'success', 'visible');
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      status.textContent = '✗ Something went wrong. Please try again or use a direct channel.';
      status.classList.add('form-status', 'error', 'visible');
    }

    btn.style.opacity = ''; btn.style.pointerEvents = '';
  });