import { Navigate, useParams, Link } from 'react-router-dom'
import PageHeader, { NextPrev } from '../components/ui/PageHeader'
import { Reveal, Eyebrow, Tag, Button, Arrow } from '../components/ui/Primitives'
import CTA from '../components/ui/CTA'
import { Seo } from '../lib/seo'
import { portfolio, portfolioBySlug } from '../data/portfolio'

export default function PortfolioDetail() {
  const { slug } = useParams()
  const p = portfolioBySlug(slug)
  if (!p) return <Navigate to="/portfolio" replace />
  const idx = portfolio.findIndex((x) => x.slug === slug)

  return (
    <>
      <Seo />
      <PageHeader
        eyebrow={p.kind === 'shipped' ? 'Shipped platform' : 'Reference architecture'}
        title={p.title}
        sub={p.subtitle}
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
          { name: p.title, path: `/portfolio/${p.slug}` },
        ]}
        aside={
          <div className="rounded-xl border border-ink/[.09] bg-white p-6">
            <div className="flex flex-wrap gap-2.5">
              <Tag tone={p.kind === 'shipped' ? 'live' : 'accent'}>
                {p.kind === 'shipped' ? 'Shipped' : 'Blueprint'}
              </Tag>
              <Tag>{p.tag}</Tag>
            </div>
            {p.link ? (
              <Button to={p.link} size="sm" className="mt-5">Product page <Arrow /></Button>
            ) : (
              <Button to="/book" size="sm" className="mt-5">Discuss this pattern <Arrow /></Button>
            )}
          </div>
        }
      />

      <section className="bg-white">
        <div className="wrap py-20 md:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>The challenge</Eyebrow>
                <p className="mt-6 text-[19px] leading-[1.62] tracking-[-.011em] text-ink-80">{p.challenge}</p>
              </Reveal>
              <Reveal delay={0.07}>
                <div className="mt-12">
                  <Eyebrow>The approach</Eyebrow>
                  <p className="mt-6 text-[16px] leading-[1.72] text-ink-60">{p.approach}</p>
                </div>
              </Reveal>
              <Reveal delay={0.09}>
                <div className="mt-12">
                  <Eyebrow>Engineering decisions that mattered</Eyebrow>
                  <ul className="mt-6 space-y-4">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3.5 text-[15.5px] leading-relaxed text-ink-80">
                        <svg viewBox="0 0 16 16" fill="none" className="mt-[5px] h-3.5 w-3.5 shrink-0 text-cobalt">
                          <path d="M3 8.5 6.2 11.7 13 4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {p.kind === 'blueprint' && (
                <Reveal delay={0.1}>
                  <p className="mt-12 rounded-xl border border-ink/[.09] bg-canvas p-6 text-[14px] leading-relaxed text-ink-60">
                    This describes a pattern we build, not a named client
                    engagement. Where a client has approved a case study it is
                    published under their name — ask us for references relevant
                    to your sector.
                  </p>
                </Reveal>
              )}
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-ink/[.09] bg-canvas p-7 md:p-8">
                  <Eyebrow>Stack</Eyebrow>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full border border-ink/10 bg-white px-3 py-1.5 text-[13px] text-ink-80">
                        {s}
                      </span>
                    ))}
                  </div>
                  <Link to="/solutions" className="mt-8 inline-flex items-center gap-2 text-[14.5px] font-medium text-cobalt">
                    How we deliver <Arrow />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-20">
              <NextPrev prev={portfolio[idx - 1]} next={portfolio[idx + 1]} base="/portfolio" />
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}
