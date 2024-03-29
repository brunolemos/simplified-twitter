;(function () {
  function script() {
    function update() {
      const width = Math.min(document.documentElement.offsetWidth || 800, 800)
      if (window.innerWidth === width && document.documentElement.clientWidth === width) return

      window.__defineGetter__('innerWidth', () => width)
      document.documentElement.__defineGetter__('clientWidth', () => width)
      if (window.visualViewport) window.visualViewport.__defineGetter__('width', () => width)

      window.dispatchEvent(new Event('resize'))
      if (window.visualViewport) window.visualViewport.dispatchEvent(new Event('resize'))
    }

    window.addEventListener('load', update)
    window.addEventListener('resize', update)
    if (window.visualViewport) window.visualViewport.addEventListener('resize', update)
    document.addEventListener('visibilitychange', update)
    update()
  }

  function inject(fn) {
    const script = document.createElement('script')
    script.text = `(${fn.toString()})();`
    document.documentElement.appendChild(script)
  }

  inject(script)
})()
