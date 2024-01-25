import React from "react";
import Button from "../atoms/Button";

const LocationCard = ({ img, heading, txt }) => {
  return (
    <div className="flex flex-col justify-center  items-center  xl:flex-col xl:justify-center  xl:text-center md:mt-10 ">
      <div className="xl:w-full">
        <img src={img} alt="img" className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-center items-center my-10 xl:justify-center xl:items-center xl:w-full">
        <h5 className="text-darkGrey text-center font-jost text-xl font-medium tracking-widest mb-8 mt-12 md:mt-0">
          {heading}
        </h5>

        <div className="flex justify-center items-center">
          <Button
            bg={"bg-peach"}
            color={"text-white"}
            data={"SEE LOCATION"}
            hoverBg={"bg-white"}
            hoverColor={"text-peach"}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
