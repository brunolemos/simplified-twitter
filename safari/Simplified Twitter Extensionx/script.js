;(function () {
  function update(win = window, retry = 3) {
    window.innerWidth = Math.min(win.outerWidth, 800)

    try {
      document
        .querySelector('main')
        .parentElement.querySelector('header').style.flexGrow =
        win.innerWidth >= 800 ? 2 : null
      document.body.style.paddingLeft = null
    } catch (error) {
      document.body.style.paddingLeft = win.innerWidth >= 800 ? '188px' : null

      if (retry) setTimeout(() => update(win, retry - 1), 1000)
    }
  }

  function triggerUpdate() {
    setTimeout(() => window.dispatchEvent(new Event('resize')), 1)
  }

  window.onresize = (e) => update(e.target || window)
  window.onload = triggerUpdate
  document.addEventListener('visibilitychange', triggerUpdate)

  triggerUpdate()
})()
