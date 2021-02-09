let currentScroll = 0
let aimScroll = 0

const changeScroll = function () {
  
  currentScroll = currentScroll + (aimScroll - currentScroll) * 0.09
  
  const figcaptions = document.querySelectorAll('figure')
  figcaptions.forEach(caption => {
    const box = caption.getBoundingClientRect()
    const midY = box.y + box.height / 2
    const midScreen = window.innerHeight / 2
    const diff = midY - midScreen
    
    const images = caption.querySelectorAll('img')
    
    images.forEach((image, index) => {
      const speed = 0.35 + (0.75 * index)
      image.style.top = (diff * speed) + 'px'
    })
  })
  
  requestAnimationFrame(changeScroll)
}

window.addEventListener('scroll', function () {
  aimScroll = window.pageYOffset
})

changeScroll()

// INTERSECTION OBSERVER
const figures = document.querySelectorAll('figure.animate')
const textWrappers = document.querySelectorAll('div.textwrapper')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.1) {
      entry.target.classList.add('in-view')
    } else {
    }
  })
}, {
  threshold: [0.05, 0.25, 1.0]
})

figures.forEach(figure => {
  observer.observe(figure)
})

textWrappers.forEach(textWrapper => {
  observer.observe(textWrapper)
})

// GSAP SCROLLTRIGGER
const tlAbout = gsap.timeline({
  scrollTrigger: {
    trigger: "section.about ul",
    start: "top center"
  }
})

tlAbout
  .from("section.about ul li", { yPercent: 25, rotation: "-2.5deg", stagger: 0.075, opacity: 0, duration: 0.25 })

const tlReferenzen = gsap.timeline({
  scrollTrigger: {
    trigger: "div.table",
    start: "top center"
  }
})

tlReferenzen
  .from("div.table-column *", { yPercent: 25, rotation: "-0.75deg", stagger: 0.075, opacity: 0, duration: 0.25 })
  
const tlTermine = gsap.timeline({
  scrollTrigger: {
    trigger: "div.termine-table",
    start: "top center"
  }
})

tlTermine
  .from("div.termine-table__cell", { yPercent: 25, rotation: "-0.75deg", stagger: 0.075, opacity: 0, duration: 0.25 })

Splitting()

// PAGE TRANSITIONS
const enterOnceIndex = function(container) {
  const bodyTag = document.querySelector('body');
  const wiper = document.querySelector('div.wiper');
  const title = document.querySelector('section.hero div.headline p');
  const introText = document.querySelectorAll('section.hero h1 span.word');
  const heroImg = document.querySelector('section.hero figure img')

  const timeline = gsap.timeline({
    defaults: {
      duration: 1,
      delay: 0.2,
      ease: 'circ.out',
    },
  });

  timeline
    .set(bodyTag, { opacity: 0 }, 0)
    .set(heroImg, { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", yPercent: 15 }, 0)
    .to(bodyTag, { opacity: 1, duration: 0.25 }, 1)
    .to(wiper, { height: "100%", duration: 0.75 }, 1)
    .set(wiper, { top: 0, bottom: "none", duration: 0 }, 2)
    .to(wiper, { height: "0%", duration: 0.75 }, 3)
    .to(heroImg, { clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)", yPercent: 0, duration: 1, delay: 1.2 }, 3)
    .from(title, { y: 200, opacity: 0, delay: 0.8 }, 3)
    .from(introText, { yPercent: 100, opacity: 0, delay: 1, stagger: 0.015, duration: 2, onComplete: () => document.querySelector('body').classList.remove('is-loading') }, 3)
    .set(wiper, { clearProps: "all" }, 4)

  return timeline;
  
};

barba.hooks.enter(() => {
  // window.scrollTo({
  // 	top: 0,
  // 	behavior: 'smooth',
  // });
  window.scrollTo(0, 0);
  runScripts();
});

barba.init({
  transitions: [
    {
      name: 'home',
      to: {
        namespace: ['home'],
      },
      once({ next }) {
        enterOnceIndex(next.container);
        console.log('first enter of the page');
      },
    },
  ],
  views: [],
  debug: true,
});