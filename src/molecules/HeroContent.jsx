import React from "react";

const HeroContent = ({ heading, subHeading }) => {
  return (
    <div>
      <div className="bg-peach   flex flex-col justify-center gap-6 items-center py-20 px-6 md:px-0  md:mx-10 md:rounded-3xl xl:mx-auto   max-w-6xl xl:justify-around ">
        <h1 className="text-white text-center font-jost text-5xl font-medium">
          {heading}
        </h1>
        <p className="text-white text-center font-jost  text-base font-normal md:max-w-sm md:mx-auto">
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
