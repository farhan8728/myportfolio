import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectTab from "../components/ProjectTab";
import { projectData } from "../data/ProjectData";

const Projects: React.FC = () => {
  const frontend = projectData.filter((item) => item.category === "frontend");
  const fullStack = projectData.filter(
    (item) => item.category === "full-stack",
  );

  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="mx-auto my-10 w-[102px] border-b-[3px] border-[#4BFFA5]   text-2xl font-semibold md:w-[125px] md:text-3xl">
        <h1 className="text-center">Projects</h1>
      </div>
      <div>
        <Tabs>
          <TabList className="text-center ">
            <Tab>ALL</Tab>
            {/* <Tab>FRONTEND</Tab>
            <Tab>FULL STACK</Tab> */}
          </TabList>
          <TabPanel>
            <ProjectTab projects={projectData} />
          </TabPanel>
          <TabPanel>
            <ProjectTab projects={frontend} />
          </TabPanel>
          <TabPanel>
            <ProjectTab projects={fullStack} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
