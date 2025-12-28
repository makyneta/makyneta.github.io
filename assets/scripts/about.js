document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('full-cert-img');
    const closeBtn = document.querySelector('.modal-close');
    const certLinks = document.querySelectorAll('.cert-link');

    certLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const certSrc = this.getAttribute('data-cert');
            
            if(certSrc) {
                modal.style.display = "flex";
                setTimeout(() => modal.classList.add('active'), 10);
                modalImg.src = certSrc;
                document.body.style.overflow = 'hidden'; // Previne scroll ao ver cert
            }
        });
    });

    // Fechar ao clicar no X ou fora da imagem
    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }, 300);
    };

    closeBtn.onclick = closeModal;
    modal.onclick = (e) => { if(e.target === modal) closeModal(); };
});