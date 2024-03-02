import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

const SocialIcon: React.FC = () => {
  const iconStyle =
    "rounded-sm p-[6px] text-white transition-transform duration-300 hover:scale-110";

  return (
    <div className="flex items-center gap-3">
      <h1 className="text-[20px] font-medium">Follow On</h1>
      <Link
        to="https://www.facebook.com/farhan.masuk.33/"
        target="_blank"
        className={`cursor-pointer bg-[#1363DF] ${iconStyle}`}
      >
        <FaFacebookF size={20} />
      </Link>
      <Link
        to="https://github.com/farhan8728"
        target="_blank"
        className={`cursor-pointer bg-[#000000] ${iconStyle}`}
      >
        <IoLogoGithub size={20} />
      </Link>
      <Link
        to="https://www.linkedin.com/in/farhan-masuk/"
        target="_blank"
        className={`cursor-pointer bg-[#2155CD] ${iconStyle}`}
      >
        <FaLinkedinIn size={20} />
      </Link>
      {/* <Link to="/" className={`cursor-pointer bg-[#000000] ${iconStyle}`}>
        <FaXTwitter size={20} />
      </Link> */}
    </div>
  );
};

export default SocialIcon;
