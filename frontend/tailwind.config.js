/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#143826',
          dark: '#0e271a',
          deep: '#1B4332',
          cream: '#FAF8F5',
          softcream: '#F4EFEB',
          sage: '#E8F0EB',
          sageligh: '#F0F6F2',
          gold: '#D4AF37',
          goldhover: '#C59B27',
          warmbrown: '#6F4E37',
          darkbrown: '#3E2723'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'glow-gold': '0 0 35px -5px rgba(212, 175, 55, 0.35)',
        'glow-forest': '0 20px 40px -15px rgba(20, 56, 38, 0.4)'
      }
    },
  },
  plugins: [],
}
