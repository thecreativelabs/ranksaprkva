import React from "react";
import Container from "@/components/Container";
import Arrow from "@/components/ui/icons/Arrow";
import { Careers } from "@/types/sanity";
import { PortableText } from "@/components/PortableText";

// const data = {
//   heading:
//     "Your questions, answered.",
//   faqs: [
//     {
//       question: "When will I hear back after applying?",
//       answer:
//         "You’ll receive a confirmation email once we have received your application. A member of our Talent Team will reach out if your experience is a good match for our needs.",
//     },
//     {
//       question: "Do you provide feedback to applicants who were not selected?",
//       answer:
//         "We do give objective feedback when we are able, but unfortunately, we cannot provide specific, customized feedback for every candidate.",
//     },
//     {
//       question: "Do you offer internships or entry-level positions for recent graduates?",
//       answer:
//         "We hire for a variety of experience levels and have also had many successful internship placements through US-based university partnerships. Please keep an eye on our career page for openings.",
//     },
//     {
//       question: "What is the typical recruitment process at Victorious?",
//       answer:
//         "Your first-round conversation will be via a phone call (typically 30 – 45 minutes) with a member of our Talent Team. Round two is a 30 – 45 minute video interview with the hiring manager. Rounds three and beyond will vary depending on the role, but we always have 2 – 4 other panel members who will conduct video interviews. Depending on the role, you may also have a technical assessment or a presentation exercise to the interview panel, which you’ll receive advance notice and a detailed prompt to prepare for.",
//     },
//     {
//       question:
//         "Can I apply for multiple positions simultaneously?",
//       answer:
//         "Yes, you can apply to as many openings as you feel your skills and experience align.",
//     },
//     {
//       question: "Can I apply for a job if I am an international candidate or require a work visa?",
//       answer:
//         "We are open to applicants across the United States. While we are interested in every qualified candidate who is eligible to work in the US, we are unfortunately not able to sponsor visas.",
//     },
//   ],
// };


const faq = ({faqs: data}: Pick<Careers,"faqs">) => {
  return (
    <Container>
      <div className="grid mb-20 md:grid-cols-2 gap-x-8">
        <div className="mt-20">
          <h1 className="text-2xl font-tertiary leading-8 text-dark-red md:text-4xl font-medium tracking-wide md:tracking-wide">
            {data?.title}
          </h1>
        </div>
        <div className="mt-20 grid gap-x-12 divide-neutral-200 w-full">
          {data?.faqs?.map((item, index) => (
            <div key={index}>
              {/* <div className="mx-auto bg-black h-[1px] w-full"></div> */}
              <div className="py-5 border-b">
                <details
                  className="group"
                  open
                  style={{ transition: "height 1s ease-in-out" }}
                >
                  <summary className="flex text-xl font-semibold justify-between items-center font-sans cursor-pointer list-none text-[#e66262] hover:text-[#e66262]">
                    <span>{item?.question}</span>
                    <span className="transition group-open:rotate-180 text-[#e66262]">
                      <Arrow />
                    </span>
                  </summary>
                  <div
                    className="text-dark-red mt-3 group-open:animate-fadeIn"
                    style={{ transition: "transform 1s ease-in-out" }}
                  >
                    <PortableText value={item?.answer} />
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default faq;
