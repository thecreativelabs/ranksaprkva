import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const header = [
  {
    title: "Search-first strategies with transformative results.",
    description:
      "Discover how our award-winning SEO agency can boost your brand’s search visibility and make every click count.",
  },
  {
    path: " ",
    text: "START RANKING TODAY",
  },
];

const Hero = ({
  data,
}: {
  data: {
    title: string;
    description: string;
    mainImage: { asset: { url: string; alt: string } };
    secondaryImage: { asset: { url: string; alt: string } };
    button: { text: string; path: string };
  };
}) => {
  return (
    <div className="relative flex flex-wrap justify-center bg-graybg">
      <div className="relative ml-[20px] w-auto text-left md:w-auto lg:w-[500px] xs:pt-4 sm:pt-4 md:mt-4 mb-2 flex flex-col items-left md:items-start md:text-left">
        <h1 className="w-auto md:w-auto z-10 tracking-wide mt-6 text-3xl md:text-4xl lg:text-6xl xl:text-8xl md:text-left text-left lg:text-left text-[#3B0D17] font-tertiary">
          {header[0].title}
        </h1>
        <p className="text-md w-[250px] md:w-[80%] mt-8 md:text-left text-left text-black ">
          {header[0].description}
        </p>
        <button className="bg-[#F0B342] mt-10 text-[#3B0D17] w-[270px] md:w-auto md:h-14 h-14 md:items-center items-center gap-4 hover:bg-[#c92045] hover:text-white transition-all duration-300 relative md:inline-flex inline-flex justify-center">
          <a
            href={header[1].path}
            className="inline-flex ml-3 items-center gap-px md:inline-flex md:items-center md:gap-px"
          >
            <span className="text-lg md:mt-0 font-medium cursor-pointer">
              {header[1].text}
            </span>
            <GoArrowRight
              className="ml-1 font-bold md:mt-0 mr-2"
              size={25}
            />
          </a>
        </button>
      </div>
      <div className="w-full md:w-[560px] mt-10 md:flex flex flex-col p-4 md:p-8 text-center">
        <div className="relative">
          <img
            src="https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_auto/victorious.com/wp-content/uploads/2023/12/home-hero-image.webp"
            className="w-full h-[300px] md:h-[550px] object-cover"
            alt="decorative element"
          />
          <div className="absolute h-[80px] md:h-[100px] max-w-fit w-[100px] top-[220px] right-[-18px] md:w-[220px] md:top-[390px] md:right-[-75px]">
            <img
              src="https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_auto/victorious.com/wp-content/uploads/2023/12/home-hero-badge.webp"
              alt="Your Alt Text"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto my-10 bg-[#e55447] h-[4px] w-full"></div>
    </div>
  );
};

export default Hero;
