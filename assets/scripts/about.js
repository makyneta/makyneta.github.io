    window.addEventListener('scroll', () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
      document.getElementById('progress').style.width = Math.min(pct, 100) + '%';
    });
 
    const cursor = document.getElementById('cursor');
    const ring   = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    });
    (function animRing() {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(animRing);
    })();
    document.querySelectorAll('a, .cert-btn, .contact-pill, .client-card, .tech-card, .stat-cell, .timeline-item').forEach(el => {
      el.addEventListener('mouseenter', () => { ring.style.width = '60px'; ring.style.height = '60px'; ring.style.borderColor = 'rgba(201,168,76,0.75)'; });
      el.addEventListener('mouseleave', () => { ring.style.width = '36px'; ring.style.height = '36px'; ring.style.borderColor = 'rgba(201,168,76,0.4)'; });
    });
 
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
 
    const modal    = document.getElementById('cert-modal');
    const modalImg = document.getElementById('full-cert-img');
    document.querySelectorAll('.cert-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const src = btn.getAttribute('data-cert');
        if (!src) return;
        modalImg.src = src;
        modal.classList.add('active');
        setTimeout(() => modal.classList.add('open'), 10);
        document.body.style.overflow = 'hidden';
      });
    });
    const closeModal = () => {
      modal.classList.remove('open');
      setTimeout(() => { modal.classList.remove('active'); document.body.style.overflow = ''; }, 450);
    };
    document.querySelector('.modal-close').onclick = closeModal;
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
