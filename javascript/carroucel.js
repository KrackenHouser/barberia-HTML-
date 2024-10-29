document.addEventListener('DOMContentLoaded', function () {
    const carruselContainer = document.getElementById('carrusel-container');

    // Hacer una solicitud para cargar el archivo JSON
    fetch('data/carrusel.json')
        .then(response => response.json())
        .then(data => {
            const slides = data.slides;

            // Iterar sobre los slides y generar el HTML
            slides.forEach((slide, index) => {
                const slideHTML = `
                    <div class="carrusel-item ${index === 0 ? 'active' : ''}">
                        <div class="tarjeta">
                            <img src="${slide.imagen}" alt="${slide.titulo}" class="tarjeta-img">
                            <div class="tarjeta-cuerpo">
                                <h5 class="tarjeta-titulo">${slide.titulo}</h5>
                                <p class="tarjeta-texto">${slide.texto}</p>
                                <div class="tarjeta-footer">${slide.actualizado}</div>
                            </div>
                        </div>
                    </div>
                `;
                carruselContainer.innerHTML += slideHTML;
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
