import React from "react";
import Button from "../atoms/Button";

const PromoFooter = ({
  heading,
  subHeading,
  buttonContent,
  ButtonBg,
  buttonTextcolor,
}) => {
  return (
    <section
      id="project-talk-section"
      className="max-w-6xl  px-6   xl:max-w-full absolute -top-40 md:w-full md:px-10 xl:px-36">
      <div className="max-w-sm min-h-[300px] px-6 py-12 mx-auto bg-peach text-white rounded-2xl flex flex-col justify-center space-y-5 items-center  md:max-w-7xl xl:flex-row xl:space-y-0 xl:justify-around  ">
        <div>
          <h3 className="font-medium font-jost text-center text-3xl md:text-4xl xl:text-start ">
            {heading}
          </h3>
          <p className="text-center font-jost font-normal text-base md:max-w-md mt-6 xl:text-start">
            {subHeading}
          </p>
        </div>

        {console.log(
          heading,
          subHeading,
          buttonContent,
          ButtonBg,
          buttonTextcolor
        )}

        <div className="flex justify-center items-center">
          <Button bg={ButtonBg} color={buttonTextcolor} data={buttonContent} />
        </div>
      </div>
    </section>
  );
};

export default PromoFooter;
