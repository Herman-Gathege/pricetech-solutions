# Pricetech Solutions — Website Reconnaissance & Rebuild Mission

**Target:** https://pricetechsolutions.netlify.app/  
**Recon date:** 20 November 2026  
**Purpose:** Preserve the existing business information and conversion paths while rebuilding the website in a completely separate project folder. The rebuild will be completed in two phases: (1) project setup and structural implementation, then (2) visual polishing and experience refinement.

---

## 1. Mission brief

This is a reconstruction project, not a blind redesign. Before implementation, establish a reliable record of:

- Business identity, positioning and service area.
- Every visible section and its content.
- Services, products, prices, guarantees and claims.
- Contact details, calls to action and destination links.
- Existing visual language and assets, where they can be inspected in the source project.
- UX problems, content risks and opportunities for improvement.
- A new design direction that is clearly distinct from the current site.

**Non-negotiable:** Do not overwrite, modify, or deploy over the existing project. Create a new folder/repository and preserve the original as the reference until the replacement has been reviewed and approved.

## 2. Website snapshot

The current site presents **Pricetech Solutions** (also written as “Price tech” in some places) as a Nairobi-based electrical and water-heater service provider.

### Positioning

- Main tagline: **Fast. Safe. Reliable.**
- Supporting positioning: Nairobi's trusted electrical experts.
- Core promise: professional electrical wiring, shower installation and electronics repair.
- Availability claim: same-day service across Nairobi.
- Trust themes: experienced technician, transparent pricing, Nairobi-wide coverage and quality workmanship.

### Business location and coverage

- Public location shown: **Nairobi, Kenya**
- Coverage claim: **Nairobi-wide**
- Specific neighbourhoods mentioned in testimonials: South B, Westlands, Kasarani and Kilimani.
- No street address, office location, opening hours or Google Maps link was visible in the extracted page content. Do not invent these.

### Contact details

| Item | Captured value | Notes |
|---|---|---|
| WhatsApp number | **+254 768 695 004** | Extracted from the Book on WhatsApp destination |
| WhatsApp URL | https://wa.me/254768695004?text=Hello+Pricetech+Solutions%2C+I+need+your+services | Existing prefilled message: “Hello Pricetech Solutions, I need your services” |
| Email | Not found | Confirm with the business owner |
| Telephone call link | “Call us now” is visible | Exact `tel:` destination was not exposed in the page extraction; inspect source project |
| Physical address | Not found | Only Nairobi, Kenya is displayed |
| Social media | Not found | Confirm whether accounts exist before adding icons |

Use the WhatsApp number consistently throughout the new site. Verify that the number is still active with the business owner before launch. Use a single central contact configuration so that the number and message can be updated once.

## 3. Existing navigation and page structure

The current website is a single-page landing site with these navigation labels:

| Navigation label | Intended destination/section |
|---|---|
| About | About / Who We Are |
| Services | Services |
| Store | Products |
| Pricing | Pricing |
| Why us | Why Choose Us |
| Reviews | Testimonials |
| Book now | WhatsApp enquiry |

The page also includes a cart drawer / quotation interaction near the end of the document. The extracted page shows “Your Cart”, “Total: Custom Quote” and “Get Quotation on WhatsApp”. Confirm the actual cart behaviour in the source code before deciding whether to retain, replace or simplify it.

### Section-by-section content inventory

#### A. Header / navigation

- Brand label: “Price tech”
- Navigation: About, Services, Store, Pricing, Why us, Reviews
- Primary action: Book now
- A small cart indicator is displayed beside the booking action.

**Rebuild note:** Make navigation predictable and responsive. On mobile, use a clear menu and keep the primary WhatsApp action easy to reach. Decide whether a cart is genuinely useful for a quote-led service business; do not carry over a non-functional e-commerce pattern.

#### B. Hero

- Eyebrow: “Nairobi's trusted electrical experts”
- Headline: “Fast. Safe. Reliable.”
- Description: “Professional electrical wiring, shower installation, and electronics repair. Same-day service available across Nairobi.”
- Primary CTA: Book on WhatsApp
- Secondary CTA: Call us now
- Trust points:
  - Same-day service
  - Experienced technician
  - Transparent pricing
  - Nairobi-wide coverage
- Hero image alt text: “Electrician at work”
- Experience marker: “2+ YEARS Trusted Experience”

**Rebuild note:** Make the first screen immediately answer: what the business does, where it operates, why a visitor should trust it, and how to request help. Use a real, approved business/technician image if available rather than relying on a generic stock image.

#### C. About / Who We Are

Heading: “Raising the Standard of Electrical Services in Nairobi”

Existing narrative:

> At Pricetech Solutions, we noticed a gap in the market: finding a reliable, transparent, and highly skilled technician on short notice was nearly impossible. We started with a simple mission — to provide Nairobi residents with safe, top-tier electrical and water heater solutions without the hidden fees.
>
> Whether you need a quick instant shower installation, a complex full-house wiring job, or emergency fault finding, our experienced team ensures the job is done right the very first time. We treat your home with respect and prioritize your safety above all else.

**Rebuild note:** Preserve the meaning, but edit for clarity and scannability. Do not add unverified claims about licensing, certifications, insurance, staff size or years in business.

#### D. Services

Intro label: “What we do”  
Heading: “Our services”  
Intro: “We handle all things electrical — from full installations to quick repairs — so you don't have to.”

| Service | Existing description |
|---|---|
| Electrical installations | Full wiring, socket installations, distribution boards, and safe connections for homes and offices. |
| Shower installation & repair | Modern instant shower fitting, repairs, and replacements. Hot water issues? We fix them fast. |
| Electronics repair | TVs, home appliances, fans, and more. We diagnose and fix with precision and care. |
| Maintenance services | Regular checkups, fault detection, and preventive maintenance to keep your systems running safely. |

Existing visual markers: lightning bolt, shower, television and tools emojis/icons.

**Rebuild note:** Present services as clear, individually understandable offerings. Each should have a short description and a relevant enquiry action. Do not imply emergency 24/7 availability unless the business confirms it.

#### E. Store / products

Section label: “Our Store”  
Heading: “Latest Products”  
Intro: “Browse our high-quality water heaters and showers. Request a direct quotation via WhatsApp.”

| Product | Captured features |
|---|---|
| Premium Black Rain Shower System | Matte black finish; large overhead rain shower; adjustable handheld wand; free installation in Nairobi. |
| Modern Concealed Shower Mixer Set | In-wall concealed installation; square rainfall showerhead; 3-mode handheld shower; high-pressure design. |
| Tempesta Cube 250 Thermostatic System | Precision thermostatic control; 250mm square head shower; water-saving technology; premium build quality. |

Each product currently shows “Add to Cart” and “Get Quotation” actions.

**Important content validation:** Product names and specifications have been captured from the existing page, but prices, stock status, brands, model numbers, warranty, delivery terms and product images were not confirmed. “Free installation in Nairobi” is a material commercial promise and must be reconfirmed before publication.

**Rebuild recommendation:** If customers cannot complete a real checkout, make the product experience quotation-led: product details + “Request a quote on WhatsApp”. Only implement cart/checkout functionality if the business confirms it is operational and wants online ordering.

#### F. Pricing

Section label: “Transparent pricing”  
Heading: “Simple, fair rates”  
Intro: “No hidden charges, no surprises. You know what you're paying before we start. All prices in KES.”

| Package/service | Description | Displayed price | Included items / terms |
|---|---|---:|---|
| Basic Fix | Quick single-item repairs and minor jobs | KES 500–1,500 | Single socket/switch replacement; basic fault diagnosis; light fitting installation; minor wiring fixes; free inspection on arrival. |
| Shower Service | Complete instant shower solutions | KES 2,000–5,000 | Instant shower installation; repair and fault fixing; pipe connection and sealing; same-day service available; 30-day workmanship warranty; free re-check if issue recurs. |
| Full Wiring | Complete electrical installation projects | KES 8,000+ | Full house/office wiring; distribution board setup; multiple socket installation; safety inspection and report; 90-day workmanship warranty; site visit and quote included. |
| Electronics Repair | Diagnosis and repair of appliances | KES 500–3,000 | TV repair and diagnostics; home appliance repair; fan and motor servicing; component-level repairs; no-fix, no-fee policy. |

The page states: “Prices are estimates. Final cost depends on job complexity and parts required. We always confirm pricing before starting work — no surprises.”

**Rebuild note:** Keep the estimate disclaimer close to the prices. Confirm whether each price is a labour-only estimate, whether parts are excluded, and whether inspection/transport charges apply. Do not turn “KES 8,000+” into a fixed price.

#### G. Why choose us / trust

Section label: “Why choose us”  
Heading: “Built on trust”  
Intro: “We're not just technicians. We're a team that shows up, gets the job done right, and leaves you with peace of mind.”

Displayed proof points:

- **2+** — Years of hands-on electrical experience across Nairobi.
- **24h** — Fast response — same-day service for urgent issues.
- **100%** — Transparent pricing — no hidden charges, ever.
- **✓** — Quality workmanship guaranteed on every job.

**Validation required:** The 24h label is ambiguous: it could imply 24-hour availability, a response-time promise or something else. The accompanying copy says same-day service. Clarify before reuse. Confirm the 2+ years and 100% claims and what “guaranteed” means.

#### H. Reviews / testimonials

Heading: “What our clients say”

The page contains four distinct testimonial entries, then repeats the same four entries a second time.

| Name shown | Location shown | Testimonial summary |
|---|---|---|
| Grace M. | South B, Nairobi | Instant shower fixed within an hour; professional, clean work and fair price. |
| James K. | Westlands, Nairobi | Apartment rewired and sockets installed; no mess left behind; completed the same day. |
| Faith W. | Kasarani, Nairobi | TV repaired at an unexpectedly fair price; describes the team as honest. |
| David O. | Kilimani, Nairobi | Emergency wiring after a power surge; says the team arrived within two hours. |

All entries display five stars.

**Important validation:** These testimonials and star ratings are claims attributed to customers. Confirm they are genuine and approved for publication. The current repetition appears to be duplicate content, not eight separate reviews. Display each distinct review once. Do not invent surnames, profile photos, review-platform links or additional testimonials.

#### I. Closing CTA

Heading: “Need electrical help today?”

Copy: “Whether it's a faulty shower, wiring issue, or emergency repair — Pricetech Solutions is ready. We respond fast and get the job done right the first time.”

Actions:
- Book on WhatsApp
- Call us now

Urgency line: “Limited daily bookings — contact us now for fast service”

**Validation:** Confirm that daily capacity is genuinely limited before retaining scarcity language.

#### J. Footer

- Brand: “Price tech Solutions”
- Location: “Nairobi, Kenya”
- Tagline: “Fast. Safe. Reliable.”
- Copyright: “© 2026 Pricetech Solutions. All rights reserved.”

No email, postal address, social links, business hours or legal links were visible in the extracted content.

## 4. Link and CTA register

| Link / action | Destination captured | Status / implementation note |
|---|---|---|
| Book now (header) | WhatsApp number +254768695004 | Destination inspected; use central contact config |
| Book on WhatsApp (hero) | Same WhatsApp destination | Reuse central contact config |
| Basic Fix booking | WhatsApp | Confirm exact prefilled message in source |
| Shower Service booking | WhatsApp | Confirm exact prefilled message in source |
| Full Wiring quote | WhatsApp | Confirm exact prefilled message in source |
| Electronics Repair booking | WhatsApp | Confirm exact prefilled message in source |
| Product quotation buttons | WhatsApp | Ideally include product name in prefilled message |
| Call us now | Exact `tel:` URL not captured | Inspect original source; do not assume the WhatsApp number is also the call number |
| About / Services / Store / Pricing / Why us / Reviews | In-page navigation anchors | Recreate as accessible section links |
| Add to Cart | Internal interaction | Inspect implementation and decide whether to retain |
| Get Quotation on WhatsApp (cart) | WhatsApp | Inspect actual cart-to-message behaviour |

**Known WhatsApp URL:**

`https://wa.me/254768695004?text=Hello+Pricetech+Solutions%2C+I+need+your+services`

Suggested product-specific message pattern (confirm with owner):  
`Hello Pricetech Solutions, I would like a quotation for [product/service].`

Suggested service-specific message pattern:  
`Hello Pricetech Solutions, I need help with [selected service] in [my area].`

## 5. Existing visual identity — what is and is not verified

The text extraction establishes the content and layout sequence, but it does **not** expose the original CSS colour tokens, font files, exact font families, spacing scale, border radii, shadows, breakpoints or all image URLs. Do not report guessed values as the existing brand palette.

### Required source audit before design decisions

In the original project/source files, inspect and record:

- CSS variables and colour hex values.
- Background, surface, text, muted text, border and accent colours.
- Heading/body font families and font weights.
- Font sizes, line heights and responsive type rules.
- Button styles and hover/focus states.
- Card radius, borders, shadows and spacing.
- Header height, sticky behaviour and mobile navigation.
- Breakpoints and responsive layout changes.
- All image URLs, local assets, alt text, image dimensions and licensing/source.
- Icons and icon library.
- Animation and transition behaviour.

Create a visual reference set by checking the existing site at desktop and mobile widths. Capture screenshots of the hero, services, store, pricing, reviews, footer and mobile menu. The new visual system should be intentionally different, not a superficial recolouring.

## 6. Proposed new design direction (not the existing palette)

The business operates in electrical services, so the new experience should feel dependable, technically competent, clean and approachable. Avoid a generic template look and avoid overusing lightning-bolt graphics.

### Proposed palette: “Technical Trust”

These are **new design recommendations**, not verified colours from the current website.

| Token | Proposed hex | Use |
|---|---|---|
| Deep navy | `#10243A` | Main brand colour, footer, strong headings |
| Electric blue | `#2563EB` | Primary actions, links, active states |
| Warm amber | `#F4B740` | Small highlights, service markers, attention accents |
| Clean white | `#FFFFFF` | Main cards and content surfaces |
| Cool mist | `#F3F6FA` | Alternate section backgrounds |
| Slate text | `#334155` | Body text |
| Muted slate | `#64748B` | Secondary text |
| Soft border | `#E2E8F0` | Dividers and card borders |
| Success green | `#15803D` | Confirmed success states only |

**Colour usage rules:**
- Navy establishes trust; blue is the main action colour.
- Amber is an accent, not a second primary button colour.
- Keep body text high contrast and backgrounds calm.
- Use semantic tokens rather than hardcoding hex values throughout components.
- Check text and control contrast for WCAG AA.
- Do not use colour alone to communicate status.

### Typography direction

Proposed pairing:
- Headings: **Manrope** or **Plus Jakarta Sans**.
- Body/UI: **Inter**.

Choose one pairing during Phase 1 and implement tokens. Do not load several competing font families. Confirm font availability/licensing and provide sensible system fallbacks.

### Visual direction

- Strong, editorial hero with a real service photograph.
- Clear hierarchy and generous whitespace.
- Consistent iconography rather than mixed emoji and unrelated icons.
- Service cards with practical descriptions and direct enquiry actions.
- Pricing presented in a readable comparison layout, especially on mobile.
- Product cards designed around product photography and quote requests.
- Real proof: approved project photographs, genuine testimonials and verifiable guarantees.
- Restrained motion; respect reduced-motion preferences.
- Persistent but unobtrusive WhatsApp contact access on mobile.

## 7. Recommended new information architecture and visitor journey

The new site should guide visitors from need → confidence → service choice → enquiry.

Recommended order:

1. **Header:** logo, Services, Products, Pricing, About, Reviews, Contact; primary “Get a quote” action.
2. **Hero:** clear service proposition, Nairobi coverage, primary WhatsApp action, secondary call action, authentic image and concise trust indicators.
3. **Trust strip:** only verified claims (experience, same-day service, warranties, coverage).
4. **Services:** four service categories, clear descriptions and enquiry links.
5. **How it works:** suggested three-step flow — describe the issue, receive a quote/confirmation, schedule the technician. Confirm this process with the business before publishing.
6. **Featured products:** three captured products with product details and quotation actions.
7. **Pricing:** four captured service ranges, inclusions and estimate disclaimer.
8. **Why Pricetech:** verified differentiators, workmanship standards and customer-care promises.
9. **Recent work / gallery:** add only if the business can supply genuine, approved project photos.
10. **Testimonials:** four distinct reviews, once each, after authenticity approval.
11. **FAQ:** proposed questions about service areas, estimates, parts, same-day availability, warranties and booking. Answers must be confirmed; do not fabricate policy.
12. **Contact / final CTA:** WhatsApp, verified call number, service area and confirmed hours.
13. **Footer:** brand, navigation, contact, service area, social links if verified, privacy/legal links if applicable.

This is a recommended architecture, not a claim that all these sections already exist.

## 8. UX/UI audit — opportunities to address

| Area | Current observation | Rebuild opportunity |
|---|---|---|
| Brand consistency | “Price tech” and “Pricetech Solutions” both appear | Standardize the approved business name and logo |
| Hero clarity | Strong tagline, but service scope is compressed into one sentence | Make the service categories and Nairobi coverage instantly scannable |
| Contact conversion | WhatsApp is prominent; call action destination is unknown | Verify phone link; use consistent, contextual WhatsApp messages |
| Navigation | Six section links plus booking/cart | Simplify and prioritize the most important visitor tasks |
| Mobile UX | Not verified in this recon extraction | Test mobile menu, CTA reachability, cards, pricing and tap targets |
| Services | Four useful categories | Add clear next steps and service-specific enquiry paths |
| Products | Cart and quotation actions coexist | Clarify whether checkout exists; otherwise make quotation the main action |
| Pricing | Useful ranges and inclusions | Clarify labour/parts, inspection and transport conditions |
| Trust claims | Several numeric and guarantee claims | Verify before reusing; show evidence where possible |
| Reviews | Four testimonials are duplicated | Show each approved review once |
| Content accuracy | Some statements may be interpreted as guarantees | Confirm same-day, 24h, free installation and limited-booking claims |
| Accessibility | Not verified | Semantic headings, keyboard support, focus states, labels, alt text and contrast |
| Performance | Not verified | Optimized responsive images, lazy loading below fold, limited JS and font loading |
| SEO | Not verified | Page title, meta description, canonical URL, local business schema if accurate, descriptive headings |
| Analytics | Not verified | Track WhatsApp clicks, call clicks and quote requests only with appropriate privacy controls |

## 9. Content and business questions to resolve

Do not block project scaffolding on these questions. Record unknowns and use clearly marked placeholders until the owner confirms them.

1. Is “Pricetech Solutions” the exact legal/public brand spelling? Is there an approved logo?
2. Is +254 768 695 004 still the correct WhatsApp and/or call number?
3. What is the actual phone number for calls?
4. Is there a public email address?
5. What are the operating hours and actual emergency response arrangements?
6. Does same-day service apply to all listed areas and services?
7. What exactly does the “24h” trust metric mean?
8. Are the 2+ years of experience and all workmanship warranties current?
9. Are prices labour-only? Are parts, transport and inspection included?
10. Is free installation included with the Premium Black Rain Shower System, and under what conditions?
11. Are the three listed products available now? Confirm brands, exact model names, prices, specifications and images.
12. Is there a real cart/checkout or is every purchase quotation-led?
13. Are all four testimonials genuine and approved for public use?
14. Can the business provide original job photographs and permission to publish them?
15. Which social media profiles, if any, should be linked?
16. Are there additional service areas outside Nairobi?

## 10. Two-phase implementation plan for Kilo Code

Kilo Code should be treated as the implementation assistant working from this mission document and the actual source files. Work in small, reviewable tasks. Do not ask it to redesign and polish everything in one giant prompt.

### Phase 1 — Project setup and structural implementation

**Goal:** A separate, maintainable project with the agreed information architecture, reusable content and working core interactions. Establish the design system without spending time on micro-polish.

Tasks:

1. Inspect the existing project/repository and record the current stack, assets, routes, components and behaviour. Do not modify it.
2. Create a new project folder/repository. Confirm the chosen stack and setup commands before implementation.
3. Establish project conventions, scripts, environment configuration and a clear README.
4. Create a central content/configuration file for:
   - Brand name and tagline.
   - WhatsApp number and prefilled message templates.
   - Telephone number (placeholder until verified).
   - Service area.
   - Services and descriptions.
   - Product catalogue and specifications.
   - Pricing packages and disclaimers.
   - Trust claims and their verification status.
   - Testimonials and approval status.
   - Navigation and footer links.
5. Create semantic page sections and reusable components matching the approved information architecture.
6. Add the proposed palette and typography as design tokens/CSS variables. Keep them easy to change.
7. Implement responsive foundations: header, mobile navigation, hero, service cards, products, pricing, trust, testimonials, contact and footer.
8. Wire every confirmed WhatsApp action. Use contextual prefilled messages where appropriate.
9. Keep unknown details out of public claims; use explicit placeholders in the content source.
10. Add basic accessibility, metadata and performance foundations.
11. Run build, lint and available tests. Fix structural errors.
12. Review desktop and mobile layouts for completeness and usability.

**Phase 1 acceptance criteria:**
- New folder is independent of the existing website.
- App installs and runs using documented commands.
- Build succeeds.
- All required sections exist and use the captured content.
- No known contact or pricing information is silently lost.
- WhatsApp links use the confirmed number and open correctly.
- Unknown call/email/business details are not fabricated.
- Content is centralized and easy to update.
- Layout is responsive and semantically structured.
- No unfinished fake cart or checkout is presented as functional.
- A short implementation report lists files, decisions, unknowns and remaining polish tasks.

**Explicitly defer:** elaborate animations, intricate hover effects, fine shadow tuning, perfect image art direction, advanced transitions and pixel-level spacing adjustments.

### Phase 2 — Visual polishing and visitor-experience refinement

Begin only after Phase 1 is reviewed and the owner is comfortable with the direction.

Tasks:

1. Review screenshots at mobile, tablet and desktop widths.
2. Refine typography scale, line lengths, spacing rhythm and section transitions.
3. Improve hero composition and image treatment using approved assets.
4. Polish cards, buttons, navigation, forms and interactive states.
5. Improve the pricing comparison and product quotation experience.
6. Add restrained motion and interaction feedback.
7. Validate keyboard navigation, focus visibility, contrast and reduced-motion behaviour.
8. Optimize images, fonts, loading and layout stability.
9. Review metadata, local SEO and social sharing presentation.
10. Test all contact actions and WhatsApp message templates on mobile and desktop.
11. Perform a final content verification with the business owner.
12. Prepare deployment and rollback instructions.

**Phase 2 acceptance criteria:**
- Visual system is consistent across all sections and screen sizes.
- Primary enquiry action is obvious and works.
- Visitor can quickly identify the relevant service and understand the price expectations.
- No duplicated testimonials or contradictory claims remain.
- Accessibility and performance checks have been completed.
- Final screenshots and a concise release checklist are recorded.

## 11. Suggested new project structure

Adapt this to the actual framework chosen; do not force a structure that conflicts with the existing stack or framework conventions.

```text
pricetech-rebuild/
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── content/
│   │   └── site-content.*
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   └── responsive.css
│   ├── utils/
│   │   └── contact-links.*
│   └── ...
├── docs/
│   ├── RECON-MISSION.md
│   ├── CONTENT-VERIFICATION.md
│   ├── PHASE-1-REPORT.md
│   └── PHASE-2-QA.md
├── .env.example
├── README.md
└── ...
```

## 12. Kilo Code working rules

Use these rules in the Kilo Code task prompts:

- Read `docs/RECON-MISSION.md` before making changes.
- Inspect the repository and report what exists before choosing an implementation path.
- Work only inside the new project folder.
- Never modify the old website or its deployment configuration.
- Do not invent business details, testimonials, prices, policies, phone numbers or social links.
- Keep content separate from presentation so business updates do not require editing multiple components.
- Use reusable components and centralized design tokens.
- Prefer small changes and explain which files will be touched before a major implementation step.
- Preserve useful comments and existing logic when adapting any supplied code.
- Avoid unnecessary dependencies.
- Do not start Phase 2 polish until Phase 1 acceptance criteria are met and reviewed.
- After each task, report changed files, commands run, results, known issues and the next recommended task.
- If a requirement is unclear, record the question rather than making a risky assumption.

## 13. First Kilo Code prompt — Phase 1 discovery and setup planning

Use this prompt after placing this document in the new working folder (or opening the new folder in Kilo Code):

> Read `docs/RECON-MISSION.md` completely. We are rebuilding the Pricetech Solutions website in a completely separate project. This is Phase 1 only.
>
> First inspect the current workspace and identify the framework, package manager, existing files and available assets. Do not modify anything yet. If this workspace is empty, recommend the simplest maintainable stack for this marketing/service website and explain why.
>
> Compare the mission document against the available source material. List confirmed information, missing information, assumptions that must not be published, and any implementation decisions that need approval.
>
> Then propose the exact project structure, setup commands, dependencies and a small sequence of implementation tasks. Keep the content centralized and the design tokens editable. Do not begin visual polishing.
>
> Wait for approval before creating or modifying project files.

## 14. Recon limitations and source-of-truth policy

This document is based on the publicly accessible page content extracted during the reconnaissance. The page extraction exposed the content and some link destinations, but it did not provide the original source repository, full CSS, exact image URLs, all `tel:` destinations, form/cart implementation, analytics, metadata or responsive behaviour.

Therefore:

- The captured business content is a useful baseline, not proof that every claim is still current.
- The proposed palette is a new direction, not a measurement of the old site's palette.
- The exact original project should be inspected if the owner has access to its source code.
- Unknown information must remain marked unknown until verified.
- The business owner is the final authority for commercial claims, prices, contact details and customer testimonials.

---

## 15. Completion checklist

### Recon and content
- [x] Existing public page reviewed
- [x] Main sections and navigation recorded
- [x] Services and product descriptions captured
- [x] Pricing ranges and inclusions captured
- [x] Trust statements captured
- [x] Distinct testimonials captured; duplicate repetition noted
- [x] WhatsApp number and URL captured
- [ ] Exact call link verified from source
- [ ] Email, address, hours and social profiles confirmed
- [ ] Existing CSS palette, fonts and responsive behaviour audited from source
- [ ] Product and business claims verified with owner
- [ ] Original images and asset licences checked

### Rebuild
- [ ] New independent project folder created
- [ ] Phase 1 plan approved
- [ ] Phase 1 implementation complete and reviewed
- [ ] Phase 2 polishing authorized
- [ ] Final content and contact verification complete
- [ ] Responsive, accessibility and performance QA complete
- [ ] Deployment and rollback plan approved

**End state:** A new, maintainable Pricetech Solutions website with all verified business information preserved, a distinct visual identity, clear visitor journeys and a reliable WhatsApp-led enquiry experience.
