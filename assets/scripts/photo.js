    const PROJECTS = [
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
 
    /* Cursor */
    const cx=document.getElementById('cx'), cy=document.getElementById('cy');
    let mx=0,my=0,rx=0,ry=0;
    document.addEventListener('mousemove',e=>{
      mx=e.clientX;my=e.clientY;
      cx.style.left=mx+'px';cx.style.top=my+'px';
    });
    (function a(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;cy.style.left=rx+'px';cy.style.top=ry+'px';requestAnimationFrame(a);})();
    document.querySelectorAll('a,button').forEach(el=>{
      el.addEventListener('mouseenter',()=>{cy.style.width='54px';cy.style.height='54px';cy.style.borderColor='rgba(198,162,78,.7)';});
      el.addEventListener('mouseleave',()=>{cy.style.width='32px';cy.style.height='32px';cy.style.borderColor='rgba(198,162,78,.35)';});
    });
