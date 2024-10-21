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
    loadComponent('carroucel', 'components/carroucel.html');
    loadComponent('footer', 'components/footer.html');
});

//Footer Run
window.addEventListener('resize', adjustFooterPosition);
document.addEventListener('DOMContentLoaded', adjustFooterPosition);

function adjustFooterPosition() {
    const footer = document.querySelector('footer');
    const content = document.querySelector('.content');
    
    // Lógica adicional si es necesario
    if (window.innerHeight > content.offsetHeight + footer.offsetHeight) {
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
    } else {
        footer.style.position = 'relative';
    }
}
