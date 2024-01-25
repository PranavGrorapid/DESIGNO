import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AppDesign from "../pages/AppDesign";
import WebDesign from "../pages/WebDesign";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Locations from "../pages/Locations";

const Mainrouter = () => {
  const location = useLocation();

  const isRootPath = location.pathname === "/";

  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/app-design" element={<AppDesign />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>

      {isRootPath && (
        <div className=" px-10 py-10 flex flex-col space-y-20  items-center text-center justify-center bg-peach w-full h-[200vh]  text-white">
          <h1 className="text-lg font-bold md:text-3xl xl:text-5xl">
            pls click at the below nav links to navigate to these pages
          </h1>

          <div className="flex flex-col space-y-10 md:grid md:grid-cols-2 xl:grid-cols-3 md:space-y-0 md:gap-10 ">
            <Link to={"/home"}>
              {" "}
              <div className="font-bold text-white text-3xl  border-4 border-black p-4">
                HomePage
              </div>
            </Link>

            <Link to={"/app-design"}>
              {" "}
              <div className="font-bold text-white text-3xl border-4 border-black p-4">
                App-design
              </div>
            </Link>

            <Link to={"/web-design"}>
              {" "}
              <div className="font-bold text-white text-3xl border-4 border-black p-4">
                WebDesign
              </div>
            </Link>

            <Link to={"/contact-us"}>
              {" "}
              <div className="font-bold text-white text-3xl border-4 border-black p-4">
                Contact us
              </div>
            </Link>

            <Link to={"/about-us"}>
              {" "}
              <div className="font-bold text-white text-3xl border-4 border-black p-4">
                About us
              </div>
            </Link>

            <Link to={"/locations"}>
              {" "}
              <div className="font-bold text-white text-3xl border-4 border-black p-4">
                Locations
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mainrouter;
