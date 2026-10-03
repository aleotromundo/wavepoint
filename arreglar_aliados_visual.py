# arreglar_aliados_visual.py
import re

html_path = "index.html"
css_path = "styles.css"

# 1. ARREGLAR INDEX.HTML
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# Corregir la ruta de Chop House a .jpeg
html = html.replace("assets/after-chophouse.jpg", "assets/after-chophouse.jpeg")

# Eliminar las tarjetas duplicadas que buscaban .jpg (las rotas)
dup_eterno = r'\s*<a class="ally-tile"[^>]*href="https://eternoveranoco\.com/"[^>]*><img[^>]*src="assets/ally-eterno-verano\.jpg"[^>]*>.*?</a>'
dup_club = r'\s*<a class="ally-tile"[^>]*href="https://www\.club33cr\.com/"[^>]*><img[^>]*src="assets/ally-club33\.jpg"[^>]*>.*?</a>'

html = re.sub(dup_eterno, '', html)
html = re.sub(dup_club, '', html)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)

print("✅ index.html: Chop House corregido a .jpeg y tarjetas duplicadas eliminadas.")

# 2. ARREGLAR STYLES.CSS (Ajuste del logo al recuadro)
nuevo_ajuste_img = """
/* Ajuste de logos sin recortes dentro del recuadro */
.ally-tile img {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: contain !important;
  object-position: center 26% !important;
  padding: 14px 18px 44px 18px !important;
  box-sizing: border-box !important;
  z-index: 1 !important;
  transition: transform 0.3s ease !important;
  pointer-events: none !important;
}

.ally-tile:hover img {
  transform: scale(1.05) !important;
}

/* Suavizar sombra inferior para no tapar los logos */
.ally-tile::after {
  content: "" !important;
  position: absolute !important;
  inset: 0 !important;
  z-index: 2 !important;
  background: linear-gradient(180deg, transparent 40%, rgba(2, 22, 28, 0.78) 100%) !important;
  pointer-events: none !important;
}
"""

with open(css_path, "r", encoding="utf-8", errors="ignore") as f:
    css = f.read()

# Reemplaza o agrega el ajuste de imagen al final
if "object-position: center 26%" not in css:
    with open(css_path, "a", encoding="utf-8") as f:
        f.write("\n" + nuevo_ajuste_img)
    print("✅ styles.css: Ajuste de logos (object-fit contain + padding) aplicado.")
else:
    print("ℹ️ styles.css: El ajuste ya estaba aplicado.")