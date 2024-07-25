// components/PopularProducts.tsx
import { products } from "@/routes";
import React from "react";
import ProductCard from "./ProductCard";

const PopularProducts: React.FC = () => {
  return (
    <section className="px-5 lg:px-12 py-12 bg-gray-50" id="products">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
          <span className="text-[#FB7185]">Popular</span> Products
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Discover Nike's latest collection of performance-driven apparel and
          footwear designed to help you achieve your best.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
