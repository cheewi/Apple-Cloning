/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html", "./components/*.js"],
  theme: {
    extend: {
      screens: { 
        'tab' : '833px',
        'tab2' : '1024px',
        'des' : '1920px',
      },
      fontFamily: { 
        'apple' : '-apple-system'
      },
      fontSize: { 
        '00' : '12px'
      },
      padding : 
      { 
        '2.5' : '10px'
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
