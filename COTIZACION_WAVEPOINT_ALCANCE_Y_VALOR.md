# WavePoint
## Alcance construido, análisis de complejidad y referencia de cotización

**Fecha:** 11 de octubre de 2026  
**Proyecto:** sitio web bilingüe de experiencias, alojamientos y guía local en Tamarindo  
**Estado analizado:** versión publicada en `wavepoint-five.vercel.app` y repositorio `aleotromundo/wavepoint`

> Este documento no pretende reemplazar una cotización comercial final ni una validación de precios con el cliente. Es una forma ordenada de explicar qué se construyó, por qué dejó de ser una web estática simple, qué valor tiene cada bloque y qué falta para considerar el producto cerrado para producción.

---

## 1. Resumen ejecutivo

WavePoint comenzó con la apariencia de un sitio estático: páginas HTML, estilos, imágenes y enlaces de contacto. Sin embargo, el alcance actual evolucionó hasta convertirse en una **experiencia web interactiva y bilingüe**, con catálogo de servicios, fichas dinámicas, formularios de solicitud, cálculo de estimaciones, armador de viajes, datos meteorológicos, cámaras en vivo, guía turística, colaboradores, asistente con IA, video de fondo, selección y optimización de imágenes, SEO técnico y despliegue continuo.

La diferencia comercial importante es esta:

- Una **web estática simple** muestra información y deriva a un canal de contacto.
- WavePoint además **organiza decisiones**, calcula importes, recoge datos, prepara solicitudes, mantiene estados, integra servicios externos y adapta la experiencia a distintos idiomas y pantallas.

### Estimación global de referencia

| Nivel | Qué representa | Valor de desarrollo orientativo |
|---|---|---:|
| Sitio estático simple | Una portada, secciones informativas, responsive básico y contacto externo | **USD 1.000–1.800** |
| Sitio estático profesional | Diseño visual propio, varias páginas, galerías, SEO básico, responsive cuidado y despliegue | **USD 2.000–3.500** |
| Alcance WavePoint construido | Sitio bilingüe, catálogo, fichas, formularios, WhatsApp, armador, precios, clima, cámaras, guía, colaboradores, asistente y QA | **USD 6.500–11.000** |
| Cierre de producción pendiente | Validación comercial, pruebas completas, legales, newsletter, SEO final y mejoras de mantenimiento | **USD 1.500–3.500 adicionales** |

Los importes son **valor de reposición orientativo**, no necesariamente el precio que se haya cobrado ni una obligación de cobrar cada bloque por separado. Sirven para mostrar al cliente cuánto trabajo y complejidad hay detrás del resultado visible.

---

## 2. Qué entendemos por “web estática simple”

Una web estática simple tendría, aproximadamente:

- Una portada o entre una y cinco páginas.
- Texto e imágenes proporcionados por el cliente.
- Menú y navegación interna.
- Diseño responsive general.
- Botón de WhatsApp, correo o Instagram.
- Sin base de datos.
- Sin usuarios ni panel de administración.
- Sin cálculo de precios.
- Sin formularios complejos.
- Sin integraciones de datos en tiempo real.
- Sin lógica de selección de productos.
- Sin asistente de IA.
- Sin persistencia de respuestas.

En ese escenario, el trabajo principal es maquetar, ordenar el contenido, aplicar una identidad visual y dejar el sitio publicado.

WavePoint supera ese límite cuando aparecen estas necesidades:

1. El visitante debe elegir entre varias experiencias.
2. Cada experiencia tiene preguntas diferentes.
3. Las tarifas dependen de personas, modalidad o cotización.
4. Hay que distinguir subtotal, tarifa por persona y servicios sin precio.
5. Las respuestas deben convertirse en un mensaje útil.
6. Hay que soportar español e inglés sin duplicar todo el sitio.
7. Hay que conectarse a clima, oleaje, cámaras y un asistente.
8. El contenido debe funcionar en escritorio, tablet y móvil.
9. Hay que mantener galerías, imágenes, fallback de video, accesibilidad y SEO.

Ese es el punto en el que el proyecto deja de ser una simple presentación y pasa a ser una **herramienta de captación y preparación de consultas**.

---

## 3. Inventario actual del proyecto

El repositorio contiene aproximadamente:

- **14 páginas HTML**: portada, guía, armador, ficha dinámica y páginas de colaboradores.
- **11 archivos JavaScript**.
- **5 hojas o archivos CSS**.
- **10 servicios comerciales principales**, más el armador y retiros.
- **Más de 50 preguntas configuradas** para fichas y solicitudes.
- **Más de 600 claves de traducción** en español e inglés.
- **170 assets activos** fuera del archivo histórico.
- **104 imágenes WebP**, imágenes JPG/PNG, SVG, videos MP4 y recursos de marca.
- Aproximadamente **24,9 MB de video** y **18,8 MB de imágenes WebP** activas.
- `api/assistant.js` como endpoint serverless para el asistente.
- Despliegue estático en Vercel, sin framework ni build obligatorio.

### Archivos centrales

| Área | Archivos | Función |
|---|---|---|
| Portada | `index.html`, `script.js` | Hero, clima, servicios, cámaras, guía, aliados, FAQ, contacto y newsletter |
| Estilos | `styles.css`, `styles.optimized.css` | Identidad visual, responsive, fondos, animaciones, tarjetas y accesibilidad visual |
| Servicios | `services.js`, `service-detail.html` | Catálogo, fichas dinámicas, galerías, preguntas y solicitudes |
| Armador | `trip-builder.html`, `trip-builder.js`, `trip-builder.css` | Selección de experiencias, precios, carrito, resumen y WhatsApp |
| Guía | `guia-playas.html`, `guide-i18n.js` | Guía turística bilingüe |
| Idioma | `lang-switch.js`, `script.js` | Selector español/inglés y traducción compartida |
| Integraciones | `script.js`, `api/assistant.js` | Open-Meteo, Marine API, Castr, WhatsApp y OpenAI |
| Configuración | `vercel.json`, `robots.txt`, `sitemap.xml` | Hosting, rutas y SEO técnico |

---

## 4. Evolución del alcance: de simple a producto web

### Etapa 1 — Base estática y estructura

**Qué incluye:**

- Estructura HTML.
- Header, navegación y footer.
- Secciones informativas.
- Tarjetas de servicios.
- Imágenes y copy.
- Responsive inicial.
- Publicación en Vercel.

**Valor orientativo:** USD 1.000–1.800  
**Horas aproximadas:** 25–45 h

Esto es lo que normalmente se podría llamar “hacer una web estática”.

### Etapa 2 — Identidad visual y experiencia de marca

**Qué se agregó:**

- Sistema visual propio de WavePoint.
- Tipografías y paleta oceánica.
- Hero con videos de fondo.
- Logo, marca de agua y recursos de identidad.
- Fondos compuestos de Servicios.
- Tarjetas, galerías, overlays, gradientes y estados hover.
- Diseño responsive específico, no solamente adaptación automática.
- Fallback de imagen cuando el video no puede mostrarse.

**Valor orientativo:** USD 900–1.700  
**Horas aproximadas:** 25–45 h

El hero, los fondos compuestos y los estados responsive ya implican dirección de arte, pruebas y resolución de casos que no aparecen en una página estática básica.

### Etapa 3 — Sitio bilingüe

**Qué se agregó:**

- Selector español/inglés.
- Traducción de navegación, footer, formularios y contenido editorial.
- Persistencia de la preferencia de idioma.
- Traducciones específicas de servicios y preguntas.
- Revisión de textos alternativos y mensajes de estado.

**Valor orientativo:** USD 600–1.200  
**Horas aproximadas:** 18–35 h

No es simplemente duplicar una página: hay que mantener equivalencia entre estructuras, formularios, labels, estados, botones y mensajes dinámicos.

### Etapa 4 — Catálogo y fichas dinámicas

**Qué se agregó:**

- Catálogo de experiencias, alojamientos y retiros.
- Fichas reutilizables con datos por servicio.
- Galerías y textos alternativos.
- Preguntas diferentes según cada experiencia.
- Datos específicos de alojamiento, surf, fotografía, surfskate, ATV, yoga, Roca Bruja, snorkel y catamarán.
- Plantilla común para solicitud y disponibilidad.
- Contenido bilingüe dentro del modelo de datos.

**Valor orientativo:** USD 1.200–2.300  
**Horas aproximadas:** 35–65 h

La ficha dinámica tiene valor adicional porque permite sostener varios productos sin crear manualmente toda la lógica desde cero para cada página.

### Etapa 5 — Formularios y solicitudes por WhatsApp

**Qué se agregó:**

- Encuestas por servicio.
- Campos de fecha y cantidades.
- Preguntas condicionales y opcionales.
- Validación básica de campos.
- Mensajes bilingües preparados para WhatsApp.
- Confirmación clara de que el usuario debe tocar “Enviar”.
- Aclaración de que la consulta no confirma una reserva ni procesa un pago.
- Formulario general de contacto.
- Flujo de solicitud desde el armador y desde las fichas.

**Valor orientativo:** USD 900–1.800  
**Horas aproximadas:** 28–50 h

Esta es una de las primeras áreas donde el sitio deja de ser puramente informativo: empieza a funcionar como herramienta comercial para recibir consultas mejor estructuradas.

### Etapa 6 — Armador de viajes y carrito

**Qué se construyó:**

- Selección de varias experiencias.
- Carrito y resumen.
- Fechas por experiencia.
- Cantidad de personas.
- Modalidad de fotografía acuática o desde la playa.
- Selección de alojamiento.
- Separación entre servicios con precio y servicios a cotizar.
- Multiplicación de tarifas por persona.
- Resumen de subtotal.
- Mensaje de WhatsApp con el detalle de la propuesta.
- Carrito flotante para móvil.
- Ajustes específicos para que el resumen entre en escritorio y notebook.
- Persistencia de respuestas durante la interacción del armador.

**Valor orientativo:** USD 1.200–2.400  
**Horas aproximadas:** 35–65 h

Este bloque es comparable a desarrollar una pequeña aplicación web dentro del sitio. No es una tarjeta con un botón: tiene estado, reglas, cálculos, validaciones, traducciones y distintas representaciones del mismo dato.

### Etapa 7 — Clima, oleaje y cámaras

**Qué se agregó:**

- Datos actuales desde Open-Meteo.
- Datos marinos desde Marine API.
- Iconos meteorológicos.
- Estado de actualización y fallback.
- Cámaras Castr embebidas.
- Estados de cámara, carga y descanso.
- Modal de cámara.
- Compatibilidad con el horario local.
- Video de demostración de formato pre-roll.

**Valor orientativo:** USD 700–1.500  
**Horas aproximadas:** 20–40 h

Las cámaras y el clima dependen de proveedores externos. Eso suma lógica de errores, estados de espera, cambios de disponibilidad y necesidad de no presentar datos no verificables como certezas.

### Etapa 8 — Guía, colaboradores y contenido editorial

**Qué se agregó:**

- Guía turística de playas, naturaleza, cascadas y actividades.
- Traducción bilingüe.
- Páginas de colaboradores.
- Navegación cruzada entre servicios, guía y socios.
- Galerías y contenido local.
- Mensajes de seguridad y coordinación.
- Correcciones de imágenes y reemplazo de assets.

**Valor orientativo:** USD 700–1.500  
**Horas aproximadas:** 22–42 h

Este bloque combina maquetación, contenido, arquitectura de información, revisión de enlaces, selección visual y responsabilidad editorial.

### Etapa 9 — Asistente con IA

**Qué se agregó:**

- Panel conversacional dentro del sitio.
- Endpoint serverless.
- Integración con un modelo de lenguaje.
- Contexto específico de WavePoint.
- Respuestas en español e inglés.
- Límites y mensajes de fallback.
- Reglas para no prometer reservas, seguridad, precios finales o disponibilidad sin confirmar.

**Valor orientativo:** USD 500–1.200  
**Horas aproximadas:** 15–30 h

Aunque el asistente se vea como un botón, por detrás requiere endpoint, configuración, contexto, control de errores y criterios para evitar respuestas comerciales incorrectas.

### Etapa 10 — Assets, optimización y QA

**Qué se hizo:**

- Búsqueda y selección de imágenes.
- Reemplazo de fotos que no representaban bien el producto.
- Conversión y optimización WebP.
- Revisión de dimensiones y peso.
- Video fallback.
- Limpieza de recursos sin uso activo.
- Revisión de responsive en distintos breakpoints.
- Validación de JavaScript y `git diff --check`.
- Despliegue y verificación pública.
- Revisión de caché de estilos y assets.

**Valor orientativo:** USD 900–1.800  
**Horas aproximadas:** 25–50 h

Este trabajo suele ser invisible para el cliente porque no produce una sección nueva, pero es el que evita imágenes rotas, videos ausentes, desbordes, textos ilegibles y cambios que no llegan al sitio publicado.

---

## 5. Resumen económico por módulos

| Módulo | Horas orientativas | Valor orientativo |
|---|---:|---:|
| Base estática y arquitectura | 25–45 h | USD 1.000–1.800 |
| Identidad visual, hero y responsive | 25–45 h | USD 900–1.700 |
| Sistema bilingüe | 18–35 h | USD 600–1.200 |
| Catálogo y fichas dinámicas | 35–65 h | USD 1.200–2.300 |
| Formularios y solicitudes | 28–50 h | USD 900–1.800 |
| Armador, precios y carrito | 35–65 h | USD 1.200–2.400 |
| Clima y cámaras | 20–40 h | USD 700–1.500 |
| Guía y colaboradores | 22–42 h | USD 700–1.500 |
| Asistente con IA | 15–30 h | USD 500–1.200 |
| Assets, QA, SEO técnico y despliegue | 25–50 h | USD 900–1.800 |
| **Valor de reposición acumulado estimado** | **223–467 h** | **USD 8.600–17.700** |

> El rango acumulado es deliberadamente amplio porque mezcla desarrollo, diseño, contenido, selección de imágenes, pruebas, correcciones y coordinación. Para presentar una cifra cerrada al cliente conviene elegir un paquete, no sumar automáticamente todos los máximos.

### Referencia de paquete comercial recomendado

Para explicar el proyecto sin abrumar con cada hora, se puede presentar así:

| Paquete | Descripción | Referencia |
|---|---|---:|
| **Web estática base** | Portada, páginas informativas, responsive, contacto y publicación | **USD 1.500** |
| **Experiencia WavePoint** | Diseño propio, video, galería, bilingüismo, catálogo y fichas | **USD 3.000–4.000** |
| **Sistema comercial WavePoint** | Todo lo anterior más formularios, WhatsApp, armador, cálculo de precios, clima, cámaras, guía y asistente | **USD 7.000–10.000** |
| **Cierre de producción** | Validación de proveedores, QA final, legales, newsletter, SEO y ajustes pendientes | **USD 1.500–3.000** |

Una forma honesta de explicarlo sería:

> “La web estática era solamente la base. El trabajo creció porque el sitio ahora no solo muestra información: también organiza experiencias, calcula estimaciones, recoge datos, prepara solicitudes, integra servicios externos, funciona en dos idiomas y necesita estados de error y validación.”

---

## 6. Qué parte del alcance pedido en el DOCX ya está hecha

### Resuelto o muy avanzado

- Cálculo por persona en el armador.
- Separación entre experiencias con precio y servicios a cotizar.
- Modalidades de fotografía.
- Preguntas específicas de fotografía y surfskate.
- Mensaje preparado para WhatsApp.
- Aclaración de “consulta, no reserva” y “sin pago todavía”.
- Sección “Cómo funciona tu solicitud”.
- Formulario de contacto antes del footer.
- Guía bilingüe.
- Carrito móvil y ajustes del resumen en escritorio.
- Fallback del video del hero.
- Nueva foto de Surfskate y descripción coherente.
- Base de fichas dinámicas y catálogo de servicios.
- Base de páginas de colaboradores.
- Integración de clima, oleaje, cámaras y asistente.

### Parcial o pendiente

1. **Definición comercial de cada servicio**
   - Duración.
   - Lugar.
   - Incluidos.
   - Exclusiones.
   - Capacidad.
   - Unidad de cobro.
   - Clima, cancelación y reprogramación.

2. **Formulario común completo**
   - Fecha alternativa o ventana de fechas.
   - Flexibilidad.
   - Adultos, niños y edades de manera consistente.
   - Horario, idioma, traslado y alojamiento.

3. **Guía factual**
   - Tarifas, accesos, fuentes, fecha de actualización y algunas afirmaciones turísticas.

4. **Legales**
   - Términos y Privacidad todavía funcionan principalmente como información dentro del sitio, no como páginas legales completas.

5. **Newsletter**
   - El bloque visual existe, pero falta verificar una suscripción real, qué se envía y cómo se cancela.

6. **Asistente**
   - Falta agregar acciones directas del tipo “Ver clases”, “Armar viaje” y “Hablar con WavePoint”.

7. **SEO final**
   - Hay canonical, metadatos y sitemap, pero el sitemap publicado todavía no representa todas las rutas importantes del sitio.

8. **QA integral**
   - Falta cerrar una matriz formal en móvil, escritorio, idiomas, cambios de datos, fechas, niños, múltiples servicios y recepción real de solicitudes.

9. **Persistencia y administración**
   - No existe CMS ni panel para editar contenido sin tocar el repositorio.
   - El sitio sigue siendo estático y los datos editoriales viven en archivos.

10. **Pago y reserva real**
    - El sitio prepara solicitudes; no confirma disponibilidad, no cobra y no emite reservas.
    - Implementar pago y reserva sería un proyecto posterior, no una corrección menor.

---

## 7. Qué debería quedar fuera de la cotización actual o cotizarse aparte

Para evitar expectativas incorrectas, conviene separar estos futuros trabajos:

- Sistema de reservas real con disponibilidad.
- Pasarela de pago.
- Panel de administración o CMS.
- Base de datos de clientes y consultas.
- Historial de solicitudes.
- Emails automáticos.
- CRM.
- Gestión de proveedores.
- Calendarios sincronizados.
- Autenticación de usuarios.
- Reglas de cancelación y reembolsos automatizadas.
- Gestión legal completa y revisión profesional.
- Mantenimiento mensual de contenido, cámaras y servicios.
- Producción fotográfica o audiovisual.
- Suscripción real a alertas.

Estos puntos no deberían quedar implícitamente incluidos solo porque el sitio tenga un botón de WhatsApp o un formulario visual.

---

## 8. Entregables que el cliente puede recibir

Para que el cliente sepa qué está pagando, la entrega puede describirse como:

1. Sitio web publicado y responsive.
2. Portada de WavePoint con hero visual, video y fallback.
3. Navegación bilingüe español/inglés.
4. Catálogo de experiencias y alojamientos.
5. Fichas individuales con galerías y formularios.
6. Armador de viajes con carrito y estimaciones.
7. Solicitudes estructuradas por WhatsApp.
8. Sección de clima y oleaje.
9. Cámaras en vivo integradas.
10. Guía local bilingüe.
11. Páginas de colaboradores.
12. Asistente de orientación con IA.
13. Formulario general de contacto.
14. SEO técnico inicial y configuración de despliegue.
15. Optimización y organización de imágenes y videos.
16. Verificación de publicación y correcciones responsive.

### Aclaración funcional importante

El sitio actualmente **no promete ni realiza**:

- Reserva confirmada.
- Cobro online.
- Disponibilidad garantizada.
- Envío automático de WhatsApp.
- Recepción comprobada de la consulta.
- Confirmación automática de proveedores.
- Gestión de cancelaciones.

El usuario prepara el pedido, revisa el mensaje y debe tocar **Enviar** en WhatsApp. Luego WavePoint coordina con el proveedor.

---

## 9. Plan recomendado para cerrar el proyecto

### Fase A — Cierre comercial

- Validar con cada proveedor qué incluye cada producto.
- Definir duración, cupos, horarios y unidad de cobro.
- Confirmar precios públicos y qué queda sujeto a cotización.
- Definir políticas de clima, cancelación y reprogramación.

### Fase B — Uniformidad de fichas

- Completar la estructura común de todas las experiencias.
- Homogeneizar preguntas generales.
- Añadir preguntas específicas donde falten.
- Revisar mensajes de solicitud y traducciones.

### Fase C — Prueba de aceptación

- Probar una solicitud individual y una combinada.
- Probar español e inglés.
- Probar desktop, tablet y móvil.
- Probar fotografía acuática y de playa.
- Probar fechas pasadas y futuras.
- Probar niños, cantidades y servicios sin tarifa.
- Revisar que el mensaje coincida con la pantalla.

### Fase D — Producción y confianza

- Completar términos y privacidad.
- Verificar newsletter o retirar la promesa de alertas hasta tenerla conectada.
- Actualizar sitemap y metadatos de todas las páginas importantes.
- Completar acciones del asistente.
- Auditar accesibilidad, rendimiento y carga de videos.

---

## 10. Cómo explicarlo verbalmente al cliente

Una explicación corta y clara podría ser:

> “La propuesta empezó como una web estática informativa, pero durante el desarrollo se convirtió en una herramienta comercial. Además de la portada y las páginas visuales, ahora tiene catálogo de experiencias, fichas dinámicas, dos idiomas, formularios, cálculo de tarifas, armador de viajes, carrito, preparación de solicitudes por WhatsApp, clima, oleaje, cámaras en vivo, guía turística, páginas de colaboradores y un asistente. Por eso el valor no corresponde solamente a las páginas visibles: también incluye la lógica que organiza la consulta y los casos de error, responsive, traducciones, imágenes, videos, integraciones y pruebas.”

### Forma de presentar el precio

No hace falta mostrarle todas las horas internas. Es más claro presentar tres niveles:

- **Base estática:** lo que habría costado una web informativa simple.
- **Construcción actual:** el valor de todo lo que se agregó para convertirla en una herramienta comercial.
- **Cierre de producción:** lo que falta validar y terminar para que el producto quede listo para operar con mayor confianza.

---

## Conclusión

WavePoint ya no es una web estática simple. Es un **sitio estático con comportamiento de aplicación web**: conserva una arquitectura sin base de datos ni framework, pero tiene lógica suficiente para gestionar selección, cálculo, traducción, formularios, estados, integraciones y solicitudes.

La parte más importante para la cotización es no confundir “estático” con “simple”. El hecho de que el contenido se sirva desde archivos no elimina el trabajo de diseño, programación, contenidos, integración, QA y mantenimiento.

Como referencia razonable para conversar con el cliente:

- **Web estática simple:** alrededor de USD 1.500.
- **Sitio visual y bilingüe con catálogo:** alrededor de USD 3.000–4.000.
- **Alcance WavePoint construido:** alrededor de USD 7.000–10.000.
- **Cierre de pendientes de producción:** aproximadamente USD 1.500–3.000 adicionales.

La cifra final debería ajustarse según el valor de tu hora, el tiempo real invertido, si incluís mantenimiento y el nivel de responsabilidad comercial que asumas después de la entrega.
