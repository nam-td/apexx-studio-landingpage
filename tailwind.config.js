/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'abel': ['Abel', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'kanit': ['Kanit', 'sans-serif']
      },
      transitionDuration:{
        '1250': '1250ms'
      },
      zIndex: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500'
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(50px, 1fr))'
      }
    },
    screens: {
      'xs': '400px',
      '3cols': '600px',
      'md': '768px',
      '4cols': '1000px',
      'lg': '1024px',
      'xl': '1280px'
    }
  },

  plugins: [],
}

