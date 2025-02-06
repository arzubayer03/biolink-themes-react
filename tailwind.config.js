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
      aspectRatio: {
        '19-5-9': '19.5 / 9', 
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
        },
        
      },
      backgroundImage: {
        'basic': "url('../src/components/img/basic-bg.png')",
        'skyblue': "url('../src/components/img/skyblue.png')",
        'ocean': "url('../src/components/img/Ocean.png')",
        'colorful': "url('../src/components/img/colorful.png')",
        'desert': "url('../src/components/img/desert.png')"
      }
    },
  },
  plugins: [
    
  ],
}