import React from "react";
import { funFactData } from "../data/FunFactData";

const FunFact: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="mx-auto my-10 w-[106px] border-b-[3px] border-[#4BFFA5]  text-2xl font-semibold md:w-[132px] md:text-3xl">
        <h1 className="text-center">Fun Fact</h1>
      </div>
      <div className="grid grid-cols-1 gap-10 pb-10 pt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {funFactData.map((data) => (
          <div
            className="cursor-pointer rounded-lg bg-[#252425] p-5 text-center transition-all hover:scale-95"
            key={data.id}
          >
            <h1 className="mb-2 text-4xl">{data.number}</h1>
            <p className=" text-[18px] font-medium text-[#4BFFA5]">
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunFact;
