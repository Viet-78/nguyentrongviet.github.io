(function () {
  'use strict';

  function initAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP chưa load — kiểm tra kết nối mạng hoặc CDN.');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: 'power2.out', duration: 0.8 });

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var dur = reduceMotion ? 0 : 0.8;
    var stagger = reduceMotion ? 0 : 0.12;

    initNav(reduceMotion);
    initHero(reduceMotion, dur, stagger);
    initHeroBlobs(reduceMotion);
    initScrollIndicator(reduceMotion);
    initScrollReveals(reduceMotion, dur, stagger);
    initCursorGlow(reduceMotion);
    initButtonHover(reduceMotion);

    ScrollTrigger.refresh();
  }

  function initNav(reduceMotion) {
    gsap.from('.nav', {
      y: -100,
      autoAlpha: 0,
      duration: reduceMotion ? 0 : 0.6,
      ease: 'power2.out',
    });
  }

  function initHero(reduceMotion, dur, stagger) {
    if (reduceMotion) {
      gsap.set(['.hero-text', '.hero-actions', '.hero-image-wrap'], { autoAlpha: 1, y: 0, scale: 1 });
      return;
    }

    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-text', { autoAlpha: 0, y: 30, duration: dur })
      .from('.hero-actions > *', { autoAlpha: 0, y: 20, duration: 0.6, stagger: stagger }, '-=0.5')
      .from('.hero-image-wrap', { autoAlpha: 0, scale: 0.85, duration: dur }, '-=0.6');

    gsap.to('.hero-image-wrap img', {
      y: 60,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  function initHeroBlobs(reduceMotion) {
    if (reduceMotion) return;

    gsap.to('.hero-blob--blue', {
      x: 50,
      y: 30,
      scale: 1.1,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.hero-blob--red', {
      x: -30,
      y: 50,
      scale: 1.2,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }

  function initScrollIndicator(reduceMotion) {
    if (reduceMotion) return;

    gsap.to('.scroll-indicator', {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.scroll-indicator-dot', {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }

  function initScrollReveals(reduceMotion, dur, stagger) {
    gsap.utils.toArray('.reveal').forEach(function (el) {
      if (el.closest('.hero')) return;
      if (el.classList.contains('project-card') || el.classList.contains('skill-card')) return;

      if (reduceMotion) {
        gsap.set(el, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set(el, { autoAlpha: 0, y: 40 });

      gsap.to(el, {
        autoAlpha: 1,
        y: 0,
        duration: dur,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true,
        },
      });
    });

    ['.projects-grid', '.skills-grid', '.youtube-grid'].forEach(function (grid) {
      var cards = document.querySelectorAll(grid + ' .project-card, ' + grid + ' .skill-card');
      if (!cards.length) return;

      if (!reduceMotion) {
        gsap.set(cards, { autoAlpha: 0, y: 50 });
      }

      ScrollTrigger.batch(cards, {
        onEnter: function (batch) {
          if (reduceMotion) {
            gsap.set(batch, { autoAlpha: 1, y: 0 });
            return;
          }
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: stagger,
            ease: 'power3.out',
            overwrite: true,
          });
        },
        start: 'top 90%',
        once: true,
      });
    });
  }

  function initCursorGlow(reduceMotion) {
    var glow = document.getElementById('cursor-glow');
    var blob = document.getElementById('cursor-glow-blob');
    if (!glow || !blob || window.matchMedia('(max-width: 1023px)').matches || reduceMotion) return;

    var xTo = gsap.quickTo(blob, 'left', { duration: 0.7, ease: 'power3.out' });
    var yTo = gsap.quickTo(blob, 'top', { duration: 0.7, ease: 'power3.out' });

    window.addEventListener('mousemove', function (e) {
      xTo(e.clientX);
      yTo(e.clientY);
      glow.classList.add('visible');
    });

    document.body.addEventListener('mouseleave', function () {
      glow.classList.remove('visible');
    });
  }

  function initButtonHover(reduceMotion) {
    if (reduceMotion) return;

    document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta, .btn-youtube').forEach(function (btn) {
      btn.addEventListener('mouseenter', function () {
        gsap.to(btn, { scale: 1.05, duration: 0.25, ease: 'power2.out' });
      });
      btn.addEventListener('mouseleave', function () {
        gsap.to(btn, { scale: 1, duration: 0.25, ease: 'power2.out' });
      });
      btn.addEventListener('mousedown', function () {
        gsap.to(btn, { scale: 0.95, duration: 0.1 });
      });
      btn.addEventListener('mouseup', function () {
        gsap.to(btn, { scale: 1.05, duration: 0.1 });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
})();
