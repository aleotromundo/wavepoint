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
| 1 | Mejorar la ficha de ATV con cuadro y más explicación | **Resuelto** | El formulario y el armador solicitan fecha y recorrido/modalidad; el mensaje de WhatsApp los incluye con las respuestas de conductores, pasajeros, edades y licencias. El cuarto `alt` está completo en ES/EN. Se comprobó que no se puede continuar sin elegir recorrido y que el layout no desborda a 320, 375, 430 ni 1280 px. | `services.js`, `trip-builder.js`, `trip-builder.css`, `pt-br.js`; auditoría `AUDITORIA_GUIA_2026-11-08.md`. | Ninguno funcional conocido. |
| 2 | Crear ficha aparte para el programa de surf de tres días | **Parcial** | Ficha, WebP, precios, fechas consecutivas y `alt` PT-BR implementados. Se revisó el render PT-BR en escritorio; se completaron también etiquetas PT-BR de navegación, WhatsApp y metadatos del alcance intervenido. | `services.js`, `index.html`, `script.js`, `pt-br.js`, `service-detail.html`, `site-nav.js`; auditoría `AUDITORIA_GUIA_2026-11-08.md`. | Falta una pasada visual responsive y de idioma ES/EN/PT-BR por todas las páginas. |
| 3 | Mejorar navegación y agregar foto nueva | **Parcial** | La ficha quedó implementada y las capacidades principales ya fueron alineadas con la guía. Sigue pendiente confirmar con el proveedor el estado de documentos del capitán y las condiciones comerciales. | `services.js`, `pt-br.js`, `styles.css`, `styles.optimized.css`, `service-detail.html`; auditoría `AUDITORIA_GUIA_2026-11-08.md`. | Confirmar documentos, capacidad y condiciones con el proveedor; repetir validación visual. |
| 4 | Crear ficha nueva de Local Host/Country Host con fotos | **Resuelto** | Se creó la ficha gratuita con bienvenida presencial de una hora, consultas por WhatsApp durante 48 horas, recomendaciones, orientación y formulario de consulta. Se integraron las cuatro fotos marcadas en la guía como portada y galería, con traducciones ES/EN/PT-BR. | `services.js`, `index.html`, `script.js`, `pt-br.js`, `service-detail.html`, `assets/img/services/local-host/`; fotos `foto-05.jpg` a `foto-08.jpg`; `REFERENCIAS_FOTOS.md`. | Ninguno conocido. |
| 5 | Incluir Local Host gratis en varios servicios | **Resuelto** | Se agregó “Servicio de Local Host” únicamente en los incluidos de Clases de surf, programa de surf, Yoga, ATV, hospedajes, Fotos de surf y Surf coaching. Se mantuvieron intactos precios, formularios, descripciones y el comportamiento móvil; se sincronizaron ES/EN/PT-BR. | `services.js`, `pt-br.js`; instrucción literal en `Guia_Segunda_Parte_Completa.pdf`. | Ninguno conocido. |
| 6 | Desarrollar el tour del estero | **Resuelto** | Se creó la ficha completa del tour en bote por el estero con textos de la guía, precio de referencia de USD 40 por persona, datos prácticos, condiciones, formulario de consulta, CTA de alianzas y traducciones ES/EN/PT-BR. La tarjeta, portada y galería usan cuatro fotos distintas en WebP tomadas de la ficha fuente del tour, priorizando visitantes en bote o kayak. | `services.js`, `index.html`, `script.js`, `pt-br.js`, `styles.optimized.css`, `assets/img/services/mangrove-tour/`, `MATERIAL_TOUR_ESTERO.md`. | Confirmar con el proveedor la autorización de uso comercial de las imágenes antes de futuras campañas pagadas. |
| 7 | Agregar portugués y hacerlo más visible | **Parcial** | Se agregaron traducciones PT-BR para los faltantes identificados en cámaras, etiquetas de ficha/armador, alts del programa de surf y metadatos; el mensaje ATV se validó en PT-BR. | `pt-br.js`, `script.js`, `lang-switch.js`, `services.js`, `trip-builder.js`, `service-detail.html`, `site-nav.js`; auditoría `AUDITORIA_GUIA_2026-11-08.md`. | Revisar visualmente todas las páginas en ES/EN/PT-BR y en móvil/escritorio; pueden existir textos fuera del alcance auditado. |
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
| Logo decorativo de Servicios después de agregar Country Host | **Resuelto** | Se recuperó la capa decorativa de WavePoint después de la tarjeta de Clases de surfskate y antes de “Experiencia a medida”, con ondas animadas y reglas responsive para escritorio y móvil. | `index.html`, `styles.optimized.css`. | Ninguno conocido. |
| Fotos del tour del estero | **Resuelto** | Se reemplazaron las referencias repetidas por cuatro fotos WebP distintas de la ficha de TripAdvisor: visitante observando un cocodrilo, grupo en bote, personas en kayak y kayak frente a manglares. | `services.js`, `index.html`, `assets/img/services/mangrove-tour/`, `MATERIAL_TOUR_ESTERO.md`. | Confirmar autorización de uso comercial de las imágenes antes de futuras campañas pagadas. |
| Ficha y fotos de Buceo | **Resuelto** | Se creó la ficha de Buceo con NATIVA a partir del contenido de la guía, con cuatro experiencias, modalidad compartida/privada, incluidos, cotización sin tarifa inventada, formulario y traducciones ES/EN/PT-BR. Portada y tarjeta conservan `foto-18.jpg`; la galería muestra `foto-19.jpg`, `foto-20.jpg` (tres buzos bajo el agua) y `diving-20.webp` (tortuga y snorkel), sin la mantarraya. | Revisar datos comerciales únicamente si el proveedor entrega cambios posteriores. |

## Confirmaciones externas

La guía alcanza para resolver la ficha de Buceo: se implementó con las cuatro experiencias, el formulario y cotización sin tarifa fija. La portada/tarjeta conserva `foto-18.jpg`; la galería usa la foto de tres buzos de `foto-20.jpg` convertida a WebP, sin la mantarraya de `foto-21.jpg`. También se alinearon las capacidades de Embarcaciones con la guía: 7 personas para Papagayo, 7 para snorkel por la costa de Guanacaste y 4 para pesca en mar abierto. Si el proveedor comunica cambios futuros, se actualizan esos datos.

### Publicación del dominio canónico
- El push a `main` genera un deployment de Producción de Vercel y GitHub marcó exitoso el deployment del commit `36d7f27`; la URL generada requiere iniciar sesión en Vercel.
- `https://wavepointcr.com` todavía responde desde LiteSpeed con HTML fechado el 2026-10-22 y referencias a assets anteriores. El dominio canónico no está conectado a ese deployment y el repositorio no contiene un flujo de transferencia al hosting LiteSpeed.
- Pendiente: con autorización y acceso al proveedor, conectar el dominio a Vercel o definir un flujo de despliegue al hosting actual. No cambiar DNS ni sobrescribir archivos del hosting sin autorización.

## Auditoría completa — 2026-11-08/09
Se contrastaron los ocho puntos con la guía, el código, assets, formularios, traducciones, enlaces y sintaxis. El informe detallado quedó en `AUDITORIA_GUIA_2026-11-08.md`. Durante la auditoría se incorporaron en remoto el tour del estero y Buceo/NATIVA; ambos quedaron revisados como implementados. La auditoría no modificó la aplicación.

## Conteo actual
- **Puntos principales resueltos:** 5 de 8.
- **Puntos principales parciales:** 3 de 8.
- **Puntos principales pendientes:** 0 de 8.
- Tareas visuales/fotos pendientes adicionales: ninguna conocida.

## Historial de cortes
| Fecha | Resueltos | Parciales | Pendientes | Motivo del cambio |
|---|---:|---:|---:|---|
| Corte del PDF `Estado_fotos_Guia_Segunda_Parte.pdf` | 4 | 0 | 4 | El botón de alianzas todavía figuraba como pendiente. |
| 2026-11-08 | 5 | 0 | 3 | Se verificó que el CTA de alianzas ya está implementado en el repositorio. |
| 2026-11-08 | 6 | 0 | 2 | Se integró la ficha Local Host/Country Host con las cuatro fotos marcadas en la guía, formulario y traducciones. |
| 2026-11-08 | 7 | 0 | 1 | Se incluyó Local Host en los siete servicios indicados por la guía, dentro de sus bloques de incluidos y con traducciones ES/EN/PT-BR. |
| 2026-11-08 | 7 | 1 | 0 | Auditoría del repositorio: capacidades de Embarcaciones divergentes de la guía; se detectaron WebP optimizados no usados en el programa de surf y se actualizaron sus referencias. |
| 2026-11-08 | 7 | 1 | 0 | Se integró el tour del estero con cuatro imágenes WebP, ficha, formulario, CTA de alianzas y traducciones. |
| 2026-11-09 | 7 | 1 | 0 | Se reemplazaron tarjeta, portada y galería del tour del estero por cuatro fotos WebP distintas con visitantes; se actualizó la trazabilidad y se dejó la lista exacta de consultas para Embarcaciones y Buceo. |
| 2026-11-09 | 7 | 1 | 0 | Se desarrolló la ficha de Buceo con el contenido de la guía, formulario, traducciones y las cuatro fotos obligatorias convertidas a WebP; no se inventaron precios. |
| 2026-11-09 | 5 | 3 | 0 | Se integraron fecha y recorrido ATV en el formulario y armador, con validación y mensaje trilingüe; se corrigieron alts y etiquetas PT-BR priorizados. |

## Trazabilidad y estimación de esfuerzo

Este registro separa el tiempo de calendario del esfuerzo técnico observable. Git no mide minutos de trabajo ni permite atribuir cada intervalo a una persona o IA; por eso las horas siguientes son una estimación basada en commits, agrupación de cambios cercanos y pausas entre actividad observable.

| Hito | Commit / evidencia | Fecha y hora local (Costa Rica) |
|---|---|---|
| Primer commit que menciona explícitamente la Guía Segunda Parte | `b3cfcec` — “Mejora ficha ATV y registra guia segunda parte” | 2026-11-01 22:27:06 |
| Primer archivo `Guiasegundaparte_` incorporado al repositorio | `ba3a897` | 2026-11-02 01:00:17 |
| PDF `Guia_Segunda_Parte_Completa.pdf` incorporado al repositorio | `438cfb6` | 2026-11-04 10:05:14 |
| Último commit de la tanda auditada | `d0823e7` — “Improve estuary tour gallery” | 2026-11-09 00:12:54 |

La auditoría de los archivos de guía, catálogo, traducciones, estilos y seguimiento encontró **166 commits observables** entre el 2026-11-01 y el 2026-11-09. El tiempo de calendario desde el primer commit explícito hasta el último fue de **7 días, 1 hora, 45 minutos y 48 segundos**, distribuido en varias jornadas y no como trabajo continuo.

Se detectaron pausas largas entre bloques de actividad, incluyendo aproximadamente **26 horas** entre el 2 y el 4 de noviembre, **25 horas** entre el 5 y el 6, **17 horas** entre el 6 y el 7 y **25 horas** entre el 7 y el 8. Estas pausas no se contabilizan como trabajo.

Agrupando commits cercanos como sesiones, el esfuerzo técnico observable se estima en un rango de **13 h 36 min a 25 h 53 min**. La estimación central adoptada para este seguimiento es de **aproximadamente 18 horas efectivas**, equivalentes a **4,5 jornales de cuatro horas**; para planificación se redondea a **5 jornales de cuatro horas**. Esta cifra incluye implementación, revisión de la guía, imágenes, traducciones, validaciones, resolución de conflictos y publicaciones, pero no afirma cuántas horas trabajó personalmente el usuario, Manus, Copilot o los procesos automáticos.

## Continuidad
El `PROJECT_GUIDE.md` describe el producto y el `CHANGELOG.md` conserva el historial. Este archivo resume el estado vivo de las tareas y se actualiza únicamente cuando aporta continuidad.

## Sitio web — idioma, SEO y limpieza técnica (2026-11-10)
**Estado: Parcial.** El idioma inicial ahora es inglés, se conservan las preferencias guardadas y se actualizaron los metadatos de la portada. Las 14 fichas del catálogo usan rutas limpias, con reescrituras en Vercel y 22 URLs en el sitemap. El enlace inline de Red Door se reemplazó por un listener accesible por teclado.

Se eliminaron del árbol actual `charli.mp4`, `Vivero_Piero_vertical_v1.mp4`, `assets/videohero3x.mp4`, `.picasa.ini` y la copia del logo sin referencias. `styles.css` quedó archivado como `NO_SUBIR_AL_SERVIDOR/styles-legacy.css`; las páginas del sitio cargan `styles.optimized.css`. `videohero1.mp4` y `videoheroxx3.mp4` se recomprimieron en H.264 CRF 25, con SSIM de 0,986 y 0,989 y reducciones de 24% y 35%. Los otros videos activos se conservaron porque las pruebas no redujeron su tamaño de forma útil.

La historia local de `main` se reescribió con `git-filter-repo` para purgar `charli.mp4`. La nueva punta es `cd378aa`; se verificó que el árbol del sitio es idéntico al commit de cambios anterior y que el archivo ya no aparece en los objetos ni en la historia de `main`. No se hizo push.

**Pendiente:** el usuario debe publicar la historia reescrita con `git push --force-with-lease origin main`. Después, confirmar que Vercel desplegó la rama y comprobar el sitemap público.

## Galería de Fotos de surf — 2026-11-12
**Estado: Resuelto.** La galería de la ficha `surf-fotografia` queda con cuatro fotos en una cuadrícula 2×2: las dos fotos de playa arriba; abajo, el surfista en el agua a la izquierda y el surfista sin remera a la derecha. Se retiró la foto de la maniobra con traje oscuro para conservar dos filas parejas. No se agregaron ni subieron fotos nuevas; en pantallas pequeñas la galería pasa a una columna.

**Archivos:** `services.js`, `styles.optimized.css`. **Último ajuste:** ordenar cuatro fotos en una cuadrícula 2×2.

## Ficha de Yoga — mover descripción — 2026-11-12
**Estado: Resuelto.** La descripción de Yoga ya no aparece debajo del título; ahora se muestra en el cuadro de contenido debajo de las fotos y encima de «INCLUYE». El cambio aplica únicamente a Yoga.

**Archivo:** `services.js`.

## Country Host — encuadre de la tercera foto — 2026-11-12
**Estado: Resuelto.** En escritorio, la tercera foto de la galería centra el grupo de personas y reduce el protagonismo de la planta mediante `object-position: center 76%`. El ajuste queda limitado a la ficha de Country Host.

**Archivo:** `styles.optimized.css`.

## Portada de Yoga — ajuste tras mover la descripción — 2026-11-12
**Estado: Resuelto.** La portada quedó más compacta y angosta, con el título dentro de un marco fino y transparente, sin el rectángulo translúcido pesado ni la descripción en el hero.

**Archivo:** `styles.optimized.css`.

## Portada de Yoga — bajar imagen — 2026-11-12
**Estado: Resuelto.** La imagen de fondo de la portada se desplazó visualmente hacia abajo mediante un ajuste específico de `background-position`, en escritorio y móvil.

**Archivo:** `styles.optimized.css`.

## Fotos de surf — restaurar foto faltante — 2026-11-12
**Estado: Resuelto.** Se reincorporó la foto del surfista con traje oscuro en la ola verde a la galería de Fotos de surf, que vuelve a tener cinco imágenes.

**Archivo:** `services.js`.

## Fotos de surf — cuadrícula 2×2 — 2026-11-12
**Estado: Resuelto.** Se anuló la regla que hacía que la tercera foto ocupara toda la fila; ahora la galería mantiene dos columnas y coloca la foto del surfista con traje oscuro a la izquierda y la del surfista sin remera a la derecha en la fila inferior.

**Archivo:** `styles.optimized.css`.
