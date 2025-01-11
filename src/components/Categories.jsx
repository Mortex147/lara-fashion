import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NewArrivals from './NewArrivals';

const Categories = () => {
  const categories = [
    {
      title: 'WOMEN',
      description: 'Discover the latest trends in women\'s fashion',
      image: 'https://www.w3schools.com/w3images/avatar_smoke.jpg',
      link: '/women'
    },
    {
      title: 'MEN',
      description: 'Explore our collection of men\'s clothing',
      image: 'https://www.w3schools.com/w3images/man_bench.jpg',
      link: '/men'
    },
    {
      title: 'KIDS',
      description: 'Adorable styles for the little ones',
      image: 'https://www.w3schools.com/w3images/avatar_smoke.jpg',
      link: '/kids'
    },
    {
      title: 'BEAUTY',
      description: 'Premium beauty and skincare products',
      image: 'https://www.w3schools.com/w3images/man_bench.jpg',
      link: '/beauty'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extralight tracking-[0.2em] text-center mb-12 text-gray-900"
        >
          SHOP BY CATEGORY
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <Link to={category.link} className="block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                    <h3 className="text-3xl font-light tracking-wider mb-2">{category.title}</h3>
                    <p className="text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.description}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-6 py-2 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300"
                    >
                      <span className="text-sm tracking-wider">SHOP NOW</span>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <NewArrivals />

        {/* Featured Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/9] overflow-hidden group"
          >
            <img
              src="https://www.w3schools.com/w3images/wedding.jpg"
              alt="Wedding Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              <h3 className="text-3xl font-light tracking-wider mb-4">WEDDING COLLECTION</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 tracking-wider"
              >
                DISCOVER MORE
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/9] overflow-hidden group"
          >
            <img
              src="https://www.w3schools.com/w3images/runway.jpg"
              alt="Designer Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              <h3 className="text-3xl font-light tracking-wider mb-4">DESIGNER COLLECTION</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 tracking-wider"
              >
                SHOP NOW
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
