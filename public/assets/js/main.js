// Mobile menu
(() => {
  const btn = document.querySelector('[data-menu]')
  const mnav = document.querySelector('[data-mnav]')
  if (!btn || !mnav) return

  btn.addEventListener('click', () => {
    mnav.classList.toggle('is-open')
  })
})()

// Reveal on scroll
(() => {
  const els = Array.from(document.querySelectorAll('.reveal'))
  if (!els.length) return

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in')
        io.unobserve(e.target)
      }
    }
  }, { threshold: 0.12 })

  els.forEach(el => io.observe(el))
})()

// Subtle parallax for hero media (lightweight)
(() => {
  const grid = document.querySelector('[data-parallax]')
  if (!grid) return
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  let raf = 0
  window.addEventListener('mousemove', (ev) => {
    const rect = grid.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (ev.clientX - cx) / rect.width
    const dy = (ev.clientY - cy) / rect.height

    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(() => {
      grid.style.transform = `translate3d(${dx * 8}px, ${dy * 8}px, 0)`
    })
  })

  window.addEventListener('mouseleave', () => {
    grid.style.transform = 'translate3d(0,0,0)'
  })
})()
