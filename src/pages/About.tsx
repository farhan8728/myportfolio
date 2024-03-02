import React from "react";
import my_img from "../assets/images/my-pic.jpg";
import AboutTabs from "../components/AboutTabs";
import SocialIcon from "../components/SocialIcons";

const About: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-[1200px] pb-16 ">
        <div className="mx-auto my-10 w-[120px] border-b-[3px] border-[#4BFFA5] text-2xl font-semibold md:w-[150px] md:text-3xl">
          <h1 className="text-center">About Me</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 xl:justify-between">
          <div>
            <img
              className="h-[280px] w-[280px] object-cover ring-[3px] ring-[#4BFFA5] md:h-[400px]  md:w-[400px]"
              src={my_img}
              alt="my_img"
            />
          </div>
          <div className="max-w-[650px]">
            <AboutTabs />

            {/* social icons */}
            <SocialIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
