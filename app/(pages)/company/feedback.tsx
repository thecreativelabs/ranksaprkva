import React from "react";
import Container from "@/components/Container";

const data = {
  heading: "Real companies. Real gains.",
  item: [
    {
      name: "ALEX BARADI",
      title: "President, Exceptional Villas",
      description:
        "We started working with Victorious SEO a number of months ago and already we have seen massive improvements in our SEO. The team we have been working with have been fantastic. We are very happy with everything thus far and look forward to working with Victorious going forward.",
      avatar: "A",
    },
    {
      name: "CHRIS BENEDICT",
      title: "Founder, Felix Gray",
      description:
        "Victorious has been with us every step of the way. At the start of work, we were ranking for 200 – mostly branded – keywords. Now, we rank for 2,400 keywords, with over 250 non-branded page-one results. We estimate ROI is over 10 to 1 – I can’t say enough about this team.",
      avatar: "C",
    },
    {
      name: "EMILY PITITTO",
      title: "UMarketing Coordinator, Eden Health",
      description:
        "Since implementing the SEO efforts, we are ranking on the 1st page for several keywords, we’ve acquired feature snippets, and our site traffic is steadily growing. It’s so exciting to see how far we’ve come when [presented] our YoY performance!",
      avatar: "E",
    },
    {
      name: "ANONYMOUS",
      title: "Director of Digital Marketing, Sporting goods company",
      description:
        "Within six months, Victorious pushed numerous keywords up to the top five search positions, drawing in qualified site traffic. This resulted in a 40% increase in leads to e-commerce partners as well as a 60% uptick in leads for local dealers.",
      avatar: "A",
    },
    {
      name: "MICHAEL COHEN",
      title: "Digital Marketing Manager, ServiceMax",
      description:
        "Since bringing Victorious on board, we’ve seen a 106% increase in overall ranking keywords since the beginning of our partnership. Targeted landing pages saw an average growth of 171% year-over-year during the first year of partnership…Additionally, trust flow increased from 27 to 37 during the first year of link building.",
      avatar: "M",
    },
    {
      name: "DAVE MCVEIGH",
      title: "VP of Marketing, Tivian",
      description:
        "We were in a very complex situation amidst an acquisition between two companies that had been around for a while. Still, Victorious has been able to come up with a strategy to streamline the new company and get the most out of the pre-existing SEO rankings.",
      avatar: "D",
    },
  ],
};

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-500"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Feedback = () => {
  return (
    <Container>
      <h2 className="md:text-5xl text-center h-auto leading-10 tracking-wider font-medium text-3xl font-tertiary mt-14 text-[#3B0D17] w-auto md:w-auto">
        {data.heading}
      </h2>
      <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-0">
        {data.item.map((item, index) => (
          <div
            key={index}
            className="max-w-[26rem] border border-slate-200 px-4 bg-white md:h-auto w-auto h-auto md:w-[360px] flex flex-col gap-0 md:gap-4 mb-0 md:mb-6 items-start group rounded transition-all md:px-8 py-6"
          >
            <div className="mx-0 flex items-center gap-4 pt-0 pb-2">
              <div className="rounded-full flex justify-center items-center bg-[#FFDBAC] w-[40px] h-[40px]">
                <span className="text-center font-tertiary text-lg">
                  {item.avatar}
                </span>
              </div>
              <div className="flex w-auto text-[#3B0D17] flex-col">
                <p className="tracking-widest mb-2 font-semibold w-[200px] text-sm ">
                  {item.name}
                </p>
                <p className="blue-gray w-[200px] font-normal text-xs">
                  {item.title}
                </p>
              </div>
            </div>
            <div className="flex items-center md:mt-0 mt-2 gap-2">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} />
              ))}
            </div>
            <div className="mb-6 mt-4 md:mt-0 text-[#3B0D17] p-0 tracking-wider leading-6 text-sm md:text-md">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Feedback;
