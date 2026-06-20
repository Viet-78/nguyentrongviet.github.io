/* Navigation */
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

function closeNav() {
  document.body.classList.remove("nav-open");
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

const sections = document.querySelectorAll("section[id]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.style.color =
          link.getAttribute("href") === `#${entry.target.id}`
            ? "#ffffff"
            : "";
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));

/* GSAP */
function initGsap() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  const heroItems = gsap.utils.toArray(
    ".badge, .hero__title, .hero__roles, .hero__desc, .hero__actions"
  );

  gsap.set(".header", { y: -24, autoAlpha: 0 });
  gsap.set(heroItems, { y: 48, autoAlpha: 0 });
  gsap.set(".hero__image-wrap", { x: 40, scale: 0.94, autoAlpha: 0 });
  gsap.set(".scroll-indicator", { autoAlpha: 0, xPercent: -50 });

  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTl
    .to(".header", { y: 0, autoAlpha: 1, duration: 0.7 })
    .to(".badge", { y: 0, autoAlpha: 1, duration: 0.55 }, "-=0.35")
    .to(".hero__title", { y: 0, autoAlpha: 1, duration: 0.75 }, "-=0.3")
    .to(".hero__roles", { y: 0, autoAlpha: 1, duration: 0.6 }, "-=0.45")
    .to(".hero__desc", { y: 0, autoAlpha: 1, duration: 0.6 }, "-=0.4")
    .to(".hero__actions", { y: 0, autoAlpha: 1, duration: 0.55 }, "-=0.35")
    .to(
      ".hero__image-wrap",
      { x: 0, scale: 1, autoAlpha: 1, duration: 1, ease: "power2.out" },
      "-=0.85"
    )
    .to(".scroll-indicator", { autoAlpha: 0.7, duration: 0.5 }, "-=0.4");

  gsap.to(".scroll-indicator", {
    y: 8,
    xPercent: -50,
    duration: 1.4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1.2,
  });

  gsap.to(".scroll-dot", {
    attr: { cy: 18 },
    opacity: 0.35,
    duration: 1.4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1.2,
  });

  gsap.to(".hero__image", {
    yPercent: 12,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 0.6,
    },
  });

  gsap.utils.toArray(".section__header").forEach((header) => {
    gsap.from(header, {
      y: 60,
      autoAlpha: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: header,
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
    });
  });

  gsap.utils.toArray(".about__text").forEach((text, index) => {
    gsap.from(text, {
      y: 50,
      autoAlpha: 0,
      duration: 0.8,
      delay: index * 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: text,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });

  gsap.utils.toArray(".card").forEach((card, index) => {
    gsap.from(card, {
      y: 80,
      autoAlpha: 0,
      scale: 0.96,
      duration: 0.85,
      delay: index * 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    });
  });

  gsap.utils.toArray(".skill").forEach((skill, index) => {
    gsap.from(skill, {
      y: 60,
      autoAlpha: 0,
      duration: 0.75,
      delay: index * 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: skill,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    });
  });

  gsap.from(".youtube__content", {
    x: -50,
    autoAlpha: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".youtube",
      start: "top 78%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".youtube__embed", {
    x: 50,
    autoAlpha: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".youtube",
      start: "top 78%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.utils.toArray(".contact__card").forEach((card, index) => {
    gsap.from(card, {
      y: 50,
      autoAlpha: 0,
      duration: 0.65,
      delay: index * 0.07,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });

  gsap.from(".footer__inner", {
    y: 30,
    autoAlpha: 0,
    duration: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "top 92%",
      toggleActions: "play none none reverse",
    },
  });

  ScrollTrigger.create({
    start: 60,
    end: "max",
    onUpdate: (self) => {
      gsap.to(".header", {
        backgroundColor:
          self.scroll() > 60
            ? "rgba(10, 10, 10, 0.92)"
            : "rgba(10, 10, 10, 0.72)",
        duration: 0.25,
        overwrite: "auto",
      });
    },
  });

  ScrollTrigger.refresh();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGsap);
} else {
  initGsap();
}

window.addEventListener("load", () => {
  if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
});
