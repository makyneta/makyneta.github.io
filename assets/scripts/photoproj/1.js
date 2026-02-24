/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    DADOS DESTE PROJETO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const PROJECT = {
    title: 'Sertão',
    cat: 'Landscape',
    year: '2024',
    images: 9,
    basePath: '../../assets/images/projects/photo/01/',
    desc: 'Uma breve sessão de fotografias realizada à banda "Os Penetras"',
    statement: '"Interessava-me o momento em que o calor desfaz a fronteira entre o real e o imaginado. Fui ao Alentejo três vezes, sempre em agosto, sempre ao meio-dia."',
};
/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* CURSOR */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
(function loop() { rx += (mx - rx) * .12; ry += (my - ry) * .12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(loop); })();
function bindCursor(el) {
    el.addEventListener('mouseenter', () => { cursor.style.width = '18px'; cursor.style.height = '18px'; ring.style.width = '56px'; ring.style.height = '56px'; });
    el.addEventListener('mouseleave', () => { cursor.style.width = '10px'; cursor.style.height = '10px'; ring.style.width = '36px'; ring.style.height = '36px'; });
}
document.querySelectorAll('a,button').forEach(bindCursor);

/* SCROLL REVEAL */
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* PREENCHE DADOS */
document.title = PROJECT.title + ' · Photography';
document.getElementById('proj-title').textContent = PROJECT.title;
document.getElementById('proj-cat').textContent = PROJECT.cat;
document.getElementById('proj-year').textContent = PROJECT.year;
document.getElementById('proj-desc').textContent = PROJECT.desc;
document.getElementById('proj-statement').textContent = PROJECT.statement;
document.getElementById('proj-count').textContent = PROJECT.images + ' fotografias';
document.getElementById('gallery-count-display').textContent = PROJECT.images;

/* HERO IMAGE */
const heroImg = document.getElementById('hero-img');
heroImg.src = '/assets/images/projects/photo/page/01.jpg';
heroImg.alt = PROJECT.title;

/* GALERIA — carrega 1.jpg até PROJECT.images */
const grid = document.getElementById('gallery-grid');
const itemObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('revealed'); itemObs.unobserve(entry.target); }
    });
}, { threshold: 0.04, rootMargin: '0px 0px -30px 0px' });

for (let i = 1; i <= PROJECT.images; i++) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    const img = document.createElement('img');
    img.alt = PROJECT.title + ' — ' + i;
    img.src = PROJECT.basePath + i + '.jpg';
    img.onload = () => itemObs.observe(item);
    img.onerror = () => { item.style.minHeight = '180px'; itemObs.observe(item); };
    item.appendChild(img);
    grid.appendChild(item);
    bindCursor(item);
}