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
      const speed = 0.2 + (0.75 * index)
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
const figures = document.querySelectorAll('figure')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.1) {
      entry.target.classList.add('in-view')
    } else {
    }
  })
}, {
  threshold: [0.0, 0.1, 1.0]
})

figures.forEach(figure => {
  observer.observe(figure)
})

