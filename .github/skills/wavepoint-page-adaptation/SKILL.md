---
name: wavepoint-page-adaptation
description: "Use when creating or updating WavePoint landing pages, linked HTML pages, service pages, local guides, partner pages, or translating the site."
---

# WavePoint Page Adaptation

Use this skill when adding a local page from a linked WavePoint page or updating an existing page to match the current site.

## Visual language

- Keep the ocean-led palette: deep teal, sea green, turquoise, restrained warm sun accents, and readable pale surfaces. Avoid making every section white or putting text in one long glass navigation capsule.
- Use the current site fonts: Barlow Condensed for display headings and DM Sans for interface and body copy.
- Keep cards compact, image-led, and functional. Prefer 12px corners, clear hierarchy, and visible whole-card link affordances when a tile represents one destination.
- Preserve meaningful local photos from `assets/` and `assets/legacy/`; use `object-fit: cover` and stable aspect ratios.
- On mobile, keep the hamburger, language toggle, Instagram, WhatsApp, and assistant within the viewport. The primary hero actions should remain readable and visible without scrolling. Avoid horizontal page overflow.
- Motion should clarify state: use restrained staggered horizontal reveals and condition-aware weather motion. Respect `prefers-reduced-motion`.

## Language and content

- Spanish is the default. English mode translates interface and editorial copy, including dynamically updated statuses, modal text, form placeholders, and page-specific content.
- Keep local place names and established surf vocabulary such as spot, surfskate, lineup, and named beaches when a literal translation would sound unnatural.
- Reuse the main site's `wavepoint-lang` localStorage preference and existing translation hooks where practical. Guard shared page scripts when the page does not contain a camera, weather panel, or modal.
- Do not invent partner details, operating hours, safety claims, contact data, prices, or bookings. Verify these against the source page or ask the user.
- The verified public links are Instagram `https://www.instagram.com/wavepointcr/` and WhatsApp `https://wa.me/543517397525`.

## Page migration workflow

1. Inspect the existing destination and available local images before translating or changing its information architecture.
2. Create a local HTML page in the workspace, use relative asset paths, add Spanish and English copy, and link back to the WavePoint home page.
3. Update the landing-page card and navigation links to the local page only after confirming the destination content is represented.
4. Retain a clear route to the verified WhatsApp contact and Instagram profile.
5. Validate links, language switching, menu behavior, responsive layout at desktop and phone sizes, and the browser console. Check for overflow and verify that all primary actions are visible at first load.

## WavePoint project continuity

This section preserves project decisions and completed work so future assistants can continue without asking the user to repeat the history. Check the current source files and `CHANGELOG.md` before changing anything; the notes below describe the intended behavior, not permission to overwrite newer implementation.

### Service pages and shared imagery

- A service detail page is rendered from `service-detail.html?service=<id>` using the service data in `services.js`.
- Each service's first image (`service.images[0]`) is the visual source of truth for both its hero and full-page/body background. Changing the service's hero photo should therefore change both. Do not introduce a separate, drifting body-background image.
- Keep this image relationship consistent among service catalog cards, detail hero/background, and trip-builder choices wherever those surfaces represent the same service.
- The service photo set has local optimized WebP versions under `assets/img/optimized/`; preserve source originals and avoid reintroducing the large originals to page references. Verify image subject, crop, alt text, and every consumer before replacing a path.
- The current `alojamiento-experiencias` image is `assets/img/hotels/stayandhotels5_resultado.webp`, shared by the hotel card, service hero/body background, accommodation pack choices, retreat stay card, and trip builder. `tamarindo-stay.webp` remains in the Nosotros opening background and should not be globally replaced.
- Service copy, labels, image alt text, and detail-page content must remain available in Spanish and English. Follow the `wavepoint-service-bilingual` skill for service copy changes.

### Homepage, cards, and interaction

- The home page (`index.html`) includes the complete “Nosotros” story before `#camaras`, preserving the standalone page and adding the “¿Quiénes somos?” section heading. Main-site links to Nosotros target the home section.
- The hero CTA is “Armá tu viaje” and leads to `trip-builder.html`. The “WavePoint en Tamarindo” section retains “Explorar guía” and also provides “Ver cámaras en vivo”.
- Common service cards use the same photo-led layout: title and “Más información” stay visible in the compact state; the description expands in a translucent glass panel on hover or keyboard focus on desktop. On touch devices, the row nearest the viewport center expands automatically as the visitor scrolls, then retracts as another row becomes active or the visitor leaves the catalog.
- Pack and Retiros are intentionally distinct featured cards and are excluded from the common-card reveal behavior. Do not change their composition while adjusting the shared interaction unless explicitly requested.
- The service-card outline has a restrained periodic turquoise glow and must honor `prefers-reduced-motion`. Preserve the user's request to expose more of each image without changing the card structure when making visual adjustments.
- The Services and Nosotros anchors use a small negative scroll margin so headings land higher in the viewport; verify each destination independently after changing scroll or section styles.

### Other completed site-wide work

- The tourism guide uses its local photographic background with dark translucent glass surfaces. Its “Qué llevar” and “Transporte” practical cards were widened/reflowed to use their available width without dropping content; mobile uses a single-column layout.
- Instagram links that previously showed a bare profile address/text have an icon, and the mobile Instagram control is positioned below the hamburger so the controls do not overlap.
- Desktop navigation stays unboxed, with white links and a strong text shadow for contrast over photos and video; secondary labels and service/trip-builder copy have stronger contrast and larger minimum sizes.
- The hamburger navigation includes all seven collaborators: Chop House, Capitán Suizo, Casa de Maderas, Red Door, Occidental, Eterno Verano, and Club 33. The menu can scroll to expose the full list on small screens.
- The Clases de surf detail gallery was given a more open 2×2 layout with controlled image heights; all secondary images remain visible and the hero image is not duplicated in the gallery.
- Large service photos were converted to local WebP derivatives and the originals retained. Notable reductions recorded in `CHANGELOG.md`: longboard from 11.79 MB to 189 KB and surfskate from 13.49 MB to 313 KB.
- The Nosotros section uses photographic/parallax styling and glassmorphism. Parallax is disabled on mobile and for reduced-motion preferences.
- The homepage hero uses “A través de quienes llaman hogar a Tamarindo” / “Through the people who call it home” and its matching bilingual WavePoint subheading.
- The Witch’s Rock, snorkel and ATV catalog images include multi-panel source photos; card-only CSS zoom and positioning focus a single panel without replacing the shared source used by the detail and trip-builder surfaces. Keep their Spanish and English alternative text aligned with the visible crop.
- The browser favicon set is generated from `assets/wavepoint-favicon-source.jpg`: 16/32 px transparent-corner PNGs and a 16/32/48/64/128/256 px ICO. Keep the Apple touch icon separate.

### Validation and working preferences

- Validate in a real browser at desktop, tablet, and phone widths. For touch-card behavior, verify automatic initial reveal, transition to the next row while scrolling, full description visibility, and collapse after leaving the section. Account for smooth scrolling and allow animations to settle before measuring.
- Verify both Spanish and English after any copy or locale changes, plus no horizontal overflow and accessible keyboard focus.
- Reduced-motion behavior should be checked explicitly; the card outline animation is expected to become `none`.
- The recent verification of the card interaction succeeded at 820×1180 and 390×844: rows opened automatically, the active row changed while scrolling, and cards collapsed after leaving the catalog. The glow appeared with normal motion and was disabled for reduced motion.
- User-facing discussion and implementation should be in Spanish. When presenting a visual/interaction concept that changes the user's envisioned behavior, describe it first and wait for approval before implementing. Preserve content unless asked to remove it; prefer targeted visual changes and do not silently invent service facts.
- Keep `CHANGELOG.md` current for substantive site changes. A session checkpoint may contain fuller handoff detail; this skill is the durable project-level summary.
