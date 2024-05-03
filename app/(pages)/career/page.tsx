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
import Button from "@/components/Button";
import QAndA from "@/components/case-study/QandA";

export default async function Page() {
  const careers = (await client.fetch(`*[_type == "careers"]{
    ...,
    testimonials {
      ...,
      testimonials {
        ...,
        media {asset->{url}}
      }[]
    }
  }[0]`)) as Careers;
  const jobOpenings = (await client.fetch(
    `*[_type == "jobOpening"][0] {
      ...
    }`
  )) as JobOpening[];
  console.log(jobOpenings);
  return (
    <>
      <Container>
        <div className="mt-20">
          <h1 className="text-light-red tracking-widest leading-6 md:text-md lg:text-md mb-6 text-sm font-semibold ">
            {careers?.header?.topText}
          </h1>
          <div className="h-auto">
            <p className="md:text-5xl h-auto leading-10 tracking-wider font-medium text-3xl font-tertiary mt-4 text-dark-red w-auto md:w-[800px]">
              {careers?.header?.title}
            </p>
            <p className="mt-6">{careers.description}</p>
          </div>
          <Button
            props={{
              text: careers?.cta?.heading,
              path: careers?.cta?.button?.path,
            }}
          />
        </div>
      </Container>
      <Gallery images={careers.images} />
      <Growth testimonials={careers.testimonials} />
      <Cultivating heroSection={careers.heroSection} />
      <Mission missionValues={careers.missionValues} />
      <Whoare whoWeAre={careers.whoWeAre} />
      <Howcare benefits={careers.benefits} />
      <Picture />
      <Opening jobOpeningsSection={careers.jobOpeningsSection} />
      {/* <Faq faqs={careers.faqs} /> */}
      <QAndA data={careers.faqs} />
    </>
  );
}
