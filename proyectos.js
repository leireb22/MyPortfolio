// Función para cargar los detalles del proyecto
function cargarDetallesProyecto() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (projectId && proyectosData[projectId]) {
        const proyecto = proyectosData[projectId];
        
        // Actualizar la información básica
        document.getElementById('project-title').textContent = proyecto.titulo;
        document.getElementById('project-date').textContent = proyecto.fecha;
        document.getElementById('project-tech').textContent = proyecto.tecnologias;
        document.getElementById('project-description').textContent = proyecto.descripcion;
        
        // Actualizar características
        const featuresList = document.getElementById('project-features');
        featuresList.innerHTML = ''; // Limpiar la lista
        proyecto.caracteristicas.forEach(caracteristica => {
            const li = document.createElement('li');
            li.textContent = caracteristica;
            featuresList.appendChild(li);
        });
        
        // Actualizar enlaces
        document.getElementById('project-demo').href = proyecto.demo;
        document.getElementById('project-github').href = proyecto.github;
        
        // Cargar contenido específico del proyecto
        const projectContent = document.getElementById('project-specific-content');
        projectContent.innerHTML = generarContenidoEspecifico(proyecto);
    } else {
        // Redirigir a la página de proyectos si no se encuentra el proyecto
        window.location.href = 'proyectos.html';
    }
}

// Datos de los proyectos
const proyectosData = {
    'memorion': {
        id: 'memorion',
        titulo: 'Memorion',
        fecha: '2022',
        tecnologias: 'JavaScript, HTML, CSS',
        descripcion: 'Un juego de memoria donde debes encontrar todas las parejas de cartas iguales en el menor tiempo posible.',
        caracteristicas: ['Juego de memoria', 'Desarrollado con JavaScript puro', 'Diseño responsivo'],
        demo: 'https://example.com/memorion',
        github: 'https://github.com/example/memorion',
    },
    'calculadora-ip': {
        id: 'calculadora-ip',
        titulo: 'Calculadora IP',
        fecha: '2022',
        tecnologias: 'JavaScript, HTML, CSS',
        descripcion: 'Una herramienta para realizar cálculos de subredes, máscaras de red y rangos de direcciones IP.',
        caracteristicas: ['Calculadora de subredes', 'Desarrollado con JavaScript puro', 'Diseño responsivo'],
        demo: 'https://example.com/calculadora-ip',
        github: 'https://github.com/example/calculadora-ip',
    },
    'maps': {
        id: 'maps',
        titulo: 'Maps',
        fecha: '2022',
        tecnologias: 'JavaScript, HTML, CSS, Google Maps API',
        descripcion: 'Una aplicación web interactiva que utiliza la API de Google Maps para mostrar ubicaciones, rutas y puntos de interés.',
        caracteristicas: ['Integración con Google Maps', 'Desarrollado con JavaScript puro', 'Diseño responsivo'],
        demo: 'https://example.com/maps',
        github: 'https://github.com/example/maps',
    },
};

// Función para generar el contenido específico de cada proyecto
function generarContenidoEspecifico(proyecto) {
    let contenido = '';
    
    switch(proyecto.id) {
        case 'memorion':
            contenido = `
                <div class="game-explanation">
                    <h2 data-i18n="Cómo se juega">¿Cómo se juega?</h2>
                    <div class="explanation-content">
                        <div class="explanation-image">
                            <img src="../images/proyectos/memorion-1.jpg" alt="Pantalla inicial del juego de memoria" class="game-screenshot">
                        </div>
                        <div class="explanation-text">
                            <p>¡Bienvenido a Memorion! Un emocionante juego de memoria donde tu objetivo es encontrar todas las parejas de cartas iguales en el menor tiempo posible y con la menor cantidad de movimientos.</p>
                            <p>El juego es simple pero desafiante. Haz clic en dos cartas para voltearlas. Si coinciden, permanecerán visibles. Si no, se volverán a dar la vuelta. ¡Usa tu memoria para recordar la ubicación de cada carta y completa el juego con la mejor puntuación!</p>
                        </div>
                        <div class="explanation-image">
                            <img src="../images/proyectos/memorion-2.jpg" alt="Partida en curso del juego de memoria" class="game-screenshot">
                        </div>
                        
                        <div class="code-explanation">
                            <h3>Detalles técnicos</h3>
                            <p>El juego fue desarrollado utilizando JavaScript puro, aprovechando las características modernas del lenguaje y las APIs del navegador. Algunos aspectos destacados del código incluyen:</p>
                            <ul>
                                <li>Manejo eficiente del estado del juego</li>
                                <li>Animaciones fluidas con CSS transitions</li>
                                <li>Diseño responsivo que se adapta a diferentes tamaños de pantalla</li>
                                <li>Lógica para barajar las cartas de forma aleatoria</li>
                            </ul>
                            
                            <div class="code-screenshots">
                                <div class="code-screenshot">
                                    <div class="code-placeholder">
                                        <i class="fas fa-code"></i>
                                        <span>Captura del código #1</span>
                                    </div>
                                </div>
                                <div class="code-screenshot">
                                    <div class="code-placeholder">
                                        <i class="fas fa-code"></i>
                                        <span>Captura del código #2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            break;
            
        case 'calculadora-ip':
            contenido = `
                <div class="project-feature">
                    <h3>Función principal</h3>
                    <p>La Calculadora IP es una herramienta que permite realizar cálculos de subredes, máscaras de red y rangos de direcciones IP de manera rápida y precisa.</p>
                    
                    <div class="feature-images">
                        <div class="explanation-image">
                            <img src="../images/proyectos/calculadora-1.jpg" alt="Interfaz de la calculadora IP" class="project-screenshot">
                        </div>
                        <div class="explanation-image">
                            <img src="../images/proyectos/calculadora-2.jpg" alt="Resultados de cálculo" class="project-screenshot">
                        </div>
                    </div>
                    
                    <div class="code-explanation">
                        <h3>Detalles técnicos</h3>
                        <p>Desarrollada con JavaScript puro, esta calculadora incluye:</p>
                        <ul>
                            <li>Validación de direcciones IP y máscaras de red</li>
                            <li>Cálculo de dirección de red, broadcast y rangos</li>
                            <li>Conversión entre notación decimal y binaria</li>
                            <li>Interfaz intuitiva y fácil de usar</li>
                        </ul>
                    </div>
                </div>`;
            break;
            
        case 'maps':
            contenido = `
                <div class="project-feature">
                    <h3>Integración con Google Maps</h3>
                    <p>Una aplicación web interactiva que utiliza la API de Google Maps para mostrar ubicaciones, rutas y puntos de interés de manera dinámica.</p>
                    
                    <div class="feature-images">
                        <div class="explanation-image">
                            <img src="../images/proyectos/maps-1.jpg" alt="Vista del mapa" class="project-screenshot">
                        </div>
                        <div class="explanation-image">
                            <img src="../images/proyectos/maps-2.jpg" alt="Búsqueda de ubicaciones" class="project-screenshot">
                        </div>
                    </div>
                    
                    <div class="code-explanation">
                        <h3>Detalles técnicos</h3>
                        <p>Características técnicas implementadas:</p>
                        <ul>
                            <li>Integración con Google Maps JavaScript API</li>
                            <li>Búsqueda de ubicaciones con autocompletado</li>
                            <li>Marcadores personalizados y ventanas de información</li>
                            <li>Cálculo de rutas y direcciones</li>
                            <li>Almacenamiento local de ubicaciones favoritas</li>
                        </ul>
                    </div>
                </div>`;
            break;
    }
    
    return contenido;
}

// Función para inicializar la página de proyectos
function initProyectos() {
    // Si estamos en la página de detalles, cargar el proyecto correspondiente
    if (window.location.pathname.includes('proyecto-detalle.html')) {
        cargarDetallesProyecto();
        return;
    }
    
    // Si estamos en la página de listado de proyectos
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Evitar que el clic en los enlaces dentro de la tarjeta active este evento
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            // Redirigir a la página de detalles del proyecto
            const projectId = this.getAttribute('data-project-id');
            if (projectId) {
                window.location.href = `proyecto-detalle.html?id=${projectId}`;
            }
        });
    });
}

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    initProyectos();
    
    // Forzar cierre del menú lateral al hacer click fuera (solo en esta página)
    const navToggle = document.getElementById('nav-toggle');
    if (navToggle) {
        document.addEventListener('click', function (e) {
            if (navToggle.checked) {
                const target = e.target;
                const isHamburger = target.closest('.nav-toggle-button');
                const isLanguage = target.closest('.language-container');
                const isNav = target.closest('.header-nav');
                if (!isHamburger && !isLanguage && !isNav) {
                    // Forzar clic en el label del overlay para que el checkbox se desmarque
                    const overlayLabel = document.querySelector('.nav-overlay');
                    if (overlayLabel) {
                        overlayLabel.click();
                    } else {
                        // Fallback: desmarcar directamente
                        navToggle.checked = false;
                    }
                }
            }
        }, true);
        document.addEventListener('touchstart', function (e) {
            if (navToggle.checked) {
                const target = e.target;
                const isHamburger = target.closest('.nav-toggle-button');
                const isLanguage = target.closest('.language-container');
                const isNav = target.closest('.header-nav');
                if (!isHamburger && !isLanguage && !isNav) {
                    const overlayLabel = document.querySelector('.nav-overlay');
                    if (overlayLabel) {
                        overlayLabel.click();
                    } else {
                        navToggle.checked = false;
                    }
                }
            }
        }, { passive: true, capture: true });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navToggle.checked) {
                navToggle.checked = false;
            }
        });
    }
});
