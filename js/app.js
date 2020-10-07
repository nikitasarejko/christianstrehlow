const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cv__wrapper",
      start: "center bottom",
      end: "center top",
      toggleActions: "play play play reverse",
      markers: true
    }
  });
  tl.to(".cv__portrait img", {opacity: 1, duration: 1}, 0)
  tl.from(".cv__cell", {y:"100%", x:"-5%", opacity: 0, stagger: 0.1}, 0)

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".kompetenzen__wrapper",
      start: "center bottom",
      end: "center top",
      toggleActions: "play play play reverse",
      markers: true
    }
  });
  tl2.set(".hero__right img", {opacity: 0})
  tl2.to(".kompetenzen__portrait img", {opacity: 1, duration: 1}, 0)
  tl2.to("body", { backgroundColor: "#161616", color: "white", duration: 1 }, 0)