document.addEventListener('DOMContentLoaded', () => {
        const popup = document.getElementById('storm-popup-container');
        setTimeout(() => { popup.classList.add('is-active'); }, 800);
    });

    function closeStormPopup() {
        const popup = document.getElementById('storm-popup-container');
        popup.classList.remove('is-active');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    }