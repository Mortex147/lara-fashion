import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const newProducts = [
    {
      id: 1,
      name: 'Stylish Summer Dress',
      price: '89.90',
      image: 'https://www.w3schools.com/w3images/avatar_smoke.jpg',
    },
    {
      id: 2,
      name: 'Casual Sneakers',
      price: '69.90',
      image: 'https://www.w3schools.com/w3images/man_bench.jpg',
    },
    {
      id: 3,
      name: 'Elegant Blazer',
      price: '129.90',
      image: 'https://www.w3schools.com/w3images/avatar_smoke.jpg',
    },
    {
      id: 4,
      name: 'Designer Handbag',
      price: '199.90',
      image: 'https://www.w3schools.com/w3images/man_bench.jpg',
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-extralight tracking-[0.2em] text-center mb-6 text-gray-900">New Arrivals</h2>
        <p className="text-center text-gray-600 mb-12">Discover the latest trends and styles.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <Link to={`/product/${product.id}`} className="block">
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold tracking-wider">{product.name}</h3>
                  <p className="text-gray-500 tracking-wider">€{product.price}</p>
                  <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-300">View</button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
