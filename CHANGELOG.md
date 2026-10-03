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
- `script.js` / `styles.css`: acelerar el carrusel a 24 s en reposo, 30 s al hover y 40 s durante el arrastre. Aplicar resistencia al drag (48%, limitada a 64 px) y volver a cero al soltar sin pausar el marquee.
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
