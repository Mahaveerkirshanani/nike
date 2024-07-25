// components/CTASection.tsx
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <div className="bg-[#FB7185] text-white py-12 px-4 md:px-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-lg mb-6">Join us today and be part of our amazing community. Don't miss out on our exclusive offers and updates.</p>
      <a
        href="/register"
        className="bg-white text-[#FB7185] py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-100"
      >
        Sign Up Now
      </a>
    </div>
  );
};

export default CTASection;
