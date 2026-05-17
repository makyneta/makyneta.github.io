    /* ═══════════════════════════════════════════════════════════════
       DATA — mirrors the JS data from dev.html, photo.html, design.html
       Sorted by id DESC, top 3 picked automatically
    ═══════════════════════════════════════════════════════════════ */
 
    /* ── DEV PROJECTS (from dev.html) ── */
    const DEV_PROJECTS = [
      { id:12, title:"LS Videomaker", type:"frontend",
        img:"/assets/images/projects/dev/lsvideomaker.jpg",
        code:"https://github.com/makyneta/lsvideomaker",
        demo:"https://makyneta.github.io/lsvideomaker" },

      { id:11, title:"JS Marinha Grande", type:"frontend",
        img:"/assets/images/projects/dev/jsmarinhagrande.jpg",
        code:"https://github.io/makyneta/jsmarinhagrande",
        demo:"https://makyneta.github.io/jsmarinhagrande" },

      { id:10, title:"Nicholas Simões", type:"frontend",
        img:"/assets/images/projects/dev/nicholassimoes.jpg",
        code:"https://github.com/makyneta/nico",
        demo:"https://makyneta.github.io/nico" },

      { id:9, title:"Amalias", type:"frontend",
        img:"/assets/images/projects/dev/amalias.jpg",
        code:"https://github.com/makyneta/amalias",
        demo:"https://makyneta.github.io/amalias" },

      { id:8, title:"Mayday", type:"frontend",
        img:"/assets/images/projects/dev/mayday.jpg",
        code:"https://github.com/makyneta/mayday",
        demo:"https://makyneta.github.io/mayday" },

      { id:7, title:"Nickz", type:"frontend",
        img:"/assets/images/projects/dev/nickz.jpg",
        code:"https://github.com/makyneta/nickz",
        demo:"https://makyneta.github.io/nickz" },

      { id:6, title:"Francisco Ferreira", type:"frontend",
        img:"/assets/images/projects/dev/francisco-ferreira.jpg",
        code:"https://github.com/makyneta/franciscoferreira",
        demo:"https://makyneta.github.io/franciscoferreira" },

      { id:5, title:"Donut-Man", type:"fullstack",
        img:"/assets/images/projects/dev/personal/donut-man.jpg",
        code:"https://github.com/makyneta/donutman",
        demo:"https://makyneta.github.io/donutman" },

      { id:4, title:"Lavagem LV", type:"frontend",
        img:"/assets/images/projects/dev/lavagem-lv.jpg",
        code:"https://github.com/makyneta/lavagemlv",
        demo:"https://makyneta.github.io/lavagemlv" },

      { id:3, title:"Ice J (I Love You)", type:"frontend",
        img:"/assets/images/projects/dev/ice-j.jpg",
        code:"https://github.com/makyneta/icejiloveyou",
        demo:"https://makyneta.github.io/icejiloveyou" },

      { id:2, title:"Mesa P'ra 4", type:"frontend",
        img:"/assets/images/projects/dev/mesa-pra-4.jpg",
        code:"https://github.com/makyneta/mesapra4",
        demo:"https://makyneta.github.io/mesapra4" },

      { id:1, title:"Tiago Pedro", type:"frontend",
        img:"/assets/images/projects/dev/tiago-pedro.jpg",
        code:"https://github.com/makyneta/tiagopedro",
        demo:"https://makyneta.github.io/tiagopedro" },
    ];
 
    /* ── PHOTO PROJECTS (from photo.html) ── */
    const PHOTO_PROJECTS = [
      { id:9, title:"50th Anniversary of the Constitution of the Portuguese Republic",
        category:"event", year:"2026", location:"Marinha Grande", desc:"",
        cover:"assets/images/projects/photo/cover/50th-anniversary-constitution.jpg",
        slug:"/50anniversaryconstitution", photoCount:127 },

      { id:8, title:"Fair Play Calazans",
        category:"sport", year:"2026", location:"Marinha Grande", desc:"",
        cover:"assets/images/projects/photo/cover/fair-play-calazans.jpg",
        slug:"/fairplaycalazans", photoCount:1129 },

      { id:7, title:"PombalCup",
        category:"sport", year:"2025", location:"Pombal",
        desc:"",
        cover:"assets/images/projects/photo/cover/pombalcup.jpg",
        slug:"", photoCount:0 },
      
      { id:6, title:"Penetras",
        category:"portrait", year:"2025", location:"Marinha Grande",
        desc:"",
        cover:"assets/images/projects/photo/cover/penetras.jpg",
        slug:"", photoCount:0 },
      
      { id:5, title:"Penetras @ Estrelas ao Sábado",
        category:"event", year:"2024", location:"Lisboa",
        desc:"",
        cover:"assets/images/projects/photo/cover/penetras-estrelas-ao-sabado.jpg",
        slug:"", photoCount:0 },
      
      { id:4, title:"Costa da Caparica Fishermen's Sports Group",
        category:"sport", year:"2024", location:"Marinha Grande",
        desc:"",
        cover:"assets/images/projects/photo/cover/gdpcc.jpg",
        slug:"", photoCount:0 },
      
      { id:3, title:"IberoAlpla",
        category:"sport", year:"2024", location:"Marinha Grande",
        desc:"IberoAlpla in the inter-company tournament.",
        cover:"assets/images/projects/photo/cover/iberoalpla.jpg",
        slug:"", photoCount:0 },
      
      { id:2,  title:"Song Raiders",
        category:"event", year:"2024", location:"Marinha Grande",
        desc:"Song Raiders live at the Marinha Grande City Festivals 2024, with Kalú, bassist of Xutos & Pontapés.",
        cover:"assets/images/projects/photo/cover/song-raiders.jpg",
        slug:"", photoCount:0 },
      
      { id:1,  title:"Penetras Live",
        category:"event", year:"2024", location:"Marinha Grande", desc:"",
        cover:"assets/images/projects/photo/cover/penetras-live.jpg",
        slug:"", photoCount:0 },
    ];
 
    /* ── DESIGN PROJECTS (from design.html) ── */
    const DESIGN_PROJECTS = [
      { id:8, title:"Dia Internacional do Trabalhador",
        category:"social", tags:["Illustrator","Photoshop"],
        desc:"",
        image:"assets/images/projects/design/thumb/jsmg-diatrabalhador.jpg",
        preview:"assets/images/projects/design/preview/jsmg-diatrabalhador.jpg",
        link:"design" },

      { id:7, title:"Dia da Revolução dos Cravos",
        category:"social", tags:["Illustrator","Photoshop"],
        desc:"",
        image:"assets/images/projects/design/thumb/jsmg-revolucaocravos.jpg",
        preview:"assets/images/projects/design/preview/jsmg-revolucaocravos.jpg",
        link:"design" },

      { id:6, title:"Fair Play Calazans",
        category:"event", tags:["Illustrator"],
        desc:"",
        image:"assets/images/projects/design/thumb/fair-play-calazans.jpg",
        preview:"assets/images/projects/design/preview/fair-play-calazans.jpg",
        link:"design" },

      { id:5, title:"Nacional Day of Student",
        category:"social", tags:["Illustrator","Photoshop"],
        desc:"",
        image:"assets/images/projects/design/thumb/jsmg-diaestudante.jpg",
        preview:"assets/images/projects/design/preview/jsmg-diaestudante.jpg",
        link:"design" },

      { id:4, title:"JS Visita Sede PS",
        category:"social", tags:["Illustrator"],
        desc:"",
        image:"assets/images/projects/design/thumb/jsmg-visitaps.jpg",
        preview:"assets/images/projects/design/preview/jsmg-visitaps.jpg",
        link:"design" },

      { id:3, title:"JS Visita Parlamento",
        category:"social", tags:["Illustrator"],
        desc:"",
        image:"assets/images/projects/design/thumb/jsmg-visitaparl.jpg",
        preview:"assets/images/projects/design/preview/jsmg-visitaparl.jpg",
        link:"design" },

      { id:2, title:"Lecture Advertising Poster",
        category:"print", tags:["Illustrator","Photoshop"],
        desc:"",
        image:"assets/images/projects/design/thumb/bullying-lecture.jpg",
        preview:"assets/images/projects/design/preview/bullying-lecture.jpg",
        link:"design" },

      { id:1, title:"Francisco Ferreira",
        category:"social", tags:["Canva","Remax"],
        desc:"",
        image:"assets/images/projects/design/thumb/francisco-ferreira.jpg",
        preview:"assets/images/projects/design/preview/francisco-ferreira.jpg",
        link:"design" },
    ];
 
    /* ─── Arrow SVG ─── */
    const ARR = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
 
    /* ─── Build card ─── */
    function buildCard(href, imgSrc, tag, title, desc, year, target) {
      const tgt = target ? `target="${target}" rel="noopener"` : '';
      const img = imgSrc
        ? `<div class="card-img" style="background-image:url('${imgSrc}')"></div>`
        : `<div class="card-no-img">[no preview]</div>`;
      const d   = desc ? `<p class="card-desc">${desc}</p>` : '';
      return `
        <a href="${href}" ${tgt} class="project-card">
          ${img}
          <div class="card-content">
            <span class="card-tag">${tag}</span>
            <h3 class="card-title">${title}</h3>
            ${d}
            <div class="card-footer">
              <span class="card-year">${year}</span>
              <span class="card-arrow">View ${ARR}</span>
            </div>
          </div>
        </a>`;
    }
 
    /* ─── Populate DEV ─── */
    (function(){
      const top3 = [...DEV_PROJECTS].sort((a,b)=>b.id-a.id).slice(0,3);
      const grid = document.getElementById('grid-dev');
      grid.innerHTML = top3.map(p =>
        buildCard(p.demo, p.img, `${p.type.charAt(0).toUpperCase()+p.type.slice(1)} · Website`, p.title, '', p.year, '_blank')
      ).join('');
      setTimeout(()=>grid.querySelectorAll('.project-card').forEach((c,i)=>{ setTimeout(()=>c.classList.add('in'),i*80); }),200);
    })();
 
    /* ─── Populate PHOTO ─── */
    (function(){
      const top3 = [...PHOTO_PROJECTS].sort((a,b)=>b.id-a.id).slice(0,3);
      const grid = document.getElementById('grid-photo');
      grid.innerHTML = top3.map(p => {
        const href = p.slug || 'photo';
        const desc = p.photoCount > 0 ? `${p.photoCount.toLocaleString()} frames · ${p.location}` : p.location;
        return buildCard(href, p.cover, `Photography · ${p.category}`, p.title, desc, p.year, '');
      }).join('');
      setTimeout(()=>grid.querySelectorAll('.project-card').forEach((c,i)=>{ setTimeout(()=>c.classList.add('in'),i*80); }),400);
    })();
 
    /* ─── Populate DESIGN ─── */
    (function(){
      const top3 = [...DESIGN_PROJECTS].sort((a,b)=>b.id-a.id).slice(0,3);
      const grid = document.getElementById('grid-design');
      grid.innerHTML = top3.map(p =>
        buildCard(p.link||'design', p.image, `Design · ${p.category}`, p.title, (p.tags||[]).join(' · '), p.year, '')
      ).join('');
      setTimeout(()=>grid.querySelectorAll('.project-card').forEach((c,i)=>{ setTimeout(()=>c.classList.add('in'),i*80); }),600);
    })();
 
    /* ─── Filter ─── */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sections   = document.querySelectorAll('.cat-section');
    const marquees   = document.querySelectorAll('.mq-div');
 
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
 
        sections.forEach(sec => {
          sec.classList.toggle('hidden', f !== 'all' && sec.dataset.category !== f);
        });
        marquees.forEach(mq => {
          mq.style.display = f === 'all' ? '' : 'none';
        });
      });
    });
 
    /* ─── Reveal ─── */
    const ro = new IntersectionObserver(
      entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: .05 }
    );
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
 
    /* ─── Progress ─── */
    window.addEventListener('scroll', () => {
      document.getElementById('bar').style.width =
        Math.min(window.scrollY / (document.documentElement.scrollHeight - innerHeight) * 100, 100) + '%';
    });
 
    /* ─── Cursor ─── */
    const cx = document.getElementById('cx'), cy = document.getElementById('cy');
    let mx=0,my=0,rx=0,ry=0;
    document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cx.style.left=mx+'px'; cx.style.top=my+'px'; });
    (function a(){ rx+=(mx-rx)*.11; ry+=(my-ry)*.11; cy.style.left=rx+'px'; cy.style.top=ry+'px'; requestAnimationFrame(a); })();
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => { cy.style.width='52px'; cy.style.height='52px'; cy.style.borderColor='rgba(200,164,80,.7)'; });
      el.addEventListener('mouseleave', () => { cy.style.width='32px'; cy.style.height='32px'; cy.style.borderColor='rgba(200,164,80,.32)'; });
    });
