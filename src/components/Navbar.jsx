import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { GiCrossedBones } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobnavopen, setMobNavopen] = useState(false);

  return (
    <div>
      <header className="max-w-6xl flex items-center justify-between container mx-auto px-6 md:px-10 xl:px-0  h-[150px] ">
        {/* logo */}{" "}
        <Link to={"/"}>
          {" "}
          <div className="flex items-center gap-3">
            <div>
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
                  fill="url(#paint0_angular_0_8012)"
                />
                <defs>
                  <radialGradient
                    id="paint0_angular_0_8012"
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
            </div>{" "}
            <div className="text-darkGrey text-2xl font-bold tracking-widest">
              DESIGNO
            </div>
          </div>
        </Link>
        {/* nav-links */}
        <nav className="hidden  md:block">
          <ul className="uppercase font-jost font-normal text-sm tracking-wide text-darkGrey flex items-center justify-between xl:space-x-10 md:space-x-5">
            <Link to={"/app-design"}>
              <li className="hover:text-peach">app design</li>
            </Link>
            <Link to={"/web-design"}>
              <li className="hover:text-peach">web design</li>
            </Link>
            <Link to={"/locations"}>
              {" "}
              <li className="hover:text-peach">locations</li>
            </Link>
            <Link to={"/contact-us"}>
              <li className="hover:text-peach">contact</li>
            </Link>
            <Link to={"/about-us"}>
              <li className="hover:text-peach">about us</li>
            </Link>
          </ul>
        </nav>
        {/* hamburg button */}
        {mobnavopen ? (
          <div
            className="md:hidden text-3xl cursor-pointer"
            onClick={() => setMobNavopen(false)}>
            <GiCrossedBones />
          </div>
        ) : (
          <div
            className="md:hidden text-3xl cursor-pointer"
            onClick={() => setMobNavopen(true)}>
            <BiMenuAltLeft />
          </div>
        )}
      </header>

      {mobnavopen && (
        <div className="bg-darkGrey text-white py-20">
          <nav className="  md:hidden">
            <ul className="uppercase font-jost font-normal text-sm tracking-wide  flex  flex-col space-y-10 items-center justify-between ">
              <Link to={"/app-design"}>
                <li className="hover:text-peach">app design</li>
              </Link>
              <Link to={"/web-design"}>
                <li className="hover:text-peach">web design</li>
              </Link>
              <Link to={"/locations"}>
                {" "}
                <li className="hover:text-peach">locations</li>
              </Link>
              <Link to={"/contact-us"}>
                <li className="hover:text-peach">contact</li>
              </Link>
              <Link to={"/about-us"}>
                <li className="hover:text-peach">about us</li>
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
