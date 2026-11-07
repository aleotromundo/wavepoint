---
name: wavepoint-logo-placement
description: Ajuste y mantenimiento de posición y tamaño de logos en el sitio WavePoint. Usar cuando se muevan, escalen, anclen a tarjetas o se finalicen los valores de un logo en este repositorio.
---

# Ajuste de logos de WavePoint

Usar este flujo para colocar o redimensionar logos en el sitio. Identificar primero el logo concreto y su contenedor; no reutilizar valores de otro logo sin confirmación.

## Implementación actual

- El logo de alianzas está en `index.html` dentro de `.newsletter-alliance-logo`. Su ubicación fijada actual está en `styles.css` y `styles.optimized.css`: `x=-126px`, `y=-7px`, `scale=1.35`.
- El logo superior del catálogo debe permanecer dentro de `.service-card-surfskate`, con `data-logo-placement-target="surfskate-card"`. No volver a insertarlo como hijo independiente de `.service-grid-catalog`: cambios en el grid podrían separarlo de su tarjeta.
- El ajustador de `script.js` apunta específicamente a `[data-logo-placement-target="surfskate-card"]`. Permite arrastrar, ajustar el control de tamaño (`0.65`–`1.35`) y confirmar/copiar los valores. Produce un código como `WAVEPOINT_LOGO target=surfskate-card x=-20 y=8 scale=1.10` y un enlace con el hash `#wavepoint-logo=surfskate-card,-20,8,1.10`.
- La vista previa por objetivo se guarda en `localStorage` con la clave `wavepoint-logo-placement-surfskate-card`. El ajustador es una herramienta de vista previa: confirmar copia el ajuste, pero no lo fija automáticamente en el código.

## Procedimiento

1. **Identificar el objetivo.** Verificar en la página, el DOM y el grid qué logo quiere mover la persona. Dar a cada objetivo un nombre explícito y único (`data-logo-placement-target`) y mantener su markup dentro de la tarjeta o sección que deba acompañar.
2. **Usar o conectar el ajustador.** Localizar el objetivo mediante su atributo `data-logo-placement-target`; guardar las vistas previas en una clave `localStorage` que incluya ese nombre. Al confirmar, incluir el nombre del objetivo, `x`, `y` y `scale` en el código copiable y en el hash. No permitir que un mismo control altere un logo distinto del indicado en el panel.
3. **Recibir y comprobar valores.** Aceptar el código completo o extraer los valores del hash. Confirmar cuál es el objetivo y que las unidades son desplazamientos CSS en píxeles más un factor de escala. No inferir valores ausentes.
4. **Fijar el ajuste solicitado.** Editar las reglas CSS del objetivo para que esos valores sean los predeterminados permanentes y actualizar también los valores iniciales del estado JavaScript de ese objetivo. Mantener la vista previa interactiva después de fijar un objetivo solo si se pidió conservarla.
5. **Mantener sincronizados los estilos.** `index.html` carga `styles.optimized.css`; actualizar también `styles.css` como fuente mantenible y `styles.optimized.css` como hoja activa. Si cambian `script.js` o la hoja activa, cambiar sus parámetros de versión en `index.html` para evitar caché obsoleta.
6. **Comprobar estructura y comportamiento.** Verificar que el logo siga dentro de su tarjeta, que el selector del panel apunte al objetivo único, que los otros logos no se muevan y que la vista móvil siga siendo usable. Probar los valores fijados en una sesión limpia o borrar la clave `localStorage` de prueba, porque la vista previa guardada puede ocultar los valores predeterminados.
7. **Validar antes de entregar.** Ejecutar `node --check script.js`, `git diff --check` y comprobaciones HTML/CSS apropiadas. Revisar el diff completo y confirmar que no haya cambiado una imagen o logo ajeno. No afirmar que el sitio está publicado solo porque el commit llegó a GitHub; comprobar el despliegue con el proveedor correspondiente.

## Límites y seguridad

- No sustituir, redibujar ni cambiar el archivo de imagen del logo al pedir solo posición/tamaño.
- No eliminar un ajustador interactivo si la persona pidió conservarlo para otro logo.
- No fijar una vista previa como cambio permanente sin que el usuario entregue o confirme sus valores.
- No hacer push ni desplegar cambios externos sin autorización clara para esa tarea.
