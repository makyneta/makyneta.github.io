document.addEventListener('DOMContentLoaded', function() {
    // 1. Obter os elementos do DOM
    var modal = document.getElementById("portfolioModal");
    var btnOpen = document.getElementById("openPortfolioModal");
    var btnClose = document.getElementById("closePortfolioModal");

    // 2. Quando o usuário clica no link, abre o modal
    btnOpen.onclick = function() {
        modal.style.display = "block";
    }

    // 3. Quando o usuário clica no 'x' (botão de fechar), fecha o modal
    btnClose.onclick = function() {
        modal.style.display = "none";
    }

    // 4. Quando o usuário clica em qualquer lugar fora do modal, fecha o modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});