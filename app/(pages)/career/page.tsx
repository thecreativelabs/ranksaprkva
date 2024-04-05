import React from "react";
import Container from "@/components/Container";
import { GoArrowRight } from "react-icons/go";
import Gallery from "./gallery";
import Growth from "./growth";
import Mission from "./mission";
import Cultivating from "./cultivating";
import Whoare from "./whoare";
import Howcare from "./howcare";
import Picture from "./picture";
import Opening from "./opening";
import Faq from "./faq";
import { client } from "@sanity/lib/client";
import { Careers, JobOpening } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";

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

export default async function Page() {
  const careers = (await client.fetch(`*[_type == "careers"][0]`)) as Careers;
  const jobOpenings = (await client.fetch(
    `*[_type == "jobOpening"][0] {
      ...
    }`
  )) as JobOpening[];
    console.log(jobOpenings)
  return (
    <>
      <Container>
        <div className="mt-20">
          <h1 className="text-[#C42A1C] tracking-widest leading-6 md:text-md lg:text-md mb-6 text-sm font-semibold ">
            {careers?.header?.topText}
          </h1>
          <div className="h-auto">
            <p className="md:text-5xl h-auto leading-10 tracking-wider font-medium text-3xl font-tertiary mt-4 text-dark-red w-auto md:w-[800px]">
              {careers?.header?.title}
              <img
                src="https://cdn.shortpixel.ai/spai/q_glossy+w_226+to_auto+ret_img/victorious.com/wp-content/uploads/2023/10/image-12.png"
                alt=""
                className="w-auto mr-0 h-auto md:flex-row md:ml-[480px] md:w-[180px] md:h-[80px] md:-mt-12"
              />
            </p>
            <p className="mt-6">{careers.description}</p>
          </div>
          <button className="bg-darkyellow mt-10 px-4 rounded text-dark-red w-[270px] md:w-auto md:h-14 h-14 md:items-center items-center gap-4 hover:bg-[#c92045] hover:text-white transition-all duration-300 relative md:inline-flex inline-flex justify-center">
            <a
              href={careers?.cta?.button?.path}
              className="flex items-center gap-px md:inline-flex md:items-center md:gap-px"
            >
              <span className="text-md md:py-0 px-2 py-2 font-medium cursor-pointer">
                {careers?.cta?.heading}
              </span>
              <GoArrowRight className="font-bold" size={25} />
            </a>
          </button>
        </div>
      </Container>
      <Gallery images={careers.images} />
      <Growth testimonials={careers.testimonials} />
      <Cultivating heroSection={careers.heroSection}/>
      <Mission missionValues={careers.missionValues}/>
      <Whoare whoWeAre={careers.whoWeAre}/>
      <Howcare benefits={careers.benefits}/>
      <Picture />
      <Opening jobOpeningsSection={careers.jobOpeningsSection} />
      <Faq faqs={careers.faqs} />
    </>
  );
}
