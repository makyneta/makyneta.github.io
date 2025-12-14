document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica do Modal de Portfólio (Já existente) ---
    var portfolioModal = document.getElementById("portfolioModal");
    var openPortfolioBtn = document.getElementById("openPortfolioModal");
    var closePortfolioBtn = document.getElementById("closePortfolioModal");

    if (openPortfolioBtn) openPortfolioBtn.onclick = function() { portfolioModal.style.display = "block"; }
    if (closePortfolioBtn) closePortfolioBtn.onclick = function() { portfolioModal.style.display = "none"; }
    
    // --- Lógica do NOVO Modal de Contato ---
    var contactModal = document.getElementById("contactModal");
    var openContactBtn = document.getElementById("openContactModal");
    var closeContactBtn = document.getElementById("closeContactModal");

    if (openContactBtn) openContactBtn.onclick = function() { contactModal.style.display = "block"; }
    if (closeContactBtn) closeContactBtn.onclick = function() { contactModal.style.display = "none"; }

    // --- Fechar ao Clicar Fora (funciona para AMBOS) ---
    window.onclick = function(event) {
        // Se o clique for no fundo (próprio elemento modal)
        if (event.target == portfolioModal) {
            portfolioModal.style.display = "none";
        }
        if (event.target == contactModal) {
            contactModal.style.display = "none";
        }
    }
});