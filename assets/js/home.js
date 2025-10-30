document.addEventListener('DOMContentLoaded', function() {
    // --- Elementos de UI ---
    const preloader = document.getElementById('preloader');
    
    // Popup de Idioma
    const languagePopup = document.getElementById('language-popup');
    const langPtButton = document.getElementById('lang-pt');
    const langEnButton = document.getElementById('lang-en');
    const langEsButton = document.getElementById('lang-es'); // Adicionado ES

    // Popups Adicionais
    const introPopup = document.getElementById("intro-popup");
    const exploreBtn = document.getElementById("explore-btn");
    const closeIntro = document.getElementById("close-intro");
    const birthdayPopup = document.getElementById("birthday-popup");
    const closeBirthday = document.getElementById("close-birthday");
    
    // Chaves de localStorage
    const INTRO_KEY = 'introShown'; 
    const DELAY_MS = 100; // Tempo padrão de delay/transição

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
            // Executa um callback após a transição de saída (0.5s)
            setTimeout(() => {
                if (callback) callback();
            }, DELAY_MS);
        }
    }

    // --- Lógica de Exibição de Popups Secundários (Aniversário / Introdução) ---
    function showSecondaryPopups() {
        // Verifica o popup de Aniversário (25 de Junho)
        const today = new Date();
        const isBirthday = (today.getDate() === 25 && today.getMonth() === 5); // 25 de Junho (Mês 5 = Junho)
        
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

    // --- Lógica de Exibição Inicial (Ordem de Prioridade) ---

    // 1. Mostrar o Popup de Idioma (Prioridade Máxima)
    function showLanguageFlow() {
        // Se estiver em qualquer versão de idioma secundário, saltamos o popup de idioma
        if (window.location.pathname.startsWith('/en') || window.location.pathname.startsWith('/es')) {
            showSecondaryPopups(); // Vai diretamente para os popups de introdução/aniversário
            return;
        }
        
        // Se estiver na Home (PT), mostramos o popup de idioma.
        showPopup(languagePopup);
        document.body.style.overflow = 'hidden'; // Bloqueia o scroll enquanto o popup está aberto
    }

    // 2. Controlar o Preloader e Iniciar o Fluxo
    if (preloader) {
        // Oculta o preloader após 500ms
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
            // Esconde o popup de idioma e chama a próxima cadeia de popups
            hidePopup(languagePopup, () => {
                document.body.style.overflow = ''; // Libera o scroll
                showSecondaryPopups();
            });
        });
    }

    if (langEnButton) {
        langEnButton.addEventListener('click', function() {
            window.location.href = '/en'; // Redireciona para a versão em Inglês
        });
    }

    if (langEsButton) { // NOVO EVENT LISTENER
        langEsButton.addEventListener('click', function() {
            window.location.href = '/es'; // Redireciona para a versão em Espanhol
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