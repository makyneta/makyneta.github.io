document.addEventListener('DOMContentLoaded', function() {
        // Seleciona todos os cartões de projeto
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const imagePath = card.getAttribute('data-src');
            if (imagePath) {
                // Aplica a imagem de fundo no cartão inteiro
                card.style.backgroundImage = `url('${imagePath}')`;
            }
        });
    });