import React from "react";
import { contactData } from "../data/ContactData";

const ContactInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-10 pb-20 pt-10 sm:grid-cols-2 lg:grid-cols-3">
      {contactData.map((data) => (
        <div
          key={data.id}
          className="rounded-lg bg-[#252425] p-4    text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full  bg-[#161616] text-2xl text-[#4BFFA5] ">
            {data.icon}
          </div>
          <p className=" my-1 text-[20px] font-medium text-gray-200 ">
            {data.title}
          </p>
          <h1 className="mb-2 text-[18px] text-[#4BFFA5]">{data.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
