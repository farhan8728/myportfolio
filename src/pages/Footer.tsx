import React from "react";
import footer_img from "../assets/images/my-pic.jpg";

import { Link } from "react-router-dom";
import SocialIcon from "../components/SocialIcons";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-[1200px] border-t border-[#252425] ">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-3 py-5">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={footer_img}
            alt="footer_img"
          />
          <h1 className="text-[20px] font-medium  ">Farhan-Masuk</h1>
        </div>
        {/* social icons */}
        <SocialIcon />
      </div>
      <div className="mt-5 pb-7 text-center sm:mt-0">
        <p>
          All Right Reserved © {year}{" "}
          <span className="font-semibold text-[#4BFFA5] hover:underline">
            <Link to="https://www.linkedin.com/in/mdsajalali/" target="_blank">
              Farhan-Masuk
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
