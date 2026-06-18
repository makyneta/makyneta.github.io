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
