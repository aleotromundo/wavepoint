# recuperar_efecto_vidrio.py

css_path = "styles.css"

glass_css = """
/* =========================================================
   RESTAURACIÓN EFECTO VIDRIO (GLASSMORPHISM) TARJETAS ALIADOS
   ========================================================= */
.ally-tile {
  position: relative !important;
  overflow: hidden !important;
  flex: 0 0 270px !important;
  width: 270px !important;
  height: 176px !important;
  border-radius: 16px !important;
  border: 1px solid rgba(255, 255, 255, 0.22) !important;
  background: rgba(16, 57, 65, 0.45) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.25) !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-end !important;
  text-decoration: none !important;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease !important;
}

.ally-tile:hover {
  transform: translateY(-4px) scale(1.02) !important;
  border-color: rgba(143, 233, 238, 0.6) !important;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.45) !important;
}

/* La imagen ocupa el recuadro pero deja traslucir el estilo */
.ally-tile img {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
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

/* Capa de cristal que unifica la foto con el fondo */
.ally-tile::after {
  content: "" !important;
  position: absolute !important;
  inset: 0 !important;
  z-index: 2 !important;
  background: linear-gradient(170deg, rgba(255, 255, 255, 0.08) 0%, rgba(16, 57, 65, 0.25) 45%, rgba(4, 18, 24, 0.85) 100%) !important;
  pointer-events: none !important;
}

/* Barra inferior de texto en vidrio esmerilado */
.ally-tile span {
  position: relative !important;
  z-index: 3 !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 2px !important;
  padding: 10px 16px !important;
  text-align: left !important;
  background: rg