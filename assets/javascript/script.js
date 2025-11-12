//
// Header
fetch("/assets/components/header/index.html")
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

    loadCSS("/assets/css/styles.css");
    loadCSS("/assets/components/header/styles.css");

    const script = document.createElement("script");
    script.src = "/assets/components/header/script.js";
    document.body.appendChild(script);
  });

//
// Footer
// Função auxiliar para carregar CSS (se não estiver definida)
function loadCSS(url) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}

// Carrega o CSS do Font Awesome
loadCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css");

fetch("/assets/components/footer/index.html")
    .then(response => response.text())
    .then(data => {
    // Insere o HTML do footer
        document.getElementById("footer").innerHTML = data;

    // Carrega o JS do header (mobile menu, dropdowns etc.)
    const script = document.createElement("script");
    script.src = "/assets/components/footer/script.js";
    document.body.appendChild(script);
    });


//
// Preloader
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;

    // fade out
    preloader.style.transition = "opacity 0.7s ease";
    preloader.style.opacity = "0";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 700);
});