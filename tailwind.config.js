/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#151515',
        blue: {
          300: "#a7c2f7",
          400: "#7da6f0",
          500: "#5180e1",
        },
        gray: {
          50:  "#ffffff",
          100: "#fefefe",
          200: "#EBE8E8",
          300: "#DBD7D7",
          400: "#C2BCBC",
          500: "#ABA6A6",
          700: "#151515",
          750: "#0e0e0e",
          800: "#0d0d0d",
          850: "#0b0b0b",
          900: "#090909",
        },
        black: "#000000"
      }
    },
  },
  plugins: [],
}