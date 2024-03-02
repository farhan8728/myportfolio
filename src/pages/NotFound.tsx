import { Link } from "react-router-dom";
import React from "react";
import GridLines from "react-gridlines";

const NotFound: React.FC = () => {
  return (
    <GridLines
      className="grid-area bg-[#101010]"
      lineColor={"#252425"}
      strokeWidth={0.3}
      cellWidth={20}
    >
      <div className="flex h-screen flex-col items-center justify-center px-4">
        <div className="mb-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          404 - Not Found
        </div>
        <div className="mb-8 text-center text-base text-white md:text-lg lg:text-xl">
          Sorry, the page you are looking for does not exist.
        </div>
        <Link
          to="/"
          className="mt-5 flex cursor-pointer items-center justify-center gap-1 rounded-sm bg-[#4BFFA5] px-4 py-3  text-center  font-semibold text-black transition duration-300  hover:bg-[#252425] hover:text-[#4BFFA5]"
        >
          Back to Home
        </Link>
      </div>
    </GridLines>
  );
};

export default NotFound;
