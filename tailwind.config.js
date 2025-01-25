/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '4rem',
        center: true,
      },
      colors:{
        stone: {
          primary: '#D9D9D9'
        },
        gray: {
          primary: '#374151'
        },
        blueGray: {
          primary: '#B7C6DA'
        },
        red: {
          primary: '#FF0000'
        },
        green: {
          primary: '#1FAF38'
        },
        purple: {
          primary: '#8932CC'
        },
        yellow: {
          primary: '#FCC21B'
        },
        leaf: {
          primary: '#A7D8AB'
        },
        navy: {
          primary: '#020066'
        },
        orange: {
          primary: '#EC7A2E'
        },
        cyan: {
          primary: '#0D99FF'
        },
        sky:{
          primary: "#00AEEF",
          secoundary: "#00658A"
        }
      },
      backgroundImage: {
        'theme1-bg': "url('../src/components/img/theme1bg.png')",
        'theme2-bg': "url('../src/components/img/theme2bg.png')",
        'theme3-bg': "url('../src/components/img/theme3bg.png')",
        'theme4-bg': "url('../src/components/img/theme4bg.png')",
        'theme5-bg': "url('../src/components/img/theme5bg.png')"
      }
    },
  },
  plugins: [],
}