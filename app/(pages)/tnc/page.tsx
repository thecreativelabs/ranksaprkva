import React from "react";
import Container from "@/components/Container";

const data = {
  heading: "VICTORIOUS",
  subheading: "Terms and Conditions",
  description:
    "All content on www.victorious.com, including but not limited to text, APIs, graphics, photographs.",
};

const page = () => {
  return (
    <Container>
      <div className="mt-20">
        <h1 className="text-[#C42A1C] uppercase text-center tracking-widest leading-6 md:text-md lg:text-md mb-6 text-sm font-semibold ">
          {data.heading}
        </h1>
        <div className="h-auto w-auto pb-12">
          <p className="md:text-5xl text-center h-auto leading-10 tracking-wide font-medium text-3xl font-tertiary mt-4 text-[#3B0D17]">
            {data.subheading}
          </p>
          <div className="mx-auto my-10 bg-slate-300 h-[1px] w-full"></div>
          <p className="mt-8 tracking-wider text-center text-md md:text-md w-auto">
            {data.description}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default page;
