import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const ProductDetails = () => {
  const { id } = useParams(); // Retrieve product ID from URL

  // Mock product data (in a real app, this would be fetched from an API)
  const product = {
    id: id,
    name: 'Stylish Summer Dress',
    price: '89.90',
    description: 'A beautiful summer dress perfect for any occasion.',
    images: [
      'https://www.w3schools.com/w3images/avatar_smoke.jpg',
      'https://www.w3schools.com/w3images/man_bench.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy', 'Gray']
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg font-semibold mb-2">€{product.price}</p>
      <p className="mb-4">{product.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={product.images[0]} alt={product.name} className="w-full h-64 object-cover mb-4" />
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <img key={index} src={image} alt={product.name} className="w-full h-24 object-cover cursor-pointer hover:opacity-80" />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Select Size</h3>
          <div className="grid grid-cols-5 gap-2 mb-4">
            {product.sizes.map((size) => (
              <button key={size} className="py-2 border border-gray-300 hover:border-black transition-colors">
                {size}
              </button>
            ))}
          </div>
          <h3 className="text-lg font-semibold mb-2">Select Color</h3>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {product.colors.map((color) => (
              <button key={color} className="py-2 border border-gray-300 hover:border-black transition-colors">
                {color}
              </button>
            ))}
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
