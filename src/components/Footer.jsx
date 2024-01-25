import React from "react";
import socialIcons from "../images/social icons.svg";

const Footer = () => {
  return (
    <footer className="bg-black cursor-pointer">
      <div className="pt-60 pb-28 px-10 xl:px-0 max-w-6xl xl:mx-auto">
        {/* ist div */}
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
          {/* inner div */}
          <div className="flex items-center justify-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <circle
                cx="12"
                cy="12"
                r="12"
                transform="matrix(0 -1 -1 0 24 24)"
                fill="url(#paint0_angular_0_2613)"
              />
              <defs>
                <radialGradient
                  id="paint0_angular_0_2613"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(12 12) scale(12)">
                  <stop stop-color="#E7816B" stop-opacity="0.01" />
                  <stop offset="0.999287" stop-color="#E7816B" />
                </radialGradient>
              </defs>
            </svg>

            <h2 className="text-white text-2xl font-bold tracking-widest">
              DESIGNO
            </h2>
          </div>

          {/* second inner div */}

          <div>
            <ul className="flex flex-col items-center justify-center gap-5 text-white mt-16 text-sm font-normal md:flex-row md:justify-between md:mt-0 tracking-widest">
              <li className="uppercase">our company</li>
              <li className="uppercase">locations</li>
              <li className="uppercase">contact</li>
            </ul>
          </div>
        </div>

        {/* 2nd div */}

        <div className="flex flex-col justify-center items-center space-y-10 mt-10 md:flex-row md:space-y-0 md:justify-between  md:mt-20 ">
          <div className="text-white opacity-50 font-jost text-base text-center font-normal max-w-xs mx-auto md:text-start md:flex md:justify-start md:items-start  md:max-w-full md:mx-0 ">
            Designo Central Office <br /> 3886 Wellington Street <br />
            Toronto, Ontario M9C 3J
          </div>

          <div className="text-white opacity-50 font-jost text-base text-center font-normal max-w-xs mx-auto md:max-w-full  md:mx-0">
            {/* Contact Us (Central Office) <br />P : +1 253-863-8967 <br /> M m
              contact@designo.co */}
          </div>

          <div className="md:flex md:justify-end md:items-end">
            <img src={socialIcons} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
