// Atualiza todos os elementos com a classe 'year'
document.querySelectorAll('.year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

//
// Header
fetch("/a/h/index.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    function loadCSS(href) {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
      }
    }

    const script = document.createElement("script");
    script.src = "/a/h/script.js";
    document.body.appendChild(script);
  });
