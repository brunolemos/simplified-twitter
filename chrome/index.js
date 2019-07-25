function script() {
  window.onresize = e => {
    window.innerWidth = Math.min(e.target.outerWidth, 800)

    document.body.style.paddingLeft =
      e.target.innerWidth >= 800 ? '176px' : null
  }

  window.onload = () => {
    window.dispatchEvent(new Event('resize'))
  }
}

function inject(fn) {
  const script = document.createElement('script')
  script.text = `(${fn.toString()})();`
  document.documentElement.appendChild(script)
}

inject(script)
