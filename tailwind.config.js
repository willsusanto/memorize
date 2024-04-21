/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "card-size": "repeat(3, minmax(1rem, 300px))"
      },
      colors: {
        "card-back": "#252525"
      },
      borderRadius: {
        "card-edge": "2rem"
      }
    },
  },
  plugins: [],
}

