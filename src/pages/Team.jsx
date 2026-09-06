import { useState } from 'react'
import PageHeader from '../components/ui/PageHeader'
import { Reveal, Eyebrow, Button, Arrow } from '../components/ui/Primitives'
import CTA from '../components/ui/CTA'
import { Seo, breadcrumbLd } from '../lib/seo'
import { team, values, capabilities } from '../data/team'

const initials = (name) =>
  name.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()

function Avatar({ member }) {
  const [failed, setFailed] = useState(false)
  const show = member.image && !failed
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-ink-5">
      {show ? (
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-5 to-ink-10">
          <span className="display text-3xl text-ink-40">{initials(member.name)}</span>
        </div>
      )}
    </div>
  )
}

export default function Team() {
  return (
    <>
      <Seo jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Team', path: '/team' }])} />
      <PageHeader
        eyebrow="Team"
        title={<>The people who <span className="em-serif text-ink-40">actually build it.</span></>}
        sub="AI, platform, security and edge engineers. Engagement teams are formed around the architecture a project needs, not around whoever is on the bench."
      />

      <section className="bg-white">
        <div className="wrap py-20 md:py-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 0.05}>
                <div className="group">
                  <Avatar member={m} />
                  <h3 className="mt-5 font-display text-[17px] font-medium tracking-tighter2">{m.name}</h3>
                  <p className="mt-1 text-[13.5px] text-cobalt">{m.role}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-60">{m.focus}</p>
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 font-mono text-2xs uppercase tracking-[.12em] text-ink-40 transition-colors hover:text-ink"
                    >
                      LinkedIn <Arrow className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="wrap py-20 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <Eyebrow>How we work</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.8rem,3vw+.8rem,2.8rem)]">
                Four things we <span className="em-serif text-ink-40">do not compromise on.</span>
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
            <Eyebrow>Capabilities in-house</Eyebrow>
            <h2 className="display mt-5 max-w-2xl text-[clamp(1.8rem,3vw+.8rem,2.8rem)]">
              What the team actually works with.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(capabilities).map(([group, items], i) => (
              <Reveal key={group} delay={(i % 4) * 0.05} className="bg-white">
                <div className="h-full p-6">
                  <div className="font-mono text-2xs uppercase tracking-[.12em] text-cobalt">{group}</div>
                  <ul className="mt-4 space-y-2">
                    {items.map((it) => (
                      <li key={it} className="text-[13.5px] text-ink-60">{it}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-12">
              <Button to="/careers" variant="outline">
                We are hiring <Arrow />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
