import React from "react";
import Navbar from "../components/Navbar";
import Button from "../atoms/Button";
import phoneImg from "../images/phone-img.png";
import grid1 from "../images/grid-home-1.png";
import grid2 from "../images/grid-home-2.jpg";
import grid3 from "../images/grid-home-3.png";
import sitguy from "../images/sitguy.png";
import sitguy2 from "../images/sitguy2.png";
import sitguy3 from "../images/sitguy3.png";
import socialIcons from "../images/social icons.svg";
import GridCard from "../molecules/GridCard";
import SkillCard from "../molecules/SkillCard";
import Footer from "../components/Footer";
import PromoFooter from "../molecules/PromoFooter";

const HomePage = () => {
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

  const skillData = [
    {
      img: sitguy,
      heading: "PASSIONATE",
      subHeading:
        "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    },
    {
      img: sitguy2,
      heading: "RESOURCEFUL",
      subHeading:
        "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    },
    {
      img: sitguy3,
      heading: "FRIENDLY",
      subHeading:
        " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
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

      {/* herosection */}

      <div className="bg-peach   flex flex-col justify-center pt-20 px-6 md:px-0  md:mx-10 md:rounded-3xl xl:mx-auto xl:flex-row  max-w-6xl xl:justify-around">
        <div className="flex flex-col xl:justify-center">
          <h1 className="text-white text-center font-jost text-3xl font-medium md:max-w-lg md:mx-auto  md:text-5xl md:font-medium xl:text-start">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-white text-center font-jost text-base font-normal my-5 max-w-sm mx-auto md:max-w-md md:my-8 xl:text-start xl:mx-0">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>

          <div className="flex justify-center items-center xl:justify-start">
            <Button
              bg={"bg-white"}
              color={"text-darkGrey"}
              data={"LEARN MORE"}
              hoverBg={"bg-peach"}
              hoverColor={"text-white"}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img src={phoneImg} alt="phoneImg" className="" />
        </div>
      </div>

      {/* grid-features-section */}

      <section
        id="grid-feature"
        className="max-w-6xl mx-auto px-6 my-32 md:mx-10 md:px-0  xl:px-0 xl:grid-cols-3 xl:grid-rows-3 xl:mx-auto">
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

      {/* display-section */}

      <section
        id="display-section"
        className="max-w-6xl mx-auto mt-32 mb-60 px-6 md:px-0 md:mx-10 xl:px-0 xl:mx-auto ">
        <div className=" xl:flex xl:flex-row  xl:justify-between xl:items-center md:gap-10 xl:gap-20  ">
          {skillData.map((card) => {
            return (
              <SkillCard
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

export default HomePage;
