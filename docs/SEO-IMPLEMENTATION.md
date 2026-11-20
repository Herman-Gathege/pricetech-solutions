# SEO Implementation — Pricetech Solutions

**Project:** Pricetech Solutions website rebuild  
**Phase:** 2 — SEO foundations  
**Date:** 20 November 2026  
**Status:** Implemented; domain placeholder pending final deployment domain confirmation.

---

## A. Target keyword themes

Themes investigated for local/service relevance. Used naturally in headings, meta descriptions and body copy — never stuffed.

| Theme | Example phrases used |
|---|---|
| Electrician in Nairobi | "electrical wiring", "electrical installations across Nairobi" |
| Electrical installation Nairobi | "Full wiring", "distribution boards", "safe connections for homes and offices" |
| Shower installation Nairobi | "shower installation & repair", "instant shower fitting" |
| Instant shower repair Nairobi | "hot water issues", "repairs and replacements" |
| Bathroom shower systems Kenya | "rain shower systems", "concealed shower systems" |
| Rain shower systems Kenya | "Premium Black Rain Shower System", "round / square rainfall" |
| Shower mixers Kenya | "Modern Concealed Shower Mixer Set", "thermostatic control" |
| Electrical maintenance Nairobi | "Maintenance services", "preventive maintenance" |

Primary service area: Nairobi, Kenya (Nairobi-wide coverage). No street address, branches or operating hours invented.

---

## B. On-page SEO

Implemented in `index.html`:

| Element | Detail |
|---|---|
| `<title>` | "Pricetech Solutions \| Electrical, Shower & Electronics Services in Nairobi" |
| Meta description | Nairobi-focused, mentions WhatsApp booking, no keyword stuffing |
| `h1` | Exactly one: "Fast. Safe. Reliable." (hero) |
| Heading hierarchy | h1 → h2 (section headings) → h3 (service/product titles); levels never skipped |
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<figure>`, `<blockquote>` |
| Section labels | Every `<section>` has `aria-labelledby` tied to a visible heading |
| Image alt text | Descriptive, unique per image; placeholders state they await photography |
| Internal links | Section anchor links with descriptive text (Home, Services, Products, Pricing, About, Reviews) |
| Anchor text | Descriptive ("Enquire about electrical installations on WhatsApp", not "click here") |
| Image filenames | Descriptive (`premium-black-rain-shower/main.svg`, `hero-showroom-placeholder.svg`) |
| Open Graph | `og:type`, `og:site_name`, `og:title`, `og:description`, `og:image`, `og:url` (placeholder domain), `og:locale: en_KE` |
| Twitter card | `summary_large_image`, title, description, image |
| Robots | `index, follow` |
| Canonical | `<link rel="canonical">` with placeholder `https://YOUR-FINAL-DOMAIN.co.ke/` |
| Theme color | `#0B0D10` (matches `--bg`) |
| Color scheme | `dark` |

No hardcoded `wa.me` URLs in HTML; all generated from `js/data.js` by `js/main.js`.

---

## C. Structured data (Schema.org)

`LocalBusiness` JSON-LD in `index.html` `<head>`:

- `@type: LocalBusiness`
- `name`: "Pricetech Solutions"
- `description`: verified service description
- `areaServed`: City = Nairobi, country = KE
- `contactPoint`: WhatsApp channel URL (`https://wa.me/254768695004`)
- `image` / `url`: placeholder domain (to be confirmed)

**Deliberately NOT included (unverified / prohibited by AGENTS.md §7):**
- Street address, telephone (`tel:`), email, opening hours
- Aggregate review ratings or star schema (testimonials are paraphrased, not independently verified)
- Product `Offer` with price/availability (prices are "on enquiry", no fixed prices published)
- Business social profiles

Only visible, verified page content is marked up.

---

## D. Technical SEO

| Item | Status |
|---|---|
| `robots.txt` | Created — allows all, references sitemap, placeholder domain |
| `sitemap.xml` | Created — single homepage URL, placeholder domain, monthly changefreq |
| Canonical URL | Placeholder `https://YOUR-FINAL-DOMAIN.co.ke/` |
| Descriptive metadata | Title, description, OG, Twitter card all present |
| Image dimensions | `width`/`height` on all ``; placeholders have target dims in header comments |
| Lazy loading | `loading="lazy"` below the fold; hero image `loading="eager"` `fetchpriority="high"` |
| Crawlable navigation | Semantic `<nav>` with anchor links; section spy highlights active section |
| Clean markup | No inline `style=""`, no `<style>` blocks, no frameworks |
| HTTPS readiness | All asset URLs relative; external WA links use `https://` |

---

## E. Final deployment requirements (before publishing)

1. **Confirm the final domain** and replace `YOUR-FINAL-DOMAIN.co.ke` in:
   - `index.html` — `og:url`, `og:image`, `twitter:image`, `canonical`, LocalBusiness `url`/`image`
   - `robots.txt` — `Sitemap:` line
   - `sitemap.xml` — `<loc>`
2. **Verify contact facts** with the owner before publishing LocalBusiness schema (WhatsApp number is confirmed; anything else is not).
3. **Replace SVG placeholders** with approved photography; update `alt`/dimensions if aspect ratio changes.
4. **Approve testimonial wording** before launch (currently paraphrased).
5. **Google Search Console setup:** verify property at the final domain, submit `sitemap.xml`, confirm indexing. Do not claim indexing before submission.
6. **Owner content sign-off** on all commercial claims (same-day service, warranties, free installation terms, "2+ years", "100%").

---

## F. Outstanding business information

Recorded in `docs/PHASE-2-REPORT.md` §12 and `docs/PHASE-1-REPORT.md` §8 — email, street address, hours, social accounts, product prices/availability, testimonial approval, final domain.
