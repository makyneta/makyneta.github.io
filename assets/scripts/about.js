  /* ── Scroll reveal ── */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  /* ── Certificate modal ── */
  const modal    = document.getElementById('cert-modal');
  const modalImg = document.getElementById('full-cert-img');
  const closeBtn = document.querySelector('.modal-close');

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
    setTimeout(() => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }, 300);
  };

  closeBtn.onclick = closeModal;
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });