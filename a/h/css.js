document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================
    // Lógica para Header Fixo e Estilizado ao Rolar (Scroll)
    // =========================================================
    const header = document.getElementById('main-header');
    
    // Classes Tailwind para o estado 'rolado' (scrolled)
    const scrolledClasses = [
        'bg-gray-900',
        'bg-opacity-95',
        'shadow-xl',
        'py-3',
        'top-0',
        'mx-0',
        'rounded-none'
    ];
    
    // Classes Tailwind originais para o estado 'topo'
    const topClasses = [
        'py-4', 
        'mx-4', 
        'top-4', 
        'rounded-xl'
    ];

    if (header) {
        function handleScroll() {
            if (window.scrollY > 1) {
                // Ao rolar: Adiciona classes de rolagem e remove classes de topo
                header.classList.add(...scrolledClasses);
                header.classList.remove(...topClasses);
            } else {
                // No topo: Adiciona classes de topo e remove classes de rolagem
                header.classList.remove(...scrolledClasses);
                header.classList.add(...topClasses);
            }
        }

        handleScroll();  
        window.addEventListener('scroll', handleScroll);
    }
});  