import { Link } from 'react-router-dom'
import { Button, Arrow } from '../components/ui/Primitives'
import { Seo } from '../lib/seo'

const suggestions = [
  { label: 'Solutions', to: '/solutions', desc: 'What we build, end to end' },
  { label: 'Products', to: '/products', desc: 'Available today' },
  { label: 'FAQ', to: '/faq', desc: 'Straight answers' },
  { label: 'Contact', to: '/contact', desc: 'Talk to an engineer' },
]

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found — iNikola" description="That page does not exist." noindex />
      <section className="bg-canvas pt-[var(--nav-h)]">
        <div className="wrap flex min-h-[70vh] flex-col justify-center py-20">
          <span className="font-mono text-2xs uppercase tracking-[.16em] text-cobalt">Error 404</span>
          <h1 className="display mt-6 max-w-[14ch] text-[clamp(2.4rem,6vw,4.5rem)]">
            That page is not <span className="em-serif text-ink-40">here.</span>
          </h1>
          <p className="lede mt-6 max-w-lg">
            The link may be old, or the page may have moved. Here is where most
            people are heading.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/[.09] bg-ink/[.09] sm:grid-cols-2 lg:grid-cols-4">
            {suggestions.map((s) => (
              <Link key={s.to} to={s.to} className="group bg-white p-6 transition-colors hover:bg-cobalt-50">
                <div className="font-display text-[17px] font-medium tracking-tighter2">{s.label}</div>
                <p className="mt-2 text-[13px] text-ink-60">{s.desc}</p>
                <Arrow className="mt-4 text-ink-40 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Button to="/">Back to the homepage <Arrow /></Button>
          </div>
        </div>
      </section>
    </>
  )
}
