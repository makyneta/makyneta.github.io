    /* ── SVG Icons ── */
    const EXT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

    const BADGE = { frontend: 'Front-end', fullstack: 'Fullstack', backend: 'Back-end' };
    const TYPE_COLOR = { frontend: '#00ff88', fullstack: '#00d4ff', backend: '#ffd700' };

    /* ── Projects data ── */
    const projects = [
      { id:17, title:"Mayday", type:"frontend",
        img:"/assets/images/projects/dev/mayday.webp",
        desc:"Landing page do evento com cronómetro de contagem decrescente, line-up, fluxo de compra de bilhetes e informações sobre o local.",
        demo:"https://makyneta.github.io/mayday",
        info:"/info/dev/mayday" },

      { id:16, title:"Victor Campos", type:"frontend",
        img:"/assets/images/projects/dev/victor-campos.webp",
        desc:"Website para o influenciador, Victor Campos.",
        demo:"https://makyneta.github.io/victor",
        info:"/info/dev/victor" },

      { id:15, title:"Math For Teens", type:"fullstack",
        img:"/assets/images/projects/dev/math-for-teens.webp",
        desc:"Website educacional para ensinar matemática a adolescentes.",
        demo:"https://mathforteens.pt",
        info:"/info/dev/mathforteens" },

      { id:14, title:"Nicholas Moraes", type:"frontend",
        img:"/assets/images/projects/dev/nicholas-moraes.webp",
        desc:"Website profissional e minimalista para o influenciador e músico, Nicholas Moraes.",
        demo:"https://makyneta.github.io/m0rwes",
        info:"/info/dev/m0rwes" },

      { id:13, title:"Libélula Teatro", type:"frontend",
        img:"/assets/images/projects/dev/libelula-teatro.webp",
        desc:"Website profissional e minimalista para a companhia de teatro Libélula Teatro.",
        demo:"https://libelulateatro.lovable.app",
        info:"" },

      { id:12, title:"Mr. Devix", type:"frontend",
        img:"/assets/images/projects/dev/mr-devix.webp",
        desc:"Portfólio de marca pessoal para um criador de conteúdos digitais. Design minimalista com animações de scroll suave e tema escuro.",
        demo:"https://makyneta.github.io/mrdevix",
        info:"/info/dev/mrdevix" },

      { id:11, title:"Clube Atletismo de Marinha Grande", type:"frontend",
        img:"/assets/images/projects/dev/clube-atletismo-de-marinha-grande.webp",
        desc:"Website institucional para um clube de atletismo com calendário de eventos, perfis de atletas e seções de notícias.",
        demo:"https://makyneta.github.io/catletismomg",
        info:"/info/dev/camg" },

      { id:10, title:"Nicholas Simões", type:"frontend",
        img:"/assets/images/projects/dev/nicholas-simoes.webp",
        desc:"Website pessoal para um fotógrafo e videógrafo, apresentando uma galeria de alvenaria e um visualizador de caixa de luz.",
        demo:"https://makyneta.github.io/nico",
        info:"/info/dev/nico" },

      { id:9, title:"Juventude Socialista Marinha Grande", type:"frontend",
        img:"/assets/images/projects/dev/js-marinhagrande.webp",
        desc:"Website de movimento juvenil político com promoção de eventos, páginas de manifesto e formulários de inscrição de membros.",
        demo:"https://makyneta.github.io/jsmarinhagrande",
        info:"" },

      { id:8, title:"Amalias", type:"frontend",
        img:"/assets/images/projects/dev/amalias.webp",
        desc:"Site de marca para um restaurante local. Inclui menu digital, mapa de localização e sistema de reservas.",
        demo:"https://makyneta.github.io/amalias",
        info:"" },

      { id:7, title:"LS Videomaker", type:"frontend",
        img:"/assets/images/projects/dev/ls-videomaker.webp",
        desc:"Portfólio de produção de vídeos com uma galeria de vídeos, exposição de clientes e formulário de contato para agendamentos.",
        demo:"https://makyneta.github.io/lsvideomaker",
        info:"" },

      { id:6, title:"MakyScale", type:"backend",
        img:"/assets/images/projects/dev/makyscale.webp",
        desc:"Site para ampliar imagens profissionalmente até 6 vezes com o auxílio de Inteligência Artificial.",
        demo:"https://makyscale.lovable.app",
        info:"" },

      { id:5, title:"Nickz", type:"frontend",
        img:"/assets/images/projects/dev/nickz.webp",
        desc:"Site de marca pessoal para um músico, com discografia, datas de digressão e galeria de media.",
        demo:"https://makyneta.github.io/nickz",
        info:"" },

      { id:4, title:"Francisco Ferreira", type:"frontend",
        img:"/assets/images/projects/dev/francisco-ferreira.webp",
        desc:"Portfólio profissional para um diretor criativo, apresentando projetos de identidade de marca e estudos de caso.",
        demo:"https://makyneta.github.io/franciscoferreira",
        info:"" },

      { id:3, title:"Donut-Man", type:"fullstack",
        img:"/assets/images/projects/dev/donut-man.webp",
        desc:"Jogo de browser *full-stack* com *backend* em Node.js, placar de líderes em tempo real e perfis de jogador persistentes.",
        demo:"https://makyneta.github.io/donutman",
        info:"" },

      { id:2, title:"Ice J (I Love You)", type:"frontend",
        img:"/assets/images/projects/dev/ice-j.webp",
        desc:"Site promocional de música com faixas incorporadas, páginas de letras, loja de mercadorias e agenda de turnês.",
        demo:"https://makyneta.github.io/icejiloveyou",
        info:"/info/dev/icej" },

      { id:1, title:"Tiago Pedro", type:"frontend",
        img:"/assets/images/projects/dev/tiago-pedro.webp",
        desc:"Website de currículo pessoal com linha do tempo de habilidades, portfólio de projetos e um currículo baixável em PDF.",
        demo:"https://makyneta.github.io/tiagopedro",
        info:"/info/dev/tiagopedro" },
    ];

    /* ── Build cards ── */
    const grid = document.getElementById('projects-grid');

    projects.forEach((p, i) => {
      const slug = p.title.toLowerCase().replace(/[^a-z0-9]/g,'-');
      const col  = TYPE_COLOR[p.type];

      const imgHtml = p.img
        ? `<div class="card-img-wrap">
             <div class="card-img-overlay"></div>
             <img src="${p.img}" alt="${p.title}" loading="lazy"/>
             <span class="card-lang-badge" style="background:${col}">${BADGE[p.type]}</span>
           </div>`
        : `<div class="card-img-wrap no-img">
             <span class="card-lang-badge" style="background:${col};position:relative;top:auto;left:auto">${BADGE[p.type]}</span>
           </div>`;

      grid.insertAdjacentHTML('beforeend', `
        <div class="project-card" data-type="${p.type}">
          ${imgHtml}
          <div class="card-body">
            <div class="card-filepath">
              <span class="filepath-text">
                <span class="path-sep">~/projects/</span><span style="color:${col}">${p.type}/</span><span class="path-file">${slug}.md</span>
              </span>
              <span class="card-num">${String(i+1).padStart(2,'0')}</span>
            </div>
            <div class="card-title-wrap">
              <h3 class="card-title">${p.title}</h3>
            </div>
            <div class="card-desc">
              <div class="desc-label">// description</div>
              <p class="desc-text">${p.desc}</p>
            </div>
            <div class="card-actions">
              ${p.info ? `<a href="${p.info}" class="card-btn"><i class="fa-solid fa-circle-info"></i> Info</a>` : ''}
              <a href="${p.demo}" target="_blank" rel="noopener" class="card-btn">${EXT} Visitar</a>
            </div>
          </div>
        </div>
      `);
    });

    /* ── Update count ── */
    document.getElementById('count-num').textContent = projects.length;

    /* ── Filter ── */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const countNum   = document.getElementById('count-num');
    const countLbl   = document.getElementById('count-label');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        let n = 0;
        document.querySelectorAll('.project-card').forEach(card => {
          const show = f === 'all' || card.dataset.type === f;
          card.classList.toggle('hidden', !show);
          if (show) { n++; card.classList.add('card-visible'); }
        });
        countNum.textContent = n;
        countLbl.textContent = n === 1 ? 'projeto indexado' : 'projetos indexados';
      });
    });

    /* ── Card stagger entrance ── */
    const cardObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const cards = e.target.querySelectorAll('.project-card');
          cards.forEach((c, i) => {
            setTimeout(() => c.classList.add('card-visible'), i * 60);
          });
          cardObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.03 });
    cardObs.observe(document.getElementById('projects-grid'));

    /* ── Section reveal ── */
    const sectionObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.04 });
    document.querySelectorAll('.reveal').forEach(el => sectionObs.observe(el));

    /* ── Progress bar ── */
    window.addEventListener('scroll', () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
      document.getElementById('progress').style.width = Math.min(pct, 100) + '%';
    });
