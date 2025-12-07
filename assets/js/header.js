// =========================================================
// 1. Lógica para Dropdowns de Desktop (Hover + Clique Fora) - MANTIDO
// =========================================================

const desktopPortfolioContainer = document.getElementById('desktop-portfolio-container');
const desktopPortfolioMenu = document.getElementById('desktop-portfolio-menu');
const desktopPortfolioArrow = document.getElementById('desktop-portfolio-arrow');

if (desktopPortfolioContainer && desktopPortfolioMenu && desktopPortfolioArrow) {

    const openDropdown = () => {
        // Fechar outros menus abertos (garantindo que não há conflito)
        document.querySelectorAll('[id^="desktop-"][id$="-menu"]').forEach(m => {
            if (m.id !== 'desktop-portfolio-menu' && m.classList.contains('opacity-100')) {
                m.classList.remove('opacity-100');
                m.classList.add('opacity-0', 'invisible', 'scale-95');
                const otherArrow = document.getElementById(m.id.replace('-menu', '-arrow'));
                if (otherArrow) otherArrow.classList.remove('rotate-180');
            }
        });

        // Abrir o menu atual
        desktopPortfolioMenu.classList.add('opacity-100');
        desktopPortfolioMenu.classList.remove('opacity-0', 'invisible', 'scale-95');
        desktopPortfolioArrow.classList.add('rotate-180');
    };

    const closeDropdown = () => {
        // Fechar o menu atual
        desktopPortfolioMenu.classList.remove('opacity-100');
        desktopPortfolioMenu.classList.add('opacity-0', 'invisible', 'scale-95');
        desktopPortfolioArrow.classList.remove('rotate-180');
    };

    // Abre no mouseenter e fecha no mouseleave
    desktopPortfolioContainer.addEventListener('mouseenter', openDropdown);
    desktopPortfolioContainer.addEventListener('mouseleave', closeDropdown);

    // Fecha quando o usuário clica fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#desktop-portfolio-container')) {
            closeDropdown();
        }
    });
}

// --------------------------------------------------------------------------------------------------
// 2. Lógica Mobile (Hambúrguer e Sidebar) - CORRIGIDO
// --------------------------------------------------------------------------------------------------

const menuButton = document.getElementById('mobile-menu-toggle-btn'); 
const navMenu = document.getElementById('mobile-sidebar-nav'); 
const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
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

    // 3. Fechar ao clicar em um Link de Navegação (exceto no botão toggle do dropdown)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Se não for o botão Portfolio, fecha o menu inteiro
            if (link.id !== 'mobile-portfolio-toggle') {
                toggleMobileMenu(false);
            }
        });
    });
}

// =========================================================
// 3. Lógica para Dropdowns de Mobile (Alterna display por Clique) - MANTIDO
// =========================================================
function toggleMobileDropdown(buttonId, menuId, arrowId) {
    const button = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);
    const arrow = document.getElementById(arrowId);

    if (!button || !menu || !arrow) return;

    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            menu.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)';
            button.setAttribute('aria-expanded', 'false');
        } else {
            menu.style.display = 'block'; 
            arrow.style.transform = 'rotate(180deg)';
            button.setAttribute('aria-expanded', 'true');
        }
    });
    
    // Configuração inicial
    if (button.getAttribute('aria-expanded') === 'true') {
        menu.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    } else {
        menu.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
}

toggleMobileDropdown('mobile-portfolio-toggle', 'mobile-portfolio-menu', 'mobile-portfolio-arrow');