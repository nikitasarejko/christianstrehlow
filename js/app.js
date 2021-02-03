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