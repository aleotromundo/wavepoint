---
name: wavepoint-seo
description: "Use when improving SEO, search snippets, social sharing previews, structured data, crawlability, or domain migration for the WavePoint website."
---

# WavePoint SEO and Sharing

Use this skill when changing WavePoint search metadata, social previews, structured data, crawl files, or public-domain settings.

## Verified site context

- The current public/canonical domain, confirmed by the user, is `https://wavepoint-five.vercel.app/`.
- `https://wavepointcr.com/` is a planned future domain only. Do not publish it as an active canonical, social URL, schema URL, sitemap host, or robots sitemap until the user confirms the migration.
- WavePoint is a static site deployed with Vercel. The main landing page is `index.html`.
- The homepage's primary focus is Surf Experiences in Tamarindo, Costa Rica. Live surf cameras remain available as a secondary feature unless the user asks to remove them.
- The confirmed Instagram profile is `https://www.instagram.com/wavepointcr/`.

## Content and ranking

- Keep English as the default and maintain equivalent Spanish copy whenever visible content is changed. Follow `wavepoint-service-bilingual` for service content.
- Write naturally for visitors seeking surf experiences in Tamarindo and Guanacaste. Prioritize a clear title, one descriptive H1, useful page copy, internal links, image alt text, and accurate service names.
- Never promise a Google ranking, first-place placement, or immediate indexing. Avoid keyword stuffing and do not invent locations, operators, prices, availability, safety claims, or business details.
- Do not add `LocalBusiness`, address, hours, reviews, prices, or other structured-data claims unless confirmed by the user or source content. Prefer accurate `Organization`/`WebSite` schema for the current homepage.
- The site uses one bilingual URL with a language toggle. Do not emit `hreflang` alternates to language URLs that do not exist.

## SEO and share-preview workflow

1. Inspect the current page, deployment configuration, current domain, real service data, and available local photographs before editing.
2. For the homepage, keep `<title>`, meta description, canonical, Open Graph, Twitter/X metadata, and JSON-LD consistent with the user-confirmed current domain and visible page.
3. Use a real, locally available image for `og:image`; prefer a branded 1200 × 630 JPEG with high contrast, an accurate `og:image:alt`, and a modest file size.
4. Keep `robots.txt` and `sitemap.xml` on the current canonical host. Include canonical public URLs only; do not list redirects, utility routes, or duplicate variants.
5. Preserve page language behavior and ensure all new visible copy has Spanish and English versions.
6. Validate JSON-LD and XML parsing, metadata values and absolute URLs, social-image dimensions and readability, internal paths, JavaScript syntax, and `git diff --check`.
7. After deploying, inspect the actual public page and image. Google Search Console ownership verification and sitemap submission require the site owner; explain that crawling, indexing, ranking, and timing are controlled by Google.

## Future domain migration

When the user confirms `wavepointcr.com` is active:

- Update canonical URLs, Open Graph/Twitter URLs, JSON-LD IDs and URLs, `robots.txt`, and every sitemap entry together.
- Configure and verify the custom domain and HTTPS in Vercel.
- Preserve the old Vercel host or set a permanent redirect only when the new domain is confirmed live.
- Recheck both hosts and submit the updated sitemap in Google Search Console. Do not claim migration or indexing is complete from local file changes alone.
