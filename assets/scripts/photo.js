    const PROJECTS = [
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
 
    /* Stats */
    (function(){
      document.getElementById('sp').textContent = PROJECTS.length;
      const f = PROJECTS.reduce((s,p)=>s+(p.photoCount||0),0);
      document.getElementById('sf').textContent = f>0 ? f.toLocaleString() : '—';
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
 
    /* Build card */
    function card(p){
      const a = p.slug ? `href="${p.slug}"` : '';
      const img = p.cover
        ? `<img src="${p.cover}" alt="${p.title}" loading="lazy" onerror="this.closest('.c-img').innerHTML='<div class=\\'no-img\\'>[no preview]</div>'">`
        : `<div class="no-img">[no preview]</div>`;
      const fr = p.photoCount>0 ? `<span class="c-frames">${p.photoCount.toLocaleString()} frames</span>` : '';
      const desc = p.desc ? `<p class="c-desc">${p.desc}</p>` : '';
      return `
        <a ${a} class="card" data-cat="${p.category}">
          <div class="c-img">
            ${img}
            <div class="c-grad"></div>
            <span class="c-badge">${p.category}</span>
            ${fr}
            <div class="c-over"><span class="c-over-tag">View project</span></div>
          </div>
          <div class="c-body">
            <div class="c-title">${p.title}</div>
            <div class="c-meta">
              ${p.year?`<span>${p.year}</span>`:''}
              ${p.year&&p.location?`<span class="c-sep">·</span>`:''}
              ${p.location?`<span>${p.location}</span>`:''}
            </div>
            ${desc}
          </div>
        </a>`;
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
 

