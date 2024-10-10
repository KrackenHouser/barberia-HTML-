document.addEventListener('DOMContentLoaded', function () {
    // Array haircuts
    const cortes = [
        { nombre: "Corte Clásico", imagenUrl: "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/333609444_229358612824247_727969893750845113_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o47MOEhCN7UQ7kNvgHoFIUS&_nc_ht=scontent-lax3-2.xx&_nc_gid=A5srVXMvUkp5-695Gkl4YwE&oh=00_AYCC7ZjKud4THgAk39tEYtv-nuJmFkTfWz55vEqDWdptiA&oe=670B53DB", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334763533_892153672036737_12525047881690729_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TjurC8KQ7AoQ7kNvgGEq0Sp&_nc_ht=scontent-lax3-1.xx&_nc_gid=ATU6dlOvXkENvobReitPudm&oh=00_AYDMRqf8E8wgr0GCuBG3BHtRmmnIBjqJd6sPyAc7MT58HQ&oe=670B3680", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Pompadour", imagenUrl: "https://www.instagram.com/p/CptmglTIhNa/?igsh=eWduazl3NGxmNmJk", descripcion: "Estilo clásico con un toque moderno" },
        { nombre: "Corte Clásico", imagenUrl: "https://www.instagram.com/p/CpdMfukub0u/?igsh=amxjaHVxOHVsaGRz", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Corte Clásico", imagenUrl: "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/333609444_229358612824247_727969893750845113_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o47MOEhCN7UQ7kNvgHoFIUS&_nc_ht=scontent-lax3-2.xx&_nc_gid=A5srVXMvUkp5-695Gkl4YwE&oh=00_AYCC7ZjKud4THgAk39tEYtv-nuJmFkTfWz55vEqDWdptiA&oe=670B53DB", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334763533_892153672036737_12525047881690729_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TjurC8KQ7AoQ7kNvgGEq0Sp&_nc_ht=scontent-lax3-1.xx&_nc_gid=ATU6dlOvXkENvobReitPudm&oh=00_AYDMRqf8E8wgr0GCuBG3BHtRmmnIBjqJd6sPyAc7MT58HQ&oe=670B3680", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Pompadour", imagenUrl: "/Images/pompadour.jpg", descripcion: "Estilo clásico con un toque moderno" },
        { nombre: "Corte Clásico", imagenUrl: "/Images/corte-clasico.jpg", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Corte Clásico", imagenUrl: "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/333609444_229358612824247_727969893750845113_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o47MOEhCN7UQ7kNvgHoFIUS&_nc_ht=scontent-lax3-2.xx&_nc_gid=A5srVXMvUkp5-695Gkl4YwE&oh=00_AYCC7ZjKud4THgAk39tEYtv-nuJmFkTfWz55vEqDWdptiA&oe=670B53DB", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334763533_892153672036737_12525047881690729_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TjurC8KQ7AoQ7kNvgGEq0Sp&_nc_ht=scontent-lax3-1.xx&_nc_gid=ATU6dlOvXkENvobReitPudm&oh=00_AYDMRqf8E8wgr0GCuBG3BHtRmmnIBjqJd6sPyAc7MT58HQ&oe=670B3680", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Pompadour", imagenUrl: "/Images/pompadour.jpg", descripcion: "Estilo clásico con un toque moderno" },
        { nombre: "Corte Clásico", imagenUrl: "/Images/corte-clasico.jpg", descripcion: "Un corte elegante y tradicional" }
    
    
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
