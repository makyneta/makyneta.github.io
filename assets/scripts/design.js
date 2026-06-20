    /* ── Data ── */
    const PROJECTS = [
      { id:14, title:"2 Years of Government - The Government Fails",
        category:"social", tags:["Illustrator","Photoshop","Canva"],
        desc:"2 Anos de Governo - O Governo Falha",
        client:"PS Leiria",
        image:"/assets/images/projects/design/thumb/2-anos-de-governo-o-governo-falha-ps-leiria.webp",
        preview:"/assets/images/projects/design/preview/2-anos-de-governo-o-governo-falha-ps-leiria.webp",
        link:"" },

      { id:13, title:"Afirmar Leiria",
        category:"social", tags:["Illustrator","Photoshop","Canva"],
        desc:"",
        client:"PS Leiria",
        image:"/assets/images/projects/design/thumb/afirmar-leiria.webp",
        preview:"/assets/images/projects/design/preview/afirmar-leiria.webp",
        link:"" },

      { id:12, title:"Who I Am?",
        category:"social", tags:["Illustrator","Photoshop","Canva"],
        desc:"",
        client:"Emanuel OLiveira",
        image:"/assets/images/projects/design/thumb/emanuel-oliveira-who-i-am-post.webp",
        preview:"/assets/images/projects/design/preview/emanuel-oliveira-who-i-am-post.webp",
        link:"" },

      { id:12, title:"António Pedro",
        category:"social", tags:["Illustrator","Photoshop","Canva"],
        desc:"",
        image:"/assets/images/projects/design/thumb/antonio-pedro.webp",
        preview:"/assets/images/projects/design/preview/antonio-pedro.webp",
        link:"" },

      { id:11, title:"Emanuel Oliveira",
        category:"social", tags:["Illustrator","Photoshop","Canva"],
        desc:"",
        image:"/assets/images/projects/design/thumb/emanuel-oliveira.webp",
        preview:"/assets/images/projects/design/preview/emanuel-oliveira.webp",
        link:"" },

      { id:10, title:"TUMG @ Student Day",
        category:"social", tags:["Illustrator","Photoshop"],
        desc:"",
        client:"JS Marinha Grande",
        image:"/assets/images/projects/design/thumb/jsmg-tumg.webp",
        preview:"/assets/images/projects/design/preview/jsmg-tumg.webp",
        link:"" },

      { id:9, title:"Quinta-feira da Ascensão",
        category:"social", tags:["Illustrator","Photoshop"],
        desc:"",
        client:"JS Marinha Grande",
        image:"/assets/images/projects/design/thumb/jsmg-quintafeiraascensao.webp",
        preview:"/assets/images/projects/design/preview/jsmg-quintafeiraascensao.webp",
        link:"" },

      { id:8, title:"Dia Internacional do Trabalhador",
        category:"social", tags:["Illustrator","Photoshop"],
        desc:"",
        client:"JS Marinha Grande",
        image:"/assets/images/projects/design/thumb/jsmg-diatrabalhador.webp",
        preview:"/assets/images/projects/design/preview/jsmg-diatrabalhador.webp",
        link:"" },

      { id:7, title:"Dia da Revolução dos Cravos",
        category:"social", tags:["Illustrator","Photoshop"],
        desc:"",
        client:"JS Marinha Grande",
        image:"/assets/images/projects/design/thumb/jsmg-revolucaocravos.webp",
        preview:"/assets/images/projects/design/preview/jsmg-revolucaocravos.webp",
        link:"" },

      { id:5, title:"Nacional Day of Student",
        category:"social", tags:["Illustrator","Photoshop"],
        desc:"",
        client:"JS Marinha Grande",
        image:"/assets/images/projects/design/thumb/jsmg-diaestudante.webp",
        preview:"/assets/images/projects/design/preview/jsmg-diaestudante.webp",
        link:"" },

      { id:4, title:"JS Visita Sede PS",
        category:"social", tags:["Illustrator"],
        desc:"",
        client:"JS Marinha Grande",
        image:"/assets/images/projects/design/thumb/jsmg-visitaps.webp",
        preview:"/assets/images/projects/design/preview/jsmg-visitaps.webp",
        link:"" },

      { id:3, title:"JS Visita Parlamento",
        category:"social", tags:["Illustrator"],
        desc:"",
        client:"JS Marinha Grande",
        image:"/assets/images/projects/design/thumb/jsmg-visitaparl.webp",
        preview:"/assets/images/projects/design/preview/jsmg-visitaparl.webp",
        link:"" },

      { id:2, title:"Lecture Advertising Poster",
        category:"print", tags:["Illustrator","Photoshop"],
        desc:"",
        client:"AE Marinha Grande Poente",
        image:"/assets/images/projects/design/thumb/bullying-lecture.webp",
        preview:"/assets/images/projects/design/preview/bullying-lecture.webp",
        link:"" },

      { id:1, title:"Francisco Ferreira",
        category:"social", tags:["Canva","Remax"],
        desc:"",
        client:"RE/MAX Grupo Visão",
        image:"/assets/images/projects/design/thumb/francisco-ferreira.webp",
        preview:"/assets/images/projects/design/preview/francisco-ferreira.webp",
        link:"" },
    ];
 
    const CATS = [
      {id:'all',label:'All'},
      {id:'branding',label:'Branding'},
      {id:'ui',label:'UI / Digital'},
      {id:'print',label:'Print'},
      {id:'social',label:'Social Media'},
      {id:'event',label:'Event'},
    ];
 
    /* Stats */
    document.getElementById('stat-projects').textContent = PROJECTS.length;
    document.getElementById('stat-types').textContent    = new Set(PROJECTS.map(p=>p.category)).size;
 
    /* Tabs */
    (function(){
      const avail = new Set(PROJECTS.map(p=>p.category));
      const cont  = document.getElementById('filter-tabs');
      CATS.forEach(cat=>{
        if(cat.id!=='all'&&!avail.has(cat.id)) return;
        const b=document.createElement('button');
        b.className='filter-tab'+(cat.id==='all'?' active':'');
        b.dataset.cat=cat.id; b.textContent=cat.label;
        b.addEventListener('click',()=>{
          document.querySelectorAll('.filter-tab').forEach(x=>x.classList.remove('active'));
          b.classList.add('active'); render(cat.id);
        });
        cont.appendChild(b);
      });
    })();
 
    /* Build card */
    function buildCard(p,i){
      const preview = p.preview||p.image||'';
      const clickA  = p.link
        ? `href="${p.link}" target="_blank" rel="noopener"`
        : `href="#" data-lightbox="${preview}" data-caption="${p.title}"`;
      const tools   = (p.tags||[]).map(t=>`<span class="tool-pill">${t}</span>`).join('');
      const imgHtml = p.image
        ? `<img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.closest('.card-visual').innerHTML='<div class=\\'card-placeholder\\'>[no preview]</div>'">`
        : `<div class="card-placeholder">[no preview]</div>`;
      const arrow   = p.link ? 'View →' : 'Preview →';
      return `
        <a ${clickA} class="project-card" data-cat="${p.category}">
          <div class="card-visual">
            ${imgHtml}
            <div class="card-grad"></div>
            <span class="card-badge">${p.category}</span>
            <div class="card-over"><span class="card-over-tag">${arrow}</span></div>
          </div>
          <div class="card-body">
            <div class="card-top">
              <span class="card-tag">${p.category}</span>
              <span class="card-num">${String(p.id).padStart(2,'0')}</span>
            </div>
            ${p.client?`<div class="card-client">${p.client}</div>`:''}
            <h3 class="card-title">${p.title}</h3>
            ${p.desc?`<p class="card-desc">${p.desc}</p>`:''}
            <div class="card-footer">
              <div class="card-tools">${tools}</div>
              <span class="card-arrow">${arrow}</span>
            </div>
          </div>
        </a>`;
    }
 
    /* Render */
    function render(cat){
      const pool=(cat==='all'?[...PROJECTS]:PROJECTS.filter(p=>p.category===cat)).sort((a,b)=>b.id-a.id);
      const g=document.getElementById('projects-grid');
      document.getElementById('visible-count').textContent=pool.length;
      if(!pool.length){
        g.innerHTML=`<div style="padding:5rem;font-family:var(--fm);font-size:.48rem;letter-spacing:.28em;color:var(--dim);text-transform:uppercase;grid-column:1/-1">No projects found.</div>`;
        return;
      }
      g.innerHTML=pool.map((p,i)=>buildCard(p,i)).join('');
      requestAnimationFrame(()=>{
        g.querySelectorAll('.project-card').forEach((c,i)=>{
          setTimeout(()=>c.classList.add('in'),i*60);
        });
      });
      g.querySelectorAll('.card-visual').forEach(el=>{
        el.addEventListener('mouseenter',()=>document.body.classList.add('mag'));
        el.addEventListener('mouseleave',()=>document.body.classList.remove('mag'));
      });
    }
    render('all');
 
    /* Lightbox */
    const lb=document.getElementById('lightbox');
    const lbi=document.getElementById('lightbox-img');
    const lbc=document.getElementById('lightbox-caption');
    document.addEventListener('click',e=>{
      const card=e.target.closest('[data-lightbox]');
      if(!card) return;
      const src=card.dataset.lightbox;
      if(!src) return;
      e.preventDefault();
      lbi.src=src; lbi.alt=card.dataset.caption||'';
      lbc.textContent=card.dataset.caption||'';
      lb.classList.add('open');
      document.body.style.overflow='hidden';
    });
    const closeLb=()=>{
      lb.classList.remove('open');
      document.body.style.overflow='';
      setTimeout(()=>{ lbi.src=''; },400);
    };
    document.getElementById('lightbox-close').addEventListener('click',closeLb);
    lb.addEventListener('click',e=>{ if(e.target===lb) closeLb(); });
    document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeLb(); });
 
    /* Reveal */
    const ro=new IntersectionObserver(
      entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),
      {threshold:.04}
    );
    document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));
 
    /* Progress */
    window.addEventListener('scroll',()=>{
      document.getElementById('bar').style.width=
        Math.min(window.scrollY/(document.documentElement.scrollHeight-innerHeight)*100,100)+'%';
    });
 

