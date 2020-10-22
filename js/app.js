const tlHero = gsap.timeline({
    scrollTrigger: {
      trigger: ".cv__wrapper",
      start: "center bottom",
      end: "center top",
      toggleActions: "play none none reverse",
      markers: true
    }
  });
  tlHero.to(".cv__portrait img", { opacity: 1, duration: 1 }, 0)
  tlHero.to("p.hero__left__scroll", { y: "-200%", opacity: 0, duration: 1 }, 0)
  tlHero.from("div.cv__wrapper p.chapter", { y: 200, opacity: 0, duration: 1 }, 0)
  tlHero.from("div.cv__wrapper h2.headline", { y: 200, opacity: 0, duration: 1 }, 0)
  tlHero.from("div.cv__wrapper p.copy", { y: 200, opacity: 0, duration: 1 }, 0)
  tlHero.from(".cv__cell", { y:"100%", opacity: 0, stagger: 0.1 }, 1)
  tlHero.from(".cv__logos img", { y:"100%", opacity: 0, stagger: 0.2 }, 2)

const tlHeroImg = gsap.timeline({
  scrollTrigger: {
    trigger: ,
  }
})

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".kompetenzen__wrapper",
      start: "center bottom",
      end: "center top",
      toggleActions: "play none none reverse",
      markers: true
    }
  });
  tl2.set(".hero__right img", {opacity: 0})
  tl2.to(".kompetenzen__portrait img", {opacity: 1, duration: 1}, 0)
  tl2.to("body", { backgroundColor: "#F1ECE7", duration: 1 }, 0)
  tl2.from("div.kompetenzen__wrapper p.chapter", { y: 200, opacity: 0, duration: 1 }, 0)
  tl2.from("div.kompetenzen__wrapper h2.headline", { y: 200, opacity: 0, duration: 1 }, 0)
  tl2.from("div.kompetenzen__wrapper p.copy", { y: 200, opacity: 0, duration: 1 }, 0)
  tl2.from("div.kompetenzen__wrapper h3.kompetenzen__headline", { y: 200, opacity: 0, duration: 1 }, 1)
  tl2.from(".kompetenzen__cell", { y:"100%", opacity: 0, stagger: 0.1 }, 2)