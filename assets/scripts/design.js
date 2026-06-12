    /* ── Data ── */
    const PROJECTS = [
      { id:14, title:"2 Years of Government - The Government Fails",
        category:"social", tags:["Illustrator","Photoshop","Canva"],
        desc:"2 Anos de Governo - O Governo Falha",
        client:"PS Leiria",
        image:"/assets/images/projects/design/thumb/2-anos-de-governo-o-governo-falha-ps-leiria.jpg",
        preview:"/assets/images/projects/design/preview/2-anos-de-governo-o-governo-falha-ps-leiria.png",
        link:"" },

      { id:13, title:"Afirmar Leiria",
        category:"social", tags:["Illustrator","Photoshop","Canva"],
        desc:"",
        client:"PS Leiria",
        image:"/assets/images/projects/design/thumb/afirmar-leiria.jpg",
        preview:"/assets/images/projects/design/preview/afirmar-leiria.png",
        link:"" },

      { id:12, title:"Who I Am?",
        category:"social", tags:["Illustrator","Photoshop","Canva"],
        desc:"",
        client:"Emanuel OLiveira",
        image:"/assets/images/projects/design/thumb/emanuel-oliveira-who-i-am-post.jpg",
        preview:"/assets/images/projects/design/preview/emanuel-oliveira-who-i-am-post.jpg",
        link:"" },

      { id:12, title:"António Pedro",
        category:"social", tags:["Illustrator","Photoshop","Canva"],
        desc:"",
        image:"/assets/images/projects/design/thumb/antonio-pedro.jpg",
        preview:"/assets/images/projects/design/preview/antonio-pedro.jpg",
        link:"" },

      { id:11, title:"Emanuel Oliveira",
        category:"social", tags:["Illustrator","Photoshop","Canva"],
        desc:"",
        image:"/assets/images/projects/design/thumb/emanuel-oliveira.jpg",
        preview:"/assets/images/projects/design/preview/emanuel-oliveira.jpg",
        link:"" },

      { id:10, title:"TUMG @ Student Day",
        category:"social", tags:["Illustrator","Photoshop"],
        desc:"",
        client:"JS Marinha Grande",
        image:"/assets/images/projects/design/thumb/jsmg-tumg.jpg",
        preview:"/assets/images/projects/design/preview/jsmg-tumg.jpg",
        link:"" },

      { id:9, title:"Quinta-feira da Ascensão",
        category:"social", tags:["Illustrator","Photoshop"],
        desc:"",
        client:"JS Marinha Grande",
        image:"/assets/images/projects/design/thumb/jsmg-quintafeiraascensao.jpg",
        preview:"/assets/images/projects/design/preview/jsmg-quintafeiraascensao.jpg",
        link:"" },

      { id:8, title:"Dia Internacional do Trabalhador",
        category:"social", tags:["Illustrator","Photoshop"],
        desc:"",
        client:"JS Marinha Grande",
        image:"/assets/images/projects/design/thumb/jsmg-diatrabalhador.jpg",
        preview:"/assets/images/projects/design/preview/jsmg-diatrabalhador.jpg",
        link:"" },

      { id:7, title:"Dia da Revolução dos Cravos",
        category:"social", tags:["Illustrator","Photoshop"],
        desc:"",
        client:"JS Marinha Grande",
        image:"/assets/images/projects/design/thumb/jsmg-revolucaocravos.jpg",
        preview:"/assets/images/projects/design/preview/jsmg-revolucaocravos.jpg",
        link:"" },

      { id:5, title:"Nacional Day of Student",
        category:"social", tags:["Illustrator","Photoshop"],
        desc:"",
        client:"JS Marinha Grande",
        image:"/assets/images/projects/design/thumb/jsmg-diaestudante.jpg",
        preview:"/assets/images/projects/design/preview/jsmg-diaestudante.jpg",
        link:"" },

      { id:4, title:"JS Visita Sede PS",
        category:"social", tags:["Illustrator"],
        desc:"",
        client:"JS Marinha Grande",
        image:"/assets/images/projects/design/thumb/jsmg-visitaps.jpg",
        preview:"/assets/images/projects/design/preview/jsmg-visitaps.jpg",
        link:"" },

      { id:3, title:"JS Visita Parlamento",
        category:"social", tags:["Illustrator"],
        desc:"",
        client:"JS Marinha Grande",
        image:"/assets/images/projects/design/thumb/jsmg-visitaparl.jpg",
        preview:"/assets/images/projects/design/preview/jsmg-visitaparl.jpg",
        link:"" },

      { id:2, title:"Lecture Advertising Poster",
        category:"print", tags:["Illustrator","Photoshop"],
        desc:"",
        client:"AE Marinha Grande Poente",
        image:"/assets/images/projects/design/thumb/bullying-lecture.jpg",
        preview:"/assets/images/projects/design/preview/bullying-lecture.jpg",
        link:"" },

      { id:1, title:"Francisco Ferreira",
        category:"social", tags:["Canva","Remax"],
        desc:"",
        client:"RE/MAX Grupo Visão",
        image:"/assets/images/projects/design/thumb/francisco-ferreira.jpg",
        preview:"/assets/images/projects/design/preview/francisco-ferreira.jpg",
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
 
    /* Cursor */
    const cx=document.getElementById('cx'),cy=document.getElementById('cy');
    let mx=0,my=0,rx=0,ry=0;
    document.addEventListener('mousemove',e=>{ mx=e.clientX;my=e.clientY;cx.style.left=mx+'px';cx.style.top=my+'px'; });
    (function a(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;cy.style.left=rx+'px';cy.style.top=ry+'px';requestAnimationFrame(a);})();
    document.querySelectorAll('a,button').forEach(el=>{
      el.addEventListener('mouseenter',()=>{cy.style.width='52px';cy.style.height='52px';cy.style.borderColor='rgba(200,164,80,.7)';});
      el.addEventListener('mouseleave',()=>{cy.style.width='32px';cy.style.height='32px';cy.style.borderColor='rgba(200,164,80,.32)';});
    });
