/* ─────────────────────────────────────────────────────────────────
   JSON path — place your projects in assets/data/photo.json
───────────────────────────────────────────────────────────────── */
const JSON_PATH = '/assets/data/photo.json';

/* ─────────────────────────────────────────────────────────────────
   CATEGORY ORDER — only categories present in the JSON appear
───────────────────────────────────────────────────────────────── */
const CATEGORIES = [
  { id: 'all',      label: 'All' },
  { id: 'portrait', label: 'Portrait' },
  { id: 'street',   label: 'Street' },
  { id: 'event',    label: 'Event' },
  { id: 'sport',    label: 'Sport' },
  { id: 'nature',   label: 'Nature' },
  { id: 'other',    label: 'Other' },
];

let PROJECTS    = [];
let currentCat  = 'all';

/* ── build card ── */
function buildCard(p) {
  const cover = p.cover
    ? `<img src="${p.cover}" alt="${p.title}" loading="lazy"
           onerror="this.parentElement.innerHTML='<div class=\\'cover-placeholder\\'>[NO IMAGE]</div>'">`
    : `<div class="cover-placeholder">[NO IMAGE]</div>`;

  const photoCount = p.photoCount ? `${p.photoCount} photos` : '';

  return `
    <a href="${p.slug || '#'}" class="project-card reveal" data-cat="${p.category}">
      <div class="card-cover">
        ${cover}
        <span class="card-badge">${p.category}</span>
        ${photoCount ? `<span class="card-photo-count">${photoCount}</span>` : ''}
      </div>
      <div class="card-body">
        <div class="card-title">${p.title}</div>
        <div class="card-meta">
          ${p.year     ? `<span class="card-year">${p.year}</span>` : ''}
          ${p.year && p.location ? `<span class="card-sep">·</span>` : ''}
          ${p.location ? `<span class="card-location">${p.location}</span>` : ''}
        </div>
        ${p.desc ? `<p class="card-desc">${p.desc}</p>` : ''}
      </div>
    </a>`;
}

/* ── render grid ── */
function renderGrid(cat) {
  const pool = (cat === 'all' ? [...PROJECTS] : PROJECTS.filter(p => p.category === cat))
    .sort((a, b) => b.id - a.id);

  const grid = document.getElementById('projects-grid');
  grid.innerHTML = pool.length
    ? pool.map(buildCard).join('')
    : `<div style="padding:4rem;font-family:var(--font-mono);font-size:.56rem;letter-spacing:.2em;color:var(--dim);text-transform:uppercase;grid-column:1/-1;">No projects found.</div>`;

  document.getElementById('visible-count').textContent = pool.length;

  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  });
}

/* ── stats ── */
function renderStats() {
  document.getElementById('stat-projects').textContent = String(PROJECTS.length).padStart(2, '0');
  const photos = PROJECTS.reduce((s, p) => s + (p.photoCount || 0), 0);
  document.getElementById('stat-photos').textContent   = photos > 0 ? String(photos).padStart(2, '0') : '—';
}

/* ── filter tabs ── */
function buildTabs() {
  const available = new Set(PROJECTS.map(p => p.category));
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
      renderGrid(currentCat);
    });
    tabs.appendChild(btn);
  });
}

/* ── scroll reveal ── */
const revealObs = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.04 }
);

/* ── init ── */
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch(JSON_PATH);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    PROJECTS = await res.json();
  } catch (err) {
    console.error('Failed to load photo.json:', err);
    document.getElementById('projects-grid').innerHTML =
      `<div style="padding:4rem;font-family:var(--font-mono);font-size:.56rem;letter-spacing:.2em;color:#e55;grid-column:1/-1;">
        Failed to load /assets/data/photo.json
      </div>`;
    return;
  }

  renderStats();
  buildTabs();
  renderGrid('all');
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
});