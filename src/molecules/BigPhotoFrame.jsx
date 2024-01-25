import React from "react";

const BigPhotoFrame = ({ img, heading, subHeading1, subHeading2, reverse }) => {
  return (
    <div
      className={`flex flex-col justify-center   md:my-20  xl:flex-row ${
        reverse ? "xl:flex-row-reverse" : ""
      } xl:justify-between xl:w-full`}>
      <div className="xl:w-2/5 ">
        <img
          src={img}
          alt="photon"
          className="rounded-t-3xl object-cover xl:rounded-tr-none  xl:rounded-bl-3xl xl:rounded-b-none w-full h-full  "
        />
      </div>

      <div className="flex flex-col justify-center  gap-4 p-6 bg-[#FDF3F0] rounded-b-3xl  xl:rounded-br-3xl xl:rounded-bl-none xl:rounded-tr-3xl  xl:rounded-t-none  flex-grow l xl:w-3/5  ">
        <h5 className="text-peach text-center font-jost text-3xl font-medium md:text-5xl md:my-6 xl:text-start mb-5 xl:px-5">
          {heading}
        </h5>
        <p className="text-darkGrey text-center font-jost text-base font-medium   max-w-xs md:max-w-xl  mx-auto mb-5  xl:text-start  ">
          {subHeading1}
        </p>

        <p className="text-darkGrey text-center font-jost text-base font-medium   max-w-xs md:max-w-xl  mx-auto mb-5  xl:text-start  ">
          {subHeading2}
        </p>
      </div>
    </div>
  );
};

export default BigPhotoFrame;
