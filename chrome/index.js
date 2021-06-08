;(function () {
  function script() {
    function update() {
      const width = Math.min(window.outerWidth || 800, 800)
      if (window.innerWidth === width && document.documentElement.clientWidth === width) return

      window.__defineGetter__('innerWidth', () => width)
      document.documentElement.__defineGetter__('clientWidth', () => width)

      window.dispatchEvent(new Event('resize'))
    }

    window.addEventListener('load', update)
    window.addEventListener('resize', update)
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
