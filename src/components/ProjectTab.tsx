import React from "react";
import { MdLaptopChromebook } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  img: string;
  project_name: string;
  live: string;
  client: string;
  server?: string;
  technologies: string;
}

interface ProjectTabProps {
  projects: Project[];
}

const ProjectTab: React.FC<ProjectTabProps> = ({ projects }) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((item) => (
          <div
            key={item.id}
            className="rounded-md   border border-gray-700 bg-[#252425]"
          >
            <img
              className="h-[200px]  w-full  rounded-t-md"
              src={item.img}
              alt=""
            />
            <div className="p-4">
              <h1 className="text-center text-[20px] font-semibold">
                {item.project_name}
              </h1>

              <div className="my-4 flex  items-center justify-center gap-5 transition-all">
                <div className="flex cursor-pointer items-center gap-1 rounded-sm bg-[#4BFFA5] px-2 font-medium text-black transition-all hover:bg-gray-700 hover:text-white">
                  <MdLaptopChromebook />
                  <Link to={item.live} target="_blank">
                    Live
                  </Link>
                </div>
                <div className="flex cursor-pointer items-center gap-1 rounded-sm bg-[#4BFFA5] px-2 font-medium text-black transition-all hover:bg-gray-700 hover:text-white">
                  <FaGithub />
                  <Link to={item.client} target="_blank">
                    Client
                  </Link>
                </div>
                {item?.server && (
                  <div className="flex cursor-pointer items-center gap-1 rounded-sm bg-[#4BFFA5] px-2 font-medium text-black transition-all hover:bg-gray-700 hover:text-white">
                    <FaGithub />
                    <Link to={item?.server} target="_blank">
                      Server
                    </Link>
                  </div>
                )}
              </div>
              <h1 className="text[18px]">Technologies:</h1>
              <p className="text-[15px] uppercase text-gray-300">
                {item.technologies}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link
        className="mx-auto mb-20 mt-14    flex w-40    cursor-pointer   items-center justify-center rounded-sm bg-[#4BFFA5]   py-2  text-center  font-semibold  text-black transition-all hover:scale-95 hover:bg-[#252425] hover:text-[#4BFFA5]"
        to="https://github.com/mdsajalali"
        target="_blank"
      >
        Explore More
        <span className="ml-2">
          <FaGithub />
        </span>
      </Link>
    </>
  );
};

export default ProjectTab;
