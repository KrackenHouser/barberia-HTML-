// Función para cargar un componentes en el Index HTML
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el archivo ${filePath}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Cargar los componentes de las otras plantillas que vaya implemntar 
document.addEventListener('DOMContentLoaded', function(){
    loadComponent('nav', 'components/nav.html');
    loadComponent('header', 'components/header.html');
    loadComponent('footer', 'components/footer.html');





});
