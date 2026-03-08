/* ─────────────────────────────────────────────────────────────────
   PROJECTS DATA
   Add / remove projects here. Fields:
     id, title, category, tags (tools/stack), desc, image, link
   image: path to project image (can be empty string for placeholder)
   link:  URL to open on click (leave "" to open lightbox instead)
───────────────────────────────────────────────────────────────── */
const JSON_PATH = 'assets/data/design.json';
let PROJECTS = [];

/* ── Categories ── */
const CATEGORIES = [
  { id: 'all',      label: 'All' },
  { id: 'branding', label: 'Branding' },
  { id: 'ui',       label: 'UI / Digital' },
  { id: 'print',    label: 'Print' },
  { id: 'social',   label: 'Social Media' },
];

let currentCat = 'all';

/* ── Build image or placeholder ── */
/* Uses p.image for the card thumbnail */
function cardVisual(p) {
  if (p.image) {
    return `<div class="card-visual"><img src="${p.image}" alt="${p.title}" loading="lazy" /></div>`;
  }
  return `<div class="card-visual"><div class="card-placeholder">[ IMAGE ]</div></div>`;
}

/* ── Build card HTML ── */
/* p.preview = image shown in lightbox on click (falls back to p.image if absent) */
function buildCard(p, extraClass = 'normal') {
  const tools = (p.tags || []).map(t => `<span class="tool-pill">${t}</span>`).join('');
  const previewSrc = p.preview || p.image || '';

  const clickAttr = p.link
    ? `href="${p.link}" target="_blank" rel="noopener"`
    : `href="#" data-lightbox="${previewSrc}" data-caption="${p.title}"`;

  return `
    <a ${clickAttr} class="project-card ${extraClass} reveal"
       data-cat="${p.category}" data-id="${p.id}">
      ${cardVisual(p)}
      <div class="card-body">
        <div class="card-top">
          <span class="card-tag">${p.category}</span>
          <span class="card-num">${String(p.id).padStart(2,'0')}</span>
        </div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.desc || ''}</p>
        <div class="card-footer">
          <div class="card-tools">${tools}</div>
          <span class="card-arrow">${p.link ? 'View →' : 'Preview →'}</span>
        </div>
      </div>
    </a>`;
}

/* ── Render all projects for a given filter ── */
function renderProjects(cat) {
  const pool = cat === 'all'
    ? [...PROJECTS]
    : PROJECTS.filter(p => p.category === cat);

  pool.sort((a, b) => b.id - a.id);

  const grid = document.getElementById('projects-grid');

  if (pool.length === 0) {
    grid.innerHTML = `<div style="padding:4rem;font-family:var(--font-mono);font-size:0.56rem;letter-spacing:.2em;color:var(--dim);text-transform:uppercase;grid-column:1/-1;">No projects found.</div>`;
    document.getElementById('visible-count').textContent = 0;
    return;
  }

  grid.innerHTML = pool.map(p => buildCard(p, 'normal')).join('');
  document.getElementById('visible-count').textContent = pool.length;

  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  });
}

/* ── Initial stats ── */
function renderStats() {
  document.getElementById('stat-projects').textContent =
    String(PROJECTS.length).padStart(2, '0');
  document.getElementById('stat-clients').textContent =
    String(new Set(PROJECTS.map(p => p.category)).size).padStart(2, '0');
}

/* ── Filter tabs — only show categories present in JSON ── */
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
      renderProjects(currentCat);
    });
    tabs.appendChild(btn);
  });
}

/* ── Lightbox ── */
const lb      = document.getElementById('lightbox');
const lbImg   = document.getElementById('lightbox-img');
const lbCap   = document.getElementById('lightbox-caption');
const lbClose = document.getElementById('lightbox-close');

document.addEventListener('click', e => {
  const card = e.target.closest('[data-lightbox]');
  if (!card) return;
  const src = card.dataset.lightbox;
  if (!src) return;
  e.preventDefault();
  lbImg.src = src;
  lbImg.alt = card.dataset.caption || '';
  lbCap.textContent = card.dataset.caption || '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
});

function closeLb() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { lbImg.src = ''; }, 350);
}

lbClose.addEventListener('click', closeLb);
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });

/* ── Scroll reveal ── */
const revealObs = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.04 }
);

/* ── Init ── */
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch(JSON_PATH);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    PROJECTS = await res.json();
  } catch (err) {
    console.error('Failed to load design.json:', err);
    document.getElementById('projects-grid').innerHTML =
      `<div style="padding:4rem;font-family:var(--font-mono);font-size:0.56rem;letter-spacing:.2em;color:#e55;grid-column:1/-1;">
        Failed to load design.json — check assets/data/design.json
      </div>`;
    return;
  }

  renderStats();
  buildTabs();
  renderProjects('all');
});