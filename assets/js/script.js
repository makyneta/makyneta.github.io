//
// Favicon
//
  // fetch("/includes/favicon.html")
  //   .then(response => response.text())
  //   .then(html => {
  //     document.getElementById("favicon").innerHTML = html;
  //   })
  //   .catch(err => console.error('Erro ao carregar favicon:', err));

//
// Footer
//
fetch("/includes/footer.html")
    .then(response => response.text())
    .then(data => {
    // Insere o HTML do footer
        document.getElementById("footer").innerHTML = data;

    // Carrega o JS do header (mobile menu, dropdowns etc.)
    const script = document.createElement("script");
    script.src = "/assets/js/footer.js";
    document.body.appendChild(script);
    });

//
// Footer EN
//
fetch("/includes/footer-en.html")
    .then(response => response.text())
    .then(data => {
    // Insere o HTML do footer
        document.getElementById("footeren").innerHTML = data;

    // Carrega o JS do header (mobile menu, dropdowns etc.)
    const script = document.createElement("script");
    script.src = "/assets/js/footer.js";
    document.body.appendChild(script);
    });

//
// Footer ES
//
fetch("/includes/footer-es.html")
    .then(response => response.text())
    .then(data => {
    // Insere o HTML do footer
        document.getElementById("footeres").innerHTML = data;

    // Carrega o JS do header (mobile menu, dropdowns etc.)
    const script = document.createElement("script");
    script.src = "/assets/js/footer.js";
    document.body.appendChild(script);
    });

//
// Header
//
fetch("/includes/header.html")
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
    loadCSS("/assets/css/header.css");

    const script = document.createElement("script");
    script.src = "/assets/js/header.js";
    document.body.appendChild(script);
  });


//
// Header EN
//
fetch("/includes/header-en.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("headeren").innerHTML = data;

    function loadCSS(href) {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
      }
    }

    loadCSS("/assets/css/styles.css");
    loadCSS("/assets/css/header.css");

    const script = document.createElement("script");
    script.src = "/assets/js/header.js";
    document.body.appendChild(script);
  });


//
// Header ES
//
fetch("/includes/header-es.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("headeres").innerHTML = data;

    function loadCSS(href) {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
      }
    }

    loadCSS("/assets/css/styles.css");
    loadCSS("/assets/css/header.css");

    const script = document.createElement("script");
    script.src = "/assets/js/header.js";
    document.body.appendChild(script);
  });

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

// // ============================
// // Cookie Banner Logic
// // ============================
// document.addEventListener("DOMContentLoaded", () => {
//     const cookieBanner = document.getElementById("cookie-banner");
//     const acceptBtn = document.getElementById("accept-cookies");
//     const declineBtn = document.getElementById("decline-cookies");
//     const closeBtn = document.getElementById("close-cookies");

//     // Função para mostrar o banner com fade-in
//     const showBanner = () => {
//         cookieBanner.classList.remove("opacity-0", "pointer-events-none");
//         cookieBanner.classList.add("opacity-100");
//     };

//     // Função para esconder o banner com fade-out
//     const hideBanner = () => {
//         cookieBanner.classList.add("opacity-0", "pointer-events-none");
//         cookieBanner.classList.remove("opacity-100");
//     };

//     // Mostrar banner se não houver consentimento
//     if (!localStorage.getItem("cookieConsent") && cookieBanner) {
//         setTimeout(showBanner, 300); // pequeno delay para animação suave
//     }

//     // Aceitar cookies
//     if (acceptBtn) {
//         acceptBtn.addEventListener("click", () => {
//             localStorage.setItem("cookieConsent", "accepted");
//             hideBanner();
//         });
//     }

//     // Recusar cookies
//     if (declineBtn) {
//         declineBtn.addEventListener("click", () => {
//             localStorage.setItem("cookieConsent", "declined");
//             hideBanner();
//         });
//     }

//     // Fechar temporariamente
//     if (closeBtn) {
//         closeBtn.addEventListener("click", () => {
//             hideBanner(); // apenas esconde, sem gravar no localStorage
//         });
//     }
// });