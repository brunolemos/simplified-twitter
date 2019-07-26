function script() {
  function update(win = window) {
    window.innerWidth = Math.min(win.outerWidth, 800)
    document.body.style.paddingLeft = win.innerWidth >= 800 ? '176px' : null
  }

  function triggerUpdate() {
    setTimeout(() => window.dispatchEvent(new Event('resize')), 1)
  }

  window.onresize = e => update(e.target || window)
  window.onload = triggerUpdate
  document.addEventListener('visibilitychange', triggerUpdate)
}

function inject(fn) {
  const script = document.createElement('script')
  script.text = `(${fn.toString()})();`
  document.documentElement.appendChild(script)
}

inject(script)
