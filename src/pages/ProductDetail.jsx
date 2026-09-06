import { Navigate, useParams } from 'react-router-dom'
import PageHeader, { NextPrev } from '../components/ui/PageHeader'
import { Reveal, Button, Arrow, Eyebrow, Tag } from '../components/ui/Primitives'
import CTA from '../components/ui/CTA'
import { Seo } from '../lib/seo'
import { site } from '../data/site'
import { products, productBySlug } from '../data/products'

export default function ProductDetail() {
  const { slug } = useParams()
  const p = productBySlug(slug)
  if (!p) return <Navigate to="/products" replace />

  const idx = products.findIndex((x) => x.slug === slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: p.name,
    applicationCategory: 'BusinessApplication',
    description: p.description,
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    publisher: { '@type': 'Organization', name: site.name, url: site.domain },
  }

  return (
    <>
      <Seo jsonLd={ld} />
      <PageHeader
        eyebrow={p.flagship ? 'Flagship product' : 'Product'}
        title={p.name}
        sub={p.tagline}
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
          { name: p.name, path: `/products/${p.slug}` },
        ]}
        aside={
          <div className="rounded-xl border border-ink/[.09] bg-white p-6">
            <Tag tone="live">{p.status}</Tag>
            <p className="mt-4 text-[14px] leading-relaxed text-ink-60">
              Available now. See it running against your own scenario.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <Button to="/book" size="sm">Book a demo <Arrow /></Button>
              {p.brochure && (
                <Button href={p.brochure} download variant="outline" size="sm">Brochure</Button>
              )}
            </div>
          </div>
        }
      />

      <section className="bg-white">
        <div className="wrap py-20 md:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>The problem</Eyebrow>
                <p className="mt-6 text-[19px] leading-[1.62] tracking-[-.011em] text-ink-80">{p.problem}</p>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="mt-12">
                  <Eyebrow>What it is</Eyebrow>
                  <p className="mt-6 text-[16px] leading-[1.72] text-ink-60">{p.description}</p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-12">
                  <Eyebrow>Outcomes</Eyebrow>
                  <ul className="mt-6 space-y-4">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex gap-3.5 text-[15.5px] leading-relaxed text-ink-80">
                        <svg viewBox="0 0 16 16" fill="none" className="mt-[5px] h-3.5 w-3.5 shrink-0 text-cobalt">
                          <path d="M3 8.5 6.2 11.7 13 4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {p.verticals && (
                <Reveal delay={0.1}>
                  <div className="mt-14">
                    <Eyebrow>By vertical</Eyebrow>
                    <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-ink/[.09] bg-ink/[.09] sm:grid-cols-2">
                      {p.verticals.map((v) => (
                        <div key={v.sector} className="bg-white p-5">
                          <div className="text-[14px] font-medium tracking-[-.01em]">{v.sector}</div>
                          <div className="mt-1.5 text-[13px] leading-relaxed text-ink-60">{v.use}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {p.gallery && (
                <Reveal delay={0.1}>
                  <div className="mt-14">
                    <Eyebrow>Hardware</Eyebrow>
                    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                      {p.gallery.map((g) => (
                        <figure key={g.src} className="overflow-hidden rounded-xl border border-ink/[.09] bg-ink">
                          <img
                            src={g.src}
                            alt={g.label}
                            loading="lazy"
                            decoding="async"
                            className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                          <figcaption className="border-t border-white/10 px-3 py-2 font-mono text-2xs uppercase tracking-[.1em] text-white/50">
                            {g.label}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-ink/[.09] bg-canvas p-7 md:p-8">
                  <Eyebrow>Capabilities</Eyebrow>
                  <ul className="mt-6 space-y-3.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 border-b border-ink/[.07] pb-3.5 text-[14px] leading-relaxed text-ink-80 last:border-0 last:pb-0">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-cobalt" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-20">
              <NextPrev prev={products[idx - 1]} next={products[idx + 1]} base="/products" />
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        eyebrow="Next step"
        title={<>See {p.name} against <span className="em-serif text-white/70">your own data.</span></>}
        body="We will run a scoped demo on a workflow you choose, and tell you honestly what it would take to deploy it inside your boundary."
        primary={{ label: 'Book a demo', to: '/book' }}
      />
    </>
  )
}
