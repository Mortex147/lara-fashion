import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP, FaYoutube, FaCcMastercard, FaCcAmex, FaCcPaypal } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-800">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-sm tracking-[0.2em]">HELP</h3>
            <ul className="space-y-4">
              <li><Link to="/shop-at-lara" className="text-sm hover:opacity-50 transition-opacity">Shop at Lara</Link></li>
              <li><Link to="/product" className="text-sm hover:opacity-50 transition-opacity">Product</Link></li>
              <li><Link to="/payment" className="text-sm hover:opacity-50 transition-opacity">Payment</Link></li>
              <li><Link to="/shipping" className="text-sm hover:opacity-50 transition-opacity">Shipping</Link></li>
              <li><Link to="/returns" className="text-sm hover:opacity-50 transition-opacity">Returns & Exchanges</Link></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-sm tracking-[0.2em]">FOLLOW US</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm hover:opacity-50 transition-opacity">Newsletter</a></li>
              <li><a href="#" className="text-sm hover:opacity-50 transition-opacity">Instagram</a></li>
              <li><a href="#" className="text-sm hover:opacity-50 transition-opacity">Facebook</a></li>
              <li><a href="#" className="text-sm hover:opacity-50 transition-opacity">Twitter</a></li>
              <li><a href="#" className="text-sm hover:opacity-50 transition-opacity">Pinterest</a></li>
              <li><a href="#" className="text-sm hover:opacity-50 transition-opacity">YouTube</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-sm tracking-[0.2em]">CONTACT</h3>
            <ul className="space-y-4">
              <li><a href="mailto:support@example.com" className="text-sm hover:opacity-50 transition-opacity">Email Us</a></li>
              <li><a href="tel:+1234567890" className="text-sm hover:opacity-50 transition-opacity">Call Us: +123 456 7890</a></li>
              <li><a href="#" className="text-sm hover:opacity-50 transition-opacity">Customer Support</a></li>
              <li><a href="#" className="text-sm hover:opacity-50 transition-opacity">Store Locator</a></li>
              <li><a href="#" className="text-sm hover:opacity-50 transition-opacity">FAQs</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-sm tracking-[0.2em]">POLICIES</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-sm hover:opacity-50 transition-opacity">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:opacity-50 transition-opacity">Terms of Use</Link></li>
              <li><Link to="/cookies" className="text-sm hover:opacity-50 transition-opacity">Cookies Settings</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs tracking-wider text-gray-500">
              &copy; {new Date().getFullYear()} Lara. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <FaCcMastercard className="h-6" />
              <FaCcAmex className="h-6" />
              <FaCcPaypal className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
