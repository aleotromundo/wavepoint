# agregar_soporte_formatos.py

js_path = "script.js"

snippet = """
// Soporte automatico para multiples formatos de imagen (.webp, .jpg, .jpeg)
document.addEventListener('error', function(e) {
  if (e.target && e.target.tagName === 'IMG') {
    const img = e.target;
    const formats = ['.webp', '.jpg', '.jpeg'];
    let attempted = img.dataset.triedFormats ? img.dataset.triedFormats.split(',') : [];
    
    const match = img.src.match(/^(.*?)\\.(webp|jpe?g)(\\?.*)?$/i);
    if (!match) return;
    
    const base = match[1];
    const currentExt = '.' + match[2].toLowerCase();
    const query = match[3] || '';
    
    if (!attempted.includes(currentExt)) attempted.push(currentExt);
    
    const nextExt = formats.find(f => !attempted.includes(f));
    if (nextExt) {
      attempted.push(nextExt);
      img.dataset.triedFormats = attempted.join(',');
      img.src = base + nextExt + query;
    }
  }
}, true);
"""

with open(js_path, "r", encoding="utf-8") as f:
    js_content = f.read()

if "triedFormats" not in js_content:
    with open(js_path, "a", encoding="utf-8") as f:
        f.write("\n" + snippet)
    print("✅ Soporte de formatos WebP/JPG/JPEG agregado a script.js")
else:
    print("ℹ️ El soporte ya estaba presente en script.js")