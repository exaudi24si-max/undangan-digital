/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#f9f8f6',
          dark: '#f0ece1',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a1a',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        signature: ['Alex Brush', 'cursive'],
      },
    },
  },
  plugins: [],
}
