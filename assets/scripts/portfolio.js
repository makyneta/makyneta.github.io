  /* ── Filter ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const sections   = document.querySelectorAll('.category-section');
  const marquee    = document.querySelector('.marquee-divider');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const f = btn.dataset.filter;
      sections.forEach(sec => {
        if (f === 'all' || sec.dataset.category === f) {
          sec.classList.remove('hidden');
        } else {
          sec.classList.add('hidden');
        }
      });
      // hide marquee when filtering
      if (marquee) marquee.style.display = f === 'all' ? '' : 'none';
    });
  });