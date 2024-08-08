import { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import FilterButton from "../components/FilterButton";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom';
import { AuthContext } from "../hooks/AuthContext"; 
import "../index.css";
import cuisine from "../assets/picture/cuisine1.png";
import image1 from "../assets/picture/image1.png";
import image2 from "../assets/picture/image2.png";
import image3 from "../assets/picture/image3.png";
import image4 from "../assets/picture/image4.png";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

const CategoryPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const { category } = useParams();
  const { authToken } = useContext(AuthContext);
  const formattedCategory = category ? category.replace(/-/g, ' ').toUpperCase() : "";

  useEffect(() => {
    if(authToken){

      console.log("Token:", authToken);
    }
    
  }, [authToken]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("../data/products.json");
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("erreur", error);
      }
    };

    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-green-vertical">
        <Header />
        <div className="flex justify-center p-5">
          <div className="flex w-full max-w-6xl justify-center">
            <div className="w-[1000px] h-[400px] p-5 bg-white border border-white shadow-lg rounded-lg mr-8">
              <h2 className="mb-4 text-3xl font-bold gotham-bold-font mt-3">
                NOS {formattedCategory}
              </h2>
              <br />
              <p className="text-xl gotham-font">
                Découvrez ci-dessous nos cuisines modernes et fonctionnelles,
                alliant élégance et praticité. Chaque modèle est conçu avec des
                matériaux de haute qualité pour s'intégrer parfaitement à votre
                espace. Trouvez la cuisine idéale et prenez rendez-vous dans
                l’un de nos trois magasins{" "}
                <span className="text-green-light">MOBALPA</span> à Marseille.
              </p>
              <br />
              <button className="bg-green-light hover:bg-custom-bg text-white text-lg py-2 px-4 mt-4 font-semibold">
                Nos magasins MOBALPA
              </button>
            </div>
            <div className="w-[1000px] h-[400px] ml-8">
              <img
                src={cuisine}
                alt="Cuisine"
                className="w-full h-full object-cover rounded-lg border-4 border-white"
                style={{ borderWidth: "4px" }}
              />
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
      <div className="flex flex-col items-center p-5 bg-white w-full mt-2">
        <div className="flex space-x-12">
          {[
            "Trier",
            "Taille",
            "Couleur",
            "Matériaux",
            "Promo",
            "Plus de filtres",
          ].map((label) => (
            <FilterButton key={label} label={label} />
          ))}
        </div>
        <br></br>
        <br></br>
        <div className="w-full max-w-6xl mt-2">
          <hr className="border-t-1 border-black" />
        </div>
      </div>
      <div className="flex justify-center p-5 mt-2">
        <ProductGrid products={currentProducts} />
      </div>
      <br></br>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <br></br>
      <br></br>
      <br></br>

      <div className="bg-green-horizontal py-4 flex flex-col items-center">
        <div className="flex justify-center items-center space-x-8">
          <div className="flex flex-col items-center">
            <div className="w-44 h-44 border-2 border-white rounded-full flex items-center justify-center mt-6">
              <div className="w-36 h-36 overflow-hidden relative">
                <img
                  src={image1}
                  alt="Image 1"
                  className="object-contain w-full h-full absolute"
                />
              </div>
            </div>
            <p className="text-center text-white mt-2">Choisissez votre cuisine</p>
          </div>
          <div className="w-24 h-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 24"
              className="w-full h-full"
            >
              <path d="M0 12h80M80 12l-5-5m5 5l-5 5" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-44 h-44 border-2 border-white rounded-full flex items-center justify-center mt-6">
              <div className="w-28 h-28 overflow-hidden relative">
                <img
                  src={image2}
                  alt="Image 2"
                  className="object-contain w-full h-full absolute top-1 left-1"
                />
              </div>
            </div>
            <p className="text-center text-white mt-2">Configurez-la comme bon<br /> vous semble</p>
          </div>
          <div className="w-24 h-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 24"
              className="w-full h-full"
            >
              <path d="M0 12h80M80 12l-5-5m5 5l-5 5" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-44 h-44 border-2 border-white rounded-full flex items-center justify-center mt-6">
              <div className="w-28 h-28 overflow-hidden">
                <img
                  src={image3}
                  alt="Image 3"
                  className="object-contain w-full h-full ml-1 mt-1"
                />
              </div>
            </div>
            <p className="text-center text-white mt-2">
              Prenez rendez-vous<br /> dans l'un de nos trois magasins<br /> MOBALPA
            </p>
          </div>
          <div className="w-24 h-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 24"
              className="w-full h-full"
            >
              <path d="M0 12h80M80 12l-5-5m5 5l-5 5" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-44 h-44 border-2 border-white rounded-full flex items-center justify-center mt-6">
              <div className="w-34 h-34 overflow-hidden">
                <img
                  src={image4}
                  alt="Image 4"
                  className="object-contain w-full h-full mb-5"
                />
              </div>
            </div>
            <p className="text-center text-white mt-2">Visitez votre future<br /> cuisine en magasin</p>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default CategoryPage;
