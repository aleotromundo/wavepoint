# Auditoría técnica de WavePoint

Fecha: 2026-10-06

## Resumen ejecutivo

WavePoint es un sitio multipágina estático, servido directamente desde la raíz por Vercel. La experiencia principal está en `index.html`, con lógica en JavaScript vanilla y contenido bilingüe en objetos de traducción. No hay framework, package manager, base de datos ni autenticación existente. El repositorio tiene aproximadamente 441 MB, principalmente por videos y PDFs.

El sitio se mantiene como una experiencia estática. La herramienta temporal de reemplazo de fotos se ejecuta localmente desde `dashboard.html`, sin autenticación ni subida de archivos a un servidor.

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
2. **Edición editorial:** no existe un CMS persistente. Las sustituciones definitivas de fotos se hacen sobre los assets del repositorio mediante la herramienta local temporal.
3. **Persistencia editorial:** el dashboard local no sincroniza usuarios ni despliegues; sus cambios quedan en archivos del repositorio seleccionado.
4. **Seguridad de la herramienta temporal:** el dashboard no debe dejarse publicado después de confirmar las fotos; debe eliminarse junto con sus archivos auxiliares.
5. **Medios:** las imágenes se convierten en el navegador a WebP y se escriben en rutas locales seleccionadas por el usuario.
6. **Rutas:** el fallback de Vercel puede devolver `index.html` para URLs no existentes; conviene mantener `manus-routes.json` sincronizado y probar cada página publicada.
7. **Calidad de código:** hay HTML duplicado (`<!doctype html>` y `<!DOCTYPE html>` en `index.html`) y bastante contenido hardcodeado fuera de `data-i18n`; el dashboard temporal se limita al catálogo de fotos y no modifica textos ni estructura por sí solo.
8. **Dependencias externas:** clima depende de Open-Meteo, cámaras de Castr, fuentes de Google Fonts y asistente de OpenAI. Deben tener fallbacks y límites, especialmente para disponibilidad y privacidad.
9. **Secretos:** no se detectaron claves secretas versionadas; `OPENAI_API_KEY` se consume desde entorno serverless.
10. **Peso del repo:** 441 MB es elevado para un sitio estático; conviene comprimir videos, usar formatos modernos y CDN/storage para medios.

## Revisión de continuidad — 2026-10-07

- Se confirmó que el proyecto sigue siendo estático, sin `package.json` ni build obligatorio, con HTML/CSS/JavaScript vanilla y Vercel como hosting.
- La sintaxis JavaScript existente fue revisada con `node --check`; no se detectaron errores de sintaxis en los archivos JavaScript del proyecto.
- Se agregaron `README.md` y `AGENTS.md` como entradas de trabajo, además de `CLAUDE.md` y `.github/copilot-instructions.md` como adaptadores para herramientas específicas. La fuente de verdad de producto continúa siendo `PROJECT_GUIDE.md`.
- Se mantiene como riesgo abierto la ausencia de persistencia CMS de producción, los límites globales del asistente y la optimización del peso multimedia. El dashboard de fotos es una herramienta local de una sola etapa y no reemplaza un CMS.
- El cambio visual del logo posterior a las tarjetas de servicios quedó limitado a `index.html`, `piloto.html` y `styles.css`; no se modificó el hero.

## Auditoría de imágenes — 2026-10-07

- Se revisaron 182 archivos raster/vectoriales locales mediante SHA-256. Se encontraron siete grupos de duplicados exactos.
- Seis grupos corresponden a archivos archivados en `assets/img/archive/duplicates/`, copias históricas o assets de marca sin uso equivalente activo. No se eliminaron ni reemplazaron porque no afectan la experiencia publicada.
- Un grupo sí estaba activo en dos contextos: `assets/img/site/home-hero.jpg` y `assets/img/guide/after-guide.jpg` eran exactamente la misma imagen. `after-guide.jpg` se usaba en la tarjeta `Explora Tamarindo` de `index.html` y `piloto.html`.
- Se reemplazó únicamente esa referencia por `assets/img/guide/cover.jpg`, una composición específica de la guía con playa, atardecer y vista aérea. El hero conserva su imagen original.
- No se cambió ningún asset de alojamiento, servicio o colaborador sin una alternativa local confiable. La comparación perceptual automatizada quedó limitada porque Python no está instalado en este entorno; la coincidencia aplicada fue exacta por hash y se verificó visualmente.

## Qué cubre el piloto

- Dashboard local en `dashboard.html` para localizar fotos, elegir reemplazos desde un dispositivo, convertirlos a WebP y guardarlos en la ruta exacta.
- Actualización automática de referencias cuando la foto original tenía una extensión distinta de WebP.
- Descarga alternativa cuando el navegador no permite escritura directa en carpetas.
- La herramienta no forma parte de la navegación pública y debe eliminarse al finalizar la selección de fotos.

## Próximo paso recomendado para producción

1. Definir el proveedor de persistencia (Vercel KV/Postgres, Sanity, Contentful o un CMS propio).
2. Mover textos e imágenes a un esquema versionado por página, idioma y campo.
3. Confirmar las fotos en el sitio, revisar el diff y eliminar el dashboard temporal junto con sus archivos auxiliares.
4. Mantener validación de MIME, tamaño y dimensiones al incorporar futuros assets.
5. Subir imágenes a storage/CDN con validación de MIME, tamaño, dimensiones y nombre.
6. Añadir historial de versiones, borrador/publicado, preview y rollback.
7. Agregar historial de versiones y rollback si el sitio evoluciona hacia un CMS persistente.
8. Optimizar medios y revisar CSP, headers de seguridad, sitemap, canonical y metadatos OG.
