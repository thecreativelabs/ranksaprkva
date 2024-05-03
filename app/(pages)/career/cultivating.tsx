import React from "react";
import Container from "@/components/Container";
import { Careers } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";
import ImageDecorative from "@/components/ImageDecorative";
import ImageDecorativeAsset from "@/components/ImageDecorativeAsset";

const cultivating = ({ heroSection: data }: Pick<Careers, "heroSection">) => {
  return (
    <Container>
      <div className="mt-20 flex justify-center items-center">
        <div className="h-auto text-center">
          <p className="md:text-5xl w-full leading-10 tracking-wide mx-auto font-medium text-3xl font-tertiary mt-4 text-dark-red md:w-[70%]">
            {data?.heading}
          </p>
          <p className="mt-8 tracking-wider text-md w-full md:w-[60%] mx-auto">
            {data?.description}
          </p>
        </div>
      </div>
      <div className="mt-24">
        {data?.cards?.map((feature, index) => (
          <div key={index} className="grid md:grid-cols-2 py-10">
            {/* Image div */}
            <div
              className={`grid mt-10 place-items-center ${
                index % 2 === 1 ? "" : "md:order-2"
              }`}
            >
              <ImageDecorativeAsset asset={feature.image} />
            </div>
            {/* Text div */}
            <div className="grid place-items-center">
              <div className="max-w-lg">
                <h3 className="md:text-3xl text-xl text-dark-red tracking-wider md:tracking-normal font-serif font-semibold md:font-semibold mt-4">
                  {feature?.heading}
                </h3>
                <p className="mt-4 text-dark-red tracking-wider">
                  {feature?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default cultivating;
