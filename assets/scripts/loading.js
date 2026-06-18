(function(){
  var loader = document.getElementById('loader');
  if (!loader) return;

  var body = document.getElementById('termBody');
  var cursor = document.getElementById('termCursor');
  if (!body || !cursor) return;

  document.body.classList.add('loading-active');

  var lines = [
    { text: '[system] initializing kernel modules...', cls: '' },
    { text: '[system] loading core components...', cls: '' },
    { text: '[ OK ] interface ready', cls: 'ok' },
    { text: '[ OK ] secure channel established', cls: 'ok' },
    { text: '[system] compiling resources...', cls: '' },
    { text: '  [====================] 100%', cls: 'progress' },
    { text: '[ OK ] all systems operational', cls: 'ok' },
  ];

  var lineIdx = 0, charIdx = 0;
  var currentLineEl = null, currentText = '';

  function typeNext() {
    if (lineIdx >= lines.length) {
      cursor.parentElement.style.opacity = '1';
      setTimeout(finish, 800);
      return;
    }
    var line = lines[lineIdx];
    if (!currentLineEl) {
      currentLineEl = document.createElement('div');
      currentLineEl.className = 'line';
      if (line.cls) currentLineEl.classList.add(line.cls);
      body.appendChild(currentLineEl);
      currentText = '';
    }
    if (charIdx < line.text.length) {
      currentText += line.text[charIdx];
      currentLineEl.textContent = currentText;
      charIdx++;
      setTimeout(typeNext, 12 + Math.random() * 25);
    } else {
      currentLineEl = null;
      charIdx = 0;
      lineIdx++;
      setTimeout(typeNext, 80 + Math.random() * 120);
    }
  }

  function finish() {
    var el = loader.querySelector('.term-loader') || loader;
    el.classList.add('loaded');
    setTimeout(function() {
      loader.style.display = 'none';
      document.body.classList.remove('loading-active');
    }, 500);
  }

  setTimeout(typeNext, 300);
})();
