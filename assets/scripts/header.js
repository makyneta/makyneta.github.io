(function () {
  const btn = document.getElementById('mobile-menu-toggle-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  const close = () => {
    btn.classList.remove('active');
    menu.classList.remove('active');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    btn.setAttribute('aria-expanded', 'false');
  };

  const open = () => {
    btn.classList.add('active');
    menu.classList.add('active');
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    btn.setAttribute('aria-expanded', 'true');
  };

  const isOpen = () => menu.classList.contains('active');

  document.addEventListener('click', function (e) {
    if (e.target.closest('#mobile-menu-toggle-btn')) {
      isOpen() ? close() : open();
      return;
    }
    if (e.target.closest('#mobile-menu a')) return close();
    if (e.target === menu) return close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) close();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && isOpen()) close();
  });
})();
