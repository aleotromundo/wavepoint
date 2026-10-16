# Auditoría técnica de WavePoint

Fecha: 2026-10-06

## Resumen ejecutivo

WavePoint es un sitio multipágina estático, servido directamente desde la raíz por Vercel. La experiencia principal está en `index.html`, con lógica en JavaScript vanilla y contenido bilingüe en objetos de traducción. No hay framework, package manager, base de datos ni autenticación existente. El repositorio tiene aproximadamente 441 MB, principalmente por videos y PDFs.

El sitio se mantiene como una experiencia estática. La herramienta temporal de reemplazo de fotos fue retirada de la raíz y archivada bajo `cosas al pedo/dashboard/`; la carpeta completa se excluye del despliegue público.

> **Limitación importante:** `localStorage` es útil para un piloto de un navegador, pero no es persistencia compartida ni control de acceso de producción. Los cambios no se publican para otros visitantes hasta migrar el almacenamiento a un backend/CMS.

## Arquitectura encontrada

- **Hosting:** Vercel, sin build (`vercel.json`, `outputDirectory: "."`).
- **Routing:** primero filesystem y luego fallback general a `index.html`; `manus-routes.json` declara rutas del sitio.
- **Frontend:** HTML, CSS y JavaScript vanilla.
- **Contenido:** textos bilingües principalmente en `script.js`, `trip-builder.js`, `guide-i18n.js` y atributos `data-i18n` del HTML.
- **Imágenes:** rutas locales dentro de `assets/`, con algunos videos y reproductores externos de Castr.
- **Backend:** `api/assistant.js`, endpoint POST con rate limit en memoria y OpenAI vía variable de entorno.
- **Estado cliente:** idioma y preferencias visuales en `localStorage`; no hay CMS ni persistencia editorial compartida.

## Hallazgos y riesgos

1. **CMS inexistente:** no había lugar persistente para guardar cambios editoriales.
2. **Edición editorial:** no existe un CMS persistente. Los contenidos y assets activos se mantienen como archivos del repositorio.
3. **Persistencia editorial:** no hay sincronización editorial compartida ni panel activo.
4. **Herramienta temporal retirada:** sus fuentes están archivadas y `cosas al pedo/` se excluye del despliegue mediante `.vercelignore`.
5. **Medios:** las imágenes activas se mantienen dentro de `assets/`; los archivos sin referencia activa verificada se conservan en el archivo fuera del despliegue.
6. **Rutas:** el fallback de Vercel puede devolver `index.html` para URLs no existentes; conviene mantener `manus-routes.json` sincronizado y probar cada página publicada.
7. **Calidad de código:** hay HTML duplicado (`<!doctype html>` y `<!DOCTYPE html>` en `index.html`) y bastante contenido hardcodeado fuera de `data-i18n`.
8. **Dependencias externas:** clima depende de Open-Meteo, cámaras de Castr, fuentes de Google Fonts y asistente de OpenAI. Deben tener fallbacks y límites, especialmente para disponibilidad y privacidad.
9. **Secretos:** no se detectaron claves secretas versionadas; `OPENAI_API_KEY` se consume desde entorno serverless.
10. **Peso del repo:** 441 MB es elevado para un sitio estático; conviene comprimir videos, usar formatos modernos y CDN/storage para medios.

## Revisión de continuidad — 2026-10-07

- Se confirmó que el proyecto sigue siendo estático, sin `package.json` ni build obligatorio, con HTML/CSS/JavaScript vanilla y Vercel como hosting.
- La sintaxis JavaScript existente fue revisada con `node --check`; no se detectaron errores de sintaxis en los archivos JavaScript del proyecto.
- Se agregaron `README.md` y `AGENTS.md` como entradas de trabajo, además de `CLAUDE.md` y `.github/copilot-instructions.md` como adaptadores para herramientas específicas. La fuente de verdad de producto continúa siendo `PROJECT_GUIDE.md`.
- Se mantiene como riesgo abierto la ausencia de persistencia CMS de producción, los límites globales del asistente y la optimización del peso multimedia. La herramienta temporal de fotos fue archivada el 2026-10-10 y no forma parte del sitio publicado.
- El cambio visual del logo posterior a las tarjetas de servicios quedó limitado a `index.html`, `piloto.html` y `styles.css`; no se modificó el hero.

## Auditoría de imágenes — 2026-10-07

- Se revisaron 182 archivos raster/vectoriales locales mediante SHA-256. Se encontraron siete grupos de duplicados exactos.
- Seis grupos corresponden a archivos archivados en `assets/img/archive/duplicates/`, copias históricas o assets de marca sin uso equivalente activo. No se eliminaron ni reemplazaron porque no afectan la experiencia publicada.
- Un grupo sí estaba activo en dos contextos: `assets/img/site/home-hero.jpg` y `assets/img/guide/after-guide.jpg` eran exactamente la misma imagen. `after-guide.jpg` se usaba en la tarjeta `Explora Tamarindo` de `index.html` y `piloto.html`.
- Se reemplazó únicamente esa referencia por `assets/img/guide/cover.jpg`, una composición específica de la guía con playa, atardecer y vista aérea. El hero conserva su imagen original.
- No se cambió ningún asset de alojamiento, servicio o colaborador sin una alternativa local confiable. La comparación perceptual automatizada quedó limitada porque Python no está instalado en este entorno; la coincidencia aplicada fue exacta por hash y se verificó visualmente.

## Herramienta temporal — estado archivado el 2026-10-10

La versión anterior del piloto permitía localizar fotos, convertir reemplazos a WebP y guardarlos en rutas locales. Sus fuentes y auxiliares se trasladaron a `cosas al pedo/dashboard/`; el historial de su implementación se conserva en `CHANGELOG.md`.

## Próximo paso recomendado para producción

1. Definir el proveedor de persistencia (Vercel KV/Postgres, Sanity, Contentful o un CMS propio).
2. Mover textos e imágenes a un esquema versionado por página, idioma y campo.
3. Confirmar las fotos en el sitio y revisar el diff.
4. Mantener validación de MIME, tamaño y dimensiones al incorporar futuros assets.
5. Subir imágenes a storage/CDN con validación de MIME, tamaño, dimensiones y nombre.
6. Añadir historial de versiones, borrador/publicado, preview y rollback.
7. Agregar historial de versiones y rollback si el sitio evoluciona hacia un CMS persistente.
8. Optimizar medios y revisar CSP, headers de seguridad, sitemap, canonical y metadatos OG.

## Auditoría de Estadías y hoteles — 2026-10-09

- Se comparó la versión actual con el estado previo al commit `5c358bc` (rediseño de Estadías y hoteles).
- Se confirmó una regresión: las imágenes de las fichas podían quedar debajo del texto, Tamalodge quedaba sin galería al excluir su única imagen y la página perdía la organización de contenido principal + formulario lateral.
- Se restauró la estructura anterior: descripción editorial, galería general de alojamientos, aviso de tarifas, fichas con galería superior y formulario lateral sticky en escritorio.
- Se conservaron las mejoras de accesibilidad existentes: nombres de títulos, grupos de imágenes, textos alternativos bilingües y navegación del formulario.
- Se validó en el navegador la ruta `service-detail.html?service=alojamiento-experiencias` en inglés y español; se revisaron escritorio y el quiebre responsive de hasta 980 px. También se validaron sintaxis JavaScript y `git diff --check`.

## Auditoría de fondos de Servicios — 2026-10-09

Se reprodujo en la portada la superposición de imágenes de fondo. La configuración anterior usaba tres capas de 36% de alto en posiciones 0%, 32% y 64%, más una capa superior de 44% que comenzaba en -20%; por eso la primera y segunda imagen se cruzaban ampliamente.

La corrección asigna a las tres imágenes principales franjas consecutivas de 33.3333% en 0%, 33.3333% y 66.6667%. La capa decorativa superior queda fuera de la primera franja, con una presencia más sutil. Se validó el DOM en escritorio: las capas terminan y comienzan en los mismos límites, sin solapamiento vertical.

## Corrección de dirección — Estadías y hoteles — 2026-10-09

La restauración anterior había retrocedido demasiado: se tomó como referencia el estado previo al rediseño, aunque el estado correcto era la versión moderna del commit `6274861`. Se revirtió únicamente ese retroceso. La página vuelve a usar el selector visual de alojamientos, el formulario moderno actualizado y las galerías seleccionadas por ficha, conservando aparte la corrección de separación de fondos de Servicios.


## Limpieza de recursos sin uso activo — 2026-10-10

- El dashboard y los prototipos de clima independientes quedaron archivados bajo `cosas al pedo/`; se quitaron de la raíz y de las referencias activas del sitio.
- Se trasladaron al archivo las imágenes que no tenían referencias activas verificadas. Se dejaron intactos el hero protegido y los iconos meteorológicos resueltos dinámicamente.
- `.vercelignore` excluye toda la carpeta de archivo del despliegue público.
