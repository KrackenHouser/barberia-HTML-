document.addEventListener('DOMContentLoaded', function () {
    const galeriaContainer = document.getElementById('galeria');

    const cortes = [
        { nombre: "Corte Clásico", imagenUrl: "https://example.com/image1.jpg", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "https://example.com/image2.jpg", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Pompadour", imagenUrl: "https://example.com/image3.jpg", descripcion: "Estilo clásico con un toque moderno" }
    ];

    cortes.forEach((corte) => {
        const card = document.createElement('div');
        card.className = 'col-md-4 col-sm-6 mb-4';
        card.innerHTML = `
            <div class="card">
                <a href="${corte.imagenUrl}" data-fancybox="gallery" data-caption="${corte.nombre}">
                    <img src="${corte.imagenUrl}" class="card-img-top" alt="${corte.nombre}">
                </a>
                <div class="card-body">
                    <h5 class="card-title">${corte.nombre}</h5>
                    <p class="card-text">${corte.descripcion}</p>
                </div>
            </div>
        `;
        galeriaContainer.appendChild(card);
    });

    // Inicializar Fancybox
    Fancybox.bind("[data-fancybox='gallery']", {
        infinite: true,
        animationEffect: "zoom-in-out"
    });
});
