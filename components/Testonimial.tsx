// components/TestimonialCarousel.tsx
"use client"
import React, { useState, useEffect } from 'react';
import { customerFeedbacks } from '@/routes';

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 5000; // 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % customerFeedbacks.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  const feedback = customerFeedbacks[currentIndex];

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Customers Are Saying</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img
            src={feedback.imgURL}
            alt={feedback.name}
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
          <p className="text-lg font-medium mb-2">{feedback.feedback}</p>
          <p className="text-sm text-gray-600">{feedback.name}, {feedback.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
