import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductDetails from './ProductDetails';
import { useCart } from '../context/CartContext';

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Elegant Evening Dress',
      price: '129.90',
      description: 'A stunning evening dress perfect for special occasions. Features delicate embroidery and a flattering silhouette.',
      images: [
        'https://www.w3schools.com/w3images/avatar_smoke.jpg',
        'https://www.w3schools.com/w3images/man_bench.jpg'
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Red']
    },
    {
      id: 2,
      name: 'Classic Blazer',
      price: '189.90',
      description: 'A timeless blazer that adds sophistication to any outfit. Tailored fit with premium materials.',
      images: [
        'https://www.w3schools.com/w3images/man_bench.jpg',
        'https://www.w3schools.com/w3images/avatar_smoke.jpg'
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Beige', 'Gray']
    },
    {
      id: 3,
      name: 'Summer Dress',
      price: '79.90',
      description: 'Light and breezy summer dress with floral pattern. Perfect for warm days and casual outings.',
      images: [
        'https://www.w3schools.com/w3images/avatar_smoke.jpg',
        'https://www.w3schools.com/w3images/man_bench.jpg'
      ],
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['White', 'Blue', 'Pink']
    },
    {
      id: 4,
      name: 'Designer Handbag',
      price: '299.90',
      description: 'Luxury leather handbag with gold hardware. Spacious interior with multiple compartments.',
      images: [
        'https://www.w3schools.com/w3images/man_bench.jpg',
        'https://www.w3schools.com/w3images/avatar_smoke.jpg'
      ],
      sizes: ['One Size'],
      colors: ['Black', 'Brown', 'Tan']
    },
    {
      id: 5,
      name: 'Statement Necklace',
      price: '49.90',
      description: 'Bold and eye-catching necklace that elevates any outfit. Made with high-quality materials.',
      images: [
        'https://www.w3schools.com/w3images/avatar_smoke.jpg',
        'https://www.w3schools.com/w3images/man_bench.jpg'
      ],
      sizes: ['One Size'],
      colors: ['Gold', 'Silver']
    },
    {
      id: 6,
      name: 'Silk Blouse',
      price: '89.90',
      description: 'Elegant silk blouse with a modern cut. Versatile piece for both casual and formal occasions.',
      images: [
        'https://www.w3schools.com/w3images/man_bench.jpg',
        'https://www.w3schools.com/w3images/avatar_smoke.jpg'
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Navy']
    }
  ];

  return (
    <>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl font-extralight tracking-[0.2em] text-center mb-12">TRENDING NOW</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group cursor-pointer product-card-hover"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:opacity-0"
                />
                <img
                  src={product.images[1]}
                  alt={`${product.name} alternate`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <button 
                    className="w-full py-2 bg-black text-white text-sm tracking-wider hover:bg-gray-800 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="text-sm font-light tracking-wider">{product.name}</h3>
                <p className="text-sm tracking-wider">€{product.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductGrid;
