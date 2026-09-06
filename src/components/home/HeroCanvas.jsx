import { useEffect, useRef } from 'react'

/**
 * Hero background: enterprise data streams flowing through a policy gate.
 * Left of the gate the flow is unclassified grey; crossing it, each particle
 * is governed and turns cobalt. It replaces the old background video entirely
 * — no network request, no decode cost, no black frame on failure.
 *
 * Budget: ~28 streams / ~130 particles, DPR capped at 2, paused off-screen and
 * when the tab is hidden, and reduced to a single static frame when the
 * visitor prefers reduced motion.
 */
export default function HeroCanvas({ className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let dpr = 1
    let streams = []
    let raf = 0
    let running = true
    let last = performance.now()

    const STREAM_COUNT = () => (w < 640 ? 16 : w < 1100 ? 22 : 28)

    const build = () => {
      const count = STREAM_COUNT()
      streams = Array.from({ length: count }, (_, i) => {
        const t = (i + 0.5) / count
        return {
          baseY: t * h,
          amp: (18 + Math.random() * 46) * (h / 700),
          freq: 0.9 + Math.random() * 1.5,
          phase: Math.random() * Math.PI * 2,
          drift: 0.06 + Math.random() * 0.1,
          weight: 0.35 + Math.random() * 0.45,
          particles: Array.from({ length: 2 + Math.floor(Math.random() * 3) }, () => ({
            x: Math.random(),
            speed: 0.028 + Math.random() * 0.05,
            size: 1.1 + Math.random() * 1.5,
          })),
        }
      })
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      build()
    }

    // y position of a stream at horizontal fraction u
    const yAt = (s, u, time) =>
      s.baseY +
      Math.sin(u * Math.PI * s.freq * 2 + s.phase + time * s.drift) * s.amp +
      Math.sin(u * Math.PI * 0.7 + s.phase * 1.7) * s.amp * 0.35

    const gateX = () => w * (w < 720 ? 0.5 : 0.62)

    const draw = (time) => {
      ctx.clearRect(0, 0, w, h)
      const gx = gateX()

      // streamlines
      const STEPS = w < 640 ? 26 : 44
      for (const s of streams) {
        ctx.beginPath()
        for (let i = 0; i <= STEPS; i++) {
          const u = i / STEPS
          const x = u * w
          const y = yAt(s, u, time)
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        const grad = ctx.createLinearGradient(0, 0, w, 0)
        grad.addColorStop(0, 'rgba(11,12,14,0)')
        grad.addColorStop(0.18, `rgba(11,12,14,${0.06 * s.weight})`)
        grad.addColorStop(gx / w - 0.01, `rgba(11,12,14,${0.09 * s.weight})`)
        grad.addColorStop(Math.min(gx / w + 0.02, 1), `rgba(27,59,232,${0.16 * s.weight})`)
        grad.addColorStop(0.88, `rgba(27,59,232,${0.1 * s.weight})`)
        grad.addColorStop(1, 'rgba(27,59,232,0)')
        ctx.strokeStyle = grad
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // the gate
      const gg = ctx.createLinearGradient(0, 0, 0, h)
      gg.addColorStop(0, 'rgba(27,59,232,0)')
      gg.addColorStop(0.5, 'rgba(27,59,232,.34)')
      gg.addColorStop(1, 'rgba(27,59,232,0)')
      ctx.strokeStyle = gg
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(gx, 0)
      ctx.lineTo(gx, h)
      ctx.stroke()

      // particles
      for (const s of streams) {
        for (const p of s.particles) {
          const u = p.x
          const x = u * w
          const y = yAt(s, u, time)
          const governed = x >= gx
          const near = Math.abs(x - gx) < 26

          // short trail
          const tu = Math.max(u - 0.035, 0)
          const tx = tu * w
          const ty = yAt(s, tu, time)
          const tg = ctx.createLinearGradient(tx, ty, x, y)
          const col = governed ? '27,59,232' : '11,12,14'
          tg.addColorStop(0, `rgba(${col},0)`)
          tg.addColorStop(1, `rgba(${col},${governed ? 0.4 : 0.26})`)
          ctx.strokeStyle = tg
          ctx.lineWidth = p.size * 0.8
          ctx.lineCap = 'round'
          ctx.beginPath()
          ctx.moveTo(tx, ty)
          ctx.lineTo(x, y)
          ctx.stroke()

          ctx.beginPath()
          ctx.arc(x, y, p.size * (near ? 1.7 : 1), 0, Math.PI * 2)
          ctx.fillStyle = governed
            ? `rgba(27,59,232,${near ? 0.95 : 0.62})`
            : `rgba(11,12,14,${near ? 0.7 : 0.32})`
          ctx.fill()

          if (near) {
            ctx.beginPath()
            ctx.arc(x, y, p.size * 4.5, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(27,59,232,.07)'
            ctx.fill()
          }
        }
      }
    }

    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      const time = now / 1000
      for (const s of streams) {
        for (const p of s.particles) {
          p.x += p.speed * dt
          if (p.x > 1.02) p.x = -0.02
        }
      }
      draw(time)
      if (running) raf = requestAnimationFrame(frame)
    }

    resize()

    if (reduce) {
      draw(0)
    } else {
      raf = requestAnimationFrame(frame)
    }

    const ro = new ResizeObserver(() => {
      resize()
      if (reduce) draw(0)
    })
    ro.observe(canvas)

    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduce) return
        if (entry.isIntersecting && !running) {
          running = true
          last = performance.now()
          raf = requestAnimationFrame(frame)
        } else if (!entry.isIntersecting && running) {
          running = false
          cancelAnimationFrame(raf)
        }
      },
      { threshold: 0 }
    )
    io.observe(canvas)

    const onVisibility = () => {
      if (reduce) return
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
      } else if (!running) {
        running = true
        last = performance.now()
        raf = requestAnimationFrame(frame)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={ref} aria-hidden className={className} />
}
