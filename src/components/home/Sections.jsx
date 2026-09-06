import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Reveal, Eyebrow, SectionHead, Button, Arrow, Tag } from '../ui/Primitives'
import ControlPlane from './ControlPlane'
import { solutions, deployments, process } from '../../data/solutions'
import { industries } from '../../data/industries'
import { products } from '../../data/products'
import { insights } from '../../data/insights'
import { faqGroups } from '../../data/faq'
import { stats } from '../../data/site'

/* ------------------------------------------------------- The problem we solve */

export function Positioning() {
  const rows = [
    { from: 'Blocked use case', to: 'Approved data path', note: 'Security and legal can sign off on where the data goes.' },
    { from: 'Shadow AI', to: 'Governed access', note: 'One gateway under company identity, policy and audit.' },
    { from: 'No audit trail', to: 'Per-query evidence', note: 'Who asked what, of which model, over which documents.' },
    { from: 'Permission leakage', to: 'ACL-aware retrieval', note: 'Retrieval inherits the permissions the source already carries.' },
    { from: 'Model sprawl', to: 'Policy-based routing', note: 'Different data classes, different models, one control plane.' },
    { from: 'Stalled proof-of-concept', to: 'Production system', note: 'Owned, monitored, evaluated and supported after launch.' },
  ]

  return (
    <section className="relative bg-white">
      <div className="wrap py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <Eyebrow>The real bottleneck</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.9rem,3.2vw+.8rem,3.25rem)]">
              AI adoption is not the hard part.{' '}
              <span className="em-serif text-ink-40">Approval is.</span>
            </h2>
            <p className="lede mt-7">
              Enterprise AI projects rarely fail because a model cannot generate
              text. They stall when the organisation has to answer where the
              data goes, who is allowed to see what came back, and who owns the
              system on the day it breaks.
            </p>
            <p className="lede mt-5">
              That layer — identity, permissions, integration, governance and
              production ownership — is what we build.
            </p>
            <Button to="/insights/why-enterprise-ai-projects-stall-before-production" variant="outline" className="mt-9">
              Read the breakdown <Arrow />
            </Button>
          </Reveal>

          <div className="lg:pt-2">
            {rows.map((r, i) => (
              <Reveal key={r.from} delay={i * 0.05}>
                <div className="group grid grid-cols-[1fr_auto_1.25fr] items-start gap-3 border-b border-ink/[.08] py-5 md:gap-6">
                  <div className="pt-px text-[14px] text-ink-40 line-through decoration-ink-20 md:text-[15px]">
                    {r.from}
                  </div>
                  <Arrow className="mt-1.5 h-3.5 w-3.5 shrink-0 text-ink-20 transition-colors group-hover:text-cobalt" />
                  <div>
                    <div className="text-[14px] font-medium tracking-[-.015em] text-ink md:text-[15px]">{r.to}</div>
                    <div className="mt-1 text-[12.5px] leading-snug text-ink-60">{r.note}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- Capabilities */

export function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-canvas">
      <div className="wrap py-24 md:py-32">
        <Reveal>
          <SectionHead
            eyebrow="What we do"
            title={<>End to end, and <span className="em-serif text-ink-40">secure at every step.</span></>}
            sub="Eight pillars covering the whole path from an idea nobody has approved yet to a system your team runs in production."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <Link
              key={s.slug}
              to={`/solutions/${s.slug}`}
              className="group relative flex flex-col bg-white p-7 transition-colors duration-300 hover:bg-cobalt-50"
            >
              <motion.div
                className="flex flex-1 flex-col"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
              >
                <span className="font-mono text-2xs tracking-[.14em] text-ink-40 transition-colors group-hover:text-cobalt">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-[19px] font-medium leading-[1.2] tracking-tighter2 text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-60">{s.short}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-8 font-mono text-2xs uppercase tracking-[.12em] text-ink-40 transition-colors group-hover:text-cobalt">
                  Explore <Arrow className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- Architecture */

export function Architecture() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-ink/[.08]" />
      <div className="wrap py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>Reference architecture</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.9rem,3.2vw+.8rem,3.25rem)]">
                The secure AI <span className="em-serif text-cobalt">control plane.</span>
              </h2>
              <p className="lede mt-7">
                We separate enterprise control from the model deliberately. The
                model will change — probably several times. Your identity,
                policy, permission and audit requirements will not.
              </p>
              <div className="mt-8 rounded-xl border border-ink/[.09] bg-canvas p-6">
                <p className="text-[15px] leading-relaxed text-ink-80">
                  <span className="font-medium text-ink">The model becomes replaceable.</span>{' '}
                  Governance, integration, permissions and security become the
                  part that compounds.
                </p>
              </div>
              <Button to="/solutions/private-secure-ai" variant="outline" className="mt-8">
                How it is built <Arrow />
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ControlPlane />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- Flagship */

export function Flagship() {
  const p = products.find((x) => x.flagship)
  if (!p) return null

  return (
    <section className="relative bg-canvas">
      <div className="wrap py-24 md:py-32">
        <div className="overflow-hidden rounded-3xl border border-ink/[.09] bg-white">
          <div className="grid lg:grid-cols-[1.1fr_.9fr]">
            <div className="p-8 md:p-14">
              <Reveal>
                <div className="flex flex-wrap items-center gap-3">
                  <Tag tone="accent">Flagship solution</Tag>
                  <Tag tone="live">Available now</Tag>
                </div>
                <h2 className="display mt-7 text-[clamp(1.9rem,3vw+.8rem,3rem)]">{p.name}</h2>
                <p className="lede mt-5">{p.tagline}</p>
                <p className="mt-6 text-[15.5px] leading-relaxed text-ink-60">{p.description}</p>

                <ul className="mt-9 space-y-3.5">
                  {p.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex gap-3.5 text-[14.5px] leading-relaxed text-ink-80">
                      <svg viewBox="0 0 16 16" fill="none" className="mt-1 h-3.5 w-3.5 shrink-0 text-cobalt">
                        <path d="M3 8.5 6.2 11.7 13 4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Button to={`/products/${p.slug}`}>
                    Explore the copilot <Arrow />
                  </Button>
                  <Button to="/book" variant="outline">Book a demo</Button>
                </div>
              </Reveal>
            </div>

            <div className="relative border-t border-ink/[.09] bg-canvas p-8 md:p-14 lg:border-l lg:border-t-0">
              <Reveal delay={0.1}>
                <div className="eyebrow">Deployed per vertical</div>
                <div className="mt-6 space-y-px overflow-hidden rounded-xl border border-ink/[.09] bg-ink/[.09]">
                  {p.verticals.map((v) => (
                    <div key={v.sector} className="group flex items-baseline justify-between gap-4 bg-white px-4 py-3.5 transition-colors hover:bg-cobalt-50">
                      <span className="text-[13.5px] font-medium tracking-[-.01em] text-ink">{v.sector}</span>
                      <span className="text-right text-[12.5px] leading-snug text-ink-60">{v.use}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[13px] leading-relaxed text-ink-40">
                  Same control plane underneath. The vertical decides the corpus,
                  the evaluation set and the permission model — not the architecture.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- Process */

export function Process() {
  return (
    <section className="relative bg-white">
      <div className="wrap py-24 md:py-32">
        <Reveal>
          <SectionHead
            eyebrow="How it works"
            title={<>Five stages. <span className="em-serif text-ink-40">One control plane.</span></>}
            sub="Every system we deliver follows the same spine, whatever the workflow sitting on top of it."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] md:grid-cols-5">
          {process.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07} className="bg-white">
              <div className="group relative h-full p-7">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xs tracking-[.14em] text-cobalt">0{i + 1}</span>
                  <span className="h-px flex-1 bg-ink/[.09] transition-colors group-hover:bg-cobalt/30" />
                </div>
                <h3 className="mt-5 font-display text-[18px] font-medium tracking-tighter2">{s.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- Deployment */

export function Deployment() {
  return (
    <section className="relative bg-ink text-white">
      <div className="wrap py-24 md:py-32">
        <Reveal>
          <SectionHead
            tone="dark"
            eyebrow="Deployment"
            title={<>Private does not <span className="em-serif text-white/45">have to mean on-premise.</span></>}
            sub="We use the minimum architecture your risk profile actually requires — then design so the boundary can move later without rebuilding the application."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-5">
          {deployments.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.06} className="bg-ink">
              <div className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-white/[.04]">
                <span className="font-mono text-2xs tracking-[.14em] text-white/35">0{i + 1}</span>
                <h3 className="mt-5 font-display text-[17px] font-medium leading-[1.25] tracking-tighter2 text-white">
                  {d.name}
                </h3>
                <p className="mt-4 text-[13px] leading-relaxed text-white/50">{d.fit}</p>
                <div className="mt-auto border-t border-white/10 pt-4 text-[13px] leading-relaxed text-white/70">
                  {d.role}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- Industries */

export function Industries() {
  return (
    <section className="relative bg-canvas">
      <div className="wrap py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Where we work</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.9rem,3.2vw+.8rem,3.25rem)]">
              Regulated and <span className="em-serif text-ink-40">IP-sensitive.</span>
            </h2>
            <p className="lede mt-7">
              Organisations with real AI ambition and real constraints — where
              the data genuinely matters and the security question genuinely
              has to be answered.
            </p>
            <div className="mt-9 rounded-xl border border-ink/[.09] bg-white p-6">
              <p className="text-[14px] leading-relaxed text-ink-60">
                Sector not listed? The constraint we solve — sensitive data that
                cannot leave an approved boundary — is not unique to these.
              </p>
              <Button to="/contact" variant="outline" size="sm" className="mt-5">
                Tell us your constraint <Arrow />
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] sm:grid-cols-2">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 2) * 0.06} className="bg-white">
                <div className="group h-full p-6 transition-colors duration-300 hover:bg-cobalt-50">
                  <h3 className="font-display text-[16px] font-medium tracking-tighter2 text-ink">{ind.name}</h3>
                  <p className="mt-2.5 font-mono text-2xs uppercase tracking-[.1em] text-cobalt">{ind.workflow}</p>
                  <p className="mt-3.5 text-[13px] leading-relaxed text-ink-60">{ind.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ Stats */

export function Stats() {
  return (
    <section className="relative bg-white">
      <div className="wrap border-y border-ink/[.09] py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className="flex gap-4">
                <span className="display tnum text-[44px] leading-none text-cobalt">{s.value}</span>
                <p className="max-w-[22ch] pt-1 text-[13.5px] leading-snug text-ink-60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------- Products & accelerators */

export function ProductsStrip() {
  const shown = products.filter((p) => !p.flagship).slice(0, 5)
  return (
    <section className="relative bg-white">
      <div className="wrap py-24 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="Products & accelerators"
              title={<>Proof, not the <span className="em-serif text-ink-40">whole story.</span></>}
              sub="Products we have built and run ourselves. They shorten delivery on client work and demonstrate the patterns we deploy inside enterprises."
            />
            <Button to="/products" variant="outline">
              All products <Arrow />
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06} className="bg-white">
              <Link to={`/products/${p.slug}`} className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-canvas">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[19px] font-medium tracking-tighter2">{p.name}</span>
                  <Tag tone="live">{p.status}</Tag>
                </div>
                <p className="mt-3.5 text-[14px] leading-relaxed text-ink-60">{p.tagline}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-7 font-mono text-2xs uppercase tracking-[.12em] text-ink-40 transition-colors group-hover:text-cobalt">
                  Details <Arrow className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={0.2} className="bg-canvas">
            <Link to="/rnd" className="group flex h-full flex-col justify-between p-7 transition-colors duration-300 hover:bg-cobalt-50">
              <div>
                <Tag tone="dev">In development</Tag>
                <p className="mt-5 font-display text-[19px] font-medium leading-[1.2] tracking-tighter2">
                  R&amp;D Lab
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-60">
                  What we are building next. Research and in-progress work, kept
                  strictly separate from anything you can deploy today.
                </p>
              </div>
              <span className="mt-7 inline-flex items-center gap-1.5 font-mono text-2xs uppercase tracking-[.12em] text-cobalt">
                Enter the lab <Arrow className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- FAQ preview */

export function FaqPreview() {
  const picked = [faqGroups[1].items[1], faqGroups[1].items[2], faqGroups[0].items[1], faqGroups[3].items[1]]
  return (
    <section className="relative bg-canvas">
      <div className="wrap py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Questions we get</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.9rem,3.2vw+.8rem,3.25rem)]">
              Straight <span className="em-serif text-ink-40">answers.</span>
            </h2>
            <p className="lede mt-7">
              The questions security teams, platform leads and business owners
              actually ask us in the first meeting.
            </p>
            <Button to="/faq" variant="outline" className="mt-8">
              Read all 24 <Arrow />
            </Button>
          </Reveal>

          <div className="divide-y divide-ink/[.09] border-y border-ink/[.09]">
            {picked.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="py-7">
                  <h3 className="font-display text-[17px] font-medium leading-snug tracking-tighter2 text-ink">{f.q}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-60">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- Insights */

export function InsightsStrip() {
  return (
    <section className="relative bg-white">
      <div className="wrap py-24 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="Insights"
              title={<>Writing from the <span className="em-serif text-ink-40">delivery floor.</span></>}
            />
            <Button to="/insights" variant="outline">
              All insights <Arrow />
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] md:grid-cols-3">
          {insights.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.07} className="bg-white">
              <Link to={`/insights/${a.slug}`} className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-canvas">
                <div className="flex items-center gap-3 font-mono text-2xs uppercase tracking-[.12em] text-ink-40">
                  <span className="text-cobalt">{a.topic}</span>
                  <span>·</span>
                  <span>{a.read}</span>
                </div>
                <h3 className="mt-5 font-display text-[19px] font-medium leading-[1.25] tracking-tighter2 text-ink">
                  {a.title}
                </h3>
                <p className="mt-3.5 text-[14px] leading-relaxed text-ink-60">{a.dek}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-7 font-mono text-2xs uppercase tracking-[.12em] text-ink-40 transition-colors group-hover:text-cobalt">
                  Read <Arrow className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
