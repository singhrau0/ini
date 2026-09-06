import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Wordmark } from '../ui/Logo'
import { Button, Arrow } from '../ui/Primitives'
import { nav, site } from '../../data/site'

const DownloadIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-3.5 w-3.5">
    <path d="M8 2v8m0 0 3-3M8 10 5 7M2.5 12.5h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled || open
            ? 'border-b border-ink/[.08] bg-white/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="wrap flex h-[var(--nav-h)] items-center justify-between gap-6">
          <Wordmark />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative isolate rounded-full px-3.5 py-2 text-[13.5px] font-medium tracking-[-.01em] transition-colors ${
                    isActive ? 'text-ink' : 'text-ink-60 hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-ink/[.06]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.brochure}
              download
              className="hidden items-center gap-2 rounded-full border border-ink/12 px-4 py-2 text-[13px] font-medium text-ink-80 transition-colors hover:border-ink/30 hover:text-ink md:inline-flex"
            >
              <DownloadIcon />
              Brochure
            </a>
            <Button to="/book" size="sm" className="hidden sm:inline-flex">
              Book a demo <Arrow />
            </Button>

            <button
              onClick={() => setOpen((v) => !v)}
              className="-mr-1 flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-300 ${open ? 'top-[5px] rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-300 ${open ? 'top-[5px] -rotate-45' : 'top-[10px]'}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99] bg-white pt-[var(--nav-h)] lg:hidden"
          >
            <div className="wrap flex h-[calc(100vh-var(--nav-h))] flex-col overflow-y-auto pb-10 pt-6">
              <nav className="flex flex-col">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                  >
                    <Link
                      to={item.to}
                      className="flex items-center justify-between border-b border-ink/[.08] py-4 font-display text-2xl font-medium tracking-tighter2"
                    >
                      {item.label}
                      <Arrow className="h-4 w-4 text-ink-40" />
                    </Link>
                  </motion.div>
                ))}
                {[
                  { label: 'Insights', to: '/insights' },
                  { label: 'About', to: '/about' },
                  { label: 'Careers', to: '/careers' },
                ].map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.04, duration: 0.4 }}
                  >
                    <Link to={item.to} className="flex items-center justify-between border-b border-ink/[.08] py-3.5 text-base text-ink-60">
                      {item.label}
                      <Arrow className="h-3.5 w-3.5 text-ink-40" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Button to="/book" size="lg" className="w-full">
                  Book a demo <Arrow />
                </Button>
                <Button href={site.brochure} download variant="outline" size="lg" className="w-full">
                  <DownloadIcon /> Download brochure
                </Button>
                <a href={`mailto:${site.email}`} className="pt-2 text-center text-sm text-ink-60">
                  {site.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
