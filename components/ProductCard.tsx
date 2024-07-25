// components/ProductCard.tsx
import { Product } from '@/routes';
import { StarIcon } from 'lucide-react';
import React from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={product.imgURL}
        alt={product.name}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <StarIcon fill="orange" className="text-orange-600" />
          <span className="text-gray-800 font-semibold">{Math.floor(Math.random() * 7) + 3}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-lg font-semibold text-red-400 mb-4">{product.price}</p>
        <button className="w-full bg-red-400 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
