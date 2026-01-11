document.addEventListener('DOMContentLoaded', () => {
    
    const banner = document.getElementById('cookieBanner');
    const btnAcceptAll = document.getElementById('btnAcceptAll');
    const btnEssential = document.getElementById('btnEssential');
    const savedMsg = document.getElementById('cookieSavedMsg'); // Mensagem na página de cookies

    // Verifica se estamos na página de Cookies ou no site normal
    const isCookiesPage = window.location.pathname.includes('cookies.html');
    
    // Verifica consentimento guardado
    const consentStatus = localStorage.getItem('cookieConsent');

    function showBanner() {
        // Se estiver na página de cookies, usamos 'block', se for popup, removemos o translate-y
        if (isCookiesPage) {
            banner.style.display = 'block';
        } else {
            banner.classList.remove('translate-y-full', 'pointer-events-none');
        }
    }

    function hideBanner() {
        if (isCookiesPage) {
            banner.style.display = 'none';
            // Se estivermos na página, mostra mensagem de sucesso
            if (savedMsg) savedMsg.classList.remove('hidden');
        } else {
            banner.classList.add('translate-y-full', 'pointer-events-none');
        }
    }

    // --- LÓGICA DE ATIVAÇÃO DE COOKIES ---
    function loadAnalytics() {
        console.log("🍪 Google Analytics carregado.");
        // Aqui colocas o teu gtag('config', 'G-XXXXX');
    }

    function setConsent(type) {
        localStorage.setItem('cookieConsent', type);
        hideBanner();

        if (type === 'all') {
            loadAnalytics();
        } else {
            console.log("🍪 Apenas cookies essenciais.");
        }
    }

    // --- EVENTOS DOS BOTÕES ---
    btnAcceptAll.addEventListener('click', () => {
        setConsent('all');
    });

    btnEssential.addEventListener('click', () => {
        setConsent('essential');
    });

    // --- LÓGICA DE INICIALIZAÇÃO ---
    
    if (isCookiesPage) {
        // Se estamos na página de cookies, mostra sempre o banner para permitir alteração
        // Mas pode esconder se quiseres que só apareça se ainda não tiver escolha (descomenta abaixo)
        showBanner(); 
    } else {
        // Se estamos noutra página:
        if (!consentStatus) {
            setTimeout(showBanner, 1000);
        } else if (consentStatus === 'all') {
            loadAnalytics();
        }
    }
});