    /* ── Progress ── */
    window.addEventListener('scroll', () => {
      document.getElementById('bar').style.width =
        Math.min(window.scrollY / (document.documentElement.scrollHeight - innerHeight) * 100, 100) + '%';
    });
 
    /* ── Cursor ── */
    const cx = document.getElementById('cx'), cy = document.getElementById('cy');
    let mx=0,my=0,rx=0,ry=0;
    document.addEventListener('mousemove', e => {
      mx=e.clientX; my=e.clientY;
      cx.style.left=mx+'px'; cx.style.top=my+'px';
    });
    (function anim(){
      rx+=(mx-rx)*.11; ry+=(my-ry)*.11;
      cy.style.left=rx+'px'; cy.style.top=ry+'px';
      requestAnimationFrame(anim);
    })();
    document.querySelectorAll('a,button,.disc-card,.stat-cell').forEach(el=>{
      el.addEventListener('mouseenter',()=>{cy.style.width='54px';cy.style.height='54px';cy.style.borderColor='rgba(200,164,80,.7)';});
      el.addEventListener('mouseleave',()=>{cy.style.width='32px';cy.style.height='32px';cy.style.borderColor='rgba(200,164,80,.32)';});
    });
 
    /* ── Reveal ── */
    const ro = new IntersectionObserver(
      entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: .06 }
    );
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
 
    /* ── Testimonials slider ── */
    (function(){
      const slider = document.getElementById('tslider');
      const cards  = slider.querySelectorAll('.test-card');
      const dotsWrap = document.getElementById('test-dots');
      let perView = window.innerWidth >= 900 ? 3 : window.innerWidth >= 600 ? 2 : 1;
      let current = 0;
      const total = cards.length;
      const pages = Math.ceil(total / perView);
 
      // Build dots
      function buildDots(){
        dotsWrap.innerHTML='';
        for(let i=0;i<pages;i++){
          const d=document.createElement('button');
          d.className='test-dot'+(i===0?' on':'');
          d.addEventListener('click',()=>goTo(i));
          dotsWrap.appendChild(d);
        }
      }
 
      function goTo(page){
        current = Math.max(0, Math.min(page, pages-1));
        const offset = current * perView * (100/total);
        slider.style.transform = `translateX(-${offset}%)`;
        dotsWrap.querySelectorAll('.test-dot').forEach((d,i)=>d.classList.toggle('on',i===current));
      }
 
      document.getElementById('t-prev').addEventListener('click',()=>goTo(current-1));
      document.getElementById('t-next').addEventListener('click',()=>goTo(current+1));
 
      // Auto-slide
      let auto = setInterval(()=>goTo(current+1<pages?current+1:0), 5500);
      slider.addEventListener('mouseenter',()=>clearInterval(auto));
      slider.addEventListener('mouseleave',()=>{ auto=setInterval(()=>goTo(current+1<pages?current+1:0),5500); });
 
      // Touch swipe
      let tx=0;
      slider.addEventListener('touchstart',e=>tx=e.touches[0].clientX,{passive:true});
      slider.addEventListener('touchend',e=>{
        const diff=tx-e.changedTouches[0].clientX;
        if(Math.abs(diff)>40){ diff>0?goTo(current+1):goTo(current-1); }
      });
 
      // Responsive resize
      window.addEventListener('resize',()=>{
        const nv = window.innerWidth>=900?3:window.innerWidth>=600?2:1;
        if(nv!==perView){ perView=nv; buildDots(); goTo(0); }
      });
 
      buildDots();
    })();
