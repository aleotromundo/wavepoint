# estilizar_aliados.py

css_path = "styles.css"

nuevos_estilos = """
/* =========================================================
   DISEÑO PRO Y JERARQUÍA PARA TÍTULO DE ALIADOS WAVEPOINT
   ========================================================= */
.allies-heading {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  padding: 56px 20px 24px !important;
  background: transparent !important;
  position: relative !important;
  z-index: 10 !important;
}

/* Indicador turquesa distintivo de sección WavePoint */
.allies-heading::before {
  content: "" !important;
  display: block !important;
  width: 44px !important;
  height: 4px !important;
  background: #8fe9ee !important;
  border-radius: 2px !important;
  margin-bottom: 14px !important;
  box-shadow: 0 0 14px rgba(143, 233, 238, 0.65) !important;
}

/* Título principal destacado */
.allies-heading h2,
.allies-main-title {
  margin: 0 0 12px 0 !important;
  font-family: "Barlow Condensed", Impact, sans-serif !important;
  font-size: clamp(34px, 4.2vw, 50px) !important;
  font-weight: 800 !important;
  letter-spacing: 0.04em !important;
  text-transform: uppercase !important;
  color: #f3fbf7 !important;
  line-height: 1.08 !important;
  text-shadow: 0 3px 18px rgba(0, 0, 0, 0.55) !important;
  white-space: normal !important;
  max-width: 900px !important;
}

/* Subtítulo integrado al diseño del sitio */
.allies-heading p,
.allies-sub-title {
  margin: 0 !important;
  font-family: "DM Sans", sans-serif !important;
  font-size: clamp(15px, 1.55vw, 18px) !important;
  font-weight: 400 !important;
  color: rgba(228, 244, 239, 0.82) !important;
  max-width: 680px !important;
  line-height: 1.55 !important;
  letter-spacing: 0.01em !important;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.35) !important;
}
"""

with open(css_path, "a", encoding="utf-8") as f:
    f.write("\n" + nuevos_estilos)

print("✅ styles.css: Tipografías y estilos premium aplicados a Aliados.")