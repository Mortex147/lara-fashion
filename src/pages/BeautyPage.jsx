import React, { useState } from 'react';

const BeautyPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'ALL',
    'NEW',
    'PERFUMES',
    'MAKEUP',
    'SKINCARE',
    'HAIRCARE',
    'ACCESSORIES'
  ];

  const products = [
    {
      id: 1,
      name: 'Face Cream',
      price: '49.90',
      image: 'https://www.w3schools.com/w3images/avatar_smoke.jpg',
      category: 'SKINCARE',
      description: 'A fresh and elegant fragrance',
    },
    {
      id: 2,
      name: 'Perfume',
      price: '89.90',
      image: 'https://www.w3schools.com/w3images/man_bench.jpg',
      category: 'PERFUMES',
      description: 'Long-lasting color',
    },
    {
      id: 3,
      name: 'Lipstick Set',
      price: '39.90',
      image: 'https://www.w3schools.com/w3images/avatar_smoke.jpg',
      category: 'MAKEUP',
      description: 'Deep hydration formula',
    },
    {
      id: 4,
      name: 'Makeup Palette',
      price: '59.90',
      image: 'https://www.w3schools.com/w3images/man_bench.jpg',
      category: 'MAKEUP',
      description: 'Nourishing hair treatment',
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black text-white overflow-hidden">
        <img
          src="https://www.w3schools.com/w3images/man_bench.jpg"
          alt="Beauty Collection"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extralight mb-6 tracking-[0.2em]">
              BEAUTY
            </h1>
            <p className="text-lg md:text-xl tracking-[0.3em] font-light">
              DISCOVER YOUR SIGNATURE STYLE
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="border-b border-gray-200 mt-12">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="flex overflow-x-auto py-4 space-x-8 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                className={`text-sm tracking-wider whitespace-nowrap ${
                  selectedCategory === category.toLowerCase()
                    ? 'text-black'
                    : 'text-gray-500 hover:text-black'
                }`}
                onClick={() => setSelectedCategory(category.toLowerCase())}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:opacity-0"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <button className="w-full py-2 bg-black text-white text-sm tracking-wider hover:bg-gray-800 transition-colors">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="text-sm font-light tracking-wider">{product.name}</h3>
                <p className="text-xs text-gray-500 tracking-wider">{product.description}</p>
                <p className="text-sm tracking-wider">€{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeautyPage;
