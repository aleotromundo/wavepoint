---
name: wavepoint-logo-placement
description: Ajuste y mantenimiento de posición y tamaño de logos en el sitio WavePoint. Usar cuando se muevan, escalen, anclen a secciones o se finalicen los valores de un logo en este repositorio.
---

# Ajuste de logos de WavePoint

Usar este flujo para colocar o redimensionar logos en el sitio. Identificar primero el logo concreto y su contenedor; no reutilizar valores de otro logo sin confirmación.

## Implementación actual

- El logo de alianzas está en `index.html` dentro de `.newsletter-alliance-logo`. Su ubicación fijada actual está en `styles.css` y `styles.optimized.css`: `x=-126px`, `y=-7px`, `scale=1.35`.
- El logo de WavePoint está en una capa absoluta sobre `#servicios`, independiente del grid y de la tarjeta Surfskate. El script solo calcula una posición base junto a la tarjeta Surfskate (debajo en pantallas donde no cabe al costado) y la recalcula al cambiar el viewport.
- La ubicación final confirmada del logo de fondo es `x=76px`, `y=-37px`, `scale=1.00`, relativa a la posición base. Está fijada directamente en `styles.css` y `styles.optimized.css`.
- El ajustador visual fue retirado por solicitud del propietario después de fijar la posición. No hay panel, arrastre, guardado `localStorage` ni botón de confirmación activo en la página. Si el propietario pide volver a ajustar, consultar esta skill y reintroducirlo únicamente para el objetivo correcto.

## Procedimiento para futuros ajustes

1. **Identificar el objetivo.** Verificar qué logo quiere mover la persona. Mantener el markup en una capa de posicionamiento de la sección/fondo que debe acompañar; no incrustarlo en una tarjeta si debe moverse sobre el fondo.
2. **Si se pide una herramienta temporal,** asignar un `data-logo-placement-target` único, conectar el panel solo a ese objetivo, guardar cualquier vista previa con una clave `localStorage` que incluya el nombre, y copiar un código inequívoco con `target`, `x`, `y` y `scale`. Mantener `pointer-events:none` en la capa completa y reactivarlos solo en el control arrastrable.
3. **Recibir y validar valores.** Confirmar el objetivo; interpretar `x/y` como desplazamientos CSS en píxeles y `scale` como factor. No inferir valores ausentes. La confirmación de la vista previa no cambia por sí misma los archivos.
4. **Fijar valores permanentes.** Aplicar la transformación al objetivo en CSS y dejar en JavaScript solo la lógica de posición base/resize necesaria. Si queda una vista previa persistente, actualizar sus valores iniciales y comprobar que no oculte los defaults.
5. **Mantener sincronizados los estilos.** `index.html` carga `styles.optimized.css`; actualizar también `styles.css` como fuente mantenible y `styles.optimized.css` como hoja activa. Cambiar los parámetros de versión de CSS/JS en `index.html` para evitar caché obsoleta.
6. **Validar antes de entregar.** Ejecutar `node --check script.js` y `git diff --check`; comprobar que el logo no quede recortado por una tarjeta, que otros enlaces sigan funcionando y que el layout móvil siga siendo usable. No afirmar que el sitio está publicado solo porque el commit llegó a GitHub; comprobar el proveedor de despliegue.

## Límites

- No sustituir, redibujar ni cambiar el archivo de imagen del logo al pedir solo posición/tamaño.
- No limitar un logo al área de una tarjeta si la persona pidió moverlo libremente por el fondo.
- No fijar una vista previa como cambio permanente sin que el usuario entregue o confirme sus valores.
- No hacer push ni desplegar cambios externos sin autorización clara para esa tarea.
