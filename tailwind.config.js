/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'exterior-house': "url('/img/exclusive-listings-exterior-features.png')"
      },
      fontFamily: {
        body: ["Lato", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        accent: ['"Shadows Into Light Two"', 'sans-serif'],
      },
      colors: {
        reDark: "#222625",
        reGreen: {
          DEFAULT: "#8CC94C",
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
        reBlue: {
          DEFAULT: '#044c76',
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
        reYellow: {
          DEFAULT:'#FFCC00',
          100: '#FFF4CC',
          200: '#FFE899',
          300: '#FFDC66',
          400: '#FFD033',
          500: '#FFCC00',
          600: '#E6B800',
          700: '#CC9E00',
          800: '#B38500',
          900: '#996B00',
        },
        reGrey: {
          DEFAULT:'#414142',
          100: '#e0e0e0', 
          200: '#b8b8b9',
          300: '#919192',
          400: '#414142',
          500: '#3a3a3b',
          600: '#333334',
          700: '#2c2c2d',
          800: '#252526',
          900: '#1e1e1f',
        },
        reTextGrey: '#BABABA',
        reText: '#333333',
        reTextLight: '#727272',
        reBody: '#7f7f7f',
        reRed: '#EB6753',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '1px white',
        },
        '.text-stroke-sm': {
          '-webkit-text-stroke': '0.5px white',
        },
        '.text-stroke-lg': {
          '-webkit-text-stroke': '2px white',
        },
      }, ['responsive']);
    },
  ],
};
