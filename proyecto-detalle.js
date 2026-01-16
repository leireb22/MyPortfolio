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

        // Actualizar título, fecha y tecnologías
        const projectTitle = document.getElementById('project-title');
        if (projectTitle) {
            projectTitle.textContent = translateText(proyecto.titulo);
        }

        const projectDate = document.getElementById('project-date');
        if (projectDate) {
            projectDate.textContent = translateText(proyecto.fecha);
        }

        const projectTech = document.getElementById('project-tech');
        if (projectTech) {
            projectTech.textContent = translateText(proyecto.tecnologias);
        }
        
        // Actualizar descripción
        const projectDescription = document.getElementById('project-description');
        if (projectDescription) {
            const traducida = translateText(proyecto.descripcion);
            projectDescription.textContent = traducida;
        }
        
        // Actualizar estructura del proyecto
        console.log('Actualizando estructura del proyecto...');
        const structureList = document.getElementById('structure-list');
        console.log('structureList encontrado:', !!structureList);
        console.log('proyecto.detallesTecnicos:', proyecto.detallesTecnicos);
        if (structureList && proyecto.detallesTecnicos && proyecto.detallesTecnicos.estructura) {
            console.log('Actualizando estructura con:', proyecto.detallesTecnicos.estructura);
            structureList.innerHTML = proyecto.detallesTecnicos.estructura
                .map(item => {
                    const traducida = translateText(item);
                    return `<li><i class="fas fa-code"></i> ${traducida}</li>`;
                })
                .join('');
        }
        
        // Actualizar características específicas
        console.log('Actualizando características...');
        const featuresList = document.getElementById('features-list');
        console.log('featuresList encontrado:', !!featuresList);
        console.log('proyecto.caracteristicas:', proyecto.caracteristicas);
        if (featuresList && proyecto.caracteristicas) {
            console.log('Actualizando características con:', proyecto.caracteristicas);
            featuresList.innerHTML = proyecto.caracteristicas
                .map(item => {
                    const traducida = translateText(item);
                    return `<li><i class="fas fa-cog"></i> ${traducida}</li>`;
                })
                .join('');
        }
        
        // Actualizar tecnologías específicas
        console.log('Actualizando tecnologías...');
        const techList = document.getElementById('tech-list');
        console.log('techList encontrado:', !!techList);
        console.log('proyecto.tecnologias:', proyecto.tecnologias);
        if (techList && proyecto.tecnologias) {
            const techItems = proyecto.tecnologias.split(',').map(tech => tech.trim());
            console.log('Tech items:', techItems);
            techList.innerHTML = techItems
                .map(item => {
                    const traducida = translateText(item);
                    return `<li><i class="fab fa-js"></i> ${traducida}</li>`;
                })
                .join('');
        }
        
        // Actualizar elementos específicos de Google Maps
        if (proyecto.id === 'google-maps') {
            // Actualizar la descripción de initMap
            const initMapElement = document.getElementById('google-maps-initmap');
            if (initMapElement) {
                const initMapText = translateText('initMap(): Función que se encarga de crear y configurar el mapa.');
                initMapElement.innerHTML = `<strong>initMap():</strong> ${translateText('Función que se encarga de crear y configurar el mapa.')}`;
            }
            
            // Actualizar la lista de estructura de Google Maps
            const googleMapsStructure = document.getElementById('google-maps-structure');
            if (googleMapsStructure) {
                const structureItems = [
                    'index.html: Contiene la estructura básica de la página web y la referencia a la API de Google Maps.',
                    'style.css: Define el estilo visual del mapa y la página web.',
                    'script.js: Contiene la lógica para inicializar y configurar el mapa.'
                ];
                googleMapsStructure.innerHTML = structureItems
                    .map(item => {
                        const traducida = translateText(item);
                        return `<li>${traducida}</li>`;
                    })
                    .join('');
            }
            
            // Actualizar la lista de funciones de initMap
            const googleMapsFunctionList = document.getElementById('google-maps-function-list');
            if (googleMapsFunctionList) {
                const functionItems = [
                    'Crea un nuevo objeto google.maps.Map asociado al elemento HTML.',
                    'Configura las opciones del mapa.',
                    'Puede añadir marcadores personalizados.',
                    'Maneja eventos de interacción del usuario.'
                ];
                googleMapsFunctionList.innerHTML = functionItems
                    .map(item => {
                        const traducida = translateText(item);
                        return `<li>${traducida}</li>`;
                    })
                    .join('');
            }
        }
        
        // Actualizar elementos específicos de Memorion
        if (proyecto.id === 'memorion') {
            // Actualizar la lista de estructura de Memorion (preservando iconos originales)
            const memorionStructureList = document.getElementById('memorion-structure-list');
            if (memorionStructureList) {
                const structureItems = [
                    { icon: 'fas fa-code', text: 'HTML: Estructura del tablero y controles' },
                    { icon: 'fab fa-css3-alt', text: 'CSS: Estilos visuales y animaciones' },
                    { icon: 'fab fa-js', text: 'JavaScript: Lógica del juego y manejo de eventos' }
                ];
                memorionStructureList.innerHTML = structureItems
                    .map(item => {
                        const traducida = translateText(item.text);
                        return `<li><i class="${item.icon}"></i> ${traducida}</li>`;
                    })
                    .join('');
            }
            
            // Actualizar la lista de características de Memorion (preservando iconos originales)
            const memorionFeaturesList = document.getElementById('memorion-features-list');
            if (memorionFeaturesList) {
                const featuresItems = [
                    { icon: 'fas fa-cog', text: 'Configuración personalizable' },
                    { icon: 'fas fa-tachometer-alt', text: 'Diferentes niveles de dificultad' },
                    { icon: 'fas fa-trophy', text: 'Sistema de puntuación' },
                    { icon: 'fas fa-mobile-alt', text: 'Diseño responsivo' }
                ];
                memorionFeaturesList.innerHTML = featuresItems
                    .map(item => {
                        const traducida = translateText(item.text);
                        return `<li><i class="${item.icon}"></i> ${traducida}</li>`;
                    })
                    .join('');
            }
            
            // Actualizar la lista de tecnologías de Memorion (restaurando iconos originales)
            const memorionTechList = document.getElementById('tech-list');
            if (memorionTechList) {
                const techItems = [
                    { icon: 'fab fa-js', text: 'JavaScript' },
                    { icon: 'fab fa-html5', text: 'HTML5' },
                    { icon: 'fab fa-css3-alt', text: 'CSS3' },
                    { icon: 'fas fa-database', text: 'LocalStorage' }
                ];
                memorionTechList.innerHTML = techItems
                    .map(item => {
                        const traducida = translateText(item.text);
                        return `<li><i class="${item.icon}"></i> ${traducida}</li>`;
                    })
                    .join('');
            }
        }
        
        // Actualizar elementos específicos de la Calculadora IP
        if (proyecto.id === 'calculadora-ip') {
            // Actualizar la lista de estructura de la Calculadora
            const calculadoraStructureList = document.getElementById('calculadora-structure-list');
            if (calculadoraStructureList) {
                const structureItems = [
                    { icon: 'fas fa-code', text: 'HTML: Formulario de entrada y área de resultados' },
                    { icon: 'fab fa-css3-alt', text: 'CSS: Estilos de la interfaz y diseño responsivo' },
                    { icon: 'fab fa-js', text: 'JavaScript: Lógica de cálculo y validación' }
                ];
                calculadoraStructureList.innerHTML = structureItems
                    .map(item => {
                        const traducida = translateText(item.text);
                        return `<li><i class="${item.icon}"></i> ${traducida}</li>`;
                    })
                    .join('');
            }
            
            // Actualizar la lista de características de la Calculadora
            const calculadoraFeaturesList = document.getElementById('calculadora-features-list');
            if (calculadoraFeaturesList) {
                const featuresItems = [
                    { icon: 'fas fa-network-wired', text: 'Cálculo de direcciones de red' },
                    { icon: 'fas fa-shield-alt', text: 'Validación de direcciones IP' },
                    { icon: 'fas fa-exchange-alt', text: 'Conversión entre formatos' },
                    { icon: 'fas fa-mobile-alt', text: 'Diseño responsivo' }
                ];
                calculadoraFeaturesList.innerHTML = featuresItems
                    .map(item => {
                        const traducida = translateText(item.text);
                        return `<li><i class="${item.icon}"></i> ${traducida}</li>`;
                    })
                    .join('');
            }
            
            // Actualizar la lista de tecnologías de la Calculadora
            const calculadoraTechList = document.getElementById('calculadora-tech-list');
            if (calculadoraTechList) {
                const techItems = [
                    { icon: 'fab fa-js', text: 'JavaScript' },
                    { icon: 'fab fa-html5', text: 'HTML5' },
                    { icon: 'fab fa-css3-alt', text: 'CSS3' },
                    { icon: 'fas fa-server', text: 'Sin dependencias externas' }
                ];
                calculadoraTechList.innerHTML = techItems
                    .map(item => {
                        const traducida = translateText(item.text);
                        return `<li><i class="${item.icon}"></i> ${traducida}</li>`;
                    })
                    .join('');
            }
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
        
        // Traducir elementos de lista (y permitir volver a ES) guardando la clave original
        document.querySelectorAll('.project-code-details li, .code-section li, .tech-list li').forEach(li => {
            const currentText = (li.textContent || '').trim();

            // Guardar/recuperar la clave estable para traducir siempre desde el texto original
            let i18nKey = li.dataset.i18nKey;
            if (!i18nKey) {
                i18nKey = currentText;

                // Si el texto actual está ya traducido (ej: en inglés) intentamos recuperar la clave ES
                // buscando en el diccionario del otro idioma.
                try {
                    const otherLang = currentLanguage === 'es' ? 'en' : 'es';
                    if (typeof i18n !== 'undefined' && i18n && i18n[otherLang]) {
                        for (const [k, v] of Object.entries(i18n[otherLang])) {
                            if (v === currentText) {
                                i18nKey = k;
                                break;
                            }
                        }
                    }
                } catch (e) {
                    // noop
                }

                li.dataset.i18nKey = i18nKey;
            }

            const traducidaCompleta = translateText(i18nKey);

            // Preservar los iconos si existen
            const icon = li.querySelector('i');
            const strong = li.querySelector('strong');
            const code = li.querySelector('code');

            // Si no hay estructura interna, actualizar como texto plano
            if (!icon && !strong && !code) {
                li.textContent = traducidaCompleta;
                return;
            }

            // Si tiene elementos internos, reconstruir el contenido preservando HTML
            let newHTML = '';
            if (icon) newHTML += `<i class="${icon.className}"></i> `;

            if (strong) {
                // La clave de traducción normalmente incluye TODO el texto (ej: "HTML: ...")
                // Si traducimos por partes se pierden traducciones y se acumulan ':'
                const parts = traducidaCompleta.split(':');
                const label = (parts[0] || '').trim();
                const rest = parts.slice(1).join(':').trim();

                newHTML += `<strong>${label}:</strong>`;
                if (rest) newHTML += ` ${rest}`;
            } else if (code) {
                const codeText = code.textContent;
                newHTML += `<code>${codeText}</code>`;
                const afterCode = originalText.substring(originalText.indexOf(codeText) + codeText.length).trim();
                if (afterCode) {
                    const afterTranslated = translateText(afterCode);
                    newHTML += ' ' + afterTranslated;
                }
            } else {
                newHTML += traducidaCompleta;
            }

            li.innerHTML = newHTML;
        });
        
        // Traducir títulos h3 en las tarjetas
        document.querySelectorAll('.feature-card h3').forEach(h3 => {
            const currentText = (h3.textContent || '').trim();

            let i18nKey = h3.dataset.i18nKey;
            if (!i18nKey) {
                i18nKey = currentText;
                try {
                    const otherLang = currentLanguage === 'es' ? 'en' : 'es';
                    if (typeof i18n !== 'undefined' && i18n && i18n[otherLang]) {
                        for (const [k, v] of Object.entries(i18n[otherLang])) {
                            if (v === currentText) {
                                i18nKey = k;
                                break;
                            }
                        }
                    }
                } catch (e) {
                    // noop
                }
                h3.dataset.i18nKey = i18nKey;
            }

            h3.textContent = translateText(i18nKey);
        });
        
        // Traducir párrafos en las descripciones técnicas
        document.querySelectorAll('.tech-description p').forEach(p => {
            const currentText = (p.textContent || '').trim();

            let i18nKey = p.dataset.i18nKey;
            if (!i18nKey) {
                i18nKey = currentText;
                try {
                    const otherLang = currentLanguage === 'es' ? 'en' : 'es';
                    if (typeof i18n !== 'undefined' && i18n && i18n[otherLang]) {
                        for (const [k, v] of Object.entries(i18n[otherLang])) {
                            if (v === currentText) {
                                i18nKey = k;
                                break;
                            }
                        }
                    }
                } catch (e) {
                    // noop
                }
                p.dataset.i18nKey = i18nKey;
            }

            p.textContent = translateText(i18nKey);
        });
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
        
        // Actualizar el contenido dinámico para traducir listas y descripciones
        updateProjectDynamicContent();
    } else {
        // Redirigir a la página de proyectos si no se encuentra el proyecto
        window.location.href = 'proyectos.html';
    }
    
    // Añadir clase al body para estilos específicos
    document.body.classList.add('project-detail-page');
    
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
