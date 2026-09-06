import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

/* ---------------------------------------------------------------- Button */

const variants = {
  primary:
    'bg-ink text-white hover:bg-[#1b1d22] shadow-[0_1px_2px_rgba(11,12,14,.2)]',
  accent: 'bg-cobalt text-white hover:bg-cobalt-600',
  outline: 'border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink/[.03]',
  ghost: 'text-ink hover:bg-ink/[.05]',
  light: 'bg-white text-ink hover:bg-white/90',
  onDark: 'border border-white/25 text-white hover:bg-white/10',
}

const sizes = {
  sm: 'h-9 px-4 text-[13px]',
  md: 'h-11 px-5 text-sm',
  lg: 'h-[52px] px-7 text-[15px]',
}

export const Button = forwardRef(function Button(
  { as, to, href, variant = 'primary', size = 'md', className = '', children, ...rest },
  ref
) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-.01em] transition-all duration-300 whitespace-nowrap ${variants[variant]} ${sizes[size]} ${className}`
  if (to) return <Link ref={ref} to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a ref={ref} href={href} className={cls} {...rest}>{children}</a>
  const Tag = as || 'button'
  return <Tag ref={ref} className={cls} {...rest}>{children}</Tag>
})

/* ------------------------------------------------------------------ Arrow */

export const Arrow = ({ className = '' }) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden className={`h-3.5 w-3.5 ${className}`}>
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ----------------------------------------------------------------- Eyebrow */

export const Eyebrow = ({ children, className = '' }) => (
  <div className={`eyebrow flex items-center gap-2.5 ${className}`}>
    <span className="inline-block h-[5px] w-[5px] rounded-full bg-cobalt" />
    {children}
  </div>
)

/* ------------------------------------------------------------------ Reveal */

export function Reveal({ children, delay = 0, y = 18, className = '', once = true }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ----------------------------------------------------------------- Section */

export const Section = ({ id, className = '', children, tone = 'canvas' }) => {
  const bg = { canvas: 'bg-canvas', paper: 'bg-white', ink: 'bg-ink text-white' }[tone]
  return (
    <section id={id} className={`relative ${bg} ${className}`}>
      {children}
    </section>
  )
}

export const SectionHead = ({ eyebrow, title, sub, align = 'left', tone = 'light', className = '' }) => (
  <div className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
    {eyebrow && <Eyebrow className={tone === 'dark' ? '!text-white/55' : ''}>{eyebrow}</Eyebrow>}
    <h2
      className={`display mt-5 text-[clamp(1.9rem,3.2vw+.8rem,3.25rem)] ${
        tone === 'dark' ? 'text-white' : 'text-ink'
      }`}
    >
      {title}
    </h2>
    {sub && (
      <p className={`lede mt-5 ${tone === 'dark' ? '!text-white/65' : ''}`}>{sub}</p>
    )}
  </div>
)

/* -------------------------------------------------------------------- Tag */

export const Tag = ({ children, tone = 'default' }) => {
  const tones = {
    default: 'border-ink/12 text-ink-60 bg-white',
    accent: 'border-cobalt/25 text-cobalt bg-cobalt-50',
    live: 'border-signal/30 text-signal bg-signal/[.07]',
    dev: 'border-amber/30 text-amber bg-amber/[.07]',
    dark: 'border-white/20 text-white/70 bg-white/5',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-2xs uppercase tracking-[.12em] ${tones[tone]}`}>
      {children}
    </span>
  )
}
