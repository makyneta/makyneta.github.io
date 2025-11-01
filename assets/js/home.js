document.addEventListener('DOMContentLoaded', function() {
    // --- Elementos de UI ---
    const preloader = document.getElementById('preloader');
    
    // Popup de Idioma
    const languagePopup = document.getElementById('language-popup');
    const langPtButton = document.getElementById('lang-pt');
    const langEnButton = document.getElementById('lang-en');
    const langEsButton = document.getElementById('lang-es');

    // Popups Adicionais (mantidos para o fluxo secundário)
    const introPopup = document.getElementById("intro-popup");
    const exploreBtn = document.getElementById("explore-btn");
    const closeIntro = document.getElementById("close-intro");
    const birthdayPopup = document.getElementById("birthday-popup");
    const closeBirthday = document.getElementById("close-birthday");
    
    // --- Chaves de localStorage ---
    const INTRO_KEY = 'introShown'; 
    const LANGUAGE_CHOSEN_DATE_KEY = 'langChosenDate'; // NOVA CHAVE
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
    
    /**
     * Define a data de hoje no localStorage para bloquear o popup
     * até o dia seguinte.
     */
    function setLanguageChosenDate() {
        const today = new Date().toDateString(); // Ex: "Sat Nov 01 2025"
        localStorage.setItem(LANGUAGE_CHOSEN_DATE_KEY, today);
    }

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

    // 1. Mostrar o Popup de Idioma (Prioridade Máxima com verificação de data)
    function showLanguageFlow() {
        const today = new Date().toDateString();
        const lastChosenDate = localStorage.getItem(LANGUAGE_CHOSEN_DATE_KEY);
        
        // Verifica se o utilizador já escolheu hoje
        const hasChosenToday = (lastChosenDate === today);

        // Se estiver em versão de idioma secundário, ou se já escolheu hoje, SALTA o popup de idioma
        if (window.location.pathname.startsWith('/en') || 
            window.location.pathname.startsWith('/es') || 
            hasChosenToday) {
            
            showSecondaryPopups();
            return;
        }
        
        // Se estiver na Home (PT) e NÃO escolheu hoje, mostramos o popup de idioma.
        showPopup(languagePopup);
        document.body.style.overflow = 'hidden'; // Bloqueia o scroll
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

    // 1. Popup de Idioma (PT, EN, ES)
    if (langPtButton) {
        langPtButton.addEventListener('click', function() {
            setLanguageChosenDate(); // Registra a data
            // Esconde o popup e chama a próxima cadeia de popups
            hidePopup(languagePopup, () => {
                document.body.style.overflow = ''; // Libera o scroll
                showSecondaryPopups();
            });
        });
    }

    if (langEnButton) {
        langEnButton.addEventListener('click', function() {
            setLanguageChosenDate(); // Registra a data ANTES de redirecionar
            window.location.href = '/en'; 
        });
    }

    if (langEsButton) {
        langEsButton.addEventListener('click', function() {
            setLanguageChosenDate(); // Registra a data ANTES de redirecionar
            window.location.href = '/es';
        });
    }

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