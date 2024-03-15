import React from "react";
import Container from "@/components/Container";

const data = {
  heading: "PEOPLE-POWERED INNOVATION",
  subheading: "Dependable search strategies that deliver.",
  description: "Victorious is a values-driven search agency dedicated to empowering our customers with search-first marketing services.",
  image: "https://victorious.com/wp-content/uploads/2023/12/company-hero.jpg",
  title: "picture"
};

const page = () => {
  return (
    <Container>
      <div className="mt-20">
        <h1 className="text-[#C42A1C] tracking-widest leading-6 md:text-md lg:text-md mb-6 text-sm font-semibold ">
          {data.heading}
        </h1>
        <div className="h-auto">
          <p className="md:text-5xl h-auto leading-10 tracking-wide font-medium text-3xl font-tertiary mt-4 text-[#3B0D17] w-auto md:w-[70%]">
            {data.subheading}
          </p>
          <p className="mt-8 tracking-wider text-md md:text-md w-auto md:w-[60%]">
            {data.description}
          </p>
        </div>
      </div>
      <div className="w-auto h-auto flex mt-10 md:mt-16 justify-center items-center">
        <img src={data.image} alt={data.title} width={1230} height={900} />
      </div>
    </Container>
  );
};

export default page;
