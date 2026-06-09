    /* ── SVG Icons ── */
    const GH = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.68.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>`;
    const EXT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
 
    const BADGE = { frontend: 'Front-end', fullstack: 'Fullstack', backend: 'Back-end' };
    const TYPE_COLOR = { frontend: '#00ff88', fullstack: '#00d4ff', backend: '#ffd700' };
 
    /* ── Projects data ── */
    const projects = [
      { id:15, title:"Mr. Devix", type:"frontend",
        img:"/assets/images/projects/dev/mr-devix.png",
        desc:"Personal brand portfolio for a digital creator. Minimalist design with smooth scroll animations and a dark theme.",
        code:"https://github.com/makyneta/mrdevix",
        demo:"https://makyneta.github.io/mrdevix" },

      { id:14, title:"Clube Atletismo de Marinha Grande", type:"frontend",
        img:"/assets/images/projects/dev/clube-atletismo-de-marinha-grande.png",
        desc:"Institutional website for an athletics club featuring event calendars, athlete profiles, and news sections.",
        code:"https://github.com/makyneta/catletismomg",
        demo:"https://makyneta.github.io/catletismomg" },

      { id:13, title:"António Pedro", type:"frontend",
        img:"/assets/images/projects/dev/antonio-pedro.png",
        desc:"Professional landing page for a personal trainer. Includes service cards, testimonials, and a booking CTA.",
        code:"https://github.com/makyneta/antoniorpedro",
        demo:"https://makyneta.github.io/antoniorpedro" },

      { id:12, title:"LS Videomaker", type:"frontend",
        img:"/assets/images/projects/dev/ls-videomaker.jpg",
        desc:"Video production portfolio with a video gallery, client showcase, and contact form for bookings.",
        code:"https://github.com/makyneta/lsvideomaker",
        demo:"https://makyneta.github.io/lsvideomaker" },

      { id:11, title:"Nicholas Simões", type:"frontend",
        img:"/assets/images/projects/dev/nicholas-simoes.jpg",
        desc:"Personal website for a photographer and videographer, featuring a masonry gallery and lightbox viewer.",
        code:"https://github.com/makyneta/nico",
        demo:"https://makyneta.github.io/nico" },

      { id:10, title:"Juventude Socialista Marinha Grande", type:"frontend",
        img:"/assets/images/projects/dev/juventude-socialista-da-concelhia-da-marinha-grande.jpg",
        desc:"Political youth movement website with event promotion, manifesto pages, and membership sign-up forms.",
        code:"https://github.io/makyneta/jsmarinhagrande",
        demo:"https://makyneta.github.io/jsmarinhagrande" },

      { id:9, title:"Amalias", type:"frontend",
        img:"/assets/images/projects/dev/amalias.jpg",
        desc:"Brand website for a local restaurant. Includes a digital menu, location map, and reservation system.",
        code:"https://github.com/makyneta/amalias",
        demo:"https://makyneta.github.io/amalias" },

      { id:8, title:"Mayday", type:"frontend",
        img:"/assets/images/projects/dev/mayday.jpg",
        desc:"Event landing page with countdown timer, artist lineup, ticket purchase flow, and venue info.",
        code:"https://github.com/makyneta/mayday",
        demo:"https://makyneta.github.io/mayday" },

      { id:7, title:"Nickz", type:"frontend",
        img:"/assets/images/projects/dev/nickz.jpg",
        desc:"Personal brand site for a musician, featuring discography, tour dates, and a media gallery.",
        code:"https://github.com/makyneta/nickz",
        demo:"https://makyneta.github.io/nickz" },

      { id:6, title:"Francisco Ferreira", type:"frontend",
        img:"/assets/images/projects/dev/francisco-ferreira.jpg",
        desc:"Professional portfolio for a creative director, showcasing brand identity projects and case studies.",
        code:"https://github.com/makyneta/franciscoferreira",
        demo:"https://makyneta.github.io/franciscoferreira" },

      { id:5, title:"Donut-Man", type:"fullstack",
        img:"/assets/images/projects/dev/personal/donut-man.jpg",
        desc:"Fullstack browser game with a Node.js backend, real-time leaderboard, and persistent player profiles.",
        code:"https://github.com/makyneta/donutman",
        demo:"https://makyneta.github.io/donutman" },

      { id:4, title:"Lavagem LV", type:"frontend",
        img:"/assets/images/projects/dev/lavagem-lv.jpg",
        desc:"Business website for a car wash service with pricing tables, online booking, and location finder.",
        code:"https://github.com/makyneta/lavagemlv",
        demo:"https://makyneta.github.io/lavagemlv" },

      { id:3, title:"Ice J (I Love You)", type:"frontend",
        img:"/assets/images/projects/dev/ice-j-i-love-you.jpg",
        desc:"Music promotional site with embedded tracks, lyric pages, merch store, and tour schedule.",
        code:"https://github.com/makyneta/icejiloveyou",
        demo:"https://makyneta.github.io/icejiloveyou" },

      { id:2, title:"Mesa P'ra 4", type:"frontend",
        img:"/assets/images/projects/dev/mesa-pra-4.jpg",
        desc:"Restaurant website with an interactive menu, table reservation widget, and photo gallery of the space.",
        code:"https://github.com/makyneta/mesapra4",
        demo:"https://makyneta.github.io/mesapra4" },

      { id:1, title:"Tiago Pedro", type:"frontend",
        img:"/assets/images/projects/dev/tiago-pedro.jpg",
        desc:"Personal CV website with skills timeline, project portfolio, and a downloadable resume in PDF.",
        code:"https://github.com/makyneta/tiagopedro",
        demo:"https://makyneta.github.io/tiagopedro" },
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
              <a href="${p.code}" target="_blank" rel="noopener" class="card-btn">${GH} Code</a>
              <a href="${p.demo}" target="_blank" rel="noopener" class="card-btn">${EXT} Live</a>
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
 
    /* ── Cursor ── */
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    });
    (function animRing() {
      rx += (mx - rx) * 0.14; ry += (my - ry) * 0.14;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(animRing);
    })();
    document.querySelectorAll('a, button, .project-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.style.width = '50px'; ring.style.height = '50px';
        ring.style.borderColor = 'rgba(0,255,136,0.7)';
      });
      el.addEventListener('mouseleave', () => {
        ring.style.width = '28px'; ring.style.height = '28px';
        ring.style.borderColor = 'rgba(0,255,136,0.4)';
      });
    });
