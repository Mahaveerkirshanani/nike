// components/SpecialProducts.tsx
import React from "react";
import { specialProducts } from "@/routes";
import SpecialProductCard from "./SpecialProductCard";

const SpecialProducts: React.FC = () => {
  return (
    <section className="px-5 lg:px-12 py-12 bg-gray-900 text-white" id="special-products">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-[#FB7185]">Special</span> Products
        </h2>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Explore our exclusive range of special products that are designed to elevate your experience. Grab them before they are gone!
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {specialProducts.map((product, index) => (
          <SpecialProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default SpecialProducts;
