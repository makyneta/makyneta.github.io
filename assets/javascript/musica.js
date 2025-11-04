document.addEventListener("DOMContentLoaded", function () {
    const fotoArtista = document.getElementById("fotoArtista");
    const lightbox = document.getElementById("lightbox");
    const lightboxImagem = document.getElementById("lightboxImagem");
    const fecharLightbox = document.getElementById("fecharLightbox");

    fotoArtista.addEventListener("click", function () {
        lightboxImagem.src = fotoArtista.src;
        lightbox.classList.remove("hidden");
        setTimeout(() => {
            lightbox.classList.add("show");
            lightboxImagem.classList.add("show");
        }, 10);
    });

    function fechar() {
        lightbox.classList.remove("show");
        lightboxImagem.classList.remove("show");
        setTimeout(() => {
            lightbox.classList.add("hidden");
        }, 500);
    }

    fecharLightbox.addEventListener("click", fechar);

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            fechar();
        }
    });
});
