import React from "react";
import Navbar from "../components/Navbar";
import location1 from "../images/location1.png";
import ukk from "../images/ukk.png";
import aus from "../images/aus.png";
import PromoFooter from "../molecules/PromoFooter";
import Footer from "../components/Footer";
import Locationscards from "../molecules/Locationscards";

const Location = () => {
  const promoFooterContent = {
    heading: "Let’s talk about your project",
    subHeading:
      "Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.",
    buttonContent: "GET IN TOUCH",
    ButtonBg: "bg-white",
    buttonTextcolor: "text-darkGrey",
  };

  const heroData = [
    {
      id: 1,
      location: location1,
      heading: "Canada",
      box1h1: "Designo Central Office",
      box1p1: "3886 Wellington Street",
      box1p2: "Toronto, Ontario M9C 3J5",
      box2h1: "Contact",
      box2p1: "P : +1 253-863-8967",
      box2p2: "M : contact@designo.co",
    },

    {
      id: 2,
      location: aus,
      heading: "Australia",
      box1h1: "Designo AU Office",
      box1p1: "19 Balonne Street",
      box1p2: "New South Wales 2443",
      box2h1: "Contact",
      box2p1: "P : (02) 6720 9092",
      box2p2: "M : contact@designo.co",
    },

    {
      id: 3,
      location: ukk,
      heading: "United Kingdom",
      box1h1: "Designo UK Office",
      box1p1: "3886 Wellington Street",
      box1p2: "Rhyd-y-fro SA8 9GA",
      box2h1: "Contact",
      box2p1: "P : 078 3115 1400",
      box2p2: "M : contact@designo.uk",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="flex flex-col space-y-20  mb-60">
        {heroData.map((data) => {
          return (
            <Locationscards
              id={data.id}
              location={data.location}
              heading={data.heading}
              box1h1={data.box1h1}
              box1p1={data.box1p1}
              box1p2={data.box1p2}
              box2h1={data.box2h1}
              box2p1={data.box2p1}
              box2p2={data.box2p2}
            />
          );
        })}
      </div>

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

export default Location;
