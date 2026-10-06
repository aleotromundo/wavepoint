## 2026-10-07

### Auditoría y corrección de imagen repetida

- `index.html` y `piloto.html`: reemplazar únicamente la foto de `Explora Tamarindo`, que repetía exactamente `assets/img/site/home-hero.jpg`, por `assets/img/guide/cover.jpg`, una composición creada para representar la guía turística. El hero no se modificó.
- `AUDIT.md`: registrar los siete grupos de duplicados exactos encontrados, distinguir archivos archivados o intencionales de la única repetición activa corregida y documentar la limitación de no contar con Python para una comparación perceptual automatizada.
- Validación: SHA-256 sobre 182 imágenes locales, revisión visual de la imagen repetida y del reemplazo, referencias activas revisadas y `git diff --check`.

### Logo de cierre después de tarifas

- `index.html`, `piloto.html` y `styles.css`: agregar una segunda aparición del logo WavePoint debajo de la tabla de tarifas, reutilizando el aura de ondas del hero con una escala más contenida y ajustes responsive para que funcione como cierre de la sección sin competir con la información.
- Validación: revisar la posición del nuevo bloque después de la nota de tarifas y mantener `git diff --check` como control de formato.

### Encuestas de servicios más interactivas

- `services.js`: agregar una barra de progreso bilingüe a los formularios de solicitudes, estados de respuesta y conteo dinámico sin eliminar preguntas, opciones, campos opcionales ni el flujo existente hacia WhatsApp.
- `styles.css`: mejorar la lectura y sensación de interacción de las opciones con estados seleccionados, foco visible, confirmación visual por pregunta, microanimaciones y soporte para `prefers-reduced-motion`.
- Validación: revisar el renderizado de todos los tipos de pregunta, confirmar que el marcado nuevo se monta en el formulario compartido y ejecutar `git diff --check`. La validación con `node --check` queda pendiente porque Node.js no está instalado en este entorno.

### Logo de Servicios con aura del hero y protocolo de continuidad para IA

- `index.html`, `piloto.html` y `styles.css`: agrandar moderadamente el segundo logo ubicado después de las tarjetas de servicios; envolverlo en una pieza visual con las mismas ondas, brillo, sombra y entrada elástica del logo del hero, con tamaños adaptados a tablet y móvil sin alterar el hero y manteniendo sincronizada la vista piloto.
- `README.md`, `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`, `PROJECT_GUIDE.md` y `AUDIT.md`: dejar un punto de entrada común para cualquier IA, reglas de colaboración en español, flujo de inspección/implementación/validación, restricciones del producto y estado de la auditoría.
- Validación: comprobación de referencias del nuevo marcado, revisión de reglas responsive y `git diff --check`. `node --check` quedó documentado como validación requerida, pero no pudo ejecutarse en este entorno porque Node.js no está instalado.

### Corrección de fotos de Avellanas y Capitán Suizo / Avellanas and Capitán Suizo photo correction

- `guia-playas.html` y `guide-i18n.js`: reemplazar la foto del mono aullador en la tarjeta de Playa Avellanas por `assets/img/guide/beaches/playa-avellanas.jpg` y actualizar el texto alternativo ES/EN.
- `Enlaces/capitan-suizo.html`, `services.js`, `styles.css`, `index.html` y `piloto.html`: reemplazar la foto de playa genérica repetida por `assets/img/stays/capitan-suizo/capitan.jpg`, una imagen específica del bungalow y sus jardines; actualizar textos alternativos y referencias comentadas.
- Validación: rutas de imágenes, `node --check`, `git diff --check` y revisión visual de la guía y la ficha de Capitán Suizo en el navegador.

### Correction of Avellanas and Capitán Suizo photos

- `guia-playas.html` and `guide-i18n.js`: replace the howler monkey photo in the Playa Avellanas card with `assets/img/guide/beaches/playa-avellanas.jpg` and update the Spanish/English alt text.
- `Enlaces/capitan-suizo.html`, `services.js`, `styles.css`, `index.html` and `piloto.html`: replace the repeated generic beach photo with `assets/img/stays/capitan-suizo/capitan.jpg`, a property-specific bungalow and garden photo; update alt text and commented references.
- Validation: image paths, `node --check`, `git diff --check`, and browser visual review of the guide and Capitán Suizo page.

## 2026-10-07

### Logo decorativo en el espacio libre de Servicios / Decorative logo in Services whitespace

- `index.html`, `piloto.html` y `styles.css`: ubicar el logo blanco del hero como una pieza de grilla que ocupa las tres columnas libres después de la tarjeta de Surfskate, al final de la primera grilla de Servicios, en una escala menor y con baja opacidad; adaptarlo a una sola columna y un tamaño compacto en móvil para preservar la lectura de las tarjetas.
- `index.html`, `piloto.html` and `styles.css`: place the smaller, low-opacity white hero logo as a grid item spanning the three open columns after the Surfskate card, at the end of the first Services grid; adapt it to one compact column on mobile to preserve card readability.

### Biblioteca de fotos de estadías y servicios / Stays and services photo library

- `assets/img/stays/` y `assets/img/services/`: organizar las fotos activas por alojamiento y servicio; actualizar sus referencias en páginas, datos, estilos y el armador de viajes.
- Retirar de las galerías de Capitán Suizo y Occidental las fotos repetidas o sin atribución confirmada; dejar Casa Aura sin fotos hasta contar con imágenes verificadas y corregir los textos alternativos ES/EN de Red Door.
- Mantener sin asignar las fotos heredadas de edificio y piscina sin identificación fiable; usar fotos centradas que llenan sus cuadros y glassmorphism en los paneles de colaboradores.
- Eliminar únicamente cuatro copias idénticas verificadas por SHA-256; conservar las demás imágenes originales, incluidas las que todavía no tienen uso confirmado.
- `assets/img/stays/` and `assets/img/services/`: organize active photos by accommodation and service; update references in pages, data, styles and the trip builder.
- Remove repeated or unverified photos from the Capitán Suizo and Occidental galleries; leave Casa Aura without photos until verified images are available and correct Red Door’s Spanish and English alternative text.
- Keep legacy building and pool photos with unverified ownership unassigned; center photos to fill their frames and use glassmorphism on collaborator panels.
- Delete only four SHA-256-verified exact duplicates; retain all other originals, including images whose use is not yet confirmed.

### Logotipo en los pies de página / Footer logo

- `index.html`, `piloto.html`, `trip-builder.html` y `guia-playas.html`: usar el logo blanco sin borde del hero en el lugar de la marca del pie.
- Fichas de colaboradores: mostrar «← Volver» junto al logo blanco tanto en la navegación superior como al pie; conservar ambos enlaces al inicio y traducir el texto sin reemplazar la imagen.
- `index.html`, `piloto.html`, `trip-builder.html` and `guia-playas.html`: use the borderless white hero logo in the footer brand position.
- Collaborator pages: show “← Back” beside the white logo in both the top navigation and footer; retain both links home and translate the label without replacing the image.
- `styles.css`: quitar el marco y la caja translúcida de las galerías de colaboradores para presentar las fotos directamente, centradas y sin bordes.
- `styles.css`: remove the frame and translucent gallery box from collaborator galleries, presenting centered photos directly without borders.

### Galería de fotos de Nosotros / About page photo gallery

- `index.html`, `piloto.html` y `Enlaces/nostros.html`: quitar la galería de fotos “Hecho para volver al agua” y el encabezado que la acompañaba.
- `index.html`, `piloto.html` and `Enlaces/nostros.html`: remove the “Made to get back in the water” photo gallery and its heading.

### Índice visual de alojamientos / Accommodation photo index

- `services.js` y `styles.css`: mostrar las cuatro fotos enlazadas (sin nombres ni tarjetas), asignar a Casa Aura `stayandhotels4_resultado.webp`, llenar el espacio de cada imagen y deslizar a la ficha correspondiente.
- `services.js` and `styles.css`: show all four linked photos (no names or cards), assign `stayandhotels4_resultado.webp` to Casa Aura, fill each image area, and scroll to the matching detail.
- `services.js` y `assets/img/stays/casa-aura/`: sumar las fotos de Casa Aura a su ficha con textos alternativos ES/EN.
- `services.js`: traducir al inglés las categorías, resúmenes, notas de tarifa, opciones y servicios de los cuatro alojamientos.
- `index.html`, `piloto.html` y `footer-video.js`: corregir la referencia al video tras su cambio de nombre a `videoheroxx3.mp4`.
- `services.js` and `assets/img/stays/casa-aura/`: add Casa Aura photos to its detail with Spanish and English alternative text.
- `services.js`: translate the categories, summaries, rate notes, options and amenities for all four stays into English.
- `index.html`, `piloto.html` and `footer-video.js`: fix the video reference after it was renamed to `videoheroxx3.mp4`.

### Orden y subrayado animado de navegación / Navigation order and animated underline

- Menú de escritorio y móvil: ordenar los enlaces como Inicio, Colaboradores, Servicios, Nosotros y Guía turística.
- `site-nav.js` y `styles.css`: añadir en escritorio un subrayado turquesa que se desliza entre enlaces con movimiento elástico y responde también al foco de teclado; ocultarlo en móvil y respetar movimiento reducido.
- Desktop and mobile menus: order links as Home, Partners, Services, About and Tourist guide.
- `site-nav.js` and `styles.css`: add a turquoise underline that glides between desktop links with an elastic motion and keyboard-focus support; hide it on mobile and respect reduced motion.

### Foto repetida en la ficha de Red Door / Duplicate photo on the Red Door page

- `Enlaces/red-door.html`: reemplazar en la galería la imagen repetida de la portada por una foto distinta de la entrada del hotel; actualizar el texto alternativo en español e inglés.
- `Enlaces/red-door.html`: replace the gallery photo duplicated from the hero with a different hotel entrance photo; update the Spanish and English alternative text.

### Estabilidad del carrusel de aliados / Allies carousel stability

- `styles.css`: quitar las perforaciones decorativas que cruzaban el carrusel, evitar filtros y escalados por hover que podían parpadear mientras las tarjetas se desplazan, y alinear el recorrido del loop con el ancho exacto del contenido duplicado.
- `styles.css`: resolver los marcadores de conflicto conservando ambos grupos de cambios; actualizar las versiones de caché en `index.html` y `piloto.html`.
- `styles.css`: remove decorative perforations crossing the carousel, avoid hover filters and scaling that could flicker while cards move, and align the loop travel with the exact width of the duplicated content.
- `styles.css`: clear the conflict markers while preserving both change sets; update cache versions in `index.html` and `piloto.html`.

### Recuperación del gadget del piloto y robots.txt / Restored the pilot widget and robots.txt

- `weather-widget-3d.js` y `weather-widget-3d.css`: recuperar los activos que `piloto.html` ya referenciaba para que el gadget vuelva a cargar; verificar datos del clima y oleaje en el navegador.
- `robots.txt`: restaurar el permiso de rastreo y la URL del sitemap de `wavepoint-five.vercel.app`.
- `weather-widget-3d.js` and `weather-widget-3d.css`: restore the assets already referenced by `piloto.html` so the widget loads again; verify weather and swell data in the browser.
- `robots.txt`: restore crawl access and the sitemap URL for `wavepoint-five.vercel.app`.

### Fotos y composición de Retiros alineadas con el PDF de Canva / Retreat photos and layout aligned with the Canva PDF

- `services.js`: usar las fotos extraídas y optimizadas de `retiros.pdf` para portada, destino, Casa Maderas, yoga, surf trips, Roca Bruja, coaching y fotografía; ordenar esas secciones como en el folleto y conservar el resumen e itinerario.
- `index.html`, `piloto.html`, `trip-builder.js` y `script.js`: compartir la portada del folleto en las tarjetas de Retiros y actualizar sus textos alternativos en español e inglés.
- `styles.css`: reflejar la composición fotográfica del folleto en las secciones, el resumen y el itinerario, conservando legibilidad y adaptación móvil.
- `services.js`: use optimized photos extracted from `retiros.pdf` for the cover, destination, Casa Maderas, yoga, surf trips, Witch’s Rock, coaching and photography; order the sections like the brochure while retaining the overview and itinerary.
- `index.html`, `piloto.html`, `trip-builder.js` and `script.js`: share the brochure cover in Retreats cards and update Spanish and English alt text.
- `styles.css`: echo the brochure’s photo-led composition in the sections, overview and itinerary while preserving readability and mobile layout.

### Fotos de yoga en la playa y ATV en la selva / Beach yoga and jungle ATV photos

- `index.html`, `piloto.html`, `services.js`, `trip-builder.js` y `script.js`: reemplazar las fotos y textos alternativos ES/EN de yoga y tours en cuatriciclo. Yoga: foto de Unsplash; ATV: foto de Pexels.
- `index.html`, `piloto.html`, `services.js`, `trip-builder.js` and `script.js`: replace the yoga and ATV tour photos and bilingual alt text. Yoga photo from Unsplash; ATV photo from Pexels.

### Imágenes de servicios y tarjeta de cuatriciclos

- `index.html`, `services.js`, `trip-builder.js` y `piloto.html`: actualizar las fotos de Roca Bruja (sitio oficial de Witch’s Rock), snorkel (Subtle Cinematics/Unsplash), fotografía de surf (Zak Mogel/Pexels) y ATV (King Caplis/Pexels); alts sincronizados en español e inglés.
- `styles.css`: dar espacio suficiente a los títulos de dos líneas y quitar el zoom que recortaba la foto de ATV.
- `index.html`, `script.js` y `piloto.html`: cambiar el título español a “A través de quienes lo llaman hogar”; conservar el título inglés.

### Modo Safari estable

- `script.js` y `lang-switch.js`: detectar Safari de Apple sin afectar Chrome, Edge, Firefox, Windows ni Android.
- `styles.css`: en Safari se usan fondos con scroll en lugar de `fixed`, superficies opacas sin `backdrop-filter`, contenido visible desde el inicio y sin animaciones de revelado o brillo que puedan parpadear. El hero conserva sus videos y su poster de respaldo.
- `script.js`: Safari conserva la rotación de videos del hero y evita cambiar las tarjetas de servicios durante el scroll; el footer y el armador mantienen sus videos decorativos desactivados como respaldo estable.
- `script.js` y `styles.css`: las descripciones de las tarjetas de servicios quedan siempre expandidas en Safari, sin depender del scroll ni del hover.
- HTML: se actualiza la versión de caché de `styles.css` a `20261007-27`.
- Validación: sintaxis JavaScript, formato Git, revisión de reglas de compatibilidad y prueba de detección en navegador Chromium (modo Safari desactivado).

### Corrección de galería de Surfskate

- `services.js`: se corrige el atributo `src` de la galería de Surfskate, que estaba usando el texto alternativo como URL y mostraba la imagen rota.
- Validación: `node --check services.js`, `git diff --check` y comprobación en navegador de la carga de `assets/img/optimized/surfskate.webp`.

### Prueba visual del footer con video y glassmorphism

- `index.html`, `trip-builder.html` y `guia-playas.html`: aplicar el nuevo footer visual sin cambiar enlaces ni contenido.
- `footer-video.js`: agregar `videohero3.mp4` como fondo decorativo con desplazamiento parallax suave en escritorio; pausar el video con movimiento reducido.
- `styles.css`: sumar superficies de vidrio, superposición para contraste y composición responsiva; en móvil se desactiva el parallax.
- `index.html` y `styles.css`: convertir guía y cámaras en dos tarjetas fotográficas grandes; cada una incluye su título y los dos beneficios correspondientes con sus descripciones. Se conservan el título/subtítulo de sección, la introducción y los cuatro beneficios existentes, en español e inglés.
- `index.html` y `styles.css`: cambiar la foto repetida por una vista aérea en el acceso a la guía y una foto de playa diferente como fondo de sección; se conserva la imagen del acceso a cámaras.
- `script.js`: alinear en inglés y español el texto alternativo de la nueva imagen de guía.

### Accesos fotográficos de WavePoint en Tamarindo

- `index.html`: conservar el título, la descripción y todos los beneficios; reemplazar los botones pequeños por dos accesos grandes, cada uno con una fotografía propia, para la guía local y las cámaras en vivo.
- `script.js`: agregar textos alternativos equivalentes en español e inglés para ambas imágenes.
- `styles.css`: diseñar las tarjetas fotográficas responsivas, con foco de teclado y movimiento reducido.

### Imágenes de clases de surf

- `services.js`, `index.html`, `trip-builder.js` y `script.js`: se unifica la foto principal de clases de surf con una imagen de una alumna en el agua; la galería de detalle deja de mostrar un árbol, una tienda y tablas, y pasa a mostrar surfistas en olas. Alternativas en español e inglés; textos visibles sin cambios.
- `styles.css`: la galería vuelve a un mosaico de dos columnas con la foto principal ocupando dos filas para mostrar las tres imágenes secundarias sin recortes estrechos.

### Guía local bilingüe

- `guide-i18n.js` y `guia-playas.html`: se completa la traducción al inglés de todas las secciones, fichas, datos prácticos, navegación de categorías, enlaces y textos alternativos; el selector compartido permite cambiar entre los dos idiomas.
- El texto fuente español, sus títulos aprobados, enlaces, datos y formato se conservan y se restauran al cambiar de idioma. También se localizan los metadatos y nombres accesibles de la guía.
- Validación en navegador: se verificaron inglés y español, restauración del marcado en español, etiquetas de listas y saltos de línea de Palo Verde; sin desbordamiento horizontal en móvil.
- `styles.css` y `guia-playas.html`: se mantiene el fondo fotográfico de la guía en un plano fijo del tamaño de la ventana para que no se diluya al escalarse sobre toda la página; se reduce la opacidad de los paneles para hacer más visible el glassmorphism. Se renueva la versión de caché de estilos.
- `styles.css` y `guia-playas.html`: se reemplaza el fondo azulado por la foto local de atardecer (`assets/bg/atardecer.jpg`) y se suaviza la capa oscura para conservar más color detrás de los paneles de vidrio.
- `trip-builder.html`, `trip-builder.js` y `trip-builder.css`: en celular aparece un acceso flotante al carrito solo mientras el resumen completo está fuera de pantalla. Muestra `0 XP` o la cantidad elegida, cambia de aspecto al agregar experiencias y desplaza al resumen existente al tocarlo; este se conserva al final de la página.
- `trip-builder.html` y `trip-builder.css`: se conserva el acceso flotante de WhatsApp y se suma la burbuja del asistente bilingüe; el carrito móvil queda separado de ambos. El armador gana paneles translúcidos con desenfoque sobre una foto de fondo.
- `index.html`, `service-detail.html`, `guia-playas.html`, `trip-builder.html` y fichas de `Enlaces/`: se quita Instagram de los footers; permanece en la navegación superior de escritorio y en el menú hamburguesa móvil, sin mostrarlo dos veces.
- `trip-builder.html` y `guia-playas.html`: se adopta el footer completo del index, con su contenido bilingüe y enlaces de regreso a las secciones correctas del sitio.
- `Enlaces/occidental.html` y `assets/img/optimized/occidental-beach.webp`: se quitan de la galería las dos copias idénticas de la portada y se suma una foto distinta de playa obtenida de la galería oficial de Barceló (con autorización del usuario); se conservan las imágenes distintas de gastronomía y bienestar. El fondo de la ficha usa otro paisaje para que la foto de portada no se repita detrás del contenido.
- `Enlaces/casa-maderas.html`, `styles.css` y `assets/img/optimized/casa-maderas-*.jpg`: se reemplaza la galería que repetía la foto de portada y contenía una foto de otro colaborador por dos fotos distintas obtenidas del sitio oficial de Casa de Maderas; también se cambia el fondo para evitar repetir la portada. Textos alternativos en español e inglés; se actualizan las referencias de caché de `styles.css`.

## 2026-10-05

### Integración local del gadget de clima 3D

- `index.html`, `weather-widget-3d.css` y `weather-widget-3d.js`: adaptar el diseño final del prototipo entregado, con escenas día/noche, lluvia en canvas detrás y delante del contenido, métricas interactivas y etiquetas en español e inglés.
- El widget muestra Tamarindo · CR, temperatura, condición, viento y oleaje estimado desde Open-Meteo; la hora se calcula para Costa Rica. El fondo adopta transparencia y desenfoque tipo glassmorphism, el widget se reduce un 10% y el modo nocturno representa la fase lunar calculada desde el ciclo sinódico.
- Se restaura bajo las métricas el aviso bilingüe de cámaras nocturnas fuera de servicio hasta alrededor de las 4:45 a. m.; se respeta la preferencia del sistema de reducir movimiento.
- La integración permanece en la rama local `prueba-widget-clima`; no se hizo push ni se publicó a producción.

## 2026-10-04

### Pendientes confirmados a partir de GUIA 2.0.pdf

- Se confirma mantener las tarjetas de Club 33 y Eterno Verano enlazadas directamente a sus sitios oficiales.
- “Why book with WavePoint?” queda pendiente como formulario de contacto antes del footer, no como sección editorial.
- Queda pendiente revisar las confirmaciones después de enviar mensajes/formularios de servicios y del armador de viaje.
- La traducción completa de la guía Guanacaste (`guia-playas.html`) al inglés es urgente y delicada; preservar íntegro el original español y no reescribir ni inventar contenido. Esperar autorización antes de realizarla.
- No cambiar títulos ni copy visible aprobado sin permiso explícito. Estos pendientes se registran sin cambios en el frontend.

### Estilo renovado para las fichas locales de colaboradores

- `Enlaces/`: identificar cada ficha local para usar su propia fotografía como portada y fondo.
- `styles.css`: unificar las cuatro portadas, dar legibilidad al contenido sobre un fondo fotográfico y ajustar las galerías para llenar los marcos sin bandas azules.
- Se conservan todos los textos, enlaces y fotografías existentes.

### Nueva portada para Clases de surf

- `services.js`: usar la foto del instructor con alumnos como imagen principal y conservar la portada anterior en la galería.
- `index.html`, `script.js`, `trip-builder.js` y las opciones visuales del Pack: mantener la misma portada y textos alternativos ES/EN.
- Se renuevan las versiones de caché de los scripts afectados.

### Nuevas fotos para Estadías y hoteles

- `services.js`: usar las siete imágenes nuevas de `assets/img/hotels/` en la portada del servicio y agregar una galería descriptiva bilingüe.
- `index.html`, `script.js`, `trip-builder.js` y `services.js`: compartir la nueva foto principal en la tarjeta, el armador, las opciones de alojamiento del Pack y la tarjeta de estadía del contenido de Retiros.
- Se conservan las galerías específicas de cada alojamiento para no atribuirles fotos sin confirmar su procedencia.
- Se renuevan los parámetros de caché de los estilos y scripts afectados.

### Legibilidad del desplegable de colaboradores

- `styles.css`: evitar que la sombra fuerte del texto del header se herede al menú claro de colaboradores.

### Franja compacta de aliados y sección After the surf

- `styles.css`: reducir la altura y tipografía del encabezado de aliados y alinear su ancho máximo con el carrusel.
- `index.html`: ocultar temporalmente `After the surf` con el atributo `hidden`, conservando su contenido para poder mostrarlo nuevamente.

### Inglés como idioma inicial

- `index.html`, `lang-switch.js`, `script.js`, `services.js` y `trip-builder.js`: usar inglés cuando no exista una preferencia guardada y conservar español al seleccionarlo.
- `Enlaces/`: agregar versiones inglesas para las fichas de aliados y Nosotros, manteniendo el texto español existente.
- `index.html`: mantener la vista previa social y los metadatos SEO de la portada en inglés.
- `service-detail.html`, `trip-builder.html` y `guia-playas.html`: declarar inglés como idioma inicial y actualizar títulos y descripciones.
- Skills del proyecto: alinear sus reglas de idioma predeterminado con esta decisión.

### Mensaje principal de portada

- `index.html` y `script.js`: aplicar literalmente “Through the people who call it home” y “WavePoint connects you with the best experiences in Tamarindo”, con su traducción al español.

## 2026-10-06

### SEO de la portada y transición a Surf Experiences

- `index.html`: orientar el título, descripción, H1, canonical, Open Graph y tarjeta de X/Twitter a las experiencias de surf en Tamarindo, Costa Rica; se agregan datos estructurados prudentes de `Organization` y `WebSite`.
- `index.html` y `styles.css`: mantener un H1 descriptivo en la portada y conservar visualmente el título de Nosotros como encabezado de segundo nivel.
- `assets/og/surf-experiences-tamarindo.jpg`: crear una portada social de 1200 × 630 con una foto local de una clase de surf, marca y ubicación.
- `robots.txt` y `sitemap.xml`: habilitar rastreo y declarar la portada y la guía local en el dominio confirmado `https://wavepoint-five.vercel.app/`.
- `index.html` y `script.js`: alinear la portada, el encabezado/descripción del catálogo y el relato de Nosotros en español e inglés; las cámaras siguen disponibles como sección secundaria.
- `index.html` y `script.js`: sumar `videohero3.mp4`, reducido de 30,18 MB a 15,16 MB (49,8 % menos); rotar los tres videos activando y cargando cada uno solo cuando toca, y esperar a que el siguiente pueda reproducirse.
- El dominio futuro `wavepointcr.com` queda registrado como plan, no como URL activa; actualizar canonical, sitemap, robots, schema y metadatos sociales solo cuando se confirme la migración.
- La vista de la URL pública consultada aún sirve contenido previo; estos cambios requieren desplegarse antes de que Google o las plataformas sociales puedan leerlos.

### Validación

- `script.js` ejecutado en Chromium; JSON-LD, título/descripción, sitemap, robots y tamaños de los iconos y la imagen social verificados localmente.
- Video optimizado comparado con el original respaldado en el almacenamiento persistente de la sesión; SSIM informado durante la compresión: 0,991775.

### Mensaje de portada, fotos de servicios y favicon

- `index.html` y `script.js`: se actualiza el mensaje principal en español e inglés y se renueva la versión de caché del script.
- `styles.css`: se encuadran las fotos multipanel de Roca Bruja, snorkel y ATV para destacar una sola escena en cada tarjeta sin cambiar sus imágenes compartidas con el detalle y el armador.
- `script.js` e `index.html`: los textos alternativos ES/EN de las fotos enfocadas describen las escenas que se ven.
- `favicon.svg`: se adopta el icono gratuito “surfing” de Google Material Icons sobre un fondo oceánico WavePoint; se generan respaldos PNG de 16/32 px, ICO multirresolución e icono Apple a juego.
- Se conserva la atribución y la licencia Apache 2.0 en `assets/MATERIAL-ICONS-LICENSE.txt`; las páginas enlazan el set local.
- Se retiran el JPG de favicon proporcionado por el usuario y sus variantes derivadas anteriores.

### Foto de hotel para Estadías y hoteles

- `index.html`, `services.js` y `trip-builder.js`: la tarjeta, el detalle, la propuesta de alojamiento y el armador comparten una foto local del hotel con piscina y jardines; se conserva el archivo JPG optimizado de 195 KB y se mantiene la foto anterior en la sección Nosotros.
- `services.js` y `script.js`: los textos alternativos de la nueva imagen describen correctamente la escena en español e inglés.

### Legibilidad y contraste en textos

- `styles.css`: enlaces de escritorio y botón hamburguesa usan sombra en el texto, sin una caja de fondo; también se refuerzan las etiquetas del menú móvil.
- `styles.css` y `trip-builder.css`: se amplían los textos secundarios pequeños de clima, guía, detalles de servicios, Nosotros, formularios y armador, y se ajustan colores tenues según sus fondos.
- Se conserva el color claro sobre superficies oscuras y el color oscuro sobre superficies claras; los ajustes responsive evitan agrandar en exceso etiquetas en pantallas angostas.
- `styles.css`: un puente invisible conserva abierto el menú desplegable de colaboradores mientras el cursor cruza el espacio entre el título y la lista.
- `styles.css`: se vuelve a mostrar el icono de Instagram en escritorio y se mantiene debajo del hamburguesa en móvil.

### Mejor encuadre en las tarjetas destacadas

- `index.html` y `trip-builder.css`: Pack usa una fotografía con espacio visual en el centro, compartida con el fondo del armador.
- `index.html`, `services.js` y `trip-builder.js`: Retiros usa la misma foto serena en la tarjeta, el detalle y el armador, evitando que el título tape a las personas.
- `script.js` y `services.js`: se actualizan los textos alternativos en español e inglés según las nuevas fotografías.

## 2026-10-04

### Descripciones desplegables en servicios

- `styles.css` y `script.js`: las tarjetas de servicios comunes conservan el título y el enlace visibles sobre una mayor superficie de foto; la descripción se despliega en un panel translúcido al pasar el mouse o al centrar la tarjeta con el scroll en dispositivos táctiles.
- En tablets y móviles el scroll activa automáticamente la fila de tarjetas más próxima al centro de la pantalla; se repliega al avanzar a otra fila. Pack y Retiros conservan su composición destacada.
- `styles.css`: un brillo turquesa muy sutil recorre periódicamente el contorno de las tarjetas y respeta la preferencia por movimiento reducido.
- `styles.css`: al navegar a Servicios o Nosotros, el encabezado queda unos píxeles más arriba para aprovechar mejor el espacio.
- `index.html`: se renuevan las versiones de caché de los estilos y el script.

## 2026-10-04

### Fotos optimizadas para tarjetas de servicios

- `index.html`: las tarjetas de servicios, Pack y Retiros usan fotos locales WebP seleccionadas para cada experiencia, con textos alternativos ES/EN acordes.
- `services.js`, `trip-builder.js` y `trip-builder.css`: el catálogo, los detalles y el armador reutilizan las mismas versiones WebP para conservar la imagen entre tarjeta, hero y fondo.
- Se convierten también las fotos grandes usadas por las galerías de surf y Retiros; los originales se conservan. La foto de longboard baja de 11,79 MB a 189 KB y Surfskate de 13,49 MB a 313 KB.
- Se actualizan las versiones de caché de los scripts y estilos modificados.

### Integración de Nosotros y llamadas a la acción del inicio

- `index.html`: se incorpora antes de las cámaras la historia completa de Nosotros, con galería, propósito y el nuevo encabezado «¿Quiénes somos?».
- `index.html`: el menú y el pie llevan a la sección Nosotros; el hero invita a armar un viaje y «WavePoint en Tamarindo» ofrece también el acceso a las cámaras en vivo.
- `script.js` y `lang-switch.js`: los nuevos textos y el encabezado se muestran en español e inglés; se mantiene completa la página independiente de Nosotros.
- `styles.css`: la sección Nosotros suma fondos fotográficos con parallax y superficies glassmorphism; en móvil y con movimiento reducido el fondo vuelve al desplazamiento normal.
- `styles.css`, `index.html` y `Enlaces/nostros.html`: se actualizan los estilos y las referencias de caché correspondientes.

### Ajustes responsive, menú y carrito del viaje

- `index.html` y `styles.css`: la tabla de tarifas se reorganiza en tarjetas legibles en móvil, sin comprimir columnas ni requerir desplazamiento horizontal; se refuerza el ajuste de textos y etiquetas de la ventana de clima en pantallas estrechas.
- `index.html`, `service-detail.html`, `site-nav.js` y `styles.css`: Instagram queda disponible como enlace visible dentro de todos los menús hamburguesa.
- `trip-builder.css`: el carrito sigue el desplazamiento en escritorio, sin quedar debajo del menú fijo; se evita que el recorte horizontal de la página interfiera con `position: sticky`, y el panel puede desplazarse internamente cuando excede la altura de pantalla.
- `trip-builder.js` y `trip-builder.css`: cada experiencia seleccionada aparece como un elemento numerado con fecha, cantidad de personas, precio estimado o estado por confirmar, y control accesible para quitarla.
- `trip-builder.js`: al agregar o quitar experiencias se actualizan solo las tarjetas y el carrito, conservando la posición de scroll y evitando reiniciar el video de fondo.
- Se actualizan las versiones de caché de los recursos modificados.

### Rediseño visual de Retiros inspirado en Canva

- `services.js` y `styles.css`: la página de detalle de Retiros adopta una composición editorial azul profundo con fotografía local, tarjetas visuales para el destino, la estadía, yoga y surf, y una presentación renovada del paquete y el itinerario.
- Se conserva el contenido existente en español e inglés, incluidos los datos, inclusiones, condiciones, solicitud y los ocho días del itinerario.
- `service-detail.html`: se actualizan las versiones de CSS y JavaScript para invalidar caché.

### Integración de fotografías locales de `assets/img`

- `index.html`, `services.js` y `trip-builder.js`: se asignan fotos locales a Estadías, Clases de surf, Surf coaching, Fotos de surf, Pack ajustable y Retiros.
- `services.js`: se incorporan a la galería de Clases de surf las fotos de estudiantes, una alumna, la tienda y las tablas; Retiros suma paisajes de playa, atardecer y naturaleza.
- `guia-playas.html`: la foto de Playa Avellanas ahora muestra un mono aullador, en concordancia con la sección de fauna local; texto alternativo localizado en ES/EN.
- `script.js` y `services.js`: los textos alternativos de las nuevas imágenes se traducen al español e inglés.

### Validación

- Confirmadas visualmente las correspondencias de las fotos con Clases de surf, Surf coaching, Fotos de surf, Tamarindo, Retiros y la fauna de Avellanas.
- Verificadas las rutas relativas de los archivos en `assets/img`.

## 2026-10-04

### Contenido del retiro de surf desde Canva

- `services.js`: se incorpora a Retiros la presentación de WavePoint, descripción del hospedaje, yoga y breathwork, surf coaching, tour a Roca Bruja, resumen del paquete y el itinerario completo de 8 días, con traducción ES/EN.
- `services.js`: se muestran precio, duración, capacidad, nivel, inclusiones, exclusiones y condiciones informados para el paquete; la solicitud de consulta identifica el retiro grupal.
- `styles.css` y `service-detail.html`: se agrega una presentación responsive para el resumen, las condiciones y las jornadas del itinerario.

### Validación

- Comprobadas las cifras del resumen de Canva: 7 noches / 8 días, 8–10 personas, nivel intermedio, USD 1.900 por persona, 6 desayunos y 5 sesiones de surf con instructor.
- Revisados todos los días del itinerario y los textos del detalle en español e inglés.

## 2026-10-04

### Pack ajustable como armador de viaje y Retiros como tarjeta destacada

- `index.html`: las tarjetas comunes terminan en Surfskate; Pack ajustable abre `trip-builder.html` y Retiros aparece después como segunda tarjeta destacada.
- `trip-builder.html`, `trip-builder.js` y `trip-builder.css`: se agrega un armador bilingüe con carrito, fecha y cantidad de personas por experiencia, solicitud única por WhatsApp y tarifas estimadas según la tabla publicada.
- `trip-builder.js` y `trip-builder.css`: se renueva el carrito con colores vivos, contador ilustrado y una animación bilingüe de tabla de surf al agregar experiencias; respeta la preferencia de movimiento reducido.
- `trip-builder.html`, `trip-builder.js` y `trip-builder.css`: la página suma un video local de surf como fondo dinámico, usa fotos locales en experiencias de surf y reemplaza las superficies blancas por fotografía de playa con paneles oscuros de alto contraste.
- Solo se calculan tarifas para Clases de surf, Surf coaching, Fotos de surf y Surfskate. Las demás experiencias quedan “a confirmar” y no se incluyen en el total hasta validar el precio.
- `services.js`: el orden de navegación de los detalles queda sincronizado con el nuevo orden del catálogo.
- `script.js`: se agregan las traducciones ES/EN de ambas tarjetas destacadas y del enlace al armador.
- `styles.css` e `index.html`: Pack y Retiros ocupan una fila completa cada uno y conservan el formato horizontal de imagen y texto en escritorio.
- `styles.css` e `index.html`: la tabla de tarifas ocupa todo el ancho del catálogo; en pantallas pequeñas conserva su desplazamiento horizontal sin aplastar las columnas.
- `trip-builder.js`: la salida de una estadía debe ser posterior a la llegada; se rechaza también una salida en la misma fecha.

### Validación

- Probado el orden de tarjetas en el catálogo, la navegación hacia el armador y el cambio de idioma.
- Verificados el cálculo del estimado por cantidad de invitados, los precios pendientes de confirmar y la solicitud consolidada por WhatsApp.
- En navegador, un paquete para dos personas actualiza el estimado a USD 65; agregar una actividad sin tarifa no modifica el total. Se validaron fechas iguales, anteriores y posteriores para una estadía.
- En escritorio, las tarjetas destacadas ocupan todo el ancho disponible y mantienen la imagen y el texto en columnas paralelas.
- Revisada la tabla de tarifas en escritorio (sin recorte) y móvil (desplazamiento interno, sin desbordamiento de página).
- Revisados el selector ES/EN, el menú compartido y el diseño móvil sin desbordamiento horizontal.

## 2026-10-04

### Surfskate, fondos de servicios y favicon

- `services.js`: se actualizan el texto principal, la descripción y los elementos incluidos de Surfskate en español e inglés; la página de detalle presenta el lema y la lista de equipo.
- `index.html`, `services.js` y `script.js`: se incorporan fotos de Pixabay para las diez tarjetas del catálogo, Pack ajustable y los encabezados de detalle, con textos alternativos sincronizados en ES/EN. Pixabay no devolvió resultados para “surfskate”; se usa una imagen de longboard como opción cercana.
- `styles.css`: las diez tarjetas principales muestran la foto como fondo con una capa de vidrio oscura para conservar el contraste del texto.
- `index.html`, `service-detail.html`, `guia-playas.html` y las páginas vinculadas usan `furgoneta-de-surf.png` como favicon; se conserva el icono táctil existente.

### Validación

- Verificados los textos e imágenes de Surfskate en español e inglés, y la carga de las diez fotos del catálogo.
- Revisado el encabezado de detalle con la imagen de Pixabay y la foto local de surfskate en la galería.
- Comprobado que la página no desborda horizontalmente a 390 px y que todos los enlaces al favicon resuelven al archivo.

## 2026-10-04

### Ajustes del catálogo: orden, Surf Photography, Surfskate y Pack ajustable

- `services.js`: se aplica el orden pedido tras Roca Bruja (Snorkel, Yoga, ATV, Surf Photography, Surfskate y Retiros), se retira Buceo del catálogo y se mantiene Pack ajustable al final de la navegación.
- `services.js`: Surf Photography y Surfskate quedan con contenido, imágenes, CTA y opciones del Pack en español e inglés; los textos existentes de Surfskate se reutilizan.
- `index.html`: se actualiza el orden de las tarjetas, se incorpora Surfskate, se elimina Buceo y se presenta Pack ajustable separado por una etiqueta horizontal.
- `styles.css`: el Pack se muestra como tarjeta horizontal con el título grande superpuesto a la imagen, sombra y fuente Permanent Marker ya disponible en el sitio.
- `script.js`, `api/assistant.js` y `PROJECT_GUIDE.md`: se sincronizan traducciones, recomendaciones y documentación con los servicios vigentes.
- `service-detail.html` y `index.html`: se actualizan las versiones de los scripts para invalidar caché.

### Validación

- Probado en navegador: las diez tarjetas de servicio aparecen en el orden definido en español e inglés; Pack ajustable queda fuera de la grilla, después del separador, con el título superpuesto traducido.
- Probado el cambio ES/EN en Yoga, ATV, Surf Photography, Surfskate y Pack ajustable: títulos y textos principales coinciden con cada idioma.
- Confirmado que el catálogo no tiene enlaces activos a Buceo.
- Revisada la tarjeta de Pack en escritorio y a 390 px de ancho: la imagen y el título se mantienen visibles sin desbordamiento horizontal.

## 2026-10-04

### ATV Tours y orden de tarjetas en catálogo

- `services.js`: se reordena el catálogo para mover Yoga y Snorkel antes de Roca Bruja y se ajustan los números del hero para que coincidan con el flujo real del sitio.
- `services.js`: se actualiza `atv` con los textos pedidos en ES/EN y se cambia la imagen de portada y la descriptiva por opciones más coherentes con la experiencia de cuatriciclo.
- `index.html`: se mueve la tarjeta de Yoga y la de Snorkel en la grilla principal para reflejar el nuevo orden del catálogo.
- `script.js`: se actualizan los textos de la tarjeta de ATV para que coincidan con el copy nuevo en ambos idiomas.
- `CHANGELOG.md`: se deja registro de este ajuste final para conservar la bitácora actualizada.

### Validación

- Revisión visual en `index.html` y `service-detail.html?service=atv` con el idioma ES/EN.
- Confirmado: la grilla del catálogo refleja el nuevo orden y la página de ATV muestra el copy y las imágenes correctas sin mezclas de idioma.

## 2026-10-04

### Corrección final de ES/EN en títulos y Pack ajustable

- `services.js`: se corrigen los títulos que seguían quedando en español al activar inglés en `yoga` y `roca-bruja`, agregando el bloque `en.title` faltante en cada uno.
- `services.js`: se corrige el mapeo `PACK_SERVICE_CARDS` para que los nombres y descripciones del `Pack ajustable` respeten el idioma activo y no muestren textos en inglés cuando está en español.
- `services.js`: se mantiene la regla del proyecto: si aparece un texto nuevo en una card, servicio o pregunta, se trabaja con versión en español e inglés antes de cerrar el cambio.
- `CHANGELOG.md`: se actualiza con esta corrección final para dejar el paso a paso visible y consistente.

### Validación

- Revisión visual en `service-detail.html?service=yoga`, `service-detail.html?service=roca-bruja` y `service-detail.html?service=pack-ajustable` con cambio de idioma ES/EN.
- Confirmado: los títulos y las cards del Pack ajustable respetan el idioma activo y no quedan mezclados entre ES y EN.

## 2026-10-04

### Servicios restantes: revisión completa bilingüe en ES/EN

- `services.js`: se completa la pasada bilingüe de los servicios restantes (`alojamiento-experiencias`, `clases-de-surf`, `surf-coaching`, `roca-bruja`, `snorkel-catamaran`, `atv`, `pack-ajustable`, `retiros`), dejando los textos base en español y los bloques `en` completos para cada página de detalle.
- `services.js`: se corrigen textos fijos que quedaban en un solo idioma en los componentes de historia y formularios (`renderAccommodationOption`, `renderWitchRockStory`, `renderSurfLessonStory`).
- `services.js`: se mantiene la regla del proyecto: si agregás texto, debe existir en español e inglés antes de cerrar el cambio.
- `CHANGELOG.md`: se registra esta última pasada para dejar el historial actualizado y visible.

### Validación

- Revisión del archivo `services.js` para comprobar que cada servicio tenga bloque `en` y que los textos principales del detalle estén alineados a ES/EN.
- Confirmado: los servicios que restaban no quedan con contenido fijo en un solo idioma al cambiar de ES a EN.

## 2026-10-03

### Buceo: control bilingüe del servicio y textos del detalle

- `services.js`: el servicio `buceo` recibe su bloque `en` completo para traducir eyebrow, título, texto de tarjeta, descripción y preguntas del formulario.
- `services.js`: se mantiene la regla de “dos idiomas” para cualquier texto nuevo del catálogo: si se agrega una frase o pregunta, debe existir en ES y EN antes de cerrar el cambio.
- `service-detail.html?service=buceo`: validación visual del switch ES/EN para confirmar que el texto y el detalle cambian sin dejarse en idioma fijo.

### Validación

- Prueba real en navegador con el selector ES/EN sobre `service-detail.html?service=buceo`.
- Confirmado: el servicio cambia entre español e inglés sin quedarte con textos en un solo idioma.

## 2026-10-03

### Registro y control bilingüe de cambios

- `CHANGELOG.md`: se usa como bitácora del repo para dejar un registro paso a paso de cada cambio realizado, con archivos tocados, decisiones y validación.
- `services.js`: regla aplicada en esta etapa: cada texto nuevo debe estar pensado y dejado en español e inglés antes de cerrar el cambio.
- `services.js`: los servicios Yoga y Surf coaching se ajustaron para que el selector ES/EN reescriba encabezados, textos principales, preguntas y bloques de contenido sin quedar en un solo idioma.
- `lang-switch.js`: se mantiene como mecanismo central para cambiar idioma y disparar `wavepoint:languagechange` en todas las páginas con header compartido.
- `service-detail.html`: prueba visual del comportamiento del botón en ES/EN sobre Yoga y Surf coaching.

### Validación

- Revisión en navegador real de `service-detail.html?service=yoga` y `service-detail.html?service=surf-coaching` con el selector ES/EN.
- Confirmado: los textos que se agregan en la página deben estar escritos para ambos idiomas antes de cerrar el cambio.

## 2026-10-03

### Orden de los servicios: Witch’s Rock Surf Trip pasa al lugar 04

- `index.html`: la tarjeta de Witch’s Rock Surf Trip va antes que Yoga en la sección Servicios.
- `services.js`: el array de servicios sigue el mismo orden que la página principal y los números (`04 / 10`, etc.) se alinean. Las flechas del hero siguen ese orden, así que Surf coaching → Witch’s Rock Surf Trip → Yoga.
- `services.js`: en el Pack ajustable, la tarjeta de Witch’s Rock Surf Trip también aparece antes que Yoga.
- Orden actual: 01 Stays and Hotels, 02 Surf lessons, 03 Surf coaching, 04 Witch’s Rock Surf Trip, 05 Yoga, 06 Snorkel y catamarán, 07 Buceo, 08 ATV, 09 Pack ajustable, 10 Retiros. Los últimos seis se ordenarán a medida que se vayan trabajando.

### Validación

- `node --check services.js`, `git diff --check`.
- Chromium: orden de las tarjetas de la página principal, contador y destino de las flechas en Surf coaching, Witch’s Rock y Yoga, y orden de las tarjetas del Pack ajustable.

## 2026-10-03

### Detalle de servicio: flechas para recorrer los servicios

- `services.js`: el hero de cada servicio muestra dos flechas laterales (‹ ›) que llevan al servicio anterior y al siguiente. Al llegar al último vuelve al primero y viceversa. Cada flecha tiene `aria-label` en español o inglés según el idioma elegido ("Servicio anterior: …" / "Previous service: …") y el nombre del servicio como `title`.
- `services.js`: el orden de los servicios ahora coincide con el de las tarjetas de `index.html` (Estadías, Clases, Coaching, Yoga, Witch’s Rock, Snorkel y catamarán, Buceo, ATV, Pack ajustable, Retiros). El contador del hero (`05 / 10`) se calcula según esa posición, así ya no hay números repetidos; los números fijos del array se alinearon para que coincidan.
- `styles.css`: flechas grandes y discretas (blancas, con baja opacidad que sube al pasar el cursor o enfocar con teclado), con sombra suave para leerse sobre cualquier foto. En pantallas de hasta 980 px son más compactas y quedan sobre el título. Se respeta `prefers-reduced-motion`.
- Las flechas se generan con el resto del detalle, así que funcionan en todos los servicios y cambian de idioma junto con la página.

### Validación

- `node --check services.js`.
- Prueba en Chromium real: capturas de escritorio (1366 px) y móvil (390 px) en español e inglés; clic en ambas flechas, vuelta del primero al último y del último al primero, contador correcto y etiquetas accesibles en ES/EN.

## 2026-10-03

### Servicios vuelve a vivir solo en index.html#servicios

- `service.html` y `Enlaces/service.html` (redirección a `service.html`): eliminados otra vez. Habían reaparecido en el commit `2ba3ac0`, que también devolvió los enlaces al catálogo aparte.
- `site-nav.js`: el header compartido (usado por `guia-playas.html`, `service-detail.html` y `Enlaces/nostros.html`) enlaza **Servicios** a `index.html#servicios` (antes `service.html#servicios`).
- `service-detail.html` (menú de escritorio y panel móvil) y `guia-playas.html` (botón "Ver servicios y armar mi plan"): enlaces a `index.html#servicios`.
- `manus-routes.json`: se quita la ruta `/service.html`.
- `PROJECT_GUIDE.md`: el catálogo se documenta en `index.html#servicios` y se quitan las referencias a `service.html`.
- Si alguien abre un enlace viejo a `/service.html`, `vercel.json` ya lo manda a `index.html` por el fallback de rutas.
- La tarjeta de Witch’s Rock Surf Trip del catálogo vive solo en `index.html`; los cambios que se habían hecho en `service.html` quedan sin efecto, porque la tarjeta de la página principal ya tiene el mismo texto y se traduce a ES/EN.

### Validación

- `node --check` de `site-nav.js`, `services.js`, `script.js` y `lang-switch.js`; `git diff --check`.
- Búsqueda en todo el repo: no queda ningún enlace a `service.html` fuera del `CHANGELOG.md`.

## 2026-10-03

### Witch’s Rock Surf Trip: nuevo texto, nueva foto y pregunta de cantidad de personas (ES/EN)

- `services.js`: el servicio `roca-bruja` pasa a llamarse **Witch’s Rock Surf Trip** (mismo nombre en español e inglés). Nuevo texto de descripción en ambos idiomas: frase de apertura, párrafo del viaje en barco con guías locales y párrafo de coordinación de WavePoint. El número del servicio pasa de 04 a 05 para coincidir con la tarjeta de `service.html`.
- `services.js`: nueva foto en la descripción (`assets/legacy/hermosa.jpg`, reemplaza a `avellanas.jpg`). La imagen del hero sigue siendo `assets/legacy/bruja.jpg`.
- `services.js`: nueva primera pregunta **How many people are joining? / ¿Cuántas personas se suman?** con campos Adults/Adultos y Children/Niños, la nota sobre las edades de los niños para consultar los requisitos del proveedor y un campo opcional para escribir las edades. Adultos es obligatorio (mínimo 1); Niños empieza en 0. El mensaje de WhatsApp incluye `Adultos: n / Niños: n` y las edades si se completan.
- `services.js`: la traducción por servicio deja de ser exclusiva de las clases de surf. Cualquier servicio con un bloque `en` se muestra en inglés (eyebrow, texto de la tarjeta, descripción, preguntas, opciones, formulario y mensaje de WhatsApp). Las clases de surf se comportan igual que antes; los demás servicios siguen sin bloque `en`.
- `services.js`: la opción del Pack ajustable y su tarjeta pasan a llamarse `Witch’s Rock Surf Trip` para mantener la sincronización del catálogo.
- `script.js`, `index.html`, `service.html`: título y texto de la tarjeta actualizados en ES/EN. La tarjeta de `service.html` ahora se traduce (etiqueta, título, texto, botón y `alt`) con las claves `serviceListWitchRockEyebrow` y `serviceListCta`.
- `styles.css`: estilos para la foto única de la descripción y para la nota y el campo de edades.
- `index.html`, `service.html`, `service-detail.html`: versiones de `script.js` y `services.js` actualizadas para evitar caché.
- No se tocó el hero de la página principal ni el favicon.

### Validación

- `node --check` de `services.js` y `script.js`.
- Prueba con jsdom en español e inglés: textos del detalle, formulario, validación (falla vacío, pasa completo) y mensaje de WhatsApp con la nueva pregunta; tarjetas de `index.html` y `service.html` en ambos idiomas; las clases de surf, surf coaching, estadías, pack y ATV siguen mostrándose.
- No se revisó el aspecto visual en un navegador real ni en móvil.

## 2026-10-03

### Selector de idioma en todas las páginas

- `lang-switch.js` (nuevo): módulo compartido que inserta el mismo selector de banderas de `index.html` en cualquier página con header que no lo tenga, guarda la elección en `localStorage` (`wavepoint-lang`), actualiza `<html lang>`, el estado y la etiqueta accesible del botón, y avisa del cambio con el evento `wavepoint:languagechange`.
- `lang-switch.js`: traduce a español/inglés la navegación compartida (Inicio, Guía turística, Servicios, Nosotros, Colaboradores), los enlaces del pie (**Volver a WavePoint** / **Volver a Servicios**) y las etiquetas accesibles del menú. Los nodos con `data-i18n` se omiten porque siguen siendo de `script.js`.
- `script.js`: el clic del selector deja de manejarse aquí; ahora `applyTranslations` se ejecuta al recibir `wavepoint:languagechange`. Evita un doble enlace del clic.
- `services.js`: el detalle de servicio vuelve a renderizarse al recibir `wavepoint:languagechange`, así el modal y la encuesta de clases de surf cambian de idioma sin recargar.
- `index.html`, `service.html`, `service-detail.html`, `guia-playas.html` y `Enlaces/*.html` (capitan-suizo, casa-maderas, nostros, occidental, red-door): cargar `lang-switch.js` y actualizar las versiones de `script.js` y `services.js` para evitar caché.
- Sin cambios en `styles.css`: el selector reutiliza las reglas existentes y queda como hijo directo del header, igual que en `index.html` y `guia-playas.html`.
- Alcance: en `service.html`, `service-detail.html` y `Enlaces/*.html` el selector cambia la navegación, el pie y, en las clases de surf, todo el modal y la encuesta; el resto del contenido de esas páginas sigue en español porque todavía no tiene traducción.

### Validación

- Se verificó `node --check` de `script.js`, `services.js` y `lang-switch.js`, y `git diff --check`.
- Se probó con jsdom en las 9 páginas: un solo selector por página, cambio ES↔EN de la navegación, dos clics vuelven al idioma original, el idioma guardado se respeta al abrir la página, y el modal de clases de surf se traduce al cambiar el idioma.
- No se revisó la posición visual en un navegador real.

## 2026-10-03

### Clases de surf: traducciones ES/EN del modal y la encuesta

- `services.js`: leer el idioma guardado en `localStorage` (`wavepoint-lang`, el mismo que usa el selector del sitio) y mostrar en inglés o español el modal, el bloque de introducción a la encuesta, la descripción larga, las siete preguntas con sus opciones, el formulario de solicitud y los mensajes de error.
- `services.js`: el mensaje de WhatsApp se arma en el idioma elegido (saludo, etiquetas, respuestas y cierre), con la misma estructura y orden que antes.
- `services.js`: los textos en español se movieron a `FORM_UI.es` sin cambios de redacción; los demás servicios siguen en español porque solo las clases de surf tienen traducción.
- `service-detail.html`: actualizar la versión de `services.js` para evitar caché.
- Pendiente: `service-detail.html` no carga `script.js` ni tiene selector de idioma; el idioma se toma del que se eligió en las otras páginas (por defecto, español).

### Validación

- Se verificó `node --check script.js`, `node --check services.js` y `git diff --check`.

## 2026-10-03

### Clases de surf: encuesta en modal interactivo

- `services.js`: agregar el botón **Completar encuesta** y un modal nativo accesible que reutiliza el formulario existente, evitando duplicar campos o lógica de envío.
- `services.js`: permitir abrir, cerrar y restaurar el formulario en su panel original; el botón de cierre y la tecla Escape funcionan como salida del modal.
- `styles.css`: diseñar el modal, su backdrop, botón de apertura, estados hover y comportamiento responsive para móvil.

### Validación

- Se verificó `node --check script.js`, `node --check services.js` y `git diff --check`.

## 2026-10-03

### Clases de surf: restauración de descripción larga

- `services.js`: conservar el título **Ready to Surf?** y el subtítulo solicitado, restaurando debajo la descripción completa sobre niveles, objetivos, seguridad y asesoramiento de tablas.
- `styles.css`: agregar jerarquía visual para que la descripción larga acompañe al subtítulo sin competir con la galería ni la encuesta.

### Validación

- Se verificó `node --check script.js`, `node --check services.js` y `git diff --check`.

## 2026-10-03

### Instagram: ícono con brillo sutil

- `service.html` y `service-detail.html`: reemplazar el texto del enlace inferior de Instagram por un ícono SVG reconocible, con etiqueta accesible y enlace directo a `@wavepointcr`.
- `styles.css`: agregar un brillo dorado que pulsa ocasionalmente, con soporte para `prefers-reduced-motion` para evitar animación cuando el usuario lo solicita.

### Validación

- Se verificó `node --check script.js`, `node --check services.js` y `git diff --check`.

## 2026-10-03

### Navegación del detalle de servicios

- `service-detail.html`: actualizar el enlace inferior **Volver a Servicios** para regresar directamente a `index.html#servicios`, donde se encuentran el catálogo y las tarifas completas.

### Validación

- Se verificó `node --check script.js`, `node --check services.js` y `git diff --check`.

## 2026-10-03

### Clases de surf: Ready to Surf y encuesta de preferencias

- `services.js`: agregar una galería de fotos locales para clases de surf y actualizar el detalle con el título **Ready to Surf?** y el texto solicitado.
- `services.js`: incorporar la encuesta con nombre como primer campo, cantidad de personas, procedencia, nivel, objetivo de aprendizaje, fruta preferida después de la clase y horario preferido (AM, medio día o tarde).
- `services.js`: mantener el resumen de WhatsApp en el mismo orden de la encuesta para que el encargado reciba la información de forma clara.
- `styles.css`: agregar una presentación editorial para la galería y el bloque **Llena nuestra pequeña encuesta**, con responsive para móvil.

### Validación

- Se verificó `node --check script.js`, `node --check services.js` y `git diff --check`.

## 2026-10-03

### Stays and Hotels: catálogo completo de alojamientos

- `index.html`, `service.html` y `script.js`: renombrar la tarjeta **Alojamiento y experiencias** a **Stays and Hotels**, actualizar su copy y asignar una imagen local de alojamiento.
- `services.js`: incorporar la información proporcionada de Hotel Tamalodge, Casa Aura, Casa Madera y Capitán Suizo, incluyendo tarifas, tipos de unidad, cantidades, servicios, temporadas, estadías mínimas y condiciones.
- `services.js`: crear una presentación específica para alojamientos con tarjetas visuales, galerías por opción y bloques separados de tarifas y servicios/condiciones.
- `styles.css`: agregar estilos responsive para las tarjetas de alojamiento y sus galerías, manteniendo la estética oceánica y el formulario de consulta existente.
- Se utilizaron únicamente fotos locales ya presentes en el repositorio; no se agregó una imagen externa ni se presentó una foto como identificada del hotel cuando el asset no tenía esa referencia.

### Validación

- Se verificó `node --check script.js`, `node --check services.js` y `git diff --check`.

## 2026-10-03

### Mejora de legibilidad en textos secundarios

- `styles.css`: aumentar de forma moderada el tamaño, interlineado y peso de subtítulos y descripciones en secciones, tarjetas de servicios, cámaras, guía, beneficios, promociones y footer.
- `styles.css`: reforzar el contraste de textos sobre fondos oceánicos y reducir la opacidad excesiva sin modificar la composición, colores principales ni jerarquía de títulos.
- En móvil se aplican valores ligeramente más compactos para conservar el ritmo visual y evitar tarjetas demasiado altas.

### Validación

- Se verificó `git diff --check`, la sintaxis de `script.js` y `services.js`, y la presencia de los selectores de legibilidad.

## 2026-10-03

### Tabla estilizada de tarifas de servicios

- `index.html`: agregar al final de la sección **Servicios** una tabla semántica con las tarifas proporcionadas para clases de surf, fotografía acuática, fotografía desde la playa, surfskate y surf coaching.
- `styles.css`: diseñar la tabla como un panel oceánico/glass acorde con WavePoint, con encabezado destacado, acentos aqua/dorados, estados hover y desplazamiento horizontal accesible en pantallas pequeñas.
- Se muestran los precios como referencia en USD y se aclara que la disponibilidad y el precio final se confirman con el proveedor.

### Validación

- Se verificó `git diff --check`, la sintaxis de `script.js` y `services.js`, y la presencia de la tabla en el HTML/CSS.

## 2026-10-03

## 2026-10-03

## 2026-10-03

### Mejor contraste para la guía de playas

- `styles.css`: aplicar paneles glass semitransparentes a la introducción y las categorías de la guía, con desenfoque, bordes suaves y sombras internas.
- `styles.css`: reforzar la columna textual de las tarjetas detalladas con una superficie translúcida independiente, mejor separación de la imagen y textos secundarios más claros.
- Se conserva el fondo oceánico, la tipografía WavePoint y la transparencia; en móvil la separación pasa de lateral a superior.

### Validación

- `node --check script.js` y `node --check services.js` correctos; `git diff --check` limpio.

## 2026-10-03

### Imágenes ampliables en la guía de playas

- `styles.css`: ampliar el espacio visual de las imágenes en las tarjetas detalladas, con un marco más cómodo en escritorio y una imagen más alta en móvil.
- `script.js`: agregar un visor modal accesible para abrir cada imagen en grande con clic, Enter o barra espaciadora; se cierra con el botón, clic fuera o Escape.
- Los enlaces **“Ver ubicación”** a Google Maps permanecen separados y sin cambios.

### Validación

- `node --check script.js` y `node --check services.js` correctos; `git diff --check` limpio.

## 2026-10-03

### Descripción completa para elegir Servicios

- `index.html`, `service.html` y `script.js`: ampliar la descripción bilingüe para incluir fecha, tamaño del grupo y consulta de disponibilidad con el proveedor.
- Inglés: **“Choose an experience to see the details. When you’re ready, send us your preferred date and group size. We’ll check availability with the provider.”**

### Validación

- `node --check script.js` y `node --check services.js` correctos; `git diff --check` limpio.

## 2026-10-03

## 2026-10-03

## 2026-10-03

## 2026-10-03

## 2026-10-03

### Primer retiro de enlaces al sitio antiguo

- Auditoría completa del repositorio: las únicas referencias al dominio `wavepointcr.com` eran el enlace de cámaras, el enlace Home del footer y un adaptador JavaScript para rutas antiguas.
- `index.html`: cambiar el enlace de cámaras a `#camaras` y el Home a `index.html`, evitando salir del sitio nuevo.
- `script.js`: actualizar los textos bilingües de ese enlace y retirar el adaptador JavaScript que dependía del dominio viejo. Las rutas puente `Enlaces/service.html` y `Enlaces/guia-playas.html` se conservan para no romper enlaces existentes.
- Se mantienen intactos los enlaces externos necesarios a Instagram, WhatsApp, Google Maps, Castr y sitios de colaboradores.

### Validación

- Auditoría final sin referencias a `wavepointcr.com` en código o HTML activo.
- `node --check script.js` y `node --check services.js` correctos; `git diff --check` limpio.

## 2026-10-03

### Título y descripción de Servicios más visibles

- `styles.css`: aumentar ligeramente el tamaño del título y la descripción de Servicios tanto en `index.html#servicios` como en `service.html#servicios`.
- Se mantienen ajustes responsive para que el copy siga siendo legible en móvil sin alterar la grilla de servicios.

### Validación

- `node --check script.js` y `node --check services.js` correctos; `git diff --check` limpio.

## 2026-10-03

### Copy de Servicios sincronizado en inicio y catálogo

- `script.js`: aplicar el mismo título y descripción bilingües también a las claves `servicesSectionTitle` y `servicesSectionSubtitle` que usa `index.html#servicios`.
- Motivo: el cambio anterior estaba en `service.html`, mientras que el enlace principal **Servicios** del sitio lleva a la sección de servicios de `index.html`.
- Ambas ubicaciones muestran ahora el mismo copy en español e inglés.

### Validación

- Confirmadas las claves para `index.html` y `service.html`.
- `node --check script.js` y `node --check services.js` correctos; `git diff --check` limpio.

## 2026-10-03

### Nuevo encabezado del catálogo de Servicios

- `service.html`: reemplazar el título de la sección por **“¿Qué te gustaría hacer en Tamarindo?”** y dejar una sola descripción orientada a elegir una experiencia y enviar la fecha preferida.
- `script.js`: agregar las versiones bilingües:
  - Español: **“¿Qué te gustaría hacer en Tamarindo?”** / **“Elegí una experiencia para ver los detalles. Cuando estés listo, envianos tu fecha preferida.”**
  - Inglés: **“What would you like to do in Tamarindo?”** / **“Choose an experience to see the details. When you’re ready, send us your preferred date.”**
- Se eliminó la segunda descripción redundante del encabezado; las diez tarjetas de servicios no se modificaron.

### Validación

- `service.html` enlaza el título y la descripción con `data-i18n`.
- `node --check script.js` y `node --check services.js` correctos; `git diff --check` limpio.

## 2026-10-03

### Guía de playas inicia en la guía local completa

- `guia-playas.html`: retirar la portada y el bloque inicial de tarjetas-resumen, ya que repetían destinos y enlaces de mapas presentes en la guía detallada inferior.
- La página ahora comienza directamente con **“GUÍA LOCAL COMPLETA · Guanacaste, pensada para viajar bien”**, su índice de categorías, tarjetas desarrolladas, mapas, recomendaciones prácticas y llamada a la acción.
- `styles.css`: adaptar el bloque inicial al ancho y fondo visual del sitio, eliminando el margen y separador que dependían del contenido retirado.

### Validación

- Confirmada la ausencia de `guide-page-hero`, `guide-page-list` y `guide-offering`.
- Confirmadas las tarjetas detalladas y sus enlaces a mapas.
- `node --check script.js` y `git diff --check` correctos.

## 2026-10-03

### Traducciones del encabezado de aliados

- `index.html` y `script.js`: conectar el nuevo encabezado externo y su descripción accesible al sistema de idiomas existente.
- Español: **“Las marcas y negocios locales que creen en WavePoint y ayudan a hacerlo posible”**.
- Inglés: **“The brands and local businesses that believe in WavePoint and help make it possible”**.

### Validación

- Confirmadas las claves en ambos diccionarios y los atributos `data-i18n` en el markup.
- `node --check script.js` y `node --check services.js` correctos; `git diff --check` limpio.

## 2026-10-03

### Encabezado de aliados fuera de la cinta

- `index.html`: colocar el encabezado descriptivo fuera de la sección filmstrip para que se vea claramente por encima de la tira de película.
- `styles.css`: aumentar moderadamente el tamaño del texto, conservarlo en una sola línea y darle un fondo oscuro independiente para separar visualmente el encabezado de la cinta.
- El fotograma interno **“Aliados y patrocinadores”** permanece dentro del carrusel.

### Validación

- Sintaxis JavaScript y `git diff --check` correctos.
- Confirmado que el encabezado externo precede al elemento `<section id="aliados">` y que los dos fotogramas internos se conservan.

## 2026-10-03

### Título premium sobre la cinta de aliados

- `index.html`: agregar inmediatamente encima de la cinta de cine el texto **“The brands and local businesses that believe in WavePoint and help make it possible”** en una sola línea, conservando también el fotograma interno **“Aliados y patrocinadores”** en ambos conjuntos del carrusel.
- `styles.css`: aplicar un tratamiento sutil y premium con tipografía ligera, espaciado amplio, color marfil atenuado y reglas aqua discretas; ajustar el tamaño para conservar la línea en pantallas pequeñas.
- Los fotogramas de aliados continúan duplicándose para la animación y la cinta conserva sus perforaciones, imágenes, títulos y enlaces.

### Validación

- `node --check script.js` y `node --check services.js` correctos.
- `git diff --check` limpio.
- Confirmado que el título ya no se repite dentro de los fotogramas y que `index.html`, `styles.css` y `CHANGELOG.md` existen y no están vacíos.

## 2026-10-03

### Subtítulo del hero centrado en la comunidad local

- `index.html` y `script.js`: reemplazar el texto sobre revisar condiciones y elegir el próximo spot por **“Through the people who call it home”** en inglés.
- La versión española equivalente queda como **“Conocé Tamarindo a través de quienes lo llaman hogar.”**
- Los botones y el resto de la composición del hero permanecen sin cambios.

## 2026-10-03

### Nuevo posicionamiento del título del hero

- `index.html` y `script.js`: reemplazar el título centrado en cámaras por **“Tamarindo’s best experiences, with the locals who know it best”** en inglés.
- La versión española equivalente queda como **“Las mejores experiencias de Tamarindo, con los locales que mejor lo conocen”**, manteniendo el cambio coherente con el selector de idioma.
- No se modificó la composición visual ni la jerarquía del hero.

## 2026-10-03

### Ícono del clima más grande y mejor aprovechamiento del panel

- `styles.css`: ampliar el ícono atmosférico a 88 px en escritorio, con una superposición intencional y controlada sobre el área de temperatura para aprovechar mejor el ancho del panel.
- Responsive: reducirlo a 76 px en pantallas pequeñas y 68 px en anchos de hasta 380 px; el texto del estado conserva su espacio y puede envolver sin desbordar.
- Validación: revisar las reglas finales que anulaban tamaños anteriores de 52–62 px; conservar el comportamiento del panel de vidrio oscuro y la legibilidad de los datos.

## 2026-10-03

### Vidrio oscuro definitivo del panel del clima

- `styles.css`: retirar el rojo de comprobación y establecer el panel `.weather-card` en azul negro translúcido (`rgba(3, 14, 22, .56)`), conservando el desenfoque, el borde y las sombras; las filas internas vuelven a un blanco muy sutil.
- El fondo del hero ahora puede percibirse a través del panel sin perder la lectura de los valores meteorológicos.

## 2026-10-03

### Panel del clima visible en rojo

- `styles.css`: aplicar un fondo rojo semitransparente al panel `.weather-card` y un rojo más oscuro a sus filas internas, a pedido del usuario, para que el cambio visual se perciba claramente en el sitio.
- Validación: JavaScript sin errores y `git diff --check` limpio.

## 2026-10-03

### Transparencia sutil en la ventana del clima

- `styles.css`: reducir la opacidad del panel de clima de `.76` a `.62` y suavizar el fondo de sus filas internas para que el fondo del hero se perciba mejor sin cambiar la lectura de los datos.
- Validación: mantener contraste, desenfoque y borde del panel; `git diff --check` pendiente de la validación final.

## 2026-10-03

### Ventana del clima en vidrio oscuro

- `styles.css`: aplicar a `.weather-card` un acabado de vidrio oscuro con fondo translúcido, desenfoque y saturación, borde sutil, sombra profunda y filas internas más discretas.
- Se mantuvo la legibilidad de temperaturas, estado meteorológico, oleaje, viento y hora local, sin modificar la composición del hero.
- Validación: revisar el alcance del selector para que afecte únicamente la ventana del clima.

## 2026-10-03

### Orden de secciones en la página de inicio

- `index.html`: mover la sección **WavePoint en Tamarindo** (`#guia`) para que aparezca inmediatamente antes de **Cámaras en vivo** (`#camaras`). No se modificó el contenido interno de ninguna sección.
- Validación: orden de IDs comprobado y `git diff --check` limpio.

## 2026-10-03

### Favicon WavePoint con ola engrosada

- Se regeneró el favicon a partir de la imagen de referencia proporcionada por el usuario, conservando el fondo negro, el punto blanco y la forma de la ola inspirada en Manus, pero con un trazo visiblemente más grueso y legible en tamaños pequeños.
- Se generaron `assets/wavepoint-favicon.ico`, `assets/wavepoint-favicon-16.png`, `-32.png`, `-192.png`, `-512.png`, `assets/wavepoint-apple-touch-icon.png` y la copia raíz `favicon.ico`.
- Se restauraron `assets/wavepoint-watermark.png`, `assets/wavepoint-sticker.png`, `assets/wavepoint-favicon-original.jpeg` y `assets/wavepoint-favicon-inverted.jpeg`, que habían sido eliminados aunque todavía existían referencias o dependencias históricas.
- Validación: tamaños de imagen comprobados, sintaxis JavaScript correcta, `git diff --check` limpio y cero referencias locales inexistentes.

## 2026-10-03

### Nuevo favicon

- Reemplazo autorizado explícitamente por el usuario: el favicon pasa a ser el ícono de la ola con punto (fondo negro, esquinas redondeadas). Se quitó el fondo blanco de las esquinas para que sean transparentes y se limpió el ruido JPEG del negro.
- Archivos nuevos: `assets/wavepoint-favicon.ico` (16/32/48, copia en `/favicon.ico`), `assets/wavepoint-favicon-16.png`, `-32.png`, `-192.png`, `-512.png` y `assets/wavepoint-apple-touch-icon.png` (180 × 180, cuadrado negro completo).
- `index.html`, `service.html`, `service-detail.html`, `guia-playas.html` y las fichas de `Enlaces/` (capitan-suizo, casa-maderas, nostros, occidental, red-door): el `<link rel="icon">` apunta a los archivos nuevos y se agrega `apple-touch-icon`. Los favicons anteriores se conservan en `assets/`.
- `PROJECT_GUIDE.md`: sección de favicon actualizada.
- Pendiente: los navegadores cachean el favicon; si no cambia, forzar recarga o abrir en ventana privada.

### Fondos de sección con foto y parallax

- `index.html`: capa `.px-bg` y clase `has-px` dentro de Servicios, Cámaras, Guía (`#guia`) y Después del surf. El hero no se modificó.
- `styles.css` (final del archivo): cada sección es un panel con esquinas redondeadas (`clip-path`) que recorta una foto `position: fixed` a tamaño de pantalla; al hacer scroll el contenido se desliza sobre la foto quieta. Sin JavaScript y sin `background-attachment: fixed` (falla en iOS). Velo azul liviano y títulos en blanco; las tarjetas conservan su fondo.
- `assets/bg/`: fotos de `assets/legacy/` optimizadas a 1920 px máx. (`servicios.jpg` aérea de playa, `camaras.jpg`, `guia.jpg`, `atardecer.jpg`). Para cambiar una foto, reemplazar el archivo o la URL de `--px-img`.
- Tarjetas de Servicios y Cámaras en vidrio oscuro (`rgba(6, 24, 34, .64)` + blur 20 px, borde fino, texto blanco y enlaces turquesa claro), al final de `styles.css`. Las demás tarjetas no se modificaron.
- Fotos de las tarjetas de servicios (`.service-img img`): `object-fit: cover` y sin fondo azul, para que la foto llene todo el espacio. Antes quedaban con `contain` (regla de `styles.css` ~línea 2673) y se veían franjas `#0a2c3b` arriba y abajo. Las galerías de detalle y de colaboradores no se tocaron.
- Probado en Chromium (1440 × 900): la foto permanece fija mientras la sección se desplaza. `#guia` lleva un velo más fuerte a la izquierda para el texto. Pendiente: probar en iOS/Safari real.

### Menú del header: texto más grande y tipografía informal

- `styles.css`: importar Fredoka (400/500/600) con `@import` al inicio del archivo, así el cambio vale para todas las páginas sin tocar cada HTML. Se define `--font-menu` y se aplica a la barra de navegación, al desplegable de Colaboradores y al panel del menú hamburguesa.
- Escritorio: tamaño de 14 px a 19 px (17 px entre 981 y 1180 px), peso 500 y separación entre enlaces ajustada. El desplegable pasa de 13 px a 16 px.
- Hamburguesa: de 13 px en mayúsculas a 21 px en minúsculas y mayúsculas normales (submenú de 11 px a 17 px).
- Corrección: el desplegable de Colaboradores se cortaba contra el borde derecho de la pantalla (96 a 125 px menos de 1440 px de ancho). Ahora se alinea a la derecha del botón (`.dropdown .menu { left: auto; right: 0 }`).
- Panel hamburguesa: `max-height: 100dvh`, `overflow-y: auto` y `padding-bottom: 100px` para que, con los textos más grandes, el último ítem del submenú pueda subirse por encima de los botones flotantes de WhatsApp y chat y el panel sea scrolleable en pantallas bajas.
- Para cambiar la letra, editar `--font-menu` y el `@import` del inicio de `styles.css`.

### Validación

- Medido con la fuente cargada en escritorio (981, 1100, 1280 y 1920 px) sobre inicio, servicios, detalle de servicio, guía y fichas de Enlaces: sin desborde horizontal ni enlaces partidos en dos líneas.
- Desplegable dentro del viewport en todos esos anchos.
- Panel hamburguesa con submenú abierto a 320, 375, 430 y 720 px: sin desborde horizontal y el último ítem queda libre de los botones flotantes.
- `git diff --check` limpio.
- Pendiente conocido, anterior a este cambio: en el panel móvil de `index.html` aparece una flecha ▾ duplicada junto a "Colaboradores", porque la traducción `navColaboradores` en `script.js` ya incluye el ▾.

## 2026-10-02

### Hero: espacio inferior bajo los botones

- `styles.css`: agregar `padding-bottom: 56px` a la regla base de `.hero`. En escritorio los botones "Ver cámaras en vivo" y "Guía de playas" quedaban a 32 px del borde inferior del hero, pegados a la franja de aliados; en pantallas bajas (1024 × 600) el hero se achicaba al alto de la ventana y el botón tocaba el borde (-2 px).
- El cambio fue autorizado explícitamente por el usuario (el hero es una pieza protegida). No se modificó la composición, los videos, el logo ni la jerarquía; el bloque completo sube unos 28 px en escritorio.
- Los breakpoints de 980 px o menos no cambian: tienen su propio `padding` más abajo en el archivo y siguen mandando.

### Validación

- Medido en escritorio: distancia de los botones al borde inferior del hero de 32 px a 60 px (1280 × 720) y de -2 px a 54 px (1024 × 600).
- Medido a 320, 375, 430, 720 y 980 px: sin cambios respecto de antes.
- `git diff --check` limpio.


## 2026-10-02

### Guía operativa del proyecto

- `PROJECT_GUIDE.md`: crear una guía completa para continuar WavePoint desde otro chat o con otro agente. Incluye arquitectura, páginas, catálogo real, Pack ajustable, clima, cámaras, reglas visuales, favicon original, responsive, accesibilidad, assets, preview, validaciones, commits, changelog y despliegue.
- La guía deja explícitas las decisiones protegidas: no modificar el hero sin autorización, no inventar servicios, mantener el favicon original del usuario y documentar cada cambio relevante.

### Validación

- Se confirmó que la guía incluye los diez servicios reales y sus IDs actuales.
- Se incluyeron comandos reproducibles de preview y validación.

## 2026-10-02

### Favicon con colores invertidos

- `assets/wavepoint-favicon-inverted.jpeg`: crear una variante invertida directamente desde la imagen original, conservando exactamente su composición, forma y dimensiones 1024 × 1024 px.
- Todas las páginas HTML: cambiar el favicon activo a la variante invertida, manteniendo el original intacto en `assets/wavepoint-favicon-original.jpeg`.

### Validación

- La imagen original no fue sobrescrita.
- La variante invertida conserva formato JPEG y tamaño 1024 × 1024 px.
- Se actualizaron las nueve referencias activas del favicon.
