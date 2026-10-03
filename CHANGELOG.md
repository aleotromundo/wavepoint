
## 2026-10-02

### Favicon de alto contraste

- `assets/wavepoint-favicon.svg`: reemplazar el favicon recargado por una silueta de ola simple inspirada en la referencia compartida.
- Usar fondo crema, trazo azul oscuro y punto sólido para mejorar la lectura en pestañas, favoritos y tamaños pequeños de 16–32 px.
- Mantener el mismo nombre de asset, por lo que todas las páginas existentes continúan utilizando automáticamente el favicon actualizado.

### Validación

- Se confirmó que las páginas existentes referencian `assets/wavepoint-favicon.svg` o su ruta relativa equivalente.
- El SVG conserva un `viewBox` cuadrado y no depende de recursos externos.

## 2026-10-02

### Corrección del favicon: imagen original

- `assets/wavepoint-favicon-original.jpeg`: incorporar exactamente la imagen original proporcionada por el usuario, sin redibujarla ni modificar sus colores o composición.
- Todas las páginas HTML: actualizar el enlace del favicon para usar la imagen JPEG original.
- `assets/wavepoint-favicon.svg`: restaurar el asset SVG previo; queda conservado como recurso anterior, pero ya no es el favicon activo.

### Validación

- Se confirmó que la imagen original fue copiada sin transformación.
- Se actualizaron las nueve referencias existentes al favicon para usar `image/jpeg`.
