import React from "react";
import Navbar from "../components/Navbar";
import Button from "../atoms/Button";
import uk from "../images/uk.svg";
import canada from "../images/canada.svg";
import australia from "../images/australia.svg";
import LocationCard from "../molecules/LocationCard";
import PromoFooter from "../molecules/PromoFooter";
import Footer from "../components/Footer";

const Contact = () => {
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

      <div className="bg-peach  text-white flex flex-col justify-center gap-10  py-20 px-14   md:mx-10 md:rounded-3xl xl:mx-auto   max-w-6xl  xl:flex-row  xl:justify-between xl:space-x-20 xl:items-center">
        {/* contact us */}

        <div className="flex flex-col justify-start text-center md:text-start space-y-8 xl:w-1/2 ">
          <h3 className="font-jost text-3xl md:text-5xl font-medium">
            Contact Us
          </h3>
          <p className="text-base font-normal font-jost">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>

        {/* form */}

        <div className="xl:w-1/2 ">
          <form action="">
            <div className="flex flex-col space-y-10">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent w-full placeholder:text-white border-t-none  border-b-2 border-b-white pb-3 focus:border-t-none focus:outline-none "
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-transparent w-full placeholder:text-white border-t-none  border-b-2 border-b-white pb-3 focus:border-t-none focus:outline-none "
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="Phone"
                  className="bg-transparent w-full placeholder:text-white border-t-none  border-b-2 border-b-white pb-3 focus:border-t-none focus:outline-none "
                />
              </div>

              <div className="w-full">
                <textarea
                  type="text"
                  placeholder="Address"
                  className="bg-transparent w-full placeholder:text-white border-t-none  border-b-2 border-b-white pb-3 focus:border-t-none focus:outline-none "
                />
              </div>

              <div className="flex justify-center items-center md:justify-end md:items-end ">
                <Button
                  bg={"bg-white"}
                  color={"text-darkGrey"}
                  data={"submit"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* display-section */}

      <section
        id="display-section"
        className="max-w-6xl mx-auto mb-60 mt-32  px-6 md:px-0 md:mx-10 xl:px-0 xl:mx-auto  ">
        <div className=" xl:flex xl:flex-row  xl:justify-around xl:items-center  ">
          {locationData.map((card) => {
            return <LocationCard img={card.img} heading={card.heading} />;
          })}
        </div>
      </section>

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

export default Contact;
