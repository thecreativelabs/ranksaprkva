import React from "react";
import Container from "@/components/Container";

const items = {
  heading: "Who are we?",
  discription:
    "Our team spans the nation, yet we’ve created an inclusive culture that values people from all walks of life.",
  data: [
    {
      image:
        "https://victorious.com/wp-content/uploads/2023/10/fun-fact-01.webp",
      heading: "01",
      content: "Over half of us are proud pet parents.",
    },
    {
      image:
        "https://victorious.com/wp-content/uploads/2023/10/fun-fact-02.webp",
      heading: "02",
      content: "We have a Slack channel for everything, even Bravo TV.",
    },
    {
      image:
        "https://victorious.com/wp-content/uploads/2023/10/fun-fact-03.webp",
      heading: "03",
      content: "The Victorious team resides across 25 states!",
    },
  ],
};

const WhoAre = () => {
  return (
    <Container>
      <div className="md:w-[100%] w-[90%] mx-auto grid md:grid-cols-2 grid-cols-1 my-20">
        <div className="md:text-4xl w-auto md:w-[55%] text-[#3B0D17] text-2xl font-medium font-tertiary font-manrope md:sticky top-[10vh] left-0 h-min bg-white-text-gradient bg-clip-text backdrop-blur">
          {items.heading}
          <p className="text-lg w-auto text-[#3B0D17] mt-6 tracking-wider">{items.discription}</p>
        </div>
        <div className="flex flex-col w-[100%] md:gap-[20vh] gap-[50px] md:mt-0 mt-14">
          {items.data.map((item, index) => (
            <div key={index}>
              <div className="flex items-center flex-col md:flex-row gap-6 justify-center">
                <div className="md:w-1/2 w-auto">
                  <img src={item.image} alt="" className="h-auto w-auto md:w-full md:h-[500px]"/>
                </div>
                <div className="md:w-1/2 w-auto mt-0 md:mt-[350px]">
                  <div>
                    <h1 className="md:text-3xl text-xl text-red-500 font-bold font-manrope bg-clip-text bg-gradient-linear w-fit">
                      {item.heading}
                    </h1>
                    <p className="md:text-2xl text-lg mt-8 tracking-wider font-medium md:font-semibold md:max-w-[100%] max-w-[90%] text-[#3B0D17]">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WhoAre;
