import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart panel */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-light tracking-wider">SHOPPING BAG</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto py-6 px-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 tracking-wider">Your bag is empty</p>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-24 h-32 object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-light tracking-wider">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-black"
                        >
                          ✕
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 tracking-wider mt-1">
                        €{item.price}
                      </p>
                      <div className="mt-2 flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-black"
                        >
                          -
                        </button>
                        <span className="text-sm tracking-wider">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-black"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm tracking-wider">TOTAL</span>
              <span className="text-sm tracking-wider">€{getCartTotal().toFixed(2)}</span>
            </div>
            <button
              className="w-full py-3 bg-black text-white text-sm tracking-wider hover:bg-gray-800 transition-colors"
              onClick={() => {
                // Add checkout logic here
                alert('Proceeding to checkout...');
              }}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
