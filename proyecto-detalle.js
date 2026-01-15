// Datos de los proyectos
const proyectos = {
    'memorion': {
        id: 'memorion',
        titulo: 'Memorion',
        fecha: 'Abril 2025',
        tecnologias: 'HTML5, CSS3, JavaScript, LocalStorage',
        descripcion: 'Juego de memoria de cartas basado en web, con ajustes de juego personalizables, temas y un sistema de clasificación.',
        caracteristicas: [
            'Formulario de configuración personalizable',
            'Múltiples modos de juego: Normal y Flash',
            'Tipos de tablero: Predeterminado (4x4, 5x4, 6x6) y personalizado',
            'Cinco temas diferentes: Scooby-Doo, Comida, Deportes, Banderas y opción Aleatoria',
            'Temporizador opcional',
            'Sistema de clasificación con almacenamiento local',
            'Compartir resultados en Facebook',
            'Soporte multidispositivo y diseño responsivo'
        ],
        demo: 'https://leireb22.github.io/memorion/',
        github: 'https://github.com/leireb22/memorion',
        imagenes: [
            'images/icon/memorion.png',
            'images/memorion/memorion1.jpg',
            'images/memorion/memorion2.jpg',
            'images/memorion/memorion3.jpg',
            'images/memorion/memorion4.jpg',
        ],
        detallesTecnicos: {
            frontend: 'HTML5, CSS3, JavaScript',
            librerias: 'Font Awesome',
            herramientas: 'Git, GitHub Pages',
            caracteristicasAvanzadas: [
                'Manipulación avanzada del DOM',
                'Eventos personalizados',
                'Animaciones CSS',
                'Almacenamiento local para clasificaciones',
                'Integración con API de Facebook'
            ],
            estructura: [
                'index.html - Estructura principal',
                'styles.css - Estilos y animaciones',
                'script.js - Lógica del juego',
                'images/ - Recursos gráficos',
                'sound.mp3 - Efectos de sonido'
            ]
        },
        comoJugar: [
            '1. Configura el juego con tus preferencias',
            '2. Haz clic en dos cartas para encontrar coincidencias',
            '3. Encuentra todos los pares para ganar',
            '4. Revisa tu posición en el ranking',
            '5. ¡Comparte tus resultados en redes sociales!'
        ]
    },
    'calculadora-ip': {
        id: 'calculadora-ip',
        titulo: 'Calculadora IP',
        fecha: 'Marzo 2025',
        tecnologias: 'HTML, CSS, JavaScript',
        descripcion: 'Calculadora de subredes IP que permite a los usuarios calcular información de red como direcciones de red, direcciones de broadcast, máscara de subred y más.',
        caracteristicas: [
            'Cálculo de direcciones de red y broadcast',
            'Determinación de la máscara de subred',
            'Cálculo del número de hosts disponibles',
            'Visualización del rango de direcciones IP',
            'Interfaz intuitiva y fácil de usar',
            'Diseño responsivo que funciona en diferentes dispositivos',
            'Validación de entrada para direcciones IP y prefijos de red',
            'Resultados claros y fáciles de entender'
        ],
        demo: 'https://leireb22.github.io/Calculadora_IP/',
        github: 'https://github.com/daylin12212/Calculadora_IP.git',
        imagenes: [
            'images/icon/calculadora.png',
            'images/ip/ip1.jpg',
            'images/ip/ip2.jpg',
            'images/ip/ip3.jpg',
            'images/ip/ip4.jpg',
            'images/ip/ip5.jpg',
        ],
        detallesTecnicos: {
            frontend: 'HTML5, CSS3, JavaScript',
            librerias: 'Ninguna (Vanilla JS)',
            herramientas: 'Git, GitHub Pages',
            caracteristicasAvanzadas: [
                'Validación de direcciones IPv4',
                'Cálculos de red sin bibliotecas externas',
                'Interfaz de usuario intuitiva',
                'Código modular y bien documentado',
                'Diseño responsivo con CSS Grid'
            ]
        },
        comoUsar: [
            'Ingresa una dirección IP en el campo correspondiente',
            'Selecciona el prefijo de red o ingresa una máscara de subred',
            'Haz clic en el botón "Calcular"',
            'Revisa los resultados que incluyen dirección de red, broadcast, máscara y más',
            'Utiliza el botón para reiniciar el formulario',
            'La aplicación validará automáticamente los datos ingresados',
            'Los resultados se mostrarán en formato decimal punteado y binario para mejor comprensión',
            'Puedes copiar los resultados haciendo clic en los botones de copia'
        ]
    },
    'google-maps': {
        id: 'google-maps',
        titulo: 'Google Maps API',
        fecha: 'Mayo 2025',
        tecnologias: 'HTML5, CSS3, JavaScript, Google Maps API',
        descripcion: 'Aplicación web que muestra un mapa interactivo utilizando la API de Google Maps, permitiendo visualizar ubicaciones específicas y ofreciendo funcionalidades de interacción.',
        caracteristicas: [
            'Visualización de mapas interactivos',
            'Centrado en ubicaciones específicas',
            'Controles de zoom y navegación',
            'Posibilidad de añadir marcadores personalizados',
            'Interfaz limpia y fácil de usar',
            'Diseño responsivo para diferentes dispositivos',
            'Integración con servicios de geolocalización',
            'Personalización de estilos de mapa'
        ],
        demo: '#',
        github: '#',
        imagenes: [
            'images/icon/maps.png',
            'images/maps/maps1.jpg',
            'images/maps/maps2.jpg',
            'images/maps/maps3.jpg',
            'images/maps/maps4.jpg',
            'images/maps/maps5.jpg'
        ],
        detallesTecnicos: {
            frontend: 'HTML5, CSS3, JavaScript',
            apis: 'Google Maps JavaScript API',
            librerias: 'Google Maps API',
            herramientas: 'Git, GitHub Pages',
            caracteristicasAvanzadas: [
                'Inicialización asíncrona de la API de Google Maps',
                'Manejo de eventos del mapa',
                'Personalización de marcadores y ventanas de información',
                'Gestión de la interacción del usuario',
                'Optimización del rendimiento del mapa'
            ]
        },
        comoUsar: [
            'Abre la aplicación en tu navegador web',
            'El mapa se cargará mostrando la ubicación predeterminada',
            'Usa los controles de zoom para acercar o alejar la vista',
            'Haz clic y arrastra para moverte por el mapa',
            'Los marcadores indican puntos de interés específicos',
            'Haz clic en un marcador para ver más información',
            'Utiliza la barra de búsqueda (si está disponible) para buscar ubicaciones',
            'La aplicación es completamente responsiva y se adapta a diferentes tamaños de pantalla'
        ]
    },
    'google-maps': {
        id: 'google-maps',
        titulo: 'Google Maps',
        fecha: 'Mayo 2024',
        tecnologias: 'HTML5, CSS3, JavaScript, Google Maps API',
        descripcion: 'Aplicación web interactiva que utiliza la API de Google Maps para mostrar ubicaciones y puntos de interés. Desarrollada con JavaScript, incluye funcionalidades como búsqueda de ubicaciones y marcadores personalizados.',
        caracteristicas: [
            'Búsqueda de ubicaciones con autocompletado',
            'Marcadores personalizados en el mapa',
            'Información detallada de ubicaciones',
            'Diseño responsivo y adaptable',
            'Interfaz intuitiva y fácil de usar',
            'Integración con servicios de Google Maps',
            'Geolocalización del usuario'
        ],
        demo: 'https://leireb22.github.io/maps/',
        github: 'https://github.com/juanjferote/maps.git',
        imagenes: [
            'images/icon/maps.png',
            'images/maps/maps-1.jpg',
            'images/maps/maps-2.jpg',
            'images/maps/maps-3.jpg',
            'images/maps/maps-4.jpg'
        ],
        detallesTecnicos: {
            frontend: 'HTML5, CSS3, JavaScript',
            api: 'Google Maps JavaScript API',
            librerias: 'Ninguna (Vanilla JS)',
            herramientas: 'Git, GitHub Pages',
            caracteristicasAvanzadas: [
                'Integración con Google Maps API',
                'Geolocalización del navegador',
                'Búsqueda con autocompletado',
                'Marcadores personalizados',
                'Diseño responsivo',
                'Manejo de eventos del mapa',
                'Ventanas de información personalizadas'
            ],
            estructura: [
                'index.html - Estructura principal',
                'styles.css - Estilos y diseño responsivo',
                'app.js - Lógica de la aplicación',
                'images/ - Recursos gráficos',
                'README.md - Documentación del proyecto'
            ]
        },
        comoUsar: [
            '1. Abre la aplicación en tu navegador',
            '2. Usa la barra de búsqueda para encontrar una ubicación',
            '3. Haz clic en cualquier punto del mapa para agregar un marcador',
            '4. Haz clic en un marcador para ver más información',
            '5. Usa los controles del mapa para hacer zoom y moverte',
        ]
    }
};

// Sección de Explicación del Código
const codeExplanation = `
    <section class="code-explanation-section">
        <h2>Explicación del Código</h2>
        
        <div class="code-description">
            <p>La calculadora web está implementada con un enfoque simple pero efectivo:</p>
            
            <h3>Funcionalidades clave</h3>
            <ul>
                <li>Captura de eventos de clic en los botones.</li>
                <li>Actualización dinámica del display.</li>
                <li>Evaluación segura de expresiones matemáticas.</li>
                <li>Manejo de errores en operaciones inválidas.</li>
                <li>Diseño responsivo para diferentes tamaños de pantalla.</li>
            </ul>
        </div>

        <div class="code-screenshots">
            <div class="code-screenshot">
                <img src="../images/ip/3.jpg" alt="Código JavaScript de la calculadora">
            </div>
            <div class="code-screenshot">
                <img src="../images/ip/4.jpg" alt="Estructura HTML de la calculadora">
            </div>
        </div>
    </section>
`;

// Función para crear un elemento de lista con icono
function createFeatureItem(text) {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-check-circle"></i> ${text}`;
    return li;
}

// Función para actualizar el contenido dinámico cuando se cambia el idioma
function updateProjectDynamicContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (projectId && typeof proyectos !== 'undefined' && proyectos[projectId]) {
        const proyecto = proyectos[projectId];
        
        // Actualizar descripción
        const projectDescription = document.getElementById('project-description');
        if (projectDescription) {
            const traducida = translateText(proyecto.descripcion);
            projectDescription.textContent = traducida;
        }
        
        // Actualizar características
        const featuresList = document.getElementById('features-list');
        if (featuresList) {
            featuresList.innerHTML = proyecto.caracteristicas
                .map(caracteristica => {
                    const traducida = translateText(caracteristica);
                    return `<li>${traducida}</li>`;
                })
                .join('');
        }
        
        // Actualizar pasos de juego/uso
        if (proyecto.id === 'memorion' && proyecto.comoJugar) {
            const stepsList = document.getElementById('memorion-steps');
            if (stepsList) {
                stepsList.innerHTML = proyecto.comoJugar.map(paso => {
                    const traducido = translateText(paso);
                    return `<li>${traducido}</li>`;
                }).join('');
            }
        } else if (proyecto.id === 'calculadora-ip' && proyecto.comoUsar) {
            const stepsList = document.getElementById('calculadora-steps');
            if (stepsList) {
                stepsList.innerHTML = proyecto.comoUsar.map(paso => {
                    const traducido = translateText(paso);
                    return `<li>${traducido}</li>`;
                }).join('');
            }
        } else if (proyecto.id === 'google-maps' && proyecto.comoUsar) {
            const stepsList = document.getElementById('google-maps-steps');
            if (stepsList) {
                stepsList.innerHTML = proyecto.comoUsar.map(paso => {
                    const traducido = translateText(paso);
                    return `<li>${traducido}</li>`;
                }).join('');
            }
        }
    }
}

// Función para crear una sección con título y contenido
function createSection(title, content, isList = false) {
    const section = document.createElement('div');
    section.className = 'project-section';
    
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.className = 'section-title';
    
    const contentElement = document.createElement('div');
    contentElement.className = 'section-content';
    
    if (isList && Array.isArray(content)) {
        const list = document.createElement('ul');
        list.className = 'feature-list';
        content.forEach(item => {
            const li = createFeatureItem(item);
            list.appendChild(li);
        });
        contentElement.appendChild(list);
    } else if (typeof content === 'object' && content !== null) {
        for (const [key, value] of Object.entries(content)) {
            const group = document.createElement('div');
            group.className = 'tech-group';
            
            const groupTitle = document.createElement('h4');
            groupTitle.textContent = key;
            
            const groupContent = document.createElement('div');
            if (Array.isArray(value)) {
                const list = document.createElement('ul');
                list.className = 'tech-list';
                value.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    list.appendChild(li);
                });
                groupContent.appendChild(list);
            } else {
                groupContent.textContent = value;
            }
            
            group.appendChild(groupTitle);
            group.appendChild(groupContent);
            contentElement.appendChild(group);
        }
    } else {
        contentElement.textContent = content;
    }
    
    section.appendChild(titleElement);
    section.appendChild(contentElement);
    return section;
}

// Función para actualizar el contenido del proyecto
function updateProjectContent(proyecto) {
    // Actualizar descripción
    const projectDescription = document.getElementById('project-description');
    projectDescription.textContent = proyecto.descripcion;
    
    // Traducir descripción si está disponible
    if (currentLanguage === 'en' && translateText(proyecto.descripcion) !== proyecto.descripcion) {
        projectDescription.textContent = translateText(proyecto.descripcion);
    }
    
    // Actualizar características
    const featuresList = document.getElementById('features-list');
    if (featuresList) {
        featuresList.innerHTML = proyecto.caracteristicas
            .map(caracteristica => {
                const traducida = translateText(caracteristica);
                return `<li>${traducida}</li>`;
            })
            .join('');
    }

    // Manejar la sección de Cómo Usar/Jugar
    const gameplaySection = document.getElementById('gameplay-section');
    if (gameplaySection) {
        // Ocultar todas las secciones de gameplay primero
        document.querySelectorAll('.project-gameplay').forEach(section => {
            section.style.display = 'none';
        });
        
        // Mostrar la sección correspondiente al proyecto actual
        if (proyecto.id === 'memorion' && proyecto.comoJugar) {
            const section = document.getElementById('memorion-gameplay');
            const stepsList = document.getElementById('memorion-steps');
            if (section && stepsList) {
                section.style.display = 'block';
                stepsList.innerHTML = proyecto.comoJugar.map(paso => {
                    const traducido = translateText(paso);
                    return `<li>${traducido}</li>`;
                }).join('');
            }
        } else if (proyecto.id === 'calculadora-ip' && proyecto.comoUsar) {
            const section = document.getElementById('calculadora-gameplay');
            const stepsList = document.getElementById('calculadora-steps');
            if (section && stepsList) {
                section.style.display = 'block';
                stepsList.innerHTML = proyecto.comoUsar.map(paso => {
                    const traducido = translateText(paso);
                    return `<li>${traducido}</li>`;
                }).join('');
            }
        } else if (proyecto.id === 'google-maps' && proyecto.comoUsar) {
            const section = document.getElementById('google-maps-gameplay');
            const stepsList = document.getElementById('google-maps-steps');
            if (section && stepsList) {
                section.style.display = 'block';
                stepsList.innerHTML = proyecto.comoUsar ? proyecto.comoUsar.map(paso => {
                    const traducido = translateText(paso);
                    return `<li>${traducido}</li>`;
                }).join('') : '';
            }
        }
    }

    // Obtener referencia a la sección de explicación de código
    const codeSection = document.getElementById('code-explanation-section');
    
    // Ocultar todas las secciones de resumen primero
    const allSummaries = document.querySelectorAll('.code-section');
    allSummaries.forEach(summary => {
        summary.style.display = 'none';
    });
    
    // Ocultar todos los detalles de código
    const allCodeDetails = document.querySelectorAll('.project-code-details');
    allCodeDetails.forEach(detail => {
        detail.style.display = 'none';
    });
    
    // Mostrar la sección de explicación de código
    if (codeSection) codeSection.style.display = 'block';
    
    // Mostrar el resumen específico del proyecto
    const projectSummary = document.getElementById(`${proyecto.id}-summary`);
    if (projectSummary) projectSummary.style.display = 'block';
    
    // Mostrar los detalles de código específicos del proyecto
    const projectCodeDetails = document.getElementById(`${proyecto.id}-code-details`);
    if (projectCodeDetails) projectCodeDetails.style.display = 'block';
}

// Función para cargar los detalles del proyecto
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    console.log('ID del proyecto desde la URL:', projectId);
    console.log('Proyectos disponibles:', Object.keys(proyectos));
    
    if (!projectId) {
        window.location.href = 'proyectos.html';
        return;
    }
    
    // Cargar datos del proyecto desde la variable global
    if (typeof proyectos !== 'undefined' && proyectos[projectId]) {
        const proyecto = proyectos[projectId];
        
        // Actualizar metadatos del proyecto
        document.title = `${proyecto.titulo} - Mi Portfolio`;
        document.getElementById('project-title').textContent = proyecto.titulo;
        document.getElementById('project-date').textContent = proyecto.fecha;
        document.getElementById('project-tech').textContent = proyecto.tecnologias;
        
        // Actualizar enlaces de demo y GitHub
        const demoLink = document.getElementById('project-demo');
        const githubLink = document.getElementById('project-github');
        const actionButtons = document.querySelector('.action-buttons');
        
        // Configurar botón de demo
        if (proyecto.demo) {
            demoLink.href = proyecto.demo;
            demoLink.target = '_blank';
            demoLink.rel = 'noopener noreferrer';
            demoLink.style.display = 'inline-flex';
        } else {
            demoLink.style.display = 'none';
        }
        
        // Configurar botón de código
        if (proyecto.github) {
            githubLink.href = proyecto.github;
            githubLink.target = '_blank';
            githubLink.rel = 'noopener noreferrer';
            githubLink.style.display = 'inline-flex';
            
            // Actualizar el texto según el tipo de enlace
            const isGitHubLink = proyecto.github.includes('github.com');
            githubLink.querySelector('span').textContent = isGitHubLink ? 'Ver en GitHub' : 'Ver Código';
            
            // Actualizar el icono según el tipo de enlace
            const icon = githubLink.querySelector('i');
            if (icon) {
                icon.className = isGitHubLink ? 'fab fa-github' : 'fas fa-code';
            }
        } else {
            githubLink.style.display = 'none';
        }
        
        // Asegurarse de que los botones estén visibles
        if (actionButtons) {
            actionButtons.style.display = 'flex';
        }
        
        // Actualizar el contenido del proyecto
        updateProjectContent(proyecto);
        
        // Actualizar los textos con traducción
        updateTexts();
    } else {
        // Redirigir a la página de proyectos si no se encuentra el proyecto
        window.location.href = 'proyectos.html';
    }
    
    // Añadir clase al body para estilos específicos
    document.body.classList.add('project-detail-page');
});
