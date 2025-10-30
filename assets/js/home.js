document.addEventListener('DOMContentLoaded', function() {
    // --- Elementos de UI ---
    const preloader = document.getElementById('preloader');
    
    // Popup de Idioma
    const languagePopup = document.getElementById('language-popup');
    const langPtButton = document.getElementById('lang-pt');
    const langEnButton = document.getElementById('lang-en');

    // Popups Adicionais (Cookies foram removidos)
    const introPopup = document.getElementById("intro-popup");
    const exploreBtn = document.getElementById("explore-btn");
    const closeIntro = document.getElementById("close-intro");
    const birthdayPopup = document.getElementById("birthday-popup");
    const closeBirthday = document.getElementById("close-birthday");
    
    // Chaves de localStorage
    const INTRO_KEY = 'introShown'; 
    const DELAY_MS = 500; // Tempo padrão de delay/transição

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
            // Executa um callback após a transição de saída
            setTimeout(() => {
                if (callback) callback();
            }, DELAY_MS);
        }
    }

    // --- Lógica de Exibição Inicial (Ordem de Prioridade) ---

    // 1. Mostrar o Popup de Idioma
    function showLanguageFlow() {
        // Se estiver na página /en, saltamos o popup de idioma e vamos para os popups secundários.
        if (window.location.pathname.startsWith('/en')) {
            showSecondaryPopups();
            return;
        }
        
        // Se não estiver em /en, o idioma é a prioridade #1 (sempre)
        showPopup(languagePopup);
        document.body.style.overflow = 'hidden'; // Bloqueia o scroll enquanto o popup está aberto
    }

    // 2. Mostrar Popups Adicionais (Aniversário / Introdução)
    function showSecondaryPopups() {
        // Verifica o popup de Aniversário (25 de Junho)
        const today = new Date();
        const isBirthday = (today.getDate() === 25 && today.getMonth() === 5); // 25 de Junho
        
        if (isBirthday && birthdayPopup) {
            setTimeout(() => showPopup(birthdayPopup), DELAY_MS);
            return; // Se o de aniversário aparecer, não mostra o de intro
        }
        
        // Verifica o popup de Introdução (se não tiver sido mostrado)
        if (introPopup && !localStorage.getItem(INTRO_KEY)) {
            setTimeout(() => showPopup(introPopup), DELAY_MS);
            return;
        }
    }

    // 3. Controlar o Preloader
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

    // 1. Popup de Idioma
    if (langPtButton) {
        langPtButton.addEventListener('click', function() {
            // 1. Esconde o popup de idioma
            hidePopup(languagePopup, () => {
                document.body.style.overflow = ''; // Libera o scroll
                // 2. Chama a próxima cadeia de popups: Introdução ou Aniversário
                showSecondaryPopups();
            });
        });
    }

    if (langEnButton) {
        langEnButton.addEventListener('click', function() {
            window.location.href = '/en';
        });
    }

    // 2. Popup de Aniversário
    if (closeBirthday) {
        closeBirthday.addEventListener("click", () => {
            hidePopup(birthdayPopup);
        });
    }

    // 3. Popup de Apresentação DEV
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