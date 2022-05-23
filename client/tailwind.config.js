module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '600': '600px',
       },
       tindergray:{
         '1':"#797777"
       },

       colors :{
           submitColorActive:
           {
             50: '#ffe2ec',
             100: '#ffb3c5',
             200: '#fc839f',
             300: '#f95278',
             400: '#f62252',
             500: '#dd0939',
             600: '#ad032c',
             700: '#7c001e',
             800: '#4d0012',
             900: '#200005',
           },
      submitColorHover:
      {
        50: '#f2f2f2',
        100: '#d9d9d9',
        200: '#bfbfbf',
        300: '#a6a6a6',
        400: '#8c8c8c',
        500: '#737373',
        600: '#595959',
        700: '#404040',
        800: '#262626',
        900: '#0d0d0d',
      }
             
       }
    },
  },
  plugins: [],
}
