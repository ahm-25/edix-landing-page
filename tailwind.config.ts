import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0B1626',
          blue: '#1769FF',
          light: '#EEF5FF'
        },
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F7F9FC'
        }
      },
      fontFamily: {
        sans: ['Cairo', 'IBM Plex Sans Arabic', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'card': '0 4px 20px -5px rgba(0,0,0,0.05)',
      }
    }
  },
  plugins: []
} satisfies Config
