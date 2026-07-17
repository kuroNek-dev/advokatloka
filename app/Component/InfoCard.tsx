import React from "react";
import SvgImg from "./SvgImg";

interface data {
  icon: string;
  title: string;
  desc: string;
}

const InfoCard = ({ icon, title, desc }: data) => {
  return (
    <div
      className="max-w-[90lvw] w-[90lvw] sm:w-auto p-3 gap-4 flex flex-col bg-white rounded-3xl shadow-[0_4px_20px_0_rgba(0,0,0,0.05)] opacity-0"
      style={{
        animation: "popIn 1s cubic-bezier(0.26,0.23,0.2,1) both",
        animationTimeline: "view()",
        animationRange: "entry 20% cover 100%",
      }}
    >
      <div className="flex w-12 h-12 justify-center items-center rounded-xl bg-pastel-green">
        <SvgImg size={1.875} src={icon} alt="Icon" usrSlct />
      </div>
      <div className="gap-2 p-3 flex flex-col w-92.25 max-w-full">
        <h1 className="text-[1.25rem] font-semibold tracking-m4 text-dark-green leading-[120%]">
          {title}
        </h1>
        <p className="text-[1rem] font-normal tracking-m2 text-text leading-[150%]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
