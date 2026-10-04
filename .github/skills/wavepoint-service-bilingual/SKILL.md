---
name: wavepoint-service-bilingual
description: "Use when updating WavePoint service content, catalog cards, detail pages, forms, language toggles, or any bilingual copy in the repo. Enforces the project rule: every text addition must exist in Spanish and English before closing the change."
---

# WavePoint Service Bilingual Maintenance

Use this skill whenever you change service content, copy, labels, cards, questions, headings, form placeholders, or localized detail-page data in this repository.

## Core rule

- Spanish is the default language of the site.
- English is the alternate language exposed through the language toggle.
- If you add or edit any text, you must provide the equivalent in Spanish and English.
- Do not leave hardcoded strings in one language when a service uses the active `wavepoint-lang` preference.
- Preserve existing behavior and avoid breaking the `wavepoint:languagechange` flow.

## Required workflow

1. Read the relevant service object in `services.js` and identify whether the text belongs to:
   - hero eyebrow/title/cardText
   - description or story section
   - includes list
   - form questions / placeholders / radio labels / options
   - catalog card text in `index.html` or `script.js`
2. Update both ES and EN versions together in the same change.
3. If the page renders static strings outside the service object, verify those strings are also localized by `lang`.
4. Check the detail page with the ES/EN selector after the change.
5. Keep a short changelog entry in `CHANGELOG.md` whenever a meaningful content fix is made.

## Repository-specific rules

- This site uses a catalog of service objects in `services.js`.
- Service detail pages render from `service-detail.html?service=<id>` and consume the active `wavepoint-lang` value.
- Long-form service text should be stored in the service object with `en` overrides when applicable.
- `index.html` and `script.js` also contain service card text and labels; these must match the service naming and the current active language.
- Keep local place names and surf vocabulary natural in both languages. For example, `Roca Bruja` remains Spanish in ES and `Witch’s Rock Surf Trip` in EN where requested.
- Do not invent prices, bookings, partner hours, or operational claims; verify with the source or ask the user.

## Common pitfalls to avoid

- Translating only the title but leaving the description in the old language.
- Updating `en` values without also checking the main Spanish copy.
- Forgetting static strings like `THE EXPERIENCE`, `BOOK REQUEST`, or form placeholders.
- Leaving stale JS in the browser due to cache/version issues after edits.
- Mixing Spanish and English names within the same service card or service object.
- Reordering service cards without keeping the numbering and navigation order coherent.

## Validation checklist

Before considering the task complete, verify:

- The page renders correctly in both Spanish and English.
- The service title, eyebrow, description, card text, and form labels are all localized.
- No strings remain hardcoded in the wrong language.
- The service order in the catalog still matches the intended sequence and numbering.
- The relevant changelog entry was updated if this was a substantive content pass.

## Preferred working pattern

- Keep edits surgical and targeted.
- Preserve the existing site structure and visual language.
- If unsure whether a string is intentionally bilingual or should be localized, default to the bilingual rule and ask the user only when the wording itself is ambiguous.
- Prefer fixing the source data and render logic, not patching the symptoms in isolated places.
