import { useEffect, useState } from "react";
import Header from "../components/Header";
import FilterButton from "../components/FilterButton";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
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
  size: string;
}

const CategoryPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState<{
    min: number;
    max: number;
    current: number;
  }>({ min: 0, max: 0, current: 0 });
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("./data/products.json");
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);

        const prices = data.products.map((p: Product) => p.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        setPriceRange({ min: minPrice, max: maxPrice, current: minPrice });

        const sizes = [
          ...new Set(data.products.map((p: Product) => p.size)),
        ] as string[];
        setAvailableSizes(sizes);
      } catch (error) {
        console.error("erreur", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = products;

    result = result.filter(
      (product) =>
        product.price >= priceRange.current && product.price <= priceRange.max
    );

    if (selectedSizes.length > 0) {
      result = result.filter((product) => selectedSizes.includes(product.size));
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [products, priceRange.current, selectedSizes]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange((prev) => ({ ...prev, current: Number(event.target.value) }));
  };

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-green-vertical">
        <Header />
        <div className="flex justify-center p-5">
          <div className="flex w-full max-w-6xl justify-center">
            <div className="w-[1000px] h-[400px] p-5 bg-white border border-white shadow-lg rounded-lg mr-8">
              <h2 className="mb-4 text-3xl gotham-bold-font mt-3 aquawax-medium">
                NOS CUISINES
              </h2>
              <br />
              <p className="text-xl gotham-medium_1">
                Découvrez ci-dessous nos cuisines modernes et fonctionnelles,
                alliant élégance et praticité. Chaque modèle est conçu avec des
                matériaux de haute qualité pour s'intégrer parfaitement à votre
                espace. Trouvez la cuisine idéale et prenez rendez-vous dans
                l'un de nos trois magasins{" "}
                <span className="text-green-light">MOBALPA</span> à Marseille.
              </p>
              <br />
              <button className="bg-green-light hover:bg-custom-bg text-white text-lg py-2 px-4 mt-1 font-semibold">
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
          <FilterButton label="Prix">
            <div className="px-4 py-2">
              <input
                type="range"
                min={priceRange.min}
                max={priceRange.max}
                value={priceRange.current}
                onChange={handlePriceChange}
                className="w-full"
              />
              <p>
                Prix: {priceRange.current}€ - {priceRange.max}€
              </p>
            </div>
          </FilterButton>
          <FilterButton label="Taille">
            <div className="px-4 py-2">
              {availableSizes.map((size) => (
                <label key={size} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedSizes.includes(size)}
                    onChange={() => handleSizeChange(size)}
                    className="mr-2"
                  />
                  {size}
                </label>
              ))}
            </div>
          </FilterButton>
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

      <div className="bg-green-horizontal-revers py-4 flex flex-col items-center">
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
            <p className="text-center text-white mt-4 gotham-medium_1">
              Choisissez votre cuisine
            </p>
          </div>
          <div className="w-24 h-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 24"
              className="w-full h-full"
            >
              <path
                d="M0 12h80M80 12l-5-5m5 5l-5 5"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center mt-6">
            <div className="w-44 h-44 border-2 border-white rounded-full flex items-center justify-center mt-6">
              <div className="w-28 h-28 overflow-hidden relative">
                <img
                  src={image2}
                  alt="Image 2"
                  className="object-contain w-full h-full absolute top-1 left-1"
                />
              </div>
            </div>
            <p className="text-center text-white mt-4 gotham-medium_1">
              Configurez-la comme
              <br /> bon vous semble
            </p>
          </div>
          <div className="w-24 h-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 24"
              className="w-full h-full"
            >
              <path
                d="M0 12h80M80 12l-5-5m5 5l-5 5"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center mt-11">
            <div className="w-44 h-44 border-2 border-white rounded-full flex items-center justify-center mt-6">
              <div className="w-28 h-28 overflow-hidden">
                <img
                  src={image3}
                  alt="Image 3"
                  className="object-contain w-full h-full ml-1 mt-1"
                />
              </div>
            </div>
            <p className="text-center text-white mt-4 gotham-medium_1">
              Prenez rendez-vous dans
              <br /> l'un de nos trois magasins
              <br /> MOBALPA
            </p>
          </div>
          <div className="w-24 h-12 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 24"
              className="w-full h-full"
            >
              <path
                d="M0 12h80M80 12l-5-5m5 5l-5 5"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center mt-6">
            <div className="w-44 h-44 border-2 border-white rounded-full flex items-center justify-center mt-6">
              <div className="w-34 h-34 overflow-hidden">
                <img
                  src={image4}
                  alt="Image 4"
                  className="object-contain w-full h-full mb-5"
                />
              </div>
            </div>
            <p className="text-center text-white mt-4 gotham-medium_1">
              Visitez votre future
              <br /> cuisine en magasin
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
