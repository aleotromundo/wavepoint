## 2026-10-03

### Fondos de sección con foto y parallax

- `index.html`: se agrega una capa `.px-bg` (y la clase `has-px`) dentro de Servicios, Cámaras, Guía (`#guia`) y Después del surf. El hero no se modificó.
- `styles.css` (final del archivo): cada sección toma su foto desde `--px-img` (`assets/bg/`), con un velo azul oscuro para que se lean los textos; títulos y subtítulos de esas secciones pasan a blanco. Las tarjetas conservan su fondo.
- `script.js` (final del archivo): parallax por `transform` (la foto se mueve a ~18 % de la velocidad del scroll), con `requestAnimationFrame` y listeners pasivos. No usa `background-attachment: fixed`, que falla en iOS. Se desactiva con `prefers-reduced-motion`.
- `assets/bg/`: fotos optimizadas a 1920 px desde `assets/legacy/` (`servicios.jpg`, `camaras.jpg`, `guia.jpg`, `atardecer.jpg`). Para cambiar una foto basta reemplazar el archivo o la URL de `--px-img`.
- Nota: `servicios.jpg` y `guia.jpg` vienen de originales de 1366 px; conviene reemplazarlas por fotos de playa de 1920 px o más.
- Pendiente: sin validar visualmente en navegador; revisar contraste de textos y alturas en móvil.

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
