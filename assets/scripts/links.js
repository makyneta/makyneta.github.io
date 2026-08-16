// Add click animation
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });

    // Add hover sound effect (optional)
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
    });
});

// Track link clicks (analytics)
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const linkName = this.querySelector('span').textContent;
        console.log(`Clicked: ${linkName}`);
        // You can send this to analytics
    });
});

// Stagger animation on load
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.link-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${0.1 + index * 0.05}s`;
    });
});