/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '1px',
      }
    },
  },
  plugins: [],
}

