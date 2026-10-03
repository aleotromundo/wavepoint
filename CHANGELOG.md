
## 2026-10-02

### Guía operativa del proyecto

- `PROJECT_GUIDE.md`: crear una guía completa para continuar WavePoint desde otro chat o con otro agente. Incluye arquitectura, páginas, catálogo real, Pack ajustable, clima, cámaras, reglas visuales, favicon original, responsive, accesibilidad, assets, preview, validaciones, commits, changelog y despliegue.
- La guía deja explícitas las decisiones protegidas: no modificar el hero sin autorización, no inventar servicios, mantener el favicon original del usuario y documentar cada cambio relevante.

### Validación

- Se confirmó que la guía incluye los diez servicios reales y sus IDs actuales.
- Se incluyeron comandos reproducibles de preview y validación.

## 2026-10-02

### Favicon con colores invertidos

- `assets/wavepoint-favicon-inverted.jpeg`: crear una variante invertida directamente desde la imagen original, conservando exactamente su composición, forma y dimensiones 1024 × 1024 px.
- Todas las páginas HTML: cambiar el favicon activo a la variante invertida, manteniendo el original intacto en `assets/wavepoint-favicon-original.jpeg`.

### Validación

- La imagen original no fue sobrescrita.
- La variante invertida conserva formato JPEG y tamaño 1024 × 1024 px.
- Se actualizaron las nueve referencias activas del favicon.
