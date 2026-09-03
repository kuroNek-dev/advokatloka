"use client";
import Image from "next/image";
import { useRef } from "react";

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
  className,
  style,
}: LogoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;

    const offset = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div
      className={`relative w-full max-w-5xl mx-auto px-8 ${className}`}
      style={style}
    >
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-gray-700 hover:bg-slate-400/40  transition"
      >
        ‹
      </button>
      <div
        ref={scrollRef}
        className="flex items-center gap-8 overflow-x-auto scroll-smooth no-scrollbar py-4 px-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-50 h-30 flex items-center justify-center grayscale hover:grayscale-0 transition opacity-70 hover:opacity-100"
          >
            <Image
              src={item.image}
              alt={item.title || `slide` + item.id}
              width={240}
              height={120}
              className="object-contain max-h-21 h-auto w-full"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-gray-700 hover:bg-slate-400/40 transition"
      >
        ›
      </button>
    </div>
  );
}
