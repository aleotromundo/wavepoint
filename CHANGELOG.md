## 2026-10-10
### Carrusel de aliados — velocidad y hover
- `styles.css`, `styles.optimized.css` y `script.js`: el carrusel avanza un poco más rápido (`26s`) y al pasar el cursor reduce suavemente la velocidad mediante playback rate (`21s` de referencia) sin pausarse. El arrastre mantiene una velocidad intermedia y se añadió `will-change: transform` para mantener el desplazamiento fluido.
- `index.html`: se actualizaron las versiones de caché de estilos y script para que el ajuste llegue al sitio público.
- Validación: reglas fuente y optimizadas sincronizadas; se verificará sintaxis, formato, responsive y despliegue público.

## 2026-10-09
### Aliados y patrocinadores — probar fondo parallax y vidrio en tarjetas
- `index.html`: se agruparon el encabezado y el carrusel de aliados para limitar el nuevo fondo a esa sección.
- `styles.css` y `styles.optimized.css`: se agregó una foto local de atardecer con tinte rojo y líneas de olas discretas como ventana parallax; las tarjetas muestran una placa de vidrio que entra suavemente al pasar el cursor o recibir foco. En táctil y con movimiento/datos reducidos, el contenido queda visible sin parallax ni transición.
- `index.html`: se renovó la versión de caché de estilos.
- Validación: pendiente revisar el efecto en navegador, teclado, móvil, movimiento reducido y `git diff --check`.

### Armador móvil — ubicar el logo WavePoint en el hero
- `trip-builder.js` y `trip-builder.html`: el logo flotante pasa a formar parte del contenido del hero, conservando su posición fija anterior en escritorio.
- `trip-builder.css`: solo en móvil, el logo aparece centrado y ampliado encima de “Plan your trip”; queda en el hero y no acompaña el scroll ni se superpone con el asistente o WhatsApp.
- `trip-builder.html`: se actualizó la versión de caché de estilos y script.
- Validación: comprobar ubicación y separación de controles al inicio y al llegar al footer en móvil, mantener posición de escritorio, responsive y `git diff --check`.

### Mensajes de WhatsApp — voz singular/plural en todos los formularios
- `services.js`: se reconoce la cantidad de participantes en alojamiento, clases, Roca Bruja, snorkel y ATV; los formularios sin cantidad usan frases neutrales y bilingües sin agregar preguntas.
- `trip-builder.js`: el saludo de la solicitud cambia a plural cuando alguna experiencia incluye más de una persona.
- `service-detail.html` y `trip-builder.html`: se actualizaron las versiones de caché de los scripts.
- Validación: comprobar mensajes ES/EN con una persona, grupos y cantidad desconocida sin enviar WhatsApp; revisar sintaxis y `git diff --check`.

### Solicitud de alojamiento — redactar mensaje según el tamaño del grupo
- `services.js`: el mensaje de WhatsApp para estadías ahora ordena presentación, fechas de llegada y salida, alojamiento de interés y experiencias elegidas, con redacción singular o plural en español e inglés.
- `service-detail.html`: se actualizó la versión de caché de `services.js`.
- Validación: revisar solicitudes para una y varias personas en ambos idiomas, sin enviar mensajes; comprobar sintaxis y `git diff --check`.

### Formularios de servicios — limpiar aviso al completar campos
- `services.js`: el mensaje de validación se limpia cuando las respuestas requeridas hacen válido el formulario y antes de procesar un envío válido; los errores vuelven a mostrarse si se intenta enviar incompleto.
- Validación: verificar el flujo incompleto → completar → mensaje limpio y generación del enlace WhatsApp; `git diff --check`.

### Armador de viaje — reubicar carrito flotante en móvil
- `trip-builder.css`: el acceso flotante al carrito queda debajo del menú hamburguesa, en vez de compartir la esquina inferior derecha con WhatsApp y el asistente.
- `trip-builder.html`: se actualizó la versión de caché de la hoja de estilos del armador.
- Validación: comprobar separación del menú, WhatsApp y asistente en móvil; interacción del carrito y `git diff --check`.

### Términos y servicios — agregar modal informativo
- `script.js`: el texto del pie ahora es un botón que abre un modal bilingüe; informa que WavePoint conecta con proveedores locales, que consultar por WhatsApp no confirma una reserva y que disponibilidad y precio final deben confirmarse antes del pago.
- `styles.css` y `styles.optimized.css`: estilos del modal, botón de cierre, foco visible y adaptación a móvil.
- Validación: el modal abrió y cerró con su botón y Escape; se comprobó el texto en ES/EN y que cabe en un viewport móvil de 390×844; `git diff --check`.

### Formularios de servicios — quitar botón «Continuar» sin acción
- `services.js`: se quitó el botón inoperante «Continuar» del formulario de solicitud en las fichas de servicios; se conserva «Armar solicitud en WhatsApp» como acción de envío.
- Validación: en navegador, la ficha de alojamiento carga sin el control `data-survey-next` y conserva un botón «Armar solicitud en WhatsApp»; `git diff --check`.

### Alojamiento — quitar pregunta de presupuesto del formulario
- `services.js`: se eliminó del formulario bilingüe la pregunta de presupuesto por noche para el grupo; los precios establecidos de cada alojamiento y las demás preguntas permanecen.
- Validación: no quedan referencias a `nightly_budget`; `git diff --check`.

### Yoga — aplicar la nueva foto costera en todas las tarjetas
- `services.js`, `index.html`, `trip-builder.js` y `script.js`: Yoga ahora usa `yoga-coastal-pose.webp` en la tarjeta, el hero/fondo del detalle y el armador, con textos alternativos coordinados en español e inglés. Foto de Matea Brajdić vía [Unsplash](https://unsplash.com/photos/a-woman-doing-a-yoga-pose-in-front-of-a-body-of-water-nBX2VPpn64k), bajo la [Unsplash License](https://unsplash.com/license).
- Validación: referencias de imagen y alts sincronizados; confirmar carga del archivo y `git diff --check`.

### Servicios — restaurar textos de lo que incluye cada experiencia
- `services.js`: el detalle vuelve a mostrar los bloques de contenido `includes` existentes en Entrenamiento de surf, Yoga y Clases de surfskate, con el rótulo localizado en español e inglés. Se conservan las listas actuales y los estilos previos; no se agregan beneficios nuevos.
- Validación: sintaxis de `services.js`, renderizado bilingüe de los tres bloques y `git diff --check`.

### Alojamientos y servicios — completar galerías y corregir fotografías
- `services.js`: cada alojamiento muestra tres fotos distintas. Tamalodge y Capitán Suizo suman imágenes de sus galerías oficiales, autorizadas para reutilización por el usuario; Casa Aura usa su foto interior distinta en lugar de una copia de la foto exterior. Las cuatro referencias superiores siguen enlazando a cada alojamiento y su primera foto es la única repetida.
- `styles.css` y `styles.optimized.css`: las galerías usan `cover`, sin separaciones, marcos ni franjas y con altura limitada para escritorio y móvil.
- `services.js`, `index.html`, `trip-builder.js` y `script.js`: Roca Bruja usa únicamente dos fotos identificadas del lugar, en la portada y el detalle; Yoga adopta una foto local WebP de alta resolución de [Unsplash, por Alonso Reyes](https://unsplash.com/photos/a-woman-sitting-in-a-yoga-position-on-the-beach-PxOCVsAy5uo); la tarjeta y el armador de ATV ahora usan la misma foto de convoy que la portada del detalle.
- Las fotos de Roca Bruja son de dog4aday, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/): [formación rocosa](https://commons.wikimedia.org/wiki/File:Roca_Bruja_-_Guanacaste_-_Costa_Rica.jpg) y [surf](https://commons.wikimedia.org/wiki/File:Surfing-Roca_Bruja-Guanacaste-Costa_Rica.JPG). Se añadió la atribución bilingüe visible en el detalle.
- `styles.css` y `styles.optimized.css`: se ajustó el foco de la portada de Clases de surf manteniendo `cover`, también en móvil.
- Validación: las cuatro galerías cargan tres imágenes cada una; las 12 fotos tienen hashes distintos entre sí y solo se repiten en las cuatro referencias superiores. Se comprobaron los enlaces de esas referencias, los alts ES/EN, el detalle de Roca Bruja, las portadas de Yoga y ATV y el render responsive en navegador; `git diff --check`.

### Fondo de Servicios — sumar foto superior a la composición
- `index.html`, `styles.css` y `styles.optimized.css`: la franja superior usa ahora `surfing-drone-pexels-5232570.webp`, una foto local nueva sin otros usos, en WebP de 2400×3000 (318 KB). Foto de Jess Loiterton, descargada de [Pexels](https://www.pexels.com/photo/man-creating-waves-wile-surfi-5232570/) bajo la [licencia gratuita de Pexels](https://www.pexels.com/license/).
- La composición conserva tres franjas fotográficas principales con un solapamiento leve; se quitó la segunda imagen de surf a pedido.
- La capa sigue siendo decorativa y conserva la máscara degradada existente; no cambia el contenido de las tarjetas ni el hero.
- Validación: imagen local confirmada, reglas fuente y optimizadas sincronizadas, `git diff --check`.

### Fondo parallax de Servicios — separar las capas de surf
- `styles.css` y `styles.optimized.css`: la capa superior con la mujer surfeando (`surf-top`) ahora queda más arriba y ocupa menos alto, reduciendo la superposición con la foto grupal inferior.
- Se conserva la sincronización/parallax de las imágenes y se ajusta también el comportamiento en pantallas de hasta 1024 px.
- Validación: revisión de las fotos fuente, sintaxis JavaScript y `git diff --check`.

### Galerías — armonía de tamaños y contenedores invisibles
- `styles.css` y `styles.optimized.css`: Roca Bruja usa dos imágenes con la misma proporción visual, sin fondos de contenedor visibles; el collage existente puede perder apenas los costados para mantener el rectángulo parejo.
- La composición conserva el equilibrio en escritorio y móvil, y las imágenes nuevas no quedan dentro de cuadros más grandes que su área visible.
- Validación: render visual del detalle de Roca Bruja, sintaxis JavaScript y `git diff --check`.

### Roca Bruja — galería completa y nueva foto de surf
- `services.js`: se mantiene intacta la portada y se suma `roca-bruja-surfing.webp` a la galería junto a la foto panorámica existente.
- `styles.css` y `styles.optimized.css`: las dos fotos de la galería se muestran completas, sin deformación ni recorte, en dos paneles equilibrados; en móvil se apilan sin desbordamiento.
- Fuente de la nueva imagen: [Wikimedia Commons — Surfing-Roca Bruja-Guanacaste-Costa Rica](https://commons.wikimedia.org/wiki/File:Surfing-Roca_Bruja-Guanacaste-Costa_Rica.JPG), autor `dog4aday`, licencia [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/).
- Validación: sintaxis JavaScript, rutas locales, WebP optimizado por debajo de 500 KB, portada conservada y `git diff --check`.

### Surfskate — tarjeta independiente y galería en composición equilibrada
- `index.html` y `trip-builder.js`: la tarjeta usa la foto original de los dos instructores, mientras la portada del detalle conserva la foto de la clase grupal.
- `services.js`: se reemplazó la última foto del skater agachado por `surfskate-bowl.webp`, una imagen de skate dentro de una bowl de concreto.
- `styles.css` y `styles.optimized.css`: la foto vertical de los dos instructores se muestra completa a la izquierda y las otras dos imágenes quedan apiladas a la derecha, formando un rectángulo sin deformación ni recorte.
- Fuente de la nueva imagen: [Unsplash — Skateboarder rides in a concrete skate bowl](https://unsplash.com/photos/skateboarder-rides-in-a-concrete-skate-bowl-6SLHKSF3dUA), de Didi Paul, bajo la Unsplash License.
- Validación: sintaxis JavaScript, rutas locales, WebP optimizado por debajo de 500 KB, galería sin la foto del skater agachado y `git diff --check`.

### Surfskate — priorizar instrucción y clase en la selección visual
- Se eliminó `surfskate-surf-lesson.webp`, la foto de la chica parada sobre la tabla en la arena.
- La foto original de los dos instructores ayudándose ocupa ahora ese lugar dentro de la galería.
- La tarjeta, el armador y la portada del detalle dejaron de usar la imagen del skater haciendo cuernitos y ahora usan la foto de la clase grupal de surfskate.
- Validación: sintaxis JavaScript, cuatro imágenes en la galería, foto original conservada y `git diff --check`.

### Surfskate — nueva selección visual más representativa
- Se eliminaron las cuatro fotos nuevas anteriores (`surfskate-speed`, `surfskate-flow`, `surfskate-board-detail` y `surfskate-sunset`) porque no comunicaban bien la relación entre surfskate y surf.
- `services.js`: la galería ahora combina una persona practicando surfskate, una clase grupal, una clase de surf con instructor y una persona surfeando una ola; la foto original de los dos instructores se mantiene al final.
- `index.html` y `trip-builder.js`: la tarjeta y el armador usan la foto de práctica de surfskate, mientras la galería incluye también agua y clases.
- Fuentes visuales consultadas: [San Diego Surf School](https://www.sandiegosurfingschool.com/) para entrenamiento de surfskate, [Whitezu Surfskate Waves](https://www.whitezu.com/) para clase grupal, [Pixabay — surf skate y mar](https://pixabay.com/images/search/surf%20skate/) para la ola y [Pexels — Woman Learning Surfing with Instructor](https://www.pexels.com/photo/woman-learning-surfing-with-instructor-19756565/) para la clase de surf.
- Validación: sintaxis JavaScript, rutas locales, cinco WebP distintos por debajo de 500 KB, galería sin repetición y `git diff --check`.

### Surfskate — conservar la foto original de instrucción
- `services.js`: se reincorporó `assets/img/services/surfskate/surfskate.webp` al final de la galería; la foto de los dos instructores se conserva como material aportado por ellos y no se usa como tarjeta ni portada.
- `script.js`: se corrigieron los textos alternativos para escribir **surfskate** como una sola palabra en español e inglés.
- Validación: referencia local existente, galería con cinco fotos distintas y `git diff --check`.

### Surfskate — renovar tarjeta, portada y galería
- `services.js`: Surfskate ahora cuenta con cuatro fotos distintas; la primera se usa en la tarjeta, el armador y la portada del detalle, y las otras tres completan la galería.
- `index.html` y `trip-builder.js`: se actualizó la imagen de la tarjeta de Surfskate y se sincronizaron los textos alternativos en español e inglés.
- Se incorporaron versiones WebP locales en `assets/img/services/surfskate/` para evitar dependencias remotas y mantener el peso optimizado.
- Fuentes consultadas: [SPEED en Wikimedia Commons](https://commons.wikimedia.org/wiki/File:SPEED_(2916292323).jpg), CC BY-SA 2.0, Cristian Janke; [Person Wearing Blue Skinny Jeans Riding Black Longboard en Pexels](https://www.pexels.com/photo/person-wearing-blue-skinny-jeans-riding-black-longboard-3018938/); [A Person using Longboard en Pexels](https://www.pexels.com/photo/a-person-using-longboard-13941263/); y [Girl riding her longboard in the sunset en Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Girl_riding_her_longboard_in_the_sunset.jpg), CC BY 2.0, elise.y.
- Validación: sintaxis JavaScript, rutas locales, cuatro WebP distintos por debajo de 500 KB, galería sin repetición y `git diff --check`.

### Footer y tarjetas de servicios — transparencia y separación visual
- `styles.css` y `styles.optimized.css`: los enlaces “Términos · Privacidad” quedan centrados en la franja inferior del footer para evitar el choque con el logo flotante; en móvil se mantienen apilados.
- Las tarjetas de servicios usan una capa normal más transparente (`48%`) y una capa hover moderada (`72%`), conservando la legibilidad del contenido.
- Validación: `git diff --check`, CSS fuente y optimizado sincronizados.

### WavePoint — política permanente de fotos por sección
- `PROJECT_GUIDE.md`: se documentó que cada sección debe usar la foto más llamativa en portada y tarjeta, una foto distinta para el fondo y al menos dos fotos adicionales y no repetidas en la galería.
- La regla también exige auditar copias JPG/WebP como una misma foto, buscar una imagen nueva cuando no alcance el inventario, conservar textos alternativos y validar rutas, calidad y peso.

### Surf Coaching — reemplazar la foto de tarjeta
- La tarjeta, el armador y la portada del detalle ahora usan la foto de los tres surfistas saltando con sus tablas.
- La foto anterior del surfista sobre la tabla roja se conserva dentro de la galería y ya no funciona como imagen de referencia principal.

### Clases de Surf — quitar foto sin relación
- Se retiró de la galería la foto del árbol (`surf-lesson-wave.webp`) y se reemplazó por una imagen de dos surfistas practicando juntos.
- Se actualizaron el texto alternativo, el catálogo visual y la caché del detalle; la nueva foto no se repite dentro de la sección.

### Footer — navegación y logo alineados
- Se estilizó “Volver a Servicios” con la tipografía condensada y el lenguaje visual de WavePoint.
- El logo flotante ahora se ubica en la misma franja inferior, a la derecha del footer, mientras el enlace queda a la izquierda; se aplicó también a páginas de colaboradores.

## 2026-10-09
### ATV — completar portada, fondo, galería y armador sin repetir fotos
- Se mantuvieron las dos fotos ATV existentes y se incorporaron tres fotos distintas encontradas en búsquedas públicas: convoy rural, sendero de bosque y recorrido de playa.
- La tarjeta/portada usa Arenal; el hero y fondo del detalle usan el convoy rural; la galería muestra el mirador costero y el sendero de bosque; el armador usa la foto de playa. No se repite una foto entre esos usos.
- `services.js`, `trip-builder.js`, `service-detail.html` y `dashboard-catalog.js` quedaron actualizados con referencias, textos alternativos bilingües y caché nueva. Fuentes consultadas: `superquadscr.com` y Native's Way Tours & Transfers mediante búsqueda de imágenes.
- Se optimizaron las nuevas fotos a WebP y se verificaron sintaxis, rutas locales, pesos, galería y `git diff --check`.

## 2026-10-09
### ATV — retirar imágenes antiguas y evitar fotos pixeladas
- Se quitaron de portada, detalle, armador y fondos de sección las tres fotos ATV anteriores; también se retiraron sus archivos activos y el duplicado de Picasa.
- Solo se conservan para el servicio las dos fotos nuevas de 736 × 736 px: Arenal para tarjeta/portada y mirador costero para galería y armador. Se descartó el JPEG de 236 × 295 px y su WebP por baja resolución.
- El fondo de la sección Servicios usa `assets/img/site/backgrounds/servicios.webp` (1920 × 1080 px); el hero del detalle ATV queda sin foto ampliada para evitar pixelación.
- Se actualizaron `dashboard-catalog.js`, textos alternativos bilingües y cachés. Validación: referencias sin restos, sintaxis, calidad/rutas y renderizado del detalle.

### Servicios — clasificar y organizar siete fotos nuevas
- `assets/img/services/atv/`: se añadieron tres fotos de cuatriciclos (sendero embarrado, volcán Arenal y mirador costero).
- `assets/img/services/yoga/`: se añadieron dos fotos de meditación y yoga grupal; reemplazan las fotos remotas anteriores de la galería.
- `assets/img/services/surf-coaching/`: se añadieron dos fotos de coaching/campamento de surf para la galería de Entrenamiento de surf.
- Las siete imágenes se convirtieron a WebP conservando resolución, se integraron con textos alternativos en español e inglés y se quitaron los JPEG originales de la raíz.
- `service-detail.html`: se renovó la caché de `services.js`; se validaron sintaxis, galerías y rutas.

### Servicios — evitar repetir portada y fondo en las galerías
- `services.js`: las galerías editoriales de servicios excluyen la primera imagen, que ya se usa como portada de tarjeta y fondo de la página. Se aplica a snorkel y catamarán, yoga, coaching, Roca Bruja, fotografía, surfskate y ATV; Clases de surf y Retiros ya tenían galerías específicas sin esa repetición.
- Alojamientos: las miniaturas de acceso conservan la imagen de portada y las galerías de cada alojamiento muestran solo las fotos restantes. Si no quedan fotos distintas, no se genera una galería vacía ni se duplica la portada.
- `index.html`: la tarjeta “Después del surf” ahora usa otra imagen y un texto alternativo propio en español e inglés, en vez de repetir la foto de la tarjeta “Fotos de surf”. El fondo de la sección Servicios también pasa a una foto distinta a la de esa tarjeta; `styles.css` y `styles.optimized.css` quedan sincronizados.
- Se renovaron las cachés de la portada y del detalle de servicios para aplicar los cambios de imágenes y traducciones.
- Se mantienen las fotos disponibles y sus textos alternativos; no se inventaron ni agregaron assets.
- `service-detail.html`: se renovó la versión de caché de `services.js`.
- Validación: sintaxis JavaScript, comprobación de que las galerías no incluyan la primera imagen del conjunto, rutas locales y `git diff --check`.

### Snorkel y catamarán — nueva galería de cuatro fotos
- Se reemplazaron las fotos anteriores por las cuatro imágenes aportadas en `assets/`.
- Se convirtieron a WebP de calidad optimizada y se ubicaron en `assets/img/services/snorkel-catamaran/`; se eliminaron los JPEG originales del directorio raíz y las imágenes antiguas del servicio.
- `services.js`: la galería ahora usa las cuatro imágenes nuevas con textos alternativos en español e inglés.

### Armá tu viaje — Retiros queda como servicio independiente
- `trip-builder.js`: se retiró la tarjeta interna de Retiros del armador; Retiros continúa disponible como portada independiente en la navegación de servicios.

### Armá tu viaje — portada integrada a la navegación de servicios
- `trip-builder.js`: la portada ahora muestra flechas anterior/siguiente conectadas con Surfskate y Retiros, con etiquetas accesibles y bilingües.
- `trip-builder.html` y `trip-builder.css`: se incorporó el logo pequeño de WavePoint, enlazado al inicio, con ajuste responsive.
- Validación: sintaxis JavaScript, enlaces de navegación y actualización de caché.

### Colaboradores — Casa Aura queda fuera de la marquesina y del menú
- `index.html`: se retiró Casa Aura de la marquesina de colaboradores, de sus dos copias para el movimiento continuo, de los menús desktop/móvil y del bloque de enlaces del pie.
- `service-detail.html`: se retiró Casa Aura de los menús desktop/móvil compartidos.
- `services.js`: se conserva Casa Aura únicamente como opción de alojamiento dentro de Estadías y hoteles, junto con sus datos e imágenes.

### Servicios — Armá tu viaje dentro de la navegación de portadas
- `services.js`: la experiencia `trip-builder` ahora forma parte del catálogo que alimenta las flechas anterior/siguiente de las portadas de servicios, ubicada entre Surfskate y Retiros.
- La entrada navega directamente a `trip-builder.html`; no se reintroduce el flujo legacy `pack-ajustable`.
- `service-detail.html`: se actualizó la versión de caché de `services.js`.
- Validación: sintaxis JavaScript, navegación circular y enlaces locales.

### Build your Tamarindo Trip — tarjetas de alojamientos y clases de surf
- La tarjeta `Stay at Hotels` ahora usa `assets/img/stays/casa-maderas/house.webp`, una imagen colorida de Casa de Maderas con piscina.
- La tarjeta `Surf Lessons` conserva su foto actual, pero el punto focal queda alineado arriba para mostrar completa la cabeza de la surfista sin agregar bordes ni cambiar el diseño de la tarjeta.
- La tarjeta `Surfskate Lessons` también alinea el punto focal arriba para conservar visibles las cabezas de ambos instructores en el recorte horizontal.
- Se renovaron las versiones de caché de `trip-builder.css` y `trip-builder.js`.
- Todas las imágenes de las tarjetas del constructor y de la sección Servicios ahora usan `object-fit: contain`: la foto completa permanece visible al cambiar el tamaño de pantalla y se eliminó el zoom hover que podía volver a cortar sujetos.
- Se renovó la caché global de `styles.optimized.css`.

### Hero — retirar rótulos incrustados de Giro 2
- `assets/videoheroxx3.mp4` conserva su resolución 1280×720, duración completa de 27,07 segundos y ausencia de audio.
- Se retiraron únicamente los rótulos incrustados “TAMARINDO” del comienzo y “COSTA RICA” del cierre mediante máscaras temporales localizadas; no se recortó el encuadre ni se modificó el resto del giro.
- Se actualizó la versión de caché de la fuente para evitar que los navegadores mantengan el archivo anterior.

## 2026-10-09
### Dashboard temporal de fotos y limpieza del editor anterior
- Se creó `dashboard.html`, con estilos en `dashboard.css`, lógica en `dashboard.js` y catálogo generado en `dashboard-catalog.js`.
- El dashboard cataloga 90 assets de imagen, permite buscar y filtrar por grupo/formato, seleccionar fotos desde un dispositivo, convertirlos a WebP manteniendo la resolución, descargar el resultado o escribirlo en la ruta exacta del repositorio mediante la File System Access API.
- Cuando el asset original no era WebP, el dashboard genera el destino `.webp` y actualiza automáticamente las referencias locales detectadas en HTML, CSS y JavaScript.
- Se eliminó el editor anterior, su endpoint de autenticación, sus estilos y su sistema de overrides, junto con todas sus referencias en las páginas y en `robots.txt`. El dashboard queda fuera de indexación y no forma parte de la navegación pública.
- Se actualizó `AUDIT.md` para reflejar que el sitio no tiene CMS persistente y que el dashboard es una herramienta local temporal.

### Casa Aura — galería sin repetir la portada
- La primera imagen de la galería interna dejó de repetir `casitas.webp`, que queda únicamente como portada grande.
- La galería ahora muestra `stayandhotels4_resultados.webp`, la foto interior de Casa Aura con cocina y sillones negros. Se confirmó que no pertenece a Casa de Maderas.

## 2026-10-08
### Casa Aura — portada Casitas en mayor calidad
- Se incorporó `assets/img/stays/casa-aura/casitas.webp` desde la foto original `Casitas` de 960×540 px.
- La portada grande de Casa Aura ahora usa esta versión WebP, de 960×540 px y aproximadamente 230 KB, en lugar de la copia anterior de 576×324 px.
- En la primera versión de esta corrección, la imagen grande de la galería usó `casitas.webp`; luego se reemplazó por `stayandhotels4_resultados.webp` para evitar repetir Casitas dentro de la galería.
- El carrusel general de Partners y las otras imágenes de la galería interna mantienen sus archivos actuales.
- Auditoría de imágenes activas: las fotos WebP no superan 500 KB. Las excepciones no fotográficas son PNG de íconos/logos; se conserva el JPG de fallback del hero por compatibilidad con navegadores antiguos.
- Se actualizó la caché CSS a `styles.optimized.css?v=20261009-71`.

### Casa Aura — portada de la página de Partner
- La portada grande (`collab-hero`) de `Enlaces/casa-aura.html` ahora usa `assets/img/services/retreats/retreat-canva-stay-aerial.webp`, la vista aérea elegida.
- El carrusel general de Partners conserva `assets/img/stays/casa-aura/stayandhotels4_resultado.webp`; no se modificó esa foto ni la galería interna de Casa Aura.
- Se actualizó la caché CSS a `styles.optimized.css?v=20261009-70`.

### Hero — no ocultar el fallback si autoplay está bloqueado
- La imagen ya no se oculta con `canplay` —que solo confirma que el archivo se puede preparar— sino con `playing`, que confirma que el navegador realmente está reproduciendo el video.
- Esto conserva el fondo visible en computadoras donde el video carga pero el autoplay, la aceleración gráfica o la política del navegador impiden que arranque.
- Se renovó la caché a `script.js?v=20261009-hero-fallback2`.

### Hero — fallback para navegadores sin reproducción de video
- Si un video emite `error`, se marca como fallido y se retira visualmente para que `home-hero-fallback.jpg` quede visible en vez de quedar una capa negra o vacía.
- El primer video ya no arranca activo desde el HTML: JavaScript lo activa solo después de preparar su fuente, manteniendo la imagen visible mientras carga o si falla.
- Se renovaron las cachés de `styles.optimized.css` y `script.js` para evitar que equipos de escritorio con archivos viejos conserven el fondo vacío.

### Menú móvil — Partners/Colaboradores
- `site-nav.js` ahora mantiene el submenú cerrado al inicializar, lo abre y cierra únicamente desde el botón de flecha y usa `hidden` como estado real de visibilidad.
- El enlace de texto navega a la sección de colaboradores sin abrir el submenú accidentalmente; se detuvo la propagación del toque del botón.
- Se actualizó la versión de caché a `site-nav.js?v=20261009-mobile5` en todas las páginas.

### Hero — nuevo Giro 1 de mayor calidad
- El archivo remoto `assets/hero0.mp4` se identificó visualmente como la versión original del video del surfista colorado que estaba comprimido como Giro 1.
- Se publicó como `assets/videohero1.mp4` en 720×1280, 30 fps, duración completa de 17,4 segundos y sin audio; se eliminó el nombre equivocado `hero0.mp4`.
- En celular el inicio usa ahora este mismo Giro 1, sin alternar videos. Palmeras (`assets/videohero0.mp4`) queda reservado para escritorio y para el video de `Build your trip` en `trip-builder.js`.
- Se eliminó la variante móvil anterior de Palmeras porque ya no corresponde al flujo móvil actual.

### Hero — póster solo como fallback de carga
- `script.js` marca el stack como listo únicamente cuando un video emite `playing`; los errores siguen dejando disponible la imagen de respaldo.
- `styles.css` y `styles.optimized.css` ocultan definitivamente `.hero-video-poster` después de esa señal, evitando que la imagen reaparezca o interrumpa los cambios del carrusel.

### Hero — mapeo de Giros y versión móvil
- `assets/videohero0.mp4` queda como **Giro 0 / Palmeras** para escritorio; `assets/videohero1.mp4` queda como **Giro 1** y `assets/videoheroxx3.mp4` como **Giro 2**.
- En celular se carga exclusivamente `assets/videohero0-mobile.mp4`, una variante completa de Giro 0 en 704×396, 29,97 fps y aproximadamente 2,8 MB, sin audio.
- El original `assets/videohero3x.mp4` se identificó como Giro 2: se rotó 90° para corregir su orientación, se conservó su duración completa de 27 segundos y se publicó como `assets/videoheroxx3.mp4` en 1280×720 y aproximadamente 6,5 MB, sin audio.
- Se eliminaron la referencia móvil anterior de Giro 1 y el original redundante `assets/palmeras.mp4`; no se recortó la duración ni el contenido de los videos.

### Video Palmeras — versión web liviana
- Se procesó el original de Palmeras de 2560×1440 y 39 MB.
- Se reemplazó `assets/videohero0.mp4` por la versión de Palmeras en H.264, 1600×900, 29,97 fps y sin pista de audio.
- El archivo activo pesa aproximadamente 5,7 MB: reducción cercana al 85% respecto de `palmeras.mp4`, manteniendo el encuadre 16:9 y una calidad alta para fondo de página.

### Fondo compuesto de Servicios — nueva capa superior
- Se agregó una cuarta foto de surf encima de la composición fija para cubrir el exceso de cielo gris en el inicio de la sección.
- La nueva capa usa `assets/img/services/surf-photography/optimized/surfer-riding-wave-tamarindo-costa-rica-05.webp`, optimizada a 2304×1728 y 391 KB, con una máscara suave y superposición parcial para conservar la fusión visual.
- La nueva capa quedó con 64% de opacidad y se reforzó de forma moderada la sombra de los títulos y subtítulos para mantener la lectura sin apagar la foto.
- La descripción de Servicios recibe una sombra adicional específica, especialmente para que “ask us to check availability” se lea sobre la espuma blanca.

### Menú móvil — abrir colaboradores
- `site-nav.js`: el nombre “Colaboradores” y la flecha ahora abren y cierran el submenú en celular; antes el enlace cerraba el panel sin mostrar sus opciones.
- Se agregó `aria-expanded` y se actualizó la versión de caché del script en las páginas que usan la navegación compartida.

### Auditoría y optimización de imágenes
- Las fotos activas del sitio se convirtieron a WebP con compresión de alta calidad; las imágenes sobredimensionadas se limitaron a un máximo de 2560 px en su lado mayor sin cambiar proporciones, recortes ni estilos del front-end.
- `index.html`, `guia-playas.html`, `services.js`, `script.js`, `trip-builder.js`, `trip-builder.css`, las páginas de `Enlaces/` y las hojas de estilo actualizan sus referencias a las variantes WebP. La imagen social de Open Graph/Twitter también usa WebP.
- Se creó `cosas al pedo/` con los assets sin referencias activas detectables para revisión manual; se conservaron allí los originales reemplazados como respaldo. Se dejaron fuera los íconos meteorológicos cargados dinámicamente y los assets SEO necesarios.
- Validación: referencias locales, sintaxis JavaScript, `git diff --check` y auditoría de dimensiones/pesos.

## 2026-10-08
### Home móvil — ajustar scroll inicial
- `script.js`: al abrir la home en un viewport de hasta 640 px, iniciar el scroll 12 px más abajo (contenido visible más arriba); el enlace Inicio de ambos menús reutiliza el mismo destino. No desplaza bloques ni modifica escritorio.
- Escritorio (>980 px): `.hero-grid` pasa de 2 a 14 px de desplazamiento vertical (12 px más abajo); tablet y celular conservan su regla propia. `styles.optimized.css` sincronizado.
- `index.html`: renovar la versión de caché de JavaScript.

### Videos — eliminar audio y reducir peso para escritorio y móvil
- Los cinco MP4 de `assets/` quedan sin pista de audio y en H.264 con `faststart`; se mantienen sus nombres y proporciones para compatibilidad.
- Reducidas las resoluciones según el uso: fondo compartido del hero/armador a 1600×900, video móvil de 720×1280 a 540×960, video panorámico de escritorio a 1600×900 y demo a 1280×720; el asset vertical legado conserva 480×854.
- Acortados solo los clips de fondo que se alternan/recorren antes de su final: móvil a 12 s y tercer video de escritorio a 8 s. Se mantienen completos los clips compartidos con el armador y el video de demo.
- `index.html`, `trip-builder.js` y `trip-builder.html`: versiones de URL actualizadas para evitar servir recursos antiguos desde caché.
- Validado: los cinco MP4 decodifican completos y no tienen pistas de audio; `node --check` en los scripts pertinentes y `git diff --check` terminan sin errores.
- Peso conjunto: 31.50 MB → 8.63 MB (reducción del 72.61 %).

### Hero móvil — reducir trabajo de decodificación
- El teléfono usa ahora `assets/videohero1-mobile.mp4` (360×640, 24 fps, sin audio, GOP de 2 s y ~0.68 MB); escritorio conserva `assets/videohero1.mp4` para no perder definición.
- `script.js` elige la fuente móvil solo en dispositivos táctiles o viewport de hasta 640 px. En esos mismos casos, `styles.css` y `styles.optimized.css` quitan el filtro y la escala CSS del video para evitar postprocesado por cuadro.
- `index.html`: renovadas las versiones de caché de CSS y JavaScript. Validación: archivo decodificado completo, fotogramas revisados y fuente móvil reproducida en el navegador de prueba con dimensiones esperadas.

### Hero móvil — contener el texto del CTA secundario
- `styles.css` y `styles.optimized.css`: permitir que “Guía de playas” se ajuste dentro de su botón en español, sin modificar el layout, el gadget ni los demás elementos.
- `index.html`: actualizar la versión de caché de CSS.
### Retiros — retirar imagen grande del detalle
- `services.js`: retirar únicamente la imagen aérea grande debajo del encabezado “¿Qué son los retiros?” en el detalle de Retiros.
- `index.html`: conservar la imagen original de la tarjeta de Retiros en la portada.
- `styles.css` y `styles.optimized.css`: expandir el bloque editorial a una columna sin dejar un hueco vacío.
- `retiros.pdf`: restaurado sin modificaciones.

### Fallback inteligente del hero en dispositivos con movimiento o datos reducidos
- `index.html`: agregar una capa de poster explícita y marcar los videos con `data-fallback="poster"`; actualizar la versión de caché de CSS.
- `styles.css` y `styles.optimized.css`: mantener el poster visible hasta que el video activo se revele, ocultar videos no activos y usar el poster para `prefers-reduced-motion` y `prefers-reduced-data`; en móvil el poster conserva el mismo encuadre del hero.
- Validación: HTML/CSS revisados, sin cambios de JavaScript ni de los archivos de video.

### Retiros — centrar el título y ampliar el logo
- `styles.css` y `styles.optimized.css`: centrar verticalmente el título sobre la imagen y ampliar aproximadamente un 10% el logo, manteniendo reglas propias para móvil y el respeto a movimiento reducido.
- `index.html`: renovar la versión de caché CSS. Verificado en escritorio y celular, sin desbordamiento horizontal.

### Hero — reducir logo en escritorio
- `styles.css` y `styles.optimized.css`: reducir un 5% el ancho del logo del hero solo a partir de 981 px, para darle un poco más de aire bajo el header; tablet y móvil conservan su tamaño.
- `index.html`: renovar la versión de caché. Validado en navegador en escritorio y móvil; sin desbordamiento horizontal.
- Hero móvil: subir 12 px el contenido completo (logo, acciones y widget del clima) para recuperar espacio visible en celular; no cambia el tamaño del logo.

### Portada — retirar piloto y separar el hero del header
- Se elimina `piloto.html`, portada duplicada sin enlaces activos; `index.html` queda como portada única.
- `styles.css` y `styles.optimized.css`: retirar reglas de compactación residual que no correspondían al diseño aprobado. Se revirtió el espacio extra del hero en tablet y móvil para conservar la posición original del contenido y evitar que el gadget de clima quede parcialmente fuera de pantalla.
- Validado en navegador a 640 × 480 y 390 × 844: el espaciado vuelve al valor responsive previo y no hay desbordamiento horizontal.

## 2026-10-07
### Surf coaching — reparar referencias de la imagen movida
- `index.html`, `piloto.html`, `services.js` y `trip-builder.js`: apuntar a la nueva ruta `assets/img/services/surf-photography/surf-coaching-session.jpg` en las tarjetas, el detalle y el armador de viaje.
- La ruta anterior ya no existe desde que se movió el archivo; se actualizan todos sus usos para que no fallen las imágenes de Surf Coaching.
- Verificado: no quedan referencias a la ruta anterior y la foto carga en el armador y en la primera imagen de la galería de detalle.

## 2026-10-07
### Servicios — fondo fotográfico completo sin parallax en escritorio
- `index.html`, `piloto.html`, `styles.css` y `styles.optimized.css`: reemplazar el fondo único limitado a la ventana por tres franjas fotográficas locales, suavemente encadenadas a lo largo de toda la sección Servicios.
- Se reutilizan imágenes optimizadas de clases, surf y fotografía al atardecer con una capa oscura para sostener el contraste. En escritorio el fondo sigue dentro de la sección y no usa `position: fixed`; se conserva el comportamiento móvil existente.
- Actualizada la versión de caché CSS de ambas portadas. Validado en navegador a 1440, 768, 430, 390 y 320 px: escritorio cubre los 3052 px de la sección con `position: absolute`, móviles conservan el fondo fijo existente, sin overflow horizontal y sin animaciones con movimiento reducido. `git diff --check` limpio; no se ejecutó `node --check` porque Node.js no está disponible en el entorno.

## 2026-10-07
### Servicios — logo WavePoint encima del título de Retiros
- `index.html`, `piloto.html`, `styles.css` y `styles.optimized.css`: bajar un poco el título de la tarjeta de retiros y agregar un logo dinámico WavePoint encima del texto sin afectar el resto del catálogo.
- Validación: revisión del bloque en la portada y control de `git diff --check` para evitar regresiones de formato.

## 2026-10-07
### Servicios — recuperar nitidez del fondo sin parallax
- `styles.css` y `styles.optimized.css`: limitar la capa fotográfica de Servicios a la altura visible de la ventana y alinearla arriba; la imagen ya no se amplía para cubrir los 3052 px de la sección y el gradiente existente continúa debajo.
- Se conserva el parallax desactivado en escritorio y se actualiza la caché CSS de `index.html` y `piloto.html`.
- Validado en navegador local: 1440 px muestra una capa de 900 px de alto sin ampliar la imagen fuente; a 390 px se conserva la capa fija.

## 2026-10-07
### Estadías — encabezado y cuatro fotos en una fila
- `styles.css` y `styles.optimized.css`: poner el encabezado de “ACCOMMODATIONS IN TAMARINDO” encima de las cuatro imágenes y distribuirlas en una fila uniforme a todo el ancho disponible en escritorio.
- En tablet y celular se conservan dos columnas. Renovada la caché de estilos de `service-detail.html`.
- Validado en navegador local: escritorio 1440 px muestra cuatro imágenes iguales en una fila; tablet 768 px y móvil 390 px conservan dos columnas.

## 2026-10-07
### Catálogo — separar navegación de ampliación de fotos
- `script.js`: excluir del modal las imágenes que ya están dentro de enlaces; las tarjetas de servicio navegan solo al detalle y las fotos de galerías mantienen la ampliación.
- Validación: comprobar rol, foco y cursor de las fotos del catálogo, y probar la navegación al detalle desde una tarjeta.

## 2026-10-07
### Prueba — desactivar parallax en escritorio
- `styles.css` y `styles.optimized.css`: en pantallas mayores de 1024 px, las capas `.px-bg` dejan de estar fijas al viewport y quedan dentro de su sección.
- Se conservan móviles, tablets y el hero. Renovada la caché CSS de `index.html` y `piloto.html` para facilitar la prueba.
- Validado en navegador local: a 1440 px `.px-bg` usa `position: absolute`; a 390 px conserva `position: fixed`.

## 2026-10-07
### Clima — restaurar gadget clásico
- `index.html` y `piloto.html`: volver a la tarjeta clásica de clima que estaba antes del widget 3D, manteniendo temperatura, condición, viento, oleaje, hora local y aviso nocturno.
- Desconectados los recursos exclusivos del widget 3D; `script.js` vuelve a cargar los datos para la tarjeta clásica y se conservan los estilos responsive existentes.

## 2026-10-07
### Servicios — título, descripción y fotos en orden editorial
- En los servicios estándar, excepto Clases de surf, el contenido ahora queda en una secuencia vertical clara: título completo, descripción con contraste reforzado y galería debajo.
- Las galerías estándar ocupan todo el ancho disponible, usan fotos más grandes y mantienen un tratamiento específico para escritorio, tablet y celular.
- Clases de surf conserva su composición y estilos propios. Alojamiento y Retiros también pasan a priorizar copy antes de fotos dentro de sus plantillas especiales.
- Actualizadas las cachés de `service-detail.html` para CSS y `services.js`.

### Cobertura de copy antes de fotos en plantillas especiales
- Alojamiento ahora muestra nombre, resumen y contenido antes de la galería de cada opción.
- Retiros presenta el copy principal y el texto de cada experiencia antes de sus fotos, con paneles de mejor contraste.

### Galerías con tamaños y encuadres consistentes
- Las galerías estándar usan ahora un mosaico de cuatro fotos de proporciones equivalentes, en lugar de una imagen dominante y otras más pequeñas.
- Las fotos mantienen `object-fit: cover` y encuadre centrado en escritorio, tablet y celular para evitar sujetos corridos o bordes sin contenido.
- Alojamiento conserva sus mosaicos cuadrados y Retiros centra sus fotos; también se reforzó el contraste del texto principal de Retiros.

### Formularios con sistema visual común
- Todos los formularios de servicios comparten ahora la misma piel oscura, bordes turquesa, encabezado, campos y botón de envío que Estadías y Clases de surf.
- Se redujo la separación entre la galería y el formulario en tablet y celular para evitar el espacio vacío innecesario.

### Yoga — galería sin repetición del fondo
- La foto de la mujer rubia meditando queda únicamente como fondo del hero y del detalle.
- La galería interna de Yoga ahora muestra solo las otras dos imágenes, en un mosaico de dos fotos equilibradas.

### Servicios — logo flotante y separación de formulario
- Se agregó nuevamente el logo flotante WavePoint a todas las páginas de detalle de servicios, con enlace a Inicio y posición segura sobre WhatsApp/chat.
- Se verificó la separación real entre galería y formulario en Yoga, Surf coaching, Clases de surf y Estadías; el margen queda en cero y no en los márgenes antiguos mayores.
- El logo usa ahora exactamente el componente transparente `collab-floating-brand` de la Guía turística y las páginas de Colaboradores, incluyendo sus ondas y posición responsive; se eliminó la caja custom anterior.

### Tours en cuatriciclo — galería ATV
- La galería de ATV ahora combina tres fotos distintas: la imagen original del sendero y las dos fotos nuevas de playa y convoy.
- En escritorio, tablet y celular las tres fotos se ordenan como dos arriba y una panorámica abajo, sin dejar una celda vacía.

### Corrección de contenido visual — tarjeta “Incluye”
- Se eliminó la tarjeta visual “Incluye” de las secciones estándar; sus datos originales y las preguntas específicas de cada formulario permanecen intactos en `services.js`.
- Las imágenes fueron descargadas desde resultados de Tour Guanacaste y guardadas localmente como WebP para evitar dependencias externas en producción.

### Detalles de servicios — hero único y formulario sin huecos
- Los servicios estándar ya no repiten en el body el título, la descripción, la coordinación ni los bloques editoriales que ya aparecen en el hero.
- El body queda reducido a la galería y el formulario, en ese orden y sin espacio vacío entre ambos.
- Las galerías dejaron de usar alturas fijas que reservaban una zona invisible debajo de las imágenes; ahora su contenedor termina exactamente con la última fila de fotos.
- Se agregó una separación breve y consistente, con un pequeño detalle luminoso inspirado en una ola para unir visualmente las fotos con la solicitud sin dejar un hueco muerto.
- El hero vuelve a mostrar la descripción completa y se restauraron los textos de apoyo, coordinación, destacados e incluidos sin repetir la descripción en las plantillas especiales.
- El panel del hero se amplió hasta el mismo ancho útil de la galería inferior, conservando márgenes laterales seguros en escritorio y tablet.

## 2026-10-07
### Preloader real y navegación de logos
- Agregado en la portada un preloader sincronizado con el primer video del hero, el gadget meteorológico, el logo y dos fondos críticos; la barra refleja tareas reales y cuenta con fallback para no bloquear la página si falla un recurso externo.
- Incluidos logo WavePoint animado, línea tipo ola, barra de progreso, cierre suave y soporte para `prefers-reduced-motion`, en escritorio y móvil.
- El logo principal del hero conserva su interacción de cuenta regresiva. Los dos logos secundarios de servicios en `index.html` y `piloto.html` ahora enlazan a la página principal y mantienen activada su animación visual.
- Validaciones previstas: sintaxis JavaScript, rutas, idiomas ES/EN, responsive 320/375/430/768/1280 px, accesibilidad, ausencia de overflow y prueba pública.

## 2026-10-07
### Gadget del clima más compacto en celular
- Reducido el ancho, padding, temperatura y tarjetas internas solo hasta 640px.
- Ajuste adicional para pantallas de hasta 400px.
- Escritorio y tablet permanecen sin cambios.
- CSS del gadget actualizado a `20261007-8`.

## 2026-10-07
### Alinear paneles de la guía turística
- Eliminado el tope de 920 px en el encabezado inicial y los paneles de categoría para alinearlos con los cuatro accesos y las tarjetas de contenido.
- Sin cambios en el contenido ni en la distribución responsive; actualizado el CSS optimizado y la versión de caché de `guia-playas.html`.
- Validaciones: `git diff --check`, verificación de rutas de imágenes y revisión de reglas de ancho en escritorio y móvil.

### Controles flotantes y parallax móvil de la guía
- Agregado el logo flotante de WavePoint a `guia-playas.html`, con enlace de regreso al inicio y posición compatible con WhatsApp y el asistente.
- Reforzado el botón de WhatsApp en móvil y ampliado el fondo fijo de la guía para mantener el parallax sin bordes visibles durante el desplazamiento.
- Actualizada la versión de caché de la guía a `20261007-49`.

### Fotos más grandes en las tarjetas de la guía
- Aumentada la proporción de la columna de imagen a poco más de la mitad de cada tarjeta en escritorio, aprovechando mejor el espacio disponible.
- En móvil se conserva el apilado de imagen a ancho completo antes del texto.

### Títulos completos en escritorio
- Los títulos de las tarjetas ya no se cortan en medio de una palabra: se ajustan naturalmente en una o dos líneas según el espacio disponible.
- Reducido levemente el tamaño máximo del título para mantener la foto grande y mejorar la lectura del contenido completo.

### Tarjetas de guía más compactas
- Recuperada una proporción más equilibrada entre foto y texto para evitar tarjetas excesivamente altas.
- Reducidos de forma fluida el padding, el cuerpo de texto y las listas en función del ancho disponible; en móvil se conserva el apilado.

### Enlace de información más compacto
- Reducido el tamaño y el padding del enlace final de cada tarjeta para que entre en una sola línea sin agrandar el bloque.

### Botón de información de servicios más compacto
- Corregido el selector de las tarjetas de servicios de la portada: “Más información →” ahora usa tipografía compacta, altura reducida y una sola línea en escritorio y móvil.
- Actualizada la caché de la portada para que el cambio sea visible sin depender de estilos antiguos.

### Parallax móvil reactivado
- Reactivadas las capas fotográficas fijas en touch/mobile para que las imágenes acompañen el desplazamiento con efecto parallax.
- Eliminado el override que convertía `.px-bg` en una capa absoluta estática y actualizada la caché de las páginas principales.

## 2026-10-07
### Imágenes ampliables en todo el sitio
- El modal de imágenes ahora incluye Retiros, galerías de servicios, alojamientos, guía, colaboradores y tarjetas visuales.
- Las fotos reciben foco de teclado, `Enter`/`Space` para abrir y `Escape` para cerrar.
- JavaScript actualizado a `20261007-22` y CSS a `20261007-46`.

## 2026-10-07
### Visibilidad final de formularios
- Corregida la regla heredada que ocultaba los formularios unificados.
- El panel queda visible debajo del contenido en todas las páginas de servicio.
- CSS cacheado actualizado a `20261007-45`.

## 2026-10-07
### Formularios — formato limpio unificado
- Todos los formularios ahora siguen el formato limpio de Clases de surf.
- Eliminada la barra genérica repetida de “Consulta rápida / Encontramos la opción para vos”.
- Conservadas todas las preguntas, validaciones, traducciones y mensajes de WhatsApp.
- JavaScript cacheado actualizado a `20261007-18`.

## 2026-10-07
### Estandarización de secciones de servicios
- Aplicada una plantilla editorial abierta al resto de servicios: texto legible, galería amplia y fotos ampliables.
- Unificado el formulario debajo del contenido, con el mismo panel visual de Clases de surf.
- Eliminados marcos y scroll interno heredados en las páginas de servicio.
- Manteniendo la grilla específica de Estadías y hoteles y la experiencia editorial especial de Retiros.
- CSS cacheado actualizado a `20261007-44`.

## 2026-10-07
### Clases de surf — limpiar encabezados del formulario
- Quitadas las etiquetas “Consulta rápida” y “Encontramos la opción para vos” de Clases de surf.
- El resto de los formularios conserva sus encabezados originales.
- JavaScript cacheado actualizado a `20261007-17`.

## 2026-10-07
### Clases de surf — quitar scroll interno
- Eliminado el `max-height` heredado del contenedor de la primera sección.
- El contenido y las fotos ahora fluyen con la página, sin marco ni desplazamiento interno.
- CSS cacheado actualizado a `20261007-43`.

## 2026-10-07
### Mensajes de WhatsApp — pulido de redacción
- “Primera vez” ahora se expresa como “la primera vez que hago surf”.
- Las respuestas de tabla se convierten en frases naturales según singular o plural.
- Se conserva la capitalización de ciudad y país.
- JavaScript cacheado actualizado a `20261007-16`.

## 2026-10-07
### Mensajes de WhatsApp naturales
- Los formularios ahora arman mensajes conversacionales, como si la persona escribiera directamente a WavePoint.
- El texto cambia a primera persona singular o plural según la cantidad de personas.
- Clases de surf genera frases naturales para nombre, nivel, objetivo, procedencia, horario y tabla.
- Aplicado el mismo criterio al resto de los formularios, con versión en español e inglés.
- JavaScript cacheado actualizado a `20261007-15`.

## 2026-10-07
### Formularios — punto blanco compatible en el selector
- Corregido el indicador seleccionado para dibujarlo dentro del input real.
- Ahora usa un fondo radial blanco compatible con navegadores móviles y de escritorio.
- CSS cacheado actualizado a `20261007-42`.

## 2026-10-07
### Formularios — indicador circular seleccionado
- Restaurado el círculo selector junto a cada opción.
- El estado seleccionado ahora muestra un punto blanco centrado.
- Eliminado cualquier indicador desplazado hacia el otro lado.
- CSS cacheado actualizado a `20261007-41`.

## 2026-10-07
### Formularios — limpiar indicadores duplicados
- Ocultado el bloque “Tu progreso” en todos los formularios.
- Eliminado el círculo blanco adicional de las opciones seleccionables.
- Se conserva únicamente el control de selección propio de cada opción.
- CSS cacheado actualizado a `20261007-40`.

## 2026-10-07
### Formularios — mejorar contraste del ítem seleccionado
- El ítem seleccionado ahora usa fondo teal fuerte, borde claro y texto blanco.
- Aplicado tanto a opciones de radio como a tarjetas seleccionables.
- CSS cacheado actualizado a `20261007-39`.

## 2026-10-07
### Clases de surf — barra del formulario sincronizada
- Igualada la barra interna del formulario con Estadías y hoteles: degradado, padding, borde y posición.
- CSS cacheado actualizado a `20261007-38`.

## 2026-10-07
### Clases de surf — formulario igual a Estadías y hoteles
- Aplicado el mismo panel teal oscuro de Estadías y hoteles.
- Copiados el contraste, bordes, progreso, campos, opciones y botones del formulario existente.
- El formulario queda debajo del contenido y el botón de cierre lateral permanece oculto.
- CSS cacheado actualizado a `20261007-37`.

## 2026-10-07
### Clases de surf — eliminar cajas heredadas
- Eliminado el cuadro grande heredado del layout genérico.
- Eliminado el fondo, borde y sombra innecesarios del bloque de consulta rápida.
- La composición queda abierta, siguiendo la estructura de Estadías y hoteles.
- El formulario permanece debajo como único bloque funcional contenido.
- CSS cacheado actualizado a `20261007-36`.

## 2026-10-07
### Corrección definitiva del logo de WhatsApp
- Unificado el SVG de WhatsApp en todas las páginas con la versión correcta del header de la home.
- Corregida la variante deformada que había quedado en `service-detail.html` y `Enlaces/casa-aura.html`.
- Fijada la proporción cuadrada del ícono en el header y en el botón flotante.
- CSS cacheado actualizado a `20261007-35`.
- Validación: todas las variantes HTML usan ahora el mismo SVG, `node --check` y `git diff --check`.

## 2026-10-07
### Clases de surf — composición corregida
- Rehecha la sección principal con una composición abierta inspirada en Estadías y hoteles.
- Galería integrada al bloque introductorio, con tres fotos grandes y ampliables.
- Formulario ancho debajo del contenido, sin panel lateral ni modal.
- Header y logo de WhatsApp no fueron modificados.
- Versiones de página: `services.js?v=20261007-14` y `styles.optimized.css?v=20261007-34`.
- Validación: `node --check services.js`, `node --check script.js` y `git diff --check`.

## 2026-10-07
### Clases de surf — primera página rediseñada
- Galería de tres fotos más grande, con recorte editorial y ampliación al tocar o hacer click.
- Texto principal más ancho, legible y con mayor contraste.
- Formulario completo movido debajo del contenido, siguiendo la lógica visual de Estadías y hoteles.
- El CTA de consulta ahora desplaza suavemente hacia el formulario en lugar de abrir una ventana aparte.
- No se quitó contenido ni ninguna foto.
- JavaScript de servicios actualizado a `20261007-13`; CSS optimizado a `20261007-33`.
- Validación: `node --check script.js`, `node --check services.js` y `git diff --check`.

## 2026-10-07
### Restaurar fondo de opciones de alojamiento
- La página de opciones de alojamiento vuelve a mostrar el fondo fotográfico asociado al servicio.
- El contenido conserva su legibilidad con una capa clara translúcida y las tarjetas mantienen su fondo propio.
- En móvil el fondo sigue usando `background-attachment: scroll` para evitar tirones.
- Corregida la sintaxis de atributos `loading` y `decoding` en imágenes HTML.
- CSS cacheado actualizado a `20261007-32`.
- Validación: `git diff --check`.

## 2026-10-07
### Inicialización más liviana del JavaScript
- `script.js`: no ejecutar el clima legacy cuando está presente el widget 3D, evitando dos cargas y dos actualizaciones para el mismo gadget.
- Diferir hasta el primer momento idle los modales, ticker, reveals, seguimiento de tarjetas y demás interacciones secundarias.
- Mantener inmediatos el video adaptativo, navegación móvil, traducciones, logo y estado esencial de cámaras.
- No se eliminan efectos: solo se inicializan después del primer render para mejorar fluidez.
- Páginas HTML: actualizar JavaScript a `20261007-21`.
- Validación: `node --check script.js` y `git diff --check`.

## 2026-10-07
### Evitar la descarga doble de video en móviles
- `index.html` y `piloto.html`: `videohero0.mp4` deja de tener `src` directo y pasa a `data-src`, por lo que el navegador no lo descarga antes de que JavaScript seleccione el video móvil.
- En celular se descarga únicamente `videohero1.mp4`; en escritorio JavaScript sigue cargando el carrusel completo cuando corresponde.
- Validación: marcado HTML revisado y `git diff --check`.

## 2026-10-07
### Carga de imágenes más eficiente
- Todas las imágenes fuera de logos y elementos de identidad reciben `loading="lazy"` y `decoding="async"` para no bloquear el primer render.
- Se conserva la carga prioritaria de logos y del arte principal del hero.
- Aplicado en inicio, piloto, guía, trip builder, service detail y páginas de colaboradores.
- Validación: no quedan imágenes de contenido sin `loading` y `git diff --check`.

## 2026-10-07
### Videohero1 como fondo móvil
- `script.js`: el único video reproducido en celulares y tablets táctiles pasa a ser `videohero1.mp4`, en loop continuo.
- Escritorio y tablet grande conservan el carrusel completo con todos los videos.
- Páginas HTML: actualizar JavaScript a `20261007-20`.
- Validación: `node --check script.js` y `git diff --check`.

## 2026-10-07
### Un solo video en loop para celulares
- `script.js`: en dispositivos táctiles y pantallas pequeñas se reproduce únicamente `videohero0.mp4`, en loop, sin alternar entre los tres videos del hero.
- Los videos secundarios quedan pausados y ocultos en mobile; escritorio conserva el carrusel de videos.
- `styles.css` y `styles.optimized.css`: mostrar solo el video activo en mobile y mantener el fondo del hero con `background-attachment: scroll`.
- Páginas HTML: actualizar JavaScript a `20261007-19`.
- Validación: `node --check script.js` y `git diff --check`.

## 2026-10-07
### Hero móvil más fluido y gadget climático legible
- `script.js`: en celulares y tablets táctiles no se cargan ni reproducen los videos del hero; se usa la imagen fija de fondo para evitar tirones, consumo innecesario y problemas durante el scroll.
- `styles.css` y `styles.optimized.css`: ocultar visualmente la pila de video y asegurar `background-attachment: scroll` en touch/mobile.
- `weather-widget-3d.css`: reducir en mobile la intensidad del vidrio a 28%/20%, conservar blur y detener la flotación 3D del gadget para priorizar fluidez.
- Páginas HTML: actualizar JavaScript a `20261007-18` y CSS del widget a `20261007-7`.
- Validación: `node --check script.js` y `git diff --check`.

## 2026-10-07
### Corrección del vidrio visible en el gadget climático
- `weather-widget-3d.css`: reducir las tres capas traseras del widget 3D de aproximadamente 65% a 22%/15%/9% de mezcla, y bajar el fondo interno a 36%/27%.
- Mantener el color, blur y saturación del clima, pero permitir que la imagen del hero se vea claramente a través del gadget.
- Páginas principales: actualizar la caché de `weather-widget-3d.css` a `20261007-6`.
- Validación: estilos computados inspeccionados en producción, `git diff --check`.

## 2026-10-07
### Actualización consciente por cinco toques del logo
- `script.js`: reemplazar la cuenta regresiva automática por un gesto de cinco toques sobre el logo principal, inspirado en la activación de opciones de desarrollador de Android.
- Cada toque descuenta uno, muestra brevemente el número restante (`4 → 3 → 2 → 1 → 0`) y el indicador desaparece enseguida.
- La secuencia se reinicia si pasan tres segundos entre toques; no se actualiza con un solo toque accidental.
- `styles.css` y `styles.optimized.css`: mover el indicador flotante al lado izquierdo del logo y darle una animación breve de entrada/salida.
- Páginas HTML: actualizar CSS a `20261007-31` y JavaScript a `20261007-17`.
- Validación: `node --check script.js` y `git diff --check`.

## 2026-10-07
### Atajo de actualización desde el logo
- `script.js`: al tocar o activar con teclado el logo principal comienza una cuenta regresiva visible `5 → 4 → 3 → 2 → 1 → 0` y luego recarga la página con un parámetro único para solicitar la versión más reciente.
- La cuenta reinicia el ciclo si se vuelve a tocar el logo antes de terminar.
- Se eliminan las cachés de la Cache API cuando el navegador las expone; la caché HTTP del navegador no se puede borrar directamente desde JavaScript.
- `styles.css` y `styles.optimized.css`: añadir el numerito discreto, efecto de pulso y soporte para reducción de movimiento.
- Páginas HTML: actualizar CSS a `20261007-30` y JavaScript a `20261007-16`.
- Validación: `node --check script.js` y `git diff --check`.

## 2026-10-07
### Gadget climático con efecto vidrio translúcido
- `styles.css` y `styles.optimized.css`: reducir la opacidad del fondo del gadget para que la imagen del hero se perciba detrás, manteniendo contraste, blur, saturación y legibilidad.
- Añadir reflejos turquesa/dorados sutiles, borde luminoso y capas internas semitransparentes.
- Páginas HTML: actualizar la versión cacheada del CSS a `20261007-29`.
- Validación: `git diff --check`.

## 2026-10-07
### Acciones independientes en las tarjetas de guía y cámaras
- `index.html` y `piloto.html`: convertir las dos tarjetas grandes en contenedores con acción principal en el área libre y enlaces internos independientes, sin cambiar los textos visibles.
- “Explorar guía” y “Guía local”: enlazan a la guía turística.
- “Aliados locales”: enlaza a Partners (`#aliados`).
- “Ver cámaras en vivo”, “Cámaras reales” y “Condiciones rápidas”: enlazan a cámaras (`#camaras`).
- `script.js`: navegar desde el área libre de cada tarjeta sin interferir con sus enlaces internos.
- CSS: preservar el diseño original y añadir estados de foco/hover a los enlaces internos.
- Páginas HTML: actualizar la versión cacheada del CSS a `20261007-28`.
- Validación: `node --check` sobre los scripts globales y `git diff --check`.

## 2026-10-07
### CTA de viaje y retiros con cinta destacada
- `styles.css` y `styles.optimized.css`: aplicar a los enlaces de “Armar tu viaje por Tamarindo” y “Descubrí los retiros” el mismo tratamiento visual de cinta rasgada que usan los botones “More info”, con tipografía grande, flecha y estados hover/focus.
- Mantener el botón principal del hero separado de esta variante.
- Páginas HTML: actualizar la versión cacheada del CSS a `20261007-27`.
- Validación: `node --check` sobre los scripts globales y `git diff --check`.

## 2026-10-07
### Carrusel de aliados más ancho
- `styles.css` y `styles.optimized.css`: ampliar el viewport del carrusel en pantallas mayores a móvil para alinearlo con los márgenes de las secciones fotográficas inferiores, sin extenderlo hasta el borde de la pantalla.
- Mantener el ancho actual en móvil.
- Páginas HTML: actualizar la versión cacheada del CSS a `20261007-26`.
- Validación: `node --check` sobre los scripts globales y `git diff --check`.

## 2026-10-07
### Hero móvil más compacto
- `styles.css` y `styles.optimized.css`: reducir únicamente en móvil/tablet el espacio superior del hero para acercar el logo al borde superior y compactar levemente el gadget climático en encabezado, cuerpo, ícono y filas.
- Mantener sin cambios el tamaño y espaciado del gadget en escritorio.
- Páginas HTML: actualizar la versión cacheada del CSS a `20261007-25`.
- Validación: `node --check` sobre los scripts globales y `git diff --check`.

## 2026-10-07
### Corrección del parallax fijo en dispositivos táctiles
- `styles.css` y `styles.optimized.css`: convertir las capas `.px-bg` de `position: fixed` a `position: absolute` en touch/tablet y mantener `background-attachment: scroll` para evitar repaints desfasados que dibujan franjas al arrastrar lentamente.
- Páginas HTML: actualizar la versión cacheada del CSS a `20261007-24`.
- Validación: `node --check` sobre los scripts globales y `git diff --check`.

## 2026-10-07
### Invalidación de caché del fix de overscroll
- Páginas HTML del sitio: actualizar la versión de `styles.optimized.css` para que Vercel y los navegadores carguen las reglas nuevas de fondo raíz y overscroll, en lugar de conservar la copia anterior.
- Validación: confirmar que no queden referencias `20261007-22`, ejecutar `node --check` sobre los scripts globales y `git diff --check`.

## 2026-10-07
### Refuerzo contra el rebote visual táctil
- `styles.css` y `styles.optimized.css`: aplicar `overscroll-behavior: none` al documento raíz y al cuerpo, fijar la altura del lienzo `html`, establecer el esquema oscuro del viewport y mantener un fondo oscuro sólido para evitar franjas blancas arriba o abajo en Chromebook, tablets y escritorio.
- Validación: `node --check` sobre los scripts globales y `git diff --check`.

## 2026-10-07
### Corrección del rebote blanco al hacer overscroll
- `styles.css` y `styles.optimized.css`: dar al lienzo `html` el mismo fondo oscuro del sitio, asegurar la altura mínima del `body` y limitar el overscroll vertical para evitar que aparezca el fondo blanco al arrastrar más allá del inicio o final, manteniendo el scroll normal.
- Validación: `node --check` sobre los scripts globales y `git diff --check`.

## 2026-10-07
### Ajuste visual del menú de colaboradores
- `styles.css` y `styles.optimized.css`: hacer que el cuadro desktop se adapte al contenido, reducir el espaciado y centrar los nombres; aplicar el mismo centrado y espaciado compacto al submenú móvil.
- Validación: `node --check` sobre los scripts globales y `git diff --check`.

## 2026-10-07
### Nombres limpios en el menú de colaboradores
- `index.html`: quitar las ubicaciones redundantes del menú de Partners/Colaboradores en desktop y móvil, dejando únicamente el nombre de cada lugar.
- Validación: confirmar que ambos submenús no contienen Tamarindo, Palm Beach, Casitas ni Langosta; ejecutar `git diff --check` y las comprobaciones de sintaxis JavaScript.

## 2026-10-07
### Accesos globales en subpáginas
- `service-detail.html`: mostrar los íconos de WhatsApp e Instagram en la navegación, sumar el botón flotante de WhatsApp y cargar el bot WavePoint mediante `script.js`.
- Confirmado visualmente en el detalle de Clases de surf: ambos íconos aparecen en desktop y el launcher del bot queda disponible.

## 2026-10-07
### Unificación visual de detalles de servicios
- `styles.css` y `styles.optimized.css`: extender a los detalles de surf, aventura, yoga, snorkeling, fotografía, surfskate y retiros el tratamiento editorial de Stays & Hotels: paneles claros con vidrio, bordes, galerías con tarjetas, bloques de incluidos y mejor contraste.
- Mantener intactos las preguntas, el progreso, la validación y el flujo de solicitudes a WhatsApp del formulario compartido.
- Validación: revisar una página de servicio no residencial en escritorio y comprobar el comportamiento responsive en los breakpoints existentes.

## 2026-10-07
### Integración de Casa Aura como colaborador
- Crear `Enlaces/casa-aura.html` con ficha bilingüe, CTA oficial de Cloudbeds y las tres imágenes asignadas a Casa Aura.
- Agregar Casa Aura a los menús desktop/móvil, carruseles duplicados de aliados y footer de `index.html`, `piloto.html` y `service-detail.html`.
- Registrar la portada en `sitemap.xml` y `manus-routes.json`; corregir la ruta documental del asset horizontal de Casa Aura.
- Validación: referencias locales, imágenes asignadas, sintaxis JS, `git diff --check` y revisión de enlaces/rutas antes de publicar.

## 2026-10-07

### Alineación del índice visual de alojamientos

- `styles.css` y `styles.optimized.css`: alinear el bloque de fotos de Stayinn Hotels con el inicio del título en escritorio, evitando que las imágenes queden elevadas respecto del encabezado; conservar el apilado natural en tablet y móvil.
- Validación: revisar la posición calculada del título y las imágenes en escritorio, comprobar el breakpoint de 980 px y ejecutar `node --check` y `git diff --check`.

### Auditoría de render y rediseño de Stays and Hotels

- `services.js`, `styles.css` y `styles.optimized.css`: reorganizar la ficha de alojamientos en una portada editorial más amplia, accesos directos a cada propiedad, galerías adaptables y una consulta completa al final; mantener las fotos y tarifas existentes.
- `script.js`, `lang-switch.js` y CSS: retirar el modo Safari personalizado solicitado; ocultar de verdad los paneles fijos cerrados para que no conserven capas borrosas fuera de pantalla y dejar el desplazamiento estándar para tablet/touch.
- Actualizar las referencias cacheadas de CSS y scripts en las rutas que los cargan.
- Validación: sintaxis JS, `git diff --check`, barrido de 21 rutas públicas a 768 px con desplazamiento abajo/arriba; Stays and Hotels revisado a 390, 768 y 1280 px; las nueve imágenes de galería cargan y no aparecen errores JavaScript. El rectángulo blanco no se reprodujo en Chromium.
- Seguimiento solicitado: recuperar las cuatro fotos individuales como accesos sin texto a sus alojamientos, aumentarlas ligeramente y aclarar el texto auxiliar, placeholders y errores del formulario final para mejorar el contraste.

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
- `index.html`, `script.js` y `styles.css`: reemplazar el enlace pequeño de cada tarjeta de servicio por una cinta de papel rasgado, con el texto centrado y más grande, bilingüe y accesible; se conservan destinos e interacciones existentes.
- La integración se desarrolla en la rama de preview `piloto`; no se combina con producción.

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

### Servicios — corregir override responsive de encuadre
- Se detectó que reglas posteriores y más específicas bajo `#servicios` volvían a imponer `object-fit: cover` en el catálogo, especialmente al pasar a un viewport estrecho.
- Se agregó un override final con prioridad explícita para mantener `object-fit: contain`, centrar la imagen y eliminar el zoom en todas las tarjetas, incluida `Surf Lessons`.
- Se renovó la caché global a `styles.optimized.css?v=20261009-73`.

### Tarjetas especiales — restaurar encuadre de portada
- `Your trip, your way` y `Retiros` recuperan el comportamiento visual anterior de sus imágenes: proporción de tarjeta original, `object-fit: cover` y zoom hover sutil.
- El modo de imagen completa queda aplicado únicamente a las tarjetas normales del catálogo de Servicios y del constructor.
- Se renovó la caché global a `styles.optimized.css?v=20261009-74`.

### Tarjetas — restaurar imágenes a pantalla completa
- Se revierte el uso de `object-fit: contain`, que generaba bandas/rectángulos azules en las tarjetas.
- Todas las tarjetas vuelven a ocupar completamente su marco con `object-fit: cover`, sin bordes ni franjas visibles, conservando el comportamiento visual original.
- Se renovaron las cachés a `styles.optimized.css?v=20261009-75` y `trip-builder.css?v=20261009-tripcards4`.

### Armá tu viaje — retirar Pack ajustable obsoleto
- Se eliminó del catálogo y del detalle dinámico el servicio legacy `pack-ajustable`, junto con sus preguntas, selector visual y contador antiguos.
- La tarjeta vigente `Tu viaje, a tu manera` conserva su enlace directo a `trip-builder.html` y su CTA `Armar tu viaje por Tamarindo`.
- Las URLs antiguas `service-detail.html?service=pack-ajustable` redirigen al armador nuevo para no dejar una pantalla incorrecta en favoritos o historial.
- Se actualizó la guía vigente y se renovó la caché de `services.js`.


### Estadías y hoteles — restaurar organización editorial anterior
- `services.js`: se recupera la introducción con descripción, la galería general y el flujo de tarifas antes de las fichas; Tamalodge vuelve a mostrar su única imagen dentro de la tarjeta.
- `styles.css` y `styles.optimized.css`: las fichas vuelven a mostrar la galería arriba del contenido, el formulario queda en columna lateral sticky en escritorio y el layout se apila en tablet/móvil.
- Se corrigió el contraste del formulario sobre fondo claro y se actualizó la caché de `service-detail.html`.
- Validación: comparación con el estado anterior al rediseño, render en inglés y español, revisión responsive, sintaxis JavaScript y `git diff --check`.


### Fondos de Servicios — eliminar solapamiento entre imágenes
- `styles.css` y `styles.optimized.css`: las tres imágenes principales ahora ocupan franjas consecutivas de un tercio de la sección, evitando que la primera y la segunda se superpongan.
- La capa decorativa superior de surf se desplazó fuera de la primera franja y se redujo su opacidad; el ajuste responsive se mantiene para pantallas de hasta 1024 px.
- `index.html`: se actualizó la versión de caché de estilos para que el cambio llegue inmediatamente a producción.
- Validación: reproducción visual en la portada, medición de posiciones de las capas en el DOM, sintaxis JavaScript y `git diff --check`.


### Corrección — conservar la versión moderna de Estadías y hoteles
- Se deshizo la restauración excesiva de la estructura antigua y se volvió al estado moderno de referencia `6274861`.
- Se recuperaron el selector visual de alojamientos, el formulario actualizado y la selección moderna de fotos por ficha.
- Se conserva únicamente el ajuste independiente que separa las imágenes de fondo de Servicios.
