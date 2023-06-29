/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        figtree: "'Figtree', sans-serif",
        dmSerif: "'DM Serif Display', serif",
        robotoMono : "'Roboto Mono', monospace"
      },
       colors: {
       "ghost-white": "#F9F9F9",
       "green-sheen": "#71A894",
       "dark-charcoal": "#303031",
       "granite-gray": "#66645E"
      },
       screens: {
        'xsm': '398px',
      }
  },
  },
  plugins: [],
}

