'use strict';

/**
 * Pricetech Solutions — interaction layer.
 *
 * Responsibilities: build WhatsApp links from js/data.js, accessible mobile
 * navigation, header scroll state and current-section highlighting.
 * No business copy lives here.
 */
(function () {
  var DATA = window.PRICETECH;
  if (!DATA || !DATA.contact) {
    return;
  }

  var contact = DATA.contact;
  var topics = DATA.topics || {};
  var waBase = 'https://wa.me/' + contact.whatsappNumber;

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
     Boot
     --------------------------------------------------------------------- */

  hydrateWhatsAppLinks();
  initNav();
  initHeaderState();
  initSectionSpy();
})();
