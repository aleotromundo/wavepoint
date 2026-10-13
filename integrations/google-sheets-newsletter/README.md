# Integración de suscripciones con Google Sheets

Esta integración no modifica el diseño del newsletter. El sitio envía el correo a una URL pública de Google Apps Script mediante `POST`.

## Configuración del dueño de la planilla

1. Crear o abrir la planilla en Google Sheets.
2. Crear una pestaña llamada `Suscriptores`.
3. Desde la planilla, abrir **Extensiones → Apps Script**.
4. Pegar el contenido de `Code.gs` y guardar.
5. Elegir **Implementar → Nueva implementación**.
6. Tipo: **Aplicación web**.
7. Ejecutar como: **Yo** (el propietario de la planilla).
8. Quién tiene acceso: **Cualquier persona**.
9. Implementar y copiar la URL que termina en `/exec`.

No hay que compartir contraseñas. Solo se necesita entregar esa URL pública.

## Configuración del sitio

Reemplazar la cadena vacía de `NEWSLETTER_ENDPOINT` en `script.js` por la URL `/exec` recibida:

```js
const NEWSLETTER_ENDPOINT='https://script.google.com/macros/s/ID_DE_LA_IMPLEMENTACION/exec';
```

Al pulsar **Suscribirme**, el sitio envía `email` y `source`. El Apps Script agrega el correo y la fecha en una nueva fila de `Suscriptores`. No envía notificaciones.
