import PageHeader from '../components/ui/PageHeader'
import { Reveal, Eyebrow, Button, Arrow } from '../components/ui/Primitives'
import CTA from '../components/ui/CTA'
import { Seo, organizationLd } from '../lib/seo'
import { values } from '../data/team'
import { ladder } from '../data/solutions'

const identities = [
  {
    title: 'Enterprise AI engineering',
    body: 'We build the application, the agent, the retrieval system and the integrations end to end. This is the majority of the work and it keeps the addressable problem broad.',
  },
  {
    title: 'Secure AI enablement',
    body: 'We make sensitive workflows fit enterprise security, data and governance boundaries. This is the part that gets projects through review instead of leaving them there.',
  },
  {
    title: 'Products and accelerators',
    body: 'We build and run our own products. They prove the patterns work and they shorten delivery on client engagements.',
  },
]

const notList = [
  'A company whose pitch is "we will install a model on your server". That is a feature, not an architecture.',
  'A fear-based consultancy claiming every enterprise use of a hosted model leaks your data. Often it does not, and we will say so.',
  'A security-only firm that has given up building the actual system.',
  'A generic agency that will build any AI app without a view on whether it should exist.',
  'A hardware reseller carrying GPU capital expenditure on your behalf.',
  'A free proof-of-concept factory. One production reference is worth more than a shelf of demos.',
]

export default function About() {
  return (
    <>
      <Seo jsonLd={organizationLd} />
      <PageHeader
        eyebrow="About"
        title={<>An AI company that takes <span className="em-serif text-ink-40">the boring parts seriously.</span></>}
        sub="iNikola is an enterprise AI engineering and secure AI enablement company. We identify the AI workflows worth building, design the architecture that will get approved, build the system, secure it, deploy it inside your boundary and keep it running."
      />

      <section className="bg-white">
        <div className="wrap py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Why we exist</Eyebrow>
              <div className="mt-6 space-y-5">
                <p className="text-[19px] leading-[1.62] tracking-[-.011em] text-ink-80">
                  Enterprise AI has an odd shape to it. The demo is easy and the
                  production system is hard, and the difficulty is almost never
                  where people expect.
                </p>
                <p className="text-[16px] leading-[1.72] text-ink-60">
                  Teams can build a convincing prototype in a fortnight. Then it
                  meets an organisation that has to answer where the data goes,
                  who is allowed to see what came back, what the system can
                  actually do to production systems, and who owns it when it
                  breaks at nine on a Monday morning.
                </p>
                <p className="text-[16px] leading-[1.72] text-ink-60">
                  Those questions are answerable. They are just not answerable
                  by a prototype that was never designed with them in mind. We
                  build for those questions from the first architecture
                  conversation, which is the whole reason the company exists in
                  its current form.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-ink/[.09] bg-canvas p-8 md:p-10">
                <Eyebrow>Three identities, one company</Eyebrow>
                <div className="mt-7 space-y-7">
                  {identities.map((id, i) => (
                    <div key={id.title} className={i > 0 ? 'border-t border-ink/[.08] pt-7' : ''}>
                      <h3 className="font-display text-[18px] font-medium tracking-tighter2">{id.title}</h3>
                      <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-60">{id.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="wrap py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Principles</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.8rem,3vw+.8rem,2.8rem)]">
                What we will not <span className="em-serif text-ink-40">trade away.</span>
              </h2>
            </Reveal>
            <div className="divide-y divide-ink/[.09] border-y border-ink/[.09]">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.05}>
                  <div className="py-7">
                    <h3 className="font-display text-[18px] font-medium tracking-tighter2">{v.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-60">{v.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="wrap py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <Eyebrow className="!text-white/50">Positioning</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.8rem,3vw+.8rem,2.8rem)] text-white">
                What we are <span className="em-serif text-white/45">not.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-white/55">
                Being specific about this saves everybody time, including us.
              </p>
            </Reveal>
            <div className="space-y-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {notList.map((n) => (
                <div key={n} className="flex gap-4 bg-ink p-6">
                  <span className="mt-2 h-px w-5 shrink-0 bg-white/25" />
                  <p className="text-[14.5px] leading-relaxed text-white/65">{n}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap py-20 md:py-28">
          <Reveal>
            <Eyebrow>How engagements grow</Eyebrow>
            <h2 className="display mt-5 max-w-2xl text-[clamp(1.8rem,3vw+.8rem,2.8rem)]">
              Start small on purpose.
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-60">
              Nobody should commit to a platform programme before a single
              workflow has proven it can be approved. The ladder below is how
              almost every engagement runs.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] sm:grid-cols-2 lg:grid-cols-3">
            {ladder.map((l, i) => (
              <Reveal key={l.stage} delay={(i % 3) * 0.06} className="bg-white">
                <div className="h-full p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-2xs uppercase tracking-[.12em] text-ink-40">{l.stage}</span>
                    <span className="font-mono text-2xs uppercase tracking-[.1em] text-cobalt">{l.price}</span>
                  </div>
                  <h3 className="mt-4 text-[15px] font-medium tracking-[-.015em]">{l.offer}</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-ink-60">{l.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="/team" variant="outline">Meet the team <Arrow /></Button>
              <Button to="/portfolio" variant="outline">See the work <Arrow /></Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
