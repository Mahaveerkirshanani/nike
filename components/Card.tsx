// components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default Card;
