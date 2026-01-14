// Função para esconder o loader
window.addEventListener('load', function () {
    const loader = document.getElementById('loader-wrapper');
    const content = document.getElementById('main-content');

    // Define um tempo mínimo de 2.5 segundos para garantir que a animação seja vista
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';

        // Mostra o conteúdo principal suavemente
        content.classList.add('visible');
    }, 2500);
});

function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    });
}