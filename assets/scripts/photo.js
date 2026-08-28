const PROJECTS = [
  { id:20, title:"Nacional de Clubes ao Ar Livre",
    category:"sport", year:"2026", location:"Coimbra", desc:"",
    cover:"/assets/images/projects/photo/fpa-nacionalclubes.webp",
    info:"/info/photo/fpa-nacionalclubes",
    slug:"/fpa-nacionalclubes", photoCount:670 },
    
  { id:19, title:"Sala de Espera by Libélula Teatro",
    category:"event", year:"2026", location:"Leiria", desc:"",
    cover:"/assets/images/projects/photo/tjls-salaespera.webp",
    slug:"/tjls-salaespera", photoCount:132 },

  { id:18, title:"50º Aniversário da Constituição da República Portuguesa",
    category:"event", year:"2026", location:"Marinha Grande", desc:"",
    cover:"/assets/images/projects/photo/cmmg-aniversarioconstituicao.webp",
    slug:"/cmmg-aniversarioconstituicao", photoCount:127 },

  { id:17, title:"XI Café com Livros",
    category:"event", year:"2026", location:"Marinha Grande", desc:"",
    cover:"/assets/images/projects/photo/aemgp-cafecomlivros.webp",
    slug:"/aemgp-cafecomlivros", photoCount:145 },

  { id:16, title:"30º Fair Play Calazans",
    category:"sport", year:"2026", location:"Marinha Grande", desc:"",
    cover:"/assets/images/projects/photo/eseacd-fairplay.webp",
    slug:"/eseacd-fairplay", photoCount:1129 },

  { id:15, title:"ESEACD @ Futurália",
    category:"event", year:"2026", location:"Lisboa", desc:"",
    cover:"/assets/images/projects/photo/eseacd-futuralia.webp",
    slug:"/eseacd-futuralia", photoCount:97 },

  { id:14, title:"ESEACD @ Centimfe",
    category:"event", year:"2026", location:"Marinha Grande", desc:"",
    cover:"/assets/images/projects/photo/eseacd-centimfe.webp",
    slug:"/eseacd-centimfe", photoCount:187 },

  { id:13, title:"ESEACD @ Rádio e Televisão Portuguesa",
    category:"event", year:"2026", location:"Lisboa", desc:"",
    cover:"/assets/images/projects/photo/eseacd-rtp.webp",
    slug:"/eseacd-rtp", photoCount:42 },

  { id:12, title:"18 de Janeiro de 1934",
    category:"theater", year:"2026", location:"Marinha Grande", desc:"",
    cover:"/assets/images/projects/photo/aemgp-18jan1934.webp",
    slug:"/aemgp-18jan1934", photoCount:247 },

  { id:11, title:"Festa Final ACMarinhense",
    category:"sport", year:"2025", location:"Marinha Grande", desc:"",
    cover:"/assets/images/projects/photo/acmarinhense-festa.webp",
    slug:"/acmarinhense-festa", photoCount:434 },

  { id:10, title:"SLMarinha VS UDBatalha",
    category:"sport", year:"2025", location:"Marinha Grande", desc:"",
    cover:"/assets/images/projects/photo/slmarinha-vs-udbatalha.webp",
    slug:"/slmarinha-vs-udbatalha", photoCount:99 },

  { id:9, title:"Treinos ACMarinhense U-13",
    category:"sport", year:"2025", location:"Marinha Grande", desc:"",
    cover:"/assets/images/projects/photo/acmarinhense-u13.webp",
    slug:"/acmarinhense-u13", photoCount:280 },

  { id:8, title:"XIV Mediateca com Vida",
    category:"event", year:"2025", location:"Marinha Grande", desc:"",
    cover:"/assets/images/projects/photo/aemgp-mediatecacomvida.webp",
    slug:"/aemgp-mediatecacomvida", photoCount:89 },

  { id:7, title:"ACMarinhense @ PombalCup",
    category:"sport", year:"2025", location:"Pombal", desc:"",
    cover:"/assets/images/projects/photo/acmarinhense-pombalcup.webp",
    slug:"/acmarinhense-pombalcup", photoCount:288 },

  { id:6, title:"Os Penetras @ RTP",
    category:"event", year:"2024", location:"Lisboa", desc:"",
    cover:"/assets/images/projects/photo/penetras-rtp.webp",
    slug:"/penetras-rtp", photoCount:83 },

  { id:5, title:"Os Penetras",
    category:"session", year:"2024", location:"Marinha Grande", desc:"",
    cover:"/assets/images/projects/photo/penetras.webp",
    slug:"/penetras", photoCount:43 },

  { id:4, title:"Grupo Desportivo de Pescadores da Costa da Caparica @ SLMarinha",
    category:"sport", year:"2024", location:"Marinha Grande", desc:"",
    cover:"/assets/images/projects/photo/gdpcc-slmarinha.webp",
    slug:"/gdpcc-slmarinha", photoCount:67 },

  { id:3, title:"IberoAlpla @ Torneio Inter-Empresas",
    category:"sport", year:"2024", location:"Marinha Grande", desc:"",
    cover:"/assets/images/projects/photo/iberoalpla.webp",
    slug:"/iberoalpla", photoCount:50 },

  { id:2, title:"Song Raiders",
    category:"event", year:"2024", location:"Marinha Grande", desc:"",
    cover:"/assets/images/projects/photo/cmmg-songraiders.webp",
    slug:"/cmmg-songraiders", photoCount:74 },

  { id:1, title:"Swee",
    category:"session", year:"2024", location:"", desc:"",
    cover:"/assets/images/projects/photo/swee.webp",
    slug:"/swee", photoCount:74 },
];

const CATS = [
  {id:'all',label:'Todas'},{id:'event',label:'Evento'},{id:'sport',label:'Desporto'},
  {id:'portrait',label:'Retrato'},{id:'street',label:'Rua'},{id:'nature',label:'Natureza'},
  {id:'session',label:'Sessão'},{id:'teather',label:'Teatro'},
];

/* Hero terminal typewriter */
(function(){
  const el = document.getElementById('typecmd');
  if(!el) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cmd = 'open ./portfolio --live';
  if(prefersReduced){ el.textContent = cmd; return; }
  let i = 0;
  (function type(){
    if(i <= cmd.length){
      el.textContent = cmd.slice(0, i);
      i++;
      setTimeout(type, 38);
    }
  })();
})();

/* Ticker */
(function(){
  const items = PROJECTS.map(p=>
    `<span class="tk-item"><em>${p.category.toUpperCase()}</em><span class="tk-dot"></span>${p.title}<span class="tk-dot"></span>${p.year}</span>`
  ).join('');
  const t = document.getElementById('tt');
  t.innerHTML = items+items;
})();

/* Tabs */
(function(){
  const avail = new Set(PROJECTS.map(p=>p.category));
  const c = document.getElementById('ftabs');
  CATS.forEach(cat=>{
    if(cat.id!=='all'&&!avail.has(cat.id)) return;
    const b = document.createElement('button');
    b.className='ftab'+(cat.id==='all'?' on':'');
    b.dataset.cat=cat.id; b.textContent=cat.label;
    b.addEventListener('click',()=>{
      document.querySelectorAll('.ftab').forEach(x=>x.classList.remove('on'));
      b.classList.add('on');
      render(cat.id);
    });
    c.appendChild(b);
  });
})();

const EXT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

/* Build card */
function card(p){
  const img = p.cover
    ? `<img src="${p.cover}" alt="${p.title}" loading="lazy" onerror="this.closest('.c-img').innerHTML='<div class=\\'no-img\\'>[sem pr\u00e9-visualiza\u00e7\u00e3o]</div>'">`
    : `<div class="no-img">[sem pr\u00e9-visualiza\u00e7\u00e3o]</div>`;
  const fr = p.photoCount>0 ? `<span class="c-frames">${p.photoCount.toLocaleString()} frames</span>` : '';
  const desc = p.desc ? `<p class="c-desc">${p.desc}</p>` : '';
  const infoBtn = p.info ? `<a href="${p.info}" class="c-btn">Info</a>` : '';
  const metaParts = [p.year, p.location].filter(Boolean).join(' \u00b7 ');
  return `
    <div class="card" data-cat="${p.category}">
      <div class="c-img">
        ${img}
        <div class="c-grad"></div>
        <span class="c-badge">${p.category}</span>
        ${fr}
      </div>
      <div class="c-body">
        <div class="c-title">${p.title}</div>
        ${metaParts ? `<div class="c-exif">${metaParts}</div>` : ''}
        ${desc}
        <div class="c-actions">
          ${infoBtn}
          ${p.slug ? `<a href="${p.slug}" target="_blank" rel="noopener" class="c-btn">${EXT} Ver fotos</a>` : ''}
        </div>
      </div>
    </div>`;
}

/* Render */
function render(cat){
  const pool = (cat==='all'?[...PROJECTS]:PROJECTS.filter(p=>p.category===cat))
    .sort((a,b)=>b.id-a.id);
  const g = document.getElementById('grid');
  document.getElementById('vc').textContent = pool.length;
  if(!pool.length){
    g.innerHTML=`<div style="padding:5rem;font-family:var(--font-m);font-size:.48rem;letter-spacing:.28em;color:var(--dim);text-transform:uppercase;grid-column:1/-1">Nenhum projeto encontrado.</div>`;
    return;
  }
  g.innerHTML = pool.map(card).join('');
  requestAnimationFrame(()=>{
    g.querySelectorAll('.card').forEach((c,i)=>{
      setTimeout(()=>c.classList.add('in'), i*60);
    });
  });
}
render('all');

/* Reveal */
const ro = new IntersectionObserver(
  entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),
  {threshold:.04}
);
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

/* Progress */
window.addEventListener('scroll',()=>{
  document.getElementById('bar').style.width =
    Math.min(window.scrollY/(document.documentElement.scrollHeight-innerHeight)*100,100)+'%';
});