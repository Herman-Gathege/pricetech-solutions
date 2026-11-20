# Phase 2 Reference Research — Premium Bathroom/Shower Brand UX Analysis

**Project:** Pricetech Solutions website rebuild (Phase 2: premium dark-mode digital showroom)
**Date:** 2026-11-20
**Scope:** Competitive UX research for premium bathroom, shower, and sanitaryware brands

---

## 1. Reference Websites — Access Summary

| Brand | URL | Status | Notes |
|-------|-----|--------|-------|
| **GROHE** | `https://grohe.com` | ✅ **Accessed** | Full site crawlable; UK locale (`en-GB`) used |
| **Dornbracht** | `https://dornbracht.com` | ✅ **Accessed** | Full site crawlable; US locale (`en-us`) used |
| **hansgrohe** | `https://hansgrohe.com` | ❌ **403 Forbidden** | Blocked — likely geo/WAF |
| **AXOR** | `https://axor-design.com` / `https://hansgrohe.com/axor` | ❌ **403 Forbidden** | Both URLs blocked |
| **Kohler** | `https://kohler.com` / `https://www.kohler.com` | ❌ **403 Forbidden** | Blocked |

> **Limitation:** Three of five target brands were inaccessible via automated fetch. Findings below are based solely on GROHE and Dornbracht — two of the most relevant premium references for shower/bathroom fittings. Where patterns align across both, confidence is higher.

---

## 2. Product Catalogue Organization

### 2.1 GROHE — Deep Hierarchical Taxonomy

**Top-level:** Bathroom / Kitchen / GROHE SPA (luxury sub-brand)

**Bathroom → 5 primary areas:**
- Shower area
- Bath area
- Washbasin area
- Toilet area
- Specifics for Public Areas

**Each area splits into:**
- Complete systems (e.g., "Complete shower solution")
- Components (e.g., "Shower components" → Headshower, Handshower, Thermostat, Mixer, etc.)
- For installation (rough-ins, frames)
- Accessories & consumables
- Product guides (educational content cross-linked)

**Depth:** 3–4 levels (Category → Area → Component Type → Specific Product)
**Breadcrumbs:** Present on all category pages (Home → Bathroom → Shower area → Shower components → Handshower)

**Price tier indicator:** Category pages show a 4-tier budget guide (£ / ££ / £££ / ££££) with explicit disclaimer that it excludes installation, tiles, etc. — a transparency pattern worth noting.

### 2.2 Dornbracht — Flatter, Design-Led Taxonomy

**Top-level:** Bathroom / Kitchen / Design series / Service / Inspiration / Company / Pro (professional portal)

**Bathroom → Content-led landing** (not a pure category grid):
- Hero: "Find Your Perfect Fit" with visual cards for **Modern Showers**, **Rain Showers**, **Experience Showers (Spa Series)**
- Below: Product-world grid — Shower sets, Shower heads, Shower systems (each links to PLP)
- Inspiration modules: "Consistent harmony" (Perfect Match), "Fascinating jet types", "Treatments with impact", "Sustainable shower", "Invisible perfection" (concealed systems)

**PLPs (Product Listing Pages):** `/bathroom/showers/shower-heads` — filterable list with sidebar filters:
- Series
- Product categories
- Surfaces (finishes)
- Installation method

**Design Series** is a parallel navigation axis (e.g., META, TARA, COYA, SERENITY SKY, AQUAHALO) — products belong to a series *and* a functional category.

### 2.3 Comparative Observations

| Aspect | GROHE | Dornbracht |
|--------|-------|------------|
| **Primary organising principle** | Functional (room → zone → component) | Hybrid: functional + design series + inspiration |
| **Depth** | Deeper (4 levels) | Shallower (2–3 levels to product) |
| **Cross-linking** | Product guides embedded in category tree | Inspiration modules on category landing pages |
| **Price signalling** | Tier indicators on category pages | No price info on public site (trade/showroom model) |
| **Professional vs consumer** | Separate "Service & support" dropdowns | Dedicated "Pro" top-level nav + "Professional area" |

**For Pricetech:** Our catalogue is small (4 services, 3 products, 4 price packages). A **flat, functional taxonomy** (Services / Products / Packages) with **inspiration cross-links** mirrors Dornbracht's approach better than GROHE's deep hierarchy. No need for multi-level drill-down.

---

## 3. Browsing, Filtering & Navigation

### 3.1 GROHE
- **Mega-menu** from "Products" — full category tree visible on hover/click
- **No faceted filters on PLPs observed** in fetched HTML (likely JS-rendered; static fetch shows empty category shells)
- **Breadcrumbs** are primary orientation
- **Product guides** act as "buying guides" — linked from relevant category pages
- **Search:** Present in header (magnifier icon), but not observed in static fetch

### 3.2 Dornbracht
- **Top nav:** Bathroom / Kitchen / Design series / Service / Inspiration / Company / Pro
- **PLP sidebar filters (server-rendered in fetch):**
  - Series (multi-select)
  - Product categories (multi-select)
  - Surfaces / Finishes (multi-select) — **key differentiator**
  - Installation method (multi-select)
  - "All filters" expandable, "Active filters" summary bar
- **Filter state reflected in URL** (implied by clean URLs like `/bathroom/showers/shower-heads`)
- **Sort/Order control:** "Order" dropdown (default, name, etc.)
- **Results count:** "10 Products" + "3 of 10 entries" pagination indicator
- **Mobile:** Filters likely collapse into drawer (not visible in static fetch)

### 3.3 Patterns Worth Adapting (Vanilla JS Friendly)

| Pattern | Implementation Notes |
|---------|---------------------|
| **Sidebar filter panel** with multi-select checkboxes | Pure CSS `:has()` or minimal JS toggle; filter logic can be client-side on a small dataset |
| **Active filter chips** with remove (×) | Simple DOM manipulation; accessible with `aria-live` |
| **Filter by finish/surface** | Critical for premium brass/gold/matte black story — Pricetech's shower products have finish variations |
| **Series/collection as a filter** | If we group products by "collection" (e.g., "Premium Shower Series"), this maps directly |
| **No-results / empty state** | Dornbracht shows "10 Products" count — good for setting expectations |

**Excessive for Pricetech:** Faceted search with URL sync, server-side filtering, pagination, sort-by-price (no prices published), multi-category drill-down.

---

## 4. Finish Presentation — The Premium Differentiator

### 4.1 Dornbracht — Industry Benchmark

**Dedicated finishes hub:** `/inspiration/finishes/` — a full microsite with:
- **Four finish families** (colour-coded, with hero imagery):
  1. **Hues of Metallics** — Chrome, Brushed Chrome, Platinum, Brushed Platinum
  2. **Hues of Darks** — Dark Chrome, Matte Black, Brushed Dark Platinum
  3. **Hues of Gold** — Light Gold (PVD), Brushed Light Gold, Brushed Gold (PVD), Champagne (22kt), Brushed Champagne, Durabrass (23kt), Brushed Durabrass, English Gold
  4. **Hues of Bronze** — Brushed Bronze (PVD), Brushed Dark Bronze (PVD)
  5. **Colors of Now** — Exclusive to META series (bold colours)

**Each finish swatch:** Clickable card → filtered product search (`/search#Colors:...`)

**On product detail page:** Horizontal finish selector strip — 18+ finish options for a single showerhead, each a **separate product URL** (e.g., `/products/28504979-060010/showerhead-brushed-platinum`). Swatch shows:
- 50×67px finish thumbnail
- Finish name
- Link to that finish variant

**Customisation callout:** "Individual colours — For many series, we put the entire range of RAL colours into effect as painted surfaces - from a minimum quantity of one." + "Expanding the variety of finishes: electroplating, PVD, powder-coating, wet painting."

### 4.2 GROHE
- No dedicated finishes hub found in static fetch (404 on `/inspiration/finishes`)
- Finishes likely presented on product detail pages (JS-rendered)
- Homepage hero shows "brushed brass shower fittings" — lifestyle photography leads

### 4.3 Patterns Worth Adapting

| Pattern | Pricetech Application |
|---------|----------------------|
| **Finish family grouping** (Metallics / Darks / Golds / Bronzes) | Group our shower/product finishes into 3–4 families: Chrome/Steel, Matte Black, Brushed Brass/Gold, Brushed Bronze |
| **Swatch strip on product cards** | Small inline swatches (16×16 or 24×24) on product cards; click → filters product list or opens detail |
| **Finish detail page** | Single `/finishes` page with swatches, descriptions, care notes — lightweight, no JS required |
| **Custom finish mention** | "Custom RAL colours available on request" — sets premium expectation without promising stock |

**Excessive:** 18+ finish variants per SKU, separate URLs per finish, PVD/electroplating technical deep-dive, RAL colour picker.

---

## 5. Product Galleries & Image Carousels

### 5.1 Dornbracht (Observed Patterns)
- **PLP:** Single hero image per product card (aspect ratio ~4:5), lazy-loaded WebP from CDN (`media.cdn.dornbracht.com`)
- **PDP:** Main image + **no visible carousel controls in static fetch** — likely JS-initialized gallery
- **Image URLs** show crop/fit parameters: `crop:WxH,fp:x,y//fit-in:500x10000/quality:65` — dynamic imaging CDN
- **Inspiration pages:** Full-bleed lifestyle imagery, aspect ratios vary (hero banners, editorial spreads)

### 5.2 GROHE
- **Homepage:** Auto-advancing hero carousel (3 slides: Bathroom, Kitchen, Toilet) — "Previous slide / Next slide" controls + dot indicators
- **Hero images:** Next.js `<Image>` with `w=3840&q=75` — responsive, high-quality
- **Category pages:** Large lifestyle hero (1266×2250) + 3-column card grid with product guide links
- **Inspiration:** Carousel of project case studies ("Scandi bathroom renovation", "Urban jungle kitchen") — manual controls

### 5.3 Mobile Carousel Behaviours (Inferred)
- Touch swipe (standard)
- Dot indicators persist
- Autoplay pauses on hover/interaction (WCAG)
- Reduced motion respected (implied by premium brand standards)

### 5.4 Patterns Worth Adapting (Vanilla JS, Lightweight)

| Pattern | Implementation |
|---------|----------------|
| **Simple hero carousel** (3–4 slides) | CSS scroll-snap + minimal JS for autoplay/pause, dot indicators, keyboard/touch |
| **Product card: single hero image** | No gallery on PLP; click → PDP |
| **PDP: image grid (not carousel)** | Static grid of 3–4 images (hero, detail, lifestyle, technical) — lighter than carousel, works without JS |
| **Lifestyle + technical split** | Hero lifestyle shot + spec drawings / dimensioned diagrams as separate images |
| **CDN-style responsive images** | `srcset` + `sizes` with 2–3 breakpoints; WebP + JPEG fallback |

**Excessive:** Zoomable 360° viewers, hotspot annotations, video backgrounds, multi-angle carousels with thumbnail strips, dynamic imaging CDN.

---

## 6. Product Specifications Communication

### 6.1 Dornbracht PDP Structure (Observed)
```
Showerhead - Chrome
├── Product Number / EAN
├── Finish selector (18 variants)
├── Request Information CTA (sticky or prominent)
├── Tabs/Sections:
│   ├── Product Description (marketing + key specs)
│   ├── Product Detail (bulleted technical specs)
│   ├── Customisation Options (finishes, engravings, dimensions)
│   └── Downloads (Spec package ZIP, Care instructions PDF, Factsheet PDF)
└── Technical Information (expandable):
    ├── Complete Specifications Package
    ├── 2D CAD / 3D CAD / BIM
    ├── Certificates & Sustainability
    ├── Installation
    └── Parts & Support
```

**Spec detail example:**
- `Ø 3-7/8"`
- `PURIFY RAIN, flow rate max. 1.8 gpm (at 3 bar)`
- `Function from: 1.7 gpm`
- `Descaling system`
- `7-1/8"-8-1/4" Projection`
- `Ball-joint pivotable through 30°`
- `Flanges, diameter 2-1/8"`
- `1/2" connection`

### 6.2 GROHE
- Product guides act as spec explainers (e.g., "Hand shower product guide")
- Category pages link to guides — educational first, specs second
- Likely PDP has similar tabbed structure (not visible in static fetch)

### 6.3 Patterns Worth Adapting

| Pattern | Pricetech Application |
|---------|----------------------|
| **Structured spec list** (bulleted, scannable) | For each shower product: flow rate, spray types, connection, projection, finish options, dimensions |
| **Downloadable spec sheet (PDF)** | One-page PDF per product — professional, shareable, printable for installers |
| **Customisation callout** | "Custom finishes / dimensions available — contact for details" |
| **Installation rough-in info** | "Concealed installation system available" — speaks to pros |
| **Care instructions** | Simple accordion or link — adds credibility |

**Excessive:** CAD/BIM downloads, certificate databases, parts explosion diagrams, multi-tab PDP with JS state.

---

## 7. Enquiry / Purchase / Conversion Flows

### 7.1 Dornbracht — "Request Information" Model
- **Primary CTA:** "Request Information" button (prominent, top-right on PDP)
- **Contact page** (`/company/contact`) has **four distinct forms**:
  1. Frequently asked questions
  2. General contact request
  3. Customer service request
  4. **Dornbracht Atelier** (custom/bespoke enquiry)
- **Showroom finder:** `/service/dealer-search/` — "Find qualified showrooms in your area who can advise and support you in selection, planning and installation"
- **Professional portal:** `/professional/` — "Watch lists, functions that simplify planning, consulting and installation"
- **No cart, no checkout, no price** — pure lead generation for high-value specified products

### 7.2 GROHE — Hybrid Consumer/Pro
- **Header:** "Contact us" + "Find showrooms" + "Project list" (saved products)
- **Cart icon** present (consumer e-com for some markets)
- **Service & support** split: Consumer / Professional
- **Project list** — "My project list" for saving/selecting products
- **Newsletter sign-up** in footer + inspiration pages

### 7.3 Patterns Worth Adapting for Pricetech (WhatsApp-Led)

| Pattern | Adaptation |
|---------|------------|
| **"Request Information" → WhatsApp** | Replace form with `wa.me` deep link + contextual message ("Hello Pricetech Solutions, I'm interested in [Product/Service]...") |
| **Showroom finder → "Book a site visit"** | Single CTA: "Request a quote / site visit" → WhatsApp with context |
| **Project list → "Saved items"** | Lightweight localStorage "saved products" → pre-fill WhatsApp message |
| **Professional portal → "For installers/architects"** | Simple landing section with technical PDFs, rough-in specs, contact for trade pricing |
| **Multiple contact forms → Single WhatsApp with context** | One entry point, message template varies by trigger (service, product, pricing, general) |

**Excessive:** Multi-step enquiry forms, user accounts, project lists with persistence, trade login portals, newsletter management.

---

## 8. Mobile Product Browsing

### 8.1 Observed Patterns (Inferred from Responsive Markup)

**Dornbracht:**
- Viewport meta present
- Image `fit-in:767x10000` suggests mobile-first breakpoint at 767px
- Filter sidebar likely collapses to drawer (hamburger filter button)
- Product cards stack single-column
- Touch targets: finish swatches 50×67px — **above 44×44 minimum**

**GROHE:**
- Next.js responsive images (`w=3840` src, `w=3840&q=75` delivered)
- Hero carousel: touch swipe, dots persist
- Mega-menu → mobile drawer (standard)
- Category grids: 1 col mobile → 2 col tablet → 3 col desktop

### 8.2 Critical Mobile UX Requirements (from both)

| Requirement | Evidence |
|-------------|----------|
| **No horizontal scroll** | Both use `max-width: 100%` on images, fluid grids |
| **Touch targets ≥ 44×44** | Dornbracht finish swatches 50×67; GROHE CTA buttons generous |
| **Readable text without zoom** | Both use relative units, clamp() headlines |
| **Sticky/fixed headers minimal** | GROHE header collapses; Dornbracht header stays but compact |
| **Forms work on mobile** | Dornbracht contact forms likely native; WhatsApp deep links work natively |

### 8.3 Pricetech Mobile Checklist (Phase 2)
- [ ] Product cards: single column < 640px, 2-col 640–1024px, 3-col > 1024px
- [ ] Finish swatches: 32×32px minimum, 8px gap, horizontal scroll if > 4 (with scroll-snap)
- [ ] WhatsApp CTA: full-width button on mobile, 48px height
- [ ] Spec tables: horizontal scroll wrapper with shadow fade indicator
- [ ] Hero carousel: swipe only, no autoplay on mobile (data-saver friendly)

---

## 9. Premium Photography & Visual Language

### 9.1 Dornbracht
- **Editorial lifestyle:** Architectural spaces, high-end residential, yacht interiors
- **Product hero:** Clean studio shots on neutral/dark backgrounds, dramatic lighting
- **Finish close-ups:** Macro photography showing texture (brushed, polished, PVD depth)
- **Application context:** Shower in situ, kitchen in use, details of jet types
- **Colour palette:** Muted, sophisticated — warm neutrals, stone, wood, matte black accents
- **Aspect ratios:** Varied — hero banners 16:9, product cards 4:5, editorial 3:4 or 1:1

### 9.2 GROHE
- **Hero lifestyle:** Bright, aspirational bathrooms/kitchens (Scandi, urban jungle themes)
- **Product in context:** Always installed, never isolated on white
- **Technology close-ups:** Spray patterns, thermostat internals, sensor details
- **Colour palette:** Cooler — whites, greys, brushed brass/gold accents, terracotta feature walls
- **Video:** Homepage hero uses `<video>` (muted, loop, playsinline) — "Showers that stay with you"

### 9.3 Patterns Worth Adapting

| Pattern | Pricetech Application |
|---------|----------------------|
| **Dark-mode product photography** | Shoot shower products on dark grey/charcoal backgrounds — matches our `--surface` / `--bg` tokens |
| **Finish macro shots** | Close-ups of brushed brass, matte black, chrome — shows quality |
| **Installed context shots** | Shower in a real Nairobi bathroom (tile, lighting, plumbing visible) |
| **Jet/spray pattern diagrams** | Illustrative SVG showing Rain / Mist / Massage / Jet modes |
| **Video hero (optional, Phase 2)** | Short muted loop of water flow — lightweight WebM/MP4, `preload="none"` |

**Excessive:** Yacht/private jet photography, custom CGI renders, 8K video backgrounds, editorial spreads with copy.

---

## 10. Navigation & Filtering Implementation Details

### 10.1 Dornbracht Filter Sidebar (Server-Rendered)
```html
<aside class="filter-sidebar">
  <h2>Filters</h2>
  <section>
    <h3>Series</h3>
    <ul><li><label><input type="checkbox" name="series" value="meta"> META</label></li>...</ul>
  </section>
  <section>
    <h3>Surfaces</h3>
    <ul><li><label><input type="checkbox" name="finish" value="chrome"> Chrome</label></li>...</ul>
  </section>
  ...
  <div class="active-filters">
    <span>Active filters:</span>
    <button aria-label="Remove Chrome">Chrome ×</button>
  </div>
</aside>
```
- Checkboxes with `name` arrays → GET to same URL with query params
- "All filters" toggle for progressive disclosure
- Results count updates on submit

### 10.2 GROHE Mega-Menu
- `<nav aria-label="Main navigation">` with nested `<ul>`
- Hover/focus reveals sub-menus (CSS `:hover`, `:focus-within`)
- Mobile: `<button aria-expanded="false" aria-controls="menu-panel">` → off-canvas panel

### 10.3 Vanilla JS Patterns for Pricetech

| Component | Approach |
|-----------|----------|
| **Mobile nav** | `<button>` + off-canvas `<div role="dialog" aria-modal="true">`, focus trap, ESC close, body scroll lock |
| **Product filter** | Client-side: `data-finish`, `data-series` on cards; JS filters `display: none` / `grid`; active chips in sticky bar |
| **Accordion FAQs/specs** | `<details>/<summary>` — zero JS, native browser support |
| **Carousel** | CSS `scroll-snap-type: x mandatory` + `scroll-snap-align: center`; JS only for dots/autoplay |
| **WhatsApp link generator** | Single function in `js/main.js` reading `js/data.js` templates — already in Phase 1 spec |

---

## 11. Balancing Product Discovery with Brand Storytelling

### 11.1 Dornbracht — Storytelling First, Products as Evidence
- **Homepage:** 3 brand pillars ("Embrace Beauty", "Follow your bliss", "Create your own", "Trust in excellence") — each with lifestyle image + copy + CTA
- **Category landing:** "Find Your Perfect Fit" → inspiration modules (Perfect Match, Jet Types, Spa Treatments, Sustainability, Concealed Systems) → *then* product grid
- **Finishes hub:** Pure brand storytelling — "The Aura of Perfection", "Perfect Beauty", "Fascinating intensity", "Perfect Quality"
- **References/Projects:** Global portfolio (432 Park Avenue, yachts, hotels) — proves capability

### 11.2 GROHE — Technology & Sustainability as Story
- **Four pillars:** Quality, Technology, Design, Sustainability — each with dedicated page
- **Homepage hero:** "Showers that stay with you" + video
- **Inspiration section:** Renovation case studies (Scandi, Urban Jungle) — relatable, aspirational
- **Guides & tips:** Educational content marketing — "Bathroom renovation cost", "Child-friendly bathroom", "Sensor taps"
- **News & events:** EPD, less plastic initiative, Water Insights 2025 — thought leadership

### 11.3 Pricetech Application — "Workmanship & Reliability" Story

| Brand Pillar | Pricetech Expression | Page/Section |
|--------------|---------------------|--------------|
| **Precision** | "Every shower installed to spec. Every connection pressure-tested." | Services → Installation Process |
| **Reliability** | "We use only KEBS-certified fittings. 2-year workmanship warranty." | Trust signals / footer |
| **Workmanship** | "Master plumbers, not contractors. See our team." | About / Team (Phase 2) |
| **Local expertise** | "Nairobi water pressure? We know every estate." | FAQ / Blog post |
| **Transparent pricing** | "KES 8,000+ — no hidden costs. Quote before work starts." | Pricing packages |

**Storytelling vehicles (lightweight):**
1. **Hero statement** — one sentence + WhatsApp CTA
2. **Process strip** — 4 steps: Enquire → Site Visit → Quote → Install (icons + 2 lines each)
3. **Trust badges** — KEBS, NCA, 2yr warranty, 500+ installs (if verified)
4. **Case study** — 1 real project: "Kilimani duplex: 3 bathrooms, 2-day install" (photo + specs)
5. **Finishes showcase** — "Choose your finish: Chrome / Matte Black / Brushed Brass / Brushed Bronze" with swatches

**Excessive:** Video testimonials, interactive project map, blog/engine, sustainability report, architect portal.

---

## 12. Ideas Worth Adapting — Prioritised for Pricetech Phase 2

### High Impact / Low Effort (Do First)
1. **Finish swatch strip on product cards** — 3–4 finishes, click filters or links to detail
2. **Dedicated `/finishes` page** — swatch grid, descriptions, care notes, "Custom RAL on request"
3. **Spec sheet PDF per product** — one-pager: dimensions, flow rates, connections, finishes
4. **WhatsApp "Request Quote" with context** — replaces all forms; message includes product/service name
5. **CSS scroll-snap hero carousel** — 3 slides max, no autoplay on mobile, reduced-motion aware
6. **Client-side filter by finish/series** — `data-*` attributes + vanilla JS, active chips
7. **Process strip (4 steps)** — visual trust builder, zero JS
8. **Case study card** — 1 real project, photo + key specs + "Enquire about similar" WhatsApp

### Medium Impact / Medium Effort (Phase 2 Core)
9. **Product detail layout** — Hero image + spec list (bulleted) + finish selector + WhatsApp CTA + PDF download
10. **Installation rough-in diagrams** — SVG line drawings for concealed/visible shower systems
11. **Spray pattern icons** — SVG set: Rain, Mist, Massage, Jet, Waterfall
12. **Mobile filter drawer** — off-canvas panel for finish/series filters on PLP

### Low Impact / High Effort (Defer or Skip)
- Multi-image product gallery with lightbox
- 360° product viewer
- Video hero background
- User accounts / saved projects
- Trade/professional portal
- Newsletter sign-up
- Blog/news engine
- Multi-language

---

## 13. Ideas Excessive for This Project

| Feature | Reason |
|---------|--------|
| **Faceted search with URL sync** | Over-engineering for < 20 products |
| **Separate URL per finish variant** | SEO dilution; single PDP with selector is cleaner |
| **CAD/BIM/Certificate downloads** | Not a manufacturer; we install, don't specify |
| **Project list / user dashboard** | No repeat purchase cycle; WhatsApp chat *is* the history |
| **Mega-menu with 4-level hierarchy** | Our IA is flat: Services / Products / Packages / About / Contact |
| **Autoplay video hero** | Bandwidth, data costs in Kenya, reduced-motion concerns |
| **Editorial blog / inspiration magazine** | Content maintenance burden; one case study suffices |
| **Architect/designer portal** | Lead volume doesn't justify; PDF spec pack serves same need |
| **Dynamic imaging CDN (crop/fit params)** | Static `srcset` + WebP covers responsive needs |
| **Live chat / chatbot** | WhatsApp *is* the chat; adding another channel fragments |

---

## 14. Visual Observations & Screenshot References

> **Note:** Screenshots not captured in this automated research. Key visual references to recreate manually during design:

| Reference | What to Capture |
|-----------|-----------------|
| Dornbracht `/inspiration/finishes/` | Finish family collages (Metallics, Darks, Golds, Bronzes), swatch grid, colour-coded sections |
| Dornbracht PDP finish selector | Horizontal swatch strip (18+), active state, thumbnail quality |
| Dornbracht PLP `/bathroom/showers/shower-heads` | Sidebar filters, active filter chips, product card density |
| GROHE homepage hero carousel | 3-slide layout, video integration, dot indicators, CTA placement |
| GROHE category page | Price tier indicator (£/££/£££/££££), breadcrumb, hero lifestyle image |
| GROHE inspiration carousel | Case study cards, manual controls, image aspect ratios |
| Both: Mobile views | Filter drawer, card stacking, touch targets, sticky CTA |

---

## 15. Conclusion & Next Steps

**Core insight:** Premium bathroom brands don't sell products — they sell **specified solutions**. Their websites are **specification tools** for architects, designers, and discerning homeowners. Pricetech is a **service business** — our "product" is *expert installation*. The website must signal: **we know the products, we install them right, we stand by our work.**

**Phase 2 focus:** Elevate the *presentation* of our existing Phase 1 content (4 services, 3 products, 4 packages) with:
- Finish storytelling (swatches, macros, custom mention)
- Technical credibility (spec sheets, rough-in diagrams, spray icons)
- Conversion clarity (WhatsApp with context, process strip, case study)
- Dark-mode visual polish (product photography on dark backgrounds, brass accent colour)

**Defer:** Any feature requiring CMS, user accounts, multi-step flows, or content we don't have.

---

## Appendix: URLs Successfully Visited

| URL | Brand | Purpose |
|-----|-------|---------|
| `https://grohe.com` | GROHE | Homepage, global structure |
| `https://grohe.com/en-GB/category/Bathroom/Shower_area` | GROHE | Category landing, price tiers |
| `https://grohe.com/en-GB/category/Bathroom/Shower_area/Shower_components/Handshower` | GROHE | Deep category page |
| `https://grohe.com/en-GB/learn-discover/guides-tips` | GROHE | Guides & tips hub |
| `https://dornbracht.com/en-us/` | Dornbracht | Homepage, brand pillars |
| `https://dornbracht.com/en-us/bathroom/showers/` | Dornbracht | Shower category landing |
| `https://dornbracht.com/en-us/bathroom/showers/shower-heads` | Dornbracht | PLP with filters |
| `https://dornbracht.com/en-us/products/28504979-000010/showerhead-chrome` | Dornbracht | PDP with finishes, specs, downloads |
| `https://dornbracht.com/en-us/inspiration/finishes/` | Dornbracht | Finishes hub (benchmark) |

---

## Appendix: URLs Not Accessed (403 Forbidden)

| URL | Brand | Likely Cause |
|-----|-------|--------------|
| `https://hansgrohe.com` | hansgrohe | WAF / geo-block / bot protection |
| `https://hansgrohe.com/axor` | AXOR (hansgrohe sub) | Same |
| `https://axor-design.com` | AXOR | Same |
| `https://kohler.com` / `https://www.kohler.com` | Kohler | Same |
| `https://grohe.com/en-GB/inspiration/finishes` | GROHE | 404 — may exist under different path or JS-rendered |

---

*End of report. This document informs Phase 2 implementation decisions only — do not treat as specification.*