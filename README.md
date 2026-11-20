# Pricetech Solutions — website

A premium, conversion-focused single-page website for **Pricetech Solutions**, an electrical, shower and electronics service business in Nairobi, Kenya. The primary action everywhere is a WhatsApp enquiry.

Phase 1 (structure, content, responsive foundation, working navigation and WhatsApp flows) is complete. Phase 2 (premium showroom, expanded product catalogue, carousels, motion, SEO) is complete.

- Static site: HTML5, CSS3, vanilla JavaScript
- No build step, no bundler, no npm dependencies
- Business facts come from `docs/RECON-MISSION-Pricetech-Solutions.md`
- Engineering rules live in `AGENTS.md`

## Run locally

Any static file server works:

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

If port 8080 is taken, pick another free port, for example `python3 -m http.server 8091`, and open that port instead.

Do not open `index.html` directly with `file://`: serve it over HTTP so fonts and relative assets behave the same as in production.

## Project structure

```text
price-tech-solutions/
├── index.html                 All page markup and canonical display copy
├── AGENTS.md                  Permanent project rules
├── README.md
├── robots.txt                 Crawl policy (placeholder domain — confirm before launch)
├── sitemap.xml                Sitemap (placeholder domain — confirm before launch)
├── docs/
│   ├── RECON-MISSION-Pricetech-Solutions.md
│   ├── PHASE-1-REPORT.md
│   ├── PHASE-2-REFERENCE-RESEARCH.md   Competitive UX research (premium bathroom brands)
│   ├── PHASE-2-REPORT.md               Phase 2 implementation report
│   └── SEO-IMPLEMENTATION.md           SEO foundations and deployment requirements
├── assets/
│   ├── images/
│   │   ├── products/              Named product placeholder SVGs (replace before launch)
│   │   │   ├── premium-black-rain-shower/
│   │   │   ├── concealed-shower-mixer/
│   │   │   ├── tempesta-cube-250/
│   │   │   ├── round-rainfall-shower/
│   │   │   ├── brushed-brass-shower-system/
│   │   │   ├── matte-black-hand-shower/
│   │   │   └── square-rainfall-shower/
│   │   └── showroom/              Hero carousel placeholder SVGs
│   ├── icons/                 Standalone SVG source (UI icons are inlined in index.html)
│   └── fonts/                 Reserved for self-hosted fonts (currently Google Fonts)
├── css/
│   └── styles.css             Design tokens + components + responsive rules
└── js/
    ├── data.js                Contact config, WhatsApp templates, catalogue data
    └── main.js                Navigation, WhatsApp links, catalogue rendering,
                               carousels, scroll reveals, product dialog
```

## Where to edit what

| Change | File |
|---|---|
| Section copy, service/pricing/review text | `index.html` (each fact appears once) |
| WhatsApp number, greeting, message templates, topic labels | `js/data.js` → `PRICETECH.contact` and `PRICETECH.topics` |
| Catalogue (products, categories, finishes, verification status) | `js/data.js` → `PRICETECH.catalogue` |
| Colours, fonts, spacing, breakpoints | `css/styles.css` → `:root` tokens |
| Navigation, mobile menu, scroll spy, WhatsApp wiring, catalogue rendering, carousels, reveals | `js/main.js` |

### Adding a product

1. Add one entry to `PRICETECH.catalogue.products` in `js/data.js` (id, name, category, finishes, images[], specifications, waTopic, verificationStatus).
2. Add its label to `PRICETECH.topics` keyed by `waTopic`.
3. The catalogue grid, filter chips and WhatsApp quotation links are generated automatically — no HTML or component change needed.
4. Add placeholder images under `assets/images/products/<slug>/` (main.svg + detail.svg).

### WhatsApp links

Every enquiry link is an anchor with a `data-wa` key. `js/main.js` turns it into a `wa.me` URL at load and adds `target="_blank" rel="noopener noreferrer"`. Never hardcode a `wa.me` URL in HTML.

| `data-wa` | `data-wa-topic` | Message |
|---|---|---|
| `general` | — | Hello Pricetech Solutions, I need your services. |
| `quote` | — | Hello Pricetech Solutions, I would like a quotation for a job in Nairobi. |
| `service` | e.g. `electrical-installations` | Hello Pricetech Solutions, I need help with electrical installations. |
| `product` | e.g. `rain-shower` | Hello Pricetech Solutions, I would like a quotation for the Premium Black Rain Shower System. |
| `pricing` | e.g. `full-wiring` | Hello Pricetech Solutions, I would like a quotation for the Full Wiring package. |

## Photography

`index.html` references 17 SVG placeholder SVGs under `assets/images/products/` (14) and `assets/images/showroom/` (3). Each file starts with a comment naming the real photograph required and its target dimensions. Replace a file with the approved asset using the same filename, then update the `alt` text in `index.html` (and `width`/`height` if the aspect ratio changes). No component code change is required.

Do not publish stock or AI-imagery as Pricetech's own work. Real job photographs need owner permission. Entries marked "illustrative concept" are proposed catalogue variations, not confirmed stock.

## Quality gates

```text
1. Serve locally and confirm no console errors and no failed requests.
2. No horizontal overflow at 320 / 360 / 390 / 768 / 1024 / 1440 px.
3. Mobile menu: tap, keyboard (Enter/Space), Escape, nav link; aria-expanded resets.
4. Every WhatsApp link opens wa.me/254768695004 with the correct context message.
5. Keyboard pass: skip link, header nav, all CTAs, visible focus.
6. Carousel: swipe/drag, prev/next arrows, dot indicators, ArrowLeft/ArrowRight keys.
7. Content: 4 services, 7 products (3 confirmed + 4 illustrative concepts), 4 price packages,
   4 testimonials, 1 h1, 1 WhatsApp number.
```

Full results and remaining owner questions are in `docs/PHASE-2-REPORT.md` and `docs/PHASE-1-REPORT.md`.

## SEO

- `robots.txt` and `sitemap.xml` created with `YOUR-FINAL-DOMAIN.co.ke` placeholder.
- Open Graph, Twitter card, canonical URL and `LocalBusiness` JSON-LD in `index.html` `<head>`.
- Replace the placeholder domain with the confirmed final domain before launch (see `docs/SEO-IMPLEMENTATION.md`).
- Do not submit to Google Search Console until the domain and contact facts are confirmed.

## Content policy

Do not invent business information. No `tel:` number, email, street address, opening hours, social profiles, product prices, warranties, certifications or extra testimonials are confirmed. WhatsApp is the only verified contact channel. Illustrative concept products are clearly marked and are not presented as confirmed stock. Update `docs/PHASE-1-REPORT.md` when the owner confirms more.
