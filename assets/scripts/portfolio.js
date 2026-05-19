    /* ═══════════════════════════════════════════════════════════════
       DATA — mirrors the JS data from dev.html, photo.html, design.html
       Sorted by id DESC, top 3 picked automatically
    ═══════════════════════════════════════════════════════════════ */
 
    /* ── DEV PROJECTS (from dev.html) ── */
    const DEV_PROJECTS = [
      { id:3, title:"António Pedro", type:"frontend",
        img:"/assets/images/projects/dev/antoniorpedro.png",
        code:"https://github.com/makyneta/antoniorpedro",
        demo:"https://makyneta.github.io/antoniorpedro" },

      { id:2, title:"LS Videomaker", type:"frontend",
        img:"/assets/images/projects/dev/lsvideomaker.jpg",
        code:"https://github.com/makyneta/lsvideomaker",
        demo:"https://makyneta.github.io/lsvideomaker" },

      { id:1, title:"Nicholas Simões", type:"frontend",
        img:"/assets/images/projects/dev/nicholassimoes.jpg",
        code:"https://github.com/makyneta/nico",
        demo:"https://makyneta.github.io/nico" },
    ];
 
    /* ── PHOTO PROJECTS (from photo.html) ── */
    const PHOTO_PROJECTS = [
      { id:3, title:"50th Anniversary of the Constitution of the Portuguese Republic",
        category:"event", year:"2026", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/50th-anniversary-constitution.jpg",
        slug:"/50anniversaryconstitution", photoCount:127 },

      { id:2, title:"Fair Play Calazans",
        category:"sport", year:"2026", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/fair-play-calazans.jpg",
        slug:"/fairplaycalazans", photoCount:1129 },

      { id:1, title:"PombalCup",
        category:"sport", year:"2025", location:"Pombal",
        desc:"",
        cover:"/assets/images/projects/photo/pombalcup.jpg",
        slug:"/pombalcup", photoCount:0 },
    ];
 
    /* ── DESIGN PROJECTS (from design.html) ── */
    const DESIGN_PROJECTS = [
      { id:3, title:"António Pedro",
        category:"social", tags:["Illustrator","Photoshop","Canva"],
        desc:"",
        image:"/assets/images/projects/design/thumb/antonio-pedro.jpg",
        preview:"/assets/images/projects/design/preview/antonio-pedro.jpg",
        link:"" },

      { id:2, title:"Emanuel OLiveira",
        category:"social", tags:["Illustrator","Photoshop","Canva"],
        desc:"",
        image:"/assets/images/projects/design/thumb/emanuel-oliveira.jpg",
        preview:"/assets/images/projects/design/preview/emanuel-oliveira.jpg",
        link:"" },

      { id:0, title:"TUMG _ Dia do Estudante",
        category:"social", tags:["Illustrator","Photoshop"],
        desc:"",
        image:"/assets/images/projects/design/thumb/jsmg-tumg.jpg",
        preview:"/assets/images/projects/design/preview/jsmg-tumg.jpg",
        link:"" },
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
