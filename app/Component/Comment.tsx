"use client";

import Image from "next/image";

interface CommentedProps {
  title?: string;
  data?: any[];
  index?: number;
  divRef?: React.RefObject<HTMLDivElement | null>;
}

export default function Commented({
  title,
  data,
  index,
  divRef,
}: CommentedProps) {
  const arr = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <>
      {/* diliput */}
      <div className="w-310 max-w-[90lvw] h-full flex flex-col gap-12 md:px-10 lg:px-20 py-4 items-center">
        <h1
          className="text-[min(8lvw,3.25rem)] md:text-[3.25rem] text-dark-green font-bold tracking-m8 text-center
            animate-[fadeInBoth_0.7s_cubic-bezier(0.26,0.23,0.2,1)_both] opacity-0"
          style={{
            animationRange: "entry_80%_cover_100%",
            animationTimeline: "view()",
          }}
        >
          {title}
        </h1>
        {/* parent container */}
        <div
          className="flex justify-center mx-auto w-full overflow-hidden relative
            animate-[fadeInBoth_0.7s_cubic-bezier(0.26,0.23,0.2,1)_both] opacity-0"
          style={{
            animationRange: "entry_80%_cover_100%",
            animationTimeline: "view()",
          }}
        >
          <div className="w-max overflow-hidden">
            {/* loop container */}
            <div className="flex w-max gap-8 animate-[newInfiniteLoop_20s_linear_infinite]">
              {Array.from({ length: (data?.length || 0) * 2 }).map((_, i) => {
                let item = null;
                if (data) {
                  item = data[i % data.length];
                }
                return (
                  <div className="relative shrink-0" key={i}>
                    <div className="flex flex-col items-start w-80 h-60 bg-white px-4 py-5 shadow-sm rounded-xl gap-3">
                      <div className="flex justify-start gap-1">
                        {arr.map((_, starIndex) => {
                          const isFilled = starIndex < item.score;
                          return (
                            <svg
                              key={starIndex}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className={`w-5 h-5 fill-current ${
                                isFilled ? "text-yellow-400" : "text-slate-300"
                              }`}
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          );
                        })}
                      </div>

                      <div className="flex flex-col gap-4 w-full h-25 border-b border-slate-200">
                        <span className="text-slate-500 text-sm mb-2">
                          "{item.comment}"
                        </span>
                      </div>

                      <div className="flex w-full gap-3 items-center">
                        <Image
                          src={item.image}
                          alt="comment image"
                          width={100}
                          height={100}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex flex-col gap-1">
                          <span className="font-bold text-sm text-slate-800">
                            {item.name}
                          </span>
                          <span className="text-slate-500 text-xs">
                            {item.profession}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="w-full h-16 absolute
                bg-[linear-gradient(to_right,#f5f5f5_0%,transparent_15%,transparent_85%,#f5f5f5_100%)]
                bottom-0"
          ></div>
        </div>
      </div>
    </>
  );
}
