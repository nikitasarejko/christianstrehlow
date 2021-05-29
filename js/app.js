const runScripts = function () {
  let currentScroll = 0;
  let aimScroll = 0;

<<<<<<< HEAD
  const changeScroll = function () {
    currentScroll = currentScroll + (aimScroll - currentScroll) * 0.09;

    const figcaptions = document.querySelectorAll("figure");
    figcaptions.forEach((caption, index) => {
      const box = caption.getBoundingClientRect();
      const midY = box.y + box.height / 2;
      const midScreen = window.innerHeight / 2;
      const diff = midY - midScreen;

      const images = caption.querySelectorAll("img");

      images.forEach((image) => {
        const speed = 0.35 + 0.25 * (index / 4);
        image.style.top = diff * speed + "px";
      });
    });

    requestAnimationFrame(changeScroll);
  };

  window.addEventListener("scroll", function () {
    aimScroll = window.pageYOffset;
  });

  changeScroll();

  // INTERSECTION OBSERVER
  const figures = document.querySelectorAll("figure.animate");
  const textWrappers = document.querySelectorAll("div.textwrapper");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.1) {
          entry.target.classList.add("in-view");
        } else {
        }
      });
    },
    {
      threshold: [0.05, 0.25, 1.0],
    }
  );

  figures.forEach((figure) => {
    observer.observe(figure);
  });

  textWrappers.forEach((textWrapper) => {
    observer.observe(textWrapper);
  });

  // GSAP SCROLLTRIGGER
  const tlNav = gsap.timeline({
    scrollTrigger: {
      trigger: "div.sticky-nav",
      start: "top bottom-=100px",
    },
  });

  tlNav
    .from(
      "div.sticky-nav__left a",
      { yPercent: 100, opacity: 0, delay: 0.25 },
      0
    )
    .from(
      "div.sticky-nav__right a",
      { yPercent: 100, opacity: 0, delay: 0.5, stagger: 0.25 },
      0
    );

  const tlAbout = gsap.timeline({
    scrollTrigger: {
      trigger: "section.about ul",
      start: "top center",
    },
  });

  tlAbout.from("section.about ul li", {
    yPercent: 25,
    rotation: "-2.5deg",
    stagger: 0.075,
    opacity: 0,
    duration: 0.25,
  });

  const tlKompetenzen = gsap.timeline({
    scrollTrigger: {
      trigger: "div.table",
      start: "top center",
    },
  });

  tlKompetenzen.from("div.table-column *", {
    yPercent: 25,
    // rotation: "-0.75deg",
    stagger: 0.075,
    opacity: 0,
    duration: 0.25,
  });

  const tlReferenzen = gsap.timeline({
    scrollTrigger: {
      trigger: "section.referenzen ul",
      start: "top center",
    },
  });

  tlReferenzen.from("section.referenzen ul li", {
    yPercent: 25,
    rotation: "-0.75deg",
    stagger: 0.075,
    opacity: 0,
    duration: 0.25,
  });

  Splitting();
};
runScripts();

// PAGE TRANSITIONS
const enterOnceIndex = function (container) {
  const bodyTag = document.querySelector("body");
  const wiper = document.querySelector("div.wiper");
  const wiperText = document.querySelector("div.wiper__text p");
  const title = document.querySelector("section.hero div.headline p");
  const introText = document.querySelectorAll("section.hero h1 span.word");
  const heroImg = document.querySelector("section.hero figure img");

  const timeline = gsap.timeline({
    defaults: {
      duration: 1,
      delay: 0.2,
      ease: "circ.out",
    },
  });

  timeline
    .set(bodyTag, { opacity: 0 }, 0)
    .set(
      heroImg,
      {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        yPercent: 15,
      },
      0
    )
    .to(bodyTag, { opacity: 1, duration: 0.25 }, 1)
    .to(wiper, { height: "100%", duration: 1.25 }, 1)
    .to(wiperText, { y: 0, opacity: 1, delay: 0.8 }, 1)
    .to(wiperText, { y: "-100%", opacity: 0, delay: 1.6 }, 2)
    .set(wiper, { top: 0, bottom: "none", duration: 0 }, 3)
    .to(wiper, { height: "0%", duration: 0.75 }, 4)
    .to(
      heroImg,
      {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        yPercent: 0,
        duration: 1,
        delay: 1.2,
      },
      4
    )
    .from(title, { y: 200, opacity: 0, delay: 0.8 }, 4)
    .from(
      introText,
      {
        yPercent: 100,
        opacity: 0,
        delay: 1,
        stagger: 0.015,
        duration: 2,
        onComplete: () =>
          document.querySelector("body").classList.remove("is-loading"),
      },
      4
    )
    .set(wiper, { clearProps: "all" }, 5);

  return timeline;
  runScripts();
};

const enterIndex = function (container) {
  const bodyTag = document.querySelector("body");
  const title = document.querySelector("section.hero div.headline p");
  const introText = document.querySelectorAll("section.hero h1 span.word");
  const heroImg = document.querySelector("section.hero figure img");

  const timeline = gsap.timeline({
    defaults: {
      duration: 1,
      delay: 0.2,
      ease: "circ.out",
    },
  });

  timeline
    .set(bodyTag, { opacity: 0 }, 0)
    .set(
      heroImg,
      {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        yPercent: 15,
      },
      0
    )
    .to(bodyTag, { opacity: 1, duration: 0.25 }, 1)
    .to(
      heroImg,
      {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        yPercent: 0,
        duration: 1,
        delay: 0.2,
      },
      2
    )
    .from(title, { y: 200, opacity: 0, delay: 0.4 }, 2)
    .from(
      introText,
      {
        yPercent: 100,
        opacity: 0,
        delay: 0.6,
        stagger: 0.015,
        duration: 1.6,
        onComplete: () =>
          document.querySelector("body").classList.remove("is-loading"),
      },
      2
    );

  return timeline;
  runScripts();
};

const leaveIndex = function (container) {
  const bodyTag = document.querySelector("body");
  const timeline = gsap.timeline({
    defaults: {
      duration: 0.6,
      ease: Power4.easeOut,
    },
  });

  timeline
    .to(bodyTag, { opacity: 0 }, 0)
    .to(container, { yPercent: -2, opacity: 0, delay: 0.4 }, 0);

  return timeline;
};

const enterImpressum = function (container) {
  const bodyTag = document.querySelector("body");
  const title = document.querySelector("section.impressum div.headline h2");

  const timeline = gsap.timeline({
    defaults: {
      duration: 1,
      delay: 0.2,
      ease: "circ.out",
    },
  });

  timeline
    .set(bodyTag, { opacity: 0 }, 0)
    .to(bodyTag, { opacity: 1, duration: 0.25 }, 1)
    .from(title, { opacity: 0, yPercent: 120, delay: 0.25 }, 1);

  return timeline;
  runScripts();
};

const leaveImpressum = function (container) {
  const timeline = gsap.timeline({
    defaults: {
      duration: 0.6,
      ease: Power4.easeOut,
    },
  });

  timeline.to(container, { yPercent: -2, opacity: 0, delay: 0.4 }, 0);

  return timeline;
};

barba.hooks.enter(() => {
  window.scrollTo(0, 0);
  runScripts();
});

barba.init({
  transitions: [
    {
      name: "home",
      to: {
        namespace: ["home"],
      },
      once({ next }) {
        enterOnceIndex(next.container);
        console.log("first enter of the page");
      },
    },
    {
      name: "from-impressum-to-home",
      from: {
        namespace: ["impressum"],
      },
      to: {
        namespace: ["home"],
      },
      leave: ({ current }) => leaveImpressum(current.container),
      enter({ next }) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        enterIndex(next.container);
      },
    },
    {
      name: "from-home-to-impressum",
      from: {
        namespace: ["home"],
      },
      to: {
        namespace: ["impressum"],
      },
      leave: ({ current }) => leaveIndex(current.container),
      enter({ next }) {
        enterImpressum(next.container);
        window.scrollTo({
          top: 0,
          bahavior: "smooth",
        });
      },
    },
  ],
  views: [
    {
      namespace: "impressum",
      beforeEnter(data) {
        const bodyTag = document.querySelector("body");

        bodyTag.classList.remove("is-loading");
      },
      afterLeave(data) {
        const bodyTag = document.querySelector("body");

        bodyTag.classList.add("is-loading");
      },
    },
  ],
  debug: true,
});
=======
const tlHero = gsap.timeline({
	defaults: {
		duration: 1,
		ease: Power4.easeOut,
	},
});

tlHero
	.from(
		'img.logo',
		{
			opacity: 0,
			y: '300%',
			delay: 1,
		},
		0
	)
	.from(
		'.menu-desktop__right a',
		{
			opacity: 0,
			y: 25,
			stagger: 0.15,
			delay: 0.25,
		},
		1
	)
	.from(
		'.hero__left__content',
		{
			opacity: 0,
			y: 200,
			duration: 1.5,
			delay: 0.75,
		},
		1
	)
	.to(
		'.hero__right img',
		{
			opacity: 1,
			y: 0,
			duration: 1.5,
			delay: 0.75,
		},
		1
	);

// CV TIMELINE

const tlCVImg = gsap.timeline({
	scrollTrigger: {
		trigger: 'section.cv',
		start: 'top center',
		end: 'center center',
		toggleActions: 'play none none reverse',
	},
});

tlCVImg.to('.cv__portrait img', {
	x: 0,
	duration: 1,
});

const tlCV = gsap.timeline({
	scrollTrigger: {
		trigger: '.cv__wrapper',
		start: 'top center+=300',
		end: 'center top',
		toggleActions: 'play none none reverse',
	},
});
tlCV.to(
	'p.hero__left__scroll',
	{
		y: '-200%',
		opacity: 0,
		duration: 1,
	},
	0
);
tlCV.from(
	'div.cv__wrapper p.chapter',
	{
		y: 200,
		opacity: 0,
		duration: 1,
	},
	0
);
tlCV.from(
	'div.cv__wrapper h2.headline',
	{
		y: 200,
		opacity: 0,
		duration: 1,
	},
	0
);
tlCV.from(
	'div.cv__wrapper p.copy',
	{
		y: 200,
		opacity: 0,
		duration: 1,
	},
	0
);
tlCV.from(
	'.cv__cell',
	{
		y: '100%',
		opacity: 0,
		stagger: 0.1,
	},
	1
);
tlCV.from(
	'.cv__logos img',
	{
		y: '100%',
		opacity: 0,
		stagger: 0.2,
	},
	2
);

// KOMPETENZEN TIMELINE

const tlKompetenzenImg = gsap.timeline({
	scrollTrigger: {
		trigger: 'section.kompetenzen',
		start: 'top center',
		end: 'center center',
		toggleActions: 'play none none reverse',
	},
});

tlKompetenzenImg.to('.kompetenzen__portrait img', {
	x: 0,
	duration: 1,
});

const tlKompetenzen = gsap.timeline({
	scrollTrigger: {
		trigger: '.kompetenzen__wrapper',
		start: 'center bottom',
		end: 'center center',
		toggleActions: 'play none none reverse',
	},
});
tlKompetenzen.to(
	'section.wrapper',
	{
		backgroundColor: '#cdcac7',
		duration: 1,
	},
	0
);
tlKompetenzen.from(
	'div.kompetenzen__wrapper p.chapter',
	{
		y: 200,
		opacity: 0,
		duration: 1,
	},
	0
);
tlKompetenzen.from(
	'div.kompetenzen__wrapper h2.headline',
	{
		y: 200,
		opacity: 0,
		duration: 1,
	},
	0
);
tlKompetenzen.from(
	'div.kompetenzen__wrapper p.copy',
	{
		y: 200,
		opacity: 0,
		duration: 1,
	},
	0
);
tlKompetenzen.from(
	'div.kompetenzen__wrapper h3.kompetenzen__headline',
	{
		y: 200,
		opacity: 0,
		duration: 1,
	},
	1
);
tlKompetenzen.from(
	'.kompetenzen__cell',
	{
		y: '100%',
		opacity: 0,
		stagger: 0.1,
	},
	2
);

// REFERENZEN TIMELINE

const tlReferenzenImg = gsap.timeline({
	scrollTrigger: {
		trigger: 'section.referenzen',
		start: 'top center',
		end: 'center center',
		toggleActions: 'play none none reverse',
	},
});

tlReferenzenImg.to('.referenzen__portrait img', {
	x: 0,
	duration: 1,
});

const tlReferenzen = gsap.timeline({
	defaults: {
		ease: Power4.easeOut,
		duration: 1,
	},
	scrollTrigger: {
		trigger: 'section.referenzen',
		start: 'top center',
		end: 'center center',
		toggleActions: 'play none none reverse',
	},
});

tlReferenzen
	.to(
		'section.wrapper',
		{
			backgroundColor: '#aeaaa7',
			duration: 1,
		},
		0
	)
	.from('div.referenzen__content p.chapter.chapter-dark', { opacity: 0, y: 200, duration: 1 }, 0)
	.from('div.referenzen__content h2.headline', { opacity: 0, y: 200, duration: 1 }, 0)
	.from('div.referenzen__content p.copy', { opacity: 0, y: 200, duration: 1 }, 0)
	.from(
		'div.referenzen__cell',
		{
			opacity: 0,
			y: '100%',
			stagger: 0.1,
			duration: 1,
		},
		1
	);

// FOOTER TIMELINE

const tlFooter = gsap.timeline({
	scrollTrigger: {
		trigger: 'section.referenzen',
		start: 'bottom center',
		end: 'bottom 300px',
		toggleActions: 'play none none reverse',
	},
});

tlFooter
	.to(
		'.referenzen__portrait',
		{
			y: '-125%',
			duration: 1,
		},
		0
	)
	.to(
		'.kompetenzen__portrait',
		{
			y: '-125%',
			duration: 1,
			delay: 0.15,
		},
		0
	)
	.to(
		'.cv__portrait',
		{
			y: '-125%',
			duration: 1,
			delay: 0.3,
		},
		0
	)
	.to(
		'.hero__right',
		{
			y: '-125%',
			duration: 1,
			delay: 0.45,
		},
		0
	)
	.to(
		'.menu-desktop__right a',
		{
			color: '#ffffff',
		},
		1
	)
	.to(
		'footer.footer',
		{
			zIndex: 0,
			duration: 1,
		},
		1
	);
>>>>>>> main
