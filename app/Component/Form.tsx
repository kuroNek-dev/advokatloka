import React from "react";

interface data {
  title: string;
  placeholder: string;
  func: (e: string) => void;
  area?: boolean;
  value: string;
}

const Form = ({ title, placeholder, func, area, value }: data) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[1.25rem]/[120%] font-bold tracking-m8 text-dark-green">
        {title}
      </h3>
      {area ? (
        <textarea
          className="p-[0.75rem_1rem] md:w-90 xl:w-112.5 bg-white rounded-xl text-[1rem]/[150%] font-normal text-text border border-[rgba(16,57,39,0.25)] resize-y"
          placeholder={placeholder}
          rows={4}
          value={value}
          onChange={(e) => {
            func(e.target.value);
          }}
        ></textarea>
      ) : (
        <input
          className="p-[0.75rem_1rem] md:w-90 xl:w-112.5 bg-white rounded-xl text-[1rem]/[150%] font-normal text-text border border-[rgba(16,57,39,0.25)]"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            func(e.target.value);
          }}
        ></input>
      )}
    </div>
  );
};

export default Form;
