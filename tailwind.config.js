/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1a1a1a',
        'charcoal-light': '#2a2a2a',
        gold: '#c9a227',
        'gold-dark': '#a68520',
        cream: '#f5f0e6',
        'cream-dark': '#e8e0d0',
        burgundy: '#6b1c23',
        'burgundy-light': '#8a2530',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

