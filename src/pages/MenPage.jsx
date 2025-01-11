import React, { useState } from 'react';

const MenPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'ALL',
    'NEW',
    'JACKETS',
    'SHIRTS',
    'PANTS',
    'SHOES',
    'ACCESSORIES'
  ];

  const products = [
    {
      id: 1,
      name: 'Classic Suit',
      price: '499.90',
      category: 'SUITS',
      images: [
        'https://www.w3schools.com/w3images/man_bench.jpg',
        'https://www.w3schools.com/w3images/avatar_smoke.jpg'
      ]
    },
    {
      id: 2,
      name: 'Casual Shirt',
      price: '89.90',
      category: 'SHIRTS',
      images: [
        'https://www.w3schools.com/w3images/avatar_smoke.jpg',
        'https://www.w3schools.com/w3images/man_bench.jpg'
      ]
    },
    {
      id: 3,
      name: 'Designer Watch',
      price: '299.90',
      category: 'ACCESSORIES',
      images: [
        'https://www.w3schools.com/w3images/man_bench.jpg',
        'https://www.w3schools.com/w3images/avatar_smoke.jpg'
      ]
    },
    {
      id: 4,
      name: 'Leather Shoes',
      price: '199.90',
      category: 'SHOES',
      images: [
        'https://www.w3schools.com/w3images/avatar_smoke.jpg',
        'https://www.w3schools.com/w3images/man_bench.jpg'
      ]
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Categories */}
      <div className="border-b border-gray-200">
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
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:opacity-0"
                />
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-transform duration-700 group-hover:opacity-100"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <button className="w-full py-2 bg-black text-white text-sm tracking-wider hover:bg-gray-800 transition-colors">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="text-sm font-light tracking-wider">{product.name}</h3>
                <p className="text-sm tracking-wider">€{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenPage;
