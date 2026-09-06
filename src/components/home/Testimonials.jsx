import { Reveal, SectionHead } from '../ui/Primitives'
import { site } from '../../data/site'
import { testimonials } from '../../data/testimonials'

/**
 * Renders nothing until site.features.testimonials is true AND real quotes
 * exist in src/data/testimonials.js. Publishing invented client quotes is the
 * fastest way to lose an enterprise deal, so this stays off by default.
 */
export default function Testimonials() {
  if (!site.features.testimonials || testimonials.length === 0) return null

  return (
    <section className="relative bg-canvas">
      <div className="wrap py-24 md:py-32">
        <Reveal>
          <SectionHead
            eyebrow="Client voices"
            title={<>What our clients <span className="em-serif text-ink-40">say.</span></>}
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07} className="bg-white">
              <figure className="flex h-full flex-col p-8">
                <svg viewBox="0 0 24 18" className="h-4 w-5 text-cobalt/40" fill="currentColor" aria-hidden>
                  <path d="M0 18V9.6C0 4.3 3.2.8 8.4 0l.9 2.4C6.5 3.4 5 5.3 5 7.6h3.6V18H0Zm14.4 0V9.6c0-5.3 3.2-8.8 8.4-9.6l.9 2.4c-2.8 1-4.3 2.9-4.3 5.2H23V18h-8.6Z" />
                </svg>
                <blockquote className="mt-6 flex-1 text-[15.5px] leading-relaxed text-ink-80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 border-t border-ink/[.09] pt-5">
                  <div className="text-[14px] font-medium tracking-[-.01em] text-ink">{t.name}</div>
                  <div className="mt-1 text-[13px] text-ink-60">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
