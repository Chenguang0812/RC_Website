/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        'web-green': '#4ECE80',
        bityo: '#17FFAD',
        primary: {
        },
      },
    },
  },
  plugins: ['vuefix'],
}
