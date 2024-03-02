import React, { useState } from "react";
import Educations from "../pages/Educations";
import AboutInfo from "./AboutInfo";

const AboutTabs: React.FC = () => {
  const [toggle, setToggle] = useState<number>(1);

  const handleToggle = (id: number) => {
    setToggle(id);
  };

  return (
    <div className="my-10">
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2 border-b border-[#252425] sm:gap-5 ">
        <button
          className={
            toggle === 1
              ? " mb-2 rounded-full   bg-[#4BFFA5]  px-7 py-2 text-[18px] font-medium text-black sm:mb-5  md:px-10 "
              : "  mb-2 rounded-full  bg-[#252425] px-7 py-2 text-[18px] font-medium sm:mb-5  md:px-10"
          }
          onClick={() => handleToggle(1)}
        >
          About Me
        </button>
        <button
          className={
            toggle === 2
              ? " mb-2 rounded-full   bg-[#4BFFA5]  px-7 py-2 text-[18px] font-medium text-black sm:mb-5  md:px-10 "
              : "  mb-2 rounded-full  bg-[#252425] px-7 py-2 text-[18px] font-medium sm:mb-5  md:px-10"
          }
          onClick={() => handleToggle(2)}
        >
          Educations
        </button>
        <button
          className={
            toggle === 3
              ? " mb-2 rounded-full   bg-[#4BFFA5]  px-7 py-2 text-[18px] font-medium text-black sm:mb-5  md:px-10 "
              : "  mb-2 rounded-full  bg-[#252425] px-7 py-2 text-[18px] font-medium sm:mb-5  md:px-10"
          }
          onClick={() => handleToggle(3)}
        >
          Experiences
        </button>
      </div>
      <div className={toggle === 1 ? "block" : "hidden"}>
        <AboutInfo />
      </div>
      <div className={toggle === 2 ? "block" : "hidden"}>
        <Educations />
      </div>
      {/* <div className={toggle === 3 ? "block" : "hidden"}>
        <Experiences />
      </div> */}
    </div>
  );
};

export default AboutTabs;
