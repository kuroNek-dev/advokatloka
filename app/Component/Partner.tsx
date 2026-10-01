"use client";
import React from "react";

interface PartnerProps {
  data: any[];
  style?: React.CSSProperties;
  onClick?: () => void;
  onMitra?: () => void;
  divRef?: React.RefObject<HTMLDivElement | null>;
  mitraRef?: React.RefObject<HTMLDivElement | null>;
}

const Partner = ({
  data,
  style,
  onClick,
  divRef,
  onMitra,
  mitraRef,
}: PartnerProps) => {
  const filteredData = data.slice(0, 10);
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <div ref={mitraRef} className="flex flex-col w-full items-center gap-2">
          <h3 className="text-center font-semibold text-[clamp(24px,4vw,36px)] leading-none tracking-m2 text-dark-green">
            Daftar Mitra
          </h3>
          <h2 className="text-center font-semibold text-[clamp(36px,7vw,64px)] leading-tight tracking-m4 text-dark-green">
            Advokatloka
          </h2>
        </div>
        <div className="relative flex flex-wrap w-full justify-center gap-2">
          {filteredData.map((item: any, index: number) => (
            <React.Fragment key={index}>
              <div
                className="flex px-4 py-[8px] items-center self-stretch bg-[#DFE3E1] w-full rounded-[16px] animate-[slideDown_0.5s_cubic-bezier(0.26,0.23,0.2,1)_forwards] opacity-0"
                style={{
                  ...style,
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <p className="w-full text-center text-black leading-[150%] text-[clamp(8px,3.5vw,20px)] tracking-[-0.4px] font-normal">
                  {item.name}
                </p>
              </div>

              {index === 9 && (
                <button
                  onClick={onClick}
                  style={{
                    ...style,
                    animationDelay: `${index * 0.15}s`,
                  }}
                  className="w-[20.625rem] -translate-y-6 flex px-4 py-[8px] cursor-pointer items-center self-stretch bg-pastel-green justify-center rounded-[16px] animate-[slideDown_0.5s_cubic-bezier(0.26,0.23,0.2,1)_forwards] opacity-0 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <span className="w-full text-center text-black leading-[150%] text-[clamp(8px,3.5vw,20px)] tracking-[-0.4px] font-normal">
                    Dan masih banyak lagi...
                  </span>
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div
        ref={divRef}
        className="flex flex-col gap-6 justify-center items-center"
      >
        <h3 className="text-center font-semibold text-[clamp(24px,4vw,48px)] leading-[120%] tracking-m2 text-dark-green">
          Tertarik Menjadi Mitra?
          <br />
          Daftar Sekarang!
        </h3>

        <p className="text-center text-[#1D1D1D] leading-[150%] text-[20px] tracking-[-0.4px] font-normal">
          Dapatkan keuntungan menjadi mitra, seperti akses pasar langsung
          <br />
          terhadap masyarakat yang membutuhkan bantuan hukum, portofolio hukum,
          <br />
          jaringan hukum yang luas, dan masih banyak lagi!
        </p>

        <div className="flex flex-row gap-2 items-center justify-center">
          <button
            onClick={onMitra}
            className="flex px-6 py-4 gap-2 rounded-[12px] bg-[#DFE3E1] items-center text-[20px] font-bold leading-[120%] tracking-[-1.2px] text-dark-green hover:bg-[#c1c7c4] cursor-pointer transition-colors duration-300"
          >
            Cek Mitra
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1M11 11V1H1"
                stroke="#103927"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="flex px-6 py-4 gap-2 rounded-[12px] bg-dark-green items-center text-[20px] text-white font-bold leading-[120%] tracking-[-1.2px]  hover:bg-dark-green/70 cursor-pointer transition-colors duration-300">
            Daftar Sekarang
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1M11 11V1H1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Partner;
