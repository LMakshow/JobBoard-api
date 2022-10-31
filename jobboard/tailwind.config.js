/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'txt-dark': '#3A4562',
        'txt-secondary': '#878D9D',
      },
    },
  },
  plugins: [],
}
