import { useEffect } from 'react'
import LeadForm from '../components/forms/LeadForm'
import { LogoMark } from '../components/ui/Logo'
import { Reveal } from '../components/ui/Primitives'
import HeroCanvas from '../components/home/HeroCanvas'
import { Seo } from '../lib/seo'
import { site } from '../data/site'

/**
 * Unlisted paid-campaign landing page.
 * - Not in the primary navigation, the footer, or sitemap.xml
 * - noindex, nofollow (set here and in the prerendered HTML)
 * - Leads route to the same destination as every other form, tagged
 *   'ad-landing-private-ai' plus whatever UTM parameters brought them here.
 */
export default function Landing() {
  useEffect(() => {
    document.body.style.background = '#fff'
    return () => { document.body.style.background = '' }
  }, [])

  const proof = [
    { k: 'Week 1', v: 'Use-case discovery and approval blockers' },
    { k: 'Week 2', v: 'Architecture, boundary and control matrix' },
    { k: 'Week 3', v: 'Pilot built against real data' },
    { k: 'Week 4', v: 'Security review, evidence pack, KPI' },
  ]

  const answers = [
    'Where the data would actually be processed, and whether that is already permitted',
    'How retrieval is stopped from returning documents the asker cannot open',
    'What audit evidence your security team will receive',
    'Which deployment boundary this use case genuinely needs — and which it does not',
  ]

  return (
    <>
      <Seo noindex />

      <header className="border-b border-ink/[.08]">
        <div className="wrap flex h-[72px] items-center justify-between">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-7 w-7" />
            <span className="font-display text-[17px] font-semibold tracking-tighter2">iNikola</span>
          </div>
          <a href={`mailto:${site.email}`} className="text-[13.5px] text-ink-60 hover:text-ink">
            {site.email}
          </a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
          <HeroCanvas className="h-full w-full [mask-image:radial-gradient(110%_80%_at_70%_40%,#000_30%,transparent_100%)]" />
        </div>

        <div className="wrap py-16 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 py-1.5 pl-2 pr-3.5 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  <span className="font-mono text-2xs uppercase tracking-[.14em] text-ink-60">
                    Free 30-minute architecture review
                  </span>
                </span>

                <h1 className="display mt-8 max-w-[16ch] text-[clamp(2.4rem,5.4vw,4.25rem)]">
                  Get your blocked AI use-case{' '}
                  <span className="em-serif text-cobalt">approved.</span>
                </h1>

                <p className="lede mt-7 max-w-[52ch]">
                  If security, compliance or data governance has stopped a GenAI
                  project, the problem is almost never the model. It is the data
                  path. Bring us one workflow and we will map what it takes to
                  get it into production.
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-12">
                  <div className="eyebrow">In the session you get answers on</div>
                  <ul className="mt-5 space-y-3.5">
                    {answers.map((a) => (
                      <li key={a} className="flex gap-3.5 text-[15px] leading-relaxed text-ink-80">
                        <svg viewBox="0 0 16 16" fill="none" className="mt-[5px] h-3.5 w-3.5 shrink-0 text-cobalt">
                          <path d="M3 8.5 6.2 11.7 13 4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] sm:grid-cols-2">
                  {proof.map((p) => (
                    <div key={p.k} className="bg-white p-5">
                      <div className="font-mono text-2xs uppercase tracking-[.12em] text-cobalt">{p.k}</div>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-60">{p.v}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[13px] leading-relaxed text-ink-40">
                  From kickoff to a security-reviewed pilot: one workflow, one
                  data domain, one measurable outcome.
                </p>
              </Reveal>
            </div>

            <div className="lg:sticky lg:top-8 lg:self-start">
              <Reveal delay={0.1}>
                <LeadForm
                  source="ad-landing-private-ai"
                  variant="full"
                  heading="Book your review"
                  note="Tell us about the workflow. We come back within one working day with times."
                  submitLabel="Request my review"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/[.08] bg-canvas">
        <div className="wrap flex flex-col gap-3 py-8 text-[13px] text-ink-40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-ink-60">Privacy</a>
            <a href="/terms" className="hover:text-ink-60">Terms</a>
          </div>
        </div>
      </footer>
    </>
  )
}
