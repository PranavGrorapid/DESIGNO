import React from "react";

const SkillCard = ({ img, heading, subHeading }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:gap-10   md:text-start xl:flex-col xl:justify-center  xl:text-center my-20 hover:text-peach cursor-pointer hover:scale-105 hover:2s ease-out">
        <div className="md:w-2/5 xl:w-full">
          <img src={img} alt="img" className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start xl:justify-center xl:items-center  md:w-3/5 xl:w-full">
          <h5 className="text-darkGrey text-center font-jost text-xl font-medium tracking-widest mb-8 mt-12 md:mt-0 hover:text-peach ">
            {heading}
          </h5>
          <p className="text-darkGrey text-center font-jost   text-base font-normal tracking-widest max-w-sm md:max-w-3xl  mx-auto  md:mx-0 md:text-start xl:text-center hover:text-peach ">
            {subHeading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
