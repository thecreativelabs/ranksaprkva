import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import Container from "./Container";

const data = {
  heading: "Experience the difference of a values-driven search strategy.",
  discription: "Discover how organic search visibility and a made-to-measure SEO agency partnership can benefit your business in the long run.",
  text: " GET YOUR CUSTOM STRATEGY"
};

const Strategy = () => {
  return (
    <div
      className="mt-20 relative"
      style={{
        backgroundImage:
          "url(https://victorious.com/wp-content/uploads/2023/08/cta-bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Container>
        <div className="w-auto h-auto flex justify-center items-center">
          <img
            src="https://cdn.shortpixel.ai/spai/q_glossy+w_1425+to_auto+ret_img/victorious.com/wp-content/uploads/2023/11/bigcta.jpg"
            alt=""
            className="h-auto md:max-w-full w-[100%]"
          />
        </div>
        <div className="grid ml-0 mt-14">
          <h2 className="md:text-5xl tracking-wider leading-8 font-tertiary w-auto md:w-[60%] font-medium mt-4 text-3xl text-[#3B0D17]">
            {data.heading}
          </h2>
          <p className="mt-4 text-md text-[#3B0D17] w-auto md:w-[60%] leading-7 tracking-wider font-medium font-primary">
            {data.discription}
          </p>
          <div className="mt-14 flex items-center mb-8">
            <p className="mr-2 font-semibold text-md text-[#C42A1C]">
             {data.text}
            </p>
            <FaCircleArrowRight className="text-[#C42A1C]/70" size={40} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Strategy;
