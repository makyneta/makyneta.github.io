// Função para inicializar dropdowns desktop
function initDesktopDropdowns() {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", (event) => {
            event.preventDefault();
            const parentDropdown = toggle.closest(".dropdown");
            const dropdownContent = parentDropdown.querySelector(".dropdown-content");
            const isActive = parentDropdown.classList.contains("active");

            // Fecha outros dropdowns
            document.querySelectorAll(".dropdown.active").forEach(otherDropdown => {
                if (otherDropdown !== parentDropdown) {
                    otherDropdown.classList.remove("active");
                    otherDropdown.querySelector(".dropdown-content")
                        .classList.remove("opacity-100", "pointer-events-auto");
                }
            });

            // Alterna o dropdown atual
            if (!isActive) {
                parentDropdown.classList.add("active");
                dropdownContent.classList.add("opacity-100", "pointer-events-auto");
            } else {
                parentDropdown.classList.remove("active");
                dropdownContent.classList.remove("opacity-100", "pointer-events-auto");
            }
        });
    });

    // Fecha dropdowns ao clicar fora
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown.active").forEach(dropdown => {
                dropdown.classList.remove("active");
                dropdown.querySelector(".dropdown-content")
                    .classList.remove("opacity-100", "pointer-events-auto");
            });
        }
    });
}

// Função para inicializar o menu mobile e dropdowns mobile
function initMobileMenu() {
    // Menu mobile toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    // Dropdown mobile Developer
    const mobileDevBtn = document.getElementById('mobile-developer-btn');
    const mobileDevMenu = document.getElementById('mobile-developer-menu');

    if (mobileDevBtn && mobileDevMenu) {
        mobileDevBtn.addEventListener('click', () => {
            const isOpen = mobileDevMenu.style.display === 'block';
            mobileDevMenu.style.display = isOpen ? 'none' : 'block';
            mobileDevBtn.classList.toggle('active', !isOpen);

            // Fecha Photographer
            const mobilePhotoBtn = document.getElementById('mobile-photographer-btn');
            const mobilePhotoMenu = document.getElementById('mobile-photographer-menu');
            if (mobilePhotoBtn && mobilePhotoMenu) {
                mobilePhotoMenu.style.display = 'none';
                mobilePhotoBtn.classList.remove('active');
            }
        });
    }

    // Dropdown mobile Photographer
    const mobilePhotoBtn = document.getElementById('mobile-photographer-btn');
    const mobilePhotoMenu = document.getElementById('mobile-photographer-menu');

    if (mobilePhotoBtn && mobilePhotoMenu) {
        mobilePhotoBtn.addEventListener('click', () => {
            const isOpen = mobilePhotoMenu.style.display === 'block';
            mobilePhotoMenu.style.display = isOpen ? 'none' : 'block';
            mobilePhotoBtn.classList.toggle('active', !isOpen);

            // Fecha Developer
            const mobileDevBtn = document.getElementById('mobile-developer-btn');
            const mobileDevMenu = document.getElementById('mobile-developer-menu');
            if (mobileDevBtn && mobileDevMenu) {
                mobileDevMenu.style.display = 'none';
                mobileDevBtn.classList.remove('active');
            }
        });
    }
}

// Função principal para inicializar todo o JS do header
function initHeaderJS() {
    initDesktopDropdowns();
    initMobileMenu();
}

// Caso você queira usar fetch para carregar o header
// fetch("/includes/header.html")
//   .then(r => r.text())
//   .then(data => {
//       document.getElementById("header").innerHTML = data;
//       initHeaderJS();
//   });

// Se o header já estiver no HTML, basta chamar:
initHeaderJS();
