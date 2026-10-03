#!/usr/bin/env python3
"""Quita cintas de cine y cuadraditos de la seccion aliados,
   agrega el titulo 'Aliados y patrocinadores' arriba del subtitulo."""

import re

# ── 1. INDEX.HTML ──────────────────────────────────────────────
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1a. Reemplazar el allies-heading: quitar la regla, agregar titulo principal
old_heading = (
    '<div class="allies-heading" aria-describedby="alliesHeadingDescription">'
    '<span class="allies-heading-rule" aria-hidden="true"></span>'
    '<h2 id="alliesHeading" data-i18n="alliesHeadingTitle">'
    'Las marcas y negocios locales que creen en WavePoint y ayudan a hacerlo posible'
    '</h2>'
    '<span class="sr-only" id="alliesHeadingDescription" '
    'data-i18n="alliesHeadingDescription">'
    'Aliados y patrocinadores de WavePoint en Tamarindo.</span></div>'
)

new_heading = (
    '<div class="allies-heading" aria-describedby="alliesHeadingDescription">\n'
    '<h2 class="allies-main-title" data-i18n="partnersSectionTitle">'
    'Aliados y patrocinadores</h2>\n'
    '<h2 id="alliesHeading" data-i18n="alliesHeadingTitle">'
    'Las marcas y negocios locales que creen en WavePoint y ayudan a hacerlo posible'
    '</h2>\n'
    '<span class="sr-only" id="alliesHeadingDescription" '
    'data-i18n="alliesHeadingDescription">'
    'Aliados y patrocinadores de WavePoint en Tamarindo.</span></div>'
)

if old_heading in html:
    html = html.replace(old_heading, new_heading)
    print("OK: allies-heading reemplazado")
else:
    print("WARN: no encontre allies-heading exacto (puede que ya este cambiado)")

# 1b. Quitar ally-heading-tile del primer ticker-set (con sr-only)
tile1 = (
    '<div class="ally-heading-tile">'
    '<span class="ally-heading-marker" aria-hidden="true"></span>'
    '<h2 data-i18n="partnersSectionTitle">Aliados y patrocinadores</h2>'
    '<span class="sr-only" data-i18n="partnersSectionSubtitle">'
    'Colaboradores reales del proyecto y marcas que acompanan '
    'la experiencia WavePoint en Tamarindo.</span></div>\n'
)
if tile1 in html:
    html = html.replace(tile1, "")
    print("OK: ally-heading-tile #1 eliminado")
else:
    # Intentar sin el salto de linea
    tile1b = tile1.rstrip("\n")
    if tile1b in html:
        html = html.replace(tile1b, "")
        print("OK: ally-heading-tile #1 eliminado (sin newline)")
    else:
        print("WARN: no encontre ally-heading-tile #1")

# 1c. Quitar ally-heading-tile del segundo ticker-set (sin sr-only)
tile2 = (
    '<div class="ally-heading-tile">'
    '<span class="ally-heading-marker" aria-hidden="true"></span>'
    '<h2 data-i18n="partnersSectionTitle">Aliados y patrocinadores</h2>'
    '</div>\n'
)
if tile2 in html:
    html = html.replace(tile2, "")
    print("OK: ally-heading-tile #2 eliminado")
else:
    tile2b = tile2.rstrip("\n")
    if tile2b in html:
        html = html.replace(tile2b, "")
        print("OK: ally-heading-tile #2 eliminado (sin newline)")
    else:
        print("WARN: no encontre ally-heading-tile #2")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("index.html guardado\n")

# ── 2. STYLES.CSS ─────────────────────────────────────────────
with open("styles.css", "r", encoding="utf-8") as f:
    css = f.read()

new_css_block = """
/* ALIADOS: Limpieza de cintas y nuevo titulo */
.allies-heading-rule,
.ally-heading-marker {
  display: none !important;
}

.allies-heading {
  text-align: center;
  margin-bottom: 32px;
  padding: 0 20px;
}

.allies-main-title {
  display: block;
  margin: 0 0 12px;
  color: var(--wp-sun);
  font: 800 13px/1 "DM Sans", sans-serif;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.allies-heading > h2[id="alliesHeading"] {
  margin: 0;
  font-size: clamp(26px, 4vw, 40px);
  line-height: 1.15;
  font-weight: 1000;
  color: #ffffff;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

"""

# Insertar despues del @import
import_line = '@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600&display=swap");'
if "allies-main-title" not in css:
    css = css.replace(import_line, import_line + "\n" + new_css_block)
    print("OK: CSS de aliados agregado")
else:
    print("WARN: CSS de aliados ya existe")

with open("styles.css", "w", encoding="utf-8") as f:
    f.write(css)
print("styles.css guardado\n")

print("LISTO! Revisa en el navegador y despues hace:")
print("  git add index.html styles.css")
print('  git commit -m "style: limpiar cintas de aliados, titulo arriba del carrusel"')