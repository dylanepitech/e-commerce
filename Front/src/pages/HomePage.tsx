import Header from "../components/Header";
import "../index.css";
import sampleImage from "../assets/picture/cuisine2.jpg";
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
import Footer from "../components/Footer";
import { FaStar } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-green-vertical">
      <Header />

      <main className="bg-green-700">
        <div className="flex flex-col md:flex-row items-center justify-center bg-fixed p-0 md:p-8 bg-green-vertical h-auto md:h-[70vh]">
          <div className="relative w-full md:w-auto bg-green-light border-white h-auto mb-4 md:mb-0">
            <img
              src={sampleImage}
              alt="Sample"
              className="w-full h-full object-cover"
              style={{ position: "relative", left: "10px", top: "10px" }}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-0 md:p-9 rounded-lg">
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
                <div className="flex items-center mb-4 md:mb-0">
                  <h3 className="text-lg md:text-2xl lg:text-3xl text-white font-bold text-center md:text-left">
                    Bienvenue chez ARCHIDECO
                  </h3>
                </div>
              </div>
            </div>
            <p className="text-sm md:text-base lg:text-lg text-white font-normal text-center md:text-left mb-4">
              Nous transformons vos espaces de vie en havres de confort et de
              style. Explorez notre collection et commencez à créer l'intérieur
              de vos rêves.
            </p>
            <button className="bg-green-light text-white p-2 mb-6 md:p-3 lg:p-4 mt-4 md:mt-6 rounded-sm md:rounded hover:bg-white hover:text-custom-bg transition-all duration-300 text-sm md:text-base">
              Créer mon chez moi
            </button>
          </div>
        </div>

        <div className="flex flex-col h-auto bg-white p-4 md:p-8">
          <div className="flex flex-col items-center justify-center flex-grow text-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl text-custom-bg px-4 md:px-12 pt-10 pb-10 font-bold relative custom-h2">
              Explorez notre gamme de produits
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-green-light w-full md:w-2/3 mt-4 mb-12 font-normal">
              Tous nos produits sont conçus avec un savoir-faire minutieux par
              nos artisans hautement qualifiés pour vous assurer une finition et
              un confort hors du commun.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <div className="bg-custom-bg shadow-md rounded-bl-3xl rounded-tl-3xl w-full md:max-w-xs h-[300px] md:h-[450px] flex flex-col">
              <div className="w-full h-[80%] overflow-hidden rounded-tl-3xl">
                <img
                  src={salleDeBain}
                  alt="Salle de Bain"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-4 h-[20%]">
                <h3 className="text-base md:text-lg font-semibold mb-2 text-center text-white mt-2">
                  Nos salles de bains
                </h3>
              </div>
            </div>

            <div className="bg-custom-bg shadow-md w-full md:max-w-xs h-[300px] md:h-[450px] flex flex-col">
              <div className="w-full h-[80%] overflow-hidden">
                <img
                  src={cuisineModerne}
                  alt="Cuisine Moderne"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-4 h-[20%]">
                <h3 className="text-base md:text-lg font-semibold mb-2 text-center text-white mt-2">
                  Nos cuisines
                </h3>
              </div>
            </div>

            <div className="bg-custom-bg shadow-md w-full md:max-w-xs h-[300px] md:h-[450px] flex flex-col">
              <div className="w-full h-[80%] overflow-hidden">
                <img
                  src={électroménager}
                  alt="Électroménager"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-4 h-[20%]">
                <h3 className="text-base md:text-lg font-semibold mb-2 text-center text-white mt-2">
                  Nos Électroménager
                </h3>
              </div>
            </div>

            <div className="bg-custom-bg shadow-md rounded-br-3xl rounded-tr-3xl w-full md:max-w-xs h-[300px] md:h-[450px] flex flex-col">
              <div className="w-full h-[80%] overflow-hidden">
                <img
                  src={salonModerne}
                  alt="Salon Moderne"
                  className="w-full h-full object-cover rounded-tr-3xl"
                />
              </div>
              <div className="flex flex-col justify-between p-4 h-[20%]">
                <h3 className="text-base md:text-lg font-semibold mb-2 text-center text-white mt-2">
                  Nos meubles de salon
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse h-auto p-4 md:p-14 bg-green-horizontal w-full items-center justify-center">
          <div className="relative md:w-auto h-auto border-green-dark mb-4 md:mb-0 mt-8 md:mt-0 flex justify-center items-center">
            <img
              src={croquisCuisine}
              alt="Sample"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 flex flex-col items-center md:items-start p-4 md:p-6 rounded-lg">
            <div className="flex items-center mb-4 justify-center">
              <h2 className="text-xl md:text-3xl lg:text-4xl text-white px-4 md:px-12 mt-8 font-bold text-center md:text-left relative custom-h2">
                Jetez un coup d'œil à notre blog
              </h2>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-white mb-8 mt-6 md:mb-12 text-center md:text-left">
              N’hésitez pas à visiter notre blog, qui regorge de conseils et
              d’inspiration pour votre maison.
            </p>

            <button className="bg-custom-bg md:bg-green-light text-white p-3 md:p-5 mt-4 md:mt-6 rounded md:hover:bg-white hover:bg-green-light hover:text-custom-bg transition-all duration-300">
              Contactez-nous
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-auto p-4 md:p-14 bg-white w-full items-center md:items-start justify-center md:justify-start">
          <div className="relative md:w-auto h-auto mr-0 md:mr-10 rounded-xl flex justify-center">
            <img
              src={colorisMatières}
              alt="Sample"
              className="w-auto h-auto object-contain"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:ml-12 flex flex-col items-center md:items-start p-6 rounded-lg">
            <div className="flex flex-col items-center md:items-start mb-4">
              <h2 className="text-xl md:text-3xl lg:text-4xl text-custom-bg px-4 md:px-12 mt-8 font-bold text-center md:text-left relative custom-h2">
                Personnalisez votre intérieur
              </h2>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-black mb-8 mt-6 md:mb-12 text-center md:text-left">
              Personnalisez votre intérieur comme bon vous semble avec notre
              large choix de colories et de matières.
            </p>
            <button className="bg-custom-bg text-white p-5 mt-10 rounded hover:bg-green-light transition-all duration-300">
              Personnaliser
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse h-auto p-4 md:p-14 bg-green-horizontal-revers w-full items-center md:items-start justify-center md:justify-start">
          <div className="relative md:w-1/2 h-auto flex justify-center md:mr-10">
            <img
              src={choixElectro}
              alt="Sample"
              className="w-auto h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:mr-12 flex flex-col items-center md:items-start p-6 rounded-lg">
            <div className="flex flex-col items-center md:items-start mb-4">
              <h2 className="text-xl md:text-3xl lg:text-4xl text-white px-4 md:px-12 mt-8 font-bold text-center md:text-left relative custom-h2">
                Équipez vos intérieurs d'électroménager
              </h2>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-white mb-8 mt-6 md:mb-12 text-center md:text-left">
              Visitez notre catalogue d'électroménager afin d'équiper vos
              intérieurs avec les appareils les plus modernes et performants.
            </p>
            <button className="bg-green-light md:bg-custom-bg text-white p-3 md:p-5 mt-4 md:mt-6 rounded md:hover:bg-white hover:bg-custom-bg hover:text-custom-bg transition-all duration-300">
              Contactez-nous
            </button>
          </div>
        </div>
        <div className="flex flex-col h-auto bg-white p-6 items-center justify-center text-center">
          <div className="flex flex-col items-center justify-center flex-grow">
            <h2 className="text-xl md:text-3xl lg:text-4xl text-custom-bg px-4 md:px-12 mt-8 font-bold text-center md:text-left relative custom-h2">
              Découvrez ce que nos clients pensent de nous
            </h2>
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 pt-8">
              <FaStar className="text-xl sm:text-3xl text-green-light" />
              <FaStar className="text-xl sm:text-3xl text-green-light" />
              <FaStar className="text-xl sm:text-3xl text-green-light" />
              <FaStar className="text-xl sm:text-3xl text-green-light" />
              <FaStar className="text-xl sm:text-3xl text-green-light" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-4 sm:mt-8 mb-20">
            <div className="bg-green-light rounded-xl w-full max-w-xs h-auto flex flex-col p-4">
              <div className="w-full h-auto overflow-hidden rounded-tl-3xl">
                <p className="w-full p-4 text-white rounded-tl-3xl text-base sm:text-lg">
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

            <div className="bg-custom-bg rounded-xl border-green-dark w-full max-w-xs h-auto flex flex-col p-4">
              <div className="w-full h-auto overflow-hidden">
                <p className="w-full p-4 text-white rounded-tl-3xl text-base sm:text-lg">
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

            <div className="bg-custom-bg rounded-xl w-full max-w-xs h-auto flex flex-col p-4">
              <div className="w-full h-auto overflow-hidden">
                <p className="w-full p-4 text-white rounded-tl-3xl text-base sm:text-lg">
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

            <div className="bg-green-light rounded-xl w-full max-w-xs h-auto flex flex-col p-4">
              <div className="w-full h-auto overflow-hidden">
                <p className="w-full p-4 text-white rounded-tl-3xl text-base sm:text-lg">
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

        <div className="flex flex-col h-auto bg-green-horizontal p-6">
          <div className="flex flex-col items-center justify-center flex-grow text-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl text-white px-4 md:px-12 mt-8 font-bold text-center md:text-left relative custom-h2">
              Nos points forts
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-12 mb-10 mt-8 sm:mb-20 pt-8 pb-10 mx-4 sm:mx-12 rounded-xl bg-white">
            <div className="rounded-xl w-full max-w-xs h-auto flex flex-col p-2">
              <div className="relative w-full h-full overflow-visible">
                <img
                  src={croquis2}
                  alt="Sample"
                  className="w-full h-full object-cover rounded-xl border-green-dark"
                />
                <div className="absolute top-[-30px] right-[-30px] w-28 h-28">
                  <img
                    src={madeFrance}
                    alt="Petite Image"
                    className="responsive-image"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl w-full max-w-xs h-auto flex flex-col p-2">
              <div className="relative w-full h-full overflow-visible">
                <img
                  src={croquis3}
                  alt="Sample"
                  className="w-full h-full object-cover rounded-xl border-clear"
                />
                <div className="absolute top-[-30px] right-[-30px] w-28 h-28">
                  <img
                    src={logoLivraison}
                    alt="Petite Image"
                    className="responsive-image"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl w-full max-w-xs h-auto flex flex-col p-2">
              <div className="relative w-full h-full overflow-visible">
                <img
                  src={croquis4}
                  alt="Sample"
                  className="w-full h-full object-cover rounded-xl border-green-dark"
                />
                <div className="absolute top-[-30px] right-[-30px] w-28 h-28">
                  <img
                    src={logoGaranti}
                    alt="Petite Image"
                    className="responsive-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
