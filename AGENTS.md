# AGENTS.md — Pricetech Solutions website

Permanent instructions for any agent or developer working in this repository.

## 1. Read first

Before changing anything, read **both**:

1. `AGENTS.md` (this file) — implementation rules.
2. `docs/RECON-MISSION-Pricetech-Solutions.md` — the only approved source of business content.

If these two documents conflict, the reconnaissance document wins for **facts**, and this file wins for **engineering process**. Do not act on memory of the old website; the deployed site is reference only.

## 2. Project purpose

A premium, conversion-focused, single-page marketing site for **Pricetech Solutions** — an electrical, shower and electronics service business in Nairobi, Kenya. Primary conversion is a WhatsApp enquiry. This is a **quotation-led** business: there is no cart, checkout, payment or fake form.

The original site lives at `https://pricetechsolutions.netlify.app/` and is **out of scope**. Never modify, rebuild into, or deploy over it.

## 3. Technology restrictions

- HTML5, CSS3, vanilla JavaScript (ES2019+). No build step, no bundler, no npm runtime dependencies.
- Forbidden: React, Vue, Angular, Svelte, Bootstrap, Tailwind, jQuery, GSAP, icon/font JS libraries, CSS preprocessors.
- Fonts and images are the only external requests. Google Fonts may be used (`Space Grotesk`, `Inter`) with `display=swap`, preconnect and full system fallbacks.
- Keep it lightweight and static: it must run from any static file server.

## 4. Design direction — dark luxury showroom

Premium, architectural, technical. Precision, reliability, workmanship. **Not** a generic electrician template, not a gaming/futuristic UI.

Restraint rules:

- No glow effects, neon, heavy gradients, glassmorphism, or long animations.
- Bordered panels and hairline dividers over drop shadows.
- Radius stays small (4–8px). Pills only for tags and icon buttons.
- Uppercase labels are small, letter-spaced and rare.
- Not every section is a card. Alternate open layouts and bento panels.
- Electrical services must be as visible and as premium as bathroom products.

### Colour tokens (single source of truth: `css/styles.css` `:root`)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0B0D10` | Page background |
| `--surface` | `#13171D` | Cards and panels |
| `--surface-elevated` | `#1B2028` | Hover / elevated cards |
| `--text` | `#F5F5F4` | Headings and primary text |
| `--text-secondary` | `#A1A1AA` | Body and supporting copy |
| `--text-muted` | `#71717A` | Meta, captions, less important text |
| `--accent` | `#C8A46A` | Brass highlights, icons, focus |
| `--accent-hover` | `#DFC18A` | Accent hover/active |
| `--border` | `rgba(255,255,255,0.10)` | Hairline borders |
| `--success` | `#4ADE80` | Success feedback only |

Never hardcode these hex values in components; reference the custom properties. Muted `#71717A` is **not** for body copy. Accent is not used for long body text.

### Typography

- Headings: **Space Grotesk** (600/700), tight tracking, `clamp()` scale.
- Body: **Inter** (400/500), line-height 1.65.
- One `h1` per page; never skip heading levels.

## 5. Responsive requirements (critical)

The original site scrolls horizontally on mobile. That is the main reason for this rebuild.

- Mobile-first CSS. Base styles are single-column; enhance with `min-width` media queries.
- `box-sizing: border-box` everywhere, `img/svg/video { max-width: 100% }`.
- Grids use `minmax(0, 1fr)`; every flex/grid child that holds text gets `min-width: 0`.
- Never use `100vw` for spacing. Never set fixed pixel widths on sections.
- `overflow-wrap` must protect long strings (prices, URLs, headings).
- Do not hide overflow as a fix. `overflow-x: hidden` on `body` is not an accepted solution to a layout bug.
- Test at **320, 360, 390, 768, 1024, 1440 px**. Acceptance: `scrollWidth <= innerWidth` at every width.
- Touch targets ≥ 44×44 px; pricing and product content readable without horizontal scroll.

## 6. Accessibility requirements

- Skip link, `<header>/<nav>/<main>/<footer>` landmarks, meaningful `<section>` labels.
- Visible `:focus-visible` outlines (2px accent, offset). Never remove focus styling.
- Mobile menu is a real `<button>` with `aria-expanded` + `aria-controls`, Escape closes, focus returns to the toggle, body scroll locks while open, and state resets above the breakpoint.
- Decorative SVG icons: `aria-hidden="true"` + `focusable="false"`.
- Icon-only controls need `aria-label`; external links use `target="_blank" rel="noopener noreferrer"`.
- Contrast: body copy uses `--text-secondary` or lighter on dark surfaces. Do not use muted text below 4.5:1 for informative text.
- Honour `prefers-reduced-motion` for transitions, smooth scroll and any motion.
- Nothing may depend on hover alone; no non-functional buttons; no fake forms.

## 7. Content accuracy — prohibited assumptions

Never invent or "improve" business facts. Specifically prohibited unless added to the recon document and confirmed by the owner:

- Phone numbers for `tel:`, email addresses, street addresses, opening hours, social accounts, review-platform links, map links.
- Product prices, brands, model numbers, stock status, delivery terms, warranties, additional photography.
- Extra services, certifications, awards, staff numbers, response-time guarantees, scarcity claims, statistics.
- New testimonials, surnames, customer photos, or altered testimonial meaning.
- Fixed prices for estimate ranges. `KES 8,000+` must never become a fixed price.

Handling unverified content:

- Keep the recorded wording where the recon captured it, and surface a short "confirm on enquiry" note where the recon flags a commercial promise (e.g. free installation).
- Leave unverified contact channels **out** of the UI. WhatsApp is the only confirmed channel.
- When unsure, record the open question in `docs/PHASE-1-REPORT.md` instead of inventing copy.

## 8. WhatsApp integration

Central config only: `js/data.js` → `PRICETECH.contact`.

- Number: `254768695004`, base `https://wa.me/254768695004`.
- Links are generated by `js/main.js` for every `[data-wa]` element, using message templates from `js/data.js` (`general`, per service, per product, `pricing`, `quote`).
- Add context in the message (service or product name), keep the recorded greeting: `Hello Pricetech Solutions, …`.
- Always `target="_blank"` + `rel="noopener noreferrer"`. Never hardcode a `wa.me` URL in HTML.
- Adding a new service/product means adding one entry to `js/data.js` first.

## 9. File organization and conventions

```text
index.html                 All markup; canonical display copy
css/styles.css             Tokens + components + responsive rules
js/data.js                 Business data: contact, message templates, nav
js/main.js                 Interaction only (menu, WA links, section spy)
assets/images/             Photography and image placeholders
assets/icons/              Standalone SVG source (icons are inlined in HTML)
docs/                      Recon + phase reports
```

- No inline `style=""` attributes. No `<style>` blocks in HTML. No frameworks.
- CSS: BEM-ish flat class names grouped by section (`site-header`, `hero`, `service-card`…). One blank line between blocks.
- JS: `'use strict'`, IIFE or module pattern, `const`/`let`, defensive null checks, no globals beyond the documented `window.PRICETECH` data object.
- Content lives in one place. Display copy is in HTML; contact config and message templates are in `js/data.js`. Do not duplicate a phone number or message string anywhere else.
- Images need `width`/`height`, descriptive `alt`, and `loading="lazy"` below the fold.
- Every placeholder asset is an SVG with a header comment naming the required real photograph and target dimensions.

## 10. Testing and acceptance criteria

Manual gates before any Phase 1 work is called done:

1. Serve locally (`python3 -m http.server 8080`) — page loads with no console errors and no 404s.
2. `scrollWidth <= innerWidth` at 320/360/390/768/1024/1440.
3. Mobile menu opens/closes by tap, keyboard, Escape and nav link; `aria-expanded` is correct.
4. Every WhatsApp link opens `wa.me/254768695004` with the right contextual message.
5. Keyboard-only pass: skip link, header nav, all CTAs reachable with visible focus.
6. Content spot-check against the recon document: 4 services, 3 products, 4 price packages, 4 testimonials, 1 WhatsApp number, 1 `h1`.

## 11. Phase boundary

- **Phase 1 (this scope):** structure, content, tokens, responsive foundation, working navigation and WhatsApp flows, documentation. Completeness beats decoration.
- **Phase 2 (do not start without approval):** animation, advanced interaction, image art direction, pixel-perfect spacing, deep contrast tuning.

If a change is decorative and Phase 1 is not yet accepted, defer it and add it to the Phase 2 list in `docs/PHASE-1-REPORT.md`.
