// Usamos este formato para garantir que funciona mesmo com o fetch do header
document.addEventListener('click', function (event) {
    const menuBtn = document.getElementById('mobile-menu-toggle-btn');
    const sidebar = document.getElementById('mobile-sidebar-nav');
    const backdrop = document.getElementById('mobile-menu-backdrop');

    // Lógica para Abrir/Fechar o Menu
    if (event.target.closest('#mobile-menu-toggle-btn') || event.target.closest('#mobile-menu-backdrop')) {
        const isOpening = !sidebar.classList.contains('active');
        
        if (isOpening) {
            menuBtn.classList.add('active');
            sidebar.classList.add('active');
            backdrop.classList.remove('hidden');
            // Timeout pequeno para a transição de opacidade funcionar
            setTimeout(() => backdrop.classList.add('visible'), 10);
            document.body.style.overflow = 'hidden'; // Trava o scroll
        } else {
            menuBtn.classList.remove('active');
            sidebar.classList.remove('active');
            backdrop.classList.remove('visible');
            setTimeout(() => backdrop.classList.add('hidden'), 300);
            document.body.style.overflow = ''; // Liberta o scroll
        }
    }

    // Fechar ao clicar num link de navegação mobile
    if (event.target.closest('.mobile-nav-link')) {
        menuBtn.classList.remove('active');
        sidebar.classList.remove('active');
        backdrop.classList.remove('visible');
        setTimeout(() => backdrop.classList.add('hidden'), 300);
        document.body.style.overflow = '';
    }
});