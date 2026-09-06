import { Link } from 'react-router-dom'

/* Vector redraw of the iNikola bulb mark. The original logo.png is white
   line art on transparency, which disappears on a light background — this
   inherits currentColor and stays crisp at favicon sizes. */
export const LogoMark = ({ className = 'h-7 w-7' }) => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden className={className}>
    <path
      d="M16 3.4c-4.75 0-8.6 3.72-8.6 8.32 0 3.02 1.63 5.44 3.35 7.05.92.86 1.42 1.62 1.42 2.63v.55h7.66v-.55c0-1.01.5-1.77 1.42-2.63 1.72-1.61 3.35-4.03 3.35-7.05 0-4.6-3.85-8.32-8.6-8.32Z"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinejoin="round"
    />
    <path
      d="M12.4 12.1c0-1.85 1.6-3.35 3.6-3.35s3.6 1.5 3.6 3.35c0 1.72-1.42 2.6-3.6 2.6"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      opacity=".55"
    />
    <path d="M16 21.95V14.7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" opacity=".55" />
    <path
      d="M12.35 24.35h7.3M12.9 26.85h6.2M14.15 29.2h3.7"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
    />
  </svg>
)

export const Wordmark = ({ className = '', markClass = 'h-7 w-7', to = '/' }) => (
  <Link to={to} className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="iNikola — home">
    <LogoMark className={`${markClass} transition-transform duration-500 group-hover:rotate-[8deg]`} />
    <span className="font-display text-[17px] font-semibold tracking-tighter2">
      iNikola
    </span>
  </Link>
)
