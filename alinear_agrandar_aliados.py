# alinear_agrandar_aliados.py

css_path = "styles.css"

nuevo_formato = """
/* =========================================================
   ALIADOS: ALINEACIÓN A LA IZQUIERDA Y +6PX DE TAMAÑO
   ========================================================= */
.allies-heading {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
  text-align: left !important;
  max-width: 1200px !important;
  margin: 0 auto !important;
  padding: 56px 28px 24px !important;
  background: transparent !important;
  position: relative !important;
  z-index: 10 !important;
  box-sizing: border-box !important;
}

/* Indicador turquesa alineado a la izquierda */
.allies-heading::before {
  content: "" !important;
  display: block !important;
  width: 48px !important;
  height: 4px !important;
  background: #8fe9ee !important;
  border-radius: 2px !important;
  margin: 0 0 16px 0 !important;
  box-shadow: 0 0 14px rgba(143, 233, 238, 0.65) !important;
}

/* Título principal alineado a la izquierda (+6px) */
.allies-heading h2,
.allies-main-title {
  margin: 0 0 12px 0 !important;
  font-family: "Barlow Condensed", Impact, sans-serif !important;
  font-size: clamp(40px, 4.8vw, 56px) !important;
  font-weight: 800 !important;
  letter-spacing: 0.04em !important;
  text-transform: uppercase !important;
  color: #f3fbf7 !important;
  line-height: 1.05 !important;
  text-align: left !important;
  text-shadow: 0 3px 18px rgba(0, 0, 0, 0.55) !important;
  white-space: normal !important;
  max-width: 900px !important;
}

/* Subtítulo alineado a la izquierda (+6px) */
.allies-heading p,
.allies-sub-title {
  margin: 0 !important;
  font-family: "DM Sans", sans-serif !important;
  font-size: clamp(21px, 2.1vw, 24px) !important;
  font-weight: 400 !important;
  color: rgba(228, 244, 239, 0.84) !important;
  max-width: 820px !important;
  line-height: 1.5 !important;
  text-align: left !important;
  letter-spacing: 0.01em !important;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.35) !important;
}
"""

with open(css_path, "a", encoding="utf-8") as f:
    f.write("\n" + nuevo_formato)

print("✅ Título y descripción alineados a la izquierda y aumentados +6px en styles.css")