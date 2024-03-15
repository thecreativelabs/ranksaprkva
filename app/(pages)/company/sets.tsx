import React from "react";
import Container from "@/components/Container";

const data = {
  heading: "WHAT SETS US APART",
  subheading: "At Victorious, we're deliberate in every aspect of our culture.",
  description: [
    {
      para: "At the heart of our business is an inherent belief that if we work together, treat one another with respect, and act in the best interest of our customers and team, we’ll succeed at being the best search agency in the world.",
    },
    {
      para: "Victorious is made up of talented, driven, and compassionate people. We empower them to deliver thoughtful search strategies without micromanagement or policy overkill.",
    },
    {
      para: "Our culture is definitive and is the consistent through-line in everything we do. It’s the foundation of our collaborative partnerships and the key to our success and yours.",
    },
  ],
};

const Sets = () => {
  return (
    <Container>
      <div className="mt-20">
        <h1 className="text-[#C42A1C] tracking-widest leading-6 md:text-md lg:text-md mb-6 text-sm font-semibold ">
          {data.heading}
        </h1>
        <div className="h-auto">
          <p className="md:text-5xl h-auto leading-10 tracking-wider font-medium text-3xl font-tertiary mt-4 text-[#3B0D17] w-auto md:w-[68%]">
            {data.subheading}
          </p>
          <div className="md:mt-8 mt-4 flex flex-wrap gap-3">
            {data.description.map((item, index) => (
              <p key={index} className="md:mt-6 mt-2 tracking-wider md:ml-8 ml-0 text-md md:text-md w-auto md:w-[45%]">
                {item.para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Sets;
