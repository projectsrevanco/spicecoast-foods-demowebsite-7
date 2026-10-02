/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', // Warm cream / ivory
        primary: '#9C2A1E', // Deep spice red
        accent: {
          saffron: '#F4B942', // Saffron / turmeric
          green: '#4A6F55', // Natural green
        },
        text: {
          main: '#2C2A29', // Dark brown / charcoal
          muted: '#5C5955',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
