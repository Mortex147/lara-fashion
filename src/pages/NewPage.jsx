import React from 'react';
import { motion } from 'framer-motion';
import NewArrivals from '../components/NewArrivals';

const NewPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="https://www.w3schools.com/w3images/wedding.jpg"
          alt="New Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-white"
          >
            New Arrivals
          </motion.h1>
        </div>
      </div>

      {/* Featured New Arrivals */}
      <div className="py-20 max-w-[1800px] mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-extralight tracking-[0.2em] text-center mb-6 text-gray-900">Discover the Latest Trends</h2>
        <NewArrivals />
      </div>

      {/* Style Inspiration Section */}
      <div className="py-20 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-extralight tracking-[0.2em] mb-6 text-gray-900">Style Inspiration</h2>
          <p className="text-gray-600 mb-12">Explore how to style our new arrivals with these curated looks.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Example Style Items */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" alt="Look 1" className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">Chic Summer Outfit</h3>
              <p className="text-gray-500">Perfect for sunny days out.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <img src="https://www.w3schools.com/w3images/man_bench.jpg" alt="Look 2" className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">Casual Weekend Look</h3>
              <p className="text-gray-500">Comfort meets style.</p>
            </div>
            {/* Add more style items as needed */}
          </div>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="bg-black text-white py-10 text-center">
        <h3 className="text-xl font-semibold">Exclusive Offer!</h3>
        <p className="mt-2">Get 15% off your first order of new arrivals. Use code NEW15 at checkout.</p>
      </div>
    </div>
  );
};

export default NewPage;
