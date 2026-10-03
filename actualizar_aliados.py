# actualizar_aliados.py
import os

html_path = "index.html"

def resolver_archivo(base_name):
    """Busca en assets si existe en webp, jpg o jpeg"""
    for ext in [".webp", ".jpeg", ".jpg"]:
        candidate = f"assets/{base_name}{ext}"
        if os.path.exists(candidate):
            return candidate
    return f"assets/{base_name}.jpeg" # por defecto

# Detectar extensiones reales en tu carpeta
img_chop = resolver_archivo("after-chophouse")
img_eterno = resolver_archivo("ally-eterno-verano")
img_club = resolver_archivo("ally-club33")

print(f"Archivos detectados:\n - Chop House: {img_chop}\n - Eterno Verano: {img_eterno}\n - Club 33: {img_club}")

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Tarjetas Set 1 (con target="_blank")
nuevas_set1 = f"""<a class="ally-tile" href="https://eternoveranoco.com/" target="_blank" rel="noopener noreferrer"><img alt="Eterno Verano" src="{img_eterno}"><span><strong>Eterno Verano</strong><small>Tamarindo</small></span></a>
<a class="ally-tile" href="https://www.club33cr.com/" target="_blank" rel="noopener noreferrer"><img alt="Club 33 Surf Shop" src="{img_club}"><span><strong>Club 33</strong><small>Surf Shop</small></span></a>"""

# Tarjetas Set 2 (duplicado para el carrusel infinito)
nuevas_set2 = f"""<a class="ally-tile" href="https://eternoveranoco.com/"><img alt="" src="{img_eterno}"><span><strong>Eterno Verano</strong><small>Tamarindo</small></span></a>
<a class="ally-tile" href="https://www.club33cr.com/"><img alt="" src="{img_club}"><span><strong>Club 33</strong><small>Surf Shop</small></span></a>"""

target_1 = '<a class="ally-tile" href="Enlaces/occidental.html"><img alt="Occidental Tamarindo" src="assets/ally-occidental.jpg"><span><strong>Occidental</strong><small>Langosta</small></span></a>'
target_2 = '<a class="ally-tile" href="Enlaces/occidental.html"><img alt="" src="assets/ally-occidental.jpg"><span><strong>Occidental</strong><small>Langosta</small></span></a>'

if target_1 in content and target_2 in content:
    content = content.replace(target_1, target_1 + "\n" + nuevas_set1)
    content = content.replace(target_2, target_2 + "\n" + nuevas_set2)
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("✅ Aliados agregados exitosamente a index.html")
else:
    print("⚠️ Ya estaban agregados o no se encontró la etiqueta de referencia.")