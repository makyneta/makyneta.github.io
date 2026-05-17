    /* ── Progress ── */
    window.addEventListener('scroll', () => {
      document.getElementById('bar').style.width =
        Math.min(window.scrollY / (document.documentElement.scrollHeight - innerHeight) * 100, 100) + '%';
    });
 
    /* ── Cursor ── */
    const cx = document.getElementById('cx'), cy = document.getElementById('cy');
    let mx=0,my=0,rx=0,ry=0;
    document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cx.style.left=mx+'px'; cx.style.top=my+'px'; });
    (function a(){ rx+=(mx-rx)*.11; ry+=(my-ry)*.11; cy.style.left=rx+'px'; cy.style.top=ry+'px'; requestAnimationFrame(a); })();
    document.querySelectorAll('a, button, .svc-chip').forEach(el => {
      el.addEventListener('mouseenter', () => { cy.style.width='52px'; cy.style.height='52px'; cy.style.borderColor='rgba(200,164,80,.7)'; });
      el.addEventListener('mouseleave', () => { cy.style.width='32px'; cy.style.height='32px'; cy.style.borderColor='rgba(200,164,80,.32)'; });
    });
 
    /* ── Reveal ── */
    const ro = new IntersectionObserver(
      entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: .06 }
    );
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
 
    /* ── Service chips ── */
    document.querySelectorAll('.svc-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const wasActive = chip.classList.contains('picked');
        document.querySelectorAll('.svc-chip').forEach(c => c.classList.remove('picked'));
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
      btn.querySelector('span').textContent = 'Sending…';
      status.className = 'form-status'; status.textContent = '';
 
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          status.textContent = '✓ Message sent — I\'ll get back to you shortly.';
          status.classList.add('success', 'show');
          form.reset();
          document.querySelectorAll('.svc-chip').forEach(c => c.classList.remove('picked'));
          document.getElementById('f-service').value = '';
          btn.querySelector('span').textContent = 'Message Sent';
        } else {
          throw new Error();
        }
      } catch {
        status.textContent = '✗ Something went wrong. Try WhatsApp or email directly.';
        status.classList.add('error', 'show');
        btn.disabled = false;
        btn.querySelector('span').textContent = 'Send Message';
      }
    });
