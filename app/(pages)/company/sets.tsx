import React from "react";
import Container from "@/components/Container";
import { About, BlockContent, Header } from "@/types/sanity";
import { PortableText } from "@/components/PortableText";

const Sets = ({ setsUsApart: data }: Pick<About, "setsUsApart">) => {
  return (
    <Container>
      <div className="mt-20">
        <h1 className="text-light-red tracking-widest leading-6 md:text-md lg:text-md mb-6 text-sm font-semibold ">
          {data?.header?.topText}
        </h1>
        <div className="h-auto">
          <p className="md:text-5xl h-auto leading-10 tracking-wider font-medium text-3xl font-tertiary mt-4 text-dark-red w-auto md:w-[68%]">
            {data?.header?.title}
          </p>
          <div className="md:mt-8 mt-4 flex flex-wrap gap-3">
            <PortableText value={data?.body} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Sets;
