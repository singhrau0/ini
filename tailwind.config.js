/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: { center: true, padding: '1.25rem' },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0B0C0E',
          80: '#3A3D42',
          60: '#65696F',
          40: '#9BA0A6',
          20: '#D3D6DA',
          10: '#E7E9EC',
          5: '#F2F3F5',
        },
        paper: '#FFFFFF',
        canvas: '#F7F7F5',
        cobalt: {
          DEFAULT: '#1B3BE8',
          600: '#1730C4',
          400: '#5670F2',
          100: '#E4E8FE',
          50: '#F1F3FF',
        },
        signal: '#0F9D76',
        amber: '#B7791F',
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter2: '-0.035em',
      },
      maxWidth: { '8xl': '90rem' },
      boxShadow: {
        card: '0 1px 2px rgba(11,12,14,.04), 0 8px 24px -12px rgba(11,12,14,.10)',
        lift: '0 2px 4px rgba(11,12,14,.04), 0 24px 48px -20px rgba(11,12,14,.18)',
        ring: '0 0 0 1px rgba(11,12,14,.07)',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: 0, transform: 'translateY(14px)' }, '100%': { opacity: 1, transform: 'none' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'pulse-ring': { '0%': { transform: 'scale(.9)', opacity: .6 }, '100%': { transform: 'scale(1.8)', opacity: 0 } },
        shimmer: { '0%': { backgroundPosition: '200% 0' }, '100%': { backgroundPosition: '-200% 0' } },
        'draw-line': { '0%': { strokeDashoffset: '1000' }, '100%': { strokeDashoffset: '0' } },
      },
      animation: {
        'fade-up': 'fade-up .7s cubic-bezier(.2,.7,.2,1) both',
        marquee: 'marquee 42s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(.2,.7,.2,1) infinite',
        shimmer: 'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
}
