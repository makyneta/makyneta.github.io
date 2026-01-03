document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('welcome-overlay');
    const enterBtn = document.getElementById('enter-btn');
    const btnText = document.getElementById('btn-text');
    const motionToggle = document.getElementById('reduce-motion-toggle');
    const mainSite = document.getElementById('main-site');
    const body = document.body;
    
    // Elementos de texto para tradução
    const titleAccent = document.getElementById('title-accent');
    const titleRest = document.getElementById('title-rest');
    const descText = document.getElementById('desc-text');
    const perfLabel = document.getElementById('perf-label');
    const langBtns = document.querySelectorAll('.lang-btn');

    // 1. DADOS DE TRADUÇÃO
    let currentLang = 'en';
    const translations = {
        en: {
            titleAccent: 'WELCOME',
            titleRest: 'USER',
            desc: 'Initializing protocols for Development, Lighting & Audio Systems. Environment ready for professional interaction.',
            btn: 'ENTER',
            perf: 'Performance Mode'
        },
        pt: {
            titleAccent: 'BEM-VIND@',
            titleRest: 'USUÁRI@',
            desc: 'A inicializar os protocolos para Desenvolvimento, Luz e Som. Ambiente pronto para interação profissional.',
            btn: 'ENTRAR',
            perf: 'Modo Performance'
        }
    };

    // Função para mudar idioma
    function setLanguage(lang) {
        currentLang = lang;
        const t = translations[lang];

        // Atualiza visual dos botões
        langBtns.forEach(btn => {
            if(btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Atualiza textos
        titleAccent.innerText = t.titleAccent;
        titleRest.innerText = t.titleRest;
        descText.innerHTML = t.desc;
        btnText.innerText = t.btn;
        perfLabel.innerText = t.perf;
    }

    // Event Listeners para os botões de idioma
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

    // 2. Entrada no Sistema
    enterBtn.addEventListener('click', () => {
        // LÓGICA DE REDIRECIONAMENTO
        if (currentLang === 'pt') {
            btnText.innerText = "A ACESSAR...";
            setTimeout(() => {
                window.location.href = '/pt';
            }, 500);
        } else {
            // Lógica Normal de Animação (Inglês)
            btnText.innerText = "ACCESSING...";
            
            setTimeout(() => {
                overlay.classList.add('hidden');
                body.classList.remove('no-scroll');
                
                if(mainSite) {
                    mainSite.classList.add('entered');
                }
                
                btnText.innerText = "ACCESS GRANTED";
                
                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 600);
                
            }, 400);
        }
    });

    // 3. Controle de Animações
    motionToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            body.classList.add('motion-off');
            if(mainSite) mainSite.classList.add('entered');
        } else {
            body.classList.remove('motion-off');
        }
    });

    // 4. Detetar preferência do sistema
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    function checkReducedMotion() {
        if (prefersReducedMotion.matches) {
            body.classList.add('motion-off');
            motionToggle.checked = true;
            if(mainSite) mainSite.classList.add('entered');
        }
    }

    checkReducedMotion();
    prefersReducedMotion.addEventListener('change', checkReducedMotion);
});