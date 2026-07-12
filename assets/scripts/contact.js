    /* ── Progress ── */
    window.addEventListener('scroll', () => {
      document.getElementById('bar').style.width =
        Math.min(window.scrollY / (document.documentElement.scrollHeight - innerHeight) * 100, 100) + '%';
    });

    /* ── Reveal ── */
    const ro = new IntersectionObserver(
      entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: .06 }
    );
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

    /* ── Service chips ── */
    document.querySelectorAll('.cf-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const wasActive = chip.classList.contains('picked');
        document.querySelectorAll('.cf-chip').forEach(c => c.classList.remove('picked'));
        if (!wasActive) {
          chip.classList.add('picked');
          document.getElementById('f-service').value = chip.dataset.val;
        } else {
          document.getElementById('f-service').value = '';
        }
      });
    });

    /* ── Form submit (Formspree async) ── */
    const form   = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    const btn    = document.getElementById('submit-btn');

    form.addEventListener('submit', async e => {
      e.preventDefault();
      btn.disabled = true;
      btn.querySelector('span').textContent = 'A enviar\u2026';
      status.className = 'form-status'; status.textContent = '';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          status.textContent = '\u2713 Mensagem enviada \u2014 responderei em breve.';
          status.classList.add('success', 'show');
          form.reset();
          document.querySelectorAll('.cf-chip').forEach(c => c.classList.remove('picked'));
          document.getElementById('f-service').value = '';
          btn.querySelector('span').textContent = 'Mensagem Enviada';
        } else {
          throw new Error();
        }
      } catch {
        status.textContent = '\u2717 Algo correu mal. Tenta WhatsApp ou email diretamente.';
        status.classList.add('error', 'show');
        btn.disabled = false;
        btn.querySelector('span').textContent = 'Enviar Mensagem';
      }
    });
