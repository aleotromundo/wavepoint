# Registro de cambios

Este archivo registra cambios funcionales y visuales del sitio para conservar decisiones importantes entre sesiones. Anotar cada cambio en la fecha en que se realiza, con archivos afectados, comportamiento esperado y validacion relevante.

## 2026-10-02

### Movimiento, traducciones, clima y aliados

- `script.js` / `styles.css`: adelantar los reveals de scroll (`rootMargin: 0px 0px 40% 0px`, `threshold: 0`), hacerlos de una sola pasada y reducir recorrido/duracion. El contenido debe permanecer visible si falta `IntersectionObserver` o JavaScript.
- `index.html` / `script.js`: agregar claves ES/EN a titulos, descripciones, enlaces y textos alternativos de las diez tarjetas de servicios. Al cambiar idioma, todas las tarjetas deben actualizarse.
- `assets/meteocons/` / `index.html` / `script.js` / `styles.css`: incorporar SVG locales Meteocons 0.1.0, incluyendo variantes estaticas para movimiento reducido. El icono meteorologico corresponde al codigo de Open-Meteo; `water-tide-high` identifica el oleaje. No hay un icono Meteocons dedicado a surf. Se conserva la licencia MIT en `assets/meteocons/LICENSE`.
- `styles.css`: ajustar tamano del icono y cifras del clima para escritorio y movil. Comprobar anchos de 320, 375 y 430 px sin overflow horizontal.
- `index.html`: evitar repetir la imagen entre la tarjeta de fotos del catalogo y la tarjeta de fotos posterior al surf.
- `index.html` / `styles.css`: mover el titulo de aliados al primer elemento del carrusel; conservar su traduccion en los dos grupos visuales. Aumentar las tarjetas y quitar el borde marcado.
- `script.js` / `styles.css`: acelerar el carrusel a 20 s en reposo, 25 s al hover y 32 s al interactuar. Ajustar la velocidad con `Animation.updatePlaybackRate()` para conservar la fase.
- En movil, el dedo desplaza el contenido a ambos lados sin limite fijo; al soltar, el offset vuelve suavemente a cero y el autoplay sigue. El hover solo ralentiza en dispositivos con puntero fino, para evitar hover pegado en touch.
- El cambio de ritmo del carrusel usa `Animation.updatePlaybackRate()` para conservar la fase y evitar saltos al hover/drag; los tiempos objetivo anteriores no cambian.
- `styles.css`: con `prefers-reduced-motion`, el carrusel continua mas lento (48 s, 54 s al hover, 64 s al interactuar), conserva `overflow: hidden` y permite drag. Se elimino una regla anterior que aplicaba `animation: none` y el fallback que mostraba una barra horizontal.

### Animaciones que deben conservarse

- Logo: `logo-wave-ripple` continuo en `.logo-wave-aura` (5.2 s) y `logo-wave-arrive` de entrada/replay (1.25 s). No reemplazar el efecto continuo por solo la animacion de entrada.
- Ubicacion/clima: `hero-location-float` y `weather-window-drift`.
- Secciones: `camera-current`, `service-tide`, `guide-contours`, `ally-reflection`, `after-surf-drift` y `newsletter-glint`.
- Tarjetas: reveals con `.scroll-reveal` y `.is-visible`, mas estados hover.
- Clima: la animacion CSS anterior de `.weather-icon` se reemplazo por los SVG animados de Meteocons; las versiones `-static.svg` se usan con movimiento reducido. No volver a aplicar `animation: none` sobre los SVG animados.
- Movimiento reducido puede desactivar o atenuar varios efectos por accesibilidad. Antes de diagnosticar una animacion perdida, verificar `matchMedia('(prefers-reduced-motion: reduce)')`.

### Comprobaciones realizadas

- Idiomas ES/EN para las diez tarjetas de servicios y los dos titulos del carrusel.
- SVG Meteocons animados y estaticos cargan localmente.
- Clima/carrusel probados en anchos moviles; pagina sin overflow horizontal.
- Carrusel probado en movimiento normal y reducido: `animation-play-state: running`, drag con resistencia y retorno a cero, sin barra horizontal.
- El navegador de validacion puede suspender timelines mientras la pestana esta oculta; verificar animaciones con la pagina visible antes de concluir que estan congeladas.

### Nota de auditoria

La comparacion de Git del 2026-10-02 no encontro una eliminacion global de keyframes. La unica retirada CSS de movimiento del clima fue el flotado del contenedor Meteocons, reemplazado por la animacion dentro de los SVG. Los reveals se acortaron y pasaron a una sola pasada para evitar que las tarjetas quedaran invisibles al salir del viewport.

La revision historica tambien detecto que el flotado CSS del contenedor Meteocons se habia quitado al migrar el icono. Se restauro `weather-float` (3.2 s) en movimiento normal; `prefers-reduced-motion` lo sigue desactivando. El ripple continuo del logo y las animaciones de fondo permanecen en CSS.

En `prefers-reduced-motion`, el logo no entra ni mueve el aura automaticamente, pero el control accesible "Volver a animar el logo WavePoint" conserva su accion: una activacion explicita ejecuta una entrada breve.

## 2026-10-02

### Catálogo de servicios reales

- `index.html`: reemplazar el catálogo de la portada por los diez servicios confirmados: Stay & experience, Surf lessons, Surf coaching, Yoga, Witch’s Rock surf trip, Snorkeling & catamaran, Diving, ATV tours, Build your own experience y Retreats.
- `service.html`: sincronizar el catálogo completo con las diez tarjetas reales y sus descripciones breves en inglés. Actualizar el llamado de navegación de 11 a 10 servicios.
- `services.js`: retirar los servicios no confirmados de fotografía de surf, fotografía acuática y surfskate; agregar los detalles, preguntas y formularios de WhatsApp para `buceo` y `pack-ajustable`.
- `services.js`: cambiar la numeración de detalle a un total dinámico (`n / ${services.length}`) para evitar inconsistencias futuras.
- `index.html`: reemplazar la promoción secundaria de Fotos de surf por una tarjeta de Buceo, manteniendo únicamente servicios confirmados.
- `script.js`: agregar traducciones ES/EN para Buceo y Pack ajustable, eliminar textos heredados de los servicios retirados y actualizar las respuestas del asistente sobre las experiencias disponibles.
- `api/assistant.js`: actualizar el contexto del asistente para recomendar exclusivamente el catálogo real de servicios.

### Validación

- `node --check script.js` y `node --check services.js`: correctos.
- `git diff --check`: sin errores de espacios o formato.
- Portada validada con 10 tarjetas de servicios.
- Catálogo completo validado con 10 tarjetas de servicios.
- Imágenes usadas por los diez servicios verificadas en `assets/`.
- Enlaces a `fotos-surf`, `fotografia-acuatica` y `surfskate` eliminados de las páginas públicas.

## 2026-10-02

### Selector visual para Pack ajustable

- `services.js`: convertir la pregunta de actividades del Pack ajustable en un selector visual con nueve tarjetas de servicios reales: alojamiento, surf lessons, surf coaching, yoga, Witch’s Rock, snorkeling & catamaran, diving, ATV tours y retreats.
- `services.js`: cada tarjeta incluye imagen, título, descripción breve, checkbox accesible y check visual al seleccionarla. Se agregó un contador dinámico de experiencias seleccionadas.
- `styles.css`: agregar el diseño de tarjetas, estados hover/focus/selected, imágenes recortadas, check circular y versión responsive de una columna para pantallas pequeñas.
- El resto de las preguntas del formulario y la generación de la solicitud por WhatsApp permanecen sin cambios.

### Validación

- `node --check services.js`: correcto.
- `git diff --check`: sin errores de formato.
- Se verificó que todas las imágenes nuevas del selector pertenecen al catálogo real y existen en `assets/`.

## 2026-10-02

### Logo principal en móvil

- `styles.css`: aumentar moderadamente el ancho del logo WavePoint en pantallas de hasta 640 px, de 78vw/300 px a 86vw/330 px, y en pantallas muy pequeñas de 76vw/270 px a 84vw/300 px. El tamaño de escritorio no cambia.
- Se conserva el ancho máximo relativo al viewport para evitar overflow horizontal.

### Validación

- `git diff --check`: sin errores de formato.
- Se revisaron los breakpoints de 640 px y 380 px, incluyendo el comportamiento del contenedor móvil.

## 2026-10-02

### Separación superior del hero en escritorio

- `styles.css`: bajar 14 px el contenido completo del hero en escritorio, pasando de `translateY(-12px)` a `translateY(2px)`, para separar mejor el logo y las condiciones del borde superior.
- El breakpoint de hasta 980 px conserva `transform: none`, por lo que tablet y móvil mantienen su posición anterior.

### Validación

- `git diff --check`: sin errores de formato.
- Se confirmó que el ajuste queda limitado a escritorio y no modifica el tamaño del logo.

## 2026-10-02

### Tipografía del menú del header

- `styles.css`: aumentar los enlaces principales del header de 13 px a 14 px y ampliar el espacio entre enlaces de 18 px a 20 px para mejorar la lectura en escritorio.
- `styles.css`: aumentar de 12 px a 13 px la tipografía del menú desplegable de Colaboradores.
- El comportamiento responsive del header se mantiene sin cambios: el menú se reemplaza por el botón hamburguesa en pantallas pequeñas.

### Validación

- `git diff --check`: sin errores de formato.

## 2026-10-02

### Entrega de mejoras visuales y del Pack ajustable

Esta entrega reúne las mejoras realizadas después de sincronizar el catálogo real de servicios: selector visual del Pack ajustable con tarjetas, imágenes, checks y contador; logo principal más grande en móvil; hero de escritorio ligeramente más separado del borde superior; y tipografía del menú del header más legible. También se mantienen documentadas las validaciones de sintaxis, formato, assets y breakpoints realizadas durante el trabajo.

### Archivos incluidos

- `CHANGELOG.md`: historial detallado de las modificaciones.
- `services.js`: selector visual y contador del Pack ajustable.
- `styles.css`: selector del Pack, tamaño responsive del logo, posición del hero y tipografía del header.

## 2026-10-02

### Logo móvil — segundo ajuste

- `styles.css`: ampliar nuevamente el logo en pantallas de hasta 640 px hasta `min(100%, 360px)` y en pantallas de hasta 380 px hasta `min(100%, 320px)`. El logo utiliza ahora casi todo el ancho útil del contenedor, sin superar sus límites.

### Validación

- `git diff --check`: sin errores de formato.
- Se conserva el ancho del contenedor móvil para evitar overflow horizontal.
