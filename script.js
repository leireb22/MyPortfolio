// Variables globales
let currentSection = null;
// La variable currentLanguage ahora está en i18n.js

// Navegación suave
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '#!') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                if (targetId === '#inicio') {
                    // Para el enlace de inicio, ir al principio de la página
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    // Para las demás secciones, posicionar el título en la parte superior
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 20; // 20px de margen
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Actualizar la URL sin recargar la página
                history.pushState(null, null, targetId);
            }
        });
    });
}

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar navegación suave
    initSmoothScrolling();
    
    // La lógica del botón de idioma ahora está manejada en i18n.js
    
    // Cargar el idioma guardado o usar el predeterminado
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(savedLanguage);
    
    // Configurar la navegación
    setupNavigation();
    
    // Mostrar la sección inicial
    showSection('datos-personales');
    
    // Actualizar textos después de cargar la página
    updateTexts();
    
    // Efecto de fade in
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Manejar la navegación por hash al cargar la página
    if (window.location.hash) {
        handleHashChange();
    } else {
        // Mostrar la página principal si no hay hash
        showSection(null);
    }
});

// Manejar cambios en el hash de la URL
window.addEventListener('hashchange', handleHashChange);