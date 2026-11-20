'use strict';

/**
 * Pricetech Solutions — interaction layer.
 *
 * Responsibilities:
 *   - Build WhatsApp links from js/data.js
 *   - Accessible mobile navigation
 *   - Header scroll state and current-section highlighting
 *   - Product catalogue rendering + client-side category filtering
 *   - Product detail dialog with image gallery
 *   - Hero showroom carousel
 *   - Scroll-reveal entrances (respects prefers-reduced-motion)
 * No business copy lives here.
 */

(function () {
  var DATA = window.PRICETECH;
  if (!DATA || !DATA.contact) {
    return;
  }

  var contact = DATA.contact;
  var topics = DATA.topics || {};
  var catalogue = DATA.catalogue || {};
  var products = catalogue.products || [];
  var finishes = catalogue.finishes || {};
  var waBase = 'https://wa.me/' + contact.whatsappNumber;

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------------------------------------------------------------------
     WhatsApp links
     --------------------------------------------------------------------- */

  function resolveMessage(kind, topicId) {
    var template = contact.messages[kind] || contact.messages.general;
    var label = topics[topicId];

    if (label && template.indexOf('{topic}') !== -1) {
      return template.replace('{topic}', label);
    }

    return template.indexOf('{topic}') === -1 ? template : contact.messages.general;
  }

  function buildWhatsAppUrl(kind, topicId) {
    var message = contact.greeting + ' ' + resolveMessage(kind, topicId);
    return waBase + '?text=' + encodeURIComponent(message);
  }

  function hydrateWhatsAppLinks() {
    var links = document.querySelectorAll('[data-wa]');

    Array.prototype.forEach.call(links, function (link) {
      var kind = link.getAttribute('data-wa') || 'general';
      var topicId = link.getAttribute('data-wa-topic');

      link.setAttribute('href', buildWhatsAppUrl(kind, topicId));
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });

    var numberSlots = document.querySelectorAll('[data-wa-number]');
    if (contact.displayNumber) {
      Array.prototype.forEach.call(numberSlots, function (slot) {
        slot.textContent = contact.displayNumber;
      });
    }
  }

  /* ---------------------------------------------------------------------
     Mobile navigation
     --------------------------------------------------------------------- */

  var deskQuery = window.matchMedia('(min-width: 900px)');

  function initNav() {
    var toggle = document.querySelector('[data-nav-toggle]');
    var panel = document.getElementById('site-menu');

    if (!toggle || !panel) {
      return;
    }

    var isOpen = false;

    function setOpen(next, restoreFocus) {
      isOpen = next;
      toggle.setAttribute('aria-expanded', next ? 'true' : 'false');
      toggle.setAttribute('aria-label', next ? 'Close menu' : 'Open menu');
      panel.classList.toggle('is-open', next);
      document.body.classList.toggle('is-nav-open', next);

      if (!next && restoreFocus) {
        toggle.focus();
      }
    }

    toggle.addEventListener('click', function () {
      setOpen(!isOpen, false);
    });

    panel.addEventListener('click', function (event) {
      var target = event.target;
      if (target && target.closest && target.closest('a')) {
        setOpen(false, false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen) {
        setOpen(false, true);
      }
    });

    document.addEventListener('click', function (event) {
      if (!isOpen) {
        return;
      }
      var target = event.target;
      if (!target || !target.closest) {
        return;
      }
      if (!target.closest('.site-header')) {
        setOpen(false, false);
      }
    });

    var onBreakpointChange = function (event) {
      if (event.matches && isOpen) {
        setOpen(false, false);
      }
    };

    if (typeof deskQuery.addEventListener === 'function') {
      deskQuery.addEventListener('change', onBreakpointChange);
    } else if (typeof deskQuery.addListener === 'function') {
      deskQuery.addListener(onBreakpointChange);
    }
  }

  /* ---------------------------------------------------------------------
     Header state and section highlighting
     --------------------------------------------------------------------- */

  function initHeaderState() {
    var header = document.querySelector('.site-header');
    if (!header) {
      return;
    }

    var ticking = false;

    function update() {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });

    update();
  }

  function initSectionSpy() {
    var links = document.querySelectorAll('[data-nav-link]');
    if (!links.length || !('IntersectionObserver' in window)) {
      return;
    }

    var sections = [];
    Array.prototype.forEach.call(links, function (link) {
      var hash = link.getAttribute('href');
      if (!hash || hash.charAt(0) !== '#') {
        return;
      }
      var section = document.querySelector(hash);
      if (section && sections.indexOf(section) === -1) {
        sections.push(section);
      }
    });

    if (!sections.length) {
      return;
    }

    function setCurrent(id) {
      Array.prototype.forEach.call(links, function (link) {
        var match = link.getAttribute('href') === '#' + id;
        link.classList.toggle('is-active', match);
        if (match) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }

    var observer = new IntersectionObserver(function (entries) {
      var visible = entries
        .filter(function (entry) { return entry.isIntersecting; })
        .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });

      if (visible.length) {
        setCurrent(visible[0].target.id);
      }
    }, {
      rootMargin: '-45% 0px -50% 0px',
      threshold: 0
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });

    setCurrent(sections[0].id);
  }

  /* ---------------------------------------------------------------------
     Product catalogue rendering + filtering
     --------------------------------------------------------------------- */

  var grid = document.getElementById('products-grid');
  var template = document.getElementById('product-card-template');
  var filterContainer = document.querySelector('.product-filters');

  var activeFilter = 'all';

  function finishSwatchesHTML(finishKeys) {
    var html = '';
    Array.prototype.forEach.call(finishKeys, function (key) {
      var f = finishes[key];
      if (!f) {
        return;
      }
      html += '<span class="finish-swatch" style="background:' + f.swatch + ';" title="' + f.name + '" aria-hidden="true"></span>';
    });
    return html;
  }

  function statusBadgeHTML(product) {
    switch (product.verificationStatus) {
      case 'confirmed':
        return '<span class="product-card__status-badge" title="Confirmed product">Confirmed</span>';
      case 'illustrative-concept':
        return '<span class="product-card__status-badge" style="background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.25);color:#F5F5F4;" title="Illustrative concept — not confirmed stock">Concept</span>';
      case 'pending-confirmation':
        return '<span class="product-card__status-badge" style="background:rgba(200,164,106,0.12);border-color:var(--accent-soft);color:var(--accent-hover);" title="Pending owner confirmation">On request</span>';
      default:
        return '';
    }
  }

  function renderProductCard(product) {
    var clone = document.importNode(template.content, true);
    var card = clone.querySelector('.product-card');
    var img = card.querySelector('img');
    var swatches = card.querySelector('.product-card__finish-swatches');
    var badge = card.querySelector('.product-card__status-badge');
    var title = card.querySelector('.product-card__title');
    var desc = card.querySelector('.product-card__desc');
    var specList = card.querySelector('.spec-list');
    var quote = card.querySelector('.product-quote');

    card.setAttribute('data-product-id', product.id);
    card.setAttribute('data-product-category', product.category);
    card.classList.add('reveal', 'reveal-delay-2');

    var mainImg = product.images && product.images[0];
    if (mainImg) {
      img.setAttribute('src', mainImg.src);
      img.setAttribute('alt', mainImg.alt || product.name);
    }
    img.setAttribute('width', '720');
    img.setAttribute('height', '960');
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');

    swatches.innerHTML = finishSwatchesHTML(product.finishes || []);
    badge.outerHTML = statusBadgeHTML(product);

    title.textContent = product.name;
    desc.textContent = product.shortDescription || product.description;

    specList.innerHTML = '';
    Array.prototype.forEach.call(product.specifications || [], function (spec) {
      var li = document.createElement('li');
      li.textContent = spec;
      specList.appendChild(li);
    });

    quote.setAttribute('data-wa-topic', product.waTopic || product.id);
    quote.setAttribute('aria-label', 'Request a quotation for ' + product.name + ' on WhatsApp');
    quote.setAttribute('href', buildWhatsAppUrl('product', product.waTopic || product.id));

    /* Open product dialog on card tap/click */
    card.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        return;
      }
      openProductDialog(product);
    });

    grid.appendChild(card);
  }

  function renderProducts(filter) {
    grid.innerHTML = '';
    Array.prototype.forEach.call(products, function (product) {
      if (filter === 'all' || product.category === filter) {
        renderProductCard(product);
      }
    });
    observeReveals();
  }

  function initFilters() {
    if (!filterContainer) {
      return;
    }
    var categoryMap = {};
    var seen = {};
    Array.prototype.forEach.call(catalogue.categories || [], function (cat) {
      categoryMap[cat.slug] = cat.name;
      seen[cat.slug] = true;
    });
    Array.prototype.forEach.call(products, function (p) {
      if (!seen[p.category]) {
        categoryMap[p.category] = p.category;
        seen[p.category] = true;
      }
    });

    Array.prototype.forEach.call(Object.keys(categoryMap), function (slug) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'filter-btn';
      btn.setAttribute('data-filter', slug);
      btn.textContent = categoryMap[slug];
      if (slug === 'all') {
        btn.className = 'filter-btn filter-btn--active';
      }
      btn.addEventListener('click', function () {
        Array.prototype.forEach.call(filterContainer.querySelectorAll('.filter-btn'), function (b) {
          b.classList.toggle('filter-btn--active', b === btn);
        });
        activeFilter = slug;
        renderProducts(slug);
      });
      filterContainer.appendChild(btn);
    });

    renderProducts('all');
  }

  /* ---------------------------------------------------------------------
     Product detail dialog + image gallery
     --------------------------------------------------------------------- */

  var dialog = document.getElementById('product-dialog');
  var dialogClose = dialog ? dialog.querySelector('.product-dialog__close') : null;
  var dialogOverlay = dialog ? dialog.querySelector('.product-dialog__overlay') : null;
  var dialogTitle = dialog ? dialog.querySelector('.product-dialog__title') : null;
  var dialogDesc = dialog ? dialog.querySelector('.product-dialog__desc') : null;
  var dialogFinishes = dialog ? dialog.querySelector('.product-dialog__finishes') : null;
  var dialogSpecList = dialog ? dialog.querySelector('.spec-list') : null;
  var dialogQuote = dialog ? dialog.querySelector('.product-dialog-quote') : null;
  var dialogNote = dialog ? dialog.querySelector('.product-dialog__note') : null;

  var galleryTrack = dialog ? dialog.querySelector('.product-gallery-track') : null;
  var galleryPrev = dialog ? dialog.querySelector('.product-gallery-btn--prev') : null;
  var galleryNext = dialog ? dialog.querySelector('.product-gallery-btn--next') : null;
  var galleryDots = dialog ? dialog.querySelector('.product-gallery-dots') : null;

  var currentProduct = null;
  var currentImageIndex = 0;

  function buildGalleryImages(product) {
    var images = product.images || [];
    galleryTrack.innerHTML = '';
    galleryDots.innerHTML = '';
    Array.prototype.forEach.call(images, function (img, index) {
      var slide = document.createElement('div');
      slide.className = 'product-gallery-slide';
      var imageEl = document.createElement('img');
      imageEl.setAttribute('src', img.src);
      imageEl.setAttribute('alt', img.alt || product.name);
      imageEl.setAttribute('loading', 'lazy');
      imageEl.setAttribute('decoding', 'async');
      imageEl.style.width = '100%';
      imageEl.style.height = '100%';
      imageEl.style.objectFit = 'cover';
      imageEl.style.background = 'var(--surface)';
      slide.appendChild(imageEl);
      galleryTrack.appendChild(slide);

      var dot = document.createElement('button');
      dot.className = 'product-gallery-dot';
      dot.setAttribute('type', 'button');
      if (index === 0) {
        dot.setAttribute('aria-current', 'true');
      }
      dot.addEventListener('click', function () {
        setGalleryImage(index);
      });
      galleryDots.appendChild(dot);
    });
    setGalleryImage(0);
  }

  function setGalleryImage(index) {
    if (!galleryTrack) {
      return;
    }
    currentImageIndex = index;
    galleryTrack.style.transform = 'translateX(-' + (index * 100) + '%)';
    Array.prototype.forEach.call(galleryDots.querySelectorAll('.product-gallery-dot'), function (dot, i) {
      dot.toggleAttribute('aria-current', i === index);
    });
  }

  function openProductDialog(product) {
    currentProduct = product;
    currentImageIndex = 0;

    if (dialogTitle) dialogTitle.textContent = product.name;
    if (dialogDesc) dialogDesc.textContent = product.shortDescription || product.description;

    if (dialogFinishes) {
      dialogFinishes.innerHTML = '';
      Array.prototype.forEach.call(product.finishes || [], function (key) {
        var f = finishes[key];
        if (!f) {
          return;
        }
        var label = document.createElement('label');
        var input = document.createElement('input');
        input.type = 'radio';
        input.name = 'product-finish-' + product.id;
        input.value = key;
        var span = document.createElement('span');
        span.textContent = f.name;
        label.appendChild(input);
        label.appendChild(span);
        dialogFinishes.appendChild(label);
      });
    }

    if (dialogSpecList) {
      dialogSpecList.innerHTML = '';
      Array.prototype.forEach.call(product.specifications || [], function (spec) {
        var li = document.createElement('li');
        li.textContent = spec;
        dialogSpecList.appendChild(li);
      });
    }

    if (dialogQuote) {
      dialogQuote.setAttribute('data-wa-topic', product.waTopic || product.id);
      dialogQuote.setAttribute('aria-label', 'Request a quotation for ' + product.name + ' on WhatsApp');
      hydrateWhatsAppLinks();
    }

    if (dialogNote) {
      var noteText = 'Pricing and availability are confirmed on enquiry.';
      if (product.verificationStatus === 'illustrative-concept') {
        noteText = 'Illustrative concept — not confirmed stock. Confirm availability, finish and pricing with Pricetech before ordering.';
      } else if (product.verificationStatus === 'pending-confirmation') {
        noteText = 'Pending owner confirmation. Availability and pricing to be confirmed on enquiry.';
      }
      dialogNote.textContent = noteText;
    }

    buildGalleryImages(product);

    if (dialog) {
      dialog.showModal();
      dialog.classList.add('is-open');
      document.body.classList.add('is-dialog-open');
    }
  }

  function closeProductDialog() {
    if (!dialog) {
      return;
    }
    dialog.close();
    dialog.classList.remove('is-open');
    document.body.classList.remove('is-dialog-open');
    currentProduct = null;
    currentImageIndex = 0;
  }

  if (dialogClose) {
    dialogClose.addEventListener('click', closeProductDialog);
  }
  if (dialogOverlay) {
    dialogOverlay.addEventListener('click', closeProductDialog);
  }
  if (dialog) {
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) {
        closeProductDialog();
      }
    });
    dialog.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeProductDialog();
      }
    });
  }
  if (galleryPrev) {
    galleryPrev.addEventListener('click', function () {
      var images = (currentProduct && currentProduct.images) || [];
      var next = (currentImageIndex - 1 + images.length) % images.length;
      setGalleryImage(next);
    });
  }
  if (galleryNext) {
    galleryNext.addEventListener('click', function () {
      var images = (currentProduct && currentProduct.images) || [];
      var next = (currentImageIndex + 1) % images.length;
      setGalleryImage(next);
    });
  }

  /* Product gallery swipe + keyboard */
  if (galleryTrack) {
    var galleryTouchStartX = 0;
    var galleryIsDragging = false;
    galleryTrack.setAttribute('tabindex', '0');
    galleryTrack.setAttribute('role', 'region');
    galleryTrack.setAttribute('aria-label', 'Product image gallery');

    galleryTrack.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        var images = (currentProduct && currentProduct.images) || [];
        setGalleryImage((currentImageIndex + 1) % images.length);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        var images = (currentProduct && currentProduct.images) || [];
        setGalleryImage((currentImageIndex - 1 + images.length) % images.length);
      } else if (event.key === 'Escape') {
        closeProductDialog();
      }
    });

    galleryTrack.addEventListener('pointerdown', function (event) {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'touch' && event.pointerType !== 'pen') {
        return;
      }
      galleryTouchStartX = event.clientX;
      galleryIsDragging = true;
      galleryTrack.style.transition = 'none';
      event.preventDefault();
    }, { passive: false });

    var onGalleryPointerMove = function (event) {
      if (!galleryIsDragging) {
        return;
      }
      var delta = galleryTouchStartX - event.clientX;
      var rect = galleryTrack.parentElement.getBoundingClientRect();
      var translate = -(currentImageIndex * 100) - (delta / rect.width * 100);
      galleryTrack.style.transform = 'translateX(' + translate + '%)';
    };

    var onGalleryPointerUp = function (event) {
      if (!galleryIsDragging) {
        return;
      }
      galleryIsDragging = false;
      galleryTrack.style.transition = 'transform 0.4s var(--ease-out)';
      var images = (currentProduct && currentProduct.images) || [];
      var rect = galleryTrack.parentElement.getBoundingClientRect();
      var delta = galleryTouchStartX - event.clientX;
      var threshold = rect.width * 0.25;
      if (delta > threshold) {
        setGalleryImage((currentImageIndex + 1) % images.length);
      } else if (delta < -threshold) {
        setGalleryImage((currentImageIndex - 1 + images.length) % images.length);
      } else {
        setGalleryImage(currentImageIndex);
      }
    };

    galleryTrack.addEventListener('pointermove', onGalleryPointerMove, { passive: false });
    galleryTrack.addEventListener('pointerup', onGalleryPointerUp);
    galleryTrack.addEventListener('pointercancel', onGalleryPointerUp);
    galleryTrack.addEventListener('pointerleave', onGalleryPointerUp);
  }

  /* ---------------------------------------------------------------------
     Hero showroom carousel
     --------------------------------------------------------------------- */

  var carouselTrack = document.querySelector('.carousel-track');
  var carouselSlides = carouselTrack ? carouselTrack.querySelectorAll('.carousel-slide') : [];
  var carouselDots = document.querySelectorAll('.carousel-dot');
  var carouselInterval = null;
  var carouselTouchStartX = 0;
  var carouselTouchCurrentX = 0;
  var carouselIsDragging = false;

  var carouselIndex = 0;
  var carouselCount = carouselSlides.length;

  function markCarouselSwiped() {
    var carouselEl = document.querySelector('.hero__carousel');
    if (carouselEl) {
      carouselEl.setAttribute('data-swiped', 'true');
    }
  }

  function setCarousel(index) {
    if (!carouselTrack || carouselCount === 0) {
      return;
    }
    carouselIndex = (index + carouselCount) % carouselCount;
    carouselTrack.style.transform = 'translateX(-' + (carouselIndex * 100) + '%)';
    Array.prototype.forEach.call(carouselDots, function (dot, i) {
      dot.toggleAttribute('aria-current', i === carouselIndex);
    });
  }

  function startCarouselAutoplay() {
    if (prefersReduced.matches || carouselInterval) {
      return;
    }
    carouselInterval = setInterval(function () {
      setCarousel(carouselIndex + 1);
    }, 5000);
  }

  function stopCarouselAutoplay() {
    clearInterval(carouselInterval);
    carouselInterval = null;
  }

  function initCarousel() {
    if (!carouselTrack || carouselCount === 0) {
      return;
    }
    var nextBtn = document.querySelector('.carousel-btn--next');
    var prevBtn = document.querySelector('.carousel-btn--prev');
    var trackParent = carouselTrack.parentElement;

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        stopCarouselAutoplay();
        setCarousel(carouselIndex + 1);
        markCarouselSwiped();
        startCarouselAutoplay();
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        stopCarouselAutoplay();
        setCarousel(carouselIndex - 1);
        markCarouselSwiped();
        startCarouselAutoplay();
      });
    }
    Array.prototype.forEach.call(carouselDots, function (dot, i) {
      dot.addEventListener('click', function () {
        stopCarouselAutoplay();
        setCarousel(i);
        markCarouselSwiped();
        startCarouselAutoplay();
      });
    });

    /* Keyboard navigation */
    carouselTrack.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        stopCarouselAutoplay();
        setCarousel(carouselIndex + 1);
        markCarouselSwiped();
        startCarouselAutoplay();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        stopCarouselAutoplay();
        setCarousel(carouselIndex - 1);
        markCarouselSwiped();
        startCarouselAutoplay();
      }
    });

    /* Touch / pointer swipe */
    carouselTrack.addEventListener('pointerdown', function (event) {
      if (event.pointerType !== 'mouse' && event.pointerType !== 'touch' && event.pointerType !== 'pen') {
        return;
      }
      carouselTouchStartX = event.clientX;
      carouselTouchCurrentX = event.clientX;
      carouselIsDragging = true;
      carouselTrack.style.transition = 'none';
      carouselTrack.setAttribute('aria-grabbed', 'true');
      stopCarouselAutoplay();
    }, { passive: false });

    var onPointerMove = function (event) {
      if (!carouselIsDragging) {
        return;
      }
      carouselTouchCurrentX = event.clientX;
      var delta = carouselTouchStartX - carouselTouchCurrentX;
      var translate = -(carouselIndex * 100) - (delta / carouselTrack.parentElement.getBoundingClientRect().width * 100);
      carouselTrack.style.transform = 'translateX(' + translate + '%)';
    };

    var onPointerUp = function (event) {
      if (!carouselIsDragging) {
        return;
      }
      carouselIsDragging = false;
      carouselTrack.style.transition = 'transform 0.4s var(--ease-out)';
      carouselTrack.removeAttribute('aria-grabbed');
      var trackRect = carouselTrack.parentElement.getBoundingClientRect();
      var delta = carouselTouchStartX - event.clientX;
      var threshold = trackRect.width * 0.25;
      if (delta > threshold) {
        setCarousel(carouselIndex + 1);
      } else if (delta < -threshold) {
        setCarousel(carouselIndex - 1);
      } else {
        setCarousel(carouselIndex);
      }
      markCarouselSwiped();
      startCarouselAutoplay();
    };

    carouselTrack.addEventListener('pointermove', onPointerMove, { passive: false });
    carouselTrack.addEventListener('pointerup', onPointerUp);
    carouselTrack.addEventListener('pointercancel', onPointerUp);
    carouselTrack.addEventListener('pointerleave', onPointerUp);

    if (trackParent) {
      trackParent.addEventListener('mouseenter', stopCarouselAutoplay);
      trackParent.addEventListener('mouseleave', startCarouselAutoplay);
    }

    startCarouselAutoplay();
  }

  /* ---------------------------------------------------------------------
     Scroll reveals (IntersectionObserver)
     --------------------------------------------------------------------- */

  var revealObserver = null;

  function observeReveals() {
    if (!('IntersectionObserver' in window)) {
      return;
    }
    var reveals = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!reveals.length) {
      return;
    }
    if (prefersReduced.matches) {
      Array.prototype.forEach.call(reveals, function (el) {
        el.classList.add('is-visible');
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.transition = 'none';
      });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        Array.prototype.forEach.call(entries, function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
    }
    Array.prototype.forEach.call(reveals, function (el) {
      revealObserver.observe(el);
    });
  }

  function initReveals() {
    observeReveals();
  }

  /* ---------------------------------------------------------------------
     Boot
     --------------------------------------------------------------------- */

  hydrateWhatsAppLinks();
  initNav();
  initHeaderState();
  initSectionSpy();
  initFilters();
  initCarousel();
  initReveals();
})();
