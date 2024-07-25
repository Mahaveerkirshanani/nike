// components/Banner.tsx
import React from 'react';

interface BannerProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="relative w-full h-64 bg-gray-900 text-white flex items-center justify-center">
      <img
        src={imageUrl}
        alt="Banner Background"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="text-lg font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
