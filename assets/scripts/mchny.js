(function() {
    const initPopupEN = () => {
        const popup = document.getElementById('christmas-popup');
        const closeBtn = document.querySelector('.christmas-close-btn');

        if (!popup || !closeBtn) return;

        const now = new Date();
        const month = now.getMonth(); 
        const day = now.getDate();

        // Verifica se é época festiva (24 Dez a 01 Jan)
        const isSeason = (month === 11 && day >= 24) || (month === 0 && day === 1);

        if (isSeason) {
            popup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        closeBtn.onclick = function() {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
            // sessionStorage removido: aparecerá sempre no próximo load
        };
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPopupEN);
    } else {
        initPopupEN();
    }
})();