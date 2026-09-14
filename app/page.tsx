"use client";

import Image from "next/image";
import { useState } from "react";
import Carousel from "./Component/Carousel";
import Footer from "./Component/Footer";
import Form from "./Component/Form";
import Header from "./Component/Header";
import InfoCard from "./Component/InfoCard";
import MockupView from "./Component/MockupView";

export default function Home() {
  let data = [
    {
      title: "Konsultasi Advokat, Notaris & Mediator",
      desc: "Bicara langsung dengan ahlinya. Terhubung dengan advokat, notaris, atau mediator terverifikasi untuk menyelesaikan masalah hukum Anda. Setiap sesi dinilai dua arah sehingga mutu dan kepercayaan selalu terjaga.",
      image: "/Image/Mockup/phone_mockup_1.png",
    },
    {
      title: "Konsultasi Kilat — Rp25.000 / 5 menit",
      desc: "Jawaban cepat, biaya ringan. Butuh jawaban singkat tanpa janji temu panjang? Terhubung dengan praktisi hukum hanya Rp25.000 untuk 5 menit, hemat untuk pertanyaan yang mendesak tapi sederhana.",
      image: "/Image/Mockup/phone_mockup_2.png",
    },
    {
      title: "SOS",
      desc: "Bantuan cepat saat genting. Tombol darurat untuk situasi hukum mendesak. Permintaan Anda langsung diteruskan ke advokat jaga dan direspons secepat mungkin sesuai jadwal ketersediaan.",
      image: "/Image/Mockup/phone_mockup_3.png",
    },
    {
      title: "Tanya AI",
      desc: "Asisten hukum dalam genggaman. Ajukan pertanyaan hukum sehari-hari dan dapatkan penjelasan awal yang mudah dipahami secara instan. Langkah pertama yang pas sebelum berkonsultasi dengan ahli.",
      image: "/Image/Mockup/phone_mockup_4.png",
    },
    {
      title: "Review Dokumen Sederhana",
      desc: "Periksa sebelum menandatangani. Unggah dokumen hukum dasar Anda untuk ditinjau, agar Anda paham isinya dan terhindar dari klausul yang merugikan.",
      image: "/Image/Mockup/phone_mockup_5.png",
    },
    {
      title: "Template Dokumen",
      desc: "Dokumen hukum siap pakai. Beragam template dokumen hukum dasar yang tinggal Anda sesuaikan untuk menghemat waktu dan biaya membuat dari nol.",
      image: "/Image/Mockup/phone_mockup_6.png",
    },
    {
      title: "Mini Kursus",
      desc: "Belajar hukum, langkah demi langkah. Kelas singkat berbahasa sederhana tentang hak dan prosedur hukum sehari-hari. Tingkatkan literasi hukum Anda kapan saja, di mana saja.",
      image: "/Image/Mockup/phone_mockup_7.png",
    },
    {
      title: "Kalkulator Waris",
      desc: "Hitung pembagian waris dengan tepat. Simulasi pembagian harta waris sesuai ketentuan hukum waris Islam (faraidh) secara otomatis untuk membantu keluarga memahami hak masing-masing dan mencegah sengketa.",
      image: "/Image/Mockup/phone_mockup_8.png",
    },
    {
      title: "Kamus Hukum",
      desc: "Istilah hukum, dibuat sederhana. Cari arti istilah hukum yang rumit dalam bahasa yang mudah dimengerti supaya Anda tak lagi bingung membaca dokumen atau mengikuti proses hukum.",
      image: "/Image/Mockup/phone_mockup_9.png",
    },
    {
      title: "Webinar",
      desc: "Belajar langsung dari praktisi. Sesi daring bersama advokat dan ahli hukum membahas topik-topik penting. Ikuti, bertanya, dan perluas pemahaman hukum Anda bersama komunitas.",
      image: "/Image/Mockup/phone_mockup_10.png",
    },
    {
      title: "Pro Bono",
      desc: "Keadilan untuk yang membutuhkan. Kanal khusus yang mempertemukan warga kurang mampu dengan advokat yang siap mendampingi tanpa biaya, didukung penggalangan dana hukum yang transparan.",
      image: "/Image/Mockup/phone_mockup_11.png",
    },
    {
      title: "Cek Legalitas",
      desc: "Pastikan keasliannya sebelum percaya. Verifikasi legalitas sebuah badan usaha, lembaga, atau alamat/tautan resmi dengan cepat untuk melindungi diri Anda dari penipuan dan pihak yang tidak sah.",
      image: "/Image/Mockup/phone_mockup_12.png",
    },
    {
      title: "Urus Legalitas",
      desc: "Legalitas usaha, kami bantu urus. Layanan pembuatan dokumen legalitas usaha dibantu dari awal hingga tuntas, agar usaha Anda resmi dan terlindungi secara hukum.",
      image: "/Image/Mockup/phone_mockup_13.png",
    },
    {
      title: "Database Peraturan",
      desc: "Rujukan hukum resmi di satu tempat. Akses kumpulan peraturan perundang-undangan resmi dan terpercaya, supaya informasi hukum yang Anda gunakan selalu akurat dan sah.",
      image: "/Image/Mockup/phone_mockup_14.png",
    },
    {
      title: "Berita Hukum",
      desc: "Tetap update soal hukum. Kabar dan perkembangan hukum terbaru yang dikemas ringkas dan mudah dipahami agar Anda tak ketinggalan hal yang memengaruhi hak Anda.",
      image: "/Image/Mockup/phone_mockup_15.png",
    },
    {
      title: "FAQ",
      desc: "Pertanyaan Anda, terjawab. Kumpulan pertanyaan yang paling sering diajukan tentang layanan Advokatloka.",
      image: "/Image/Mockup/phone_mockup_16.png",
    },
  ];
  let diliput = [
    {
      image: "1.png",
    },
    {
      image: "2.png",
    },
    {
      image: "3.png",
    },
    {
      image: "4.png",
    },
    {
      image: "5.png",
    },
    {
      image: "6.png",
    },
    {
      image: "7.png",
    },
  ];

  const dataCarousel = [
    {
      id: 1,
      image: "/Image/Carousel/viva.svg",
      title: "Viva",
    },
    {
      id: 2,
      image: "/Image/Carousel/republika.svg",
      title: "Republika",
    },
    {
      id: 3,
      image: "/Image/Carousel/idntimes.svg",
      title: "IDN Times",
    },
    {
      id: 4,
      image: "/Image/Carousel/kompas.svg",
      title: "Kompas",
    },
    {
      id: 5,
      image: "/Image/Carousel/detik.svg",
      title: "Detik.com",
    },
    {
      id: 6,
      image: "/Image/Carousel/suara.webp",
      title: "Suara.com",
    },
  ];

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <div className="flex flex-col gap-25 md:gap-36.25 items-center">
      <div
        id="home"
        className="w-full sm:min-h-224.75 max-h-full bg-[linear-gradient(180deg,#C7F2B1_0%,var(--Pastel-Green,#E6FEDA)_100%)] flex justify-center pb-12"
      >
        <div className="flex sm:justify-between flex-col xl:flex-row w-310 max-w-[90lvw] pt-[max(20lvw,14lvh)] md:pt-50">
          {/* left */}
          <div className="flex flex-col gap-6 md:gap-8 items-center xl:items-start">
            {/* pre-title */}
            <div className="flex gap-1.5 md:gap-2.5 p-[0.75rem_1.5rem] items-center rounded-full animate-[fadeIn_0.7s_cubic-bezier(0.26,0.23,0.2,1)]">
              <p className="text-dark-green text-[min(4lvw,1.125rem)] md:text-[1.5rem] font-semibold tracking-m4">
                PT Inovasi Digital Advokat
              </p>
            </div>
            {/* <div className="flex gap-1.5 md:gap-2.5 p-[0.75rem_1.5rem] bg-dark-green items-center rounded-full animate-[fadeIn_0.7s_cubic-bezier(0.26,0.23,0.2,1)]">
              <Image
                width={20}
                height={20}
                alt="logo"
                src={"/Icon/book.svg"}
                blurDataURL="/Icon/book.svg"
              />
              <p className="text-white text-[min(4lvw,1.125rem)] md:text-[1.125rem] font-semibold tracking-m4">
                PT Inovasi Digital Advokat
              </p>
            </div> */}
            <div className="flex flex-col items-center xl:items-start">
              <h1 className="text-[min(8lvw,3.25rem)] md:text-[3.25rem] text-dark-green font-bold tracking-m8 animate-[fadeIn_0.7s_cubic-bezier(0.26,0.23,0.2,1)_forwards] [animation-delay:300ms] opacity-0">
                Semua Urusan Hukum
              </h1>
              <h1 className="text-[min(10lvw,5.125rem)] md:text-[5.125rem] text-dark-green font-bold tracking-m8 mt-[-0.8rem] xl:mt-[-1.2rem] animate-[fadeIn_0.7s_cubic-bezier(0.26,0.23,0.2,1)_forwards] [animation-delay:600ms] opacity-0">
                Dalam Satu <span className="text-orange">Layar</span>
              </h1>
            </div>
            <p className="text-center xl:text-left text-[min(5lvw,2rem)] md:text-[2rem] tracking-m2 font-normal leading-[140%] animate-[fadeIn_0.7s_cubic-bezier(0.26,0.23,0.2,1)_forwards] [animation-delay:900ms] opacity-0">
              Bukan sekadar aplikasi, tapi sebuah ekosistem keadilan dalam satu
              genggaman.
            </p>
            {/* download button */}
            <div className="flex gap-4 max-w-[70lvw]">
              {" "}
              {/* playstore */}
              <div className="cursor-pointer animate-[fadeIn_0.7s_cubic-bezier(0.26,0.23,0.2,1)_forwards] [animation-delay:1200ms] opacity-0">
                <a
                  href="#"
                  className="flex items-center bg-[#1a1a1a] text-white border border-[#333333] rounded-lg px-4 py-2.5 hover:bg-[#2a2a2a] transition-colors"
                >
                  <div className="w-8 h-8 mr-3 flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 466 511.98"
                    >
                      <g id="Layer_x0020_1">
                        <path
                          fill="#EA4335"
                          fillRule="nonzero"
                          d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z"
                        />
                        <path
                          fill="#FBBC04"
                          fillRule="nonzero"
                          d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z"
                        />
                        <path
                          fill="#34A853"
                          fillRule="nonzero"
                          d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z"
                        />
                        <path
                          fill="#4285F4"
                          fillRule="nonzero"
                          d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[11px] font-semibold tracking-tighter text-white">
                      Download on the
                    </span>
                    <span className="text-[1.5rem] font-bold tracking-tight">
                      Play Store
                    </span>
                  </div>
                </a>
                {/* <Image
                  alt="playstore download"
                  src={"/Element/playstore.svg"}
                  blurDataURL="/Element/playstore-button.svg"
                  placeholder="blur"
                  width={200}
                  height={200}
                /> */}
              </div>
              {/* appstore */}
              <div className="cursor-pointer animate-[fadeIn_0.7s_cubic-bezier(0.26,0.23,0.2,1)_forwards] [animation-delay:1350ms] opacity-0">
                <a
                  href="#"
                  className="flex items-center bg-[#1a1a1a] text-white border border-[#333333] rounded-lg px-4 py-2.5 hover:bg-[#2a2a2a] transition-colors"
                >
                  <div className="w-10 h-10 mr-3 flex text-white items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 640 640"
                    >
                      <path
                        fill="white"
                        d="M494.782 340.02c-.803-81.025 66.084-119.907 69.072-121.832-37.595-54.993-96.167-62.552-117.037-63.402-49.843-5.032-97.242 29.362-122.565 29.362-25.253 0-64.277-28.607-105.604-27.85-54.32.803-104.4 31.594-132.403 80.245C29.81 334.457 71.81 479.58 126.816 558.976c26.87 38.882 58.914 82.56 100.997 81 40.512-1.594 55.843-26.244 104.848-26.244 48.993 0 62.753 26.245 105.64 25.406 43.606-.803 71.232-39.638 97.925-78.65 30.887-45.12 43.548-88.75 44.316-90.994-.969-.437-85.029-32.634-85.879-129.439l.118-.035zM414.23 102.178C436.553 75.095 451.636 37.5 447.514-.024c-32.162 1.311-71.163 21.437-94.253 48.485-20.729 24.012-38.836 62.28-33.993 99.036 35.918 2.8 72.591-18.248 94.926-45.272l.036-.047z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[11px] font-semibold tracking-tighter text-white">
                      Download on the
                    </span>
                    <span className="text-[1.5rem] font-bold tracking-tight">
                      App Store
                    </span>
                  </div>
                </a>
                {/* <Image
                  alt="appstore download"
                  src={"/Element/appstore-button.svg"}
                  blurDataURL="/Element/appstore-button.svg"
                  placeholder="blur"
                  width={200}
                  height={200}
                /> */}
              </div>
            </div>
          </div>

          {/* phone image */}
          <div className="relative w-full xl:w-136 aspect-34/36 mt-[20lvw] sm:mt-0 scale-110 sm:scale-90 xl:scale-80 sm:top-0 xl:-top-12 animate-[fadeIn_1s_cubic-bezier(0.26,0.23,0.2,1)_forwards] [animation-delay:450ms] opacity-0">
            <Image
              src={"/Image/hero-phone.png"}
              alt="advokatloka-demo-screen"
              fill
              sizes="34rem"
              className="object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* cardlist */}
      <div className="flex flex-col gap-3 w-310 max-w-[90lvw] items-center mt-[min(6lvw,5rem)] sm:-mt-20 xl:-mt-60">
        <div className="flex max-w-[90lvw] flex-col md:flex-row gap-3 justify-center">
          <InfoCard
            icon="/Icon/logo.png"
            title="Satu Pintu, Semua Layanan Hukum"
            desc="Konsultasi langsung dengan advokat, notaris, dan mediator terverifikasi yang lengkap dengan rating dua arah agar mutu dan kepercayaan selalu terjaga."
          />
          <InfoCard
            icon="/Icon/logo.png"
            title="Ditangani yang Ahli & Tepercaya"
            desc="Setiap layanan ditangani praktisi hukum terverifikasi, dengan proses yang jelas dan data Anda yang terjaga kerahasiaannya."
          />
        </div>
        <div className="flex max-w-[90lvw] flex-col md:flex-row gap-3 justify-center">
          <InfoCard
            icon="/Icon/logo.png"
            title="Terjangkau untuk Semua"
            desc="Dari Konsultasi Kilat Rp25.000 hingga jalur pro bono gratis bagi yang membutuhkan, keadilan tak lagi soal biaya.
"
          />
          <InfoCard
            icon="/Icon/logo.png"
            title="Paham Hukum, Jadi Mandiri"
            desc="Mini kursus, kamus hukum, kalkulator waris, dan template dokumen, semua bikin Anda lebih paham dan percaya diri mengurus hak sendiri."
          />
        </div>
      </div>
      {/* carousel */}
      {/* CAROUSEL Hidden Mobile */}
      <div className="hidden">
        <Carousel
          data={dataCarousel}
          className="animate-[fadeInBoth_0.7s_cubic-bezier(0.26,0.23,0.2,1)_both] opacity-0"
          style={{
            animationRange: "entry_80%_cover_100%",
            animationTimeline: "view()",
          }}
        />
      </div>
      {/* feature */}
      <div className="flex flex-col gap-[9.06rem] w-310 max-w-[90lvw]">
        {data.map((val, i) => {
          return (
            <MockupView
              image={val.image}
              title={val.title}
              type={i % 2 == 0 ? 0 : 1}
              desc={val.desc}
              key={i}
            />
          );
        })}
      </div>

      <div className="w-full">
        {/* form */}
        <div
          id="contact"
          className="bg-pastel-green w-full p-[4rem_6.25rem] flex justify-center"
        >
          <div className="w-310 max-w-[90lvw] gap-12 md:gap-4 lg:gap-16 flex md:flex-row flex-col px-4 md:px-0 lg:px-28">
            {/* left */}
            <div className="flex flex-col gap-4 md:gap-9 w-full">
              <h1 className="text-[min(8lvw,3rem)] md:text-[2.5rem] xl:text-[3rem] text-dark-green font-bold tracking-m8">
                Contact
              </h1>
              <div>
                <h2 className="text-[min(4lvw,1rem)] md:text-[1rem] xl:text-[1.375rem] text-dark-green font-normal tracking-m4">
                  Feedback, questions, ideas, or issues
                </h2>
                <h1 className="text-[min(5.5lvw,1.3rem)] md:text-[1.3rem] xl:text-[2rem] text-dark-green font-bold tracking-m4">
                  Ask Everything!
                </h1>
              </div>
            </div>

            {/* form input */}
            <div className="flex flex-col gap-4 md:gap-8">
              <Form
                title="Name"
                func={(e) => {
                  setName(e);
                }}
                placeholder="Your Name"
                value={name}
              ></Form>
              <Form
                title="Email"
                func={(e) => {
                  setEmail(e);
                }}
                placeholder="yourmail@mail.com"
                value={email}
              ></Form>
              <Form
                title="Name"
                func={(e) => {
                  setMessage(e);
                }}
                placeholder="Your Message Right Here..."
                area
                value={message}
              ></Form>
              <button
                onClick={() => {
                  if (!email || !name || !message) {
                    alert("Please input the form input first to continue!");
                    return;
                  }
                }}
                className="bg-dark-green text-white text-[1.25rem] font-bold p-3 rounded-xl hover:brightness-75 cursor-pointer duration-300"
              >
                Send it!
              </button>
            </div>
          </div>
        </div>

        {/* logo slider */}
        <div className="w-full items-center flex flex-col gap-20 md:gap-30 py-20">
          {/* diliput */}
          <div className="w-310 max-w-[90lvw] flex flex-col gap-12 md:px-40 lg:px-30 py-4 items-center">
            <h1
              className="text-[min(8lvw,3.25rem)] md:text-[3.25rem] text-dark-green font-bold tracking-m8 text-center
            animate-[fadeInBoth_0.7s_cubic-bezier(0.26,0.23,0.2,1)_both] opacity-0"
              style={{
                animationRange: "entry_80%_cover_100%",
                animationTimeline: "view()",
              }}
            >
              Telah Diliput Oleh
            </h1>
            {/* parent container */}
            <div
              className="w-full md:w-[140%] overflow-hidden relative
            animate-[fadeInBoth_0.7s_cubic-bezier(0.26,0.23,0.2,1)_both] opacity-0"
              style={{
                animationRange: "entry_80%_cover_100%",
                animationTimeline: "view()",
              }}
            >
              <div className="w-max overflow-hidden">
                {/* loop container */}
                <div className="flex gap-8 h-10 md:h-16 animate-[infiniteLoop_15s_linear_infinite]">
                  {Array.from({ length: diliput.length * 2 }).map((_, i) => {
                    return (
                      <div className="h-full relative shrink-0" key={i}>
                        <img
                          src={`/Diliput/${diliput[i % diliput.length].image}`}
                          alt={diliput[i % diliput.length].image.replaceAll(
                            ".png",
                            "",
                          )}
                          className="h-full w-auto"
                        ></img>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* overlay */}
              <div
                className="w-full h-16 absolute
                bg-[linear-gradient(to_right,#f5f5f5_0%,transparent_15%,transparent_85%,#f5f5f5_100%)]
                bottom-0"
              ></div>
            </div>
          </div>
          {/* penghargaan */}
          <div className="w-310 max-w-[90lvw] flex flex-col gap-12 md:px-40 lg:px-30 py-4 items-center">
            <h1
              className="text-[min(8lvw,3.25rem)] md:text-[3.25rem] text-dark-green font-bold tracking-m8 text-center
            animate-[fadeInBoth_0.7s_cubic-bezier(0.26,0.23,0.2,1)_both] opacity-0"
              style={{
                animationRange: "entry_80%_cover_100%",
                animationTimeline: "view()",
              }}
            >
              Penghargaan yang Diraih
            </h1>
            {/* parent container */}
            <div
              className="w-full md:w-[140%] overflow-hidden relative
            animate-[fadeInBoth_0.7s_cubic-bezier(0.26,0.23,0.2,1)_both] opacity-0"
              style={{
                animationRange: "entry_80%_cover_100%",
                animationTimeline: "view()",
              }}
            >
              <div className="w-max overflow-hidden">
                {/* loop container */}
                <div className="flex gap-8 h-10 md:h-16 animate-[infiniteLoopReverse_15s_linear_infinite]">
                  {Array.from({ length: diliput.length * 2 }).map((_, i) => {
                    return (
                      <div className="h-full relative shrink-0" key={i}>
                        <img
                          src={`/Diliput/${diliput[i % diliput.length].image}`}
                          alt={diliput[i % diliput.length].image.replaceAll(
                            ".png",
                            "",
                          )}
                          className="h-full w-auto"
                        ></img>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* overlay */}
              <div
                className="w-full h-16 absolute
                bg-[linear-gradient(to_right,#f5f5f5_0%,transparent_15%,transparent_85%,#f5f5f5_100%)]
                bottom-0"
              ></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer></Footer>
      </div>
      <Header></Header>
    </div>
  );
}
