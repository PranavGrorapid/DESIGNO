import React from "react";

const Locationscards = ({
  id,
  location,
  heading,
  box1h1,
  box1p1,
  box1p2,
  box2h1,
  box2p1,
  box2p2,
}) => {
  return (
    <div
      className={`flex flex-col justify-center md:gap-10 xl:flex-row ${
        id % 2 === 0 ? "xl:flex-row-reverse" : ""
      } xl:justify-between md:mx-10 max-w-6xl xl:mx-auto xl:w-full`}>
      <div className="xl:w-2/6 w-full">
        <img
          src={location}
          alt="location"
          className="w-full max-h-full md:h-[350px] md:rounded-3xl"
        />
      </div>

      <div className="bg-[#f8e2dc]   flex flex-col justify-center gap-6 py-10 px-6    xl:w-4/6 xl:mx-auto   max-w-6xl md:gap-8 xl:items-start xl:px-24 md:rounded-3xl md:px-20   ">
        <h1 className="text-peach text-center font-jost text-3xl md:text-start font-medium md:text-5xl xl:text-start mb-6  xl:mb-0">
          {heading}
        </h1>
        {/* 2 section div */}

        <div className="flex flex-col justify-center gap-6  md:flex-row md:justify-start xl:justify-center xl:gap-20">
          {/* 1 */}
          <div className="text-center font-jost text-base font-normal flex flex-col space-y-2 md:text-start">
            <h5 className="font-bold text-darkGrey">{box1h1}</h5>
            <p>{box1p1}</p>
            <p>{box1p2}</p>
          </div>

          {/* 2 */}

          <div className="text-center font-jost text-base font-normal flex flex-col space-y-2 md:text-start">
            <h5 className="font-bold text-darkGrey">{box2h1}</h5>
            <p>{box2p1}</p>
            <p>{box2p2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locationscards;
