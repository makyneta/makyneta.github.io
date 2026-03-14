const GH = `<svg class="ico-gh" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.68.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>`;
const EXT = `<svg class="ico-ext" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

const projects = [
  { title:"Amalias",               type:"frontend",  img:"/assets/images/projects/dev/amalias.jpg",                         code:"https://github.com/makyneta/amalias",                                                       demo:"https://makyneta.github.io/amalias" },
  { title:"Mayday",                type:"frontend",  img:"/assets/images/projects/dev/mayday.jpg",                          code:"https://github.com/makyneta/mayday",                                                        demo:"https://makyneta.github.io/mayday" },
  { title:"Nickz",                 type:"frontend",  img:"/assets/images/projects/dev/nickz.jpg",                           code:"https://github.com/makyneta/nickz",                                                         demo:"https://makyneta.github.io/nickz" },
  { title:"DCA Photography",       type:"frontend",  img:"/assets/images/projects/dev/personal/dca-photography.jpg",        code:"https://github.com/makyneta/dca",                                                           demo:"https://makyneta.github.io/dca" },
  { title:"Jéssica Vieira",        type:"frontend",  img:"/assets/images/projects/dev/jessica-vieira.jpg",                  code:"https://github.com/makyneta/avieira",                                                       demo:"https://makyneta.github.io/avieira" },
  { title:"Francisco Ferreira",    type:"frontend",  img:"/assets/images/projects/dev/francisco-ferreira.jpg",              code:"https://github.com/makyneta/franciscoferreira",                                             demo:"https://makyneta.github.io/franciscoferreira" },
  { title:"Donut-Man",             type:"fullstack", img:"/assets/images/projects/dev/personal/donut-man.jpg",              code:"https://github.com/makyneta/donutman",                                                      demo:"https://makyneta.github.io/donutman" },
  { title:"Lavagem LV",            type:"frontend",  img:"/assets/images/projects/dev/lavagem-lv.jpg",                      code:"https://github.com/makyneta/lavagemlv",                                                     demo:"https://makyneta.github.io/lavagemlv" },
  { title:"Bruno Teixeira",        type:"frontend",  img:"/assets/images/projects/dev/bruno-teixeira.jpg",                  code:"https://github.com/makyneta/brunoteixeira",                                                 demo:"https://makyneta.github.io/brunoteixeira" },
  { title:"Ice J (I Love You)",    type:"frontend",  img:"/assets/images/projects/dev/ice-j.jpg",                           code:"https://github.com/makyneta/icejiloveyou",                                                  demo:"https://makyneta.github.io/icejiloveyou" },
  { title:"Rodrigo Morgado",       type:"frontend",  img:"/assets/images/projects/dev/rodrigo-morgado.jpg",                 code:"https://github.com/makyneta/rodrigomorgado",                                                demo:"https://makyneta.github.io/rodrigomorgado" },
  { title:"Mesa P'ra 4",           type:"frontend",  img:"/assets/images/projects/dev/mesa-pra-4.jpg",                      code:"https://github.com/makyneta/mesapra4",                                                      demo:"https://makyneta.github.io/mesapra4" },
  { title:"Tiago Pedro",           type:"frontend",  img:"/assets/images/projects/dev/tiago-pedro.jpg",                     code:"https://github.com/makyneta/tiagopedro",                                                    demo:"https://makyneta.github.io/tiagopedro" },
  { title:"Mateus Loureiro",       type:"frontend",  img:"/assets/images/projects/dev/mateus-loureiro.jpg",                 code:"https://github.com/makyneta/mateusloureiro",                                                demo:"https://makyneta.github.io/mateusloureiro" },
  { title:"Mount",                 type:"fullstack", img:"/assets/images/projects/dev/mount.jpg",                           code:"https://github.com/makyneta/mount",                                                         demo:"https://makyneta.github.io/mount" },
  { title:"Gonçalo Teixeira",      type:"frontend",  img:"/assets/images/projects/dev/goncalo-teixeira.jpg",                code:"https://github.com/makyneta/goncaloteixeira",                                               demo:"https://makyneta.github.io/goncaloteixeira" },
  { title:"Tomás Mota (Makyneta)", type:"fullstack", img:"/assets/images/projects/dev/personal/tomas-mota.jpg",             code:"https://github.com/makyneta/makyneta.github.io",                                            demo:"https://makyneta.github.io/" },
  { title:"Tomás Ramos",           type:"frontend",  img:"/assets/images/projects/dev/tomas-ramos.png",                     code:"https://github.com/makyneta/tomasramos",                                                    demo:"https://makyneta.github.io/tomasramos" },
  { title:"Tomás Macedo",          type:"frontend",  img:"",                                                                code:"https://github.com/makyneta/tomasmacedo",                                                   demo:"https://makyneta.github.io/tomasmacedo" },
  { title:"Flash Sale",            type:"backend",   img:"/assets/images/projects/dev/personal/1010022033937.png",          code:"https://github.com/makyneta/exploring-java-syntax-and-logic/flash-sale",                    demo:"https://makyneta.github.io/exploring-java-syntax-and-logic/flash-sale" },
  { title:"Organizing Inventory",  type:"backend",   img:"/assets/images/projects/dev/personal/1010022037110.png",          code:"https://github.com/makyneta/exploring-java-syntax-and-logic/organizing-inventory",          demo:"https://makyneta.github.io/exploring-java-syntax-and-logic/organizing-inventory" },
  { title:"Hero Level Classifier", type:"backend",   img:"/assets/images/projects/dev/personal/1010022036329.png",          code:"https://github.com/makyneta/hero-level-classifier",                                         demo:"https://makyneta.github.io/hero-level-classifier" },
  { title:"Ranked Calculator",     type:"backend",   img:"/assets/images/projects/dev/personal/1010022033727.png",          code:"https://github.com/makyneta/ranked-calculator",                                             demo:"https://makyneta.github.io/ranked-calculator" },
  { title:"Writing Hero Class Game",type:"backend",  img:"/assets/images/projects/dev/personal/1010022034785.png",          code:"https://github.com/makyneta/hero_game",                                                     demo:"https://makyneta.github.io/hero_game" },
  { title:"Credit Card Brand Validator",type:"backend",img:"/assets/images/projects/dev/personal/1010022034543.png",        code:"https://github.com/makyneta/credit-card-brand-validator",                                   demo:"https://makyneta.github.io/credit-card-brand-validator" },
];

const BADGE_LABEL = { frontend: 'Front-end', fullstack: 'Fullstack', backend: 'Back-end' };
const grid = document.getElementById('projects-grid');

projects.forEach((p, i) => {
  const imgHtml = p.img
    ? `<div class="card-img-wrap"><img src="${p.img}" alt="${p.title}" loading="lazy"/></div>`
    : `<div class="card-img-wrap no-img"></div>`;

  grid.insertAdjacentHTML('beforeend', `
    <div class="project-card" data-type="${p.type}">
      ${imgHtml}
      <div class="card-body">
        <div class="card-top">
          <span class="card-badge">${BADGE_LABEL[p.type]}</span>
          <span class="card-num">${String(i+1).padStart(2,'0')}</span>
        </div>
        <h3 class="card-title">${p.title}</h3>
        <div class="card-actions">
          <a href="${p.code}" target="_blank" rel="noopener" class="card-btn">${GH} Code</a>
          <a href="${p.demo}" target="_blank" rel="noopener" class="card-btn">${EXT} Demo</a>
        </div>
      </div>
    </div>
  `);
});

/* Update total in hero */
document.getElementById('visible-count').textContent = projects.length;
document.querySelector('.project-count').innerHTML =
  `<span id="visible-count">${projects.length}</span> Projects`;

/* Filter */
const filterBtns = document.querySelectorAll('.filter-btn');
const countEl = document.getElementById('visible-count');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    let n = 0;
    document.querySelectorAll('.project-card').forEach(card => {
      const show = f === 'all' || card.dataset.type === f;
      card.classList.toggle('hidden', !show);
      if (show) n++;
    });
    countEl.textContent = n;
  });
});

/* Scroll reveal */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.04 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));