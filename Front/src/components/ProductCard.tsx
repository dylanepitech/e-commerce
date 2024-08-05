import { useState } from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  bgColor: string;
}

const ProductCard = ({ image, title, price, bgColor }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={`w-full max-w-[18rem] ${bgColor} border border-gray-200 rounded-lg shadow-md overflow-hidden relative`}>
      <div className={`absolute top-0 left-0 ${bgColor} text-white text-lg p-2 rounded-br-lg`}>
        À partir de {price} €
      </div>
      <div className="absolute right-2 z-10">
        <button 
          onClick={toggleFavorite}
          className="focus:outline-none"
        >
          <svg 
            className={`w-12 h-12 ${isFavorite ? 'text-red-500' : 'text-green-light'}`}
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fillRule="evenodd" 
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
      </div>
      <img src={image} alt={title} className="w-full h-80 object-cover" />
      <div className="p-4">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <br />
        <a href="#" className="text-white hover:underline flex items-center">
          En savoir plus
          <svg
            className="w-4 h-4 inline-block ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;