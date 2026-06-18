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
// Custom Cursor — professional trailing effect (disabled on mobile)
(function(){
  var isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
  if (isMobile) return;

  var dot, ring, trail = [];
  var i;

  // Find existing main cursor elements or create them
  dot = document.getElementById('cx') || document.getElementById('cursor-dot') || document.getElementById('cursor');
  ring = document.getElementById('cy') || document.getElementById('cursor-ring');

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

  // Create trailing dots
  for (i = 0; i < 5; i++) {
    var el = document.createElement('div');
    el.id = 'ct' + (i + 1);
    var size = 5 - i;
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    // Compute opacity: first trail is ~80% opaque, last is ~15%
    el.style.opacity = 1 - (i + 1) * 0.17;
    el.style.background = '#c8a450';
    el.style.boxShadow = '0 0 6px rgba(200,164,80,' + (0.4 - i * 0.07) + ')';
    document.body.appendChild(el);
    trail.push({ el: el, x: 0, y: 0, alpha: 0.12 - i * 0.015 });
  }

  var mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', function(e) {
    mx = e.clientX;
    my = e.clientY;
  });

  function anim() {
    // Main dot instantly at mouse
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';

    // Ring follows with smooth drag
    rx += (mx - rx) * 0.09;
    ry += (my - ry) * 0.09;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';

    // Trail: each dot follows the previous one with its own lag
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

  // Hover: expand ring + fade trail
  var interactive = 'a, button, .project-card, .disc-card, .stat-cell, .pf-card-dev, .pf-card-design, .client-card, .tech-card, .timeline-item, .cert-btn, .contact-pill, .svc-chip';

  document.addEventListener('mouseover', function(e) {
    if (e.target.matches(interactive)) {
      ring.classList.add('active');
    }
  }, true);

  document.addEventListener('mouseout', function(e) {
    if (e.target.matches(interactive)) {
      ring.classList.remove('active');
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