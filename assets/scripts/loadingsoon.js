document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('page-loader');
    const statusText = document.getElementById('loader-status');
    const body = document.body;
    
    // Verifica se o Popup de Boas Vindas existe na página
    const welcomePopup = document.getElementById('welcome-overlay');

    // Função para remover o loader
    function dismissLoader() {
        // Atualiza texto para "System Ready"
        if(statusText) statusText.innerText = "SYSTEM READY";
        
        // Pequeno delay para o utilizador ver o "Ready"
        setTimeout(() => {
            loader.classList.add('loaded');
            
            // Remove do DOM após a animação para performance
            setTimeout(() => {
                loader.style.display = 'none';
            }, 600);
        }, 300);
    }
});