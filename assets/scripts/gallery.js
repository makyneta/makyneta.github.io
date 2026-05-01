const CATEGORIES = [
  { id: 'all',        label: 'All' },
  { id: 'pap',        label: 'PAP' },
  { id: 'interview',  label: 'Interview' },
  { id: 'palestra',   label: 'Palestras' },
  { id: 'evento',     label: 'Eventos' },
  { id: 'visit',     label: 'Visits' },
  { id: 'bastidores', label: 'Bastidores' },
  { id: 'outro',      label: 'Outro' },
];

let currentCat   = 'all';
let visibleIdxs  = [];
let currentLbIdx = 0;

/* ── build grid ── */
function buildGrid() {
  const grid = document.getElementById('masonry-grid');
  grid.innerHTML = '';
  PHOTOS.forEach((p, i) => {
    const cell = document.createElement('div');
    cell.className = 'photo-cell reveal';
    if (p.size === 'wide') cell.classList.add('wide');
    if (p.size === 'tall') cell.classList.add('tall');
    cell.dataset.cat   = p.category;
    cell.dataset.index = i;

    const imgHtml = p.src
      ? `<img src="${p.src}" alt="${p.alt}" loading="lazy" />`
      : `<div class="photo-placeholder">[ ${String(i+1).padStart(2,'0')} ]</div>`;

    cell.innerHTML = `
      ${imgHtml}
      <div class="photo-overlay">
        <span class="overlay-cat">${p.category}</span>
        <span class="overlay-alt">${p.alt}</span>
      </div>
      <span class="photo-expand">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
          <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
        </svg>
      </span>`;

    cell.addEventListener('click', () => {
      visibleIdxs  = getVisible();
      const pos    = visibleIdxs.indexOf(i);
      currentLbIdx = pos >= 0 ? pos : 0;
      openLb();
    });

    grid.appendChild(cell);
    revealObs.observe(cell);
  });

  updateCount(PHOTOS.length);
  updateStats();
}

/* ── filter ── */
function getVisible() {
  return PHOTOS.reduce((acc, p, i) => {
    if (currentCat === 'all' || p.category === currentCat) acc.push(i);
    return acc;
  }, []);
}
function applyFilter() {
  document.querySelectorAll('.photo-cell').forEach(cell => {
    const show = currentCat === 'all' || cell.dataset.cat === currentCat;
    cell.classList.toggle('hidden', !show);
  });
  updateCount(getVisible().length);
}
function updateCount(n) {
  document.getElementById('visible-count').textContent = n;
}
function updateStats() {
  document.getElementById('stat-total').textContent = String(PHOTOS.length).padStart(2,'0');
  const cats = new Set(PHOTOS.map(p => p.category)).size;
  document.getElementById('stat-cats').textContent  = String(cats).padStart(2,'0');
}

/* ── tabs ── */
function buildTabs() {
  const available = new Set(PHOTOS.map(p => p.category));
  const tabs = document.getElementById('filter-tabs');
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
      applyFilter();
    });
    tabs.appendChild(btn);
  });
}

/* ── lightbox ── */
const lb      = document.getElementById('lightbox');
const lbImg   = document.getElementById('lb-img');
const lbCap   = document.getElementById('lb-caption');
const lbCount = document.getElementById('lb-counter');

function openLb()  { renderLb(); lb.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeLb() { lb.classList.remove('open'); document.body.style.overflow = ''; setTimeout(() => { lbImg.src = ''; }, 350); }

function renderLb() {
  const idx = visibleIdxs[currentLbIdx];
  const p   = PHOTOS[idx];
  if (!p) return;
  lbImg.style.opacity = '0'; lbImg.style.transform = 'scale(0.97)';
  lbImg.onload = () => {
    lbImg.style.transition = 'opacity 0.3s ease, transform 0.35s ease';
    lbImg.style.opacity = '1'; lbImg.style.transform = 'scale(1)';
  };
  if (p.src) { lbImg.src = p.src; lbImg.alt = p.alt; lbImg.style.display = 'block'; }
  else         { lbImg.style.display = 'none'; }
  lbCap.textContent   = p.alt || '';
  lbCount.textContent = `${currentLbIdx + 1} / ${visibleIdxs.length}`;
}

function prevPhoto() { currentLbIdx = (currentLbIdx - 1 + visibleIdxs.length) % visibleIdxs.length; renderLb(); }
function nextPhoto() { currentLbIdx = (currentLbIdx + 1) % visibleIdxs.length; renderLb(); }

document.getElementById('lb-close').addEventListener('click', closeLb);
document.getElementById('lb-prev').addEventListener('click', prevPhoto);
document.getElementById('lb-next').addEventListener('click', nextPhoto);
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLb();
  if (e.key === 'ArrowLeft')  prevPhoto();
  if (e.key === 'ArrowRight') nextPhoto();
});
let touchX = 0;
lb.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend',   e => {
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) < 50) return;
  dx < 0 ? nextPhoto() : prevPhoto();
});

/* ── scroll reveal ── */
const revealObs = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.04 }
);
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── init ── */
document.addEventListener('DOMContentLoaded', () => { buildTabs(); buildGrid(); });