// components/SpecialProductCard.tsx
import React from 'react';
import { StarIcon } from 'lucide-react';

interface SpecialProductCardProps {
  imgURL: string;
  name: string;
  price: string;
  originalPrice: string;
  specialFeature: string;
}

const SpecialProductCard: React.FC<SpecialProductCardProps> = ({ imgURL, name, price, originalPrice, specialFeature }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300">
      {/* Special Feature Badge */}
      <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
        {specialFeature}
      </div>

      {/* Product Image */}
      <img
        src={imgURL}
        alt={name}
        className="w-full h-48 object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
      />

      <div className="p-4">
        {/* Product Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        
        {/* Price and Original Price */}
        <div className="flex items-baseline gap-2 mb-2">
          <p className="text-lg font-semibold text-red-500">{price}</p>
          <p className="text-sm text-gray-500 line-through">{originalPrice}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <StarIcon fill="orange" className="text-orange-600" />
          <span className="text-gray-800 font-semibold">{Math.floor(Math.random() * 7) + 3}</span>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-red-400 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SpecialProductCard;
