/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html", "./components/*.js"],
  theme: {
    extend: {
      screens: { 
        'tab' : '833px',
        'des' : '1920px',
      },
      fontFamily: { 
        'apple' : '-apple-system'
      },
      fontSize: { 
        '00' : '12px'
      }
    },
  },
  plugins: [],
}
