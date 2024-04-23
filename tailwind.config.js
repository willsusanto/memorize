/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "card-size": "repeat(3, minmax(1rem, 300px))",
        "card-size-2": "repeat(2, minmax(1rem, 200px))"
      },
      colors: {
        "card-back": "#252525",
        "light-gold": "rgb(255, 217, 0)",
        "even-lighter-gold": "rgb(250, 223, 74)",
        "dark-gold": "rgb(215, 147, 23)"
      },
      borderRadius: {
        "card-edge": "2rem"
      },
      fontFamily: {
        'genshin': ['Genshin', 'sans-serif']
      }
    },
  },
  plugins: [],
}

