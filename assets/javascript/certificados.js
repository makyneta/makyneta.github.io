document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('cert-track');
    if (!track) return;

    const scrollInterval = 3000;
    let autoScroll;

    function startAutoScroll() {
        const firstCard = track.querySelector('article');
        const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 300;

        autoScroll = setInterval(() => {
            const maxScrollLeft = track.scrollWidth - track.clientWidth;

            if (track.scrollLeft >= maxScrollLeft) {
                track.scrollTo({ left: 0, behavior: 'auto' });
            } else {
                track.scrollBy({ left: cardWidth, behavior: 'smooth' });
            }
        }, scrollInterval);
    }

    function stopAutoScroll() {
        clearInterval(autoScroll);
    }

    startAutoScroll();
    track.addEventListener('mouseenter', stopAutoScroll);
    track.addEventListener('mouseleave', startAutoScroll);
});
