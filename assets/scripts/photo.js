    const PROJECTS = [
      { id:20, title:"Nacional de Clubes ao Ar Livre",
        category:"sport", year:"2026", location:"Coimbra", desc:"",
        cover:"/assets/images/projects/photo/nacional-de-clubes-ao-ar-livre-coimbra-v2.webp",
        info:"/info/photo/fpa-nc26",
        slug:"https://banlek.com/album/235f08", photoCount:670 },

      { id:19, title:"Sala de Espera by Libélula Teatro",
        category:"event", year:"2026", location:"Leiria", desc:"",
        cover:"/assets/images/projects/photo/IMG_1712.webp",
        slug:"hhttps://banlek.com/album/258ffd", photoCount:132 },

      { id:18, title:"50º Aniversário da Constituição da República Portuguesa",
        category:"event", year:"2026", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/50th-anniversary-constitution.webp",
        slug:"https://banlek.com/album/258e41", photoCount:127 },

      { id:17, title:"XI Café com Livros",
        category:"event", year:"2026", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/IMG_0115.webp",
        slug:"https://banlek.com/album/258e57", photoCount:145 },

      { id:16, title:"30º Fair Play Calazans",
        category:"sport", year:"2026", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/fair-play-calazans.webp",
        slug:"https://banlek.com/album/258e71", photoCount:1129 },

      { id:15, title:"ESEACD @ Futurália",
        category:"event", year:"2026", location:"Lisboa", desc:"",
        cover:"/assets/images/projects/photo/IMG_0141.webp",
        slug:"https://banlek.com/album/258881", photoCount:97 },

      { id:13, title:"ESEACD @ Centimfe",
        category:"event", year:"2026", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/IMG_20260311_143904.webp",
        slug:"https://banlek.com/album/258881", photoCount:187 },

      { id:12, title:"ESEACD @ Rádio e Televisão Portuguesa",
        category:"event", year:"2026", location:"Lisboa", desc:"",
        cover:"/assets/images/projects/photo/694840340_18021059897822525_7492885807106114398_n.webp",
        slug:"https://banlek.com/album/2588df", photoCount:42 },

      { id:11, title:"18 de Janeiro de 1934",
        category:"teather", year:"2026", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/IMG_0678.webp",
        slug:"https://banlek.com/album/258e65", photoCount:247 },

      { id:10, title:"Festa Final ACMarinhense",
        category:"sport", year:"2025", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/6cc3c7231760081.688f7cb2419b8.webp",
        slug:"https://banlek.com/album/258ed6", photoCount:434 },

      { id:9, title:"SLMarinha VS UDBatalha",
        category:"sport", year:"2025", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/af7c62216616067.6782fa4ac440f.webp",
        slug:"https://www.behance.net/gallery/216616067/SLMarinha-VS-UDBatalha", photoCount:99 },

      { id:8, title:"Treinos ACMarinhense U-13",
        category:"sport", year:"2025", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/5dccfd231756789.688f6d74b5b34.webp",
        slug:"https://banlek.com/album/258f6a", photoCount:280 },

      { id:7, title:"XIV Mediateca com Vida",
        category:"event", year:"2025", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/xiv-mediateca-com-vida.webp",
        slug:"https://banlek.com/album/258fdb", photoCount:89 },

      { id:6, title:"ACMarinhense @ PombalCup",
        category:"sport", year:"2025", location:"Pombal", desc:"",
        cover:"/assets/images/projects/photo/pombalcup.webp",
        slug:"https://banlek.com/album/258f1d", photoCount:288 },

      { id:5, title:"Os Penetras @ RTP",
        category:"event", year:"2024", location:"Lisboa", desc:"",
        cover:"/assets/images/projects/photo/penetras-estrelas-ao-sabado.webp",
        slug:"https://www.behance.net/gallery/232190989/Music-OP-Live-Performance-at-Estrelas-ao-Sabado", photoCount:83 },

      { id:4, title:"Os Penetras",
        category:"session", year:"2024", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/penetras.webp",
        slug:"https://www.behance.net/gallery/232210639/Music-OP-Photoshoot", photoCount:43 },

      { id:3, title:"Grupo Desportivo de Pescadores da Costa da Caparica @ SLMarinha",
        category:"sport", year:"2024", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/gdpcc.webp",
        slug:"https://www.behance.net/gallery/232285927/Sport-GDPCC-Impor4mill-Sumer-Cup", photoCount:67 },
      
      { id:2, title:"IberoAlpla @ Torneio Inter-Empresas",
        category:"sport", year:"2024", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/iberoalpla.webp",
        slug:"https://www.behance.net/gallery/231766181/Sport-IA-Inter-Company-Tournament", photoCount:50 },
      
      { id:1,  title:"Song Raiders",
        category:"event", year:"2024", location:"Marinha Grande", desc:"",
        cover:"/assets/images/projects/photo/song-raiders.webp",
        slug:"https://www.behance.net/gallery/231746927/Music-SR-LIve-Performance-at-MG2024CF", photoCount:74 },
      
      { id:1,  title:"Swee",
        category:"session", year:"2024", location:"", desc:"",
        cover:"/assets/images/projects/photo/1eb341227516617.6841597ee202d.webp",
        slug:"https://www.behance.net/gallery/227516617/Swees-Strawberry-with-Chocolate-Chips-Ice-Cream", photoCount:74 },
    ];
 
    const CATS = [
      {id:'all',label:'Todas'},{id:'event',label:'Evento'},{id:'sport',label:'Desporto'},
      {id:'portrait',label:'Retrato'},{id:'street',label:'Rua'},{id:'nature',label:'Natureza'},
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
        ? `<img src="${p.cover}" alt="${p.title}" loading="lazy" onerror="this.closest('.c-img').innerHTML='<div class=\\'no-img\\'>[sem pr\u00e9-visualiza\u00e7\u00e3o]</div>'">`
        : `<div class="no-img">[sem pr\u00e9-visualiza\u00e7\u00e3o]</div>`;
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
              ${p.year&&p.location?`<span class="c-sep">\u00b7</span>`:''}
              ${p.location?`<span>${p.location}</span>`:''}
            </div>
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
 

