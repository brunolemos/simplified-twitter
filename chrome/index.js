;(function () {
  function script() {
    function update() {
      const innerWidth = Math.min(window.outerWidth || 800, 800)
      if (window.innerWidth === innerWidth) return

      window.innerWidth = innerWidth
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
