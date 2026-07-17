import React from "react";
import SvgImg from "./SvgImg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="fixed top-[min(2.62rem,2.5lvw)] w-310 max-w-[90lvw] p-[1.25rem_1.88rem] md:p-[1.5rem_4rem] left-[50lvw] translate-x-[-50%] bg-[rgba(255,255,255,0.70)] shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] rounded-full flex justify-between backdrop-blur-[10px] z-100">
      {/* Logo */}
      <div className="flex gap-3 items-center">
        <div className="w-[min(6lvw,1.625rem)] md:w-9.75">
          <Image
            width={100}
            height={100}
            alt="logo"
            src={"/Icon/logo.png"}
            blurDataURL="/Icon/logo.png"
            placeholder="blur"
          />
        </div>
        <p className="text-dark-green md:text-[1.25rem] text-[min(4lvw,1rem)] font-semibold select-none translate-y-[10%]">
          Advokatloka
        </p>
      </div>
      {/* Menu */}
      <div className="flex gap-4 md:gap-9 items-center">
        <a
          href="#home"
          className="text-dark-green md:text-[1rem] text-[min(4lvw,0.75rem)] font-semibold select-none cursor-pointer"
        >
          Home
        </a>
        <a
          href="#contact"
          className="text-dark-green md:text-[1rem] text-[min(4lvw,0.75rem)] font-semibold select-none cursor-pointer"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
