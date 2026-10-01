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
