#!/usr/bin/env python3
"""
Actualiza el servicio Surf Coaching en services.js:
- Nuevo texto descriptivo
- Sección "Incluye"
- Nuevas preguntas de horario
- Fotos placeholder (reemplazar con las reales)
- CSS correspondiente en styles.css
"""

import sys
import os

def actualizar_services():
    filepath = 'services.js'
    if not os.path.exists(filepath):
        print(f"❌ No encontré {filepath}. Ejecutá este script desde la raíz del repo.")
        sys.exit(1)

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    changes = 0

    # ── 1. Reemplazar description y agregar includes ──
    old_desc = (
        "description: 'El coaching empieza antes de entrar al agua: "
        "entendemos qué sentís que querés mejorar y armamos una sesión con foco. "
        "Durante la práctica observamos tu toma de decisiones, técnica y relación con la ola; "
        "después transformamos esas observaciones en indicaciones concretas. "
        "Podés sumar fotografías o videoanálisis para volver sobre la sesión y ver tu progreso con más claridad.',"
    )
    new_desc = (
        "description: 'Llevá tu surf al siguiente nivel con un entrenamiento personalizado. "
        "Análisis de técnica, video-coaching y estrategias para mejorar tu rendimiento en el agua "
        "con la ayuda de entrenadores expertos.',\n"
        "includes: ['Sesión de video de tu sesión', 'Análisis con un instructor personalizado en tu idioma', 'Video de recuerdo'],"
    )
    if old_desc in content:
        content = content.replace(old_desc, new_desc)
        changes += 1
        print("✅ Description e includes actualizados")
    else:
        print("⚠️  No encontré la description exacta de surf-coaching (puede tener formato distinto)")

    # ── 2. Reemplazar cardText ──
    old_card = "cardText: 'Observación personalizada, objetivos concretos y herramientas para progresar en el agua.',"
    new_card = "cardText: 'Entrenamiento personalizado con video-análisis y estrategias para llevar tu surf al siguiente nivel.',"
    if old_card in content:
        content = content.replace(old_card, new_card)
        changes += 1
        print("✅ CardText actualizado")
    else:
        print("⚠️  No encontré el cardText exacto de surf-coaching")

    # ── 3. Reemplazar images (placeholders) ──
    old_images = "images: ['assets/legacy/_GSK8664.jpg', 'assets/legacy/FC0F6C9F-D8FA-446B-89A7-AC3D195117B1.jpeg'],"
    new_images = "images: ['assets/surf-coaching-cover.jpg', 'assets/surf-coaching-detail.jpg'],"
    if old_images in content:
        content = content.replace(old_images, new_images)
        changes += 1
        print("✅ Images actualizadas (placeholder — reemplazá con tus fotos reales)")
    else:
        print("⚠️  No encontré las images exactas de surf-coaching")

    # ── 4. Reemplazar questions ──
    old_questions = (
        "questions: [\n"
        "{ id: 'current_surf_level', label: '¿Cuál es tu nivel actual de surf?', type: 'choice', options: ['Principiante', 'Intermedio', 'Avanzado'] },\n"
        "{ id: 'improvement_goal', label: '¿Qué te gustaría mejorar?', type: 'textarea', placeholder: 'Cuéntanos brevemente.' },\n"
        "{ id: 'coaching_package', label: '¿Qué te gustaría incluir?', type: 'choice', options: ['Solo coaching', 'Coaching y fotografías', 'Coaching y videoanálisis', 'Coaching, fotografías y videoanálisis'] },\n"
        "{ id: 'own_board', label: '¿Traerás tu propia tabla?', type: 'choice', options: ['Sí', 'No'] }\n"
        "]"
    )
    new_questions = (
        "questions: [\n"
        "{ id: 'current_surf_level', label: '¿Cuál es tu nivel actual de surf?', type: 'choice', options: ['Principiante', 'Intermedio', 'Avanzado'] },\n"
        "{ id: 'improvement_goal', label: '¿Qué te gustaría mejorar?', type: 'textarea', placeholder: 'Cuéntanos brevemente.' },\n"
        "{ id: 'session_schedule', label: '¿Qué horario vas a tener tu sesión?', type: 'choice', options: ['Mañana', 'Medio día', 'Tarde'] },\n"
        "{ id: 'analysis_time', label: '¿A qué hora te gustaría tener tu análisis?', type: 'choice', options: ['Inmediatamente después', 'Más tarde el mismo día', 'Al día siguiente'] },\n"
        "{ id: 'own_board', label: '¿Traerás tu propia tabla?', type: 'choice', options: ['Sí', 'No'] }\n"
        "]"
    )
    if old_questions in content:
        content = content.replace(old_questions, new_questions)
        changes += 1
        print("✅ Questions actualizadas (sacada 'incluir', agregadas 2 de horario)")
    else:
        print("⚠️  No encontré las questions exactas de surf-coaching")

    # ── 5. Modificar render genérico para mostrar includes ──
    old_render = '<p>${esc(service.description)}</p><div class="detail-gallery">'
    new_render = (
        '<p>${esc(service.description)}</p>'
        '${service.includes ? `<div class="service-includes"><h3>Incluye</h3>'
        '<ul>${service.includes.map(item => `<li>${esc(item)}</li>`).join(\'\')}</ul>'
        '</div>` : \'\'}'
        '<div class="detail-gallery">'
    )
    if old_render in content:
        content = content.replace(old_render, new_render)
        changes += 1
        print("✅ Render actualizado para mostrar sección 'Incluye'")
    else:
        print("⚠️  No encontré el patrón exacto del render genérico")

    # ── 6. Actualizar referencia en PACK_SERVICE_CARDS ──
    old_pack = "'Surf coaching': { title: 'Surf coaching', detail: 'Objetivos concretos para progresar en el agua.', image: 'assets/legacy/_GSK8664.jpg' },"
    new_pack = "'Surf coaching': { title: 'Surf coaching', detail: 'Entrenamiento personalizado con video-análisis.', image: 'assets/surf-coaching-cover.jpg' },"
    if old_pack in content:
        content = content.replace(old_pack, new_pack)
        changes += 1
        print("✅ PACK_SERVICE_CARDS actualizado")
    else:
        print("⚠️  No encontré la entrada exacta de Surf coaching en PACK_SERVICE_CARDS")

    # ── Escribir ──
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"\n📝 {changes} cambios aplicados en services.js")
    return changes


def actualizar_styles():
    filepath = 'styles.css'
    if not os.path.exists(filepath):
        print(f"⚠️  No encontré {filepath}, salteo CSS")
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    css_block = """
/* ── Surf Coaching: sección Incluye ── */
.service-includes {
  margin: 28px 0;
  padding: 24px 28px;
  background: rgba(0, 167, 189, 0.08);
  border: 1px solid rgba(0, 167, 189, 0.2);
  border-radius: 16px;
}
.service-includes h3 {
  margin: 0 0 14px;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--wp-turquoise, #00a7bd);
}
.service-includes ul {
  margin: 0;
  padding: 0 0 0 20px;
  list-style: none;
}
.service-includes li {
  position: relative;
  padding: 6px 0;
  font-size: 15px;
  font-weight: 600;
  color: var(--wp-ink, #102638);
}
.service-includes li::before {
  content: '✓';
  position: absolute;
  left: -20px;
  color: var(--wp-turquoise, #00a7bd);
  font-weight: 900;
}
"""

    if '.service-includes' in content:
        print("⚠️  CSS de .service-includes ya existe, no lo duplico")
    else:
        with open(filepath, 'a', encoding='utf-8') as f:
            f.write(css_block)
        print("✅ CSS de .service-includes agregado al final de styles.css")


if __name__ == '__main__':
    print("🏄 Actualizando Surf Coaching...\n")
    actualizar_services()
    print()
    actualizar_styles()
    print("\n🎉 Listo. Revisá los cambios y hacé commit cuando estés conforme.")