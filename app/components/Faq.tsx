"use client";

import React from "react";
import Arrow from "./ui/icons/Arrow";
import Container from "./Container";
import { useState } from "react";
import { PortableText } from "@components/PortableText";

const faq = {
  heading:
    "Have questions about working with an SEO agency? We’ve got answers.",
  faqs: [
    {
      question: "How long does it take for your SEO services to see results?",
      answer:
        "Depending on your industry, site age and competition, It can take anywhere from 3 to 8 months to see results.",
    },
    {
      question: "Does my business need SEO?",
      answer:
        "Yes, your business should be investing in SEO. Search engine optimization offers a way to increase traffic.",
    },
    {
      question: "How much does SEO cost?",
      answer:
        "The cost of SEO services can vary depending on the size and complexity of your website, the amount of required.",
    },
    {
      question: "Why isn't my website ranking on Google?",
      answer:
        "If your website isn’t ranking on Google, there are a few reasons why that could be. But first, head to Google.",
    },
    {
      question:
        "How can I find the keywords that people are searching for to find businesses like mine?",
      answer:
        "You can do this using Google's keyword planner or the flowto keyword magic tool.",
    },
    {
      question: "How much does SEO cost?",
      answer:
        "The cost of SEO services can vary depending on the size and complexity of your website, the amount of required.",
    },
    {
      question: "Why has my organic traffic dropped?",
      answer:
        "You need to determine whether your website's organic traffic has dropped suddenly or gradually over time.",
    },
  ],
};

// const faqs = {
//   heading:
//     "Have questions about working with an SEO agency? We’ve got answers.",
//   faq1: [
//     {
//       question: "How does SEO partnership work?",
//       answer:
//         "At Victorious, we work with you to reach your goals. Our SEO partnership is built on collaboration and transparency. Together, well tailor strategies to fit your unique business needs.",
//       answer1:
//         " We aim to make the SEO process as seamless and effective as possible, ensuring you not only see tangible improvements in your search engine rankings but also in your overall online presence and business growth.",
//     },
//   ],
//   faq2: [
//     {
//       question: "How much should I budget for SEO?",
//       answer:
//         "Victorious specializes in a comprehensive suite of SEO services designed to elevate your online presence and drive tangible business results.",
//       bullet1:
//         "We identify high-value, relevant keywords that align with your business goals and your target audience’s search behavior.",
//       bullet2:
//         "From optimizing metadata and headers to improving website structure and internal linking, our on-page SEO strategies are crafted to enhance your site’s relevance and usability.",
//       bullet3:
//         "Our team produces SEO-friendly content that engages your audience and establishes your brand as an authority in your industry.",
//       bullet4:
//         "Link Building: We’ll help you boost your site’s authority with ethical link-building strategies.",
//       bullet5:
//         "Technical SEO: Our audits will uncover technical issues that could be holding your site back.",
//       bullet6:
//         "Local SEO: Looking to target local customers? Our Google Business Optimization, Local Citation Building, and other local SEO services will help put you on the map",
//     },
//   ],
//   faq3: [
//     {
//       question: "How much does SEO cost?",
//       answer:
//         "Budgeting for SEO allows you to align your investment with your business goals and expected outcomes. However, the ideal budget will vary based on your industry, competition level, current website performance, and desired growth targets.",
//       answer1:
//         "The key to SEO budgeting is not just how much you spend but how effectively you use your budget to meet your specific business objectives. Partnering with a reputable search engine optimization company like Victorious can ensure your budget is maximized for the best possible outcomes. Learn more about how much SEO costs and how to budget for SEO.",
//     },
//   ],
//   faq4: [
//     {
//       question: "How much should I budget for SEO?",
//       answer:
//         "Victorious specializes in a comprehensive suite of SEO services designed to elevate your online presence and drive tangible business results.",
//       answer2:
//         "In addition to their experience and expertise, evaluate the agencies’ commitment to:",
//       answer3:
//         "To better understand how an SEO marketing agency works, check its",
//       bullet1:
//         "Anyone you partner with should be able to clearly describe their methodology and practices.",
//       bullet2:
//         "Ascertain how the company communicates its strategy and recommendations.",
//       bullet3:
//         "Determine the types of reporting you’ll receive and how frequently you’ll be provided with insights into your campaign.",
//       bullet4:
//         " Black-hat tactics can tank your site. Ensure anyone you partner with abides by ethical SEO practices.",
//       bullet5:
//         "Avoid one-size-fits-all approaches. The company should offer customized strategies tailored to your business’s unique needs and goals. They should be flexible in adjusting strategies based on performance and market changes.",
//       bullet6:
//         "Your SEO needs may evolve as your business grows. Choose a company that can scale its services to support your future growth.",
//     },
//   ],
//   faq5: [
//     {
//       question: "How do I choose between SEO companies?",
//       answer1:
//         "At Victorious, we prioritize optimizing for Google, recognizing its dominant market share and pivotal role in shaping online search behavior. This strategic focus is grounded in the understanding that Google’s comprehensive and evolving algorithms set the benchmark for best practices in SEO.",
//         answer2:
//         "Given the overlap in ranking factors across major search engines, our approach not only aims to enhance visibility on the world’s leading search platform but also tends to yield positive outcomes on other search engines.",
//         answer3:
//         "This synergistic effect emerges because fundamental SEO principles — such as producing high-quality content, providing a seamless user experience, and building a technically sound website—are valued universally across search platforms.",
//         answer4:
//         "Our approach allows us to leverage our resources efficiently to achieve maximum visibility for our clients so they benefit from a wide-reaching online presence without the need for search engine-specific optimizations.",
//     },
//   ],
//   faq6: [
//     {
//       question: "Are different strategies needed for different search engines?",
//       answer:
//         "The timeline for seeing tangible results from SEO efforts can vary widely depending on several factors, including the competitiveness of your industry, the current state of your website, and the depth of SEO strategies implemented. Generally, most businesses start to see noticeable improvements in their rankings, traffic, and engagement metrics within three to six months of consistent SEO work.",
//         answer1:
//         "However, SEO is a long-term investment. Initial gains are just the beginning, with the full impact often unfolding over a longer period. Continuous optimization efforts are crucial for sustaining and building on initial successes, adapting to algorithm updates, and staying ahead of competitors. Patience and persistence, combined with a strategic, data-driven approach, are key to unlocking the full potential of SEO for any business.",
//     },
//   ],
// };

function Faq({
  title,
  faqs,
}: {
  title: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}) {
  return (
    <Container>
      <div className="grid mb-20 md:grid-cols-2 gap-x-8">
        <div className="mt-20">
          <h1 className="text-2xl font-tertiary leading-8 text-[#3B0D17] md:text-4xl font-medium font-serif tracking-wide md:tracking-wide">
            {title}
          </h1>
        </div>
        <div className="mt-20 grid gap-x-12 divide-neutral-200 w-full">
          {faqs?.map((item, index) => (
            <div key={index}>
              {/* <div className="mx-auto bg-black h-[1px] w-full"></div> */}
              <div className="py-5 border-b">
                <details
                  className="group"
                  open
                  style={{ transition: "height 1s ease-in-out" }}
                >
                  <summary className="flex text-xl font-semibold justify-between items-center font-sans cursor-pointer list-none text-[#e66262] hover:text-[#e66262]">
                    <span>{item.question}</span>
                    <span className="transition group-open:rotate-180 text-[#e66262]">
                      <Arrow />
                    </span>
                  </summary>
                  {/* <p
                    className="text-[#3B0D17] mt-3 group-open:animate-fadeIn"
                    style={{ transition: "transform 1s ease-in-out" }}
                  >
                    {item.answer}
                  </p> */}
                  <PortableText value={item.answer} />
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Faq;
