'use strict';

/**
 * Pricetech Solutions — business data.
 *
 * Single source of truth for contact details and WhatsApp message templates.
 * Every `wa.me` URL is built from this file by js/main.js; never hardcode one
 * in HTML. Display copy (services, products, pricing, reviews) lives in
 * index.html because it is hand-authored, indexable page content.
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

  /* Topic labels used inside WhatsApp messages, keyed by data-wa-topic. */
  topics: {
    'electrical-installations': 'electrical installations',
    'shower-installation': 'shower installation and repair',
    'electronics-repair': 'electronics repair',
    'maintenance-services': 'maintenance services',
    'rain-shower': 'Premium Black Rain Shower System',
    'mixer-set': 'Modern Concealed Shower Mixer Set',
    'thermostatic-system': 'Tempesta Cube 250 Thermostatic System',
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
