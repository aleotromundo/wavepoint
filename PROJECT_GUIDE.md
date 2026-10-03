# WavePoint — Guía del proyecto

## 1. Propósito

WavePoint es un sitio web estático orientado a surf, clima, cámaras en vivo, servicios y experiencias locales en Tamarindo, Costa Rica. El sitio combina información útil, contenido visual, colaboradores locales y formularios de consulta que preparan mensajes para WhatsApp.

La guía existe para que otra persona o agente pueda continuar el proyecto sin depender del contexto de un chat anterior.

## 2. Arquitectura general

El repositorio no utiliza un framework frontend ni un sistema de build obligatorio. La aplicación se sirve como archivos estáticos HTML, CSS, JavaScript, imágenes y videos.

| Área | Archivos principales | Responsabilidad |
| --- | --- | --- |
| Página principal | `index.html` | Hero, clima, cámaras, servicios, guía, aliados, promociones y contacto. |
| Catálogo de servicios | `service.html` | Listado completo de servicios reales. |
| Detalle de servicio | `service-detail.html` + `services.js` | Página dinámica según `?service=...`, preguntas y solicitud por WhatsApp. |
| Guía turística | `guia-playas.html` | Playas, spots y experiencias de Guanacaste. |
| Páginas de colaboradores | `Enlaces/*.html` | Fichas individuales de aliados locales. |
| Comportamiento global | `script.js` | Traducciones, clima, cámaras, idioma, navegación, animaciones, asistente y modales. |
| Selector de idioma | `lang-switch.js` | Selector ES/EN presente en todas las páginas, idioma guardado en `localStorage` y traducción de navegación y pie compartidos. |
| Estilos globales | `styles.css` | Diseño, responsive, animaciones, tarjetas, fondos y accesibilidad visual. |
| Datos de servicios | `services.js` | Catálogo, descripciones, imágenes, preguntas y formularios de cada servicio. |
| Asistente | `api/assistant.js` | Contexto y endpoint serverless del asistente local. |
| Rutas Vercel | `vercel.json` | Servir archivos estáticos y fallback de rutas. |
| Historial | `CHANGELOG.md` | Registro detallado de cambios, decisiones y validaciones. |

## 3. Páginas y navegación

Las páginas públicas principales son:

- `/index.html` o `/`: página de inicio.
- `/service.html`: catálogo completo.
- `/service-detail.html?service=<id>`: detalle de un servicio.
- `/guia-playas.html`: guía turística.
- `/Enlaces/capitan-suizo.html`.
- `/Enlaces/casa-maderas.html`.
- `/Enlaces/nostros.html`.
- `/Enlaces/occidental.html`.
- `/Enlaces/red-door.html`.

El header comparte navegación hacia Inicio, Guía turística, Servicios, Nosotros y Colaboradores. En pantallas pequeñas se utiliza el menú hamburguesa.

## 4. Catálogo real de servicios

El catálogo confirmado tiene diez servicios. No agregar servicios inventados ni volver a mostrar servicios retirados sin confirmación explícita.

1. **Stays and Hotels** / Estadías y hoteles — consultar Hotel Tamalodge, Casa Aura, Casa Madera o Capitán Suizo.
2. **Surf lessons** / Clases de surf — primera ola o siguiente paso según nivel.
3. **Surf coaching** — coaching con posibilidad de fotos o videoanálisis.
4. **Yoga** — sesión adaptada a experiencia y horario.
5. **Witch’s Rock surf trip** / Surf trip a Roca Bruja — salida guiada según grupo y condiciones.
6. **Snorkeling & catamaran** / Snorkel y catamarán — opciones de navegación y snorkel.
7. **Diving** / Buceo — experiencia de buceo local; puede referenciarse como Tama Dive cuando corresponda.
8. **ATV tours** — recorridos y requisitos del operador.
9. **Build your own experience** / Pack ajustable — combinación personalizada de actividades.
10. **Retreats** / Retiros — viajes grupales con programa y estadía.

Los IDs actuales de detalle son:

```text
alojamiento-experiencias
clases-de-surf
surf-coaching
yoga
roca-bruja
snorkel-catamaran
buceo
atv
pack-ajustable
retiros
```

### Regla de sincronización

Cuando cambie el catálogo, actualizar de forma coordinada:

- Las tarjetas de servicios en `index.html`.
- Las tarjetas del catálogo en `service.html`.
- El array `services` en `services.js`.
- Las traducciones de títulos y descripciones en `script.js`.
- El contexto del asistente en `api/assistant.js` si afecta sus recomendaciones.
- El `CHANGELOG.md` con archivos, decisión y validación.

## 5. Pack ajustable

El Pack ajustable tiene un selector visual de experiencias. Las tarjetas deben conservar:

- Imagen del servicio.
- Título.
- Descripción breve.
- Checkbox accesible.
- Estado visual de selección.
- Contador dinámico de experiencias seleccionadas.
- Integración con el formulario que genera la consulta de WhatsApp.

No reemplazar el selector por una lista simple sin una razón de producto clara. Si se agregan servicios al pack, deben existir también en el catálogo real.

## 6. Clima y cámaras

### Clima

El clima se obtiene mediante Open-Meteo:

- API meteorológica: `https://api.open-meteo.com/v1/forecast`.
- API marina: `https://marine-api.open-meteo.com/v1/marine`.
- Zona horaria: `America/Costa_Rica`.
- Coordenadas usadas: Tamarindo, Costa Rica.

Los identificadores importantes del markup son `temp`, `weatherIcon`, `weatherState`, `waveHeight`, `wind`, `localTime` y `updatedText`. No renombrarlos sin actualizar la lógica de `script.js`.

La tarjeta de clima debe conservar:

- Valores grandes y legibles.
- Unidades visibles.
- Icono meteorológico claro.
- Fallback cuando no hay conexión.
- Respeto por `prefers-reduced-motion`.

### Cámaras

La sección de cámaras muestra:

- Capitán Suizo.
- Casa de Maderas.
- Red Door como próxima cámara.

Las cámaras activas usan iframes de Castr. El horario habitual de disponibilidad es aproximadamente de 4:45 a.m. a 6:30 p.m. hora de Costa Rica. La lógica de descanso nocturno está en `script.js`.

La sección Cámaras puede utilizar un video ambiental ligado al scroll, pero debe conservar:

- Overlay suficiente para leer títulos y tarjetas.
- Poster o fondo de respaldo.
- `muted`, `playsinline` y carga diferida o de metadatos.
- Fallback estático.
- Desactivación con `prefers-reduced-motion`.

## 7. Reglas visuales

### Identidad

- El lenguaje visual es oceánico, local, cálido y relacionado con surf.
- Usar azul profundo, teal/turquesa, aqua, crema y dorado como acentos.
- Mantener buen contraste en textos y controles.
- Evitar estilos genéricos de plantilla que no tengan relación con WavePoint.

### Hero

El hero es una pieza protegida. No modificar su composición, videos, logo, jerarquía o posición sin autorización explícita del usuario.

El hero actual incluye:

- Videos de fondo.
- Logo WavePoint.
- Ubicación Tamarindo, Costa Rica.
- Título y subtítulo.
- Acciones principales.
- Tarjeta de clima.

### Tarjetas y secciones

Las tarjetas pueden usar transparencia controlada, `backdrop-filter`, bordes suaves, sombras profundas y estados hover discretos. No sacrificar legibilidad por transparencia.

Las secciones fuera del hero pueden usar gradientes oceánicos, capas radiales y fondos ambientales. El fondo nunca debe competir con las tarjetas ni con el contenido.

### Favicon y logo original

Desde 2026-10-03 el favicon activo es el ícono de la ola con punto que proporcionó el usuario (fondo negro con esquinas redondeadas y las esquinas transparentes). Archivos:

```text
assets/wavepoint-favicon.ico              16, 32 y 48 px (también copiado en /favicon.ico)
assets/wavepoint-favicon-16.png / -32.png / -192.png / -512.png
assets/wavepoint-apple-touch-icon.png     180 × 180, cuadrado negro completo (iOS aplica su propia máscara)
```

Todas las páginas lo enlazan con `<link rel="icon">` (ico, 32 y 192) y `<link rel="apple-touch-icon">`. No redibujar, recolorear ni reinterpretar este ícono sin autorización explícita. Los favicons anteriores (`assets/wavepoint-favicon-original.jpeg`, `assets/wavepoint-favicon-inverted.jpeg` y `assets/wavepoint-favicon.svg`) se conservan como recursos históricos y ya no son el favicon activo.

## 8. Responsive y accesibilidad

Breakpoints relevantes usados por el CSS:

- `1180px`: ajustes de layout de escritorio intermedio.
- `980px`: navegación móvil/tablet, grids de una o dos columnas y cambios del hero.
- `640px`: layout móvil principal.
- `480px` y `390px`: ajustes finos para pantallas pequeñas.

Antes de cerrar un cambio visual, revisar al menos:

- 320 px.
- 375 px.
- 430 px.
- Escritorio de aproximadamente 1280 px.

Reglas de accesibilidad:

- Mantener `alt` descriptivos en imágenes de contenido.
- Mantener `aria-label`, `aria-live`, `aria-expanded` y roles existentes.
- Los controles deben poder recibir foco visible.
- No depender solamente del color para indicar selección o estado.
- Respetar `prefers-reduced-motion`.
- Los videos de fondo deben ser silenciosos y no bloquear interacción.

## 9. Assets importantes

| Asset | Uso |
| --- | --- |
| `assets/wavepoint-favicon.ico`, `wavepoint-favicon-*.png`, `wavepoint-apple-touch-icon.png` | Favicon activo (ola con punto, esquinas transparentes). |
| `assets/wavepoint-favicon-original.jpeg` | Favicon anterior, recurso histórico. |
| `assets/wavepoint-logo.png` | Logo de navegación y panel móvil. |
| `assets/wavepoint-hero-mark.png` | Marca grande del hero. |
| `assets/wavepoint-watermark.png` | Marca sobre streams de cámara. |
| `assets/videohero0.mp4` | Video ambiental y prueba de video ligado al scroll. |
| `assets/videohero1.mp4` | Video alternativo del hero. |
| `assets/camera-rest.png` | Estado de descanso nocturno de cámaras. |
| `assets/meteocons/` | Iconos locales del clima, animados y estáticos. |
| `assets/legacy/` | Fotografías históricas y de servicios. |

No agregar imágenes externas nuevas si ya existe un asset local adecuado. Si se incorpora un asset nuevo, registrar su propósito en el changelog.

## 10. Preview local

Desde la raíz del repositorio:

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Luego abrir:

```text
http://localhost:4173
```

Para probar una página de detalle:

```text
http://localhost:4173/service-detail.html?service=pack-ajustable
```

La vista previa pública temporal del sandbox usa la plantilla de URL del entorno activo. No compartir endpoints de administración.

## 11. Validación antes de entregar

Ejecutar como mínimo:

```bash
node --check script.js
node --check services.js
node --check lang-switch.js
git diff --check
```

Para validar el favicon anterior (histórico):

```bash
python3 - <<'PY'
from pathlib import Path
from PIL import Image
p = Path('assets/wavepoint-favicon-original.jpeg')
with Image.open(p) as image:
    assert image.format == 'JPEG'
    assert image.size == (1024, 1024)
print('favicon original: OK')
PY
```

Revisar también:

- Que no haya enlaces a servicios retirados.
- Que todas las imágenes referenciadas existan.
- Que las tarjetas tengan buen contraste.
- Que no haya overflow horizontal en móvil.
- Que el hero no haya cambiado cuando el trabajo no lo incluye.
- Que los cambios estén documentados en `CHANGELOG.md`.

## 12. Flujo de trabajo recomendado

1. Leer `PROJECT_GUIDE.md` y la entrada más reciente de `CHANGELOG.md`.
2. Revisar `git status --short --branch`.
3. Identificar el alcance exacto antes de editar.
4. Mantener separados los cambios funcionales, visuales y de contenido cuando sea posible.
5. Implementar en los archivos correspondientes.
6. Probar primero sintaxis y formato.
7. Revisar responsive y estados de accesibilidad.
8. Actualizar `CHANGELOG.md` con fecha, archivos, comportamiento esperado y validaciones.
9. Revisar `git diff` antes del commit.
10. Hacer commit con un mensaje claro.
11. Hacer push únicamente cuando el usuario lo solicite o cuando la autorización de la sesión lo cubra explícitamente.

## 13. Convenciones de commits

Preferir mensajes breves y descriptivos en inglés usando Conventional Commits:

```text
feat: add a service selector
fix: correct mobile hero logo size
style: polish translucent section surfaces
docs: add project guide
refactor: simplify weather rendering
```

No mezclar en un commit cambios no relacionados si se pueden separar razonablemente.

## 14. Changelog

`CHANGELOG.md` es obligatorio para cambios relevantes. Cada entrada debe explicar:

- Fecha.
- Nombre del cambio.
- Archivos afectados.
- Qué cambió y por qué.
- Comportamiento esperado.
- Validaciones realizadas.

El changelog debe ser útil para una persona que retome el proyecto semanas después, no solamente una lista de mensajes de commit.

## 15. Despliegue

El repositorio está configurado para Vercel mediante `vercel.json`:

- Sitio estático.
- `outputDirectory` en la raíz.
- `cleanUrls: true`.
- Fallback de rutas hacia `index.html`.

Antes de publicar:

1. Confirmar que el working tree contiene solo cambios intencionales.
2. Ejecutar validaciones.
3. Revisar el diff.
4. Actualizar changelog.
5. Crear commit.
6. Subir a `origin main` si fue solicitado.
7. Confirmar que `main` y `origin/main` estén sincronizados.

## 16. Límites y decisiones protegidas

- No modificar el hero sin permiso explícito.
- No inventar servicios, colaboradores, precios, horarios ni disponibilidad.
- No reintroducir Fotos de surf, Fotografía acuática o Surfskate como servicios del catálogo real sin confirmación.
- No reemplazar el favicon activo (ola con punto, 2026-10-03) por una reinterpretación.
- No borrar datos ni assets sin revisar referencias y documentar la decisión.
- No agregar dependencias o frameworks para cambios que puedan resolverse con HTML, CSS y JavaScript existentes.
- No subir secretos, claves API ni credenciales al repositorio.
- Mantener la comunicación con el usuario en español salvo que solicite otro idioma.
