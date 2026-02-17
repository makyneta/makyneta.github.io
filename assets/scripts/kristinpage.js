// Função para animar os sliders (Imagens de Aviso e de Voluntários)
function startSliders() {
    const sliderContainers = document.querySelectorAll('.v-slider, .vol-slider-wrap');
    
    sliderContainers.forEach(container => {
        const slides = container.querySelectorAll('.slide');
        let current = 0;
        
        if(slides.length > 1) {
            setInterval(() => {
                slides[current].classList.remove('active');
                current = (current + 1) % slides.length;
                slides[current].classList.add('active');
            }, 4500); // Roda a cada 4.5 segundos
        }
    });
}

// Inicializa quando a página estiver pronta
window.onload = startSliders;