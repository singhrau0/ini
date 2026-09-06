import { Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import { Reveal, Button, Arrow, Eyebrow, SectionHead } from '../components/ui/Primitives'
import ControlPlane from '../components/home/ControlPlane'
import CTA from '../components/ui/CTA'
import { Seo, breadcrumbLd } from '../lib/seo'
import { solutions, deployments, engagement, ladder } from '../data/solutions'

export default function Solutions() {
  return (
    <>
      <Seo jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions' }])} />
      <PageHeader
        eyebrow="Solutions"
        title={<>Everything between an idea and <span className="em-serif text-ink-40">a system in production.</span></>}
        sub="Eight pillars. Most engagements use three or four of them — the ones that stand between where you are and a workflow your security team will sign off."
        aside={
          <div className="rounded-xl border border-ink/[.09] bg-white p-6">
            <p className="text-[14px] leading-relaxed text-ink-60">
              Not sure which you need? Start with a 30-minute architecture review
              on one blocked workflow.
            </p>
            <Button to="/book" size="sm" className="mt-5">
              Book a review <Arrow />
            </Button>
          </div>
        }
      />

      {/* pillars */}
      <section className="bg-white">
        <div className="wrap py-20 md:py-28">
          <div className="divide-y divide-ink/[.09]">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.05}>
                <Link
                  to={`/solutions/${s.slug}`}
                  className="group grid gap-5 py-9 md:grid-cols-[auto_1.1fr_1.4fr] md:items-start md:gap-10"
                >
                  <span className="font-mono text-2xs tracking-[.14em] text-ink-40 transition-colors group-hover:text-cobalt md:pt-2">
                    {s.n}
                  </span>
                  <h2 className="font-display text-[22px] font-medium leading-[1.2] tracking-tighter2 text-ink transition-colors group-hover:text-cobalt md:text-[26px]">
                    {s.title}
                  </h2>
                  <div>
                    <p className="text-[15px] leading-relaxed text-ink-60">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-2xs uppercase tracking-[.12em] text-ink-40 transition-colors group-hover:text-cobalt">
                      Detail <Arrow className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* architecture */}
      <section className="bg-canvas">
        <div className="wrap py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <Eyebrow>Reference architecture</Eyebrow>
                <h2 className="display mt-5 text-[clamp(1.8rem,3vw+.8rem,3rem)]">
                  One control plane, <span className="em-serif text-cobalt">many use cases.</span>
                </h2>
                <p className="lede mt-7">
                  The first project pays for the control plane. Every use case
                  after it inherits the identity model, the policy layer, the
                  audit trail and the evaluation harness — which is why the
                  second copilot takes a fraction of the time the first did.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <ControlPlane />
            </Reveal>
          </div>
        </div>
      </section>

      {/* deployment */}
      <section className="bg-white">
        <div className="wrap py-20 md:py-28">
          <Reveal>
            <SectionHead
              eyebrow="Deployment boundaries"
              title={<>The cheapest architecture that <span className="em-serif text-ink-40">satisfies your policy.</span></>}
              sub="We work from the data class outwards, not from an infrastructure preference inwards."
            />
          </Reveal>
          <div className="mt-14 overflow-hidden rounded-2xl border border-ink/[.09]">
            {deployments.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.05}>
                <div className={`grid gap-4 p-7 md:grid-cols-[.8fr_1.1fr_1.1fr] md:gap-8 ${i > 0 ? 'border-t border-ink/[.09]' : ''}`}>
                  <h3 className="font-display text-[17px] font-medium tracking-tighter2">{d.name}</h3>
                  <p className="text-[14px] leading-relaxed text-ink-60">{d.fit}</p>
                  <p className="text-[14px] leading-relaxed text-ink-80">{d.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* engagement */}
      <section className="bg-ink text-white">
        <div className="wrap py-20 md:py-28">
          <Reveal>
            <SectionHead
              tone="dark"
              eyebrow="Pilot"
              title={<>One workflow. One security review. <span className="em-serif text-white/45">Four weeks.</span></>}
              sub="A pilot with agreed criteria either passes or produces a documented reason it did not. Both are more useful than an open-ended proof-of-concept."
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {engagement.map((w, i) => (
              <Reveal key={w.week} delay={i * 0.07} className="bg-ink">
                <div className="h-full p-7">
                  <span className="font-mono text-2xs uppercase tracking-[.14em] text-cobalt-400">{w.week}</span>
                  <h3 className="mt-4 font-display text-[18px] font-medium tracking-tighter2 text-white">{w.focus}</h3>
                  <p className="mt-4 text-[13px] leading-relaxed text-white/50">{w.outputs}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16">
              <div className="eyebrow !text-white/40">How engagements grow</div>
              <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                {ladder.map((l) => (
                  <div key={l.stage} className="bg-ink p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-2xs uppercase tracking-[.12em] text-white/35">{l.stage}</span>
                      <span className="font-mono text-2xs uppercase tracking-[.1em] text-cobalt-400">{l.price}</span>
                    </div>
                    <h4 className="mt-4 text-[15px] font-medium tracking-[-.015em] text-white">{l.offer}</h4>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-white/50">{l.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-2xl text-[13.5px] leading-relaxed text-white/40">
                Infrastructure and third-party licences are procured in your own
                accounts at your own commercial terms. We charge for architecture,
                implementation, controls, integration and operations — never for
                hardware resale.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
