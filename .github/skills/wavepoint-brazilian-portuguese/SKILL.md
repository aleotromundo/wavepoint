---
name: wavepoint-brazilian-portuguese
description: 'Use only when the user explicitly asks to implement Brazilian Portuguese (pt-BR) across the WavePoint website, extend its language selector, or add first-visit browser-language detection. Do not invoke automatically for audits, estimates, or discussion.'
user-invocable: true
disable-model-invocation: true
---

# WavePoint Brazilian Portuguese

## Authorization gate

This workflow changes the website. Start implementation only after the user explicitly authorizes adding Portuguese to the site. A request to audit, estimate, discuss, or save this skill is not implementation approval. If approval is ambiguous, ask before editing.

## Goal and expected behavior

Add Brazilian Portuguese (`pt-BR`) as a complete third language across the public WavePoint website, alongside English and Spanish, while preserving current content and behavior.

- If a valid language preference is already stored under `wavepoint-lang`, use it.
- On a first visit without a stored preference, inspect the browser's preferred languages: Portuguese selects `pt-BR`, Spanish selects `es`, and all other or unsupported languages fall back to `en`.
- A visitor's explicit selector choice must be saved and take precedence on later visits.
- Keep the language choice consistent across page navigation and all public pages.
- Set the document language correctly (`en`, `es`, or `pt-BR`) and localize visible text, dynamic text, accessible names, image alternatives, placeholders, page metadata, and locale-sensitive date/number formatting where applicable.
- Keep the current URL/page model. Do not create translated URL trees, change canonical URLs, or promise language-specific SEO indexing unless the user separately approves that scope.

## Audit baseline

This is a snapshot from the initial read-only audit. Recheck the current repository before implementation; filenames and behavior may have changed.

- The current language control and shared text/attribute switching are in `lang-switch.js`. Its preference handling and control assume only English and Spanish.
- `script.js` contains the main-page translation dictionaries and additional language-dependent text for cameras, weather, image dialogs, the assistant UI, and localized metadata. Some dynamic content is not covered solely by `data-i18n`.
- The assistant request sends the selected language from `script.js`; `api/assistant.js` currently chooses English only for `en` and Spanish otherwise. Extend this deliberately for `pt-BR`, including the assistant's response language.
- The service detail content and generated forms are localized separately in `services.js`, including service descriptions, accommodation details, FAQs, confirmation messages, and metadata.
- The trip builder has its own bilingual content and data in `trip-builder.js`; review generated controls, errors, summaries, accommodation choices, dates, prices, and WhatsApp messages.
- The rates table has its own translations and locale choice in `pricing-data.js`.
- The full local guide has a separate translation mechanism in `guide-i18n.js`, based on content arrays and page structure. Keep each translated array aligned with the correct DOM content; do not rely on the main-page dictionary for it.
- `site-nav.js` creates shared navigation markup at runtime. Check it alongside the static headers, mobile menu, and language control so every page behaves consistently.
- Public pages include `index.html`, `guia-playas.html`, `service-detail.html`, `trip-builder.html`, and the partner/about pages in `Enlaces/` (including `nostros.html`). `Enlaces/guia-playas.html` is a redirect to the root guide, not a separate full guide.
- Review static page copy and head metadata in each public page, including titles, descriptions, social metadata, accessible labels, and structured data. The main page's structured-data language list is currently static.
- The existing page language is generally English in HTML and then updated by JavaScript; verify the first rendered state and language behavior rather than assuming all content is covered by the selector.

## Procedure

1. Re-read the current language scripts, each public page, generated-content sources, API language handling, and relevant tests/configuration. Identify all language-dependent strings and every script execution order before editing.
2. Preserve English and Spanish as-is. Choose a small, consistent locale representation (`en`, `es`, `pt-BR`) and use it in storage, switcher state, event payloads, and language-specific renderers. Guard invalid stored values and unavailable storage using existing repository patterns.
3. Implement first-visit browser-language detection without overriding a previously saved valid choice. Normalize browser language tags case-insensitively; Portuguese variants map to `pt-BR`, Spanish variants to `es`, and unsupported languages to `en`.
4. Update the selector so all three options can be selected accessibly. Keep its selected state, labels, and announcements accurate, and ensure the selection survives navigation and works on root and nested pages.
5. Add and verify Brazilian Portuguese translations for every current public surface and every dynamic/late-rendered state identified in the audit. Do not leave English or Spanish fallbacks silently displayed in a Portuguese session. Localize accessible attributes and metadata as well as visible text.
6. Update locale-dependent formatting and generated content, including dates, currency display, rates, weather/camera text, service details, trip-builder flows, forms, and assistant responses. Preserve the site's actual prices, booking disclaimers, safety guidance, and business facts; translation must not change their meaning.
7. Keep SEO changes within the approved URL model. Update existing page metadata and structured data where the current code localizes them, but do not invent localized routes, canonical/hreflang behavior, or indexing guarantees.
8. Run the smallest relevant existing automated checks. If no suitable tests exist, perform focused checks for every public page and dynamic flow in all three languages, including a fresh first visit for each browser-language case, a saved explicit choice, invalid stored values, selector changes, nested navigation, and fallback to English.
9. Inspect the final diff to confirm there are no unrelated changes and report what was implemented, what was tested, and any translation review still recommended.

## Completion checklist

- [ ] Existing English and Spanish behavior is preserved.
- [ ] First-visit preference detection and explicit saved-choice precedence work.
- [ ] The three-language control works on every public page and shared navigation surface.
- [ ] Main page, guide, partner pages, service details, trip builder, pricing, and assistant content are covered.
- [ ] Dynamic, accessible, metadata, and locale-formatted content is covered.
- [ ] Unsupported and invalid language values safely fall back to English.
- [ ] Relevant checks pass, or remaining verification gaps are stated clearly.
