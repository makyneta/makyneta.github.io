    /* ── Progress ── */
    window.addEventListener('scroll', () => {
      document.getElementById('bar').style.width =
        Math.min(window.scrollY / (document.documentElement.scrollHeight - innerHeight) * 100, 100) + '%';
    });


