/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#FF0000',
        bgColor: '#0F0F0F',
        gray: '#303030',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
