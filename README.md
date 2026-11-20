# Pricetech Solutions — website

A premium, conversion-focused single-page website for **Pricetech Solutions**, an electrical, shower and electronics service business in Nairobi, Kenya. The primary action everywhere is a WhatsApp enquiry.

Phase 1 (structure, content, responsive foundation, working navigation and WhatsApp flows) is complete. Phase 2 polish is deliberately out of scope.

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
├── docs/
│   ├── RECON-MISSION-Pricetech-Solutions.md
│   └── PHASE-1-REPORT.md
├── assets/
│   ├── images/                SVG placeholder photography (replace before launch)
│   ├── icons/                 Standalone SVG source (UI icons are inlined in index.html)
│   └── fonts/                 Reserved for self-hosted fonts (currently Google Fonts)
├── css/
│   └── styles.css             Design tokens + components + responsive rules
└── js/
    ├── data.js                Contact config and WhatsApp message templates
    └── main.js                Navigation, WhatsApp link generation, section highlighting
```

## Where to edit what

| Change | File |
|---|---|
| Section copy, service/product/pricing/review text | `index.html` (each fact appears once) |
| WhatsApp number, greeting, message templates, topic labels | `js/data.js` → `PRICETECH.contact` and `PRICETECH.topics` |
| Colours, fonts, spacing, breakpoints | `css/styles.css` → `:root` tokens |
| Navigation, mobile menu, scroll spy, WhatsApp wiring | `js/main.js` |

### WhatsApp links

Every enquiry link is an anchor with a `data-wa` key. `js/main.js` turns it into a `wa.me` URL at load and adds `target="_blank" rel="noopener noreferrer"`. Never hardcode a `wa.me` URL in HTML.

| `data-wa` | `data-wa-topic` | Message |
|---|---|---|
| `general` | — | Hello Pricetech Solutions, I need your services. |
| `quote` | — | Hello Pricetech Solutions, I would like a quotation for a job in Nairobi. |
| `service` | e.g. `electrical-installations` | Hello Pricetech Solutions, I need help with electrical installations. |
| `product` | e.g. `rain-shower` | Hello Pricetech Solutions, I would like a quotation for the Premium Black Rain Shower System. |
| `pricing` | e.g. `full-wiring` | Hello Pricetech Solutions, I would like a quotation for the Full Wiring package. |

To add a service or product: add the card/section to `index.html`, give its CTA a new `data-wa-topic`, and add the matching label to `PRICETECH.topics` in `js/data.js`.

## Photography

`index.html` currently references five SVG placeholders in `assets/images/`. Each file starts with a comment naming the real photograph required and its target dimensions. Replace a file with the approved asset using the same filename, then update the `alt` text in `index.html` (and `width`/`height` if the aspect ratio changes).

Do not publish stock or AI-imagery as Pricetech's own work. Real job photographs need owner permission.

## Quality gates

```text
1. Serve locally and confirm no console errors and no failed requests.
2. No horizontal overflow at 320 / 360 / 390 / 768 / 1024 / 1440 px.
3. Mobile menu: tap, keyboard (Enter/Space), Escape, nav link; aria-expanded resets.
4. Every WhatsApp link opens wa.me/254768695004 with the correct context message.
5. Keyboard pass: skip link, header nav, all CTAs, visible focus.
6. Content: 4 services, 3 products, 4 price packages, 4 testimonials, 1 h1, 1 WhatsApp number.
```

Full results and remaining owner questions are in `docs/PHASE-1-REPORT.md`.

## Content policy

Do not invent business information. No `tel:` number, email, street address, opening hours, social profiles, product prices, warranties, certifications or extra testimonials are confirmed. WhatsApp is the only verified contact channel. Update `docs/PHASE-1-REPORT.md` when the owner confirms more.
