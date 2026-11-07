---
name: wavepoint-logo-placement
description: Ajuste y mantenimiento de posición y tamaño de logos en el sitio WavePoint. Usar cuando se muevan, escalen, anclen a secciones o se finalicen los valores de un logo en este repositorio.
---

# Ajuste de logos de WavePoint

Usar este flujo para colocar o redimensionar logos en el sitio. Identificar primero el logo concreto y su contenedor; no reutilizar valores de otro logo sin confirmación.

## Implementación actual

- El logo de alianzas está en `index.html` dentro de `.newsletter-alliance-logo`. Su ubicación fijada actual está en `styles.css` y `styles.optimized.css`: `x=-126px`, `y=-7px`, `scale=1.35`.
- El logo flotante de WavePoint está en una capa absoluta independiente sobre la sección `#servicios`, no dentro de una tarjeta. Su objetivo es `[data-logo-placement-target="services-background"]`; el ajustador lo coloca inicialmente junto a la tarjeta Surfskate y permite arrastrarlo libremente sobre el fondo de la sección. Su ubicación inicial confirmada es `x=76px`, `y=-37px`, `scale=1.00`, relativa a esa posición base.
- El ajustador de `script.js` permite arrastrar y cambiar el tamaño (`0.65`–`1.35`). Al confirmar produce un código como `WAVEPOINT_LOGO target=services-background x=-20 y=8 scale=1.10` y un enlace con el hash `#wavepoint-logo=services-background,-20,8,1.10`.
- La vista previa se guarda en `localStorage` con la clave `wavepoint-logo-placement-services-background`. Confirmar copia el ajuste; no lo fija automáticamente en el código.

## Procedimiento

1. **Identificar el objetivo.** Verificar en la página y el DOM qué logo quiere mover la persona. Dar a cada objetivo un nombre explícito y único (`data-logo-placement-target`) y ubicar su markup dentro de una capa de posicionamiento perteneciente a la sección o fondo que debe acompañar. No incrustarlo en una tarjeta si la persona pidió moverlo sobre el fondo.
2. **Usar o conectar el ajustador.** Localizar el objetivo por su atributo; guardar vistas previas en una clave `localStorage` que incluya ese nombre. Al confirmar, incluir nombre, `x`, `y` y `scale` en el código y en el hash. Mantener `pointer-events:none` en la capa de pantalla completa y reactivarlos en el logo para no bloquear otros controles.
3. **Anclar la posición inicial con cuidado.** Si conviene, calcular `left/top` iniciales respecto de un elemento de referencia cercano (actualmente la tarjeta Surfskate) y limitar la posición base a los límites del fondo. Recalcular esa posición base al cambiar el viewport, conservando los desplazamientos de vista previa del usuario.
4. **Recibir y comprobar valores.** Aceptar el código completo o extraer los valores del hash. Confirmar el objetivo; interpretar `x/y` como desplazamientos CSS en píxeles y `scale` como factor. No inferir valores ausentes.
5. **Fijar el ajuste solicitado.** Actualizar los valores predeterminados del objetivo en CSS y JavaScript para persistir el resultado en todos los dispositivos. Mantener la vista previa interactiva después de fijar el objetivo solo si se pidió conservarla.
6. **Mantener sincronizados los estilos.** `index.html` carga `styles.optimized.css`; actualizar también `styles.css` como fuente mantenible y `styles.optimized.css` como hoja activa. Si cambian `script.js` o la hoja activa, cambiar sus parámetros de versión en `index.html` para evitar caché obsoleta.
7. **Validar antes de entregar.** Ejecutar `node --check script.js` y `git diff --check`; comprobar el markup, que el logo no quede recortado por una tarjeta, que otros enlaces sigan funcionando y que el layout móvil siga siendo usable. Probar en una sesión limpia o borrar la clave `localStorage`, porque una vista previa guardada puede ocultar los valores predeterminados.
8. **Verificar publicación.** No afirmar que el sitio está publicado solo porque el commit llegó a GitHub; comprobar el despliegue con el proveedor correspondiente.

## Límites y seguridad

- No sustituir, redibujar ni cambiar el archivo de imagen del logo al pedir solo posición/tamaño.
- No limitar un logo al área de una tarjeta si la persona pidió moverlo libremente por el fondo.
- No fijar una vista previa como cambio permanente sin que el usuario entregue o confirme sus valores.
- No hacer push ni desplegar cambios externos sin autorización clara para esa tarea.
