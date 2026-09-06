import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import PageHeader from '../components/ui/PageHeader'
import { Reveal, Eyebrow, Arrow } from '../components/ui/Primitives'
import CTA from '../components/ui/CTA'
import { Seo, faqLd } from '../lib/seo'
import { faqGroups, allFaqs } from '../data/faq'
import { insights } from '../data/insights'

function Item({ item, open, onToggle, id }) {
  return (
    <div className="border-b border-ink/[.09]">
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          className="flex w-full items-start justify-between gap-6 py-6 text-left"
        >
          <span className="font-display text-[17px] font-medium leading-snug tracking-tighter2 text-ink md:text-[19px]">
            {item.q}
          </span>
          <span className="relative mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center">
            <span className="absolute h-[1.5px] w-3.5 bg-ink-40" />
            <motion.span
              className="absolute h-[1.5px] w-3.5 bg-ink-40"
              animate={{ rotate: open ? 0 : 90 }}
              transition={{ duration: 0.3 }}
            />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-7 text-[15.5px] leading-[1.72] text-ink-60">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState('company-0')

  return (
    <>
      <Seo jsonLd={faqLd(allFaqs)} />
      <PageHeader
        eyebrow="FAQ"
        title={<>Questions, answered <span className="em-serif text-ink-40">without the hedging.</span></>}
        sub={`${allFaqs.length} questions security teams, platform leads and business owners ask us — grouped by what you are trying to work out.`}
        aside={
          <nav className="rounded-xl border border-ink/[.09] bg-white p-6">
            <div className="eyebrow">Jump to</div>
            <ul className="mt-4 space-y-2.5">
              {faqGroups.map((g) => (
                <li key={g.id}>
                  <a href={`#${g.id}`} className="group inline-flex items-center gap-2 text-[14px] text-ink-60 transition-colors hover:text-ink">
                    {g.title}
                    <Arrow className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        }
      />

      <section className="bg-white">
        <div className="wrap py-20 md:py-24">
          {faqGroups.map((group, gi) => (
            <div key={group.id} id={group.id} className={`scroll-mt-28 ${gi > 0 ? 'mt-20' : ''}`}>
              <Reveal>
                <Eyebrow>{`0${gi + 1}`}</Eyebrow>
                <h2 className="display mt-4 text-[clamp(1.6rem,2.4vw+.8rem,2.3rem)]">{group.title}</h2>
              </Reveal>
              <div className="mt-8 border-t border-ink/[.09]">
                {group.items.map((item, i) => {
                  const id = `${group.id}-${i}`
                  return (
                    <Item
                      key={item.q}
                      id={id}
                      item={item}
                      open={open === id}
                      onToggle={() => setOpen(open === id ? null : id)}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO depth: articles sit below the FAQ */}
      <section className="bg-canvas">
        <div className="wrap py-20 md:py-24">
          <Reveal>
            <Eyebrow>Go deeper</Eyebrow>
            <h2 className="display mt-4 max-w-2xl text-[clamp(1.6rem,2.4vw+.8rem,2.3rem)]">
              Longer answers to the harder questions.
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-ink/[.09] border-y border-ink/[.09]">
            {insights.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.04}>
                <Link to={`/insights/${a.slug}`} className="group flex items-baseline justify-between gap-6 py-6">
                  <div>
                    <h3 className="font-display text-[18px] font-medium leading-snug tracking-tighter2 transition-colors group-hover:text-cobalt">
                      {a.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-ink-60">{a.dek}</p>
                  </div>
                  <span className="hidden shrink-0 font-mono text-2xs uppercase tracking-[.12em] text-ink-40 sm:block">
                    {a.read}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Still unclear"
        title={<>Ask us the question that is <span className="em-serif text-white/70">not on this page.</span></>}
        body="If you are trying to work out whether a specific use case can be approved in your environment, describe it and we will give you a straight answer — including when the answer is that you do not need us."
      />
    </>
  )
}
