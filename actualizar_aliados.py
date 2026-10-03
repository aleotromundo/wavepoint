# actualizar_aliados.py

html_path = "index.html"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Tarjetas nuevas para Set 1 (con target="_blank")
nuevas_set1 = """<a class="ally-tile" href="https://eternoveranoco.com/" target="_blank" rel="noopener noreferrer"><img alt="Eterno Verano" src="assets/ally-eterno-verano.jpg"><span><strong>Eterno Verano</strong><small>Tamarindo</small></span></a>
<a class="ally-tile" href="https://www.club33cr.com/" target="_blank" rel="noopener noreferrer"><img alt="Club 33 Surf Shop" src="assets/ally-club33.jpg"><span><strong>Club 33</strong><small>Surf Shop</small></span></a>"""

# Tarjetas nuevas para Set 2 (duplicado para el bucle continuo)
nuevas_set2 = """<a class="ally-tile" href="https://eternoveranoco.com/"><img alt="" src="assets/ally-eterno-verano.jpg"><span><strong>Eterno Verano</strong><small>Tamarindo</small></span></a>
<a class="ally-tile" href="https://www.club33cr.com/"><img alt="" src="assets/ally-club33.jpg"><span><strong>Club 33</strong><small>Surf Shop</small></span></a>"""

target_1 = '<a class="ally-tile" href="Enlaces/occidental.html"><img alt="Occidental Tamarindo" src="assets/ally-occidental.jpg"><span><strong>Occidental</strong><small>Langosta</small></span></a>'
target_2 = '<a class="ally-tile" href="Enlaces/occidental.html"><img alt="" src="assets/ally-occidental.jpg"><span><strong>Occidental</strong><small>Langosta</small></span></a>'

if target_1 in content and target_2 in content:
    content = content.replace(target_1, target_1 + "\n" + nuevas_set1)
    content = content.replace(target_2, target_2 + "\n" + nuevas_set2)
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("✅ Éxito: Se agregaron Eterno Verano y Club 33 al carrusel.")
else:
    print("⚠️ No se encontraron las etiquetas de referencia en index.html.")