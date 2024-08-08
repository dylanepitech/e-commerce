import React from "react";
import Header from "../components/Header";
import "../index.css"; // Assure-toi que ce chemin est correct
import sampleImage from "../assets/picture/cuisine2.jpg"; // Remplacez par le bon chemin de votre image
import logo from "../assets/picture/logo.png";
import salleDeBain from "../assets/picture/Salle-de-bain2.jpg";
import cuisineModerne from "../assets/picture/cuisineModerne.jpg";
import électroménager from "../assets/picture/électromenagerInterieur.jpg";
import salonModerne from "../assets/picture/salonModerne.jpg";
import croquisCuisine from "../assets/picture/croquisCuisine.jpg";
import colorisMatières from "../assets/picture/image-coloris-matières.png";
import avis1 from "../assets/picture/avis1.jpeg";
import avis2 from "../assets/picture/avis2.jpeg";
import avis3 from "../assets/picture/avis3.jpeg";
import avis4 from "../assets/picture/avis4.jpeg";
import choixElectro from "../assets/picture/choix-électroménager.png";
import croquis2 from "../assets/picture/croquis2.jpg";
import madeFrance from "../assets/picture/madeFrance.png";
import logoLivraison from "../assets/picture/logoLivraison.png";
import logoGaranti from "../assets/picture/garanti7.png";
import croquis4 from "../assets/picture/croquis4.jpg";
import croquis3 from "../assets/picture/croquis3.jpg";
import logo2 from "../assets/picture/logoArchideco.png";

import { FaStar } from "react-icons/fa6";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-vertical">
      <Header />

      <main className="bg-green-700">
        <div className="flex flex-col md:flex-row items-center justify-center bg-fixed p-8 bg-green-vertical h-[70vh]">
          <div className="relative w-auto bg-green-light border-white h-auto mb-4 md:mb-0">
            <img
              src={sampleImage}
              alt="Sample"
              className="w-full h-full object-cover"
              style={{ position: "relative", left: "30px", top: "30px" }}
            />
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:items-start p-9 rounded-lg">
            <div className="flex flex-col md:flex-row items-center mb-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center md:text-left">
                Bienvenue chez
              </h3>
              <div className="flex items-center mb-4 mt-4 md:mt-0">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-12 w-12 max-lg:h-10 ml-4 max-lg:w-10"
                />
                <h3 className="text-2xl font-extrabold -ml-4 mt-3 text-white pt-1 max-lg:text-sm">
                  Archideco
                </h3>
              </div>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-white font-normal text-center md:text-left mb-4">
              Nous transformons vos espaces de vie en havres de confort et de
              style. Explorez notre collection et commencez à créer l'intérieur
              de vos rêves.
            </p>
            <button className="bg-green-light text-white p-3 md:p-5 mt-6 md:mt-8 rounded hover:bg-white hover:text-custom-bg transition-all duration-300">
              Créer mon chez moi
            </button>
          </div>
        </div>

        <div className="flex flex-col min-h-screen bg-white p-8">
          <div className="flex flex-col items-center justify-center flex-grow text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-custom-bg pl-4 pr-4 md:pl-12 md:pr-12 mt-8 font-bold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-8 before:h-2 before:bg-custom-bg before:-translate-y-1/2 before:rounded-full after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-8 after:h-2 after:bg-custom-bg after:-translate-y-1/2 after:rounded-full">
              Explorez notre gamme de produits
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-green-light w-full md:w-2/3 mt-6 mb-12 font-normal">
              Tous nos produits sont conçus avec un savoir-faire minutieux par
              nos artisans hautement qualifiés pour vous assurer une finition et
              un confort hors du commun.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <div className="bg-custom-bg shadow-md rounded-bl-3xl rounded-tl-3xl w-full md:max-w-xs h-[450px] flex flex-col">
              <div className="w-full h-[80%] overflow-hidden rounded-tl-3xl">
                <img
                  src={salleDeBain}
                  alt="Salle de Bain"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-4 h-[20%]">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-center text-white mt-2">
                  Nos salles de bains
                </h3>
              </div>
            </div>

            <div className="bg-custom-bg shadow-md w-full md:max-w-xs h-[450px] flex flex-col">
              <div className="w-full h-[80%] overflow-hidden">
                <img
                  src={cuisineModerne}
                  alt="Cuisine Moderne"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-4 h-[20%]">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-center text-white mt-2">
                  Nos cuisines
                </h3>
              </div>
            </div>

            <div className="bg-custom-bg shadow-md w-full md:max-w-xs h-[450px] flex flex-col">
              <div className="w-full h-[80%] overflow-hidden">
                <img
                  src={électroménager}
                  alt="Électroménager"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-4 h-[20%]">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-center text-white mt-2">
                  Nos Électroménager
                </h3>
              </div>
            </div>

            <div className="bg-custom-bg shadow-md rounded-br-3xl rounded-tr-3xl w-full md:max-w-xs h-[450px] flex flex-col">
              <div className="w-full h-[80%] overflow-hidden">
                <img
                  src={salonModerne}
                  alt="Salon Moderne"
                  className="w-full h-full object-cover rounded-tr-3xl"
                />
              </div>
              <div className="flex flex-col justify-between p-4 h-[20%]">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-center text-white mt-2">
                  Nos meubles de salon
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse h-[70vh] p-14 bg-green-horizontal w-auto items-center justify-center">
          <div className="relative md:w-auto h-auto border-green-dark mr-10 flex justify-center items-center">
            <img
              src={croquisCuisine}
              alt="Sample"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:mr-12 flex flex-col items-start p-6 rounded-lg">
            <div className="flex items-center mb-4 justify-center">
              <h2 className="[font-size:27px] text-white pl-12 pr-12 mt-12 font-bold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-8 before:h-2 before:bg-white before:-translate-y-1/2 before:rounded-full after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-9 after:h-2 after:bg-white after:-translate-y-1/2 after:rounded-full">
                Jetez un coup d'œil à notre blog
              </h2>
            </div>
            <p className="mb-12 text-white text-2xl w-2/3 mt-12 font-normal">
              N’hésitez pas à visiter notre blog, qui regorge de conseils et
              d’inspiration pour votre maison.
            </p>
            <button className="bg-green-light text-white p-5 mt-14 rounded hover:bg-white hover:text-custom-bg transition-all duration-300 self-start">
              Contactez-nous
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-[70vh] p-14 bg-white w-auto">
          <div className="relative md:w-auto h-auto  mr-10 rounded-xl">
            <img
              src={colorisMatières}
              alt="Sample"
              className="w-auto h-auto object-containt"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:ml-12 flex flex-col items-start p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <h2 className="[font-size:27px] text-custom-bg pl-12 pr-12 mt-12 font-bold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-8 before:h-2 before:bg-custom-bg before:-translate-y-1/2 before:rounded-full after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-8 after:h-2 after:bg-custom-bg after:-translate-y-1/2 after:rounded-full">
                Personnalisez votre intérieur
              </h2>
            </div>
            <p className=" mb-12 text-black text-2xl w-2/3 mt-12 font-normal">
              Personnalisez votre intérieur comme bon vous semble avec notre
              large choix de colories et de matières.
            </p>
            <button className="bg-custom-bg text-white p-5 mt-14 rounded hover:bg-green-light transition-all duration-300">
              Personnaliser
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse h-[70vh] p-14 bg-green-horizontal-revers w-auto">
          <div className="relative md:w-1/2 h-auto mr-10">
            <img
              src={choixElectro}
              alt="Sample"
              className="w-auto h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:mr-12 flex flex-col items-start p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <h2 className="[font-size:27px] text-white pl-12 pr-12 mt-12 font-bold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-8 before:h-2 before:bg-white before:-translate-y-1/2 before:rounded-full after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-9 after:h-2 after:bg-white after:-translate-y-1/2 after:rounded-full">
                Équipez vos intérieurs d'électroménager
              </h2>
            </div>
            <p className="mb-12 text-white text-2xl w-2/3 mt-12 font-normal">
              Visitez notre catalogue d'électroménager afin d'équiper vos
              intérieurs avec les appareils les plus modernes et performants.
            </p>
            <button className="bg-custom-bg text-white p-5 mt-14 rounded hover:bg-white hover:text-custom-bg transition-all duration-300">
              Contactez-nous
            </button>
          </div>
        </div>
        <div className="flex flex-col h-[80vh] bg-white p-6">
          <div className="flex flex-col items-center justify-center flex-grow text-center">
            <h2 className="[font-size:27px] text-custom-bg pl-12 pr-12 mb-12 font-bold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-8 before:h-2 before:bg-custom-bg before:-translate-y-1/2 before:rounded-full after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-9 after:h-2 after:bg-custom-bg after:-translate-y-1/2 after:rounded-full">
              Découvrez ce que nos clients pensent de nous
            </h2>
            <div className="flex items-center space-x-4 pt-8">
              <FaStar className="text-3xl text-green-light" />
              <FaStar className="text-3xl text-green-light" />
              <FaStar className="text-3xl text-green-light" />
              <FaStar className="text-3xl text-green-light" />
              <FaStar className="text-3xl text-green-light" />
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-20">
            <div className="bg-green-light rounded-xl w-auto max-w-xs h-auto flex flex-col p-4">
              <div className="w-auto h-auto overflow-hidden rounded-tl-3xl">
                <p className="w-full p-4 text-white rounded-tl-3xl [font-size:18px]">
                  “Je suis ravi de mon expérience avec ce site ! Le catalogue
                  d'électroménager est vaste et varié, ce qui m'a permis de
                  trouver exactement ce dont j'avais besoin pour mon intérieur.“
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={avis1}
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4 border-white"
                  />
                  <span className="font-semibold text-white">
                    Franck DUPOND
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-custom-bg rounded-xl border-green-dark w-auto max-w-xs h-auto flex flex-col p-4">
              <div className="w-auto h-auto overflow-hidden">
                <p className="w-full p-4 text-white rounded-tl-3xl [font-size:18px]">
                  “Ce site est une véritable perle pour tous ceux qui cherchent
                  à moderniser leur intérieur. J'ai trouvé un large choix
                  d'électroménager de haute qualité, et la livraison a été
                  rapide et sans accroc.“
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={avis2}
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4 border-white"
                  />
                  <span className="font-semibold text-white">
                    Sophie AMMARD
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-custom-bg rounded-xl w-auto max-w-xs h-auto flex flex-col p-4">
              <div className="w-auto h-auto overflow-hidden">
                <p className="w-full p-4 text-white rounded-tl-3xl [font-size:18px]">
                  “Excellente expérience d'achat ! Le site propose une gamme
                  impressionnante d'électroménager, avec des descriptions
                  détaillées et des avis utiles. La commande a été simple et
                  rapide.”
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={avis3}
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4 border-white"
                  />
                  <span className="font-semibold text-white">
                    Anna BERTRAND
                  </span>
                </div>
              </div>
            </div>

            <div className=" bg-green-light rounded-xl w-auto max-w-xs h-auto flex flex-col p-4">
              <div className="w-auto h-auto overflow-hidden">
                <p className="w-full p-4 text-white rounded-tl-3xl [font-size:18px]">
                  “J'ai récemment rénové ma cuisine en utilisant les produits de
                  ce site, et je suis absolument ravi du résultat ! Le choix de
                  cuisines est impressionnant, avec une variété de styles.”
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={avis4}
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4 border-white"
                  />
                  <span className="font-semibold text-white">Dylan RIEU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[70vh] bg-green-horizontal p-6">
          <div className="flex flex-col items-center justify-center flex-grow text-center">
            <h2 className="[font-size:27px] text-white pl-12 pr-12 mb-12 font-bold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-8 before:h-2 before:bg-white before:-translate-y-1/2 before:rounded-full after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-9 after:h-2 after:bg-white after:-translate-y-1/2 after:rounded-full">
              Découvrez ce que nos clients pensent de nous
            </h2>
          </div>
          <div className="flex bg-white justify-center gap-12 mb-20 pt-10 pb-10 ml-12 mr-12 rounded-xl">
            <div className="rounded-xl  w-auto max-w-xs h-auto flex flex-col p-2">
              <div className="relative w-full h-full overflow-visible">
                <img
                  src={croquis2}
                  alt="Sample"
                  className="w-full h-full object-cover rounded-xl border-green-dark"
                />
                <div className="absolute top-[-30px] right-[-30px] w-28	 h-28">
                  <img
                    src={madeFrance}
                    alt="Petite Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl w-auto max-w-xs h-auto flex flex-col p-2">
              <div className="relative w-full h-full overflow-visible">
                <img
                  src={croquis3}
                  alt="Sample"
                  className="w-full h-full object-cover rounded-xl border-clear"
                />
                <div className="absolute top-[-30px] right-[-30px] w-28	 h-28">
                  <img
                    src={logoLivraison}
                    alt="Petite Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl  w-auto max-w-xs h-auto flex flex-col p-2">
              <div className="relative w-full h-full overflow-visible">
                <img
                  src={croquis4}
                  alt="Sample"
                  className="w-full h-full object-cover rounded-xl border-green-dark"
                />
                <div className="absolute top-[-30px] right-[-30px] w-28	 h-28">
                  <img
                    src={logoGaranti}
                    alt="Petite Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
