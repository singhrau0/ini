import { Button, Arrow, Reveal } from './Primitives'
import { site } from '../../data/site'

export default function CTA({
  eyebrow = 'Start here',
  title = (
    <>
      Which AI workflow does your business want that{' '}
      <span className="em-serif text-white/70">security has not approved?</span>
    </>
  ),
  body = 'Bring us that one. In thirty minutes we will map the data path, name the blockers, and tell you the architecture that clears them — or tell you it is already fine as it stands.',
  primary = { label: 'Book an architecture review', to: '/book' },
  secondary = { label: 'Send us the details', to: '/contact' },
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="pointer-events-none absolute right-[-15%] top-[-40%] h-[560px] w-[560px] rounded-full bg-cobalt/30 blur-[140px]" />

      <div className="wrap relative py-24 md:py-32">
        <Reveal className="max-w-3xl">
          <div className="eyebrow flex items-center gap-2.5 !text-white/50">
            <span className="inline-block h-[5px] w-[5px] rounded-full bg-cobalt-400" />
            {eyebrow}
          </div>
          <h2 className="display mt-6 text-[clamp(2rem,4vw+.6rem,3.5rem)] text-white">{title}</h2>
          <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-white/60">{body}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to={primary.to} variant="light" size="lg">
              {primary.label} <Arrow />
            </Button>
            {secondary && (
              <Button to={secondary.to} variant="onDark" size="lg">
                {secondary.label}
              </Button>
            )}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 font-mono text-2xs uppercase tracking-[.14em] text-white/40">
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-white/75">{site.email}</a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white/75">
              {site.phone}
            </a>
            <span>{site.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
