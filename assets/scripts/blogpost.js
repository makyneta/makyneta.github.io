/* ── Populate hero & sidebar from POST object ── */
function populateHero() {
  document.title = `${POST.title} | Makyneta by Tomás Mota`;

  // hero ghost word: first word of title
  document.getElementById('hero-bg-word').textContent = POST.title.split(' ')[0].toUpperCase();

  // breadcrumb category
  const catLabel = POST.category.charAt(0).toUpperCase() + POST.category.slice(1);
  document.getElementById('hero-cat-label').textContent = catLabel;

  // hero chip
  const heroChip = document.getElementById('hero-chip');
  heroChip.textContent = POST.category.toUpperCase();
  heroChip.dataset.cat = POST.category;

  // sidebar chip
  const sideChip = document.getElementById('sidebar-chip');
  sideChip.textContent = POST.category.toUpperCase();
  sideChip.dataset.cat = POST.category;

  // text fields
  document.getElementById('hero-readtime').textContent = POST.readTime;
  document.getElementById('hero-title').textContent    = POST.title;
  document.getElementById('hero-excerpt').textContent  = POST.excerpt;
  document.getElementById('hero-date').textContent     = POST.date;
  document.getElementById('sidebar-date').textContent  = POST.date;

  // cover image
  const cover = document.getElementById('hero-cover');
  if (POST.image) { cover.src = POST.image; cover.alt = POST.title; }
  else { cover.closest('.post-cover').style.display = 'none'; }

  // tags
  const tagList = document.getElementById('tag-list');
  (POST.tags || []).forEach(tag => {
    tagList.insertAdjacentHTML('beforeend', `<span class="post-tag">${tag}</span>`);
  });

  // share links (built with live URL)
  const url = encodeURIComponent(window.location.href);
  const txt = encodeURIComponent(POST.title);
  document.getElementById('share-twitter').href   = `https://twitter.com/intent/tweet?url=${url}&text=${txt}`;
  document.getElementById('share-linkedin').href  = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  document.getElementById('share-whatsapp').href  = `https://wa.me/?text=${txt}%20${url}`;
}

/* ── Reading progress bar ── */
const bar = document.getElementById('reading-progress');
window.addEventListener('scroll', () => {
  const s = document.documentElement.scrollTop;
  const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  bar.style.transform = `scaleX(${h > 0 ? s / h : 0})`;
}, { passive: true });

/* ── Copy link button ── */
document.getElementById('copy-link').addEventListener('click', e => {
  e.preventDefault();
  navigator.clipboard.writeText(window.location.href).then(() => {
    const tooltip = document.getElementById('copy-tooltip');
    tooltip.textContent = 'Copied!';
    tooltip.classList.add('visible');
    setTimeout(() => {
      tooltip.textContent = 'Copy link';
      tooltip.classList.remove('visible');
    }, 2000);
  }).catch(() => {
    // fallback for browsers without clipboard API
    const ta = document.createElement('textarea');
    ta.value = window.location.href;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });
});

/* ── Scroll reveal ── */
const revealObs = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.06 }
);
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  populateHero();
});