import React from 'react';
import { Button } from './ui/button';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import Input from './ui/input';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 px-6">
        {/* Quick Links */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-200 mb-6">Quick Links</h2>
          <ul className="space-y-4">
            <li>
              <a href="#home" className="hover:text-[#FB7185] transition duration-150">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#FB7185] transition duration-150">About Us</a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#FB7185] transition duration-150">Services</a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#FB7185] transition duration-150">Products</a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-[#FB7185] transition duration-150">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-200 mb-6">Contact Us</h2>
          <p className="mb-4">Mithi @Tharparkar Sindh</p>
          <p className="mb-4"> +92 342 3915669 </p>
          <p className="mb-4">kumarmahaveer486@gmail.com</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-150">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-150">
              <BsTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-150">
              <BsInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-150">
              <BsLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-200 mb-6">Subscribe to Our Newsletter</h2>
          <p className="mb-4">Stay updated with our latest news and offers.</p>
          <form
            action="#"
            method="post"
            className="flex flex-col gap-4"
          >
            <Input
              type="email"
              placeholder="Your Email"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#FB7185] focus:ring focus:ring-[#FB7185]/50"
            />
            <Button
              type="submit"
              className="bg-[#FB7185] hover:bg-[#E53E5E] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Mahaveer Kumar . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
