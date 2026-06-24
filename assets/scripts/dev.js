    /* ── SVG Icons ── */
    const EXT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

    const BADGE = { frontend: 'Front-end', fullstack: 'Fullstack', backend: 'Back-end' };
    const TYPE_COLOR = { frontend: '#00ff88', fullstack: '#00d4ff', backend: '#ffd700' };

    /* ── Projects data ── */
    const projects = [
      { id:14, title:"Nicholas Moraes", type:"frontend",
        img:"/assets/images/projects/dev/nicholas-moraes.webp",
        desc:"Professional and minimalist website for influencer and musician, Nicholas Moraes.",
        demo:"https://makyneta.github.io/m0rwes",
        info:"/info/dev/m0rwes" },
        
      { id:14, title:"Mr. Devix", type:"frontend",
        img:"/assets/images/projects/dev/mr-devix.webp",
        desc:"Personal brand portfolio for a digital creator. Minimalist design with smooth scroll animations and a dark theme.",
        demo:"https://makyneta.github.io/mrdevix",
        info:"/info/dev/mrdevix" },

      { id:13, title:"Clube Atletismo de Marinha Grande", type:"frontend",
        img:"/assets/images/projects/dev/clube-atletismo-de-marinha-grande.webp",
        desc:"Institutional website for an athletics club featuring event calendars, athlete profiles, and news sections.",
        demo:"https://makyneta.github.io/catletismomg",
        info:"/info/dev/camg" },

      { id:12, title:"António Pedro", type:"frontend",
        img:"/assets/images/projects/dev/antonio-pedro-2.webp",
        desc:"Professional landing page for a personal trainer. Includes service cards, testimonials, and a booking CTA.",
        demo:"https://makyneta.github.io/antoniorpedro",
        info:"" },

      { id:11, title:"LS Videomaker", type:"frontend",
        img:"/assets/images/projects/dev/ls-videomaker.webp",
        desc:"Video production portfolio with a video gallery, client showcase, and contact form for bookings.",
        demo:"https://makyneta.github.io/lsvideomaker",
        info:"" },

      { id:10, title:"Nicholas Simões", type:"frontend",
        img:"/assets/images/projects/dev/nicholas-simoes.webp",
        desc:"Personal website for a photographer and videographer, featuring a masonry gallery and lightbox viewer.",
        demo:"https://makyneta.github.io/nico",
        info:"/info/dev/nico" },

      { id:9, title:"Juventude Socialista Marinha Grande", type:"frontend",
        img:"/assets/images/projects/dev/juventude-socialista-da-concelhia-da-marinha-grande.webp",
        desc:"Political youth movement website with event promotion, manifesto pages, and membership sign-up forms.",
        demo:"https://makyneta.github.io/jsmarinhagrande",
        info:"" },

      { id:8, title:"Amalias", type:"frontend",
        img:"/assets/images/projects/dev/amalias.webp",
        desc:"Brand website for a local restaurant. Includes a digital menu, location map, and reservation system.",
        demo:"https://makyneta.github.io/amalias",
        info:"" },

      { id:7, title:"Mayday", type:"frontend",
        img:"/assets/images/projects/dev/mayday.webp",
        desc:"Event landing page with countdown timer, artist lineup, ticket purchase flow, and venue info.",
        demo:"https://makyneta.github.io/mayday",
        info:"" },

      { id:6, title:"Nickz", type:"frontend",
        img:"/assets/images/projects/dev/nickz.webp",
        desc:"Personal brand site for a musician, featuring discography, tour dates, and a media gallery.",
        demo:"https://makyneta.github.io/nickz",
        info:"" },

      { id:5, title:"Francisco Ferreira", type:"frontend",
        img:"/assets/images/projects/dev/francisco-ferreira.webp",
        desc:"Professional portfolio for a creative director, showcasing brand identity projects and case studies.",
        demo:"https://makyneta.github.io/franciscoferreira",
        info:"" },

      { id:4, title:"Donut-Man", type:"fullstack",
        img:"/assets/images/projects/dev/personal/donut-man.webp",
        desc:"Fullstack browser game with a Node.js backend, real-time leaderboard, and persistent player profiles.",
        demo:"https://makyneta.github.io/donutman",
        info:"" },

      { id:3, title:"Ice J (I Love You)", type:"frontend",
        img:"/assets/images/projects/dev/ice-j-i-love-you.webp",
        desc:"Music promotional site with embedded tracks, lyric pages, merch store, and tour schedule.",
        demo:"https://makyneta.github.io/icejiloveyou",
        info:"/info/dev/icej" },

      { id:2, title:"Mesa P'ra 4", type:"frontend",
        img:"/assets/images/projects/dev/mesa-pra-4.webp",
        desc:"Restaurant website with an interactive menu, table reservation widget, and photo gallery of the space.",
        demo:"https://makyneta.github.io/mesapra4",
        info:"/info/dev/mesapra4" },

      { id:1, title:"Tiago Pedro", type:"frontend",
        img:"/assets/images/projects/dev/tiago-pedro.webp",
        desc:"Personal CV website with skills timeline, project portfolio, and a downloadable resume in PDF.",
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
              <a href="${p.demo}" target="_blank" rel="noopener" class="card-btn">${EXT} Visit</a>
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
        countLbl.textContent = n === 1 ? 'project indexed' : 'projects indexed';
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
