/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        "web-green": "#4ECE80",
        "bityo": "#17FFAD",
        'primary': {
          'white-100': '#FFFFFF',
          'black-100': '#2C2C2C',
          'black-200': '#3D3D3D',
          'red-100': '#E25353',
          'red-200': '#FF9797',
          'black-500': '#',
        },
      },
    },
  },
  plugins: [
    'vuefix',
  ],
}