import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Array<{
    image: string;
    title: string;
    price: number;
  }>;
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
          bgColor={index % 2 === 0 ? 'bg-custom-bg' : 'bg-green-light'}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
