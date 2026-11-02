# Guía — Segunda parte

Registro de avances, cambios realizados y tiempo de trabajo sobre el repositorio de WavePoint.

## Estado general

- Repositorio: `aleotromundo/wavepoint`
- Rama de trabajo: `main`
- Archivo de referencia: `Guiasegundaparte_`
- Última actualización: 2026-11-01

---

## Punto 1 — Mejorar la ficha de ATV

**Estado:** Completado

**Objetivo de la guía:** Mejorar la ficha de ATV con más explicación y un cuadro de tarifas. La guía indica agregar texto solamente y no requiere fotos nuevas para este punto.

### Trabajo realizado

El punto 1 se dividió en dos partes de trabajo: la actualización del contenido de la ficha ATV y la configuración funcional de ATV dentro de “Armá tu viaje”. No fue solamente una tarea de copiar y pegar texto.

#### 1A. Contenido de la ficha ATV

- Se amplió la ficha de ATV con el título **“ATV en Tamarindo — Elegí tu aventura”**.
- Se agregaron tres modalidades:
  - Explorer — 2 horas.
  - Adventure — 4 horas.
  - Ultimate — 6 horas.
- Se agregó un cuadro de tarifas de referencia:
  - Explorer · 1 persona: USD 90.
  - Explorer · 2 personas: USD 110.
  - Adventure · 1 persona: USD 150.
  - Adventure · 2 personas: USD 180.
  - Ultimate · 1 persona: USD 220.
  - Ultimate · 2 personas: USD 270.
  - Alquiler · 24 horas: USD 120.
- Se aclaró que los precios son por cuatriciclo.
- Se explicó que la tarifa para dos personas corresponde a un conductor y un acompañante compartiendo un ATV.
- Se agregó la información de lo incluido: cuatriciclo, guía local, casco e indicaciones de seguridad.
- Se incorporó el requisito de licencia vigente para conducir.
- Se agregó la aclaración de que las tarifas son de referencia y que consultar no confirma una reserva.
- Se mantuvo la versión en inglés del contenido.
- Se reutilizó la galería existente; no se agregaron fotografías nuevas.

#### 1B. Configuración de “Armá tu viaje”

- Se modificó la configuración de la experiencia ATV dentro de `trip-builder.js`.
- Se actualizó la descripción de la tarjeta para indicar que se elige un recorrido y se consulta la tarifa por vehículo.
- Se configuró la etiqueta **“Tarifa por vehículo”** y el valor **“Consultar según recorrido”**.
- Se evitó que ATV se incorpore al cálculo automático del total como si fuera una tarifa por persona.
- Se actualizó el resumen del viaje para conservar la misma lógica y mostrar la aclaración correspondiente.
- Se actualizó el texto que se prepara para WhatsApp, indicando que la tarifa de ATV se consulta según el recorrido.
- Se mantuvo la lógica de cantidad de personas para completar la solicitud, pero sin usarla para multiplicar el precio de ATV.
- No se cargaron automáticamente las tarifas detalladas en el total del viaje porque el constructor todavía no solicita duración, conductores y acompañantes. Calcularlas únicamente a partir de la cantidad de personas produciría un total incorrecto.

#### 1C. Tabla general de tarifas del index

- Se corrigió la fila **ATV / Cuatriciclos** de la tabla de tarifas ubicada al final de la sección de servicios en el index principal.
- La fila ya no muestra guiones vacíos: ahora indica **“Por vehículo”** en español y **“Per vehicle”** en inglés.
- Se mantuvo la aclaración de que el precio depende del recorrido, la duración y la cantidad de personas que comparten el ATV, evitando presentar una tarifa por persona incorrecta.

### Archivos modificados

- `services.js`
  - Nuevo contenido y renderizado específico para la ficha de ATV.
- `styles.css`
  - Estilos para modalidades, cuadro de tarifas y bloques informativos de ATV.
- `trip-builder.js`
  - Texto, etiqueta de tarifa y comportamiento de ATV dentro de “Armá tu viaje”.
- `pricing-data.js`
  - Presentación de la fila ATV en la tabla general de tarifas del index.

### Validaciones realizadas

- Sintaxis JavaScript validada con `node --check services.js`.
- Sintaxis JavaScript validada con `node --check trip-builder.js`.
- Formato del diff validado con `git diff --check`.
- Se comprobó que el renderizado específico solo se active para `service.id === 'atv'`.
- Se comprobó que la lógica existente de conductores y acompañantes no fuera modificada.
- Se comprobó que `pricing-data.js` continúe tratando ATV como tarifa a confirmar, coherente con el cálculo por vehículo y duración.

### Tiempo registrado

- Inicio aproximado: 2026-11-01 22:16:38 (hora de la sesión).
- Registro realizado: 2026-11-01 22:22:32.
- Tiempo aproximado de trabajo: **6 minutos** para las dos partes iniciales, más la corrección posterior de la tabla general del index.

> El tiempo es aproximado y corresponde al análisis, implementación y validación del punto 1 en esta sesión.

---

## Punto 2 — Programa de surf de tres días

**Estado:** Pendiente

---

## Punto 3 — Mejorar la ficha de navegación

**Estado:** Pendiente

---

## Punto 4 — Nueva ficha de Local Host

**Estado:** Pendiente

---

## Punto 5 — Incluir Local Host gratis en varios servicios

**Estado:** Pendiente

---

## Punto 6 — Desarrollar el tour del estero

**Estado:** Pendiente

---

## Punto 7 — Agregar portugués y hacerlo más visible

**Estado:** Pendiente

---

## Punto 8 — Botón “¿Querés formar una alianza con WavePoint?”

**Estado:** Pendiente

---

## Material visual pendiente

- Fotos nuevas para la ficha de surf.
- Fotos nuevas para las clases de surfskate.
- Fotos nuevas de surf.
- Fotos y ficha de buceo.
