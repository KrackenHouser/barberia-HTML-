document.addEventListener('DOMContentLoaded', function() {
    const cortes = [
        { nombre: "Corte Clásico", imagenUrl: "/Images/corte-clasico.jpg", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "/assets/pruebaimg.jpg", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Pompadour", imagenUrl: "/Images/pompadour.jpg", descripcion: "Estilo clásico con un toque moderno" },
        { nombre: "Corte Clásico", imagenUrl: "/Images/corte-clasico.jpg", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "/assets/pruebaimg.jpg", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Pompadour", imagenUrl: "/Images/pompadour.jpg", descripcion: "Estilo clásico con un toque moderno" },
        { nombre: "Corte Clásico", imagenUrl: "/Images/corte-clasico.jpg", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "/assets/pruebaimg.jpg", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Pompadour", imagenUrl: "/Images/pompadour.jpg", descripcion: "Estilo clásico con un toque moderno" },
        { nombre: "Pompadour", imagenUrl: "https://media.metrolatam.com/2020/06/19/dd7f99a888594485-80edbcf342f8f7f3234842a2c68eea00.jpg", descripcion: "Estilo clásico con un toque moderno" },
        { nombre: "Pompadour", imagenUrl: "/Images/pompadour.jpg", descripcion: "Estilo clásico con un toque moderno" },
    ];

    const galeriaContainer = document.getElementById('galeria.html');

    cortes.forEach(corte => {
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
    });
});
