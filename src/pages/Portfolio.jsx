import { Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import { Reveal, Arrow, Tag, Button } from '../components/ui/Primitives'
import CTA from '../components/ui/CTA'
import { Seo, breadcrumbLd } from '../lib/seo'
import { portfolio } from '../data/portfolio'

export default function Portfolio() {
  const shipped = portfolio.filter((p) => p.kind === 'shipped')
  const blueprints = portfolio.filter((p) => p.kind === 'blueprint')

  const Card = ({ p, i }) => (
    <Reveal delay={(i % 2) * 0.07} className="bg-white">
      <Link to={`/portfolio/${p.slug}`} className="group flex h-full flex-col p-8 transition-colors duration-300 hover:bg-canvas">
        <div className="flex flex-wrap items-center gap-2.5">
          <Tag tone={p.kind === 'shipped' ? 'live' : 'accent'}>
            {p.kind === 'shipped' ? 'Shipped' : 'Reference architecture'}
          </Tag>
          <Tag>{p.tag}</Tag>
        </div>
        <h3 className="mt-6 font-display text-[24px] font-medium leading-[1.15] tracking-tighter2">{p.title}</h3>
        <p className="mt-2.5 text-[14px] text-ink-40">{p.subtitle}</p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink-60">{p.challenge}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-8 font-mono text-2xs uppercase tracking-[.12em] text-ink-40 transition-colors group-hover:text-cobalt">
          How it is built <Arrow className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  )

  return (
    <>
      <Seo jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Portfolio', path: '/portfolio' }])} />
      <PageHeader
        eyebrow="Portfolio"
        title={<>What we build, <span className="em-serif text-ink-40">and how.</span></>}
        sub="Platforms we have shipped and run ourselves, plus the reference architectures we deliver into client environments. Client-specific references are shared on request."
      />

      <section className="bg-white">
        <div className="wrap py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="eyebrow flex items-center gap-2.5">
                <span className="inline-block h-[5px] w-[5px] rounded-full bg-signal" />
                Shipped and running
              </div>
              <h2 className="display mt-4 text-[clamp(1.6rem,2.4vw+.8rem,2.4rem)]">Our own platforms</h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-60">
                Products we built, deployed and operate. The fastest way to judge
                how we engineer is to look at systems we had to live with.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] md:grid-cols-2">
            {shipped.map((p, i) => <Card key={p.slug} p={p} i={i} />)}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="wrap py-20 md:py-24">
          <div className="eyebrow flex items-center gap-2.5">
            <span className="inline-block h-[5px] w-[5px] rounded-full bg-cobalt" />
            Delivery blueprints
          </div>
          <h2 className="display mt-4 text-[clamp(1.6rem,2.4vw+.8rem,2.4rem)]">
            Reference architectures we deploy
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-60">
            These describe the patterns and the engineering decisions behind them,
            not named client engagements. Where a client has approved a case study,
            it appears here under their name.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] md:grid-cols-2">
            {blueprints.map((p, i) => <Card key={p.slug} p={p} i={i} />)}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl border border-ink/[.09] bg-white p-8">
              <h3 className="font-display text-[19px] font-medium tracking-tighter2">
                Evaluating us for a specific project?
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-60">
                We will walk your team through the architecture, the control
                matrix and the evaluation approach for a workflow like yours —
                and put you in touch with references where the client has agreed
                to it.
              </p>
              <Button to="/contact" variant="outline" className="mt-6">
                Request references <Arrow />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
