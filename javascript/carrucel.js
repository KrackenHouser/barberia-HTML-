document.addEventListener('DOMContentLoaded', function () {
    const carruselContainer = document.getElementById('carrusel-container');

    // Cargar el archivo JSON con los datos de las tarjetas
    fetch('data/carrusel.json')  // Asegúrate de tener este archivo en el directorio correcto
        .then(response => response.json())
        .then(data => {
            const slides = data.slides;

            // Generar el HTML de cada tarjeta del carrusel
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

// Función para cambiar de slide
let slideIndex = 0;
function cambiarSlide(n) {
    const items = document.querySelectorAll('.carrusel-item');
    slideIndex += n;
    if (slideIndex >= items.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = items.length - 1;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.carrusel-container').style.transform = `translateX(${offset}%)`;
}

