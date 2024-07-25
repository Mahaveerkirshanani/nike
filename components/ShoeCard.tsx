// // components/ShoeCard.tsx
import React from 'react';
import Image from 'next/image';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

interface ShoeCardProps {
  imgURL: string;
  changeBigShoeImage: () => void;
  isSelected: boolean;
}

const ShoeCard: React.FC<ShoeCardProps> = ({ imgURL, changeBigShoeImage, isSelected }) => {
  return (
    <div
      className={`lg:w-[150px] lg:h-[140px] h-[70px]  w-[80px] p-2 cursor-pointer rounded-md ${isSelected ? 'bg-[#fc8260]  ' : 'bg-[#f8af7e]'}   bg-center`}
      onClick={changeBigShoeImage}
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          src={imgURL}
          alt="Image"
          width={1000}
          height={1000}
          className="rounded-md bg-no-repeat object-cover"
        />
      </AspectRatio>
    </div>
  );
};

export default ShoeCard;
