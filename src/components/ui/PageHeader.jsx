import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Eyebrow, Arrow } from './Primitives'

export function Breadcrumbs({ trail }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 font-mono text-2xs uppercase tracking-[.12em] text-ink-40">
      {trail.map((t, i) => (
        <span key={t.path} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden className="text-ink-20">/</span>}
          {i === trail.length - 1 ? (
            <span className="text-ink-60">{t.name}</span>
          ) : (
            <Link to={t.path} className="transition-colors hover:text-ink">{t.name}</Link>
          )}
        </span>
      ))}
    </nav>
  )
}

export default function PageHeader({ eyebrow, title, sub, trail, aside, tone = 'canvas' }) {
  const reduce = useReducedMotion()
  const anim = reduce
    ? {}
    : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } }

  return (
    <header className={`relative overflow-hidden pt-[var(--nav-h)] ${tone === 'ink' ? 'bg-ink text-white' : 'bg-canvas'}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[.5] dot-bg [mask-image:radial-gradient(70%_60%_at_50%_0%,#000,transparent)]"
        aria-hidden
      />
      <div className="wrap relative pb-16 pt-16 md:pb-20 md:pt-24">
        <motion.div {...anim} className="grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
          <div className="max-w-3xl">
            {trail && <Breadcrumbs trail={trail} />}
            {eyebrow && <Eyebrow className={tone === 'ink' ? '!text-white/50' : ''}>{eyebrow}</Eyebrow>}
            <h1 className={`display mt-5 text-[clamp(2.2rem,4.6vw+.8rem,4.25rem)] ${tone === 'ink' ? 'text-white' : 'text-ink'}`}>
              {title}
            </h1>
            {sub && <p className={`lede mt-7 max-w-2xl ${tone === 'ink' ? '!text-white/60' : ''}`}>{sub}</p>}
          </div>
          {aside && <div className="lg:pb-2">{aside}</div>}
        </motion.div>
      </div>
      <div className={`h-px w-full ${tone === 'ink' ? 'bg-white/10' : 'bg-ink/[.09]'}`} />
    </header>
  )
}

export const NextPrev = ({ prev, next, base }) => (
  <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] sm:grid-cols-2">
    {[prev, next].map((item, i) =>
      item ? (
        <Link
          key={item.slug}
          to={`${base}/${item.slug}`}
          className={`group bg-white p-7 transition-colors hover:bg-canvas ${i === 1 ? 'sm:text-right' : ''}`}
        >
          <span className="font-mono text-2xs uppercase tracking-[.12em] text-ink-40">
            {i === 0 ? 'Previous' : 'Next'}
          </span>
          <p className="mt-3 font-display text-[17px] font-medium leading-snug tracking-tighter2 text-ink transition-colors group-hover:text-cobalt">
            {item.title || item.name}
          </p>
        </Link>
      ) : (
        <div key={i} className="bg-white" />
      )
    )}
  </div>
)

export const CtaInline = ({ label = 'Book an architecture review', to = '/book' }) => (
  <Link to={to} className="group inline-flex items-center gap-2 text-[15px] font-medium text-cobalt">
    {label}
    <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
)
