interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  bgColor: string;
}

const ProductCard = ({ image, title, price, bgColor }: ProductCardProps) => {

  return (
    <div className={`w-full max-w-[18rem] ${bgColor} border border-gray-200 rounded-lg shadow-md overflow-hidden relative`}>
      <div className={`absolute top-0 left-0 ${bgColor} text-white text-lg p-2 rounded-br-lg `}>
        À partir de {price} €
      </div>
      <img src={image} alt={title} className="w-full h-80 object-cover " />
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