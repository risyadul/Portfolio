/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        'bg-2': 'rgb(var(--bg-2) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        'line-2': 'rgb(var(--line-2) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        faint: 'rgb(var(--faint) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-ink': 'rgb(var(--accent-ink) / <alpha-value>)',
        link: 'rgb(var(--link) / <alpha-value>)',
        // Always-dark terminal / code surface
        term: 'rgb(var(--term-bg) / <alpha-value>)',
        'term-line': 'rgb(var(--term-line) / <alpha-value>)',
        'term-text': 'rgb(var(--term-text) / <alpha-value>)',
        'term-muted': 'rgb(var(--term-muted) / <alpha-value>)',
        'term-string': 'rgb(var(--term-string) / <alpha-value>)',
        'term-key': 'rgb(var(--term-key) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(2.75rem, 1.2rem + 6.4vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        display: ['clamp(2rem, 1.1rem + 3.6vw, 3.25rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        content: '74rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(var(--accent) / 0.30), 0 18px 50px -18px rgb(var(--accent) / 0.35)',
        card: '0 24px 48px -28px rgba(0, 0, 0, 0.55)',
        lift: '0 30px 60px -30px rgba(0, 0, 0, 0.6)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgb(var(--accent) / 0.5)' },
          '70%': { boxShadow: '0 0 0 8px rgb(var(--accent) / 0)' },
          '100%': { boxShadow: '0 0 0 0 rgb(var(--accent) / 0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.65s var(--ease) both',
        blink: 'blink 1.05s steps(1) infinite',
        'pulse-ring': 'pulse-ring 2.2s var(--ease) infinite',
        marquee: 'marquee 34s linear infinite',
      },
    },
  },
  plugins: [],
}
