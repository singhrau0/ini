import { Link } from 'react-router-dom'
import { LogoMark } from '../ui/Logo'
import { Button, Arrow } from '../ui/Primitives'
import { site, footerNav } from '../../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[.05] grid-bg [background-size:64px_64px]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)' }} />
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-cobalt/25 blur-[120px]" />

      <div className="wrap relative pt-20 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_2fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <LogoMark className="h-8 w-8 text-white" />
              <span className="font-display text-lg font-semibold tracking-tighter2">iNikola</span>
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/55">
              Enterprise AI engineering and secure AI enablement. From a blocked
              AI use-case to security-approved production.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/book" variant="light" size="sm">
                Book a demo <Arrow />
              </Button>
              <Button href={site.brochure} download variant="onDark" size="sm">
                Brochure
              </Button>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h3 className="eyebrow !text-white/40">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="link-underline text-[14.5px] text-white/65 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 py-10 sm:grid-cols-3">
          <div>
            <div className="eyebrow !text-white/40">Email</div>
            <a href={`mailto:${site.email}`} className="mt-2 block text-[15px] text-white/80 hover:text-white">
              {site.email}
            </a>
          </div>
          <div>
            <div className="eyebrow !text-white/40">Phone</div>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-2 block text-[15px] text-white/80 hover:text-white">
              {site.phone}
            </a>
          </div>
          <div>
            <div className="eyebrow !text-white/40">Studio</div>
            <a href={site.maps} target="_blank" rel="noopener noreferrer" className="mt-2 block text-[15px] text-white/80 hover:text-white">
              {site.location}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-white/70">Privacy</Link>
            <Link to="/terms" className="hover:text-white/70">Terms</Link>
            {site.linkedin && (
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white/70">
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
