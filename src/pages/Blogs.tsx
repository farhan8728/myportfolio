import React from "react";
import { blogData } from "../data/BlogData";
import { MdOutlineDateRange } from "react-icons/md";
import { LiaComments } from "react-icons/lia";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Blogs: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1200px] ">
      <div className="mx-auto my-10 w-[72px] border-b-[3px] border-[#4BFFA5]  text-2xl font-semibold md:w-[90px] md:text-3xl">
        <h1 className="text-center">Blogs</h1>
      </div>

      <div className="relative grid grid-cols-1 gap-10 pb-20 pt-5 md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {blogData.map((data) => (
          <div
            key={data.id}
            className="rounded-sm border-b-2  border-[#4BFFA5]  "
          >
            <img
              className="w-full rounded-t-sm object-cover xl:h-[200px] "
              src={data.img}
              alt=""
            />
            <div className="bg-[#252425] px-3">
              <h1 className="py-5 text-[21px]  ">{data.title}</h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-gray-300">
                  <MdOutlineDateRange />
                  <h2 className="text-[14px]  ">{data.date}</h2>
                </div>
                <div className="flex items-center gap-1 text-gray-300 ">
                  <LiaComments />
                  <h2 className="text-[14px] ">{data.comments} Comments</h2>
                </div>
              </div>
              <hr className="my-5  " />
              <p className="mt-2 text-justify text-gray-200 ">{data.desc}</p>
              <div>
                <Link
                  to={data.live_link as string}
                  target="_blank"
                  className="mt-3 flex items-center gap-2 pb-5 text-[#4BFFA5] transition-all hover:translate-x-1"
                >
                  Read More <IoMdArrowRoundForward />
                </Link>
              </div>
              <h1
                className="absolute top-7 rounded-sm bg-[#4BFFA5] px-2  font-semibold
             text-black"
              >
                {data.category}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
