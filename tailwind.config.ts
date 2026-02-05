import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        'background-light': '#1A1A1A',
        'background-card': '#2C2C2C',
        foreground: '#F0F0F0',
        muted: '#B0B0B0',
        accent: {
          DEFAULT: '#CCFF00',
          glow: 'rgba(204, 255, 0, 0.4)',
          dark: '#A3CC00',
        },
        border: '#3A3A3A',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(204, 255, 0, 0.3)',
        'glow-lg': '0 0 40px rgba(204, 255, 0, 0.4)',
        'glow-sm': '0 0 10px rgba(204, 255, 0, 0.2)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(204, 255, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(204, 255, 0, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'text-reveal': 'text-reveal 0.5s ease-out forwards',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(204, 255, 0, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(204, 255, 0, 0.5)' },
        },
        'text-reveal': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
