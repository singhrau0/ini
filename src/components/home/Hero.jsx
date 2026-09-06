import { motion, useReducedMotion } from 'framer-motion'
import HeroCanvas from './HeroCanvas'
import { Button, Arrow } from '../ui/Primitives'

const words = ['Secure', 'enterprise', 'AI,']

export default function Hero() {
  const reduce = useReducedMotion()
  const rise = (i) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.85, delay: 0.06 * i, ease: [0.2, 0.7, 0.2, 1] },
        }

  return (
    <section className="relative isolate overflow-hidden bg-canvas pt-[var(--nav-h)]">
      {/* animated field */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <HeroCanvas className="h-full w-full opacity-[.55] [mask-image:radial-gradient(120%_90%_at_60%_45%,#000_35%,transparent_100%)] md:opacity-90 md:[mask-image:linear-gradient(105deg,transparent_0%,rgba(0,0,0,.12)_22%,rgba(0,0,0,.55)_40%,#000_58%,#000_90%,transparent_100%)]" />
      </div>
      {/* light bloom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70%] bg-gradient-to-b from-canvas via-canvas/70 to-transparent md:hidden" />
      <div className="pointer-events-none absolute -z-10 right-[-10%] top-[-15%] h-[560px] w-[560px] rounded-full bg-cobalt/[.10] blur-[130px]" />
      <div className="pointer-events-none absolute -z-10 left-[-8%] bottom-[-20%] h-[420px] w-[420px] rounded-full bg-[#f0b429]/[.07] blur-[120px]" />

      <div className="wrap relative flex min-h-[calc(100svh-var(--nav-h))] flex-col justify-center py-20 md:py-24">
        <motion.div {...rise(0)} className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 py-1.5 pl-2 pr-3.5 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-signal" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-2xs uppercase tracking-[.14em] text-ink-60">
              Enterprise AI engineering
            </span>
          </span>
          <span className="font-mono text-2xs uppercase tracking-[.14em] text-ink-40">
            Hyderabad · India
          </span>
        </motion.div>

        <h1 className="display mt-8 max-w-[16ch] text-[clamp(2.15rem,6.6vw,5.6rem)] text-ink">
          {/* real space text nodes between the spans, so the accessible name
              and the indexed text stay "Secure enterprise AI, built for …" */}
          {words.map((word, i) => (
            <span key={word}>
              <motion.span {...rise(1 + i * 0.5)} className="inline-block">
                {word}
              </motion.span>{' '}
            </span>
          ))}
          <motion.span {...rise(2.6)} className="inline-block">
            built for{' '}
            <span className="em-serif relative text-cobalt">
              production
              {!reduce && (
                <motion.svg
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-[10px] w-full text-cobalt/35"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <motion.path
                    d="M2 8C60 3 120 3 180 6c40 2 80 2 118-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.1, delay: 1.5, ease: [0.2, 0.7, 0.2, 1] }}
                  />
                </motion.svg>
              )}
            </span>
          </motion.span>
        </h1>

        <motion.p {...rise(3.4)} className="lede mt-8 max-w-[54ch]">
          We take enterprise AI from a blocked use-case to a security-approved
          system in production — engineered, governed and deployed inside the
          boundary your data is already allowed to live in.
        </motion.p>

        <motion.div {...rise(3.8)} className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button to="/book" size="lg">
            Book an architecture review <Arrow />
          </Button>
          <Button to="/solutions" variant="outline" size="lg">
            See what we build
          </Button>
        </motion.div>

        <motion.p {...rise(4.1)} className="mt-6 max-w-md text-[13.5px] leading-relaxed text-ink-40">
          A 30-minute working session on one workflow your security team has
          not approved. No deck, no obligation.
        </motion.p>

        <motion.div
          {...rise(4.4)}
          className="mt-auto hidden items-center justify-between border-t border-ink/[.08] pt-6 md:flex"
        >
          {[
            ['Approved API', 'Enterprise terms'],
            ['Customer VPC', 'Private endpoint'],
            ['Private cloud', 'On-premise'],
            ['Air-gapped', 'Zero egress'],
            ['Hybrid', 'Policy router'],
          ].map(([a, b]) => (
            <div key={a} className="flex flex-col gap-1">
              <span className="text-[13px] font-medium tracking-[-.01em] text-ink-80">{a}</span>
              <span className="font-mono text-2xs uppercase tracking-[.12em] text-ink-40">{b}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
