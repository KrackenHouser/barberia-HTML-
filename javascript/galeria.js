 document.addEventListener('DOMContentLoaded', function () {
    // Array haircuts
    const cortes = [
        { nombre: "Corte Clásico", imagenUrl: "/Assets/Freshfade.jpg", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "/Assets/Missing2.jpg", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Pompadour", imagenUrl: "/assets/Kds2.jpg", descripcion: "Estilo clásico con un toque moderno" },
        { nombre: "Corte Clásico", imagenUrl: "https://www.instagram.com/p/CpdMfukub0u/?igsh=amxjaHVxOHVsaGRz", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Corte Clásico", imagenUrl: "/assets/MidFadeYBarba.jpg", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "/assets/Kds.jpg", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Pompadour", imagenUrl: "/Images/Line.jpg", descripcion: "Estilo clásico con un toque moderno" },
        { nombre: "Corte Clásico", imagenUrl: "/Images/Moicano.jpg", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Corte Clásico", imagenUrl: "/assets/Solocorte.jpg", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "/assets/Missing.jpg", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Pompadour", imagenUrl: "/Images/pompadour.jpg", descripcion: "Estilo clásico con un toque moderno" },
    ];

    // Find the gallery container
    const galeriaContainer = document.getElementById('galeria');

    // Nuevas funcionalidades para la vista previa
    const previewOverlay = document.querySelector('.preview-overlay');
    const previewImage = document.querySelector('.preview-image');
    const previewClose = document.querySelector('.preview-close');
    const previewPrev = document.querySelector('.preview-prev');
    const previewNext = document.querySelector('.preview-next');
    let currentImageIndex = 0;
    let images = [];

    // Función para abrir la vista previa
    function openPreview(imageUrl, index) {
        previewImage.src = imageUrl;
        currentImageIndex = index;
        previewOverlay.style.display = 'block';
    }

    // Función para cerrar la vista previa
    function closePreview() {
        previewOverlay.style.display = 'none';
    }

    // Función para navegar a la imagen anterior
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        previewImage.src = images[currentImageIndex].imagenUrl;
    }

    // Función para navegar a la siguiente imagen
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        previewImage.src = images[currentImageIndex].imagenUrl;
    }

    // Event listeners
    previewClose.addEventListener('click', closePreview);
    previewPrev.addEventListener('click', prevImage);
    previewNext.addEventListener('click', nextImage);

    // Loop through the cortes array and create cards
    cortes.forEach((corte, index) => {
        const card = document.createElement('div');
        card.className = 'col-md-4 col-sm-6 mb-4';
        card.innerHTML = `
            <div class="card">
                <img src="${corte.imagenUrl}" class="card-img-top" alt="${corte.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${corte.nombre}</h5>
                    <p class="card-text">${corte.descripcion}</p>
                </div>
            </div>
        `;
        galeriaContainer.appendChild(card);

        // Agregar evento de clic a la imagen para abrir la vista previa
        const cardImage = card.querySelector('.card-img-top');
        cardImage.addEventListener('click', () => openPreview(corte.imagenUrl, index));

        // Agregar la imagen al array de imágenes
        images.push(corte);
    });
});
