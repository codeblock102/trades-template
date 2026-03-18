import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
      },
      colors: {
        brand: {
          // Replaces the original orange brand color with a darker red.
          amber: '#C1121F',
          amberDark: '#8A0E18',
          dark: '#0D0D0D',
          gray: '#6B6B6B',
          lightBg: '#F8F7F4',
          border: '#E5E5E0',
        },
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.07)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.13)',
        amber: '0 8px 32px rgba(193,18,31,0.25)',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
