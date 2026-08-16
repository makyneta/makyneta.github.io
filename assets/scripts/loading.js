(function(){
  var LO = document.getElementById('loader-overlay');
  if (!LO) return;
 
  // typing effect
  var txt = document.getElementById('lo-text');
  var full = 'a carregar makyneta.dev';
  var i = 0;
  var typer = setInterval(function(){
    txt.textContent = full.slice(0, i++);
    if (i > full.length) i = 0;
  }, 90);
 
  var R = function(){
    if (R.d) return;
    R.d = 1;
    clearInterval(typer);
    LO.style.opacity = '0';
    setTimeout(function(){ LO.remove(); }, 500);
  };
  window.addEventListener('load', R);
  setTimeout(R, 5000);
})();