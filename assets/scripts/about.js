      window.addEventListener('scroll', () => {
        const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
        document.getElementById('progress').style.width = Math.min(pct, 100) + '%';
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

      function animateCounter(el) {
        const raw = el.textContent.replace(/[+\-×a-zA-Z]/g, '').trim();
        const suffix = el.textContent.replace(/[\d]/g, '').trim();
        const target = parseInt(raw, 10);
        if (isNaN(target) || target < 1) return;
        el.textContent = '0' + suffix;
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 40));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current + suffix;
        }, 40);
      }
      const counterObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && !e.target.dataset.counted) {
            e.target.dataset.counted = '1';
            animateCounter(e.target);
          }
        });
      }, { threshold: 0.5 });
      document.querySelectorAll('.stat-num').forEach(el => counterObs.observe(el));
