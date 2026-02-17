// Inicia o popup assim que a página carrega
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('storm-ultra-popup');
    setTimeout(() => {
        overlay.classList.add('is-active');
    }, 600);
});

// Função para o botão de fechar e botão de confirmação
function terminatePopup() {
    const overlay = document.getElementById('storm-ultra-popup');
    overlay.classList.remove('is-active');

    // Espera a animação de fade-out terminar antes de esconder totalmente
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);
}