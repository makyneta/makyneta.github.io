const JSON_PATH = 'assets/data/blog.json';

const CATEGORIES = [
  { id: 'all',          label: 'All' },
  { id: 'personal',     label: 'Personal' },
  { id: 'work',         label: 'Work' },
  { id: 'dev',          label: 'Dev' },
  { id: 'professional', label: 'Career' },
  { id: 'design',       label: 'Design' },
  { id: 'kristin',      label: 'Kristin' },
];

let currentCat = 'all';

function img(src, alt) {
  return src
    ? `<img src="${src}" alt="${alt}" loading="lazy">`
    : `<div class="card-img-placeholder">[ NO IMAGE ]</div>`;
}

/* featured card */
function renderFeatured(a) {
  document.getElementById('featured-wrap').innerHTML = `
    <a href="${a.link}" class="featured-article">
      <div class="feat-body">
        <div>
          <div class="feat-label">
            <span class="cat-chip" data-cat="${a.category}">${a.category.toUpperCase()}</span>
            <span class="feat-label-tag">— Featured</span>
          </div>
          <h2 class="feat-title">${a.title}</h2>
          <p class="feat-excerpt">${a.excerpt}</p>
        </div>
        <div class="feat-meta">
          <span class="feat-date">${a.date}</span>
          <span class="feat-date">· ${a.readTime}</span>
          <span class="feat-read">Read article →</span>
        </div>
      </div>
      <div class="feat-img">${img(a.image, a.title)}</div>
    </a>`;
}

/* article cards */
function renderGrid(articles) {
  const grid = document.getElementById('articles-grid');
  grid.innerHTML = '';
  articles.forEach(a => {
    grid.insertAdjacentHTML('beforeend', `
      <a href="${a.link}" class="article-card reveal"
         data-cat="${a.category}"
         data-title="${a.title.toLowerCase()}"
         data-excerpt="${a.excerpt.toLowerCase()}">
        <div class="card-img">${img(a.image, a.title)}</div>
        <div class="card-body">
          <div class="card-meta">
            <span class="cat-chip" data-cat="${a.category}">${a.category.toUpperCase()}</span>
            <span class="card-date">${a.date}</span>
            <span class="card-read-time">${a.readTime}</span>
          </div>
          <h3 class="card-title">${a.title}</h3>
          <p class="card-excerpt">${a.excerpt}</p>
          <div class="card-footer">
            <span></span>
            <span class="card-arrow">Read →</span>
          </div>
        </div>
      </a>`);
  });
  document.querySelectorAll('.article-card.reveal').forEach(el => revealObs.observe(el));
  document.getElementById('visible-count').textContent = articles.length;
}

/* filter tabs — only show categories that exist in JSON */
function renderTabs(articles) {
  const available = new Set(articles.map(a => a.category));
  const tabs = document.getElementById('filter-tabs');
  tabs.innerHTML = '';
  CATEGORIES.forEach(cat => {
    if (cat.id !== 'all' && !available.has(cat.id)) return;
    const btn = document.createElement('button');
    btn.className   = 'filter-tab' + (cat.id === 'all' ? ' active' : '');
    btn.dataset.cat = cat.id;
    btn.textContent = cat.label;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = cat.id;
      applyFilters();
    });
    tabs.appendChild(btn);
  });
}

/* filter + search */
function applyFilters() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  const cards = document.querySelectorAll('#articles-grid .article-card');
  let n = 0;
  cards.forEach(card => {
    const ok = (currentCat === 'all' || card.dataset.cat === currentCat)
            && (!q || card.dataset.title.includes(q) || card.dataset.excerpt.includes(q));
    card.classList.toggle('hidden', !ok);
    if (ok) n++;
  });
  document.getElementById('visible-count').textContent = n;
  document.getElementById('no-results').style.display  = n === 0 ? 'block' : 'none';
  document.getElementById('articles-grid').style.display = n === 0 ? 'none' : '';
}

/* scroll reveal */
const revealObs = new IntersectionObserver(entries =>
  entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.06 }
);

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('today-date').textContent =
    new Date().toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' });

  let articles = [];
  try {
    const res = await fetch(JSON_PATH);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    articles = await res.json();
  } catch (err) {
    document.getElementById('featured-wrap').innerHTML =
      `<p style="padding:3rem 5rem;font-family:var(--font-mono);font-size:0.6rem;letter-spacing:.15em;color:#e55;">
        Failed to load blog.json — check the path assets/data/blog.json
      </p>`;
    console.error(err);
    return;
  }

  // newest first
  articles.sort((a, b) => b.id - a.id);

  document.getElementById('article-total').textContent = articles.length;

  const [featured, ...rest] = articles;
  renderFeatured(featured);
  renderGrid(rest);
  renderTabs(articles);

  document.getElementById('searchInput').addEventListener('input', applyFilters);
});