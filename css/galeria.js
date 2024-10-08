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
        { nombre: "Pompadour", imagenUrl: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/333609444_229358612824247_727969893750845113_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IfaPQMQgKmUQ7kNvgF1tior&_nc_ht=scontent-ord5-1.xx&_nc_gid=APS_A7ybVQc8yHXn-Jqr76b&oh=00_AYCE_jtRzgMe_DFlY30R8Es-piBI3ammQvFuI4qFKiiZkw&oe=6701A8DB", descripcion: "Estilo clásico con un toque moderno" },
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