/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    fontWeight: {
      light: "300",
      regular: "400",
      medium: "500",
      bold: "700",
    },
    extend: {
      width: {
        resWidth: "90vw",
        max: "400px",
        45: "45%",
      },
      borderRadius: {
        "6xl": "2rem",
      },
    },
  },
  plugins: [],
};
