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
import ServiceSlider from "@/components/services/slider";

export default async function Page() {
  const data = (await client.fetch(`*[_type == "about"][0]`)) as About;
  if (!data) return <></>;

  return (
    <>
      <Container>
        <div className="mt-20">
          <h1 className="text-light-red tracking-widest leading-6 md:text-md lg:text-md mb-6 text-sm font-semibold ">
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
            <div className="relative">
              <img
                src={urlForImage(data.heroImage)}
                alt={data.heroImage?.alt}
                width={1230}
                height={900}
                className="rounded-[3rem]"
              />
              <svg
                className="absolute -top-20 -right-10 -z-10"
                width="264"
                height="194"
                viewBox="0 0 264 194"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M243.987 65.7804L140.992 6.22579C140.992 6.22579 131.359 -0.955048 116.251 0.107205C101.144 1.16946 3.81375 3.78259 3.81375 3.78259C3.81375 3.78259 -4.12201 5.291 2.90137 11.1334C9.92471 16.9758 95.3727 97.4197 95.3727 97.4197C95.3727 97.4197 118.628 117.666 101.484 140.547L57.1792 189.198C57.1792 189.198 59.5133 195.19 67.5763 193.787L177.361 189.517C177.361 189.517 185.296 190.494 192.935 181.571C200.574 172.649 253.174 115.586 253.174 115.586C253.174 115.586 282.824 85.7234 243.987 65.7804Z"
                  fill="#E5E2F7"
                />
              </svg>
              <svg
                className="absolute -bottom-10 -left-20 -z-10"
                width="264"
                height="194"
                viewBox="0 0 264 194"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.0133 65.7804L123.008 6.22579C123.008 6.22579 132.641 -0.955048 147.749 0.107205C162.856 1.16946 260.186 3.78259 260.186 3.78259C260.186 3.78259 268.122 5.291 261.099 11.1334C254.075 16.9758 168.627 97.4197 168.627 97.4197C168.627 97.4197 145.372 117.666 162.516 140.547L206.821 189.198C206.821 189.198 204.487 195.19 196.424 193.787L86.6393 189.517C86.6393 189.517 78.7035 190.494 71.0648 181.571C63.4261 172.649 10.826 115.586 10.826 115.586C10.826 115.586 -18.8241 85.7234 20.0133 65.7804Z"
                  fill="#E5E2F7"
                />
              </svg>
            </div>
          )}
        </div>
      </Container>

      <Sets setsUsApart={data.setsUsApart} />
      <Team teamSection={data.teamSection} />
      <Story story={data.story} />
      <Growth featureGrid={data.featureGrid} />
      <Feedback testimonials={data.testimonials} />
      <ServiceSlider className="!bg-white" />

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
