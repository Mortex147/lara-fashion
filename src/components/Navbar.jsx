import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { getCartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const navBackground = isScrolled ? 'bg-white shadow-md' : 'bg-transparent';
  const textColor = isScrolled || isMenuOpen || location.pathname !== '/' 
    ? 'text-gray-900' 
    : 'text-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
        <div className="max-w-[1800px] mx-auto">
          <div className="flex justify-between items-center h-20 px-6 md:px-12">
            {/* Mobile Menu Button */}
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className={`md:hidden ${textColor}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>

            {/* Logo */}
            <Link to="/" className={`text-3xl font-extralight tracking-[0.3em] hover:opacity-80 transition-opacity ${textColor}`}>
              LARA
            </Link>

            {/* Desktop Menu */}
            <div className={`hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2 ${textColor}`}>
              <Link to="/new" className="text-sm tracking-wider hover:opacity-50 transition-opacity">NEW</Link>
              <Link to="/women" className="text-sm tracking-wider hover:opacity-50 transition-opacity">WOMEN</Link>
              <Link to="/men" className="text-sm tracking-wider hover:opacity-50 transition-opacity">MEN</Link>
              <Link to="/kids" className="text-sm tracking-wider hover:opacity-50 transition-opacity">KIDS</Link>
              <Link to="/beauty" className="text-sm tracking-wider hover:opacity-50 transition-opacity">BEAUTY</Link>
            </div>

            {/* Right Icons */}
            <div className={`flex items-center space-x-6 ${textColor}`}>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="hover:opacity-50 transition-opacity"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="hover:opacity-50 transition-opacity"
                onClick={() => navigate('/login')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="hover:opacity-50 transition-opacity relative"
                onClick={() => setIsCartOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-gray-200 bg-white"
            >
              <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for items and brands"
                    className="w-full py-3 pl-10 pr-4 bg-transparent border-b-2 border-gray-200 focus:border-black outline-none transition-colors text-gray-900"
                    autoFocus
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-sm text-gray-500">Popular:</span>
                  {['Dresses', 'Jackets', 'Shoes', 'Accessories'].map((term) => (
                    <button
                      key={term}
                      className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-white z-40 md:hidden"
          >
            <div className="h-20 px-6 flex items-center justify-between border-b border-gray-200">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="text-2xl text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                ✕
              </motion.button>
              <Link to="/" className="text-2xl font-extralight tracking-[0.3em] text-gray-900">
                LARA
              </Link>
              <div className="w-8" />
            </div>
            <div className="px-6 py-8 space-y-6">
              <Link to="/new" className="block text-lg tracking-wider text-gray-900">NEW</Link>
              <Link to="/women" className="block text-lg tracking-wider text-gray-900">WOMEN</Link>
              <Link to="/men" className="block text-lg tracking-wider text-gray-900">MEN</Link>
              <Link to="/kids" className="block text-lg tracking-wider text-gray-900">KIDS</Link>
              <Link to="/beauty" className="block text-lg tracking-wider text-gray-900">BEAUTY</Link>
              <div className="pt-6 border-t">
                <Link to="/login" className="block text-lg tracking-wider text-gray-900">LOGIN</Link>
                <Link to="/register" className="block text-lg tracking-wider mt-4 text-gray-900">REGISTER</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
