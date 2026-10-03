## 2026-10-03

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
