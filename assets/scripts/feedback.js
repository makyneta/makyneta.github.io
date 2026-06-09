    /* ── Progress ── */
    window.addEventListener('scroll', () => {
      document.getElementById('bar').style.width =
        Math.min(window.scrollY / (document.documentElement.scrollHeight - innerHeight) * 100, 100) + '%';
    });

    /* ── Cursor ── */
    const cx = document.getElementById('cx'), cy = document.getElementById('cy');
    let mx=0,my=0,rx=0,ry=0;
    document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cx.style.left=mx+'px'; cx.style.top=my+'px'; });
    (function a(){ rx+=(mx-rx)*.11; ry+=(my-ry)*.11; cy.style.left=rx+'px'; cy.style.top=ry+'px'; requestAnimationFrame(a); })();
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => { cy.style.width='52px'; cy.style.height='52px'; cy.style.borderColor='rgba(200,164,80,.7)'; });
      el.addEventListener('mouseleave', () => { cy.style.width='32px'; cy.style.height='32px'; cy.style.borderColor='rgba(200,164,80,.32)'; });
    });
