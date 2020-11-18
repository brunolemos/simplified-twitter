;(function () {
  function update() {
    const innerWidth = Math.min(window.outerWidth || 0, 800)
    if (window.innerWidth === innerWidth) return

    window.innerWidth = innerWidth
    window.dispatchEvent(new Event('resize'))
  }

  window.addEventListener('load', update)
  window.addEventListener('resize', update)
  document.addEventListener('visibilitychange', update)
  update()
})()
