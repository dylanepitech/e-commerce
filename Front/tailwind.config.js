/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#1E4347",
      },
      border: {
        "border-l": "3px solid #639D87",
      },
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"],
      },
      height: {
        120: "120px",
        1: "0.5px",
      },
    },
  },
  plugins: [],
};
