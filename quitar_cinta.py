# quitar_cinta.py
import re

css_path = "styles.css"

with open(css_path, "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

# Nuevo bloque moderno y limpio para el carrusel (sin estetica de rollo de cine)
nuevo_css_aliados = """/* =========================================================
   CARROUSEL MODERNO DE ALIADOS (SIN MODO CINE / FILMSTRIP)
   ========================================================= */
.allies-ticker {
  position: relative !important;
  overflow: hidden !important;
  background: transparent !important;
  padding: 22px 0 !important;
  box-shadow: none !important;
}

/* Ocultar definitivamente las perforaciones de celuloide */
#aliados::before,
.allies-ticker::before,
#aliados::after,
.allies-ticker::after {
  display: none !important;
  content: none !important;
}

/* Encabezado limpio integrado */
.allies-heading {
  position: relative !important;
  z-index: 5 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 14px !important;
  margin: 0 !important;
  padding: 12px 18px !important;
  background: transparent !important;
  color: rgba(241, 235, 217, .85) !important;
  text-align: center !important;
}
.allies-heading-rule {
  width: 32px !important;
  height: 1px !important;
  flex: 0 0 32px !important;
  background: rgba(143, 233, 238, .45) !important;
}
.allies-heading h2 {
  margin: 0 !important;
  color: inherit !important;
  font-family: "DM Sans", sans-serif !important;
  font-size: clamp(12px, 1.4vw, 16px) !important;
  font-weight: 600 !important;
  letter-spacing: .12em !important;
  text-transform: uppercase !important;
}

/* Tarjeta de titulo limpia */
.ally-heading-tile {
  position: relative !important;
  flex: 0 0 260px !important;
  width: 260px !important;
  height: 176px !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  padding: 20px !important;
  background: rgba(16, 57, 65, 0.65) !important;
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
  border-radius: 16px !important;
  border: 1px solid rgba(143, 233, 238, 0.3) !important;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25) !important;
}
.ally-heading-marker {
  width: 36px !important;
  height: 2px !important;
  background: #8fe9ee !important;
  margin: 0 auto 12px auto !important;
  border-radius: 2px !important;
}
.ally-heading-tile h2 {
  margin: 0 !important;
  color: #ffffff !important;
  font-family: "Barlow Condensed", Impact, sans-serif !important;
  font-size: 26px !important;
  font-weight: 800 !important;
  line-height: 1.1 !important;
  letter-spacing: 0.04em !important;
  text-transform: uppercase !important;
}

/* Tarjetas modernas para cada aliado */
.ally-tile {
  position: relative !important;
  overflow: hidden !important;
  flex: 0 0 270px !important;
  width: 270px !important;
  height: 176px !important;
  border-radius: 16px !important;
  border: 1px solid rgba(255, 255, 255, 0.16) !important;
  background: rgba(16, 57, 65, 0.5) !important;
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28) !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-end !important;
  text-decoration: none !important;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease !important;
}
.ally-tile:hover {
  transform: translateY(-4px) scale(1.02) !important;
  border-color: rgba(143, 233, 238, 0.6) !important;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45) !important;
}

.ally-tile img {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  z-index: 1 !important;
  transition: transform 0.45s ease !important;
  pointer-events: none !important;
}
.ally-tile:hover img {
  transform: scale(1.05) !important;
}

.ally-tile::after {
  content: "" !important;
  position: absolute !important;
  inset: 0 !important;
  z-index: 2 !important;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(2, 22, 28, 0.45) 45%, rgba(2, 22, 28, 0.88) 100%) !important;
  pointer-events: none !important;
}

.ally-tile span {
  position: relative !important;
  z-index: 3 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 3px !important;
  padding: 14px 16px !important;
  text-align: left !important;
}
.ally-tile strong {
  display: block !important;
  color: #ffffff !important;
  font-family: "Barlow Condensed", Impact, sans-serif !important;
  font-size: 24px !important;
  font-weight: 700 !important;
  line-height: 1.05 !important;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7) !important;
}
.ally-tile small {
  display: block !important;
  color: #8fe9ee !important;
  font-family: "DM Sans", sans-serif !important;
  font-size: 13px !important;
}
"""

# Reemplaza el bloque filmstrip anterior
pattern = r"/\* =+[\r\n\s]+CARROUSEL MODO FILMSTRIP.*?(?=/\* =+|\Z)"
match = re.search(pattern, content, flags=re.DOTALL)

if match:
    nuevo_contenido = content[:match.start()] + nuevo_css_aliados + "\n" + content[match.end():]
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(nuevo_contenido)
    print("Éxito: Se eliminó el modo cine y se modernizó el carrusel.")
else:
    # Si por alguna razon no coincide el comentario exacto, lo agrega al final aplicando override
    with open(css_path, "a", encoding="utf-8") as f:
        f.write("\n\n" + nuevo_css_aliados)
    print("Éxito: Se aplicó la modernización del carrusel.")