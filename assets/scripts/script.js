// Atualiza todos os elementos com a classe 'year'
document.querySelectorAll('.year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

//
// Header
fetch("/assets/div/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    const script = document.createElement("script");
    script.src = "/assets/scripts/header.js";
    document.body.appendChild(script);
  });


//
// Footer
fetch("/assets/div/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;

    // Adiciona o CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/styles/footer.css"; // Altere para o caminho correto do seu arquivo CSS
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "/assets/scripts/footer.js";
    document.body.appendChild(script);
  });
