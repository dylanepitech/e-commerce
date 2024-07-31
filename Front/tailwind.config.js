/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#1E4347",
        "green-light": "#639d87", // Ajoutez ici la couleur de fond
      },
      backgroundImage: {
        "green-vertical":
          "linear-gradient(0deg, rgba(99,157,135,1) 0%, rgba(30,67,71,1) 81%)",
        "green-horizontal":
          "linear-gradient(281deg, rgba(99,157,135,1) 19%, rgba(30,67,71,1) 81%)",
      },
      borderWidth: {
        "border-l": "3px",
      },
      borderColor: {
        "green-dark": "#1E4347",
      },
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"],
      },
      height: {
        120: "120px",
      },
    },
  },
  plugins: [],
};
