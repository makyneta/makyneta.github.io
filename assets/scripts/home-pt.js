/* ── Progress ── */
window.addEventListener('scroll', () => {
  document.getElementById('bar').style.width =
    Math.min(window.scrollY / (document.documentElement.scrollHeight - innerHeight) * 100, 100) + '%';
});

/* ── Cursor (apenas desktop) ── */
const isMobile = () => window.innerWidth <= 768 || window.ontouchstart !== undefined;

if (!isMobile()) {
  const cx = document.getElementById('cx'), cy = document.getElementById('cy');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY;
    cx.style.left=mx+'px'; cx.style.top=my+'px';
  });
  (function anim(){
    rx+=(mx-rx)*.11; ry+=(my-ry)*.11;
    cy.style.left=rx+'px'; cy.style.top=ry+'px';
    requestAnimationFrame(anim);
  })();
  document.querySelectorAll('a,button,.disc-card,.stat-cell,.pf-card-dev,.pf-card-design').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cy.style.width='54px';cy.style.height='54px';cy.style.borderColor='rgba(212,175,55,.7)';});
    el.addEventListener('mouseleave',()=>{cy.style.width='32px';cy.style.height='32px';cy.style.borderColor='rgba(212,175,55,.32)';});
  });
} else {
  // Hide cursor elements on mobile
  const cx = document.getElementById('cx');
  const cy = document.getElementById('cy');
  if (cx) cx.style.display = 'none';
  if (cy) cy.style.display = 'none';
}

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
  const GH = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.68.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>`;
  const EXT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

  const devData = [
    { title:"Mr. Devix", desc:"Portfólio de marca pessoal com animações de rolagem suaves e tema escuro.", tags:["HTML","CSS","JS"], img:"../assets/images/projects/dev/mr-devix.png", code:"https://github.com/makyneta/mrdevix", demo:"https://makyneta.github.io/mrdevix" },
    { title:"Clube Atletismo de Marinha Grande", desc:"Website institucional com calendários de eventos, perfis de atletas e seções de notícias.", tags:["HTML","CSS","JS"], img:"../assets/images/projects/dev/clube-atletismo-de-marinha-grande.png", code:"https://github.com/makyneta/catletismomg", demo:"https://makyneta.github.io/catletismomg" },
    { title:"Donut-Man", desc:"Jogo de navegador fullstack com um backend Node.js e placar em tempo real.", tags:["Node.js","HTML","CSS","JS"], img:"../assets/images/projects/dev/personal/donut-man.jpg", code:"https://github.com/makyneta/donutman", demo:"https://makyneta.github.io/donutman" },
  ];

  const photoData = [
    { title:"50º Aniversário da Constituição", cat:"Evento", img:"../assets/images/projects/photo/50th-anniversary-constitution.jpg" },
    { title:"Fair Play Calazans", cat:"Desporto", img:"../assets/images/projects/photo/fair-play-calazans.jpg" },
    { title:"Penetras", cat:"Retrato", img:"../assets/images/projects/photo/penetras.jpg" },
  ];

  const designData = [
    { title:"Dia Internacional do Trabalhador", cat:"Social", img:"../assets/images/projects/design/thumb/jsmg-diatrabalhador.jpg" },
    { title:"Cartaz de divulgação da palestra", cat:"Print", img:"../assets/images/projects/design/thumb/bullying-lecture.jpg" },
    { title:"Francisco Ferreira", cat:"Social", img:"../assets/images/projects/design/thumb/francisco-ferreira.jpg" },
  ];

  const devGrid = document.getElementById('pf-grid-dev');
  if (devGrid) {
    devData.forEach(p => {
      devGrid.insertAdjacentHTML('beforeend', `
        <div class="pf-card-dev">
          <div class="pf-dev-img">
            <img src="${p.img}" alt="${p.title}" loading="lazy"/>
          </div>
          <div class="pf-dev-body">
            <h3 class="pf-dev-title">${p.title}</h3>
            <p class="pf-dev-desc">${p.desc}</p>
            <div class="pf-dev-tags">${p.tags.map(t => `<span class="pf-dev-tag">${t}</span>`).join('')}</div>
            <div class="pf-dev-actions">
              <a href="${p.code}" target="_blank" rel="noopener">${GH} REPO</a>
              <a href="${p.demo}" target="_blank" rel="noopener">${EXT} LIVE</a>
            </div>
          </div>
        </div>
      `);
    });
  }

  function buildLabelCards(gridId, data) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    data.forEach(p => {
      grid.insertAdjacentHTML('beforeend', `
        <div class="pf-card-design">
          <div class="pf-design-img">
            <img src="${p.img}" alt="${p.title}" loading="lazy"/>
          </div>
          <div class="pf-design-label">
            <span class="pf-design-cat">${p.cat}</span>
            <h3 class="pf-design-title">${p.title}</h3>
          </div>
        </div>
      `);
    });
  }
  buildLabelCards('pf-grid-photo', photoData);
  buildLabelCards('pf-grid-design', designData);
})();