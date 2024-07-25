"use client"

import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { shoes, statistics } from "@/routes";
import ShoeCard from "./ShoeCard";

const Hero = () => {

   interface Shoe {
    thumbnail: string;
    bigImage: string;
  }

  const [selectedShoe, setSelectedShoe] = useState<string>(shoes[0].bigImage);

  const changeBigShoeImage = (bigImage: string) => {
    setSelectedShoe(bigImage);
  };




  return (
    <section
      className="w-full flex flex-col xl:flex-row min-h-screen lg:pl-8 px-2  "
      id="home"
    >
      <div className="relative xl:w-2/5  flex flex-col pt-[130px] justify-center items-start w-full ">
        <p className="text-xl tracking-widest font-semibold text-red-400">
          Our Summer Collection{" "}
        </p>
        <h1 className="mt-10 font-semibold tracking-wider text-7xl max-sm:text-[42px] leading-[1.3]  max-sm:leading-[1.2]">
          <span className=" bg-white xl:whitespace-nowrap relative z-10 pr-10">
            {" "}
            The New Arrival{" "}
          </span>
          <br />
          <span className=" text-rose-400 tracking-widest">Nike</span> Shoes
        </h1>

        <p className="text-[#6D6D6D] font-semibold tracking-wider text-lg mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals , quality comfort and innovation for
          your active life.
        </p>

        <Button className="  bg-red-400 flex rounded-full px-8 gap-3 h-12 text-white font-semibold  tracking-wider">
          Shop Now
          <Image
            src={"/assets/icons/arrow-right.svg"}
            width={1000}
            height={1000}
            alt="logo"
            className="w-5 "
          />
        </Button>

        <div className="flex  justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index} className=" tracking-wider">
              <p className="text-4xl font-bold font-mono ">{stat.value}</p>
              <p className="leading-7 text-[#6D6D6D]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 items-center xl:rounded-none rounded-md xl:min-h-screen justify-center  bg-purple-200 bg-cover   flex-col pt-[120px]">
      <Image
        src={selectedShoe}
        width={610}
        height={500}
        alt="bigShoes"
        className="object-contain z-14 relative "
      />

      <div className="flex gap-2  relative top-10">
        {shoes.map((shoe: Shoe) => (
          <div key={shoe.thumbnail}>
            <ShoeCard
              imgURL={shoe.thumbnail}
              changeBigShoeImage={() => changeBigShoeImage(shoe.bigImage)}
              isSelected={selectedShoe === shoe.bigImage}
            />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Hero;
