document.addEventListener('DOMContentLoaded', function () {
    const galeriaContainer = document.getElementById('galeria');
    
    // Hacer una solicitud para cargar el archivo JSON
    fetch('cortes.json')
        .then(response => response.json())
        .then(data => {
            const cortes = data.cortes;

            // Iterar sobre los cortes y generar las tarjetas
            cortes.forEach((corte, index) => {
                const card = document.createElement('div');
                card.className = 'col-md-4 col-sm-6 mb-4';
                card.innerHTML = `
                    <div class="card">
                        <a data-fancybox="gallery" href="${corte.imagenUrl}" title="${corte.descripcion}">
                            <img src="${corte.imagenUrl}" class="card-img-top" alt="${corte.nombre}">
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">${corte.nombre}</h5>
                            <p class="card-text">${corte.descripcion}</p>
                            <a href="${corte.link}" target="_blank" class="btn btn-primary">Ver en Instagram</a>
                        </div>
                    </div>
                `;
                galeriaContainer.appendChild(card);
            });

            // Inicializa FancyBox
            Fancybox.bind('[data-fancybox="gallery"]', {
                // Puedes agregar configuraciones aquí si lo deseas
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
