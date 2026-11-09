# Auditoría completa — Guía Segunda Parte

**Fecha:** 2026-11-08/09  
**Repositorio:** `wavepoint`  
**Alcance:** contraste de los ocho puntos de `Guia_Segunda_Parte_Completa.pdf` contra el estado vivo del repositorio. Se revisaron código, rutas, assets, traducciones, formularios, enlaces, reglas responsive y sintaxis JavaScript. No se modificó código de la aplicación durante esta auditoría.

## Resumen ejecutivo

El repositorio tiene los ocho desarrollos principales implementados o iniciados, pero el estado real no es “8 de 8 resueltos” porque cuatro puntos necesitan correcciones o validaciones adicionales. Durante la auditoría se incorporaron en remoto el tour del estero y la ficha de Buceo/NATIVA; esos avances fueron integrados al resultado final antes de publicar este informe.

### Estado real

| Punto | Estado auditado | Conclusión |
|---:|---|---|
| 1. Ficha de ATV | **Parcial** | La ficha y el cuadro de precios existen, pero fecha y recorrido no son campos estructurados del formulario/armador; además falta un alt en español. |
| 2. Programa de surf de tres días | **Parcial** | La ficha, fotos, precios y validación de fechas funcionan; PT-BR deja alt de fotos en inglés y algunos textos fijos mezclados. |
| 3. Navegación / Embarcaciones | **Parcial** | La ficha está desarrollada y las capacidades principales ya fueron alineadas con la guía; queda confirmar con el proveedor el estado de documentos del capitán y las condiciones comerciales. |
| 4. Local Host / Country Host | **Resuelto** | Ficha nueva, cuatro fotos, bienvenida gratuita, WhatsApp, formulario y traducciones implementados. |
| 5. Local Host incluido en servicios | **Resuelto** | Está incluido en los siete servicios indicados por la guía, dentro de “Qué incluye”, con ES/EN/PT-BR. |
| 6. Tour del estero | **Resuelto** | La ficha, cuatro fotos WebP, formulario, condiciones, CTA de alianzas y traducciones ES/EN/PT-BR están integrados. |
| 7. Portugués y visibilidad | **Parcial** | El selector y gran parte de las traducciones existen; todavía hay textos fijos sin cobertura completa en fichas/armador y se observó mezcla de idiomas. |
| 8. CTA de alianzas | **Resuelto** | CTA visible, WhatsApp con mensaje preparado, QR, copy bilingüe y enlaces implementados. |

## Hallazgos por punto

### 1. ATV — Parcial

**Evidencia:** `services.js` define `id: 'atv'`, los recorridos Explorer/Adventure/Ultimate, los siete importes, la aclaración de precio por cuatriciclo, incluidos, licencia y solicitud de disponibilidad. La ficha tiene estilos específicos y assets existentes. `index.html` enlaza la ficha y `trip-builder.js` incluye ATV.

**Problemas encontrados:**

- El formulario solicita conductores, acompañantes, edades y licencia, pero no tiene un campo estructurado para la fecha ni una selección de recorrido preferido. Esos datos solo pueden terminar en el textarea opcional.
- El armador muestra ATV, pero no permite elegir Explorer/Adventure/Ultimate/Alquiler ni fecha específica.
- `services.js` declara cuatro imágenes principales y solo tres `imageAlts` en español; el cuarto alt puede caer en un fallback genérico.
- Hay reglas responsive, pero no quedó una prueba runtime completa en 320/375/430/1280 px para este punto.

**Acción recomendada:** agregar preguntas y traducciones para fecha y recorrido, incorporarlas explícitamente al mensaje de WhatsApp, reflejarlas en el armador, completar el cuarto alt español y validar visualmente los cuatro anchos.

### 2. Programa de surf de tres días — Parcial

**Evidencia:** `services.js` contiene la ficha separada `surf-programa-3-dias`, tres fotos, progresión Día 1/Día 2/Día 3, precios por persona, formulario de tres fechas y validación de días consecutivos. `index.html` enlaza la ficha. La revisión runtime realizada observó los campos y la ficha renderizada sin errores de consola.

**Problemas encontrados:**

- En PT-BR, la ficha no define `imageAlts` específicos; los alt de las tres fotos quedan en inglés.
- La navegación fija de la ficha/armador no está completamente cubierta por `data-i18n` o traducciones PT-BR; se observó mezcla de portugués, español e inglés en la experiencia.
- La validación responsive completa en 320/375/430 px no quedó documentada para esta auditoría.

**Acción recomendada:** añadir alts PT-BR para las tres imágenes, completar textos fijos y etiquetas accesibles de `service-detail.html` y repetir prueba ES/EN/PT-BR en móvil y escritorio.

### 3. Navegación / Embarcaciones — Parcial

**Evidencia:** `services.js` contiene `id: 'snorkel-catamaran'`, nueva foto, opciones de Papagayo, snorkel, pesca, Bahía Potrero y atardecer; incluye formulario con fecha, experiencia, grupo, modalidad, natación, alojamiento y necesidades alimentarias. La ficha tiene copy, condiciones y traducción PT-BR.

**Estado actual:** los commits remotos posteriores a la primera revisión ya alinearon el copy activo con la guía: Papagayo y snorkel por Guanacaste figuran hasta 7 personas y pesca en mar abierto hasta 4. El punto sigue parcial por la condición publicada “Documentos del capitán en trámite” y porque la capacidad/condiciones deben confirmarse con el proveedor antes de considerarlas definitivas.

**Otros riesgos:** el código mantiene “Documentos del capitán en trámite” y la capacidad/condiciones requieren confirmación del proveedor. Los assets referenciados existen y la sintaxis pasa, pero no se realizó en esta auditoría una prueba visual runtime completa de los cuatro anchos.

**Acción recomendada:** confirmar con el proveedor el estado de los documentos del capitán, la capacidad y las condiciones comerciales; luego validar visualmente en los cuatro anchos.

### 4. Local Host / Country Host — Resuelto

**Evidencia:** existe el servicio `local-host` con ficha nueva, bienvenida presencial de una hora, consultas por WhatsApp durante 48 horas, recomendaciones, orientación, formulario de fecha de llegada, estadía, grupo, alojamiento e intereses. Existen cuatro imágenes locales, alts ES/EN y traducción PT-BR en `pt-br.js`. La tarjeta está enlazada desde `index.html`.

**Validación:** sintaxis JavaScript correcta, assets existentes y estructura de formulario/ruta presentes. No se alteró el comportamiento móvil en esta auditoría.

### 5. Local Host incluido en servicios — Resuelto

**Evidencia:** `services.js` y `pt-br.js` incluyen “Servicio de Local Host” / “Local Host service” / traducción portuguesa dentro de los incluidos de: Clases de surf, Programa de surf de tres días, Yoga, ATV, Estadías y hoteles, Fotos de surf y Surf coaching. No se detectó que se haya añadido a un servicio fuera de esos siete.

**Validación:** precios, descripciones y formularios no fueron modificados por ese cambio; el repositorio está limpio y el último commit es `90b4ae4`.

### 6. Tour del estero — Resuelto

**Evidencia:** los commits remotos `d0823e7` y posteriores agregaron `id: 'mangrove-tour'` en `services.js`, la tarjeta en `index.html`, cuatro fotos WebP, facts, precio de referencia de USD 40 por persona, formulario, condiciones, CTA de alianzas y traducciones. La ficha usa imágenes distintas de visitantes en bote/kayak y tiene ruta `service-detail.html?service=mangrove-tour`.

**Pendiente residual:** confirmar autorización de uso comercial de las imágenes y mantener verificadas las condiciones del proveedor. No falta desarrollo estructural de la ficha.

### 7. Portugués y visibilidad — Parcial

**Evidencia:** existen selector de idioma en `index.html`/`lang-switch.js`, persistencia en `localStorage`, traducciones globales en `pt-br.js`, traducciones de servicios y soporte en el armador. El selector es visible y accesible mediante botones con etiquetas.

**Problemas encontrados:**

- `service-detail.html` conserva textos fijos como “Cámaras en vivo”, “Volver al inicio”, etiquetas de WhatsApp y varios enlaces sin una cobertura uniforme de PT-BR.
- El mecanismo de traducción cubre parte de esos textos mediante mapas, pero la revisión runtime del programa observó mezcla de idiomas, por lo que el punto no debe marcarse completamente resuelto.
- `trip-builder.html` conserva metadatos y algunos textos base en inglés; hace falta verificar que no queden visibles después de cambiar a PT-BR.

**Acción recomendada:** completar la matriz de textos fijos, `aria-label`, alts y metadatos de las páginas secundarias; probar portada, guía, ficha y armador en los tres idiomas.

### 8. CTA de alianzas — Resuelto

**Evidencia:** `index.html` contiene una sección de alianzas con título, descripción, CTA a WhatsApp con mensaje prellenado, enlace QR y texto de seguimiento. `script.js` tiene copy ES/EN y `styles.css`/`styles.optimized.css` contienen estilos del bloque. El QR local está referenciado y el enlace apunta al número de WavePoint.

**Validación:** el CTA está integrado en la portada, tiene `target`, `rel`, texto accesible y una acción reversible de WhatsApp. No se detectó un faltante funcional en la inspección estática.

## Revisión adicional — Buceo / NATIVA — Resuelto

Aunque Buceo aparece como tarea adicional de fotos/ficha y no como uno de los ocho puntos principales de la primera lista, los commits remotos recientes agregaron `id: 'diving'`, cuatro experiencias (Discover Scuba, PADI Open Water, otros cursos PADI y buceo de exploración), modalidad compartida/privada, formulario, cotización sin tarifa inventada, traducciones ES/EN/PT-BR y las cuatro fotos obligatorias convertidas a WebP. La ruta y la tarjeta están integradas en `index.html`. Queda únicamente revisar cambios comerciales si los entrega el proveedor.

## Validaciones globales

- `node --check services.js` — correcto.
- `node --check script.js` — correcto.
- `node --check trip-builder.js` — correcto.
- `node --check pt-br.js` — correcto.
- `git diff --check` — correcto.
- Durante la auditoría `origin/main` avanzó desde `90b4ae4` hasta incorporar el tour del estero y Buceo/NATIVA; el informe final conserva esos cambios y se publica rebasado sobre el estado remoto vigente.
- Se detectó una referencia de asset faltante (`assets/after-chophouse.jpg`) en la búsqueda global; no pertenece a los ocho puntos auditados, pero conviene corregirla o retirar la referencia.
- La revisión visual/runtime completa no se pudo ejecutar para todos los puntos; el servidor auxiliar usado para una inspección se detuvo por inactividad. Esto no cambia los hallazgos estáticos, pero impide declarar validación visual total.

## Prioridades para la próxima etapa

1. Confirmar con el proveedor documentos, capacidad y condiciones de Embarcaciones.
2. Completar campos estructurados de fecha/recorrido de ATV y su mensaje de WhatsApp.
3. Completar PT-BR de fichas, alts, navegación, formulario y armador.
4. Confirmar autorización comercial de las fotos del tour del estero y revisar la ficha de Buceo con NATIVA.
5. Revisar la referencia faltante `assets/after-chophouse.jpg` si continúa presente en el árbol activo.
6. Repetir prueba visual y runtime en móvil/escritorio antes de marcar los puntos parciales como resueltos.

## Conclusión

La base de la Guía Segunda Parte está avanzada y el tour del estero y Buceo/NATIVA ya fueron incorporados en los commits remotos más recientes. Local Host, inclusión de Local Host y alianzas también están integrados. No corresponde considerar cerrada toda la guía: ATV, Embarcaciones, el programa de surf y Portugués todavía requieren correcciones o validación adicional.
