import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-white flex justify-center items-center py-16">
      <div className="w-310 max-w-[70lvw] sm:max-w-[90lvw] lg:flex-row flex-col flex gap-30 lg:gap-16 items-center lg:items-start">
        {/* Logo */}
        <div className="flex gap-2 sm:gap-6 items-center flex-1">
          <div className="w-[min(15lvw,3.5rem)] sm:w-14">
            <Image
              width={100}
              height={100}
              alt="logo"
              src={"/Icon/logo.png"}
              blurDataURL="/Icon/logo.png"
              placeholder="blur"
              className="select-none"
            />
          </div>
          <p className="text-dark-green text-[min(8lvw,2rem)] sm:text-[2rem] font-semibold select-none translate-y-[10%]">
            Advokatloka
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-16">
          <div className="flex flex-col gap-8 w-auto">
            <h3 className="text-text text-[1.5rem] font-bold text-center lg:text-left">
              Advokatloka
            </h3>
            <a
              href="#home"
              className="text-text text-[1.25rem] font-normal text-center lg:text-left"
            >
              Home
            </a>
            <a
              href="#contact"
              className="text-text text-[1.25rem] font-normal text-center lg:text-left"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col align-start gap-8">
            <h3 className="text-text text-[1.5rem] font-bold text-center lg:text-left">
              About
            </h3>
            <a className="text-text text-[1.25rem] font-normal text-center lg:text-left">
              Download on IOS
            </a>
            <a className="text-text text-[1.25rem] font-normal text-center lg:text-left">
              Download on Android
            </a>
            <a className="text-text text-[1.25rem] font-normal text-center lg:text-left">
              Instagram
            </a>
            <a className="text-text text-[1.25rem] font-normal text-center lg:text-left">
              Tiktok
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
