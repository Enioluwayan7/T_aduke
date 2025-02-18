import React, { useEffect, useState } from "react";
import { X, ShoppingCart } from "lucide-react";
import { products } from "../utils/contants";

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantities, setQuantities] = useState({});

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    let updatedCart;
    if (existingItem) {
      setQuantities((prev) => ({
        ...prev,
        [item.id]: (prev[item.id] || 1) + 1,
      }));
      updatedCart = cart;
    } else {
      updatedCart = [...cart, item];
      setCart(updatedCart);
      setQuantities((prev) => ({
        ...prev,
        [item.id]: 1,
      }));
    }
    setIsCartOpen(false);

    const cartData = {
      items: updatedCart,
      quantities: {
        ...quantities,
        [item.id]: existingItem ? (quantities[item.id] || 1) + 1 : 1,
      },
    };
    localStorage.setItem("cartData", JSON.stringify(cartData));

    console.log(item);
  };

  useEffect(() => {
    const savedCartData = localStorage.getItem("cartData");
    if (savedCartData) {
      const { items, quantities } = JSON.parse(savedCartData);
      setCart(items);
      setQuantities(quantities);
    }
  }, []);

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[itemId];
      return newQuantities;
    });
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
    } else {
      setQuantities((prev) => ({
        ...prev,
        [itemId]: newQuantity,
      }));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + item.price * (quantities[item.id] || 1);
    }, 0);
  };

  return (
    <div className="relative">
      {/* Cart Icon with Counter */}
      <div className="cart-icon">
        <button className="cart-button" onClick={() => setIsCartOpen(true)}>
          <ShoppingCart size={20} />
          <span className="cart-count">{cart.length}</span>
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
                <p className="prd-name">{product.name}</p>
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
        <div className="cart-overlay">
          <div className="cart-container">
            <div className="cart-header">
              <h2 className="cart-title">Shopping Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="close-button"
              >
                <X size={24} />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-price">£{item.price}</p>
                      <div className="quantity-controls">
                        <button
                          className="quantity-btn"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              (quantities[item.id] || 1) - 1
                            )
                          }
                        >
                          -
                        </button>
                        <span>{quantities[item.id] || 1}</span>
                        <button
                          className="quantity-btn"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              (quantities[item.id] || 1) + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <div className=".cart-footer">
                  <div className="total">
                    <span>Total:</span>
                    <span>£{getTotalPrice()}</span>
                  </div>
                  <button className="checkout-btn">Checkout</button>
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
