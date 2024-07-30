/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#1E4347", // Exemple de couleur personnalisée
      },
      border: {
        "border-l": "3px solid #639D87",
      },
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"], // Exemple de police personnalisée
      },
      height: {
        120: "120px", // Définir une hauteur personnalisée
      },
    },
  },
  plugins: [],
};
