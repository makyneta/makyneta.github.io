(function () {
  'use strict';

  /* ══ Config ═══════════════════════════════════════════════ */
  const CONFIG = {
    jsonUrl:    '/assets/data/photo/nacional-clubes-2026.json',
    imgBase:    '/assets/images/projects/photo/2026/nacional-de-clubes-atletismo-ar-livre-coimbra',
    project:    'Nacional de Clubes Ar Livre 2025/26',
    email:      'makyneta@tutamail.com',
    batchSize:  30,            // images loaded per batch
    selectAll:  false,         // start in selection mode
  };

  /* ══ State ════════════════════════════════════════════════ */
  let images      = [];
  let selected    = new Set();
  let loadedCount = 0;
  let isLoading   = false;
  let allLoaded   = false;

  /* ══ DOM refs ════════════════════════════════════════════ */
  let grid, sentinel, actionBar, countEl, toastEl;

  /* ══ Init ════════════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    grid      = document.getElementById('gallery-grid');
    sentinel  = document.getElementById('gallery-sentinel');
    actionBar = document.getElementById('gallery-action-bar');
    countEl   = document.getElementById('gallery-count');
    toastEl   = document.getElementById('gallery-toast');

    fetch(CONFIG.jsonUrl)
      .then(r => r.json())
      .then(data => {
        images = data.images;
        const totalEl = document.getElementById('gallery-total');
        if (totalEl) totalEl.textContent = images.length + ' photos';
        loadBatch();
        observeSentinel();
      })
      .catch(err => {
        console.error('Gallery: failed to load JSON', err);
        if (grid) grid.innerHTML = '<div class="gallery-loading">Failed to load gallery</div>';
      });

    // Toolbar buttons
    const selectAllBtn = document.getElementById('btn-select-all');
    const clearBtn     = document.getElementById('btn-clear');
    const actionClear  = document.getElementById('action-clear');

    if (selectAllBtn) selectAllBtn.addEventListener('click', selectAllImages);
    if (clearBtn)     clearBtn.addEventListener('click', clearSelection);
    if (actionClear)  actionClear.addEventListener('click', clearSelection);

    // Action bar buttons
    document.querySelectorAll('[data-action="watermark"]').forEach(btn => {
      btn.addEventListener('click', (e) => { e.preventDefault(); sendEmail('watermark'); });
    });
    document.querySelectorAll('[data-action="buy"]').forEach(btn => {
      btn.addEventListener('click', (e) => { e.preventDefault(); sendEmail('buy'); });
    });
  }

  /* ══ Render batch ════════════════════════════════════════ */
  function loadBatch() {
    if (isLoading || allLoaded) return;
    isLoading = true;

    const end = Math.min(loadedCount + CONFIG.batchSize, images.length);
    const fragment = document.createDocumentFragment();

    for (let i = loadedCount; i < end; i++) {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.dataset.index = i;
      item.dataset.filename = images[i];

      const skeleton = document.createElement('div');
      skeleton.className = 'skeleton';

      const img = document.createElement('img');
      img.className = 'lazy';
      img.dataset.src = CONFIG.imgBase + '/' + images[i];
      img.alt = CONFIG.project + ' - ' + images[i];

      const overlay = document.createElement('div');
      overlay.className = 'sel-overlay';

      const check = document.createElement('div');
      check.className = 'sel-check';
      check.innerHTML = '<i class="fa-solid fa-check"></i>';

      const num = document.createElement('div');
      num.className = 'item-num';
      num.textContent = images[i].replace(/\.webp$/, '');

      item.append(skeleton, img, overlay, check, num);
      item.addEventListener('click', () => toggleSelect(item));

      // If already selected (e.g. after "Select All" before render), mark visually
      if (selected.has(String(i))) {
        item.classList.add('selected');
      }

      fragment.appendChild(item);
    }

    grid.appendChild(fragment);

    // Trigger lazy loading for visible images
    requestAnimationFrame(() => {
      fragment.querySelectorAll('img.lazy').forEach(img => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const im = entry.target;
              im.src = im.dataset.src;
              im.onload = () => { im.classList.remove('lazy'); im.classList.add('loaded'); };
              im.onerror = () => { im.classList.remove('lazy'); im.classList.add('loaded'); };
              if (im.complete) { im.classList.remove('lazy'); im.classList.add('loaded'); }
              observer.unobserve(im);
            }
          });
        }, { rootMargin: '200px' });
        observer.observe(img);
      });
    });

    loadedCount = end;
    isLoading = false;

    if (loadedCount >= images.length) {
      allLoaded = true;
      const done = document.createElement('div');
      done.className = 'gallery-done';
      done.textContent = '· all ' + images.length + ' photos loaded ·';
      sentinel.parentNode.insertBefore(done, sentinel);
    }
  }

  /* ══ Infinite scroll ════════════════════════════════════ */
  function observeSentinel() {
    if (!sentinel) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isLoading && !allLoaded) {
          loadBatch();
        }
      });
    }, { rootMargin: '400px' });
    obs.observe(sentinel);
  }

  /* ══ Selection ═══════════════════════════════════════════ */
  function toggleSelect(item) {
    const index = item.dataset.index;
    if (selected.has(index)) {
      selected.delete(index);
      item.classList.remove('selected');
    } else {
      selected.add(index);
      item.classList.add('selected');
    }
    updateActionBar();
  }

  function selectAllImages() {
    if (selected.size === images.length) {
      clearSelection();
      return;
    }
    // Mark all indices as selected
    for (let i = 0; i < images.length; i++) {
      selected.add(String(i));
    }
    // Update DOM for rendered items
    grid.querySelectorAll('.gallery-item').forEach(item => {
      item.classList.add('selected');
    });
    updateActionBar();
    showToast(images.length + ' photos selected');
  }

  function clearSelection() {
    selected.clear();
    grid.querySelectorAll('.gallery-item').forEach(item => {
      item.classList.remove('selected');
    });
    updateActionBar();
  }

  function updateActionBar() {
    const count = selected.size;
    if (countEl) countEl.textContent = count;
    if (actionBar) {
      actionBar.classList.toggle('visible', count > 0);
    }
  }

  /* ══ Email ═══════════════════════════════════════════════ */
  function sendEmail(action) {
    if (selected.size === 0) {
      showToast('Select at least one photo');
      return;
    }

    const sorted = [...selected].sort((a, b) => Number(a) - Number(b));
    const fileList = sorted.map(i => '• ' + images[i]).join('\n');

    const isWatermark = action === 'watermark';
    const selectedCount = selected.size;
    const totalPrice = selectedCount * 2;

    const subject = 'Photos from "' + CONFIG.project + '"';

    const msgEN = [
      'Hi! I\'m interested in the following photos from "' + CONFIG.project + '":',
      '',
      fileList,
      '',
      'Option: ' + (isWatermark ? 'With watermark (free download)' : 'Without watermark — €2/photo — Total: €' + totalPrice),
      '',
      'Thank you!'
    ].join('\n');

    const msgPT = [
      'Olá! Tenho interesse nas seguintes fotos do "' + CONFIG.project + '":',
      '',
      fileList,
      '',
      'Opção: ' + (isWatermark ? 'Com marca d\'água (download gratuito)' : 'Sem marca d\'água — €2/foto — Total: €' + totalPrice),
      '',
      'Obrigado!'
    ].join('\n');

    const body = msgEN + '\n\n---\n\n' + msgPT;

    // Mailto URLs have practical length limits; keep the body reasonable
    let truncated = body;
    if (body.length > 3800) {
      const header = [
        'Hi! I\'m interested in ' + selectedCount + ' photos from "' + CONFIG.project + '":',
        '',
        'Option: ' + (isWatermark ? 'With watermark (free download)' : 'Without watermark — €2/photo — Total: €' + totalPrice),
        '',
        'Photo list:',
      ].join('\n');
      truncated = header + '\n' + fileList.slice(0, 2500) + '\n\n... and ' + (body.length - 2500) + ' more characters';
    }

    const url = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(truncated);
    window.location.href = url;
  }

  /* ══ Toast ═══════════════════════════════════════════════ */
  let toastTimeout;

  function showToast(msg) {
    if (!toastEl) return;
    clearTimeout(toastTimeout);
    toastEl.textContent = msg;
    toastEl.classList.add('visible');
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove('visible');
    }, 2500);
  }

})();
