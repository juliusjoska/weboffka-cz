import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0a0a',
          secondary: '#141414',
          tertiary: '#1a1a1a',
        },
        foreground: '#fafafa',
        muted: '#888888',
        accent: {
          DEFAULT: '#c8ff00',
          light: '#d4ff33',
          dark: '#a8d900',
        },
        border: '#222222',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #c8ff00, #22c55e, #06b6d4)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
