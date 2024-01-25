/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: "#E7816B",
        black: "#1D1C1E",
        white: "#FFFFFF",
        lightPeach: "#FFAD9B",
        darkGrey: "#333136",
        lightGrey: "#F1F3F5",
        bgOpacity: "rgba(0,0, 0 ,0.5)",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
