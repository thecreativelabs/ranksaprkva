import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import Container from "./Container";

const feature = [
  {
    heading: "Get clear-cut results from a SEO company you can count on.",
    subheading:
      "Flexible, full-funnel services that transform your organic traffic into tangible returns.",
    description:
      "Our proven, repeatable methodology frees us up to cultivate a meaningful relationship with you. Our SEO marketing company functions as an extension of your team and leans into your niche to translate our SEO know-how into a focused strategy unique to your business.",
  },
];

const Features = () => {
  return (
    <Container>
      <div className="mt-24">
        <div className="grid md:grid-cols-2 py-10">
          <div className="ml-5 mr-5 grid place-items-center">
            <div className="max-w-lg">
              <h3 className="md:text-4xl text-2xl font-tertiary tracking-wide text-[#3B0D17] font-medium mt-2 ">
                {feature[0].heading}
              </h3>
              <h3 className="mt-4 text-[#3B0D17] md:text-xl tracking-wide font-semibold text-md [text-wrap:balance]">
                {feature[0].subheading}
              </h3>
              <p className="mt-4 text-[#3B0D17] leading-7 tracking-wide">
                {feature[0].description}
              </p>
              <div className="mt-10 flex items-center mb-8">
                <p className="mr-2 font-sans font-semibold text-red-600 tracking-wide">
                  EXPLORE OUR METHOD
                </p>
                <FaCircleArrowRight className="text-red-600" size={35} />
              </div>
            </div>
          </div>
          <div className="grid ml-5 mr-5 items-center mb-2">
            <img
              src="https://cdn.shortpixel.ai/spai/q_glossy+w_677+to_auto+ret_img/victorious.com/wp-content/uploads/2023/12/strategic-framework-1.png"
              alt="image"
              loading="lazy"
              className={`md:h-[28rem] max-w-full w-auto rounded-3xl `}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Features;
