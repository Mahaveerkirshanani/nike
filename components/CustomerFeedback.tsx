"use client"
import React, { useState, useEffect } from 'react';
import { customerFeedbacks } from '@/routes';

const ITEMS_TO_SHOW = 3; // Number of items to show at a time

const CustomerFeedback: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle carousel automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === customerFeedbacks.length - ITEMS_TO_SHOW ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? customerFeedbacks.length - ITEMS_TO_SHOW : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === customerFeedbacks.length - ITEMS_TO_SHOW ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="px-5 lg:px-12 py-12 bg-gray-50" id="customer-feedback">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          What Our <span className="text-[#FB7185]">Customers</span> Say
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Hear directly from our satisfied customers about their experiences with our products and services.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / ITEMS_TO_SHOW)}%)` }}
          >
            {customerFeedbacks.concat(customerFeedbacks).map((feedback, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 bg-white rounded-lg shadow-lg m-4 flex flex-col items-center text-center"
              >
                <img
                  src={feedback.imgURL}
                  alt={feedback.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-[#FB7185]"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feedback.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{feedback.role}</p>
                <p className="text-gray-600">{feedback.feedback}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full text-gray-600 hover:bg-gray-200"
          onClick={handlePrev}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full text-gray-600 hover:bg-gray-200"
          onClick={handleNext}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots for Navigation */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: Math.ceil(customerFeedbacks.length / ITEMS_TO_SHOW) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#FB7185]' : 'bg-gray-300'} transition duration-300`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
