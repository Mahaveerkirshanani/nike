// components/Discounts.tsx
import { discounts } from "@/routes"; // Adjust path as needed
import React from "react";
import DiscountCard from "./DiscountCard";

const Discounts: React.FC = () => {
  return (
    <section className="px-5 lg:px-12 py-12 bg-gray-100" id="discounts">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
          <span className="text-[#FB7185]">Exclusive</span> Discounts
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Take advantage of our exclusive discounts and offers on selected products.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {discounts.map((product, index) => (
          <DiscountCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Discounts;
