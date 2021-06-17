;(function () {
  function update() {
    const width = Math.min(document.documentElement.offsetWidth || 800, 800)
    if (window.innerWidth === width && document.documentElement.clientWidth === width) return

    window.__defineGetter__('innerWidth', () => width)
    document.documentElement.__defineGetter__('clientWidth', () => width)

    window.dispatchEvent(new Event('resize'))
  }

  window.addEventListener('load', update)
  window.addEventListener('resize', update)
  document.addEventListener('visibilitychange', update)
  update()
})()
