/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#4B5563',
        bgColor: '#0F0F0F',
        brand: '#FF0000',
        textyoutube: '#FFFFFF',
      },
      backgroundImage: {
        banner: `url(../public/images_shoppy/banner.png)`,
      },
    },
  },
  plugins: [],
}
