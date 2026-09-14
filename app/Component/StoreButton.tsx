export default function StoreButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4 font-sans">
      {/* Google Play Store Button */}
      <a
        href="#"
        className="flex items-center bg-[#1a1a1a] text-white border border-[#333333] rounded-lg px-4 py-2.5 hover:bg-[#2a2a2a] transition-colors"
      >
        {/* Disesuaikan rasionya jadi w-7 h-8 supaya playstore nggak gepeng */}
        <div className="w-7 h-8 mr-3 flex items-center justify-center shrink-0">
          <svg className="w-full h-full fill-current" viewBox="0 0 512 512">
            <path
              fill="#00D2FF"
              d="M51.9,13.6c-4.1,3.4-6.9,9.4-6.9,16.5v451.7c0,7.1,2.7,13.1,6.9,16.5l3.2,2.7L276.4,275V237L55.1,10.9L51.9,13.6z"
            />
            <path
              fill="#FF334B"
              d="M344.6,343.2L276.4,275V237l68.2-68.2l2.1,1.2l80.5,45.8c23,13.1,23,34.5,0,47.6l-80.5,45.8L344.6,343.2z"
            />
            <path
              fill="#FFA800"
              d="M346.7,342l-70.3-70.3L51.9,498.4c7.6,7.9,20,8.3,31.4,1.9l263.4-149.8C359.8,346.5,354.3,344.5,346.7,342z"
            />
            <path
              fill="#00E070"
              d="M346.7,170c7.6-2.5,13.1-4.5,40-19.3L83.3,0.9C71.9-5.5,59.5-5.1,51.9,2.8L276.4,227L346.7,170z"
            />
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[11px] font-normal text-gray-300">
            Download on the
          </span>
          <span className="text-xl font-semibold tracking-tight">
            Play Store
          </span>
        </div>
      </a>

      {/* Apple App Store Button */}
      <a
        href="#"
        className="flex items-center bg-[#1a1a1a] text-white border border-[#333333] rounded-lg px-4 py-2.5 hover:bg-[#2a2a2a] transition-colors"
      >
        {/* Disesuaikan rasionya jadi w-7 h-8 supaya logo apple proporsional */}
        <div className="w-7 h-8 mr-3 flex items-center justify-center shrink-0">
          <svg className="w-full h-full fill-current" viewBox="0 0 170 170">
            <path
              fill="#FFFFFF"
              d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.1-1.9-14.24-6.08-3.15-2.61-7-7.23-11.55-13.86-5.95-8.68-10.49-18.15-13.62-28.41-3.13-10.26-4.7-20.24-4.7-29.95 0-11.75 2.96-21.36 8.87-28.85 5.92-7.49 13.38-11.31 22.39-11.47 4.9 0 10.23 1.34 16 4.02 5.76 2.68 9.53 4.02 11.32 4.02 1.52 0 5.4-1.42 11.63-4.25 6.23-2.83 11.83-4.14 16.8-3.92 11.86.87 21.05 5.5 27.56 13.88-10.15 6.17-15.11 14.93-14.88 26.27.22 8.7 3.63 15.82 10.23 21.36 6.59 5.54 14.6 8.44 24.03 8.7-2.3 6.9-5.46 13.84-9.48 20.82zM119.22 31.33c0-7.05 2.55-13.75 7.64-20.1 5.09-6.35 11.66-10.18 19.7-11.23.11 1.09.16 1.99.16 2.7 0 6.61-2.48 13.31-7.44 20.1-4.96 6.79-11.42 10.74-19.38 11.85-.35-1.14-.54-2.22-.68-3.24-.04-.08-.08-.13-.1-0.18z"
            />
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[11px] font-normal text-gray-300">
            Download on the
          </span>
          <span className="text-xl font-semibold tracking-tight">
            App Store
          </span>
        </div>
      </a>
    </div>
  );
}
