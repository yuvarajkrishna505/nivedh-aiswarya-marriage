/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#111822',
        gold: '#D4AF37',
        cream: '#FDFBF7',
        navy: '#1A2433'
      },
      fontFamily: {
        script: ['Great Vibes', 'cursive'],
        serif: ['Cormorant Garamond', 'serif']
      }
    },
  },
  plugins: [],
}
