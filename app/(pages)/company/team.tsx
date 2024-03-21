import React from "react";
import Container from "@/components/Container";
import { GoArrowRight } from "react-icons/go";

const data = [
  {
    heading: "The Pros Behind the Process",
    description:
      "Every Victorious team member has a deep understanding of SEO principles, so everyone you interact with is a subject matter expert.",
    path: "",
    text: "JOIN OUR TEAM",
  },
];

const team = () => {
  return (
    <div className="mt-20 py-16 bg-graybg">
      <Container>
        <div className="h-full py-8">
          <p className="md:text-3xl mt-10 h-auto leading-8 tracking-wider font-semibold text-xl font-primary text-[#3B0D17] w-auto md:w-[800px]">
            {data.map((item, index) => (
              <span key={index}>{item.heading}</span>
            ))}
          </p>
          {data.map((item, index) => (
            <p
              key={index}
              className="mt-6 w-auto h-auto text-[#3B0D17] tracking-wide md:w-[740px]"
            >
              {item.description}
            </p>
          ))}
        </div>
        <div className="bg-[#F0B342] rounded mt-6 text-[#3B0D17] h-auto w-[240px] lg:w-[270px] py-1 px-1 md:w-[250px] md:h-14 md:flex md:items-center items-center gap-4 hover:bg-[#c92045] hover:text-white transition-all duration-300">
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
      </Container>
    </div>
  );
};

export default team;
