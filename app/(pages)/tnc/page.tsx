import React from "react";
import Container from "@/components/Container";
import { client } from "@sanity/lib/client";
import { TermsAndConditions } from "@/types/sanity";
import { PortableText } from "@/components/PortableText";

const data = {
  heading: "VICTORIOUS",
  subheading: "Terms and Conditions",
  description:
    "All content on www.victorious.com, including but not limited to text, APIs, graphics, photographs.",
};

export default async function Page() {
  const data = (await client.fetch(
    `*[_type == "termsAndConditions"][0]`
  )) as TermsAndConditions;

  return (
    <Container>
      <div className="mt-20">
        <h1 className="text-[#C42A1C] uppercase text-center tracking-widest leading-6 md:text-md lg:text-md mb-6 text-sm font-semibold ">
          {data.header?.topText}
        </h1>
        <div className="h-auto w-auto pb-12">
          <p className="md:text-5xl text-center h-auto leading-10 tracking-wide font-medium text-3xl font-tertiary mt-4 text-[#3B0D17]">
            {data.header?.title}
          </p>
          <div className="mx-auto my-10 bg-slate-300 h-[1px] w-full"></div>
          <div className="mt-8 flex items-center justify-center">
            <PortableText value={data.content} />
          </div>
        </div>
      </div>
    </Container>
  );
}
