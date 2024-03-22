import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import Container from "./Container";
import { PortableText } from "./PortableText";

const feature = [
  {
    heading: "Get clear-cut results from a SEO company you can count on.",
    subheading:
      "Flexible, full-funnel services that transform your organic traffic into tangible returns.",
    description:
      "Our proven, repeatable methodology frees us up to cultivate a meaningful relationship with you. Our SEO marketing company functions as an extension of your team and leans into your niche to translate our SEO know-how into a focused strategy unique to your business.",
    text: "EXPLORE OUR METHOD",
    path: "/",
  },
];

const Features = ({
  data,
}: {
  data: {
    heading: string;
    description: string;
    stats: { title: string; image: { asset: { url: string; alt: string } } }[];
    button: { text: string; path: string };
    image: { asset: { url: string; alt: string | null } };
  };
}) => {
  return (
    <Container>
      <div className="mt-24">
        <div className="grid md:grid-cols-2 py-10">
          <div className="ml-5 mr-5 grid place-items-center">
            <div className="max-w-lg">
              <h3 className="md:text-4xl text-2xl font-tertiary tracking-wide text-[#3B0D17] font-medium mt-2 ">
                {data.heading}
              </h3>
              <PortableText value={data.description} />
              <div className="mt-10 flex items-center mb-8 text-red-600 hover:text-red-600/60  cursor-pointer">
                <a href={data.button.path} className="flex items-center">
                  <p className="mr-2 font-sans font-semibold text-red-600tracking-wide">
                    {data.button.text}
                  </p>
                  <FaCircleArrowRight className="" size={35} />
                </a>
              </div>
            </div>
          </div>
          <div className="grid ml-5 mr-5 items-center mb-2">
            <img
              src={data.image.asset.url}
              alt={data.image.asset.alt || ""}
              loading="lazy"
              className={`md:h-[28rem] max-w-full w-auto rounded-3xl `}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Features;
