import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-extralight tracking-[0.2em] mb-6 text-gray-900">
            JOIN OUR NEWSLETTER
          </h2>
          <p className="text-gray-600 mb-8 tracking-wider">
            Subscribe to our newsletter and get 10% off your first purchase plus exclusive access to new arrivals and special offers.
          </p>

          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-6 py-4 border-2 border-gray-300 focus:border-black outline-none transition-colors duration-300 text-gray-900 tracking-wider"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-4 md:mt-0 md:absolute md:right-2 md:top-1/2 md:transform md:-translate-y-1/2 px-8 py-2 bg-black text-white hover:bg-gray-800 transition-colors duration-300 tracking-wider"
            >
              SUBSCRIBE
            </motion.button>
          </form>

          {/* Social Media Links */}
          <div className="mt-12">
            <h3 className="text-sm tracking-wider text-gray-900 mb-4">FOLLOW US</h3>
            <div className="flex justify-center space-x-6">
              {['Facebook', 'Instagram', 'Twitter', 'Pinterest'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-gray-600 hover:text-black transition-colors duration-300"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: subscribed ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4"
          >
            {subscribed && (
              <p className="text-green-600 tracking-wider">
                Thank you for subscribing!
              </p>
            )}
          </motion.div>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: 'FREE SHIPPING',
              description: 'On orders over €150'
            },
            {
              title: 'EASY RETURNS',
              description: '30 days return policy'
            },
            {
              title: 'SECURE PAYMENT',
              description: 'Safe & secure checkout'
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <h3 className="text-lg font-light tracking-wider text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 tracking-wider">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
