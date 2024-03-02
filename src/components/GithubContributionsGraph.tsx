import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const GithubContributionsGraph = () => {
  return (
    <div className="mb-20 flex flex-col items-center justify-center ">
      <div className="mx-auto my-10 w-[135px] border-b-[3px] border-[#4BFFA5]   text-2xl font-semibold md:w-[165px] md:text-3xl">
        <h1 className="text-center">Day I Code</h1>
      </div>
      <GitHubCalendar
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            "data-tooltip-id": "react-tooltip",
            "data-tooltip-html": `${activity.count} activities on ${activity.date}`,
          })
        }
        username="mdsajalali"
      />

      <ReactTooltip id="react-tooltip" />
    </div>
  );
};

export default GithubContributionsGraph;
