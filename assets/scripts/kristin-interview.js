document.addEventListener('DOMContentLoaded', () => {
    const videoCover = document.getElementById('videoCover');
    const videoPlayer = document.getElementById('meuVideo');

    videoCover.addEventListener('click', () => {
        // Desvanecer a capa
        videoCover.style.opacity = '0';

        // Esperar a animação e iniciar vídeo
        setTimeout(() => {
            videoCover.style.display = 'none';
            videoPlayer.play();
        }, 500);
    });
});