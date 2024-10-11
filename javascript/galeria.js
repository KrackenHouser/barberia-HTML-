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
                        <a href="${corte.link}" target="_blank">
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
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
