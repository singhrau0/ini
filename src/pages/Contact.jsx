import PageHeader from '../components/ui/PageHeader'
import LeadForm from '../components/forms/LeadForm'
import { Reveal, Eyebrow, Button, Arrow } from '../components/ui/Primitives'
import { Seo } from '../lib/seo'
import { site } from '../data/site'

const channels = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, note: 'Read by the team, replied to within a working day.' },
  { label: 'WhatsApp', value: site.phone, href: site.whatsapp, note: 'Fastest for a quick question.' },
  { label: 'Studio', value: site.location, href: site.maps, note: 'Visits by appointment.' },
]

export default function Contact() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact iNikola',
    url: `${site.domain}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: site.name,
      email: site.email,
      telephone: site.phone,
      url: site.domain,
    },
  }

  return (
    <>
      <Seo jsonLd={ld} />
      <PageHeader
        eyebrow="Contact"
        title={<>Tell us the workflow. <span className="em-serif text-ink-40">We will tell you what it takes.</span></>}
        sub="The most useful first message describes what you want the system to do, whose data it touches, and what is currently stopping it going live."
      />

      <section className="bg-white">
        <div className="wrap py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-16">
            <Reveal>
              <LeadForm source="contact-page" variant="full" heading="Send us the details" />
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.08}>
                <div className="rounded-2xl border border-ink/[.09] bg-canvas p-7">
                  <Eyebrow>Direct</Eyebrow>
                  <div className="mt-6 space-y-6">
                    {channels.map((c) => (
                      <div key={c.label}>
                        <div className="font-mono text-2xs uppercase tracking-[.12em] text-ink-40">{c.label}</div>
                        <a
                          href={c.href}
                          target={c.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="link-underline mt-1.5 block text-[15px] font-medium text-ink"
                        >
                          {c.value}
                        </a>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-ink-60">{c.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="rounded-2xl border border-ink/[.09] bg-ink p-7 text-white">
                  <Eyebrow className="!text-white/50">Prefer to talk</Eyebrow>
                  <h3 className="mt-5 font-display text-[20px] font-medium tracking-tighter2">
                    Book the 30-minute review instead
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/55">
                    One workflow, the data path, the blockers, and the architecture
                    that clears them. No slides.
                  </p>
                  <Button to="/book" variant="light" size="sm" className="mt-6">
                    Pick a time <Arrow />
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="overflow-hidden rounded-2xl border border-ink/[.09]">
                  <iframe
                    title="iNikola location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160410464!2d78.24323019999999!3d17.412608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="260"
                    style={{ border: 0, filter: 'grayscale(1) contrast(1.05)' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
