import React, { useState } from 'react';
import { X, ShoppingCart } from 'lucide-react';

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantities, setQuantities] = useState({});

  const products = [
    { id: 1, name: 'Eve maxi Dress', price: 80, image: './images/Eve.jpg' },
    { id: 2, name: 'Aduke black dress with aso-oke Rose', price: 80, image: './images/Aduke.jpg' },
    { id: 3, name: 'FUNMILAYO reflective maxi dress', price: 120, image: './images/Funmilayo.jpg' },
    { id: 4, name: 'Olufayo Black Maxi reflective flare dress', price: 89, image: './images/Olufayo.jpeg' },
    { id: 5, name: 'DamDam luxe blazer', price: 150, image: './images/DamDam.jpeg' },
    { id: 6, name: 'Temilade Gradient Laser Texture maxi dress', price: 120, image: './images/Temilade.jpeg' },
    { id: 7, name: 'Grandeur short black dress with white flower like design', price: 80, image: './images/Grandeur.jpg' },
    { id: 8, name: 'Ifelodun maxi dress with asooke pocket and bush tassel', price: 100, image: './images/Ifelodun.jpg' },
    { id: 9, name: 'IREPODUN maxi dress', price: 200, image: './images/Irepodun.jpg' },
    { id: 10, name: 'MORENIKE maxi dress with bush tassel', price: 100, image: './images/Morenike.jpg' },
    { id: 11, name: 'RERE maxi dress', price: 100, image: './images/Rere.jpg' }
  ];

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setQuantities(prev => ({
        ...prev,
        [item.id]: (prev[item.id] || 1) + 1
      }));
    } else {
      setCart([...cart, item]);
      setQuantities(prev => ({
        ...prev,
        [item.id]: 1
      }));
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
    setQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[itemId];
      return newQuantities;
    });
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
    } else {
      setQuantities(prev => ({
        ...prev,
        [itemId]: newQuantity
      }));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + (item.price * (quantities[item.id] || 1));
    }, 0);
  };

  return (
    <div className="relative">
      {/* Cart Icon with Counter */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          className="bg-black text-white p-3 rounded-full flex items-center gap-2"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart size={20} />
          <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {cart.length}
          </span>
        </button>
      </div>

      {/* Products Section */}
      <section className="products" id="products">
        <h2 className="col-head">Our Collection's</h2>
        <div className="product-list">
          {products.map((product) => (
            <div className="prod-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="prod-describe">
                <p>{product.name}</p>
                <p className="price">£{product.price}</p>
                <button className="btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">£{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button 
                          className="px-2 py-1 border rounded"
                          onClick={() => updateQuantity(item.id, (quantities[item.id] || 1) - 1)}
                        >
                          -
                        </button>
                        <span>{quantities[item.id] || 1}</span>
                        <button 
                          className="px-2 py-1 border rounded"
                          onClick={() => updateQuantity(item.id, (quantities[item.id] || 1) + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total:</span>
                    <span>£{getTotalPrice()}</span>
                  </div>
                  <button className="w-full bg-black text-white py-3 rounded mt-4 hover:bg-gray-800">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;