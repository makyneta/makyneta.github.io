// Atualiza todos os elementos com a classe 'year'
document.querySelectorAll('.year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

//
// Header
fetch("/assets/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/styles/header.css";
    document.head.appendChild(link);

    // JS
    const script = document.createElement("script");
    script.src = "/assets/scripts/header.js";
    document.body.appendChild(script);
  });


//
// Footer
fetch("/assets/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;

    // CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/styles/footer.css";
    document.head.appendChild(link);

    // JS
    const script = document.createElement("script");
    script.src = "/assets/scripts/footer.js";
    document.body.appendChild(script);
  });
