// --------------------------------------------------------------------------------------------------
// Lógica Mobile (Hambúrguer e Sidebar) - CORRIGIDO
// --------------------------------------------------------------------------------------------------

const menuButton = document.getElementById('mobile-menu-toggle-btn'); 
const navMenu = document.getElementById('mobile-sidebar-nav'); 
const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
// navLinks agora inclui todos os links, exceto o toggle que foi removido
const navLinks = navMenu ? navMenu.querySelectorAll('.mobile-nav-link') : []; 

function toggleMobileMenu(isOpen) {
    const shouldOpen = isOpen !== undefined ? isOpen : !menuButton.classList.contains('active');

    if (shouldOpen) {
        menuButton.classList.add('active'); 
        navMenu.classList.add('active'); 
        mobileMenuBackdrop.style.display = 'block';
        setTimeout(() => { mobileMenuBackdrop.style.opacity = '1'; }, 10);
        document.body.classList.add('overflow-hidden');
    } else {
        menuButton.classList.remove('active');
        navMenu.classList.remove('active'); 
        mobileMenuBackdrop.style.opacity = '0';
        setTimeout(() => { mobileMenuBackdrop.style.display = 'none'; }, 300);
        document.body.classList.remove('overflow-hidden');
    }
}

// Event Listeners Mobile
if (menuButton && navMenu) {
    // 1. Clique no Hambúrguer (Abre/Fecha Sidebar)
    menuButton.addEventListener('click', (e) => {
        e.stopPropagation(); 
        toggleMobileMenu();
    });
    
    // 2. Fechar pelo backdrop (clicar fora do menu lateral)
    mobileMenuBackdrop.addEventListener('click', () => toggleMobileMenu(false));

    // 3. Fechar ao clicar em um Link de Navegação (Agora fecha sempre, pois não há dropdown)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove a verificação do dropdown toggle e fecha o menu sempre
            toggleMobileMenu(false); 
        });
    });
}