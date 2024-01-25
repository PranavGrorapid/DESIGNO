import React from "react";

const PhotoFrame = ({ img, heading, subHeading, bgColor }) => {
  console.log("nn", `${bgColor}`);

  return (
    <div className="">
      <div className="flex flex-col justify-center  md:flex-row md:justify-between   xl:flex xl:flex-col xl:justify-between xl:items-center  md:w-full xl:my-10 cursor-pointer hover:scale-105 hover:2s ease-out">
        <div
          className={`md:w-1/2 rounded-t-3xl md:rounded-tr-none md:rounded-bl-3xl xl:rounded-bl-none xl:rounded-tr-3xl flex-grow xl:w-full ${
            bgColor ? `${bgColor}` : ""
          }`}>
          <img
            src={img}
            alt="photon"
            className="rounded-t-3xl object-cover md:rounded-tr-none  md:rounded-bl-3xl xl:rounded-b-none w-full h-full  "
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-4 p-8 bg-[#FDF3F0] rounded-b-3xl  md:rounded-br-3xl md:rounded-bl-none md:rounded-tr-3xl  xl:rounded-t-none md:w-1/2 flex-grow xl:w-full">
          <h5 className="text-peach text-center font-jost text-xl font-medium tracking-widest">
            {heading}
          </h5>
          <p className="text-darkGrey text-center font-jost text-base font-medium   max-w-xs  mx-auto   ">
            {subHeading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoFrame;
