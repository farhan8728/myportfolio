import React from "react";
import SkillCategory from "../components/SkillCategory";
import { skillTools, skillsFrontend } from "../data/SkillsData";

const Skills: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1200px]">
      <div>
        <div className="mx-auto my-10 w-[66px] border-b-[3px] border-[#4BFFA5]   text-2xl font-semibold md:w-[80px] md:text-3xl">
          <h1 className="text-center">Skills</h1>
        </div>
        <p className="-mt-5 text-center">
          Here are some of my skills on which I have been <br />
          working for the past 2 years.
        </p>

        <>
          <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2">
            <SkillCategory title="Frontend" skills={skillsFrontend} />
            {/* <SkillCategory title="Backend" skills={skillsBackend} /> */}
            <SkillCategory title="Tools" skills={skillTools} />
            {/* <SkillCategory title="Personal Skills" skills={personalSkills} /> */}
          </div>
          {/* github contributions graph */}
          {/* <GitHubContributionsGraph /> */}
        </>
      </div>
    </div>
  );
};

export default Skills;
