/* ── Progress ── */
window.addEventListener('scroll', () => {
  document.getElementById('bar').style.width =
    Math.min(window.scrollY / (document.documentElement.scrollHeight - innerHeight) * 100, 100) + '%';
});

/* ── Reveal ── */
const ro = new IntersectionObserver(
  entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: .06 }
);
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

/* ── Testimonials slider ── */
(function(){
  const slider = document.getElementById('tslider');

  // Verifica se slider existe
  if (!slider) return;

  const cards  = slider.querySelectorAll('.test-card');
  const dotsWrap = document.getElementById('test-dots');
  const prevBtn = document.getElementById('t-prev');
  const nextBtn = document.getElementById('t-next');
  const total = cards.length;

  // Se não há cards, sair
  if (total === 0) return;

  // Calcula quantos cards por página
  function getPerView() {
    if (window.innerWidth >= 900) return 2;
    return 1;
  }

  let perView = getPerView();
  let current = 0;
  let pages = Math.ceil(total / perView);

  // Build dots
  function buildDots(){
    if (!dotsWrap) return;
    dotsWrap.innerHTML='';
    for(let i=0; i<pages; i++){
      const dot = document.createElement('button');
      dot.className = 'test-dot' + (i===0 ? ' on' : '');
      dot.addEventListener('click', ()=>goTo(i));
      dotsWrap.appendChild(dot);
    }
  }

  function goTo(page){
    current = Math.max(0, Math.min(page, pages-1));
    // Calcula o offset: cada página ocupa (100 / perView) % do slider
    const offsetPerPage = 100 / perView;
    const offset = current * offsetPerPage;
    slider.style.transform = `translateX(-${offset}%)`;
    slider.style.transition = 'transform 0.5s cubic-bezier(0.77,0,0.175,1)';

    if (dotsWrap) {
      dotsWrap.querySelectorAll('.test-dot').forEach((d,i)=>d.classList.toggle('on',i===current));
    }
  }

  // Botões anterior/próximo
  if(prevBtn) prevBtn.addEventListener('click', ()=>goTo(current-1));
  if(nextBtn) nextBtn.addEventListener('click', ()=>goTo(current+1));

  // Touch swipe para mobile
  let tx = 0;
  let ty = 0;
  let touchStarted = false;

  slider.addEventListener('touchstart', e=>{
    if (e.touches.length === 0) return;
    tx = e.touches[0].clientX;
    ty = e.touches[0].clientY;
    touchStarted = true;
    slider.style.transition = 'none';
  }, {passive:true});

  slider.addEventListener('touchmove', e=>{
    if (!touchStarted || e.touches.length === 0) return;
    const currentX = e.touches[0].clientX;
    const diffX = tx - currentX;
    const offsetPerPage = 100 / perView;
    const offset = current * offsetPerPage;
    const movePercent = (diffX / slider.offsetWidth) * offsetPerPage;
    slider.style.transform = `translateX(calc(-${offset}% - ${movePercent}%))`;
  }, {passive:true});

  slider.addEventListener('touchend', e=>{
    if (!touchStarted || e.changedTouches.length === 0) return;
    touchStarted = false;

    const currentX = e.changedTouches[0].clientX;
    const diffX = tx - currentX;
    const diffY = ty - e.changedTouches[0].clientY;

    // Só navegar se for swipe horizontal significativo
    if(Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
      if(diffX > 0) {
        goTo(current + 1);
      } else {
        goTo(current - 1);
      }
    } else {
      goTo(current);
    }
  }, {passive:true});

  // Responsive resize
  window.addEventListener('resize', ()=>{
    const newPerView = getPerView();
    if(newPerView !== perView) {
      perView = newPerView;
      current = 0;
      pages = Math.ceil(total / perView);
      buildDots();
      goTo(0);
    }
  });

  buildDots();
  goTo(0);
})();

/* ── Portfolio Showcase ── */
(function(){
  const EXT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
  const INFO_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
  const VIEW_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`;

  const devData = [
    { title:"MAYDAY", desc:"Website profissional para a banda músical, MAYDAY.", tags:["HTML","CSS","JS"],
      img:"assets/images/projects/dev/mayday-grupo-v2.webp",
      demo:"https://makyneta.github.io/mayday", info:"/info/dev/mayday" },

    { title:"Clube Atletismo de Marinha Grande", desc:"Website para o Clube Atletismo de Marinha Grande.", tags:["HTML","CSS","JS"],
      img:"assets/images/projects/dev/clube-atletismo-de-marinha-grande.webp",
      demo:"https://www.catletismomg.pt", info:"/info/dev/camg" },

    { title:"Tiago Pedro", desc:"Website para o fotógrafo de casamentos, Tiago Pedro.", tags:["HTML","CSS","JS"],
      img:"assets/images/projects/dev/tiago-pedro.webp",
      demo:"https://makyneta.github.io/tiagopedro", info:"/info/dev/tiagopedro" },
  ];

  const photoData = [
    { title:"Nacional de Clubes ao Ar Livre", cat:"Sport",
      img:"assets/images/projects/photo/nacional-de-clubes-ao-ar-livre-coimbra-v2.webp",
      info:"/info/photo/fpa-nc26",
      view:"https://banlek.com/album/235f08" },

    { title:"50º Aniversário da Constituição da República Portuguesa", cat:"Event",
      img:"assets/images/projects/photo/50th-anniversary-constitution.webp",
      view:"https://banlek.com/album/258e41" },

    { title:"30º Fair Play Calazans", cat:"Sport",
      img:"assets/images/projects/photo/fair-play-calazans.webp",
      view:"https://banlek.com/album/258e71" },
  ];

  const designData = [
    { title:"Dia Internacional do Trabalhador", cat:"Social",
      img:"assets/images/projects/design/thumb/jsmg-diatrabalhador.webp" },

    { title:"Lecture Advertising Poster", cat:"Print",
      img:"assets/images/projects/design/thumb/bullying-lecture.webp" },

    { title:"Francisco Ferreira", cat:"Social",
      img:"assets/images/projects/design/thumb/francisco-ferreira.webp" },
  ];

  const devGrid = document.getElementById('pf-grid-dev');
  if (devGrid) {
    devData.forEach((p, i) => {
      const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      devGrid.insertAdjacentHTML('beforeend', `
        <div class="pf-card-dev">
          <div class="pf-dev-filepath">
            <span class="pfp-path">~/projetos/</span><span class="pfp-file">${slug}.html</span>
            <span class="pfp-num">0${i + 1}</span>
          </div>
          <div class="pf-dev-img">
            <img src="${p.img}" alt="${p.title}" loading="lazy"/>
          </div>
          <div class="pf-dev-body">
            <h3 class="pf-dev-title">${p.title}</h3>
            <p class="pf-dev-desc">${p.desc}</p>
            <div class="pf-dev-tags">${p.tags.map(t => `<span class="pf-dev-tag">${t}</span>`).join('')}</div>
            <div class="pf-dev-actions">
              ${p.info ? `<a href="${p.info}">${INFO_ICON} Info</a>` : ''}
              <a href="${p.demo}" target="_blank" rel="noopener">${EXT} Visitar</a>
            </div>
          </div>
        </div>
      `);
    });
  }

  // useExternalView = true → o botão "Ver" abre p.view num separador novo (site exterior)
  // useExternalView = false → o botão "Ver" abre a lightbox interna (galeria própria)
  function buildLabelCards(gridId, data, useExternalView) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    data.forEach((p, i) => {
      const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const full = p.full || p.img.replace(/thumb\//, 'preview/');

      let ver;
      if (useExternalView && p.view) {
        ver = `<a href="${p.view}" class="pfd-btn pfd-view" target="_blank" rel="noopener">${VIEW_ICON} Ver</a>`;
      } else {
        ver = `<button type="button" class="pfd-btn pfd-view" data-src="${full}" data-title="${p.title}">${VIEW_ICON} Ver</button>`;
      }

      grid.insertAdjacentHTML('beforeend', `
        <div class="pf-card-design">
          <div class="pf-dev-filepath">
            <span class="pfp-path">~/galeria/</span><span class="pfp-file">${slug}.webp</span>
            <span class="pfp-num">0${i + 1}</span>
          </div>
          <div class="pf-design-img">
            <img src="${p.img}" alt="${p.title}" loading="lazy"/>
          </div>
          <div class="pf-design-label">
            <span class="pf-design-cat">${p.cat}</span>
            <h3 class="pf-design-title">${p.title}</h3>
            <div class="pf-design-actions">
              ${p.info ? `<a href="${p.info}" class="pfd-btn pfd-info">${INFO_ICON} Info</a>` : ''}
              ${ver}
            </div>
          </div>
        </div>
      `);
    });
  }
  buildLabelCards('pf-grid-photo', photoData, true);    // fotografia → links externos
  buildLabelCards('pf-grid-design', designData, false); // design → lightbox interna

  /* ── Lightbox (popup de imagem) — usado apenas para design ── */
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.setAttribute('aria-hidden', 'true');
  lb.innerHTML = `
    <button type="button" class="lb-close" aria-label="Fechar">&times;</button>
    <figure class="lb-fig">
      <img id="lb-img" src="" alt=""/>
      <figcaption class="lb-cap"></figcaption>
    </figure>`;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('#lb-img');
  const lbCap = lb.querySelector('.lb-cap');

  function lbOpen(src, title) {
    lbImg.src = src;
    lbImg.alt = title;
    lbCap.textContent = title;
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    history.pushState({ lightbox: src }, '', '#ver=' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
  }
  function lbClose() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (location.hash.startsWith('#ver=')) history.back();
  }
  function lbCloseNoBack() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', e => {
    const view = e.target.closest('.pfd-view');
    if (view && view.tagName === 'BUTTON') {
      e.preventDefault();
      lbOpen(view.dataset.src, view.dataset.title);
      return;
    }
    if (e.target === lb || e.target.classList.contains('lb-close')) lbClose();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lb.classList.contains('open')) lbClose();
  });
  window.addEventListener('popstate', () => {
    if (lb.classList.contains('open')) lbCloseNoBack();
  });
})();

/* ── Hero terminal typing ── */
(function(){
  const win = document.querySelector('.term-window');
  if (!win) return;
  const lines = Array.prototype.slice.call(win.querySelectorAll('.term-line'));
  if (!lines.length) return;

  win.classList.add('term-anim');

  const TYPING_MS = 45;

  function typeCommand(line){
    const cmd = line.querySelector('.term-cmd');
    if (!cmd) return Promise.resolve();
    const full = cmd.textContent;
    cmd.textContent = '';
    return new Promise(resolve => {
      let n = 0;
      const iv = setInterval(() => {
        n++;
        cmd.textContent = full.slice(0, n);
        if (n >= full.length) {
          clearInterval(iv);
          setTimeout(resolve, 260);
        }
      }, TYPING_MS);
    });
  }

  async function run(){
    for (let i = 0; i < lines.length; i++){
      const line = lines[i];
      line.classList.add('in');
      if (line.querySelector('.term-cmd')) {
        await typeCommand(line);
      } else {
        await new Promise(r => setTimeout(r, 360));
      }
    }
  }

  setTimeout(run, 2100);
})();