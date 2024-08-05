/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#1E4347",
        "green-light": "#639d87",
      },
      backgroundImage: {
        "green-vertical":
          "linear-gradient(0deg, rgba(99,157,135,1) 0%, rgba(30,67,71,1) 81%)",
        "green-horizontal":
          "linear-gradient(281deg, rgba(99,157,135,1) 48%, rgba(30,67,71,1) 81%)",
        "green-horizontal-revers":
          "linear-gradient(104deg, rgba(99,157,135,1) 8%, rgba(30,67,71,1) 70%)",
      },
      borderWidth: {
        "border-l": "5px",
      },
      borderColor: {
        "green-dark": "#1E4347",
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
