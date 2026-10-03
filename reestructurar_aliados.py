# reestructurar_aliados.py
import re

html_path = "index.html"
css_path = "styles.css"

# 1. ACTUALIZAR INDEX.HTML
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# Nuevo encabezado jerárquico
nuevo_encabezado = """<div class="allies-heading">
  <h2 class="allies-main-title" data-i18n="partnersSectionTitle">Aliados y patrocinadores</h2>
  <p class="allies-sub-title" data-i18n="alliesHeadingTitle">Las marcas y negocios locales que creen en WavePoint y ayudan a hacerlo posible</p>
</div>"""

# Reemplaza el encabezado anterior de la línea 110
html = re.sub(r'<div class="allies-heading".*?</div>', nuevo_encabezado, html, count=1, flags=re.DOTALL)

# Remueve la tarjeta de texto fija que giraba en el carrusel (ambos sets)
html = re.sub(r'<div class="ally-heading-tile">.*?</div>\n?', '', html)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)

print("✅ index.html: Encabezado reestructurado y tarjeta de texto removida del carrusel.")


# 2. ACTUALIZAR STYLES.CSS
nuevos_estilos = """
/* =========================================================
   ENCABEZADO REESTRUCTURADO Y AJUSTE DE IMAGEN 100% AL CUADRO
   ========================================================= */
.allies-heading {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  gap: 8px !important;
  padding: 34px 20px 14px !important;
  background: transparent !important;
}

.allies-main-title {
  margin: 0 !important;
  font-family: "Barlow Condensed", Impact, sans-serif !important;
  font-size: clamp(28px, 3.4vw, 40px) !important;
  font-weight: 800 !important;
  letter-spacing: 0.04em !important;
  text-transform: uppercase !important;
  color: #ffffff !important;
  line-height: 1.1 !important;
}

.allies-sub-title {
  margin: 0 !important;
  font-family: "DM Sans", sans-serif !important;
  font-size: clamp(13px, 1.4vw, 16px) !important;
  color: rgba(228, 244, 239, 0.82) !important;
  max-width: 680px !important;
  line-height: 1.4 !important;
}

/* Imagen al 100% del cuadro como antes (sin padding forzado) */
.ally-tile img {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  max-width: none !important;
  object-fit: cover !important;
  object-position: center !important;
  padding: 0 !important;
  border-radius: 0 !important;
  z-index: 1 !important;
  transition: transform 0.45s ease !important;
  pointer-events: none !important;
}

.ally-tile:hover img {
  transform: scale(1.05) !important;
}
"""

with open(css_path, "a", encoding="utf-8") as f:
    f.write("\n" + nuevos_estilos)

print("✅ styles.css: Tipografías de títulos aplicadas e imágenes devueltas al 100% del marco.")