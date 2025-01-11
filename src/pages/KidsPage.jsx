import React, { useState } from 'react';

const KidsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAge, setSelectedAge] = useState('all');

  const categories = [
    'ALL',
    'NEW',
    'DRESSES',
    'T-SHIRTS',
    'PANTS',
    'SHOES',
    'ACCESSORIES'
  ];

  const ageGroups = [
    'ALL',
    '3-6 MONTHS',
    '6-12 MONTHS',
    '1-5 YEARS',
    '6-14 YEARS'
  ];

  const products = [
    {
      id: 1,
      name: 'Kids Dress',
      price: '49.90',
      category: 'NEW',
      ageGroup: '6-14 YEARS',
      image: 'https://www.w3schools.com/w3images/avatar_smoke.jpg'
    },
    {
      id: 2,
      name: 'Kids Shoes',
      price: '39.90',
      category: 'SHOES',
      ageGroup: '1-5 YEARS',
      image: 'https://www.w3schools.com/w3images/man_bench.jpg'
    },
    {
      id: 3,
      name: 'Kids T-Shirt',
      price: '29.90',
      category: 'T-SHIRTS',
      ageGroup: '6-12 MONTHS',
      image: 'https://www.w3schools.com/w3images/avatar_smoke.jpg'
    },
    {
      id: 4,
      name: 'Kids Backpack',
      price: '34.90',
      category: 'ACCESSORIES',
      ageGroup: '3-6 MONTHS',
      image: 'https://www.w3schools.com/w3images/man_bench.jpg'
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const ageMatch = selectedAge === 'all' || product.ageGroup === selectedAge;
    return categoryMatch && ageMatch;
  });

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Categories */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center py-4 space-y-4 md:space-y-0">
            <div className="flex overflow-x-auto space-x-8 no-scrollbar">
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
            <div className="md:ml-auto flex overflow-x-auto space-x-8 no-scrollbar">
              {ageGroups.map((age) => (
                <button
                  key={age}
                  className={`text-sm tracking-wider whitespace-nowrap ${
                    selectedAge === age
                      ? 'text-black'
                      : 'text-gray-500 hover:text-black'
                  }`}
                  onClick={() => setSelectedAge(age)}
                >
                  {age}
                </button>
              ))}
            </div>
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
                <p className="text-sm tracking-wider">€{product.price}</p>
                <p className="text-xs text-gray-500 tracking-wider">{product.ageGroup}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KidsPage;
