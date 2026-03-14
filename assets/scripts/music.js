const JSON_PATH = '/assets/data/music.json';

const PLATFORM_ICONS = {
  spotify:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,
  apple:      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
  youtube:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>`,
  soundcloud: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.56 8.87V17h8.76c.95 0 1.68-.74 1.68-1.68 0-.93-.74-1.69-1.68-1.69-.1 0-.2.01-.29.03.03-.16.04-.32.04-.49a3.86 3.86 0 0 0-3.87-3.87c-.64 0-1.25.16-1.79.45A3.65 3.65 0 0 0 11.56 8.87zM0 15.32c0 .95.77 1.68 1.68 1.68s1.68-.74 1.68-1.68c0-.95-.75-1.68-1.68-1.68C.75 13.64 0 14.38 0 15.32zM3.68 14.1c-.09-.43-.14-.88-.14-1.34 0-1.88.77-3.58 2-4.8V17h1.65V9.03c.31-.1.63-.15.97-.15.43 0 .84.08 1.22.23V17h1.65V9.27c.26.22.5.46.72.73V17h1.34V8.87c-1.14-1.28-2.8-2.08-4.65-2.08-1.27 0-2.45.38-3.44 1.04a6.43 6.43 0 0 0-1.32.27z"/></svg>`,
  bandcamp:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 18.75l7.437-13.5H24l-7.438 13.5z"/></svg>`,
};
const PLATFORM_LABELS = {
  spotify:'Spotify', apple:'Apple Music', youtube:'YouTube', soundcloud:'SoundCloud', bandcamp:'Bandcamp',
};

let RELEASES = [], PROFILES = {}, currentType = 'all';

function buildPlatforms() {
  const wrap = document.getElementById('platform-links');
  const html = Object.entries(PROFILES)
    .filter(([, url]) => url && !url.includes('REPLACE'))
    .map(([k, url]) => `<a href="${url}" target="_blank" rel="noopener" class="platform-link">${PLATFORM_ICONS[k]||''}${PLATFORM_LABELS[k]||k}</a>`)
    .join('');
  wrap.innerHTML = html || `<span style="font-family:var(--font-mono);font-size:.5rem;letter-spacing:.15em;color:var(--dim);">Links coming soon</span>`;
}

/* ── card: cover + title + artist · year ── */
function buildCard(r) {
  const cover = r.cover
    ? `<img src="${r.cover}" alt="${r.title}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'cover-placeholder\\'>[COVER]</div>'">`
    : `<div class="cover-placeholder">[COVER]</div>`;
  /* link to dedicated release page, e.g. music/first-single */
  const href = r.slug ? `music/${r.slug}` : `#`;
  return `
    <a href="${href}" class="release-card reveal" data-type="${r.type}">
      <div class="release-cover">${cover}</div>
      <div class="release-body">
        <div class="release-title">${r.title}</div>
        <div class="release-meta">${r.artist || 'Makyneta'} · ${r.year}</div>
      </div>
    </a>`;
}

function renderDisco(type) {
  const pool = (type === 'all' ? [...RELEASES] : RELEASES.filter(r => r.type === type))
    .sort((a, b) => b.id - a.id);
  const grid = document.getElementById('disco-grid');
  grid.innerHTML = pool.length
    ? pool.map(buildCard).join('')
    : `<div style="padding:4rem;font-family:var(--font-mono);font-size:.56rem;letter-spacing:.2em;color:var(--dim);text-transform:uppercase;grid-column:1/-1;">No releases found.</div>`;
  document.getElementById('disco-count').textContent = pool.length;
  requestAnimationFrame(() => document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el)));
}

function renderStats() {
  document.getElementById('stat-releases').textContent = String(RELEASES.length).padStart(2,'0');
  document.getElementById('stat-tracks').textContent   = String(RELEASES.reduce((s,r)=>s+(r.tracks||0),0)).padStart(2,'0');
}

document.getElementById('filter-tabs').addEventListener('click', e => {
  const tab = e.target.closest('.filter-tab');
  if (!tab) return;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  currentType = tab.dataset.type;
  renderDisco(currentType);
});

const revealObs = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.04 }
);

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch(JSON_PATH);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    RELEASES = data.releases || [];
    PROFILES = data.profiles || {};
  } catch (err) {
    console.error('Failed to load music.json:', err);
    document.getElementById('disco-grid').innerHTML =
      `<div style="padding:4rem;font-family:var(--font-mono);font-size:.56rem;letter-spacing:.2em;color:#e55;grid-column:1/-1;">Failed to load assets/data/music.json</div>`;
    return;
  }
  buildPlatforms();
  renderStats();
  renderDisco('all');
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
});