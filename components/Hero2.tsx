// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-900 text-white mt-[80px]">
     

      <div className="relative z-10 p-6 text-center max-w-2xl">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Elevate Your Style with <span className="text-[#fe8d31]">Nike</span>
        </h1>
        <p className="text-lg lg:text-xl mb-8">
          Discover the latest collection of performance-driven apparel and
          footwear designed to help you achieve your best.
        </p>
        <Link href="/products">
          <Button className="bg-[#fe8d31] hover:bg-[#fe3d31] font-semibold tracking-wider py-3 px-6 text-lg">
            Shop Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
