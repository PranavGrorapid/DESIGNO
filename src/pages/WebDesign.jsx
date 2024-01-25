import React from "react";
import Navbar from "../components/Navbar";
import expressDekstop from "../images/Express - Desktop.png";
import transfer from "../images/Transfer.jpg";
import photon from "../images/Photon.jpg";
import builder from "../images/Builder.jpg";
import bogr from "../images/Blogr.jpg";
import camp from "../images/Camp.jpg";
import grid1 from "../images/grid-home-1.png";
import grid2 from "../images/grid-home-2.jpg";
import grid3 from "../images/grid-home-3.png";
import socialIcons from "../images/social icons.svg";
import Button from "../atoms/Button";
import HeroContent from "../molecules/HeroContent";
import PhotoFrame from "../molecules/PhotoFrame";
import GridCard from "../molecules/GridCard";
import PromoFooter from "../molecules/PromoFooter";
import Footer from "../components/Footer";

const WebDesign = () => {
  const heroData = {
    heading: " Web Design",
    subHeading:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
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

  const photoFrameData = [
    {
      img: photon,
      heading: "PHOTON",
      subHeading:
        "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      img: camp,
      heading: "CAMP",
      subHeading:
        "Get expert training in coding, data, design, and digital marketing",
    },
    {
      img: bogr,
      heading: "BLOGR",
      subHeading:
        "Blogr is a platform for creating an online blog or publication",
    },
    {
      img: builder,
      heading: "BUILDER",
      subHeading:
        "Connects users with local contractors based on their location",
    },

    {
      img: transfer,
      heading: "TRANSFER",
      subHeading:
        "Site for low-cost money transfers and sending money within seconds",
    },

    {
      img: expressDekstop,
      heading: "EXPRESS",
      subHeading: "A multi-carrier shipping website for ecommerce businesses",
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

      {/* hero-section */}

      <HeroContent
        heading={heroData.heading}
        subHeading={heroData.subHeading}
      />

      {/* display-section */}

      <div>
        {/* first row-parent-div */}

        <div className="rounded-lg flex flex-col justify-center  space-y-20  md:space-y-20 py-20 px-6 md:px-0  md:mx-10 xl:mx-auto   max-w-6xl  xl:flex-row xl:justify-between xl:space-y-0 xl:gap-10 xl:grid xl:grid-cols-3 ">
          {photoFrameData.map((data) => {
            return (
              <PhotoFrame
                img={data.img}
                heading={data.heading}
                subHeading={data.subHeading}
              />
            );
          })}
        </div>
      </div>

      {/* grid-features-section */}

      <section
        id="grid-feature"
        className="max-w-6xl mx-auto px-6 mb-60 md:mx-10 md:px-0  xl:px-0 xl:grid-cols-3 xl:grid-rows-3 xl:mx-auto">
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

export default WebDesign;
