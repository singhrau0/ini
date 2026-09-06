import { Navigate, useParams, Link } from 'react-router-dom'
import PageHeader, { NextPrev } from '../components/ui/PageHeader'
import { Reveal, Button, Arrow, Eyebrow } from '../components/ui/Primitives'
import CTA from '../components/ui/CTA'
import { Seo, serviceLd } from '../lib/seo'
import { solutions, solutionBySlug } from '../data/solutions'

const Check = () => (
  <svg viewBox="0 0 16 16" fill="none" className="mt-[5px] h-3.5 w-3.5 shrink-0 text-cobalt">
    <path d="M3 8.5 6.2 11.7 13 4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function SolutionDetail() {
  const { slug } = useParams()
  const s = solutionBySlug(slug)
  if (!s) return <Navigate to="/solutions" replace />

  const idx = solutions.findIndex((x) => x.slug === slug)
  const prev = solutions[idx - 1]
  const next = solutions[idx + 1]

  return (
    <>
      <Seo jsonLd={serviceLd(s)} />
      <PageHeader
        eyebrow={`Solution ${s.n}`}
        title={s.title}
        sub={s.short}
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/solutions' },
          { name: s.title, path: `/solutions/${s.slug}` },
        ]}
        aside={
          <div className="rounded-xl border border-ink/[.09] bg-white p-6">
            <p className="text-[14px] leading-relaxed text-ink-60">
              Talk this through against a workflow you actually need to ship.
            </p>
            <Button to="/book" size="sm" className="mt-5">
              Book a review <Arrow />
            </Button>
          </div>
        }
      />

      <section className="bg-white">
        <div className="wrap py-20 md:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="text-[19px] leading-[1.62] tracking-[-.011em] text-ink-80">{s.summary}</p>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-14">
                  <Eyebrow>What you get</Eyebrow>
                  <ul className="mt-6 space-y-4">
                    {s.outcomes.map((o) => (
                      <li key={o} className="flex gap-3.5 text-[15.5px] leading-relaxed text-ink-80">
                        <Check /> {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {s.maturity && (
                <Reveal delay={0.1}>
                  <div className="mt-14">
                    <Eyebrow>Agent maturity</Eyebrow>
                    <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-60">
                      Each level adds capability and a matching control. We start
                      you at the lowest level that solves the problem.
                    </p>
                    <div className="mt-7 overflow-hidden rounded-xl border border-ink/[.09]">
                      {s.maturity.map((m, i) => (
                        <div key={m.level} className={`grid gap-3 p-6 md:grid-cols-[.5fr_1fr_1fr] md:gap-6 ${i > 0 ? 'border-t border-ink/[.09]' : ''}`}>
                          <span className="font-mono text-2xs uppercase tracking-[.12em] text-cobalt">{m.level}</span>
                          <div>
                            <div className="text-[15px] font-medium tracking-[-.015em]">{m.name}</div>
                            <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-60">{m.desc}</p>
                          </div>
                          <p className="text-[13.5px] leading-relaxed text-ink-60">
                            <span className="font-mono text-2xs uppercase tracking-[.1em] text-ink-40">Control · </span>
                            {m.control}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {s.faq && (
                <Reveal delay={0.12}>
                  <div className="mt-14 border-t border-ink/[.09] pt-10">
                    <Eyebrow>Common questions</Eyebrow>
                    <div className="mt-6 space-y-8">
                      {s.faq.map((f) => (
                        <div key={f.q}>
                          <h3 className="font-display text-[17px] font-medium tracking-tighter2">{f.q}</h3>
                          <p className="mt-2.5 text-[15px] leading-relaxed text-ink-60">{f.a}</p>
                        </div>
                      ))}
                    </div>
                    <Link to="/faq" className="mt-8 inline-flex items-center gap-2 text-[14.5px] font-medium text-cobalt">
                      All questions <Arrow />
                    </Link>
                  </div>
                </Reveal>
              )}
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-ink/[.09] bg-canvas p-7 md:p-8">
                  <Eyebrow>Scope of work</Eyebrow>
                  <ul className="mt-6 space-y-3.5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-3 border-b border-ink/[.07] pb-3.5 text-[14px] leading-relaxed text-ink-80 last:border-0 last:pb-0">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-cobalt" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-20">
              <NextPrev prev={prev} next={next} base="/solutions" />
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
