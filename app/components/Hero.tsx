import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Button from "./Button";
import Container from "./Container";

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
    <div className="bg-graybg relative">
      <Container>
        <div className="overflow-hidden flex flex-wrap">
          <div className="xs:pt-4 sm:pt-4 md:mt-4 mb-2 flex flex-col items-left md:items-start">
            <h1 className="z-10 max-w-4xl tracking-wide mt-6 text-3xl md:text-4xl lg:text-6xl xl:text-8xl md:text-left text-left lg:text-left text-dark-red font-tertiary">
              {data.title}
            </h1>
            <p className="text-md md:max-w-xl mt-8 md:text-left text-left text-black ">
              {data.description}
            </p>
            <Button props={data.button} />
          </div>
          <div className="z-0 w-full md:w-[560px] mt-10 md:flex flex flex-col pl-8 md:p-8 text-center">
            <img
              src={data.mainImage.asset.url}
              className="md:h-[80vh] block md:absolute right-0 top-0"
              alt={data.mainImage.asset.alt || ""}
            />
            <svg
              className="absolute md:block hidden -top-1/2 right-[18rem] translate-x-1/2 -z-10 translate-y-24"
              width="957"
              height="1353"
              viewBox="0 0 957 1353"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_154_629)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M223.061 703.79L812.762 1111.19C812.762 1111.19 858.897 1145.57 931.251 1140.49C1003.6 1135.4 1469.74 1122.89 1469.74 1122.89C1469.74 1122.89 1507.74 1115.66 1474.1 1087.69C1440.47 1059.71 1031.24 674.49 1031.24 674.49C1031.24 674.49 919.866 577.536 1001.98 467.967L1214.16 234.993C1214.16 234.993 1202.98 206.304 1164.36 213.018L638.585 233.467C638.585 233.467 600.579 228.787 563.996 271.516C527.413 314.245 240.641 637.764 240.641 637.764C240.641 637.764 190.339 673.371 223.061 703.79Z"
                  fill="#7B4EE7"
                  fill-opacity="0.5"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_154_629"
                  x="0.100006"
                  y="0.100006"
                  width="1699.8"
                  height="1352.8"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="105.95"
                    result="effect1_foregroundBlur_154_629"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="md:py-16 w-full"></div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
