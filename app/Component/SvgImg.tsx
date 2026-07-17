import Image from "next/image";
import React from "react";

interface data {
  size: number;
  src: string;
  alt?: string;
  objFit?: boolean;
  usrSlct?: boolean;
}

const SvgImg = ({ size, src, alt, objFit, usrSlct }: data) => {
  let alts = "";
  let addedProperty: Record<string, string> = {};
  if (alt) {
    alts = alt;
  }
  if (!objFit) {
    addedProperty = { display: "flex", alignItems: "center" };
  }
  if (usrSlct) {
    addedProperty.userSelect = "none";
  }

  return (
    <div
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        ...addedProperty,
      }}
    >
      <Image
        src={src}
        blurDataURL={src}
        placeholder="blur"
        alt={alts}
        width={0}
        height={0}
        sizes={size + "rem"}
        style={{
          width: size + "rem",
          height: "auto",
        }}
      ></Image>
    </div>
  );
};

export default SvgImg;
