import PageHeader from '../components/ui/PageHeader'
import { Reveal, Button, Arrow, Tag, Eyebrow } from '../components/ui/Primitives'
import CTA from '../components/ui/CTA'
import { Seo, breadcrumbLd } from '../lib/seo'
import { rnd } from '../data/rnd'

export default function RnD() {
  return (
    <>
      <Seo jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'R&D', path: '/rnd' }])} />
      <PageHeader
        eyebrow="R&D Lab"
        title={<>Being built. <span className="em-serif text-ink-40">Not yet available.</span></>}
        sub="Research and in-progress work. Nothing on this page can be bought or deployed today — when something here becomes available, it moves to Products and this page stops mentioning it."
        aside={
          <div className="rounded-xl border border-amber/25 bg-amber/[.05] p-6">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              <span className="font-mono text-2xs uppercase tracking-[.14em] text-amber">In development</span>
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-ink-60">
              Looking for something you can deploy now?
            </p>
            <Button to="/products" size="sm" variant="outline" className="mt-5">
              See products <Arrow />
            </Button>
          </div>
        }
      />

      <section className="bg-white">
        <div className="wrap py-20 md:py-28">
          <div className="grid gap-8 lg:grid-cols-2">
            {rnd.map((r, i) => (
              <Reveal key={r.slug} delay={(i % 2) * 0.07}>
                <article className="card card-hover flex h-full flex-col p-8">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Tag tone="dev">{r.stage}</Tag>
                    <Tag>{r.horizon}</Tag>
                  </div>
                  <h2 className="mt-6 font-display text-[24px] font-medium leading-[1.15] tracking-tighter2">
                    {r.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-60">{r.thesis}</p>

                  <div className="mt-7 border-t border-ink/[.07] pt-6">
                    <div className="eyebrow">What we are exploring</div>
                    <ul className="mt-4 space-y-3">
                      {r.exploring.map((e) => (
                        <li key={e} className="flex gap-3 text-[14px] leading-relaxed text-ink-80">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-amber" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 rounded-2xl border border-ink/[.09] bg-canvas p-8 md:p-10">
              <Eyebrow>Why this page exists</Eyebrow>
              <p className="mt-5 max-w-3xl text-[16px] leading-[1.72] text-ink-60">
                Plenty of vendors show a roadmap slide and let the buyer assume
                it already exists. We keep a hard line instead: anything a client
                can use today is in Products, anything still being figured out is
                here, and the two are never presented together. If you are
                evaluating us and something on this page matters to your plan,
                ask — we will tell you exactly where it stands.
              </p>
              <Button to="/contact" variant="outline" className="mt-7">
                Ask about the roadmap <Arrow />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        eyebrow="Collaborate"
        title={<>Working on the same problem? <span className="em-serif text-white/70">Come talk.</span></>}
        body="We partner on research where a client has a hard constraint worth solving properly — an environment nobody can get a model into, a governance requirement nothing off the shelf meets."
        primary={{ label: 'Start a conversation', to: '/contact' }}
        secondary={{ label: 'See what ships today', to: '/products' }}
      />
    </>
  )
}
