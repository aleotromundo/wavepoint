# Brief de producción — Video vertical “Afiche e Iniciativa Vivero”

## Objetivo

Crear una primera versión de un video vertical para redes sociales y WhatsApp usando:

1. Un video horizontal de naturaleza como fondo.
2. Un PDF de 9 páginas que contiene textos, logotipos e imágenes preparados sin fondo.

La intención es que las páginas del PDF aparezcan sobre el video, en el mismo orden, sin placas rectangulares ni fondos sólidos que tapen completamente el video. El resultado debe conservar una estética limpia, prolija y natural.

## Archivos de entrada

### Video de fondo

Archivo recibido originalmente:

`1000089436.mp4`

Propiedades observadas:

- Duración aproximada: 40 segundos.
- Orientación: horizontal.
- Resolución original: 848×478.
- Tiene audio AAC que debe conservarse, salvo que una revisión indique lo contrario.
- El contenido muestra flores amarillas, vegetación, árboles, paisaje y agua.

Si el archivo no está disponible en la nueva sesión, pedir al usuario que lo vuelva a adjuntar. No reemplazarlo por material generado por IA.

### PDF de referencia

Repositorio de GitHub:

`aleotromundo/wavepoint`

Archivo exacto en la raíz del repositorio:

`Afiche e Iniciativa Vivero (Sin Fondo).pdf`

El PDF tiene 9 páginas panorámicas y está preparado como elementos sin fondo. Usar las páginas como referencia y, siempre que sea posible, renderizarlas conservando transparencia para no perder tipografías, logotipos, sombras ni detalles gráficos.

## Contenido y orden obligatorio

Usar las 9 páginas del PDF en este orden, sin cambiar los textos ni reescribirlos:

1. Título: “¡PLANTEMOS UNA IDEA JUNTOS!” y la bajada correspondiente.
2. Invitación a todos los integrantes de la comunidad a sumarse.
3. Texto sobre impulsar la creación de un vivero en el Parque Piero.
4. Texto sobre un espacio para encontrarnos, compartir y construir entre todos.
5. Pregunta: “¿Te sumás a hacerlo crecer?”.
6. Cierre textual de la iniciativa de Movimiento Kairós.
7. Logotipo de Red Salvia.
8. Logotipo de Movimiento Kairós.
9. Placa final/resumen que combina título, textos y logotipos.

No corregir ortografía, no cambiar palabras y no alterar el orden. Sí se permite cambiar tamaños, escala y ubicación para adaptar la composición a vertical.

## Formato de salida

Crear una primera versión final con estas características:

- Relación de aspecto: 9:16.
- Resolución recomendada: 720×1280.
- Formato: MP4.
- Códec de video: H.264, píxel `yuv420p`.
- Audio: conservar el audio original sincronizado, AAC aproximadamente 128 kbps.
- Duración: conservar aproximadamente los 40 segundos del video original.
- Archivo liviano, apto para WhatsApp y redes, con buena legibilidad.
- Usar `faststart` para facilitar reproducción y envío.

No exportar todavía a 1080p si eso aumenta innecesariamente el peso: el material original es 848×478 y la prioridad es una versión vertical nítida, liviana y funcional.

## Adaptación del video horizontal a vertical

No usar solamente un recorte vertical fijo en el centro durante todo el video.

Crear una ventana vertical 9:16 dentro del video horizontal y desplazarla suavemente en sentido horizontal a lo largo del video, aprovechando las zonas más interesantes de cada momento. El movimiento debe ser discreto, fluido y justificado por el contenido:

- Al inicio, priorizar las flores amarillas y el sector visualmente más atractivo.
- Cuando el plano muestre paisaje, árboles o agua, mover lentamente la ventana hacia la zona relevante.
- En primeros planos de flores, mantener el sujeto principal dentro del encuadre y evitar movimientos innecesarios.
- Hacer que el desplazamiento sea lento, con interpolación suave, sin saltos ni paneos bruscos.
- Evitar que el movimiento distraiga de los textos.
- Si una toma ya tiene movimiento propio, reducir el movimiento artificial del recorte.
- No deformar el video: conservar proporciones originales.
- Revisar el resultado en pantalla de celular para confirmar que el encuadre no corta accidentalmente el elemento principal.

Una solución válida es usar FFmpeg con `scale` manteniendo proporción y un `crop` vertical de 720×1280 cuyo eje X cambie mediante una expresión suave por tramos. Si conviene, usar keyframes o generar primero un video vertical base con un pequeño paneo digital.

## Composición de las páginas sobre el video

Usar los elementos del PDF como overlays transparentes, no como imágenes con fondo blanco.

Criterios:

- Mantener textos, logos, colores, sombras y estilo gráfico del PDF.
- Reubicar y escalar con criterio para que todo sea legible en 9:16.
- No deformar logotipos ni textos.
- No forzar la página panorámica completa como una miniatura ilegible.
- En cada página, recortar el área transparente y adaptar el bloque visual al formato vertical.
- Preferir una composición centrada o levemente desplazada según el fondo.
- Dejar márgenes seguros arriba y abajo para que WhatsApp o redes no tapen contenido con sus controles.
- No agregar cajas, banners opacos ni fondos sólidos salvo que una prueba de legibilidad demuestre que son imprescindibles.
- Mantener el texto sobre zonas del video con suficiente contraste. Si hace falta, usar únicamente una sombra, contorno o leve oscurecimiento detrás del texto, respetando el estilo existente del PDF.

## Ritmo sugerido

El video dura aproximadamente 40 segundos y hay 9 páginas. Usar como punto de partida unos 4,4 segundos por página, ajustando levemente si alguna página necesita más tiempo de lectura.

Propuesta inicial:

- Página 1: 0:00–0:04,5
- Página 2: 0:04,5–0:09,0
- Página 3: 0:09,0–0:13,5
- Página 4: 0:13,5–0:18,0
- Página 5: 0:18,0–0:22,5
- Página 6: 0:22,5–0:27,0
- Página 7: 0:27,0–0:31,5
- Página 8: 0:31,5–0:35,5
- Página 9: 0:35,5–0:40,0

Estas duraciones son una guía, no una obligación matemática. Si una frase necesita más tiempo, priorizar la lectura. Mantener el orden exacto.

Para la primera versión, usar transiciones muy sobrias:

- Entrada/salida con fundido corto de aproximadamente 0,15–0,30 segundos.
- Nada de efectos llamativos, zooms de texto, rebotes o animaciones que modifiquen el diseño.
- El texto debe aparecer de manera limpia, como una secuencia editorial.

## Audio

Conservar el audio original del video en la primera versión. No agregar música ni voz en off sin autorización. Verificar que el audio quede sincronizado y que no haya silencios inesperados, clipping o pérdida de pista.

## Flujo técnico recomendado

1. Descargar el PDF desde el repositorio de GitHub usando la conexión ya autenticada.
2. Inspeccionar las 9 páginas y renderizarlas con transparencia.
3. Inspeccionar el video con `ffprobe`: duración, resolución, frame rate y pistas de audio.
4. Extraer fotogramas representativos del video para definir la trayectoria horizontal del recorte vertical.
5. Definir la ventana 9:16 y una trayectoria X suave por tramos, cuidando flores, paisaje y agua.
6. Renderizar cada página del PDF como overlay transparente adaptado a 720×1280.
7. Componer las 9 páginas sobre el video, respetando orden y tiempos.
8. Mantener el audio original.
9. Exportar el MP4 vertical liviano.
10. Extraer fotogramas del resultado en los cambios de página y revisar:
   - Legibilidad de todos los textos.
   - Logos completos y sin deformación.
   - Ausencia de fondo blanco o rectángulos no deseados.
   - Correcta posición del recorte vertical.
   - Que el movimiento horizontal sea suave.
   - Que ningún texto quede tapado por controles típicos de redes.
   - Sin parpadeos, cortes, saltos ni desincronización.
11. Si algo queda ilegible o mal ubicado, corregir tamaño/posición, sin cambiar textos.

## Entregables

Entregar como mínimo:

1. MP4 final vertical, listo para revisar y enviar por WhatsApp.
2. Si es posible, una segunda versión con el mismo video pero sin audio, únicamente para comparar visualmente.
3. Un pequeño informe indicando resolución, duración, peso, audio y si se utilizó paneo horizontal del recorte.
4. Conservar el script o archivo de proyecto usado para que luego se puedan ajustar tiempos, tamaños y efectos sin rehacer todo.

## Criterio de aprobación

La primera versión está aprobada si:

- Se reconoce claramente el video original de fondo.
- El resultado es vertical y se ve bien en un celular.
- Las 9 páginas aparecen en orden.
- Los textos son exactamente los del PDF.
- Los logotipos se ven completos y nítidos.
- No hay fondo opaco innecesario.
- La lectura es cómoda.
- El recorte se mueve horizontalmente con suavidad cuando corresponde.
- El archivo es liviano y reproducible en WhatsApp.

No buscar una versión publicitaria recargada en esta etapa. Primero entregar una versión fiel, limpia y prolija. Los efectos adicionales se decidirán después de revisar esta primera prueba.
