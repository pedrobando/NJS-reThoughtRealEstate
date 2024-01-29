/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        body: "Lato",
        heading: ["Poppins", "sans-serif"],
        accent: ['"Shadows Into Light Two"', 'sans-serif'],
      },
      colors:{
        reDark:"#222625",
        reGreen: {
          DEFAULT:"#8CC94C",
          100: "#EAFCEC",
          200: "#CBF2D2",
          300: "#ABE7B7",
          400: "#8CC94C",
          500: "#70AB4A",
          600: "#548D38",
          700: "#386E27",
          800: "#1C4F15",
          900: "#003000",
        },
        reBlue:{
          DEFAULT:'#044c76',
          50: '#c2d1e1',
          100: '#a4b9d4',
          200: '#779fc4',
          300: '#4a85b4',
          400: '#1e6ba4',
          500: '#044c76',
          600: '#023d5c',
          700: '#012e47',
          800: '#011f33',
          900: '#000f1f',
        },
        reYellow: '#FFCC00',
        reGrey: '#414142',
        reTextGrey:'#BABABA',
        reText:'#333333',
        reTextLight: '#727272',
        reRed:'#EB6753'
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: ["prettier-plugin-tailwindcss", ],
}
