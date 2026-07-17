import Image from "next/image";
import React from "react";

interface data {
  image: string;
  title: string;
  desc: string;
  type: 0 | 1;
  key?: number;
}

const MockupView = ({ image, title, desc, type }: data) => {
  return (
    <div
      className={`px-4 md:px-40 lg:px-30 lg:gap-16 flex items-center flex-col ${type ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <div className="w-260 max-w-full flex justify-center">
        <Image
          alt="Phone Mockup"
          src={image}
          width={26.75 * 16}
          height={34.3125 * 16}
          loading="eager"
        />
      </div>
      <div className="flex flex-col gap-6 w-full">
        <h1 className="text-[min(6lvw,2rem)] md:text-[2rem] font-bold text-dark-green lg:text-left text-center -mt-4 lg:mt-0">
          {title}
        </h1>
        <p className="text-[min(5lvw,1.15rem)] md:text-[1.15rem]/[150%] font-normal text-text tracking-m2 lg:text-left text-center -mt-4 lg:mt-0">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default MockupView;
