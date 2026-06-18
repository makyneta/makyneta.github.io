// Atualiza todos os elementos com a classe 'year'
document.querySelectorAll('.year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

var v = Date.now();

fetch("/assets/header/main.html?v=" + v)
  .then(function(r) { return r.text(); })
  .then(function(data) {
    document.getElementById("header").innerHTML = data;
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/styles/header.css?v=" + v;
    document.head.appendChild(link);
    var script = document.createElement("script");
    script.src = "/assets/scripts/header.js?v=" + v;
    document.body.appendChild(script);
  });

fetch("/assets/header/portuguese.html?v=" + v)
  .then(function(r) { return r.text(); })
  .then(function(data) {
    document.getElementById("headerpt").innerHTML = data;
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/styles/header.css?v=" + v;
    document.head.appendChild(link);
    var script = document.createElement("script");
    script.src = "/assets/scripts/header.js?v=" + v;
    document.body.appendChild(script);
  });

fetch("/assets/header/spanish.html?v=" + v)
  .then(function(r) { return r.text(); })
  .then(function(data) {
    document.getElementById("headeres").innerHTML = data;
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/styles/header.css?v=" + v;
    document.head.appendChild(link);
    var script = document.createElement("script");
    script.src = "/assets/scripts/header.js?v=" + v;
    document.body.appendChild(script);
  });


//
// Custom Cursor — professional white trailing effect (disabled on mobile)
(function(){
  var isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
  if (isMobile) return;

  var dot, trail = [];
  var i;

  // Find existing cursor dot or create it
  dot = document.getElementById('cx') || document.getElementById('cursor-dot') || document.getElementById('cursor');

  if (!dot) {
    dot = document.createElement('div');
    dot.id = 'cx';
    document.body.appendChild(dot);
  }

  // Remove legacy ring if present
  var ring = document.getElementById('cy') || document.getElementById('cursor-ring');
  if (ring) ring.style.display = 'none';

  // Create trailing dots — 6 particles with cascade
  for (i = 0; i < 6; i++) {
    var el = document.createElement('div');
    el.id = 'ct' + (i + 1);
    var size = 5 - i * 0.65;
    if (size < 1.5) size = 1.5;
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    var op = 0.9 - i * 0.13;
    if (op < 0.12) op = 0.12;
    el.style.opacity = op;
    el.style.boxShadow = '0 0 6px rgba(237,233,226,' + (0.3 - i * 0.04) + ')';
    document.body.appendChild(el);
    trail.push({ el: el, x: 0, y: 0, alpha: 0.14 - i * 0.017 });
  }

  var mx = 0, my = 0;

  document.addEventListener('mousemove', function(e) {
    mx = e.clientX;
    my = e.clientY;
  });

  function anim() {
    // Main dot instantly at mouse
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';

    // Trail: each particle follows the previous one with increasing lag
    var prevX = mx, prevY = my;
    for (i = 0; i < trail.length; i++) {
      var t = trail[i];
      t.x += (prevX - t.x) * t.alpha;
      t.y += (prevY - t.y) * t.alpha;
      t.el.style.left = t.x + 'px';
      t.el.style.top = t.y + 'px';
      prevX = t.x;
      prevY = t.y;
    }

    requestAnimationFrame(anim);
  }
  anim();
})();

//
// Footer
fetch("/assets/footer.html?v=" + v)
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;

    // CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/styles/footer.css?v=" + v;
    document.head.appendChild(link);

    // JS
    const script = document.createElement("script");
    script.src = "/assets/scripts/footer.js?v=" + v;
    document.body.appendChild(script);
  });