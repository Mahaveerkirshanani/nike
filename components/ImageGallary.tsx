// components/ImageGallery.tsx
import React from 'react';

const images = [
'/banner/p8.jpg',
'/banner/p10.jpg',
'/banner/p11.jpg',
'/banner/p12.jpg',
];

const ImageGallery: React.FC = () => {
  return (
    <div className="py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Image Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-40 lg:h-[350px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
