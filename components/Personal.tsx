import React from 'react';

const OurTeam: React.FC = () => {
  return (
    <section className="px-6 lg:px-12 py-16 bg-gray-50" id="our-team">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* Picture */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <div className="relative">
            <img
              src="/banner/WhatsApp Image 2024-07-19 at 12.05.12_a4b17941.jpg" // Replace with Mahaveer Kumar's picture URL
              alt="Mahaveer Kumar"
              className="w-64 h-80 lg:w-80 lg:h-96 object-cover rounded-xl border-8 border-[#FB7185] shadow-xl"
            />
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="bg-gradient-to-t from-[#FB7185] to-transparent p-2 rounded-b-xl text-center">
                <h3 className="text-white text-lg font-bold">CEO</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="flex-1">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 text-center lg:text-left">
            Meet <span className="text-[#FB7185]">Mahaveer Kumar</span>
          </h2>
          <p className="text-xl font-semibold text-gray-800 mb-4 text-center lg:text-left">
            CEO & Founder
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-center lg:text-left">
            Mahaveer Kumar is the visionary behind our company, leading with a passion for innovation and excellence. With a wealth of experience in the tech and fashion industries, Mahaveer is dedicated to driving the company towards new horizons and ensuring top-notch quality in every product we offer.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-center lg:text-left">
            In addition to his professional achievements, Mahaveer is an avid traveler and tech enthusiast. He believes in the power of technology to transform lives and is committed to integrating cutting-edge solutions into our products.
          </p>
          <p className="text-gray-700 text-center lg:text-left">
            Under his leadership, our team is constantly evolving, always striving for excellence and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
