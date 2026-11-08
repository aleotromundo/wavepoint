# WavePoint

Sitio web estático bilingüe de experiencias de surf, turismo y colaboradores locales en Tamarindo, Costa Rica.

## Instrucciones obligatorias para cualquier IA

Si estás leyendo este repositorio para continuar un trabajo, seguí este orden antes de editar:

1. Leer este `README.md`.
2. Leer `SEGUIMIENTO.md` y ubicar el punto de trabajo si la tarea afecta una guía, decisión, estado o pendiente.
3. Leer `PROJECT_GUIDE.md` completo y respetar sus decisiones protegidas.
4. Leer la entrada más reciente de `CHANGELOG.md`.
5. Revisar `git status --short --branch` y no sobrescribir cambios existentes que no pertenezcan a tu tarea. Si el trabajo se hace desde varios dispositivos, sincronizar primero con `git pull --rebase` o `git fetch` + revisión del estado para evitar perder cambios locales de otra copia.
6. Auditar el alcance exacto, implementar el cambio mínimo y mantener separados los cambios visuales, funcionales y de contenido.
7. Validar sintaxis, referencias, responsive, accesibilidad y `git diff --check`.
8. Si corresponde, actualizar `SEGUIMIENTO.md` con la resolución, archivos, validaciones y pendientes residuales.
9. Registrar el cambio en `CHANGELOG.md` con archivos, motivo, comportamiento esperado y validaciones cuando sea un cambio relevante.

## Cómo trabajar con el usuario

- Comunicarse en español salvo pedido explícito de otro idioma.
- Entender el pedido antes de actuar, pero avanzar autónomamente cuando el alcance sea claro y reversible.
- No hacer preguntas rutinarias ni pedir confirmación para ajustes normales del proyecto; preguntar solo cuando falte una decisión que cambie producto, datos, permisos, seguridad o intención.
- Mantener los títulos, textos aprobados, servicios, colaboradores, precios, horarios y disponibilidad existentes; no inventar información.
- Explicar brevemente qué se cambió, qué se validó y qué queda pendiente. No prometer resultados de SEO, disponibilidad de cámaras, clima o reservas que no puedan verificarse.
- No crear commits, hacer push, publicar ni cambiar servicios externos salvo que el usuario lo pida o la autorización activa lo permita.

## Arquitectura rápida

- `index.html`: home, hero, clima, cámaras, servicios, guía, aliados y contacto.
- `service-detail.html` + `services.js`: detalles y solicitudes por servicio.
- `trip-builder.html` + `trip-builder.js`: armador de viaje.
- `guia-playas.html` + `guide-i18n.js`: guía bilingüe.
- `Enlaces/*.html`: colaboradores.
- `script.js`: comportamiento global, traducciones, clima, cámaras, navegación y modales.
- `lang-switch.js`: selector ES/EN compartido.
- `styles.css`: diseño, responsive, animaciones y accesibilidad visual.
- `api/assistant.js`: endpoint serverless del asistente.
- `vercel.json`, `robots.txt`, `sitemap.xml`: despliegue y SEO técnico.

No hay framework ni build obligatorio: el sitio se sirve como archivos estáticos desde la raíz.

## Validación mínima

```bash
node --check script.js
node --check services.js
node --check lang-switch.js
git diff --check
```

También revisar imágenes/rutas locales, enlaces internos, `prefers-reduced-motion`, foco de teclado, ausencia de overflow horizontal en 320/375/430 px y el hero en escritorio. Para preview local:

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

## Documentación de continuidad

- `AGENTS.md`: reglas de entrada para agentes y herramientas compatibles.
- `SEGUIMIENTO.md`: estado central de tareas, resoluciones, validaciones y pendientes.
- `PROJECT_GUIDE.md`: fuente de verdad de producto, arquitectura, copy, catálogo y restricciones.
- `AUDIT.md`: auditoría técnica, riesgos y próximos pasos de producción.
- `CHANGELOG.md`: registro obligatorio de cambios y validaciones.
- `.github/copilot-instructions.md`: adaptación de estas reglas para GitHub Copilot.
- `CLAUDE.md`: adaptación de estas reglas para Claude.

Si hay conflicto entre una instrucción genérica y `PROJECT_GUIDE.md`, prevalece la decisión específica del proyecto y, ante una ambigüedad material, se consulta al usuario.
