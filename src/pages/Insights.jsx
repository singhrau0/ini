import { Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import { Reveal, Arrow } from '../components/ui/Primitives'
import CTA from '../components/ui/CTA'
import { Seo, breadcrumbLd } from '../lib/seo'
import { insights } from '../data/insights'

const fmt = (d) =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

export default function Insights() {
  const [lead, ...rest] = insights

  return (
    <>
      <Seo jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }])} />
      <PageHeader
        eyebrow="Insights"
        title={<>Writing from the <span className="em-serif text-ink-40">delivery floor.</span></>}
        sub="What we have learned getting enterprise AI through security review and into production. No predictions, no vendor talking points."
      />

      <section className="bg-white">
        <div className="wrap py-20 md:py-24">
          <Reveal>
            <Link
              to={`/insights/${lead.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-ink/[.09] transition-colors hover:border-ink/20 lg:grid-cols-[1.2fr_.8fr]"
            >
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 font-mono text-2xs uppercase tracking-[.12em] text-ink-40">
                  <span className="text-cobalt">{lead.topic}</span>
                  <span>·</span>
                  <span>{lead.read}</span>
                  <span>·</span>
                  <span>{fmt(lead.date)}</span>
                </div>
                <h2 className="display mt-7 text-[clamp(1.9rem,3vw+.8rem,2.9rem)]">{lead.title}</h2>
                <p className="lede mt-5 max-w-2xl">{lead.dek}</p>
                <span className="mt-9 inline-flex items-center gap-2 text-[15px] font-medium text-cobalt">
                  Read the article
                  <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
              <div className="relative hidden items-center justify-center border-l border-ink/[.09] bg-canvas p-12 lg:flex">
                <div className="dot-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000,transparent)]" />
                <span className="display relative text-[clamp(3rem,7vw,5rem)] text-ink-20">01</span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] md:grid-cols-2">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 2) * 0.06} className="bg-white">
                <Link to={`/insights/${a.slug}`} className="group flex h-full flex-col p-8 transition-colors duration-300 hover:bg-canvas">
                  <div className="flex items-center gap-3 font-mono text-2xs uppercase tracking-[.12em] text-ink-40">
                    <span className="text-cobalt">{a.topic}</span>
                    <span>·</span>
                    <span>{a.read}</span>
                  </div>
                  <h3 className="mt-5 font-display text-[22px] font-medium leading-[1.2] tracking-tighter2">{a.title}</h3>
                  <p className="mt-3.5 text-[14.5px] leading-relaxed text-ink-60">{a.dek}</p>
                  <span className="mt-auto flex items-center justify-between pt-8 font-mono text-2xs uppercase tracking-[.12em] text-ink-40">
                    {fmt(a.date)}
                    <Arrow className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
