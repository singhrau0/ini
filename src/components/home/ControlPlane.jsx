import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { controlPlane } from '../../data/solutions'

/**
 * The secure AI control plane, animated. A request descends the stack while
 * the section is on screen; each layer lights as the request passes through
 * it. Hovering or focusing a row pins it.
 */
export default function ControlPlane() {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-25% 0px -25% 0px' })
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [pinned, setPinned] = useState(null)

  useEffect(() => {
    if (!inView || reduce || pinned !== null) return
    const id = setInterval(() => setActive((i) => (i + 1) % controlPlane.length), 1500)
    return () => clearInterval(id)
  }, [inView, reduce, pinned])

  const current = pinned ?? active

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-[19px] top-4 bottom-4 w-px bg-ink/[.09] md:left-[23px]" aria-hidden />
      <motion.div
        className="absolute left-[19px] top-4 w-px origin-top bg-gradient-to-b from-cobalt/0 via-cobalt to-cobalt/0 md:left-[23px]"
        aria-hidden
        animate={{ height: reduce ? '100%' : `${((current + 1) / controlPlane.length) * 100}%` }}
        transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
        style={{ maxHeight: 'calc(100% - 2rem)' }}
      />

      <ol className="relative space-y-1">
        {controlPlane.map((row, i) => {
          const isOn = i <= current
          const isNow = i === current
          return (
            <li key={row.layer}>
              <div
                role="button"
                tabIndex={0}
                onMouseEnter={() => setPinned(i)}
                onMouseLeave={() => setPinned(null)}
                onFocus={() => setPinned(i)}
                onBlur={() => setPinned(null)}
                onKeyDown={(e) => e.key === 'Enter' && setPinned(i)}
                className={`group flex items-start gap-4 rounded-xl px-3 py-3.5 transition-colors duration-500 md:gap-6 md:px-4 ${
                  isNow ? 'bg-cobalt-50' : 'hover:bg-ink/[.025]'
                }`}
              >
                <span className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center md:h-6 md:w-6">
                  <span
                    className={`absolute inset-0 rounded-full border transition-all duration-500 ${
                      isNow
                        ? 'border-cobalt bg-cobalt'
                        : isOn
                        ? 'border-cobalt/40 bg-cobalt/15'
                        : 'border-ink/15 bg-white'
                    }`}
                  />
                  {isNow && !reduce && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-cobalt/25"
                      initial={{ scale: 1, opacity: 0.7 }}
                      animate={{ scale: 2.1, opacity: 0 }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                    />
                  )}
                  <span
                    className={`relative font-mono text-[9px] font-medium transition-colors md:text-[10px] ${
                      isNow ? 'text-white' : isOn ? 'text-cobalt' : 'text-ink-40'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </span>

                <div className="min-w-0 flex-1">
                  <div
                    className={`text-[15px] font-medium tracking-[-.015em] transition-colors md:text-base ${
                      isNow ? 'text-cobalt' : 'text-ink'
                    }`}
                  >
                    {row.layer}
                  </div>
                  <div className="mt-1 text-[13px] leading-relaxed text-ink-60 md:text-[13.5px]">
                    {row.desc}
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
