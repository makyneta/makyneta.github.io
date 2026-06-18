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
// Custom Cursor — programming theme (disabled on mobile)
(function(){
  var isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
  if (isMobile) return;

  // Find existing cursor elements or create them
  var dot = document.getElementById('cx') || document.getElementById('cursor-dot') || document.getElementById('cursor');
  var ring = document.getElementById('cy') || document.getElementById('cursor-ring');

  if (!dot) {
    dot = document.createElement('div');
    dot.id = 'cx';
    document.body.appendChild(dot);
  }
  if (!ring) {
    ring = document.createElement('div');
    ring.id = 'cy';
    document.body.appendChild(ring);
  }

  var mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', function(e) {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  (function anim() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(anim);
  })();

  // Expand ring on hover
  document.addEventListener('mouseover', function(e) {
    var t = e.target;
    if (t.matches('a, button, .project-card, .disc-card, .stat-cell, .pf-card-dev, .pf-card-design, .client-card, .tech-card, .timeline-item, .cert-btn, .contact-pill, .svc-chip')) {
      ring.style.width = '50px';
      ring.style.height = '50px';
      ring.style.borderColor = 'rgba(0,255,136,0.7)';
      dot.style.opacity = '0.4';
    }
  }, true);

  document.addEventListener('mouseout', function(e) {
    var t = e.target;
    if (t.matches('a, button, .project-card, .disc-card, .stat-cell, .pf-card-dev, .pf-card-design, .client-card, .tech-card, .timeline-item, .cert-btn, .contact-pill, .svc-chip')) {
      ring.style.width = '30px';
      ring.style.height = '30px';
      ring.style.borderColor = 'rgba(0,255,136,0.35)';
      dot.style.opacity = '1';
    }
  }, true);
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