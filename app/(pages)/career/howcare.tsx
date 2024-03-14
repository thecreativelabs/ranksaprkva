import React from "react";
import Container from "@/components/Container";

const data = {
  heading: "How we take care of you.",
  faqs: [
    {
      question: "401(k) Employer Match",
      answer:
        "Want to plan for the future? We help by matching a portion of your contributions.",
    },
    {
      question: "Health Benefits",
      answer:
        "Company-sponsored plans are available to you and your dependents.",
    },
    {
      question:
        "Unlimited PTO",
      answer:
        "We offer unlimited Paid Time Off for vacations and time to recharge!",
    },
    {
      question: "Fully Remote",
      answer:
        "Shortest. Commute. Ever. From PST to EST, work wherever you want.",
    },
    {
      question: "Charitable Matching",
      answer:
        "We match up to $500 of your yearly donations to participating organizations.",
    },
  ],
};

const howcare = () => {
  return (
    <Container>
      <div className="grid mb-20 md:grid-cols-2 gap-x-8">
        <div className="mt-20">
          <h1 className="text-3xl font-tertiary leading-8 text-[#3B0D17] md:text-5xl font-medium font-serif w-auto md:w-[350px] tracking-wide md:tracking-wide">
            {data.heading}
          </h1>
        </div>
        <div className="mt-20 grid gap-x-12 divide-neutral-200 w-full">
          {data?.faqs?.map((item, index) => (
            <div key={index}>
              <div className="mx-auto bg-black h-[1px] w-full"></div>
              <div className="py-8 border-b">
                <summary className="flex text-xl md:text-3xl font-semibold tracking-wide justify-between items-center font-sans list-none text-[#3B0D17]">
                  <span>{item.question}</span>
                </summary>
                <p
                  className="text-[#3B0D17] mt-3 group-open:animate-fadeIn"
                  style={{ transition: "transform 1s ease-in-out" }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default howcare;
