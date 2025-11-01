document.addEventListener('DOMContentLoaded', function() {
    // --- Elementos de UI ---
    const preloader = document.getElementById('preloader');
    
    // Popup de Idioma
    const languagePopup = document.getElementById('language-popup');
    const langPtButton = document.getElementById('lang-pt');
    const langEnButton = document.getElementById('lang-en');
    // langEsButton REMOVIDO
    
    // Popups Adicionais (mantidos para o fluxo secundário)
    const introPopup = document.getElementById("intro-popup");
    const exploreBtn = document.getElementById("explore-btn");
    const closeIntro = document.getElementById("close-intro");
    const birthdayPopup = document.getElementById("birthday-popup");
    const closeBirthday = document.getElementById("close-birthday");
    
    // --- Chaves de localStorage ---
    const INTRO_KEY = 'introShown'; 
    // LANGUAGE_CHOSEN_DATE_KEY e setLanguageChosenDate() REMOVIDOS
    const DELAY_MS = 100;

    // --- Funções de Controle de Popups ---

    function showPopup(element) {
        if (element) {
            element.classList.remove('opacity-0', 'pointer-events-none');
            element.classList.add('opacity-100');
        }
    }

    function hidePopup(element, callback = null) {
        if (element) {
            element.classList.add('opacity-0', 'pointer-events-none');
            element.classList.remove('opacity-100');
            setTimeout(() => {
                if (callback) callback();
            }, DELAY_MS);
        }
    }
    
    // setLanguageChosenDate() foi removida.

    // --- Lógica de Exibição de Popups Secundários (Aniversário / Introdução) ---
    function showSecondaryPopups() {
        // Verifica o popup de Aniversário (25 de Junho)
        const today = new Date();
        const isBirthday = (today.getDate() === 25 && today.getMonth() === 5); // 25 de Junho (Mês 5 = Junho)
        
        if (isBirthday && birthdayPopup) {
            setTimeout(() => showPopup(birthdayPopup), DELAY_MS);
            return;
        }
        
        // Verifica o popup de Introdução (se não tiver sido mostrado)
        if (introPopup && !localStorage.getItem(INTRO_KEY)) {
            setTimeout(() => showPopup(introPopup), DELAY_MS);
            return;
        }
    }

    // --- Lógica de Exibição Inicial (Ordem de Prioridade) ---

    // 1. Mostrar o Popup de Idioma (Sempre na Home)
    function showLanguageFlow() {
        
        // Se estiver em /en, SALTA o popup de idioma.
        if (window.location.pathname.startsWith('/en')) {
            showSecondaryPopups();
            return;
        }
        
        // Se estiver na Home (/)
        if (window.location.pathname === '/' && languagePopup) {
            showPopup(languagePopup);
            document.body.style.overflow = 'hidden'; // Bloqueia o scroll
        } else {
            // Se estiver noutra página (ex: /about) que não seja /en, 
            // ou se o languagePopup não existir, apenas mostra os secundários.
            showSecondaryPopups(); 
        }
    }

    // 2. Controlar o Preloader e Iniciar o Fluxo
    if (preloader) {
        setTimeout(() => {
            hidePopup(preloader);
            // Após o preloader desaparecer, iniciar o fluxo de popups
            setTimeout(showLanguageFlow, DELAY_MS); 
        }, DELAY_MS);
    } else {
        // Se não houver preloader, começa imediatamente
        showLanguageFlow();
    }


    // --- Event Listeners para Interações ---

    // 1. Popup de Idioma (PT, EN)
    
    // Botão Português (Fica na Home, esconde o popup)
    if (langPtButton) {
        langPtButton.addEventListener('click', function() {
            // Não registra a data.
            hidePopup(languagePopup, () => {
                document.body.style.overflow = ''; // Libera o scroll
                showSecondaryPopups();
            });
            // Não há redirecionamento, permanece em /
        });
    }

    // Botão Inglês (Redireciona para /en)
    if (langEnButton) {
        langEnButton.addEventListener('click', function() {
            // Não registra a data.
            window.location.href = '/en'; 
        });
    }

    // langEsButton REMOVIDO

    // 2. Popup de Aniversário
    if (closeBirthday) {
        closeBirthday.addEventListener("click", () => {
            hidePopup(birthdayPopup);
        });
    }

    // 3. Popup de Apresentação DEV (Intro)
    if (exploreBtn) {
        exploreBtn.addEventListener("click", () => {
            hidePopup(introPopup);
            localStorage.setItem(INTRO_KEY, "true");
        });
    }
    if (closeIntro) {
        closeIntro.addEventListener("click", () => {
            hidePopup(introPopup);
            localStorage.setItem(INTRO_KEY, "true");
        });
    }
});