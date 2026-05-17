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
  document.querySelectorAll('a,button,.disc-card,.stat-cell').forEach(el=>{
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