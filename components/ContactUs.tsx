import React from 'react';
import { Button } from './ui/button'; // Import your ShadCN Button component
import { BiMapPin } from 'react-icons/bi';
import Input from '@/components/ui/input';
import Textarea from './ui/textArea';
import { MdMarkEmailRead } from 'react-icons/md';

const ContactUs: React.FC = () => {
  return (
    <section className="px-6 lg:px-12 py-16 bg-gray-50" id="contact-us">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Contact Form */}
        <div className="flex-1">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            We would love to hear from you! Whether you have a question about our products, services, or anything else, feel free to reach out.
          </p>
          <form
            action="#"
            method="post"
            className="space-y-6"
          >
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#FB7185] focus:ring focus:ring-[#FB7185]/50"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#FB7185] focus:ring focus:ring-[#FB7185]/50"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Subject"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#FB7185] focus:ring focus:ring-[#FB7185]/50"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#FB7185] focus:ring focus:ring-[#FB7185]/50"
              />
            </div>
            <Button
              type="submit"
              className="bg-[#FB7185] hover:bg-[#E53E5E] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex-1">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <BiMapPin className="text-[#FB7185] w-6 h-6" />
              <p className="text-lg text-gray-700 font-semibold tracking-wider">Mithi @Tharparkar Sindh</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#FB7185] w-6 h-6">📞</span>
              <p className="text-lg text-gray-700 font-semibold tracking-wider">+92 342 3915669</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#FB7185] w-6 h-6 text-lg">
                <MdMarkEmailRead size={24} fill='red' />
              </span>
              <p className="text-lg text-gray-700 font-semibold tracking-wider">kumarmahaveer486@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
