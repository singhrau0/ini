import PageHeader from '../components/ui/PageHeader'
import { Seo } from '../lib/seo'
import { site } from '../data/site'

const privacy = [
  {
    h: 'What we collect',
    p: [
      'When you submit a form on this site we collect the details you enter — typically your name, work email, company, role, phone number and a description of what you are trying to build — together with a timestamp, the page you submitted from, and any campaign parameters in the link that brought you here.',
      'We use standard server logs, which record IP address, browser and referring page. We do not run advertising trackers or sell data to third parties.',
    ],
  },
  {
    h: 'Why we collect it',
    p: [
      'Solely to respond to your enquiry, arrange a conversation, and where relevant prepare a proposal. Campaign parameters tell us which channel an enquiry came from so we know where to spend our effort.',
    ],
  },
  {
    h: 'Where it goes',
    p: [
      'Enquiries are delivered to our team and, where configured, into our customer relationship management system. Access is restricted to the people who need it to reply to you.',
      'We do not share your details with third parties for their own marketing.',
    ],
  },
  {
    h: 'How long we keep it',
    p: [
      'Enquiry records are retained for as long as we have an active or reasonably foreseeable business relationship, and are removed on request.',
    ],
  },
  {
    h: 'Your rights',
    p: [
      `You can ask us what we hold about you, ask for it to be corrected, or ask us to delete it. Email ${site.email} and we will act on it.`,
    ],
  },
  {
    h: 'Client data in engagements',
    p: [
      'Data processed during a client engagement is governed by the contract, non-disclosure agreement and data processing terms for that engagement, not by this website policy. In delivery work we operate inside the client’s own infrastructure and access controls wherever the architecture allows.',
    ],
  },
  {
    h: 'Cookies and storage',
    p: [
      'This site uses browser storage only to remember campaign attribution within your session and to hold an unsent form entry so it is not lost. No advertising or cross-site tracking cookies are set by us.',
    ],
  },
]

const terms = [
  {
    h: 'About this site',
    p: [
      `This website is operated by ${site.legalName}. By using it you accept these terms.`,
    ],
  },
  {
    h: 'Information provided here',
    p: [
      'Content on this site describes our services, products and engineering approach in general terms. It is provided for information and does not constitute a contractual commitment, a warranty, or professional advice for any specific situation.',
      'Anything described in the R&D section is under development and is explicitly not available for purchase or deployment.',
    ],
  },
  {
    h: 'Engagements',
    p: [
      'Any work we undertake is governed by a separate written agreement covering scope, deliverables, fees, intellectual property, confidentiality and data processing. Nothing on this website varies or overrides those terms.',
    ],
  },
  {
    h: 'Intellectual property',
    p: [
      'The content, design and code of this website belong to us or our licensors. You may view and share it, but not reproduce it commercially without permission. Product names referenced belong to their respective owners.',
    ],
  },
  {
    h: 'External links',
    p: [
      'Where we link to third-party sites, we are not responsible for their content or their handling of your data.',
    ],
  },
  {
    h: 'Limitation of liability',
    p: [
      'To the extent permitted by law, we are not liable for loss arising from reliance on information published on this website. This does not limit liability that cannot be excluded by law.',
    ],
  },
  {
    h: 'Governing law',
    p: [
      'These terms are governed by the laws of India, and the courts of Hyderabad, Telangana have exclusive jurisdiction.',
    ],
  },
  {
    h: 'Contact',
    p: [`Questions about these terms: ${site.email}.`],
  },
]

export default function Legal({ kind }) {
  const isPrivacy = kind === 'privacy'
  const sections = isPrivacy ? privacy : terms

  return (
    <>
      <Seo />
      <PageHeader
        eyebrow="Legal"
        title={isPrivacy ? 'Privacy policy' : 'Terms of use'}
        sub={
          isPrivacy
            ? 'What we collect through this website, why, and what you can ask us to do about it.'
            : 'The terms governing use of this website.'
        }
      />

      <section className="bg-white">
        <div className="wrap py-16 md:py-24">
          <div className="mx-auto max-w-[46rem]">
            <p className="mb-12 border-b border-ink/[.09] pb-6 font-mono text-2xs uppercase tracking-[.12em] text-ink-40">
              Last updated · September 2026
            </p>
            <div className="prose-inikola">
              {sections.map((s) => (
                <div key={s.h}>
                  <h2>{s.h}</h2>
                  {s.p.map((para, i) => <p key={i}>{para}</p>)}
                </div>
              ))}
            </div>
            <p className="mt-12 rounded-xl border border-ink/[.09] bg-canvas p-6 text-[14px] leading-relaxed text-ink-60">
              This is a plain-language policy written for a corporate website. Have
              your own counsel review it against the regulations that apply to
              your jurisdiction and contracts before relying on it.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
