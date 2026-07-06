    const PROJECTS = [
      { id:5, title:"Nacional de Clubes ao Ar Livre",
        category:"sport", year:"2026", location:"Coimbra", desc:"",
        cover:"/assets/images/projects/photo/nacional-de-clubes-ao-ar-livre-coimbra.webp",
        info:"/info/photo/fpa-nc26",
        slug:"https://banlek.com/album/235f08-nacional-de-clubes-ao-ar-livre", photoCount:670 },

      { id:4, title:"50th Anniversary of the Constitution of the Portuguese Republic",
        category:"event", year:"2026", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/50th-anniversary-constitution.webp",
        slug:"/50anniversaryconstitution", photoCount:127 },

      { id:3, title:"Costa da Caparica Fishermen's Sports Group",
        category:"sport", year:"2024", location:"Marinha Grande",
        desc:"",
        cover:"/assets/images/projects/photo/gdpcc.webp",
        slug:"", photoCount:0 },
      
      { id:2, title:"IberoAlpla",
        category:"sport", year:"2024", location:"Marinha Grande",
        desc:"IberoAlpla in the inter-company tournament.",
        cover:"/assets/images/projects/photo/iberoalpla.webp",
        slug:"", photoCount:0 },
      
      { id:1,  title:"Song Raiders",
        category:"event", year:"2024", location:"Marinha Grande",
        desc:"Song Raiders live at the Marinha Grande City Festivals 2024, with Kalú, bassist of Xutos & Pontapés.",
        cover:"/assets/images/projects/photo/song-raiders.webp",
        slug:"", photoCount:0 },
    ];
 
    const CATS = [
      {id:'all',label:'All'},{id:'event',label:'Event'},{id:'sport',label:'Sport'},
      {id:'portrait',label:'Portrait'},{id:'street',label:'Street'},{id:'nature',label:'Nature'},
    ];
 
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
        ? `<img src="${p.cover}" alt="${p.title}" loading="lazy" onerror="this.closest('.c-img').innerHTML='<div class=\\'no-img\\'>[no preview]</div>'">`
        : `<div class="no-img">[no preview]</div>`;
      const fr = p.photoCount>0 ? `<span class="c-frames">${p.photoCount.toLocaleString()} frames</span>` : '';
      const desc = p.desc ? `<p class="c-desc">${p.desc}</p>` : '';
      const infoBtn = p.info ? `<a href="${p.info}" class="c-btn">Info</a>` : '';
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
            <div class="c-meta">
              ${p.year?`<span>${p.year}</span>`:''}
              ${p.year&&p.location?`<span class="c-sep">·</span>`:''}
              ${p.location?`<span>${p.location}</span>`:''}
            </div>
            ${desc}
            <div class="c-actions">
              ${infoBtn}
              ${p.slug ? `<a href="${p.slug}" target="_blank" rel="noopener" class="c-btn">${EXT} View photos</a>` : ''}
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
        g.innerHTML=`<div style="padding:5rem;font-family:var(--font-m);font-size:.48rem;letter-spacing:.28em;color:var(--dim);text-transform:uppercase;grid-column:1/-1">No projects found.</div>`;
        return;
      }
      g.innerHTML = pool.map(card).join('');
      requestAnimationFrame(()=>{
        g.querySelectorAll('.card').forEach((c,i)=>{
          setTimeout(()=>c.classList.add('in'), i*60);
        });
      });
      g.querySelectorAll('.c-img').forEach(el=>{
        el.addEventListener('mouseenter',()=>document.body.classList.add('enlarge'));
        el.addEventListener('mouseleave',()=>document.body.classList.remove('enlarge'));
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
 

