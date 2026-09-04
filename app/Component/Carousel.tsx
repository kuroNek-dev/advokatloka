"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface LogoItem {
  id: number;
  title: string;
  image: string;
}

interface LogoCarouselProps {
  data: LogoItem[];
  className?: string;
  style?: React.CSSProperties;
}

export default function LogoCarousel({
  data,
  className = "",
  style,
}: LogoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const infiniteData = [...data, ...data, ...data];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || data.length === 0) return;

    const oneSetWidth = container.scrollWidth / 3;
    container.scrollLeft = oneSetWidth;
  }, [data]);

  const handleScroll = () => {
    requestAnimationFrame(() => {
      const container = scrollRef.current;
      if (!container) return;

      const oneSetWidth = container.scrollWidth / 3;

      if (container.scrollLeft <= 20) {
        container.scrollLeft += oneSetWidth;
      } else if (container.scrollLeft >= oneSetWidth * 2 - 20) {
        container.scrollLeft -= oneSetWidth;
      }
    });
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const offset = direction === "left" ? -300 : 300;

    container.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`relative w-full max-w-5xl mx-auto px-8 ${className}`}
      style={style}
    >
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 shadow-md text-gray-700 hover:bg-white transition"
        aria-label="Scroll left"
      >
        ‹
      </button>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex items-center gap-8 overflow-x-auto no-scrollbar py-4 px-2 scrollbar-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {infiniteData.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-48 h-24 flex items-center justify-center md:grayscale md:hover:grayscale-0 transition opacity-70 hover:opacity-100"
          >
            <Image
              src={item.image}
              alt={item.title || `slide-${item.id}`}
              width={200}
              height={100}
              className="object-contain max-h-20 h-auto w-full"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 shadow-md text-gray-700 hover:bg-white transition"
        aria-label="Scroll right"
      >
        ›
      </button>
    </div>
  );
}
