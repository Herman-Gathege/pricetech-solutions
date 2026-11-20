'use strict';

/**
 * Pricetech Solutions — business data.
 *
 * Single source of truth for contact details, WhatsApp message templates and
 * the product catalogue. Every `wa.me` URL is built by js/main.js from this
 * file; never hardcode a `wa.me` URL in HTML. Display copy (services, pricing,
 * reviews) lives in index.html because it is hand-authored, indexable page
 * content. Catalogue data (products, categories, finishes, verification
 * status) lives here so adding a product is a single edit.
 *
 * Confirmed channel: WhatsApp only. No telephone, email, address, hours or
 * social accounts are confirmed — do not add them without owner sign-off.
 */

window.PRICETECH = {
  brand: {
    name: 'Pricetech Solutions',
    tagline: 'Fast. Safe. Reliable.',
    location: 'Nairobi, Kenya'
  },

  contact: {
    whatsappNumber: '254768695004',
    displayNumber: '+254 768 695 004',
    greeting: 'Hello Pricetech Solutions,',
    messages: {
      general: 'I need your services.',
      quote: 'I would like a quotation for a job in Nairobi.',
      pricing: 'I would like a quotation for the {topic} package.',
      service: 'I need help with {topic}.',
      product: 'I would like a quotation for the {topic}.'
    }
  },

  /* ---------------------------------------------------------------------
     Catalogue — products, categories and finishes.
     verificationStatus:
       'confirmed'          Captured from the existing site / recon.
       'illustrative-concept' Illustrative catalogue concept, NOT confirmed stock.
       'pending-confirmation' Awaiting owner confirmation.
     priceStatus: 'on-enquiry' unless a price is confirmed by the owner.
     --------------------------------------------------------------------- */

  catalogue: {
    finishes: {
      'matte-black': { name: 'Matte black', swatch: '#1A1A1A', family: 'darks' },
      'polished-chrome': { name: 'Polished chrome', swatch: '#E5E7EB', family: 'metallics' },
      'brushed-brass': { name: 'Brushed brass', swatch: '#C8A46A', family: 'golds' },
      'brushed-bronze': { name: 'Brushed bronze', swatch: '#8B6B4F', family: 'bronzes' }
    },

    categories: [
      {
        slug: 'rain-shower-systems',
        name: 'Rain shower systems',
        description: 'Overhead rainfall showers in round and square profiles.',
        status: 'available'
      },
      {
        slug: 'concealed-shower-systems',
        name: 'Concealed shower systems',
        description: 'In-wall mixers with square or round rainfall heads.',
        status: 'available'
      },
      {
        slug: 'thermostatic-shower-systems',
        name: 'Thermostatic shower systems',
        description: 'Precision temperature control for safe, consistent showers.',
        status: 'available'
      },
      {
        slug: 'hand-showers',
        name: 'Hand showers',
        description: 'Single-function and multifunction handheld wands.',
        status: 'available'
      },
      {
        slug: 'shower-accessories',
        name: 'Premium shower accessories',
        description: 'Rails, hoses, outlets and complementary fittings.',
        status: 'pending-confirmation'
      },
      {
        slug: 'electrical-accessories',
        name: 'Electrical products & accessories',
        description: 'Electrical fittings and accessories available on enquiry.',
        status: 'pending-confirmation'
      }
    ],

    products: [
      /* --- Confirmed products (captured from the existing site) --- */

      {
        id: 'rain-shower',
        name: 'Premium Black Rain Shower System',
        category: 'rain-shower-systems',
        verificationStatus: 'confirmed',
        shortDescription: 'Matte black finish; large overhead rain shower; adjustable handheld wand.',
        description: 'A matte black overhead rainfall shower system with an adjustable handheld wand, designed for modern bathrooms. Finish and installation terms to be confirmed on enquiry.',
        finishes: ['matte-black'],
        finishNote: 'Matte black finish as pictured. Other finishes available on request — confirm on enquiry.',
        variations: [],
        specifications: [
          'Matte black finish',
          'Large overhead rain shower',
          'Adjustable handheld wand',
          'Free installation in Nairobi — confirm terms on enquiry'
        ],
        images: [
          { src: 'assets/images/products/premium-black-rain-shower/Wonderland America matte black ceiling mount 16 inch Non LED rain head 3 way thermostatic shower faucet with Regular head wall mount and single.jpeg', alt: 'Premium Black Rain Shower System — matte black overhead rainfall shower on a dark backdrop', role: 'main' },
          { src: 'assets/images/products/premium-black-rain-shower/10_ Rain Shower + Handheld — Hotel-Level Shower, DIY Install.jpeg', alt: 'Premium Black Rain Shower System — close-up detail of the rain showerhead and handheld wand', role: 'detail' }
        ],
        priceStatus: 'on-enquiry',
        waTopic: 'rain-shower'
      },

      {
        id: 'mixer-set',
        name: 'Modern Concealed Shower Mixer Set',
        category: 'concealed-shower-systems',
        verificationStatus: 'confirmed',
        shortDescription: 'In-wall concealed installation; square rainfall showerhead; 3-mode handheld shower; high-pressure design.',
        description: 'A concealed in-wall shower mixer set with a square rainfall showerhead and a 3-mode handheld shower. High-pressure design. Concealed installation requires a suitable wall cavity — confirm suitability on enquiry.',
        finishes: ['polished-chrome'],
        finishNote: 'Polished chrome finish as standard. Alternative finishes on request — confirm on enquiry.',
        variations: [],
        specifications: [
          'In-wall concealed installation',
          'Square rainfall showerhead',
          '3-mode handheld shower',
          'High-pressure design'
        ],
        images: [
          { src: 'assets/images/products/concealed-shower-mixer/Famapy Matte Black Concealed Shower System – 304 Stainless Steel Fixtures + Copper Waterway + Ceramic Cartridge.jpeg', alt: 'Modern Concealed Shower Mixer Set — square rainfall showerhead and 3-mode handheld shower', role: 'main' },
          { src: 'assets/images/products/concealed-shower-mixer/2 Way Square Concealed Thermostatic Mixer Shower With 2 Dial ,twin Head.jpeg', alt: 'Modern Concealed Shower Mixer Set — detail of the concealed control plate and handheld shower', role: 'detail' }
        ],
        priceStatus: 'on-enquiry',
        waTopic: 'mixer-set'
      },

      {
        id: 'thermostatic-system',
        name: 'Tempesta Cube 250 Thermostatic System',
        category: 'thermostatic-shower-systems',
        verificationStatus: 'confirmed',
        shortDescription: 'Precision thermostatic control; 250mm square head shower; water-saving technology; premium build quality.',
        description: 'A thermostatic shower system with precision temperature control and a 250mm square head shower. Water-saving technology with premium build quality. Thermostatic valve protects against sudden temperature changes.',
        finishes: ['polished-chrome', 'matte-black'],
        finishNote: 'Available in polished chrome and matte black finishes — confirm finish and availability on enquiry.',
        variations: [],
        specifications: [
          'Precision thermostatic control',
          '250mm square head shower',
          'Water-saving technology',
          'Premium build quality'
        ],
        images: [
          { src: 'assets/images/products/tempesta-cube-250/GROHE etgrebsbatteri.jpeg', alt: 'Tempesta Cube 250 Thermostatic System — 250mm square thermostatic shower system', role: 'main' },
          { src: 'assets/images/products/tempesta-cube-250/5 consigli utili per un’esperienza doccia speciale.jpeg', alt: 'Tempesta Cube 250 Thermostatic System — detail of the thermostatic control and square showerhead', role: 'detail' }
        ],
        priceStatus: 'on-enquiry',
        waTopic: 'thermostatic-system'
      },

      /* --- Illustrative catalogue concepts (NOT confirmed stock) --- */

      {
        id: 'round-rainfall',
        name: 'Round Rainfall Shower System',
        category: 'rain-shower-systems',
        verificationStatus: 'illustrative-concept',
        shortDescription: 'Round overhead rainfall shower in polished chrome. Illustrative concept — pending owner confirmation.',
        description: 'Illustrative catalogue concept: a round overhead rainfall shower system in a polished chrome finish. This is a proposed variation, not confirmed stock. Confirm availability, finish and pricing with Pricetech before ordering.',
        finishes: ['polished-chrome'],
        finishNote: 'Polished chrome finish (illustrative concept). Other finishes on request — confirm on enquiry.',
        variations: [
          { name: 'Round rainfall head', description: 'Classic circular overhead shower.' },
          { name: 'Single-function hand shower', description: 'Fixed-spray handheld wand.' }
        ],
        specifications: [
          'Round overhead rainfall showerhead',
          'Polished chrome finish',
          'Single-function hand shower',
          'Illustrative concept — not confirmed stock'
        ],
        images: [
          { src: 'assets/images/products/round-rainfall-shower/Premium Stainless steel 40 cm round Rain shower head, solid construction.jpeg', alt: 'Round Rainfall Shower System — illustrative concept, polished chrome', role: 'main' },
          { src: 'assets/images/products/round-rainfall-shower/System prysznicowy Bayala Round z deszczownicą 20 cm.jpeg', alt: 'Round Rainfall Shower System — detail, illustrative concept', role: 'detail' }
        ],
        priceStatus: 'on-enquiry',
        waTopic: 'round-rainfall'
      },

      {
        id: 'brushed-brass-shower',
        name: 'Brushed Brass Shower System',
        category: 'rain-shower-systems',
        verificationStatus: 'illustrative-concept',
        shortDescription: 'Square rainfall shower system in brushed brass. Illustrative concept — pending owner confirmation.',
        description: 'Illustrative catalogue concept: a square rainfall shower system in a warm brushed brass finish. This is a proposed variation, not confirmed stock. Confirm availability, finish and pricing with Pricetech before ordering.',
        finishes: ['brushed-brass'],
        finishNote: 'Brushed brass finish (illustrative concept). Other finishes on request — confirm on enquiry.',
        variations: [
          { name: 'Square rainfall head', description: 'Contemporary square overhead shower.' },
          { name: 'Brushed brass finish', description: 'Warm metallic finish, shown as a concept.' }
        ],
        specifications: [
          'Square rainfall showerhead',
          'Brushed brass finish',
          'Illustrative concept — not confirmed stock'
        ],
        images: [
          { src: 'assets/images/products/brushed-brass-shower-system/Brushed Brass Rainfall Shower System with Modern Round Head and Integrated Hand Wand.jpeg', alt: 'Brushed Brass Shower System — illustrative concept, brushed brass', role: 'main' },
          { src: 'assets/images/products/brushed-brass-shower-system/Bathroom Shower Faucet Set Brass Three Way Diverter Rainfall Shower Head Handheld Spray Tub Spout Wall Mounted Hot Cold Mixer System Brushed Gold _ 10.jpeg', alt: 'Brushed Brass Shower System — detail, illustrative concept', role: 'detail' }
        ],
        priceStatus: 'on-enquiry',
        waTopic: 'brushed-brass-shower'
      },

      {
        id: 'matte-black-hand-shower',
        name: 'Matte Black Hand Shower Set',
        category: 'hand-showers',
        verificationStatus: 'illustrative-concept',
        shortDescription: 'Matte black multifunction hand shower set. Illustrative concept — pending owner confirmation.',
        description: 'Illustrative catalogue concept: a matte black multifunction hand shower set with rail and hose. This is a proposed variation, not confirmed stock. Confirm availability, finish and pricing with Pricetech before ordering.',
        finishes: ['matte-black'],
        finishNote: 'Matte black finish (illustrative concept). Other finishes on request — confirm on enquiry.',
        variations: [
          { name: 'Multifunction hand shower', description: 'Multiple spray modes from one wand.' },
          { name: 'Slide rail and hose', description: 'Adjustable height rail with flexible hose.' }
        ],
        specifications: [
          'Matte black multifunction hand shower',
          'Slide rail and hose',
          'Illustrative concept — not confirmed stock'
        ],
        images: [
          { src: 'assets/images/products/matte-black-hand-shower/WEIHAO Matte Black Wall Mounted 2 Function Shower Set square Rain Overhead and Handheld Shower Head.jpeg', alt: 'Matte Black Hand Shower Set — illustrative concept, matte black', role: 'main' },
          { src: 'assets/images/products/matte-black-hand-shower/Luxury Matte Black Shower with Modern Design.jpeg', alt: 'Matte Black Hand Shower Set — detail, illustrative concept', role: 'detail' }
        ],
        priceStatus: 'on-enquiry',
        waTopic: 'matte-black-hand-shower'
      },

      {
        id: 'square-rainfall',
        name: 'Square Rainfall Shower System',
        category: 'rain-shower-systems',
        verificationStatus: 'illustrative-concept',
        shortDescription: 'Square overhead rainfall shower in polished chrome. Illustrative concept — pending owner confirmation.',
        description: 'Illustrative catalogue concept: a square overhead rainfall shower system in a polished chrome finish. This is a proposed variation, not confirmed stock. Confirm availability, finish and pricing with Pricetech before ordering.',
        finishes: ['polished-chrome'],
        finishNote: 'Polished chrome finish (illustrative concept). Other finishes on request — confirm on enquiry.',
        variations: [
          { name: 'Square rainfall head', description: 'Contemporary square overhead shower.' },
          { name: 'Single-function hand shower', description: 'Fixed-spray handheld wand.' }
        ],
        specifications: [
          'Square overhead rainfall showerhead',
          'Polished chrome finish',
          'Single-function hand shower',
          'Illustrative concept — not confirmed stock'
        ],
        images: [
          { src: 'assets/images/products/square-rainfall-shower/Square Waterfall Stainless Steel Slim Shower Head.jpeg', alt: 'Square Rainfall Shower System — illustrative concept, polished chrome', role: 'main' },
          { src: 'assets/images/products/square-rainfall-shower/Shower Head – High-Flow Stainless Steel Square Rain Showerhead, High-Pressure Design Delivers Superior Shower Experience Even Under Low Water Flow (10 10_0 W in Matte Black Stainless Steel.jpeg', alt: 'Square Rainfall Shower System — detail, illustrative concept', role: 'detail' }
        ],
        priceStatus: 'on-enquiry',
        waTopic: 'square-rainfall'
      }
    ]
  },

  /* Topic labels used inside WhatsApp messages, keyed by data-wa-topic. */
  topics: {
    'electrical-installations': 'electrical installations',
    'shower-installation': 'shower installation and repair',
    'electronics-repair': 'electronics repair',
    'maintenance-services': 'maintenance services',
    'rain-shower': 'Premium Black Rain Shower System',
    'mixer-set': 'Modern Concealed Shower Mixer Set',
    'thermostatic-system': 'Tempesta Cube 250 Thermostatic System',
    'round-rainfall': 'Round Rainfall Shower System',
    'brushed-brass-shower': 'Brushed Brass Shower System',
    'matte-black-hand-shower': 'Matte Black Hand Shower Set',
    'square-rainfall': 'Square Rainfall Shower System',
    'basic-fix': 'Basic Fix',
    'shower-service': 'Shower Service',
    'full-wiring': 'Full Wiring',
    'electronics-repair-package': 'Electronics Repair'
  },

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' }
  ]
};
