/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        "dark-gray": '#1E1E1E',
        "my-red": '#600202',
      },
    },
  },
  plugins: [],
}