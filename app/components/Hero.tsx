import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Button from "./Button";

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
          {data.title}
        </h1>
        <p className="text-md w-[250px] md:w-[80%] mt-8 md:text-left text-left text-black ">
          {data.description}
        </p>
        <Button props={data.button} />
      </div>
      <div className="w-full md:w-[560px] mt-10 md:flex flex flex-col p-4 md:p-8 text-center">
        <div className="relative">
          <img
            src={data.mainImage.asset.url}
            className="w-full h-[300px] md:h-[550px] object-cover"
            alt={data.mainImage.asset.alt || ""}
          />
          <div className="absolute h-[80px] md:h-[100px] max-w-fit w-[100px] top-[220px] right-[-18px] md:w-[220px] md:top-[390px] md:right-[-75px]">
            <img
              src={data.secondaryImage.asset.url}
              alt={data.secondaryImage.asset.alt || ""}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto my-10 bg-[#e55447] h-[4px] w-full"></div>
    </div>
  );
};

export default Hero;
