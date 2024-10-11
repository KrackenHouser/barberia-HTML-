document.addEventListener('DOMContentLoaded', function () {
    const galeriaContainer = document.getElementById('galeria');

    const cortes = [
        { nombre: "Corte Clásico", imagenUrl: "https://duckduckgo.com/?q=Bad+Bunny&t=brave&iar=images&iax=images&ia=images&iai=https%3A%2F%2Fwww.24-horas.mx%2Fwp-content%2Fuploads%2F2022%2F09%2Fbad-bunny-%40badbunny.jpg", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "https://cdn.revistafama.com/uploads/media/2021/07/14/kenia-os-se-ha-realizado.jpg", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Pompadour", imagenUrl: "https://i.pinimg.com/736x/9d/5c/1c/9d5c1c9d43660bca3fe8c6de5acd2f47.jpg", descripcion: "Estilo clásico con un toque moderno" },
        { nombre: "Corte Clásico", imagenUrl: "https://duckduckgo.com/?q=Bad+Bunny&t=brave&iar=images&iax=images&ia=images&iai=https%3A%2F%2Fwww.24-horas.mx%2Fwp-content%2Fuploads%2F2022%2F09%2Fbad-bunny-%40badbunny.jpg", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "https://cdn.revistafama.com/uploads/media/2021/07/14/kenia-os-se-ha-realizado.jpg", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Pompadour", imagenUrl: "https://i.pinimg.com/736x/9d/5c/1c/9d5c1c9d43660bca3fe8c6de5acd2f47.jpg", descripcion: "Estilo clásico con un toque moderno" },
        { nombre: "Corte Clásico", imagenUrl: "https://duckduckgo.com/?q=Bad+Bunny&t=brave&iar=images&iax=images&ia=images&iai=https%3A%2F%2Fwww.24-horas.mx%2Fwp-content%2Fuploads%2F2022%2F09%2Fbad-bunny-%40badbunny.jpg", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "https://cdn.revistafama.com/uploads/media/2021/07/14/kenia-os-se-ha-realizado.jpg", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Pompadour", imagenUrl: "https://i.pinimg.com/736x/9d/5c/1c/9d5c1c9d43660bca3fe8c6de5acd2f47.jpg", descripcion: "Estilo clásico con un toque moderno" },
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
