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

export default async function Page() {
  const data = (await client.fetch(`*[_type == "about"][0]`)) as About;
  if (!data) return <></>;

  return (
    <>
      <Container>
        <div className="mt-20">
          <h1 className="text-[#C42A1C] tracking-widest leading-6 md:text-md lg:text-md mb-6 text-sm font-semibold ">
            {data.header?.topText}
          </h1>
          <div className="h-auto">
            <p className="md:text-5xl h-auto leading-10 tracking-wide font-medium text-3xl font-tertiary mt-4 text-dark-red w-auto md:w-[70%]">
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

      <Sets setsUsApart={data.setsUsApart} />
      <Team teamSection={data.teamSection} />
      <Story story={data.story} />
      <Growth featureGrid={data.featureGrid} />
      <Feedback testimonials={data.testimonials} />
      <Stats />
      {/* <Gallery /> */}

      <Strategy
        title={data.customStrategySection?.heading}
        description={data.customStrategySection?.description}
        button={data.customStrategySection?.cta}
        image={{
          asset: {
            url: urlForImage(data.customStrategySection?.image),
          },
          alt: data.customStrategySection?.image?.alt,
        }}
      />
    </>
  );
}
