import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import Container from "./Container";
import Button from "./Button";

const data = {
  heading: "Experience the difference of a values-driven search strategy.",
  discription:
    "Discover how organic search visibility and a made-to-measure SEO agency partnership can benefit your business in the long run.",
  text: " GET YOUR CUSTOM STRATEGY",
  path: "/",
};

const Strategy = ({
  title,
  description,
  button,
  image,
}: {
  title?: string;
  description?: string;
  button?: { text: string; path: string };
  image?: { asset: { url: string }; alt: string };
}) => {
  return (
    <div
      className="mt-20 relative"
      style={{
        backgroundImage:
          "url(https://victorious.com/wp-content/uploads/2023/08/cta-bg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <div className="w-auto h-auto flex justify-center items-center">
          <img
            src={image?.asset?.url}
            alt={image?.alt}
            className="h-auto md:max-w-full w-[100%]"
          />
        </div>
        <div className="grid ml-0 mt-14">
          <h2 className="md:text-5xl tracking-wider leading-8 font-tertiary w-auto md:w-[60%] font-medium mt-4 text-3xl text-[#3B0D17]">
            {title}
          </h2>
          <p className="mt-4 text-md text-[#3B0D17] w-auto md:w-[60%] leading-7 tracking-wider font-medium font-primary">
            {description}
          </p>
          {button && (
            <div className="my-10">
              <Button props={button} variant="link" />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Strategy;
