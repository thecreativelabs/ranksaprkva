import React from "react";
import Container from "@/components/Container";

import Sets from "./sets";
import Team from "./team";
import Story from "./story";
import Growth from "./growth";
import Feedback from "./feedback";
import Stats from "./stats";
import Gallery from "./gallery";
import Strategy from "@/components/Strategy";
import { client } from "@sanity/lib/client";
import { About } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";

const data = {
  heading: "PEOPLE-POWERED INNOVATION",
  subheading: "Dependable search strategies that deliver.",
  description:
    "Victorious is a values-driven search agency dedicated to empowering our customers with search-first marketing services.",
  image: "https://victorious.com/wp-content/uploads/2023/12/company-hero.jpg",
  title: "picture",
};

export default async function Page() {
  const data = (await client.fetch(`*[_type == "about"][0]{
    ...,
    featuredCaseStudy {
      ...,
      caseStudy->{
          ...,
          awards[]->
        }
    }
  }`)) as About;

  return (
    <>
      <Container>
        <div className="mt-20">
          <h1 className="text-[#C42A1C] tracking-widest leading-6 md:text-md lg:text-md mb-6 text-sm font-semibold ">
            {data.header?.topText}
          </h1>
          <div className="h-auto">
            <p className="md:text-5xl h-auto leading-10 tracking-wide font-medium text-3xl font-tertiary mt-4 text-[#3B0D17] w-auto md:w-[70%]">
              {data.header?.title}
            </p>
            <p className="mt-8 tracking-wider text-md md:text-md w-auto md:w-[60%]">
              {data.description}
            </p>
          </div>
        </div>
        <div className="w-auto h-auto flex mt-10 md:mt-16 justify-center items-center">
          {data.heroImage && (
            <img
              src={urlForImage(data.heroImage)}
              alt={data.heroImage?.alt}
              width={1230}
              height={900}
            />
          )}
        </div>
      </Container>

      <Sets />
      <Team />
      <Story />
      <Growth />
      <Feedback />
      <Stats />
      {/* <Gallery /> */}
      <Strategy />
    </>
  );
}
