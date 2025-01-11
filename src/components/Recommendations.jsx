import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Recommendations = () => {
  const { addToCart } = useCart();

  const recommendations = [
    {
      id: 'rec1',
      name: 'Limited Edition Blazer',
      price: '199.90',
      tag: 'NEW',
      images: [
        'https://www.w3schools.com/w3images/avatar_smoke.jpg',
        'https://www.w3schools.com/w3images/man_bench.jpg'
      ]
    },
    {
      id: 'rec2',
      name: 'Silk Evening Dress',
      price: '159.90',
      tag: 'TRENDING',
      images: [
        'https://www.w3schools.com/w3images/man_bench.jpg',
        'https://www.w3schools.com/w3images/avatar_smoke.jpg'
      ]
    },
    {
      id: 'rec3',
      name: 'Designer Handbag',
      price: '129.90',
      tag: 'BESTSELLER',
      images: [
        'https://www.w3schools.com/w3images/avatar_smoke.jpg',
        'https://www.w3schools.com/w3images/man_bench.jpg'
      ]
    },
    {
      id: 'rec4',
      name: 'Statement Necklace',
      price: '49.90',
      tag: 'LAST PIECES',
      images: [
        'https://www.w3schools.com/w3images/man_bench.jpg',
        'https://www.w3schools.com/w3images/avatar_smoke.jpg'
      ]
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extralight tracking-[0.2em] text-gray-900 mb-4">
            YOU MAY ALSO LIKE
          </h2>
          <p className="text-gray-600 tracking-wider">
            Curated selections based on your style preferences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
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
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-black text-white px-3 py-1">
                    <span className="text-xs tracking-wider">{product.tag}</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 bg-black text-white text-sm tracking-wider hover:bg-gray-800 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    ADD TO CART
                  </motion.button>
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="text-sm font-light tracking-wider text-gray-900">{product.name}</h3>
                <p className="text-sm tracking-wider text-gray-900">€{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-3 border-2 border-black text-gray-900 hover:bg-black hover:text-white transition-colors duration-300 tracking-wider"
          >
            VIEW ALL
          </motion.button>
        </motion.div>

        {/* Trending Tags */}
        <div className="mt-20 text-center">
          <h3 className="text-sm tracking-wider text-gray-900 mb-6">TRENDING NOW</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['#SummerStyle', '#Minimalist', '#Sustainable', '#Elegance', '#StreetStyle'].map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors text-sm tracking-wider rounded-full"
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
