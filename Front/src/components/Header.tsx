import React, { useState } from "react";
import { FaUser, FaHeart, FaCartShopping } from "react-icons/fa6";
import { Menu, ListX } from "lucide-react";
import logo from "../assets/picture/logo.png";
import cuisine from "../assets/picture/cuisine1.png";
import douche from "../assets/picture/salle-de-bain.jpg";
import salon from "../assets/picture/salon.jpg";
import grosElectro from "../assets/picture/gros-électro.jpg";
import petitElectro from "../assets/picture/petit-électro.webp";

const Header: React.FC = () => {
  const [isProductsVisible, setIsProductsVisible] = useState<boolean>(false);
  const [open, isOpen] = useState<boolean>(false);

  const toggleProductsVisibility = () => {
    setIsProductsVisible(!isProductsVisible);
  };

  const openMobileMenu = () => {
    open ? isOpen(false) : isOpen(true);
  };

  return (
    <>
      <header className="flex items-center h-30 justify-between p-4 bg-custom-bg text-white">
        <div className="flex items-center ml-10 max-lg:ml-0">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 max-lg:h-10 max-lg:w-10"
          />
          <h1 className="text-2xl font-extrabold -ml-2 mt-3 pt-1 max-lg:text-sm">
            Archideco
          </h1>
        </div>

        <nav className="flex-grow flex justify-center space-x-8 font-medium max-lg:hidden">
          <a
            href="#"
            className="custom-link "
            onClick={toggleProductsVisibility}
          >
            Nos produits
          </a>
          <a href="#" className="custom-link">
            Actualités
          </a>
          <a href="#" className="custom-link">
            Notre histoire
          </a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex items-center space-x-4 md:space-x-10 mr-4 md:mr-10 font-medium">
          <a href="#" className="relative flex items-center">
            <FaUser className="text-base md:text-xl" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-700 rounded-full"></span>
          </a>
          <a href="#" className="relative flex items-center">
            <FaHeart className="text-base md:text-xl" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-700 rounded-full"></span>
          </a>
          <a href="#" className="relative flex items-center">
            <FaCartShopping className="text-base md:text-xl" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-700 rounded-full"></span>
          </a>
          <p
            className="hidden max-lg:block hover:cursor-pointer"
            onClick={openMobileMenu}
          >
            {open ? <ListX size={26} /> : <Menu size={26} />}
          </p>
        </div>
      </header>
      {/* Mobile */}
      <section className="h-auto px-1">
        <div
          className={`w-full h-auto flex-col items-start pt-2 justify-between gap-2 transition-max-height duration-500 ease-in-out ${
            open ? "flex" : "hidden -translate-y-20"
          }`}
        >
          <a
            href="#"
            className="custom-link-mobile "
            onClick={toggleProductsVisibility}
          >
            Nos produits
          </a>
          <a href="#" className="custom-link-mobile">
            Actualités
          </a>
          <a href="#" className="custom-link-mobile">
            Notre histoire
          </a>
          <a href="#" className="custom-link-mobile">
            Contact
          </a>
        </div>
      </section>
      {/* Mobile */}
      <div
        className={`overflow-scroll ${
          open ? "translate-y-3" : "-translate-y-10"
        } transition-max-height duration-500 ease-in-out ${
          isProductsVisible ? "max-h-auto" : "max-h-0"
        }`}
      >
        <div className=" text-black p-4 shadow-2xl ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="flex flex-col items-center">
              <h2 className="text-l font-bold mb-3 text-white">Nos cuisines</h2>
              <img
                src={cuisine}
                alt="Nos cuisines"
                className="w-full h-32 object-cover rounded-md border-white transition-transform duration-300 transform hover:scale-95 hover:border-opacity-60"
              />
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-l font-bold mb-3 text-white">
                Nos salles de bain
              </h2>
              <img
                src={douche}
                alt="Nos salles de bain"
                className="w-full h-32 object-cover rounded-md border-white transition-transform duration-300 transform hover:scale-95"
              />
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-l font-bold mb-3 text-white">Nos salons</h2>
              <img
                src={salon}
                alt="Nos salons"
                className="w-full h-32 object-cover rounded-md border-white transition-transform duration-300 transform hover:scale-95"
              />
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-l font-bold mb-3 text-white">
                Nos gros électroménagers
              </h2>
              <img
                src={grosElectro}
                alt="Nos gros électroménagers"
                className="w-full h-32 object-cover rounded-md border-white transition-transform duration-300 transform hover:scale-95"
              />
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-l font-bold mb-3 text-white">
                Nos petits électroménagers
              </h2>
              <img
                src={petitElectro}
                alt="Nos petits électroménagers"
                className="w-full h-32 object-cover rounded-md border-white transition-transform duration-300 transform hover:scale-95"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
