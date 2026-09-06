import { Navigate, useParams, Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import { Reveal, Arrow, Button } from '../components/ui/Primitives'
import CTA from '../components/ui/CTA'
import { Seo, articleLd } from '../lib/seo'
import { insights, insightBySlug } from '../data/insights'

const fmt = (d) =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2>{block.text}</h2>
    case 'p':
      return <p>{block.text}</p>
    case 'ul':
      return (
        <ul>
          {block.items.map((it) => <li key={it}>{it}</li>)}
        </ul>
      )
    case 'quote':
      return (
        <blockquote className="my-10 border-l-2 border-cobalt pl-6">
          <p className="!mb-0 font-display text-[20px] font-medium leading-[1.45] tracking-tighter2 !text-ink md:text-[23px]">
            {block.text}
          </p>
        </blockquote>
      )
    case 'callout':
      return (
        <div className="my-9 rounded-xl border border-cobalt/20 bg-cobalt-50 p-6">
          <p className="!mb-0 text-[15.5px] leading-relaxed !text-ink-80">{block.text}</p>
        </div>
      )
    case 'table':
      return (
        <div className="my-9 overflow-x-auto rounded-xl border border-ink/[.09]">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="bg-canvas">
                {block.head.map((h) => (
                  <th key={h} className="border-b border-ink/[.09] px-5 py-3.5 font-mono text-2xs uppercase tracking-[.12em] text-ink-60">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={i > 0 ? 'border-t border-ink/[.07]' : ''}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-5 py-4 align-top text-[14px] leading-relaxed ${j === 0 ? 'font-medium text-ink' : 'text-ink-60'}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

export default function InsightDetail() {
  const { slug } = useParams()
  const a = insightBySlug(slug)
  if (!a) return <Navigate to="/insights" replace />

  const related = insights.filter((x) => x.slug !== slug).slice(0, 2)

  return (
    <>
      <Seo type="article" jsonLd={articleLd(a)} />
      <PageHeader
        eyebrow={`${a.topic} · ${a.read}`}
        title={a.title}
        sub={a.dek}
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
          { name: a.topic, path: '/insights' },
        ]}
      />

      <article className="bg-white">
        <div className="wrap py-16 md:py-24">
          <div className="mx-auto max-w-[46rem]">
            <div className="mb-12 flex items-center gap-3 border-b border-ink/[.09] pb-6 font-mono text-2xs uppercase tracking-[.12em] text-ink-40">
              <span>Published {fmt(a.date)}</span>
              <span>·</span>
              <span>iNikola engineering</span>
            </div>

            <Reveal>
              <div className="prose-inikola">
                {a.body.map((block, i) => <Block key={i} block={block} />)}
              </div>
            </Reveal>

            <div className="mt-14 rounded-2xl border border-ink/[.09] bg-canvas p-7 md:p-8">
              <h3 className="font-display text-[19px] font-medium tracking-tighter2">
                Working through this in your own environment?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-60">
                Bring us the specific workflow. Thirty minutes, no deck — we will
                tell you what stands between it and production.
              </p>
              <Button to="/book" className="mt-6">Book a review <Arrow /></Button>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-canvas">
        <div className="wrap py-16 md:py-20">
          <div className="eyebrow">Keep reading</div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] md:grid-cols-2">
            {related.map((r) => (
              <Link key={r.slug} to={`/insights/${r.slug}`} className="group bg-white p-7 transition-colors hover:bg-canvas">
                <div className="font-mono text-2xs uppercase tracking-[.12em] text-cobalt">{r.topic}</div>
                <h3 className="mt-4 font-display text-[19px] font-medium leading-snug tracking-tighter2 transition-colors group-hover:text-cobalt">
                  {r.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-60">{r.dek}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
