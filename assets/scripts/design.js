// Dados dos Projetos (Trabalho Completo)
const projectsData = {
    'franciscoferreira': {
        title: "",
        description: "Desenvolvimento de uma identidade visual completa para o consultor imobiliário Francisco Ferreira, ao refletir a sua abordagem artística única e seu olhar contemporâneo. O projeto abrange desde o logotipo até materiais promocionais e presença digital.",
        client: "Francisco Ferreira",
        year: "2026",
        services: "Identidade Visual, UI/UX Design",
        link: "https://franciscofremax.github.io",
        gallery: [
            "assets/images/design/franciscoferreira-inicio.jpg",
            "assets/images/dev/franciscoferreira.jpg",
        ]
    }
};

function openProject(id) {
    const project = projectsData[id];
    if (!project) return;

    // Preencher textos
    document.getElementById('modalTitle').innerText = project.title;
    document.getElementById('modalDesc').innerHTML = project.description;
    document.getElementById('modalClient').innerText = project.client;
    document.getElementById('modalYear').innerText = project.year;
    document.getElementById('modalServices').innerText = project.services;
    document.getElementById('modalLink').href = project.link;

    // Limpar e preencher galeria
    const galleryContainer = document.getElementById('modalGallery');
    galleryContainer.innerHTML = '';
    project.gallery.forEach(imgUrl => {
        const img = document.createElement('img');
        img.src = imgUrl;
        galleryContainer.appendChild(img);
    });

    // Mostrar modal
    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden'; // Travar scroll do fundo
}

function closeProject() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Lógica de Tilt 3D (Mantida)
const cards = document.querySelectorAll('.card');
document.querySelector('.design-wrapper').addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    cards.forEach(card => {
        card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${-x}deg)`;
    });
});

cards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('hovered'));
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
    });
});