import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'image',
      url: 'https://www.w3schools.com/w3images/avatar_smoke.jpg',
      title: 'NEW COLLECTION',
      subtitle: 'DISCOVER THE LATEST TRENDS'
    },
    {
      type: 'image',
      url: 'https://www.w3schools.com/w3images/man_bench.jpg',
      title: 'SUMMER ESSENTIALS',
      subtitle: 'EXPLORE THE SEASON'
    },
    {
      type: 'image',
      url: 'https://www.w3schools.com/w3images/avatar_smoke.jpg',
      title: 'RUNWAY FAVORITES',
      subtitle: 'STRAIGHT FROM THE CATWALK'
    },
    {
      type: 'video',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'EXCLUSIVE FASHION',
      subtitle: 'DESIGNER COLLECTION'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {slide.type === 'video' ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={slide.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-30" />
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
              >
                <h1 className="text-5xl md:text-7xl font-extralight mb-6 tracking-[0.2em]">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl tracking-[0.3em] font-light">
                  {slide.subtitle}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-12 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 tracking-wider"
                >
                  SHOP NOW
                </motion.button>
              </motion.div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
