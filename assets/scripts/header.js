document.addEventListener('click', function (e) {
  const btn = document.getElementById('mobile-menu-toggle-btn');
  const sidebar = document.getElementById('mobile-sidebar-nav');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  if (!btn || !sidebar || !backdrop) return;

  const close = () => {
    btn.classList.remove('active');
    sidebar.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.classList.remove('menu-open');
  };

  const open = () => {
    btn.classList.add('active');
    sidebar.classList.add('active');
    backdrop.classList.add('active');
    document.body.classList.add('menu-open');
  };

  // Toggle on hamburger click
  if (e.target.closest('#mobile-menu-toggle-btn')) {
    return sidebar.classList.contains('active') ? close() : open();
  }

  // Close on backdrop click
  if (e.target.closest('#mobile-menu-backdrop')) {
    return close();
  }

  // Close on link click
  if (e.target.closest('#mobile-sidebar-nav a')) {
    close();
  }
});