import React from "react";

const GridCard = ({ img, heading, subHeading, idx }) => {
  return (
    <div>
      <div
        className="min-h-[250px] max-w-sm  bg-black relative mx-auto text-white bg-no-repeat bg-cover bg-center rounded-2xl md:min-h-[200px] md:max-w-full xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-3 hover:text-peach cursor-pointer hover:scale-105 hover:2s ease-out"
        style={{
          backgroundImage: `url(${img})`,
          width: "100%",
          height: "100%",
        }}>
        <div className="flex flex-col space-y-3 justify-center items-center h-full bg-bgOpacity  rounded-2xl hover:text-peach">
          <h5 className=" uppercase font-jost text-3xl font-medium tracking-wider hover:text-peach ">
            {heading}
          </h5>
          <p className="e uppercase font-jost text-base font-medium tracking-widest">
            {subHeading}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
