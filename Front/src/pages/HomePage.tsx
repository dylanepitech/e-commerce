import Header from "../components/Header";
import "../index.css";
import sampleImage from "../assets/picture/cuisine2.jpg";
import logo from "../assets/picture/logo.png";
import salleDeBain from "../assets/picture/Salle-de-bain2.jpg";
import cuisineModerne from "../assets/picture/cuisineModerne.jpg";
import électroménager from "../assets/picture/électromenagerInterieur.jpg";
import salonModerne from "../assets/picture/salonModerne.jpg";
import croquisCuisine from "../assets/picture/croquisCuisine.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-green-vertical">
      <Header />

      <main className="bg-green-700">
        <div className="flex flex-col md:flex-row bg-fixed p-8 items-center bg-green-vertical h-[70vh]">
          <div className="relative md:w-1/2 bg-green-light border-white">
            <img
              src={sampleImage}
              alt="Sample"
              className="w-full h-90 object-cover"
              style={{ left: "30px", top: "30px", position: "relative" }}
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 w-auto md:ml-12 flex flex-col items-start  p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <h2 className="text-3xl text-white font-bold flex-shrink-0">
                Bienvenue chez
              </h2>
              <div className="flex items-center ml-4 mb-7">
                <img src={logo} alt="Logo" className="h-12 w-12" />
                <h1 className="text-2xl font-extrabold -ml-4 mt-5 pb-1 text-white">
                  Archideco
                </h1>
              </div>
            </div>
            <p className="mb-4 text-white text-2xl font-light		">
              Nous transformons vos espaces de vie en havres de confort et de
              style. Explorez notre collection et commencez à créer l'intérieur
              de vos rêves.
            </p>
            <button className="bg-green-light text-white p-5 mt-14 rounded hover:bg-custom-bg transition-all duration-300">
              Créer mon chez moi
            </button>
          </div>
        </div>

        <div className="flex flex-col min-h-screen bg-white p-8">
          <div className="flex flex-col items-center justify-center flex-grow text-center">
            <h2 className="text-3xl text-custom-bg pl-12 pr-12 mt-12 font-bold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-8 before:h-2 before:bg-green-light before:-translate-y-1/2 before:rounded-full after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-9 after:h-2 after:bg-green-light after:-translate-y-1/2 after:rounded-full">
              Explorez notre gamme de produits
            </h2>
            <p className=" mb-12 text-green-light text-2xl w-2/3 mt-12 font-medium">
              Tous nos produits sont conçus avec un savoir-faire minutieux par
              nos artisans hautement qualifiés pour vous assurer une finition et
              un confort hors du commun.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-32">
            <div className="bg-custom-bg shadow-md rounded-bl-3xl rounded-tl-3xl w-full max-w-xs h-[450px] flex flex-col">
              <div className="w-full h-[90%] overflow-hidden rounded-tl-3xl">
                <img
                  src={salleDeBain}
                  alt="Sample"
                  className="w-full h-full object-cover p-1  rounded-tl-3xl"
                />
              </div>
              <div className="flex flex-col justify-between p-4 h-1/5">
                <h3 className="text-xl font-semibold mb-2 text-center text-white mt-2">
                  Nos salles de bains
                </h3>
              </div>
            </div>

            <div className="bg-custom-bg shadow-md  w-full max-w-xs h-[450px] flex flex-col">
              <div className="w-full h-[90%] overflow-hidden ">
                <img
                  src={cuisineModerne}
                  alt="Sample"
                  className="w-full h-full object-cover p-1 "
                />
              </div>
              <div className="flex flex-col justify-between p-4 h-1/5">
                <h3 className="text-xl font-semibold mb-2 text-center text-white mt-2">
                  Nos cuisines
                </h3>
              </div>
            </div>

            <div className="bg-custom-bg shadow-md  w-full max-w-xs h-[450px] flex flex-col">
              <div className="w-full h-[90%] overflow-hidden ">
                <img
                  src={électroménager}
                  alt="Sample"
                  className="w-full h-full object-cover p-1 "
                />
              </div>
              <div className="flex flex-col justify-between p-4 h-1/5">
                <h3 className="text-xl font-semibold mb-2 text-center text-white mt-2">
                  Nos Électroménager
                </h3>
              </div>
            </div>

            <div className="bg-custom-bg shadow-md rounded-br-3xl rounded-tr-3xl w-full max-w-xs h-[450px] flex flex-col">
              <div className="w-full h-[90%] overflow-hidden ">
                <img
                  src={salonModerne}
                  alt="Sample"
                  className="w-full h-full object-cover p-1 rounded-tr-3xl"
                />
              </div>
              <div className="flex flex-col justify-between p-4 h-1/5">
                <h3 className="text-xl font-semibold mb-2 text-center text-white mt-2">
                  Nos meubles de salon
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse h-[70vh] p-14 bg-green-horizontal w-full">
          <div className="relative md:w-1/2 h-full border-green-dark border-3">
            <img
              src={croquisCuisine}
              alt="Sample"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:mr-12 flex flex-col items-start bg-blue-800 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <h2 className="text-3xl text-white font-bold flex-shrink-0">
                Votre futur
              </h2>
              <div className="flex items-center ml-4 mb-7">
                <img src={logo} alt="Logo" className="h-12 w-12" />
                <h1 className="text-2xl font-extrabold -ml-4 mt-5 pb-1 text-white">
                  Archideco
                </h1>
              </div>
            </div>
            <p className="mb-4 text-white">
              Découvrez comment nous pouvons transformer votre espace pour en
              faire un lieu à la fois élégant et fonctionnel. Contactez-nous
              pour une consultation gratuite.
            </p>
            <button className="bg-custom-bg text-white py-2 px-4 rounded hover:bg-opacity-90 transition-all duration-300">
              Contactez-nous
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
