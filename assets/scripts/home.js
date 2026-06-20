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

  const devData = [
    { title:"Clube Atletismo de Marinha Grande", desc:"", tags:["HTML","CSS","JS"],
      img:"assets/images/projects/dev/clube-atletismo-de-marinha-grande.webp",
      demo:"https://www.catletismomg.pt", info:"/info/dev/camg" },
    
    { title:"Nicholas Simões", desc:"", tags:["HTML","CSS","JS"],
      img:"assets/images/projects/dev/nicholas-simoes.webp",
      demo:"https://makyneta.github.io/nico", info:"/info/dev/nico" },
    
    { title:"Mesa P'ra 4", desc:"", tags:["HTML","CSS","JS"],
      img:"assets/images/projects/dev/mesa-pra-4.webp",
      demo:"https://makyneta.github.io/mesapra4", info:"/info/dev/mesapra4" },
  ];

  const photoData = [
    { title:"50th Anniversary of the Constitution", cat:"Event",
      img:"assets/images/projects/photo/50th-anniversary-constitution.webp" },

    { title:"Fair Play Calazans", cat:"Sport",
      img:"assets/images/projects/photo/fair-play-calazans.webp" },

    { title:"Penetras", cat:"Portrait",
      img:"assets/images/projects/photo/penetras.webp" },
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
              ${p.info ? `<a href="${p.info}"><i class="fa-solid fa-circle-info"></i> Info</a>` : ''}
              <a href="${p.demo}" target="_blank" rel="noopener">${EXT} Visit</a>
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