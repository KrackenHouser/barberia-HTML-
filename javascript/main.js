//Scroll
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// Verifica si la página fue refrescada
if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    scrollToTop();
}

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
            
            // Si el componente cargado es el nav, añadimos la funcionalidad del navbar móvil
            if (elementId === 'nav') {
                setupMobileNav();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Función para configurar la navegación móvil
function setupMobileNav() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
    
    if (navbarToggle && navbarLinks) {
        navbarToggle.addEventListener('click', () => {
            navbarToggle.classList.toggle('active');
            navbarLinks.classList.toggle('active');
        });
    }
}

// Cargar los componentes de las otras plantillas que vaya implementar 
document.addEventListener('DOMContentLoaded', function(){
    loadComponent('nav', 'components/nav.html');
    loadComponent('header', 'components/header.html');
    loadComponent('footer', 'components/footer.html');
});
