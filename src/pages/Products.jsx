import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHeader from '../components/ui/PageHeader'
import { Reveal, Button, Arrow, Tag } from '../components/ui/Primitives'
import CTA from '../components/ui/CTA'
import { Seo, breadcrumbLd } from '../lib/seo'
import { products, productCategories } from '../data/products'

export default function Products() {
  const [filter, setFilter] = useState('all')
  const flagship = products.find((p) => p.flagship)
  const rest = products.filter((p) => !p.flagship)
  const shown = filter === 'all' ? rest : rest.filter((p) => p.category === filter)

  return (
    <>
      <Seo jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }])} />
      <PageHeader
        eyebrow="Products"
        title={<>Available <span className="em-serif text-ink-40">today.</span></>}
        sub="Everything on this page is built, running and deployable now. Work still in development lives in the R&D Lab and never appears here."
        aside={
          <Link
            to="/rnd"
            className="group flex items-center justify-between gap-4 rounded-xl border border-ink/[.09] bg-white p-5 transition-colors hover:border-ink/25"
          >
            <div>
              <div className="font-mono text-2xs uppercase tracking-[.12em] text-amber">In development</div>
              <p className="mt-2 text-[14px] font-medium tracking-[-.01em]">Looking for the R&amp;D Lab?</p>
            </div>
            <Arrow className="h-4 w-4 text-ink-40 transition-transform group-hover:translate-x-1" />
          </Link>
        }
      />

      {/* flagship */}
      {flagship && (
        <section className="bg-white">
          <div className="wrap py-16 md:py-20">
            <Reveal>
              <Link
                to={`/products/${flagship.slug}`}
                className="group grid overflow-hidden rounded-3xl border border-ink/[.09] transition-colors hover:border-ink/20 lg:grid-cols-[1.15fr_.85fr]"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-3">
                    <Tag tone="accent">Flagship</Tag>
                    <Tag tone="live">{flagship.status}</Tag>
                  </div>
                  <h2 className="display mt-7 text-[clamp(1.9rem,3vw+.8rem,2.9rem)]">{flagship.name}</h2>
                  <p className="lede mt-5">{flagship.tagline}</p>
                  <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-60">{flagship.problem}</p>
                  <span className="mt-9 inline-flex items-center gap-2 text-[15px] font-medium text-cobalt">
                    Explore the copilot
                    <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
                <div className="border-t border-ink/[.09] bg-canvas p-8 md:p-12 lg:border-l lg:border-t-0">
                  <div className="eyebrow">Key controls</div>
                  <ul className="mt-6 space-y-3.5">
                    {flagship.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex gap-3 text-[14px] leading-relaxed text-ink-80">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-cobalt" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* filter + grid */}
      <section className="bg-canvas">
        <div className="wrap py-16 md:py-24">
          <div className="flex flex-wrap items-center gap-2">
            {[{ id: 'all', label: 'Everything' }, ...productCategories].map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`relative isolate rounded-full px-4 py-2 text-[13.5px] font-medium tracking-[-.01em] transition-colors ${
                  filter === c.id ? 'text-white' : 'text-ink-60 hover:text-ink'
                }`}
              >
                {filter === c.id && (
                  <motion.span
                    layoutId="product-filter"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{c.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] md:grid-cols-2">
            {shown.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.06} className="bg-white">
                <Link to={`/products/${p.slug}`} className="group flex h-full flex-col p-8 transition-colors duration-300 hover:bg-canvas">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Tag tone="live">{p.status}</Tag>
                    {p.category === 'automation' && <Tag>Sub-category</Tag>}
                  </div>
                  <h3 className="mt-6 font-display text-[24px] font-medium leading-[1.15] tracking-tighter2">{p.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-60">{p.tagline}</p>
                  <p className="mt-5 text-[14px] leading-relaxed text-ink-40">{p.problem}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-8 font-mono text-2xs uppercase tracking-[.12em] text-ink-40 transition-colors group-hover:text-cobalt">
                    Full detail <Arrow className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          {shown.length === 0 && (
            <p className="mt-10 text-[15px] text-ink-60">Nothing in that category yet.</p>
          )}

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl border border-ink/[.09] bg-white p-7 md:p-9">
              <h3 className="font-display text-[19px] font-medium tracking-tighter2">
                None of these is quite your problem?
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-60">
                Most of our work is custom. These products exist because we built
                them for a specific need, and they now shorten delivery on client
                engagements — but the usual starting point is your workflow, not
                our catalogue.
              </p>
              <Button to="/solutions" variant="outline" className="mt-6">
                See how we build custom <Arrow />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
