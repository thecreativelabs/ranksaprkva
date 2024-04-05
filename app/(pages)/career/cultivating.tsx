import React from "react";
import Container from "@/components/Container";
import { Careers } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";

// const data = {
//   heading: "Cultivating careers. Crafting success.",
//   description:
//     "At Victorious, you’re not just another cog in the machine. Because our best work is done together, you’re vital to our success — and we want you to feel like it.",
//   features: [
//     {
//       heading: "A Commitment to Excellence",
//       description:
//         "We believe in building an environment of autonomy and trust because the best motivation is your own drive to succeed.",
//       image:
//         "https://cdn.shortpixel.ai/spai/q_glossy+w_644+to_auto+ret_img/victorious.com/wp-content/uploads/2023/10/Image1.webp",
//     },
//     {
//       heading: "The Freedom of Flexibility",
//       description:
//         "Victorious employees are encouraged to find a healthy work-life balance with unlimited time off and a scheduled winter break for some much-needed R&R.",
//       image:
//         "https://cdn.shortpixel.ai/spai/q_glossy+w_644+to_auto+ret_img/victorious.com/wp-content/uploads/2023/10/Image2.webp",
//     },
//     {
//       heading: "Growth Opportunities",
//       description:
//         "Learn new skills, attend professional events, connect with mentors, collaborate with cross-functional teams, and follow your passions for personal fulfillment.",
//       image: "https://victorious.com/wp-content/uploads/2023/10/Image3.webp",
//     },
//   ],
// };

const cultivating = ({ heroSection: data }: Pick<Careers, "heroSection">) => {
  return (
    <Container>
      <div className="mt-20 flex justify-center items-center">
        <div className="h-auto text-center">
          <p className="md:text-5xl w-full leading-10 tracking-wide mx-auto font-medium text-3xl font-tertiary mt-4 text-dark-red md:w-[70%]">
            {data?.heading}
          </p>
          <p className="mt-8 tracking-wider text-md w-full md:w-[60%] mx-auto">
            {data?.description}
          </p>
        </div>
      </div>
      <div className="mt-24">
        {data?.cards?.map((feature, index) => (
          <div key={index} className="grid md:grid-cols-2 py-10">    
            {/* Image div */}
            <div
              className={`grid mt-10 place-items-center ${
                index % 2 === 1 ? "" : "md:order-2"
              }`}
            >
              <img
                src={urlForImage(feature?.image)}
                alt=""
                loading="lazy"
                className="max-w-full w-auto md:max-w-lg h-auto"
              />
            </div>
            {/* Text div */}
            <div className="grid place-items-center">
              <div className="max-w-lg">
                <h3 className="md:text-3xl text-xl text-dark-red tracking-wider md:tracking-normal font-serif font-semibold md:font-semibold mt-4">
                  {feature?.heading}
                </h3>
                <p className="mt-4 text-dark-red tracking-wider">
                  {feature?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default cultivating;
