// components/TrustedBy.tsx
"use client"

import React from "react";
import { FaApple, FaGoogle, FaMicrosoft, FaAmazon, FaFacebook } from 'react-icons/fa'; // Import icons from react-icons
import { IconType } from 'react-icons';

interface Logo {
  Icon: IconType;
  name: string;
}

const logos: Logo[] = [
  { Icon: FaApple, name: 'Apple' },
  { Icon: FaGoogle, name: 'Google' },
  { Icon: FaMicrosoft, name: 'Microsoft' },
  { Icon: FaAmazon, name: 'Amazon' },
  { Icon: FaFacebook, name: 'Facebook' },
  // Add more logos if needed
];

const TrustedBy = () => {
  return (
    <section className="bg-gray-900 py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-white mb-4">Trusted By</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/6">
              <logo.Icon className="text-2xl sm:text-3xl md:text-4xl text-white" /> {/* Responsive icon size */}
              <p className="text-xs sm:text-sm text-gray-300">{logo.name}</p> {/* Responsive text size */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
