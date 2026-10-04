## 2026-10-04

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
