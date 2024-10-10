document.addEventListener('DOMContentLoaded', function() {
    // Array of haircuts
    const cortes = [
        { nombre: "Corte Clásico", imagenUrl: "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/333609444_229358612824247_727969893750845113_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o47MOEhCN7UQ7kNvgHoFIUS&_nc_ht=scontent-lax3-2.xx&_nc_gid=A5srVXMvUkp5-695Gkl4YwE&oh=00_AYCC7ZjKud4THgAk39tEYtv-nuJmFkTfWz55vEqDWdptiA&oe=670B53DB", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Corte Clásico", imagenUrl: "https://instagram.fsal3-1.fna.fbcdn.net/v/t51.29350-15/334811002_521393340166083_7221392864920941398_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsal3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=DZXADPzwfgwQ7kNvgG05lal&_nc_gid=2bd1e4b63ffa471cacb0e8d2147c7c39&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYCAuajrw5qJ_fwjHmz41ABRwpqnoTOFyPUkwL1Ja-6Haw&oe=670CDB20&_nc_sid=d885a2", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334763533_892153672036737_12525047881690729_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TjurC8KQ7AoQ7kNvgGEq0Sp&_nc_ht=scontent-lax3-1.xx&_nc_gid=ATU6dlOvXkENvobReitPudm&oh=00_AYDMRqf8E8wgr0GCuBG3BHtRmmnIBjqJd6sPyAc7MT58HQ&oe=670B3680", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Fade Moderno", imagenUrl: "https://instagram.fsal2-1.fna.fbcdn.net/v/t51.29350-15/334618131_1660845924329407_5886103237575872943_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsal2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=2USNzPaXG80Q7kNvgET41Vp&_nc_gid=8c10c153b479485492ef1014b3f16e5e&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYBvF-dKllWD81Ab4MrfRr5u4jwoSPEZWp6EF-8E31zhVg&oe=670CDDEF&_nc_sid=d885a2", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Corte Clásico", imagenUrl: "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/333609444_229358612824247_727969893750845113_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o47MOEhCN7UQ7kNvgHoFIUS&_nc_ht=scontent-lax3-2.xx&_nc_gid=A5srVXMvUkp5-695Gkl4YwE&oh=00_AYCC7ZjKud4THgAk39tEYtv-nuJmFkTfWz55vEqDWdptiA&oe=670B53DB", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Corte Clásico", imagenUrl: "https://instagram.fsal3-1.fna.fbcdn.net/v/t51.29350-15/334811002_521393340166083_7221392864920941398_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsal3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=DZXADPzwfgwQ7kNvgG05lal&_nc_gid=2bd1e4b63ffa471cacb0e8d2147c7c39&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYCAuajrw5qJ_fwjHmz41ABRwpqnoTOFyPUkwL1Ja-6Haw&oe=670CDB20&_nc_sid=d885a2", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334763533_892153672036737_12525047881690729_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TjurC8KQ7AoQ7kNvgGEq0Sp&_nc_ht=scontent-lax3-1.xx&_nc_gid=ATU6dlOvXkENvobReitPudm&oh=00_AYDMRqf8E8wgr0GCuBG3BHtRmmnIBjqJd6sPyAc7MT58HQ&oe=670B3680", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Fade Moderno", imagenUrl: "https://instagram.fsal2-1.fna.fbcdn.net/v/t51.29350-15/334618131_1660845924329407_5886103237575872943_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsal2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=2USNzPaXG80Q7kNvgET41Vp&_nc_gid=8c10c153b479485492ef1014b3f16e5e&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYBvF-dKllWD81Ab4MrfRr5u4jwoSPEZWp6EF-8E31zhVg&oe=670CDDEF&_nc_sid=d885a2", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Corte Clásico", imagenUrl: "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/333609444_229358612824247_727969893750845113_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o47MOEhCN7UQ7kNvgHoFIUS&_nc_ht=scontent-lax3-2.xx&_nc_gid=A5srVXMvUkp5-695Gkl4YwE&oh=00_AYCC7ZjKud4THgAk39tEYtv-nuJmFkTfWz55vEqDWdptiA&oe=670B53DB", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Corte Clásico", imagenUrl: "https://instagram.fsal3-1.fna.fbcdn.net/v/t51.29350-15/334811002_521393340166083_7221392864920941398_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsal3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=DZXADPzwfgwQ7kNvgG05lal&_nc_gid=2bd1e4b63ffa471cacb0e8d2147c7c39&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYCAuajrw5qJ_fwjHmz41ABRwpqnoTOFyPUkwL1Ja-6Haw&oe=670CDB20&_nc_sid=d885a2", descripcion: "Un corte elegante y tradicional" },
        { nombre: "Fade Moderno", imagenUrl: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/334763533_892153672036737_12525047881690729_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TjurC8KQ7AoQ7kNvgGEq0Sp&_nc_ht=scontent-lax3-1.xx&_nc_gid=ATU6dlOvXkENvobReitPudm&oh=00_AYDMRqf8E8wgr0GCuBG3BHtRmmnIBjqJd6sPyAc7MT58HQ&oe=670B3680", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Fade Moderno", imagenUrl: "https://instagram.fsal2-1.fna.fbcdn.net/v/t51.29350-15/334618131_1660845924329407_5886103237575872943_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsal2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=2USNzPaXG80Q7kNvgET41Vp&_nc_gid=8c10c153b479485492ef1014b3f16e5e&edm=ANTKIIoBAAAA&ccb=7-5&oh=00_AYBvF-dKllWD81Ab4MrfRr5u4jwoSPEZWp6EF-8E31zhVg&oe=670CDDEF&_nc_sid=d885a2", descripcion: "Desvanecido con estilo contemporáneo" },
        { nombre: "Pompadour", imagenUrl: "/Images/pompadour.jpg", descripcion: "Estilo clásico con un toque moderno" },
        { nombre: "Corte Clásico", imagenUrl: "/Images/corte-clasico.jpg", descripcion: "Un corte elegante y tradicional" }
    ];

    // Find the gallery container
    const galeriaContainer = document.getElementById('galeria');

    // Loop through the cortes array and create cards
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

            // Modificar la creación de las tarjetas para incluir la funcionalidad de vista previa
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
