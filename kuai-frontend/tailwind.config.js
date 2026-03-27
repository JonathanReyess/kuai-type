/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./index.tsx", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        paper: "#f8f7f4",
        "paper-dark": "#f0efe9",
        ink: "#000000",
        cinnabar: "#8B2020",
      },
      fontFamily: {
        serif: ["Spectral", "serif"],
        calligraphy: ["Ma Shan Zheng", "cursive"],
        protest: ["Protest Revolution", "sans-serif"],
      },
    },
  },
  plugins: [],
};
