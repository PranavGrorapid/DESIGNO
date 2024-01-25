import React from "react";
import Navbar from "../components/Navbar";
import HeroContent from "../molecules/HeroContent";
import PromoFooter from "../molecules/PromoFooter";
import PhotoFrame from "../molecules/PhotoFrame";
import GridCard from "../molecules/GridCard";
import Footer from "../components/Footer";
import grid1 from "../images/grid-home-1.png";
import grid2 from "../images/grid-home-2.jpg";
import grid3 from "../images/grid-home-3.png";
import kkk from "../images/kkkk.png";
import af from "../images/af.png";
import ec from "../images/Eyecam.png";
import md from "../images/MobileDark.png";
import face from "../images/Faceit.png";
import socialIcons from "../images/social icons.svg";
import Button from "../atoms/Button";

const AppDesign = () => {
  const heroData = {
    heading: "App Design",
    subHeading:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
  };

  const cardData = [
    {
      img: grid1,
      heading: "web design",
      subHeading: "view projects",
    },

    {
      img: grid2,
      heading: "app design",
      subHeading: "view projects",
    },

    {
      img: grid3,
      heading: " graphic design",
      subHeading: "view projects",
    },
  ];

  const bgColors = [
    "bg-indigo-700",
    "bg-cyan-400",
    "bg-violet-800",
    "bg-rose-700",
    "bg-blue-600",
  ];

  const photoFrameData = [
    {
      img: af,
      heading: "AIRFILTER",
      subHeading:
        "Solving the problem of poor indoor air quality by filtering the air",
    },
    {
      img: ec,
      heading: "EYECAM",
      subHeading:
        "product that lets you edit your favorite photos and videos at any time",
    },
    {
      img: md,
      heading: "TODO",
      subHeading:
        "A todo app that features cloud sync with light and dark mode",
    },
    {
      img: kkk,
      heading: "LOOPSTUDIOS",
      subHeading: "A VR experience app made for Loopstudios",
    },

    {
      img: face,
      heading: "FACE IT",
      subHeading:
        "Get to meet your favorite internet superstar with the faceit app",
    },
  ];

  const promoFooterContent = {
    heading: "Let’s talk about your project",
    subHeading:
      "Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.",
    buttonContent: "GET IN TOUCH",
    ButtonBg: "bg-white",
    buttonTextcolor: "text-darkGrey",
  };

  return (
    <div>
      <Navbar />

      <HeroContent
        heading={heroData.heading}
        subHeading={heroData.subHeading}
      />

      <div>
        {/* first row-parent-div */}

        <div className="rounded-lg flex flex-col justify-center  space-y-20  md:space-y-20 py-20 px-6 md:px-0  md:mx-10 xl:mx-auto   max-w-6xl  xl:flex-row xl:justify-between xl:space-y-0 xl:gap-10 xl:grid xl:grid-cols-3 ">
          {photoFrameData.map((data, index) => {
            const bgColor = bgColors[index % bgColors.length];
            return (
              <PhotoFrame
                img={data.img}
                heading={data.heading}
                subHeading={data.subHeading}
                bgColor={bgColor}
              />
            );
          })}
        </div>
      </div>

      {/* grid-features-section */}

      <section
        id="grid-feature"
        className="max-w-6xl mx-auto px-6 mb-60  md:mx-10 md:px-0  xl:px-0 xl:grid-cols-3 xl:grid-rows-3 xl:mx-auto">
        <div className="grid  gap-10  ">
          {cardData.map((card) => {
            return (
              <GridCard
                img={card.img}
                heading={card.heading}
                subHeading={card.subHeading}
              />
            );
          })}
        </div>
      </section>

      {/* project-talk-section & footer */}

      <div className="relative md:w-full ">
        <PromoFooter
          heading={promoFooterContent.heading}
          subHeading={promoFooterContent.subHeading}
          ButtonBg={promoFooterContent.ButtonBg}
          buttonContent={promoFooterContent.buttonContent}
          buttonTextcolor={promoFooterContent.buttonTextcolor}
        />

        <Footer />
      </div>
    </div>
  );
};

export default AppDesign;
