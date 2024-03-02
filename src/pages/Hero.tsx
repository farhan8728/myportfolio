import React from "react";
import { BsDownload } from "react-icons/bs";
import portfolio_illustration from "../assets/images/portfolio-illustration.png";
import TypeWriter from "../components/TypeWriter";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [elemName: string]: any;
    }
  }
}

const Hero: React.FC = () => {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-[1200px] flex-wrap items-center justify-center gap-10 pt-32 lg:pt-0 xl:justify-between    ">
      <div className="order-last mb-14 lg:order-first lg:mb-0">
        <h2 className="text-3xl font-semibold md:text-5xl">Assalamualaikum</h2>
        <h3 className="my-2 text-2xl font-semibold text-gray-300 md:text-4xl">
          I'm <span className="text-[#4BFFA5]">Farhan-Masuk</span>,
        </h3>
        {/* Typewriter */}
        <TypeWriter />
        <div className="mt-5 flex w-40 cursor-pointer items-center justify-center gap-1 rounded-sm bg-[#4BFFA5] py-2   text-center font-semibold  text-black transition-all hover:scale-95 hover:bg-[#252425] hover:text-[#4BFFA5]">
          <a
            href="https://drive.google.com/file/d/1heGTbP8dvX5i0cIrvVGO14f5DJvRkGj2/view?usp=sharing"
            download
            target="_blank"
          >
            Download CV
          </a>
          <BsDownload />
        </div>
      </div>
      <div className="relative order-first -mt-12 w-[220px]  sm:w-[400px] md:bottom-0 md:-mt-0 md:mb-10 lg:order-last xl:mb-0 xl:w-[450px] ">
        <img
          className="animate-spin-custom animate-spin"
          src={portfolio_illustration}
          alt="portfolio_illustration"
        />
        <div className="absolute left-[32%] top-[50%] text-2xl">
          <marquee width="50%" direction="up" scrollamount="1" height="20px">
            <div
              className="
            text-center"
            >
              React.js Next.js Javascript Tailwind.CSS
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Hero;
