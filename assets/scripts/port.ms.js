document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. MODAIS GENÉRICOS (Releases, Lives, etc)
       ========================================= */
    const openBtns = document.querySelectorAll('.view-all-btn');
    const closeBtns = document.querySelectorAll('.close-modal');
    const genericModals = document.querySelectorAll('.fullscreen-modal');

    // Função para controlar o scroll do body (só desbloqueia se não houver modais abertos)
    function toggleBodyScroll(shouldLock) {
        if (!shouldLock) {
            // Verifica se ALGUM modal genérico ainda está aberto
            const isAnyActive = Array.from(genericModals).some(m => m.classList.contains('active'));
            // Se nenhum estiver ativo, liberta o scroll
            if (!isAnyActive) {
                document.body.style.overflow = 'auto';
            }
        } else {
            // Trava o scroll
            document.body.style.overflow = 'hidden';
        }
    }

    // Abrir Modal Genérico
    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const modal = document.getElementById(targetId);
            if (modal) {
                modal.classList.add('active');
                toggleBodyScroll(true);
            }
        });
    });

    // Fechar Modal Genérico (Botão X)
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.fullscreen-modal');
            modal.classList.remove('active');
            toggleBodyScroll(false);
        });
    });

    // Fechar Modal Genérico (Clicar fora)
    genericModals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                toggleBodyScroll(false);
            }
        });
    });

    /* =========================================
       2. VIDEO PLAYER (YouTube Iframe)
       ========================================= */
    const videoTriggers = document.querySelectorAll('.video-trigger');
    const playerModal = document.getElementById('video-player-modal');
    const iframeContainer = document.getElementById('video-iframe-container');
    const closePlayerBtn = document.querySelector('.close-player-btn');

    // Abrir Video Player
    videoTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const videoId = trigger.getAttribute('data-video-id');
            
            if (videoId && playerModal) {
                // Constrói a URL do YouTube
                const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
                
                // Injeta o iframe
                iframeContainer.innerHTML = `
                    <iframe src="${embedUrl}" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>
                `;
                
                playerModal.classList.add('active');
            }
        });
    });

    // Função para fechar o player e parar o vídeo
    function closeVideoPlayer() {
        if (playerModal) {
            playerModal.classList.remove('active');
            // Limpa o HTML para parar o áudio do vídeo
            setTimeout(() => {
                iframeContainer.innerHTML = '';
            }, 300);
        }
    }

    if (closePlayerBtn) {
        closePlayerBtn.addEventListener('click', closeVideoPlayer);
    }

    // Fechar Video Player (Clicar fora)
    if (playerModal) {
        playerModal.addEventListener('click', (e) => {
            if (e.target === playerModal) closeVideoPlayer();
        });
    }

    /* =========================================
       3. GERAL: Tecla ESC
       ========================================= */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // 1. Se o Video Player estiver aberto, fecha ele primeiro
            if (playerModal && playerModal.classList.contains('active')) {
                closeVideoPlayer();
            } 
            // 2. Se não, fecha os modais genéricos
            else {
                genericModals.forEach(modal => {
                    if (modal.classList.contains('active')) {
                        modal.classList.remove('active');
                    }
                });
                toggleBodyScroll(false);
            }
        }
    });
});