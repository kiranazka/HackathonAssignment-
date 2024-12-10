import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F6F5FF] py-8 px-4 md:px-16">
      {/* Link Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-9">
        {/* Logo and Subscription */}
        <div>
          <h1 className="text-2xl font-bold text-[#000000] mb-4">Hekto</h1>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-4 py-2 border border-[#C1C1C1] text-sm rounded-md focus:outline-none"
            />
            <button className="bg-[#FB2E86] text-white py-2 rounded-md text-sm font-medium hover:bg-[#e02576]">
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-sm text-[#8A8FB9]">
            <h4>Contact Info</h4>
            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-lg font-bold text-[#000000] mb-4">Categories</h4>
          <ul className="space-y-2 text-sm text-[#8A8FB9]">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="text-lg font-bold text-[#000000] mb-4">Customer Care</h4>
          <ul className="space-y-2 text-sm text-[#8A8FB9]">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-lg font-bold text-[#000000] mb-4">Pages</h4>
          <ul className="space-y-2 text-sm text-[#8A8FB9]">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 my-8" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[#8A8FB9] text-sm">
        <p>©Webecy - All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-[#000000]">
            <FaFacebook size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-[#000000]">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-[#000000]">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;