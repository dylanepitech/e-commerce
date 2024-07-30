import React from "react";
import Header from "../components/Header";
import "../index.css"; // Assure-toi que ce chemin est correct

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Page d'accueil</h1>
        {/* Autres contenus de la page */}
      </main>
    </div>
  );
};

export default HomePage;
