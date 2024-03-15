import React from "react";
import Container from "@/components/Container";
import { GoArrowRight } from "react-icons/go";

const data = [
  {
    heading: "LET’S GROW TOGETHER",
    subheading: "Where innovation in search meets a people-first mindset.",
    description:
      "Want to be part of a dynamic, award-winning team? We want to hear from you!",
    path: "",
    text: "VIEW OPEN POSITIONS",
  },
];

const Career = () => {
  return (
    <Container>
      <div className="mt-20">
        <h1 className="text-[#C42A1C] tracking-widest leading-6 md:text-md lg:text-md mb-6 text-sm font-semibold ">
          {data.map((item, index) => (
            <span key={index}>{item.heading}</span>
          ))}
        </h1>
        <div className="h-auto">
          <p className="md:text-5xl h-auto leading-10 tracking-wider font-medium text-3xl font-tertiary mt-4 text-[#3B0D17] w-auto md:w-[800px]">
            {data.map((item, index) => (
              <span key={index}>{item.subheading}</span>
            ))}
            <img
              src="https://cdn.shortpixel.ai/spai/q_glossy+w_226+to_auto+ret_img/victorious.com/wp-content/uploads/2023/10/image-12.png"
              alt=""
              className="w-auto mr-0 h-auto md:flex-row md:ml-[480px] md:w-[180px] md:h-[80px] md:-mt-12"
            />
          </p>
          {data.map((item, index) => (
            <p key={index} className="mt-6">
              {item.description}
            </p>
          ))}
        </div>
        <div className="bg-[#F0B342] mb-20 rounded mt-6 text-[#3B0D17] h-auto w-[240px] lg:w-[270px] py-1 px-1 md:w-[250px] md:h-14 md:flex md:items-center items-center gap-4 hover:bg-[#c92045] hover:text-white transition-all duration-300">
          <button className="relative w-full flex items-center justify-center md:inline-flex group gap-px">
            {data.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="flex items-center gap-px md:inline-flex md:items-center md:gap-px"
              >
                <span className="text-md md:py-0 px-2 py-2 font-medium cursor-pointer">
                  {item.text}
                </span>
                <GoArrowRight className="font-bold" size={25} />
              </a>
            ))}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Career;
