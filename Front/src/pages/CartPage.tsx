import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState('');

  useEffect(() => {
    const mockCartItems: CartItem[] = [
      { id: 1, title: "Cuisine Moderne", price: 5000, quantity: 1, image: "src/assets/picture/micro-ondes.jpg" },
      { id: 2, title: "Armoire de Cuisine", price: 1200, quantity: 2, image: "src/assets/picture/toaster.jpg" },
      
    ];
    setCartItems(mockCartItems);
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePromoCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Code promo soumis:', promoCode);
    setPromoCode('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Votre panier</h1><br />
        {cartItems.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-2/3 space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="border rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.title} className="w-24 h-24 object-cover mr-4 rounded" />
                    <div className="flex-grow">
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                      <p className="text-gray-600">{item.price} €</p>
                      <div className="flex items-center mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-200 px-2 py-1 rounded"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 px-2 py-1 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-red-700"
                      aria-label="Supprimer l'article"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="border rounded-lg p-4 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-center">Récapitulatif</h2>
                <div className="flex justify-between mb-2">
                  <span>Sous-total :</span>
                  <span>{total} €</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Frais de livraison :</span>
                  <span>Gratuit</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total :</span>
                    <span>{total} €</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-green-light text-white px-6 py-2 rounded hover:bg-custom-bg">
                  Valider mon panier
                </button>
                <form onSubmit={handlePromoCodeSubmit} className="mt-4">
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Code promo"
                      className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-light"
                    />
                    <button
                      type="submit"
                      className="bg-green-light text-white px-4 py-2 rounded-r-md hover:bg-custom-bg"
                    >
                      Appliquer
                    </button>
                  </div>
                </form>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">NOUS ACCEPTONS :</h3>
                  <div className="flex justify-center space-x-4">
                  <img src="src/assets/picture/mastercard.png" alt="Mastercard" className="w-12 h-12 object-contain" />
                  <img src="src/assets/picture/visa.png" alt="Mastercard" className="w-12 h-12 object-contain" />
                  <img src="src/assets/picture/americanexpress.png" alt="Mastercard" className="w-12 h-12 object-contain" />
                  <img src="src/assets/picture/paypal.png" alt="Mastercard" className="w-12 h-12 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;