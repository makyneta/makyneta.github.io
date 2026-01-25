document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('page-loader');
    const statusText = document.getElementById('loader-status');
    const body = document.body;
    
    // Verifica se o Popup de Boas Vindas existe na página
    const welcomePopup = document.getElementById('welcome-overlay');

    // Função para remover o loader
    function dismissLoader() {
        // Atualiza texto para "System Ready"
        if(statusText) statusText.innerText = "LOADED";
        
        // Pequeno delay para o utilizador ver o "Ready"
        setTimeout(() => {
            loader.classList.add('loaded');
            
            // Remove do DOM após a animação para performance
            setTimeout(() => {
                loader.style.display = 'none';
            }, 600);
        }, 300);
    }

    // 1. EVENTO PRINCIPAL: Quando a página está TOTALMENTE carregada
    window.addEventListener('load', () => {
        
        // Se não houver popup de boas vindas (páginas interiores), removemos o loader imediatamente
        if (!welcomePopup) {
            dismissLoader();
            // Libertar o scroll caso tenha ficado preso
            body.classList.remove('no-scroll'); 
        } 
        // Se o popup de boas vindas ESTIVER presente
        else {
            // O popup fica por cima do loader. 
            // Opcionalmente podemos querer manter o loader lá atrás como fundo,
            // ou removê-lo para deixar o fundo escuro simples.
            // Vamos removê-lo suavemente para o popup ter destaque total.
            dismissLoader();
        }
    });

    // 2. Fallback de segurança (caso o load demore demais ou falhe)
    setTimeout(() => {
        if (!loader.classList.contains('loaded')) {
            if(statusText) statusText.innerText = "FORCING LOAD...";
            dismissLoader();
        }
    }, 5000); // Segurança de 5 segundos

    // 3. Integração com o Motion Toggle (caso queiras desligar animações do loader também)
    const motionToggle = document.getElementById('reduce-motion-toggle');
    if(motionToggle) {
        motionToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                body.classList.add('motion-off');
            } else {
                body.classList.remove('motion-off');
            }
        });
    }
});