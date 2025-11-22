document.addEventListener("DOMContentLoaded", function() {
    
    const btnScrollToTop = document.getElementById("scroll-to-top");

    if (btnScrollToTop) {
        
        btnScrollToTop.addEventListener("click", function(event) {
            event.preventDefault(); // Sem # na URL
            scrollToTopSmoothly();  // Inicia a função segura
        });

        // Mostrar/Esconder botão
        window.addEventListener("scroll", function() {
            if (window.scrollY > 300) {
                btnScrollToTop.classList.add("show");
            } else {
                btnScrollToTop.classList.remove("show");
            }
        });
    }

    // --- FUNÇÃO DE ROLAGEM SEGURA ---
    function scrollToTopSmoothly() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        // Se já estivermos muito perto do topo (menos de 5px), paramos tudo.
        // ISSO EVITA O BLOQUEIO DO SCROLL.
        if (currentScroll < 5) {
            window.scrollTo(0, 0);
            return; // Encerra a função aqui!
        }

        // Caso contrário, continua a animar
        window.requestAnimationFrame(scrollToTopSmoothly);
        
        // Velocidade da animação (aumente o 8 para ficar mais lento, diminua para mais rápido)
        window.scrollTo(0, currentScroll - (currentScroll / 8));
    }
});