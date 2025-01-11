import React from 'react';
import { motion } from 'framer-motion';

const Lookbook = () => {
  const lookbookData = {
    title: 'SPRING/SUMMER 2024',
    subtitle: 'LOOKBOOK',
    description: 'Discover our latest collection through a curated selection of looks that define the season.',
    featuredVideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
    images: [
      {
        url: 'https://www.w3schools.com/w3images/avatar_smoke.jpg',
        caption: 'Modern Minimalism',
        images: [
          'https://www.w3schools.com/w3images/avatar_smoke.jpg',
          'https://www.w3schools.com/w3images/man_bench.jpg'
        ]
      },
      {
        url: 'https://www.w3schools.com/w3images/man_bench.jpg',
        caption: 'Urban Style',
        images: [
          'https://www.w3schools.com/w3images/man_bench.jpg',
          'https://www.w3schools.com/w3images/avatar_smoke.jpg'
        ]
      },
      {
        url: 'https://www.w3schools.com/w3images/avatar_smoke.jpg',
        caption: 'Evening Elegance',
        images: [
          'https://www.w3schools.com/w3images/avatar_smoke.jpg',
          'https://www.w3schools.com/w3images/man_bench.jpg'
        ]
      },
      {
        url: 'https://www.w3schools.com/w3images/man_bench.jpg',
        caption: 'Summer Vibes',
        images: [
          'https://www.w3schools.com/w3images/man_bench.jpg',
          'https://www.w3schools.com/w3images/avatar_smoke.jpg'
        ]
      }
    ]
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extralight tracking-[0.2em] text-center mb-12 text-gray-900"
        >
          {lookbookData.subtitle}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lookbookData.images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={item.images[0]}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:opacity-0"
                />
                <img
                  src={item.images[1]}
                  alt={item.caption}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-light tracking-wider mb-2">{item.caption}</h3>
                  <p className="text-sm tracking-wider">{lookbookData.description}</p>
                  <button className="mt-4 px-6 py-2 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 text-sm tracking-wider">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Video Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="https://www.w3schools.com/w3images/fashion.jpg"
            >
              <source src={lookbookData.featuredVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-4xl font-light tracking-[0.2em] mb-4">{lookbookData.title}</h3>
                <p className="text-lg tracking-wider mb-8">{lookbookData.description}</p>
                <button className="px-12 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 tracking-wider">
                  WATCH NOW
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Lookbook;
