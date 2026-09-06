import PageHeader from '../components/ui/PageHeader'
import LeadForm from '../components/forms/LeadForm'
import { Reveal, Eyebrow } from '../components/ui/Primitives'
import { Seo } from '../lib/seo'
import { site } from '../data/site'

const agenda = [
  { t: 'The workflow', d: 'What you want the system to do, and who needs it.' },
  { t: 'The data path', d: 'What it touches, how sensitive it is, and where it is allowed to be processed.' },
  { t: 'The blockers', d: 'What is actually stopping approval — and who has to sign it off.' },
  { t: 'The architecture', d: 'The least expensive boundary that clears the blockers, with a rough shape and timeline.' },
]

export default function Book() {
  const hasScheduler = Boolean(site.bookingUrl)

  return (
    <>
      <Seo />
      <PageHeader
        eyebrow="Book a session"
        title={<>Thirty minutes on one <span className="em-serif text-ink-40">blocked workflow.</span></>}
        sub="A working session with an engineer, not a sales call. You leave with a view on the architecture and the approval path, whether or not you work with us."
      />

      <section className="bg-white">
        <div className="wrap py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-16">
            <Reveal>
              {hasScheduler ? (
                <div className="overflow-hidden rounded-2xl border border-ink/[.09] bg-white">
                  <iframe
                    title="Book a session with iNikola"
                    src={site.bookingUrl}
                    className="h-[760px] w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </div>
              ) : (
                <LeadForm
                  source="demo-request"
                  variant="full"
                  heading="Request a session"
                  note="Send this and we will come back with two or three times within one working day. Tell us the workflow you have in mind — it makes the session far more useful."
                  submitLabel="Request a time"
                />
              )}
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.08}>
                <div className="rounded-2xl border border-ink/[.09] bg-canvas p-7">
                  <Eyebrow>What we cover</Eyebrow>
                  <ol className="mt-6 space-y-5">
                    {agenda.map((a, i) => (
                      <li key={a.t} className="flex gap-4">
                        <span className="mt-0.5 font-mono text-2xs tracking-[.14em] text-cobalt">0{i + 1}</span>
                        <div>
                          <div className="text-[14.5px] font-medium tracking-[-.01em] text-ink">{a.t}</div>
                          <p className="mt-1 text-[13px] leading-relaxed text-ink-60">{a.d}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="rounded-2xl border border-ink/[.09] p-7">
                  <Eyebrow>What it is not</Eyebrow>
                  <ul className="mt-5 space-y-3 text-[14px] leading-relaxed text-ink-60">
                    <li>A capability deck.</li>
                    <li>A pitch for a platform you did not ask about.</li>
                    <li>An hour of discovery questions with nothing given back.</li>
                  </ul>
                  <p className="mt-5 border-t border-ink/[.07] pt-5 text-[13.5px] leading-relaxed text-ink-40">
                    If the honest answer is that your existing setup already covers
                    it, that is what you will hear.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <a
                  href={`mailto:${site.email}`}
                  className="block rounded-2xl border border-ink/[.09] bg-ink p-7 text-white transition-colors hover:bg-[#16181c]"
                >
                  <Eyebrow className="!text-white/50">Rather just email?</Eyebrow>
                  <div className="mt-4 text-[16px] font-medium">{site.email}</div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/50">
                    Straight to the team. Replied within a working day.
                  </p>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
