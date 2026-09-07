(function(){

  document.getElementById('year').textContent = new Date().getFullYear();

  const icons = {
    download: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 3v9.5M6.2 9l3.8 3.8L13.8 9"/><path d="M4 15.5h12"/></svg>',
    copy: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="7" y="7" width="9" height="9" rx="1.2"/><path d="M4.5 13V4.8A.8.8 0 0 1 5.3 4h8.2"/></svg>',
    pdf:  '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M5 2.5h6.5L15 6v11a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 5 17V3a.5.5 0 0 1 .5-.5z"/><path d="M11.2 2.5V6H15"/></svg>',
    video:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="2.5" y="5" width="11" height="10" rx="1"/><path d="M13.5 8.3l4-2.3v8l-4-2.3"/></svg>',
    archive:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="3" y="4" width="14" height="12" rx="1"/><path d="M9 4v2M11 7v1.5M9 9.5v1.5M11 12v1.5"/></svg>',
    audio:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M7 13V5.8L15 4v8.2"/><circle cx="5.3" cy="14.3" r="1.8"/><circle cx="13.3" cy="12.5" r="1.8"/></svg>',
    vector:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M10 2.5l7.5 4.3v6.4L10 17.5l-7.5-4.3V6.8L10 2.5z"/><circle cx="10" cy="10" r="2.4"/></svg>',
    file: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M5 2.5h6.5L15 6v11a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 5 17V3a.5.5 0 0 1 .5-.5z"/></svg>'
  };

  const PHOTO_EXT = ['png','jpg','jpeg','gif','webp'];
  const TYPE_HUE  = { pdf:16, docx:206, zip:262, mp3:322, mp4:174, svg:44 };
  const TYPE_ICON = { pdf:'pdf', docx:'pdf', zip:'archive', mp3:'audio', mp4:'video', svg:'vector' };

  function hashCode(str){
    let h = 0;
    for(let i=0;i<str.length;i++){ h = (h<<5)-h + str.charCodeAt(i); h |= 0; }
    return Math.abs(h);
  }

  function photoArt(name){
    const h = hashCode(name);
    const h1 = h % 360;
    const h2 = (h1 + 40 + (h % 50)) % 360;
    const px = 20 + (h % 55);
    const py = 15 + (h % 45);
    return `radial-gradient(circle at ${px}% ${py}%, hsla(${h1},55%,60%,0.30), transparent 60%), linear-gradient(135deg, hsl(${h1},36%,23%), hsl(${h2},32%,12%))`;
  }

  function typeArt(ext){
    const h = TYPE_HUE[ext] ?? 220;
    return `linear-gradient(160deg, hsl(${h},30%,20%), hsl(${h},28%,11%))`;
  }

  function isPhoto(ext){ return PHOTO_EXT.includes(ext); }

  function filteredFiles(){
    const q = document.getElementById('filter').value.trim().toLowerCase();
    return files.filter(f => f.name.toLowerCase().includes(q));
  }

  function showTip(btn, text){
    const tip = btn.querySelector('.tip');
    tip.textContent = text;
    tip.classList.add('show');
    setTimeout(() => tip.classList.remove('show'), 1300);
  }

  function copyText(text){
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
  }

  function render(){
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    const items = filteredFiles();

    if(items.length === 0){
      grid.innerHTML = '<div class="empty">sem resultados</div>';
    } else {
      items.forEach((f) => {
        const href = 'files/' + f.name;
        const photo = isPhoto(f.ext);
        const art = photo ? photoArt(f.name) : typeArt(f.ext);
        const iconKey = TYPE_ICON[f.ext] || 'file';

        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `
          <a class="thumb" href="${href}" download="${f.name}" aria-label="Transferir ${f.name}">
            <span class="art" style="background:${art}"></span>
            ${photo ? `<img class="art-img" src="${href}" alt="" loading="lazy" onerror="this.remove()">` : `<span class="icon-wrap">${icons[iconKey]}</span>`}
            <span class="overlay">
              <button class="icon-btn copy-btn" type="button" aria-label="Copiar comando de transferência" data-url="${href}">
                ${icons.copy}<span class="tip">copiar</span>
              </button>
              <span class="icon-btn" aria-hidden="true">${icons.download}<span class="tip"></span></span>
            </span>
          </a>
          <div class="caption">
            <span class="name">${f.name}</span>
          </div>`;
        grid.appendChild(item);
      });
    }

    grid.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const url = window.location.origin + window.location.pathname.replace(/[^/]*$/, '') + btn.dataset.url;
        copyText(`curl -LO ${url}`);
        showTip(btn, 'copiado');
      });
    });
  }

  document.getElementById('filter').addEventListener('input', render);

  render();
})();