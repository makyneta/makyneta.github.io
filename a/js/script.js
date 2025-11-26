// Atualiza todos os elementos com a classe 'year'
document.querySelectorAll('.year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

//
// Header
fetch("/a/h/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    const script = document.createElement("script");
    script.src = "/a/h/script.js";
    document.body.appendChild(script);
  });
