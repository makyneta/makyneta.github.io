    // Atualiza todos os elementos com a classe 'year'
    document.querySelectorAll('.year').forEach(el => {
        el.textContent = new Date().getFullYear();
    });