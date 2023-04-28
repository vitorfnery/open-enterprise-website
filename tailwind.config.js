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
        cousine: " 'Cousine', monospace",
        robotoMono : "'Roboto Mono', monospace"
      },
       colors: {
       "ghost-white": "#F9F9F9"
    }
  },
  },
  plugins: [],
}

