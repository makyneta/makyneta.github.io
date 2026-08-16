document.getElementById('year').textContent = new Date().getFullYear();

const searchInput = document.getElementById('search');
const cards = document.querySelectorAll('.app-card');
const countEl = document.getElementById('count');
const noResults = document.getElementById('noResults');
const searchTerm = document.getElementById('searchTerm');

function updateCount(visible) {
    countEl.textContent = visible + ' app' + (visible !== 1 ? 's' : '') + ' disponíve' + (visible !== 1 ? 'is' : 'l');
}

updateCount(cards.length);

searchInput.addEventListener('input', function () {
    const q = this.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach(card => {
        const name = card.dataset.name || '';
        const appName = card.querySelector('.app-name').textContent.toLowerCase();
        const match = !q || name.includes(q) || appName.includes(q);
        card.classList.toggle('hidden', !match);
        if (match) visible++;
    });

    updateCount(visible);

    if (visible === 0) {
        noResults.style.display = 'block';
        searchTerm.textContent = this.value.trim();
    } else {
        noResults.style.display = 'none';
    }
});