import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NewsletterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-vertical">
      <Header />
      <main className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
        {/* Bloc de gauche avec l'image */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <img
            src="path_to_your_image.jpg"
            alt="Description"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Bloc de droite avec le formulaire */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Inscrit-toi à la newslatter
            </h2>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Renseignez votre email"
              ></input>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-light hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Inscription
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsletterPage;
