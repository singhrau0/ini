import PageHeader from '../components/ui/PageHeader'
import { Reveal, Eyebrow, Button, Arrow, Tag } from '../components/ui/Primitives'
import CTA from '../components/ui/CTA'
import { Seo } from '../lib/seo'
import { openRoles, values, capabilities } from '../data/team'
import { site } from '../data/site'

export default function Careers() {
  return (
    <>
      <Seo />
      <PageHeader
        eyebrow="Careers"
        title={<>Build systems that <span className="em-serif text-ink-40">actually ship.</span></>}
        sub="Small team, real production systems, and problems where the interesting constraint is usually security or scale rather than the model itself."
      />

      <section className="bg-white">
        <div className="wrap py-20 md:py-24">
          <Reveal>
            <Eyebrow>Open roles</Eyebrow>
            <h2 className="display mt-5 max-w-2xl text-[clamp(1.8rem,3vw+.8rem,2.6rem)]">
              Where we need people right now.
            </h2>
          </Reveal>

          <div className="mt-12 divide-y divide-ink/[.09] border-y border-ink/[.09]">
            {openRoles.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(`Application — ${r.title}`)}`}
                  className="group grid gap-4 py-7 md:grid-cols-[1.1fr_1.2fr_auto] md:items-center md:gap-8"
                >
                  <div>
                    <h3 className="font-display text-[20px] font-medium tracking-tighter2 transition-colors group-hover:text-cobalt">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 font-mono text-2xs uppercase tracking-[.12em] text-ink-40">{r.type}</p>
                  </div>
                  <p className="text-[14.5px] leading-relaxed text-ink-60">{r.detail}</p>
                  <span className="inline-flex items-center gap-2 text-[14px] font-medium text-cobalt">
                    Apply <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-ink/[.09] bg-canvas p-7">
              <p className="text-[15px] leading-relaxed text-ink-60">
                Nothing here fits but you think you should be on this team? Send
                us something you have built and a paragraph on why.{' '}
                <a href={`mailto:${site.email}`} className="font-medium text-cobalt hover:underline">
                  {site.email}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="wrap py-20 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <Eyebrow>How we work</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.8rem,3vw+.8rem,2.6rem)]">
                What you would be signing up to.
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

      <section className="bg-white">
        <div className="wrap py-20 md:py-24">
          <Reveal>
            <Eyebrow>Stack</Eyebrow>
            <h2 className="display mt-5 max-w-2xl text-[clamp(1.8rem,3vw+.8rem,2.6rem)]">
              What you would work with.
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-2.5">
            {Object.values(capabilities).flat().map((c) => (
              <span key={c} className="rounded-full border border-ink/10 bg-canvas px-3.5 py-1.5 text-[13.5px] text-ink-80">
                {c}
              </span>
            ))}
          </div>
          <div className="mt-12">
            <Tag>Hyderabad · Remote-friendly</Tag>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Talk to us"
        title={<>Not looking, but <span className="em-serif text-white/70">curious?</span></>}
        body="We would rather have a conversation now than a rushed hiring process later. If the work sounds like yours, get in touch."
        primary={{ label: 'Email the team', to: '/contact' }}
        secondary={null}
      />
    </>
  )
}
