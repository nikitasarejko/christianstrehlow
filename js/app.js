const tlHero = gsap.timeline({ defaults: { duration: 1, ease: Power4.easeOut } })

tlHero
  .from("img.logo", { opacity: 0, y: "300%", delay: 1 }, 0)
  .from(".menu-desktop__right a", { opacity: 0, y: 25, stagger: 0.15, delay: 0.25 }, 1)
  .from(".hero__left__content", { opacity: 0, y: 200, duration: 1.5, delay: 0.75  }, 1)
  .to(".hero__right img", { opacity: 1, y: 0, duration: 1.5, delay: 0.75 }, 1)

const tlCVImg = gsap.timeline({
  scrollTrigger: {
    trigger: "section.cv",
    start: "top bottom",
    end:"center center",
    scrub: true
  }
});

tlCVImg
  .to(".cv__portrait img", { x: 0 })

const tlCV = gsap.timeline({
    scrollTrigger: {
      trigger: ".cv__wrapper",
      start: "top center+=300",
      end: "center top",
      toggleActions: "play none none reverse",
    }
  });
  tlCV.to("p.hero__left__scroll", { y: "-200%", opacity: 0, duration: 1 }, 0)
  tlCV.from("div.cv__wrapper p.chapter", { y: 200, opacity: 0, duration: 1 }, 0)
  tlCV.from("div.cv__wrapper h2.headline", { y: 200, opacity: 0, duration: 1 }, 0)
  tlCV.from("div.cv__wrapper p.copy", { y: 200, opacity: 0, duration: 1 }, 0)
  tlCV.from(".cv__cell", { y:"100%", opacity: 0, stagger: 0.1 }, 1)
  tlCV.from(".cv__logos img", { y:"100%", opacity: 0, stagger: 0.2 }, 2)

const tlKompetenzenImg = gsap.timeline({
  scrollTrigger: {
    trigger: "section.kompetenzen",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none reverse",
    scrub: true
  }
});

tlKompetenzenImg
  .to(".kompetenzen__portrait img", { x: 0 })

const tlKompetenzen = gsap.timeline({
    scrollTrigger: {
      trigger: ".kompetenzen__wrapper",
      start: "center bottom",
      end: "center center",
      toggleActions: "play none none reverse",
    }
  });
  tlKompetenzen.to("body", { backgroundColor: "#F1ECE7", duration: 0.25 }, 0)
  tlKompetenzen.from("div.kompetenzen__wrapper p.chapter", { y: 200, opacity: 0, duration: 1 }, 0)
  tlKompetenzen.from("div.kompetenzen__wrapper h2.headline", { y: 200, opacity: 0, duration: 1 }, 0)
  tlKompetenzen.from("div.kompetenzen__wrapper p.copy", { y: 200, opacity: 0, duration: 1 }, 0)
  tlKompetenzen.from("div.kompetenzen__wrapper h3.kompetenzen__headline", { y: 200, opacity: 0, duration: 1 }, 1)
  tlKompetenzen.from(".kompetenzen__cell", { y:"100%", opacity: 0, stagger: 0.1 }, 2)