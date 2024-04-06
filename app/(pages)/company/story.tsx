import React from "react";
import Container from "@/components/Container";
import { About } from "@/types/sanity";
import { PortableText } from "@/components/PortableText";

const data = {
  heading: "OUR STORY",
  subheading: "The evolution of search excellence.",
  description:
    "Victorious has been focused on the power of search for over a decade.",
};

const Story = ({ story }: Pick<About, "story">) => {
  return (
    <Container>
      <div className="mt-20">
        <h1 className="text-light-red tracking-widest leading-6 md:text-md lg:text-md mb-6 text-sm font-semibold ">
          {story?.header?.topText}
        </h1>
        <div className="h-auto">
          <p className="md:text-5xl h-auto leading-10 tracking-wide font-medium text-3xl font-tertiary mt-4 text-dark-red w-auto md:w-[70%]">
            {story?.header?.title}
          </p>

          <div className="mt-8">
            <PortableText value={story?.body} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Story;
