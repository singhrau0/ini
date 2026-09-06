import { useEffect } from 'react'

/**
 * Lenis smooth scrolling, loaded lazily so it never blocks first paint,
 * and skipped entirely on touch devices and for reduced-motion visitors.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (coarse || reduce) return

    let lenis
    let raf
    let cancelled = false

    import('@studio-freight/lenis').then(({ default: Lenis }) => {
      if (cancelled) return
      lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
      })
      const loop = (time) => {
        lenis.raf(time)
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
    })

    return () => {
      cancelled = true
      if (raf) cancelAnimationFrame(raf)
      lenis?.destroy()
    }
  }, [])
}
