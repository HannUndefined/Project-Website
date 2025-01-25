/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom1': "url('../image/74988-gedung-pemkab-jember.jpg')",
      },
      fontFamily: {
        bebas_neue: ['Bebas Neue'],
      },
    },
  },
  plugins: [],
}