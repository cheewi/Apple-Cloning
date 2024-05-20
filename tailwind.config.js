/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      screens: { 
        'mob' : '658px',
        'tab' : '1024px',
        'des' : '1920px',
      },
      fontFamily: { 
        'apple' : '-apple-system'
      },
    },
  },
  plugins: [],
}
