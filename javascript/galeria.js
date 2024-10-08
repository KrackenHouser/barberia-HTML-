document.addEventListener('DOMContentLoaded', function() {
    const cortes = [
        { nombre: "Corte Clásico", imagenUrl: "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/333609444_229358612824247_727969893750845113_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o47MOEhCN7UQ7kNvgHoFIUS&_nc_ht=scontent-lax3-2.xx&_nc_gid=A5srVXMvUkp5-695Gkl4YwE&oh=00_AYCC7ZjKud4THgAk39tEYtv-nuJmFkTfWz55vEqDWdptiA&oe=670B53DB", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334763533_892153672036737_12525047881690729_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TjurC8KQ7AoQ7kNvgGEq0Sp&_nc_ht=scontent-lax3-1.xx&_nc_gid=ATU6dlOvXkENvobReitPudm&oh=00_AYDMRqf8E8wgr0GCuBG3BHtRmmnIBjqJd6sPyAc7MT58HQ&oe=670B3680", descripcion: "Desvanecido con estilo contemporáneo" },
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
