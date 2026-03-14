const ICONS = {
  spotify:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,
  apple:      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
  youtube:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>`,
  soundcloud: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.56 8.87V17h8.76c.95 0 1.68-.74 1.68-1.68 0-.93-.74-1.69-1.68-1.69-.1 0-.2.01-.29.03.03-.16.04-.32.04-.49a3.86 3.86 0 0 0-3.87-3.87c-.64 0-1.25.16-1.79.45A3.65 3.65 0 0 0 11.56 8.87zM0 15.32c0 .95.77 1.68 1.68 1.68s1.68-.74 1.68-1.68c0-.95-.75-1.68-1.68-1.68C.75 13.64 0 14.38 0 15.32zM3.68 14.1c-.09-.43-.14-.88-.14-1.34 0-1.88.77-3.58 2-4.8V17h1.65V9.03c.31-.1.63-.15.97-.15.43 0 .84.08 1.22.23V17h1.65V9.27c.26.22.5.46.72.73V17h1.34V8.87c-1.14-1.28-2.8-2.08-4.65-2.08-1.27 0-2.45.38-3.44 1.04a6.43 6.43 0 0 0-1.32.27z"/></svg>`,
  bandcamp:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 18.75l7.437-13.5H24l-7.438 13.5z"/></svg>`,
};
const LABELS = {
  spotify:'Spotify', apple:'Apple Music', youtube:'YouTube', soundcloud:'SoundCloud', bandcamp:'Bandcamp',
};

function show(id) { document.getElementById(id).style.display = ''; }
function hide(id) { document.getElementById(id).style.display = 'none'; }

/* ── Extract YouTube video ID from any YT URL format ── */
function extractYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/,
    /youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

function populate(r) {
  document.title = `${r.title} — Makyneta`;

  /* ── cover ── */
  const coverCol = document.getElementById('cover-col');
  const coverImg = document.getElementById('cover-img');
  if (r.cover) {
    coverImg.src = r.cover;
    coverImg.alt = r.title;
    coverImg.onload  = () => coverImg.classList.add('loaded');
    coverImg.onerror = () => {
      coverCol.innerHTML = `<div class="cover-placeholder">[COVER ART]</div>`;
    };
  } else {
    coverCol.innerHTML = `<div class="cover-placeholder">[COVER ART]</div>`;
  }
  document.getElementById('cover-ghost').textContent = r.title.split(' ')[0].toUpperCase();

  /* ── hero text ── */
  document.getElementById('eyebrow-text').textContent   = `Makyneta · ${r.type}`;
  document.getElementById('type-pill').textContent      = r.type;
  document.getElementById('release-title').textContent  = r.title;
  document.getElementById('release-artist').textContent = `${r.artist || 'Makyneta'} · ${r.year}`;
  document.getElementById('release-desc').textContent   = r.desc || '';

  /* ── stream buttons ── */
  const btnWrap = document.getElementById('stream-buttons');
  const btns = Object.entries(r.links || {})
    .filter(([, url]) => url)
    .map(([k, url]) => `
      <a href="${url}" target="_blank" rel="noopener" class="stream-btn">
        ${ICONS[k] || ''}<span>${LABELS[k] || k}</span>
      </a>`).join('');
  btnWrap.innerHTML = btns || `<span class="no-links">Links coming soon</span>`;

  /* ── YouTube music video ── */
  const playerWrap = document.getElementById('player-wrap');
  /* YOUTUBE_EMBED is defined in the release HTML — takes priority over JSON */
  const ytId = extractYouTubeId(
    (typeof YOUTUBE_EMBED !== 'undefined' && YOUTUBE_EMBED) ? YOUTUBE_EMBED : (r.links?.youtube || '')
  );
  if (ytId) {
    playerWrap.innerHTML = `
      <div class="yt-wrap">
        <iframe
          src="https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1&color=white"
          title="${r.title} — Music Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          loading="lazy">
        </iframe>
      </div>`;
  } else {
    playerWrap.innerHTML = `<div class="player-placeholder">Music video not available yet</div>`;
  }

  /* ── tracklist ── */
  if (r.tracklist && r.tracklist.length) {
    document.getElementById('tracklist').innerHTML = r.tracklist.map(t => `
      <div class="track-row">
        <div class="track-left">
          <span class="track-num">${t.num}</span>
          <span class="track-name">${t.title}</span>
        </div>
        <span class="track-dur">${t.duration || ''}</span>
      </div>`).join('');
  } else {
    hide('tracklist-section');
  }

  /* ── credits (separate full-width section) ── */
  if (r.credits && r.credits.length) {
    document.getElementById('credits-grid').innerHTML = r.credits.map(c => `
      <div class="credit-card">
        <span class="credit-role">${c.role}</span>
        <span class="credit-name">${c.name}</span>
      </div>`).join('');
  } else {
    hide('credits-section');
  }
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', async () => {
  const id = RELEASE_ID;

  let releases = [];
  try {
    const res = await fetch(JSON_PATH);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    releases = (await res.json()).releases || [];
  } catch (err) {
    console.error(err);
    hide('loading');
    document.getElementById('error').classList.add('show');
    return;
  }

  const release = releases.find(r => r.id === id);
  if (!release) {
    hide('loading');
    document.getElementById('error').classList.add('show');
    return;
  }

  hide('loading');
  populate(release);
  show('main');
}); 