;(function () {
  function update(win = window) {
    window.innerWidth = Math.min(win.outerWidth, 800)
  }

  function triggerUpdate() {
    setTimeout(() => window.dispatchEvent(new Event('resize')), 1)
  }

  window.onresize = (e) => update(e.target || window)
  window.onload = triggerUpdate
  document.addEventListener('visibilitychange', triggerUpdate)

  triggerUpdate()
})()
