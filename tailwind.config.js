/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "#9F9F9F": "#9F9F9F",
        "#FAF3EA": "#FAF3EA",
        "#242424": "#242424",
        "#B0B0B0": "#B0B0B0",
        "#B88E2F": "#B88E2F",
        "#2EC1AC": "#2EC1AC",
        "#FFF3E3": "#FFF3E3",
        "#616161": "#616161",
        "#3A3A3A": "#3A3A3A",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
