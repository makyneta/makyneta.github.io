// =========================================================
// Lógica para Dropdowns de Desktop (Click-only)
// =========================================================
function toggleDesktopDropdown(buttonId, menuId, arrowId) {
    const button = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);
    const arrow = document.getElementById(arrowId);

    if (!button || !menu || !arrow) return;

    button.addEventListener('click', (e) => {
        e.stopPropagation();

        const isOpen = menu.classList.contains('opacity-100');

        // Fecha outros menus se estiverem abertos
        // A lógica foi simplificada pois agora há apenas um dropdown
        document.querySelectorAll('[id^="desktop-"][id$="-menu"]').forEach(m => {
            if (m.id !== menuId && m.classList.contains('opacity-100')) {
                m.classList.remove('opacity-100');
                m.classList.add('opacity-0', 'invisible', 'scale-95');
                document.getElementById(m.id.replace('-menu', '-arrow')).classList.remove('rotate-180');
            }
        });

        // Alterna o estado do menu atual
        if (isOpen) {
            menu.classList.remove('opacity-100');
            menu.classList.add('opacity-0', 'invisible', 'scale-95');
            arrow.classList.remove('rotate-180');
        } else {
            menu.classList.add('opacity-100');
            menu.classList.remove('opacity-0', 'invisible', 'scale-95');
            arrow.classList.add('rotate-180');
        }
    });

    // Fechar ao clicar em um link dentro do dropdown
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('opacity-0', 'invisible', 'scale-95');
            arrow.classList.remove('rotate-180');
        });
    });
}

// Inicializa o novo dropdown Portfolio
toggleDesktopDropdown('desktop-portfolio-toggle', 'desktop-portfolio-menu', 'desktop-portfolio-arrow');

// Fechar Menus de Desktop quando o usuário clicar fora (Geral)
document.addEventListener('click', (e) => {
    // Agora só precisamos verificar o menu 'portfolio'
    const isClickInsideDesktopMenu = e.target.closest('[id^="desktop-"]');

    if (!isClickInsideDesktopMenu) {
        document.querySelectorAll('[id^="desktop-"][id$="-menu"]').forEach(menu => {
            menu.classList.add('opacity-0', 'invisible', 'scale-95');
            // A verificação `[id^="desktop-"]` pega o novo ID 'desktop-portfolio-arrow' corretamente
            document.getElementById(menu.id.replace('-menu', '-arrow')).classList.remove('rotate-180');
        });
    }
});


// =========================================================
// Lógica para Menu Hambúrguer (Mobile) - Sidebar (Sem alteração)
// =========================================================
const hamburgerButton = document.getElementById('hamburger-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
const closeMenuSidebarButton = document.getElementById('close-menu-sidebar-button');
const menuOpenIcon = document.getElementById('menu-open-icon');
const menuCloseIcon = document.getElementById('menu-close-icon');

// Função para abrir/fechar o menu mobile
function toggleMobileMenu(isOpen) {
    const shouldOpen = isOpen !== undefined ? isOpen : mobileMenu.classList.contains('translate-x-full');

    if (shouldOpen) {
        // Abrir
        mobileMenu.classList.remove('translate-x-full');
        mobileMenuBackdrop.classList.remove('invisible', 'opacity-0');
        mobileMenuBackdrop.classList.add('visible', 'opacity-100');
        menuOpenIcon.classList.add('hidden');
        menuCloseIcon.classList.remove('hidden');
        document.body.classList.add('overflow-hidden'); // Impede scroll no corpo
    } else {
        // Fechar
        mobileMenu.classList.add('translate-x-full');
        mobileMenuBackdrop.classList.remove('visible', 'opacity-100');
        mobileMenuBackdrop.classList.add('invisible', 'opacity-0');
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
}

// Event Listeners
hamburgerButton.addEventListener('click', () => toggleMobileMenu());
closeMenuSidebarButton.addEventListener('click', () => toggleMobileMenu(false));
mobileMenuBackdrop.addEventListener('click', () => toggleMobileMenu(false)); // Fecha ao clicar no fundo

// Fechar Menu Mobile ao clicar em links (exceto botões de dropdown)
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        toggleMobileMenu(false);
    });
});

// Lógica para Dropdowns de Mobile (Alterna classes 'hidden'/'flex' no menu)
function toggleMobileDropdown(buttonId, menuId, arrowId) {
    const button = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);
    const arrow = document.getElementById(arrowId);

    if (!button || !menu || !arrow) return;

    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
        arrow.classList.toggle('rotate-180');
    });
}

// Inicializa o novo dropdown Portfolio (Mobile)
toggleMobileDropdown('mobile-portfolio-toggle', 'mobile-portfolio-menu', 'mobile-portfolio-arrow');