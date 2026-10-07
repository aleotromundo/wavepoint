# Auditoría técnica de WavePoint

Fecha: 2026-10-06

## Resumen ejecutivo

WavePoint es un sitio multipágina estático, servido directamente desde la raíz por Vercel. La experiencia principal está en `index.html`, con lógica en JavaScript vanilla y contenido bilingüe en objetos de traducción. No hay framework, package manager, base de datos ni autenticación existente. El repositorio tiene aproximadamente 441 MB, principalmente por videos y PDFs.

El piloto CMS agregado en esta entrega se accede desde `/admin.html`. Permite autenticarse con `piloto123` inicialmente, editar textos asociados a `data-i18n` y URLs/rutas de imágenes, guardar los cambios en `localStorage`, previsualizar el sitio en el mismo navegador y exportar/importar un JSON de overrides.

> **Limitación importante:** `localStorage` es útil para un piloto de un navegador, pero no es persistencia compartida ni control de acceso de producción. Los cambios no se publican para otros visitantes hasta migrar el almacenamiento a un backend/CMS.

## Arquitectura encontrada

- **Hosting:** Vercel, sin build (`vercel.json`, `outputDirectory: "."`).
- **Routing:** primero filesystem y luego fallback general a `index.html`; `manus-routes.json` declara rutas del sitio.
- **Frontend:** HTML, CSS y JavaScript vanilla.
- **Contenido:** textos bilingües principalmente en `script.js`, `trip-builder.js`, `guide-i18n.js` y atributos `data-i18n` del HTML.
- **Imágenes:** rutas locales dentro de `assets/`, con algunos videos y reproductores externos de Castr.
- **Backend:** `api/assistant.js`, endpoint POST con rate limit en memoria y OpenAI vía variable de entorno.
- **Estado cliente:** idioma y ahora overrides CMS en `localStorage`.

## Hallazgos y riesgos

1. **CMS inexistente:** no había lugar persistente para guardar cambios editoriales.
2. **Autenticación inexistente:** el nuevo endpoint `api/admin-auth.js` valida la contraseña y aplica rate limit en memoria. El fallback `piloto123` existe solo para el piloto; se debe configurar `WAVEPOINT_ADMIN_PASSWORD` y retirar el fallback antes de producción.
3. **Persistencia local:** el piloto no sincroniza cambios entre dispositivos, usuarios ni despliegues.
4. **Seguridad de contraseña:** el panel no debe considerarse protección de contenido sensible. Para producción se requiere sesión firmada, cookies `HttpOnly; Secure; SameSite=None` en Preview HTTPS, CSRF y almacenamiento servidor.
5. **Rate limit:** los límites en memoria de Vercel son best-effort y no globales; producción requiere KV/Redis o proveedor equivalente.
6. **Rutas:** el fallback de Vercel puede devolver `index.html` para URLs no existentes; conviene mantener `manus-routes.json` sincronizado y probar cada página publicada.
7. **Calidad de código:** hay HTML duplicado (`<!doctype html>` y `<!DOCTYPE html>` en `index.html`) y bastante contenido hardcodeado fuera de `data-i18n`; el editor piloto cubre primero los nodos identificables de forma segura.
8. **Dependencias externas:** clima depende de Open-Meteo, cámaras de Castr, fuentes de Google Fonts y asistente de OpenAI. Deben tener fallbacks y límites, especialmente para disponibilidad y privacidad.
9. **Secretos:** no se detectaron claves secretas versionadas; `OPENAI_API_KEY` se consume desde entorno serverless.
10. **Peso del repo:** 441 MB es elevado para un sitio estático; conviene comprimir videos, usar formatos modernos y CDN/storage para medios.

## Revisión de continuidad — 2026-10-07

- Se confirmó que el proyecto sigue siendo estático, sin `package.json` ni build obligatorio, con HTML/CSS/JavaScript vanilla y Vercel como hosting.
- La sintaxis JavaScript existente fue revisada con `node --check`; no se detectaron errores de sintaxis en los archivos JavaScript del proyecto.
- Se agregaron `README.md` y `AGENTS.md` como entradas de trabajo, además de `CLAUDE.md` y `.github/copilot-instructions.md` como adaptadores para herramientas específicas. La fuente de verdad de producto continúa siendo `PROJECT_GUIDE.md`.
- Se mantiene como riesgo abierto la ausencia de persistencia CMS de producción, autenticación robusta para el panel, límites globales del asistente y optimización del peso multimedia. Esta auditoría no convierte esos pendientes en autorización de implementación.
- El cambio visual del logo posterior a las tarjetas de servicios quedó limitado a `index.html`, `piloto.html` y `styles.css`; no se modificó el hero.

## Auditoría de imágenes — 2026-10-07

- Se revisaron 182 archivos raster/vectoriales locales mediante SHA-256. Se encontraron siete grupos de duplicados exactos.
- Seis grupos corresponden a archivos archivados en `assets/img/archive/duplicates/`, copias históricas o assets de marca sin uso equivalente activo. No se eliminaron ni reemplazaron porque no afectan la experiencia publicada.
- Un grupo sí estaba activo en dos contextos: `assets/img/site/home-hero.jpg` y `assets/img/guide/after-guide.jpg` eran exactamente la misma imagen. `after-guide.jpg` se usaba en la tarjeta `Explora Tamarindo` de `index.html` y `piloto.html`.
- Se reemplazó únicamente esa referencia por `assets/img/guide/cover.jpg`, una composición específica de la guía con playa, atardecer y vista aérea. El hero conserva su imagen original.
- No se cambió ningún asset de alojamiento, servicio o colaborador sin una alternativa local confiable. La comparación perceptual automatizada quedó limitada porque Python no está instalado en este entorno; la coincidencia aplicada fue exacta por hash y se verificó visualmente.

## Qué cubre el piloto

- Login en `/admin.html` mediante `POST /api/admin-auth`.
- Edición bilingüe ES/EN de todos los `data-i18n` y `data-i18n-placeholder` detectables por página.
- Edición de imágenes locales detectadas en cada página, con reemplazo global por ruta original.
- Guardado, restauración, búsqueda, selector de página, exportación e importación JSON.
- Aplicación automática de overrides en las páginas públicas mediante `content-overrides.js`.
- Sin modificación destructiva del contenido original: quitar el override restaura el original.

## Próximo paso recomendado para producción

1. Definir el proveedor de persistencia (Vercel KV/Postgres, Sanity, Contentful o un CMS propio).
2. Mover textos e imágenes a un esquema versionado por página, idioma y campo.
3. Configurar `WAVEPOINT_ADMIN_PASSWORD` como secreto y reemplazar el fallback.
4. Emitir sesión firmada en cookie `HttpOnly; Secure; SameSite=None` y proteger endpoints con CSRF.
5. Subir imágenes a storage/CDN con validación de MIME, tamaño, dimensiones y nombre.
6. Añadir historial de versiones, borrador/publicado, preview y rollback.
7. Agregar auditoría de cambios, expiración de sesión y al menos un segundo usuario administrador.
8. Optimizar medios y revisar CSP, headers de seguridad, sitemap, canonical y metadatos OG.
