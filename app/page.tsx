"use client";

import Image from "next/image";
import Header from "./Component/Header";
import InfoCard from "./Component/InfoCard";
import MockupView from "./Component/MockupView";
import Form from "./Component/Form";
import { useState } from "react";
import Footer from "./Component/Footer";

export default function Home() {
  let data = [
    {
      title: "title",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquet feugiat dignissim ut nisl enim in id enim sem. Sed volutpat quisque at nascetur tellus aliquet ac.",
    },
    {
      title: "title",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquet feugiat dignissim ut nisl enim in id enim sem. Sed volutpat quisque at nascetur tellus aliquet ac.",
    },
    {
      title: "title",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquet feugiat dignissim ut nisl enim in id enim sem. Sed volutpat quisque at nascetur tellus aliquet ac.",
    },
    {
      title: "title",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquet feugiat dignissim ut nisl enim in id enim sem. Sed volutpat quisque at nascetur tellus aliquet ac.",
    },
    {
      title: "title",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquet feugiat dignissim ut nisl enim in id enim sem. Sed volutpat quisque at nascetur tellus aliquet ac.",
    },
    {
      title: "title",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquet feugiat dignissim ut nisl enim in id enim sem. Sed volutpat quisque at nascetur tellus aliquet ac.",
    },
    {
      title: "title",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquet feugiat dignissim ut nisl enim in id enim sem. Sed volutpat quisque at nascetur tellus aliquet ac.",
    },
    {
      title: "title",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquet feugiat dignissim ut nisl enim in id enim sem. Sed volutpat quisque at nascetur tellus aliquet ac.",
    },
    {
      title: "title",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquet feugiat dignissim ut nisl enim in id enim sem. Sed volutpat quisque at nascetur tellus aliquet ac.",
    },
    {
      title: "title",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquet feugiat dignissim ut nisl enim in id enim sem. Sed volutpat quisque at nascetur tellus aliquet ac.",
    },
    {
      title: "title",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquet feugiat dignissim ut nisl enim in id enim sem. Sed volutpat quisque at nascetur tellus aliquet ac.",
    },
    {
      title: "title",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquet feugiat dignissim ut nisl enim in id enim sem. Sed volutpat quisque at nascetur tellus aliquet ac.",
    },
    {
      title: "title",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquet feugiat dignissim ut nisl enim in id enim sem. Sed volutpat quisque at nascetur tellus aliquet ac.",
    },
    {
      title: "title",
      desc: "Lorem ipsum dolor sit amet consectetur. Aliquet feugiat dignissim ut nisl enim in id enim sem. Sed volutpat quisque at nascetur tellus aliquet ac.",
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
            <div className="flex gap-1.5 md:gap-2.5 p-[0.75rem_1.5rem] bg-dark-green items-center rounded-full animate-[fadeIn_0.7s_cubic-bezier(0.26,0.23,0.2,1)]">
              <Image
                width={20}
                height={20}
                alt="logo"
                src={"/Icon/book.svg"}
                blurDataURL="/Icon/book.svg"
              />
              <p className="text-white text-[min(4lvw,1.125rem)] md:text-[1.125rem] font-semibold tracking-m4">
                Konsultan Hukum No. 1
              </p>
            </div>
            <div className="flex flex-col items-center xl:items-start">
              <h1 className="text-[min(8lvw,3.25rem)] md:text-[3.25rem] text-dark-green font-bold tracking-m8 animate-[fadeIn_0.7s_cubic-bezier(0.26,0.23,0.2,1)_forwards] [animation-delay:300ms] opacity-0">
                Semua Urusan Hukum
              </h1>
              <h1 className="text-[min(10lvw,5.125rem)] md:text-[5.125rem] text-dark-green font-bold tracking-m8 mt-[-0.8rem] xl:mt-[-1.2rem] animate-[fadeIn_0.7s_cubic-bezier(0.26,0.23,0.2,1)_forwards] [animation-delay:600ms] opacity-0">
                Dalam Satu <span className="text-orange">Layar</span>
              </h1>
            </div>
            <p className="text-center xl:text-left text-[min(5lvw,2rem)] md:text-[2rem] tracking-m2 font-normal leading-[140%] animate-[fadeIn_0.7s_cubic-bezier(0.26,0.23,0.2,1)_forwards] [animation-delay:900ms] opacity-0">
              Bukan sekadar aplikasi, Sebuah ekosistem keadilan dalam satu
              genggaman.
            </p>
            {/* download button */}
            <div className="flex gap-4 max-w-[70lvw]">
              {/* playstore */}
              <div className="cursor-pointer animate-[fadeIn_0.7s_cubic-bezier(0.26,0.23,0.2,1)_forwards] [animation-delay:1200ms] opacity-0">
                <Image
                  alt="playstore download"
                  src={"/Element/playstore-button.svg"}
                  blurDataURL="/Element/playstore-button.svg"
                  placeholder="blur"
                  width={200}
                  height={200}
                />
              </div>
              {/* appstore */}
              <div className="cursor-pointer animate-[fadeIn_0.7s_cubic-bezier(0.26,0.23,0.2,1)_forwards] [animation-delay:1350ms] opacity-0">
                <Image
                  alt="appstore download"
                  src={"/Element/appstore-button.svg"}
                  blurDataURL="/Element/appstore-button.svg"
                  placeholder="blur"
                  width={200}
                  height={200}
                />
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
          <InfoCard icon="/Icon/logo.png" title="title" desc="Description" />
          <InfoCard icon="/Icon/logo.png" title="title" desc="Description" />
        </div>
        <div className="flex max-w-[90lvw] flex-col md:flex-row gap-3 justify-center">
          <InfoCard icon="/Icon/logo.png" title="title" desc="Description" />
          <InfoCard icon="/Icon/logo.png" title="title" desc="Description" />
        </div>
      </div>

      {/* feature */}
      <div className="flex flex-col gap-[9.06rem] w-310 max-w-[90lvw]">
        {data.map((val, i) => {
          return (
            <MockupView
              image={`/Image/Mockup/phone_mockup_${i + 1}.png`}
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
            animate-[fadeInBoth_0.7s_cubic-bezier(0.26,0.23,0.2,1)_both] [animation-timeline:view()] [animation-range:entry_80%_cover_100%] opacity-0"
            >
              Telah Diliput Oleh
            </h1>
            {/* parent container */}
            <div
              className="w-full md:w-[140%] overflow-hidden relative
            animate-[fadeInBoth_0.7s_cubic-bezier(0.26,0.23,0.2,1)_both] [animation-timeline:view()] [animation-range:entry_80%_cover_100%] opacity-0"
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
            animate-[fadeInBoth_0.7s_cubic-bezier(0.26,0.23,0.2,1)_both] [animation-timeline:view()] [animation-range:entry_80%_cover_100%] opacity-0"
            >
              Penghargaan yang Diraih
            </h1>
            {/* parent container */}
            <div
              className="w-full md:w-[140%] overflow-hidden relative
            animate-[fadeInBoth_0.7s_cubic-bezier(0.26,0.23,0.2,1)_both] [animation-timeline:view()] [animation-range:entry_80%_cover_100%] opacity-0"
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
