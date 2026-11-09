# WavePoint — Seguimiento de tareas y decisiones
Este archivo es el registro operativo de tareas de producto y de las guías de trabajo, incluyendo `Guiasegundaparte`. Cada punto debe conservar su estado actual, la resolución tomada, los archivos involucrados, la validación realizada y lo que todavía falta.

## Regla de mantenimiento
Este archivo sirve para conservar la continuidad del trabajo. Cuando una tarea cambie un avance, una decisión, un estado o un pendiente, registrar brevemente qué se hizo, cómo quedó y qué falta. Los ajustes menores que no cambien el seguimiento no necesitan una entrada artificial. El estado debe reflejar el repositorio actual, no solo una guía o PDF histórico.

## Estados permitidos
- **Resuelto:** implementado e integrado; la validación principal pasó.
- **Parcial:** hay una parte implementada, pero falta una integración, decisión, asset o validación.
- **Pendiente:** todavía no está implementado.
- **Bloqueado:** no puede avanzar hasta recibir un dato, asset, permiso o decisión del usuario.

## Guiasegundaparte — 8 puntos principales
| # | Punto | Estado | Resolución actual | Archivos / evidencia | Pendiente |
|---:|---|---|---|---|---|
| 1 | Mejorar la ficha de ATV con cuadro y más explicación | **Resuelto** | Se agregaron recorridos Explorer, Adventure y Ultimate, tarifas, condiciones, incluidos y solicitud de disponibilidad. La tarifa se sincronizó como precio por vehículo en el armador. | `services.js`, `trip-builder.js`, `index.html`, `styles.css`, `styles.optimized.css`; changelog del punto ATV. | Ninguno conocido. |
| 2 | Crear ficha aparte para el programa de surf de tres días | **Resuelto** | Se creó un programa de tres clases privadas consecutivas, con tarifas, progresión por día, fotos WebP optimizadas, formulario y validación de fechas consecutivas. | `services.js`, `index.html`, `script.js`, `trip-builder.js`, `styles.css`, `styles.optimized.css`; `assets/img/services/surf-program-3-days/day-1.webp` a `day-3.webp`. | Ninguno conocido. |
| 3 | Mejorar navegación y agregar foto nueva | **Parcial** | La ficha quedó como “Navegación — Descubrí Guanacaste desde el mar”, con opciones, tarifas de referencia, condiciones, datos prácticos, formulario y foto nueva. La auditoría encontró capacidades que no coinciden con la guía: el código declara 5 personas para Papagayo y snorkel por Guanacaste, y 5 para pesca en mar abierto; la guía indica 7, 7 y 4, respectivamente. | `services.js`, `pt-br.js`, `styles.css`, `styles.optimized.css`, `service-detail.html`; `Guia_Segunda_Parte_Completa.pdf`. | Confirmar las capacidades actuales con el proveedor antes de corregir los datos publicados; mantener sincronizadas las versiones ES/EN/PT-BR. |
| 4 | Crear ficha nueva de Local Host/Country Host con fotos | **Resuelto** | Se creó la ficha gratuita con bienvenida presencial de una hora, consultas por WhatsApp durante 48 horas, recomendaciones, orientación y formulario de consulta. Se integraron las cuatro fotos marcadas en la guía como portada y galería, con traducciones ES/EN/PT-BR. | `services.js`, `index.html`, `script.js`, `pt-br.js`, `service-detail.html`, `assets/img/services/local-host/`; fotos `foto-05.jpg` a `foto-08.jpg`; `REFERENCIAS_FOTOS.md`. | Ninguno conocido. |
| 5 | Incluir Local Host gratis en varios servicios | **Resuelto** | Se agregó “Servicio de Local Host” únicamente en los incluidos de Clases de surf, programa de surf, Yoga, ATV, hospedajes, Fotos de surf y Surf coaching. Se mantuvieron intactos precios, formularios, descripciones y el comportamiento móvil; se sincronizaron ES/EN/PT-BR. | `services.js`, `pt-br.js`; instrucción literal en `Guia_Segunda_Parte_Completa.pdf`. | Ninguno conocido. |
| 6 | Desarrollar el tour del estero | **Resuelto** | Se creó la ficha completa del tour en bote por el estero con textos de la guía, precio de referencia de USD 40 por persona, datos prácticos, condiciones, formulario de consulta, CTA de alianzas y traducciones ES/EN/PT-BR. Se integraron cuatro imágenes WebP optimizadas en portada y galería. | `services.js`, `index.html`, `script.js`, `pt-br.js`, `styles.optimized.css`, `assets/img/services/mangrove-tour/`, `MATERIAL_TOUR_ESTERO.md`. | Confirmar con el proveedor la autorización de uso comercial de las imágenes antes de futuras campañas pagadas. |
| 7 | Agregar portugués y hacerlo más visible | **Resuelto** | Se agregó selector PT-BR y traducciones para portada, guía, servicios, fichas, formularios y armador. | `pt-br.js`, `script.js`, `lang-switch.js`, `services.js`, `trip-builder.js`, `guia-playas.html`, `guide-i18n.js`. | Revisar solo si el usuario pide una mejora visual adicional del selector. |
| 8 | Crear botón para proponer una alianza con WavePoint | **Resuelto** | Se implementó CTA de alianzas con WhatsApp, mensaje preparado, QR, textos bilingües y ajustes visuales del botón. Este punto se completó después del PDF de seguimiento anterior. | `index.html`, `script.js`, `styles.css`, `styles.optimized.css`; commits `11487d8` a `54c661b`. | Ninguno conocido. |

## Fotos y cambios visuales relacionados
| Pedido | Estado | Resolución actual | Pendiente |
|---|---|---|---|
| Fotos del programa de surf de tres días | **Resuelto** | Se usan las tres versiones WebP optimizadas con textos alternativos y encuadres responsive. | Ninguno conocido. |
| Foto nueva de Embarcaciones | **Resuelto** | Foto incorporada a portada/tarjeta/galería según la distribución definida. | Ninguno conocido. |
| Fotos de Fotos de surf | **Resuelto** | Se incorporaron portada y galería con fotos de la guía. | Ninguno conocido. |
| Fotos nuevas de Surfskate | **Resuelto** | Se incorporaron fotos nuevas para tarjeta, portada y galería. | Ninguno conocido. |
| Foto nueva de Roca Bruja | **Resuelto** | Se incorporó una vista del lugar y se ajustó la galería. | Ninguno conocido. |
| Logo de Nativa Diving en aliados/patrocinadores | **Resuelto** | Logo agregado al carrusel de aliados, con versión blanca para fondo oscuro. | Ninguno conocido. |
| Fotos de Local Host/Country Host | **Resuelto** | Se identificaron en la guía y en el repositorio las fotos `foto-05.jpg` a `foto-08.jpg`; se optimizaron como WebP y se usaron en la ficha. | Ninguno conocido. |
| Encuadre de la tarjeta Country Host en escritorio | **Resuelto** | Se aplicó un zoom suave anclado abajo desde 981 px para reducir el cielo y mostrar más a las personas; el encuadre móvil no cambia. | Ninguno conocido. |
| Logo decorativo de Servicios después de agregar Country Host | **Resuelto** | Por decisión de producto, se retiró por completo la capa decorativa que aparecía después de las tarjetas y antes de “Experiencia a medida”. Se conservaron las tarjetas, el separador y los demás logos del sitio. | `index.html`, `styles.css`, `styles.optimized.css`. | Ninguno conocido. |
| Ficha y fotos de Buceo | **Pendiente** | La guía incluye contenido propuesto y existe la referencia de Nativa Diving, pero no hay ficha de servicio integrada. | Definir alcance, fotos, datos verificables, traducciones y formulario. |

## Conteo actual
- **Puntos principales resueltos:** 7 de 8.
- **Puntos principales parciales:** 1 de 8.
- **Puntos principales pendientes:** 0 de 8.
- **Tareas visuales/fotos pendientes adicionales:** Buceo.

## Historial de cortes
| Fecha | Resueltos | Parciales | Pendientes | Motivo del cambio |
|---|---:|---:|---:|---|
| Corte del PDF `Estado_fotos_Guia_Segunda_Parte.pdf` | 4 | 0 | 4 | El botón de alianzas todavía figuraba como pendiente. |
| 2026-11-08 | 5 | 0 | 3 | Se verificó que el CTA de alianzas ya está implementado en el repositorio. |
| 2026-11-08 | 6 | 0 | 2 | Se integró la ficha Local Host/Country Host con las cuatro fotos marcadas en la guía, formulario y traducciones. |
| 2026-11-08 | 7 | 0 | 1 | Se incluyó Local Host en los siete servicios indicados por la guía, dentro de sus bloques de incluidos y con traducciones ES/EN/PT-BR. |
| 2026-11-08 | 7 | 1 | 0 | Auditoría del repositorio: capacidades de Embarcaciones divergentes de la guía; se detectaron WebP optimizados no usados en el programa de surf y se actualizaron sus referencias. |
| 2026-11-08 | 7 | 1 | 0 | Se integró el tour del estero con cuatro imágenes WebP, ficha, formulario, CTA de alianzas y traducciones. |

## Continuidad
El `PROJECT_GUIDE.md` describe el producto y el `CHANGELOG.md` conserva el historial. Este archivo resume el estado vivo de las tareas y se actualiza únicamente cuando aporta continuidad.
