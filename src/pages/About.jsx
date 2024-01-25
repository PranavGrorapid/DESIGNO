import React from "react";
import Navbar from "../components/Navbar";
import about from "../images/aboutbg.png";
import BigPhotoFrame from "../molecules/BigPhotoFrame";
import girlLooking from "../images/girlLooking.png";
import LocationCard from "../molecules/LocationCard";
import uk from "../images/uk.svg";
import canada from "../images/canada.svg";
import australia from "../images/australia.svg";
import pf2 from "../images/pf2.png";
import PromoFooter from "../molecules/PromoFooter";
import Footer from "../components/Footer";

const About = () => {
  const heroData = {
    heading: "About Us",
    subHeading:
      "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many store corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products,and digital experiences that connect with our clients’ audiences.",
  };

  const locationData = [
    {
      img: australia,
      heading: "AUSTRALIA",
    },

    {
      img: uk,
      heading: "UNITED KINGDOM",
    },

    {
      img: canada,
      heading: "CANADA",
    },
  ];

  const photoFrameData = [
    {
      img: girlLooking,
      heading: "World-class talent",
      subHeading1:
        "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.  ",
      subHeading2:
        "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission",
    },
  ];

  const photoFrameData2 = [
    {
      img: pf2,
      heading: "The real dealt",
      subHeading1:
        "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
      subHeading2:
        "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
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

      <div className="flex flex-col justify-center   xl:flex-row-reverse  xl:justify-between  md:mx-10  max-w-6xl xl:mx-auto ">
        <div className="xl:w-2/5 w-full">
          <img src={about} alt="about" className="w-full h-full" />
        </div>

        <div className="bg-peach   flex flex-col justify-center gap-6 items-center py-20 px-6 md:px-0   xl:w-3/5 xl:mx-auto   max-w-6xl md:gap-8 xl:items-start xl:px-24  ">
          <h1 className="text-white text-center font-jost text-3xl font-medium md:text-5xl xl:text-start">
            {heroData.heading}
          </h1>
          <p className="text-white text-center font-jost  text-[15px] font-normal md:max-w-xl md:mx-auto xl:text-start xl:mx-0 ">
            {heroData.subHeading}
          </p>
        </div>
      </div>

      {/* display-section */}

      <div>
        <div className="rounded-lg flex flex-col justify-center  space-y-20  md:space-y-20 my-20 px-6 md:px-0  md:mx-10 xl:mx-auto   max-w-6xl  xl:flex-row xl:justify-between ">
          {photoFrameData.map((data) => {
            return (
              <BigPhotoFrame
                img={data.img}
                heading={data.heading}
                subHeading1={data.subHeading1}
                subHeading2={data.subHeading2}
              />
            );
          })}
        </div>
      </div>

      {/* display-section */}

      <section
        id="display-section"
        className="max-w-6xl mx-auto  px-6 md:px-0 md:mx-10 xl:px-0 xl:mx-auto  ">
        <div className=" xl:flex xl:flex-row  xl:justify-around xl:items-center  ">
          {locationData.map((card) => {
            return <LocationCard img={card.img} heading={card.heading} />;
          })}
        </div>
      </section>

      <div>
        <div className="rounded-lg flex flex-col justify-center  space-y-20  md:space-y-20 my-20 px-6 md:px-0  md:mx-10 xl:mx-auto   max-w-6xl  xl:flex-row xl:justify-between mt-32 mb-60 ">
          {photoFrameData2.map((data) => {
            return (
              <BigPhotoFrame
                img={data.img}
                heading={data.heading}
                subHeading1={data.subHeading1}
                subHeading2={data.subHeading2}
                reverse={true}
              />
            );
          })}
        </div>
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

export default About;
