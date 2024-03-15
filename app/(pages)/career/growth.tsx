import React from "react";
import Container from "@/components/Container";
import { MdPlayCircle } from "react-icons/md";

const data = {
  heading: "THE HEART OF IT ALL",
  subheading: "What it’s like to work at Victorious.",
  description:
    "Hear first-hand what it’s like to work at a company that values autonomy, trust, and personal growth above everything else.",
  intro: [
    {
      name: "LILLIAN WATKINS",
      title: "Senior Customer Success Manager",
      image:
        "https://cdn.shortpixel.ai/spai/q_glossy+w_334+to_auto+ret_img/victorious.com/wp-content/uploads/2023/10/lillian-watkins-video-testimonial-cover.jpg",
      icon: "https://victorious.com/wp-content/uploads/2023/08/icon-play.svg"
    },
    {
      name: "JACK WHITE",
      title: "SEO Team Lead",
      image:"https://cdn.shortpixel.ai/spai/q_glossy+w_334+to_auto+ret_img/victorious.com/wp-content/uploads/2023/10/jack-white-testimonial-2.jpg",
      icon: "https://victorious.com/wp-content/uploads/2023/08/icon-play.svg"  
    },
    {
      name: "AUBRIE LANKFORD",
      title: "Sales Operation Specialist",
      image: "https://cdn.shortpixel.ai/spai/q_glossy+w_334+to_auto+ret_img/victorious.com/wp-content/uploads/2023/10/aubrie-lankford-testimonial-2.jpg",
      icon: "https://victorious.com/wp-content/uploads/2023/08/icon-play.svg"
    },
    {
      name: "KEVIN WALLNER",
      title: "Product Manager",
      image: "https://cdn.shortpixel.ai/spai/q_glossy+w_334+to_auto+ret_img/victorious.com/wp-content/uploads/2023/10/kevin-wallner-testimonial-cover-copy.jpg",
      icon: "https://victorious.com/wp-content/uploads/2023/08/icon-play.svg"
    },
  ],
};

const growth = () => {
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
      <div className="mt-20 flex flex-wrap gap-6 justify-center items-center">
        {data.intro.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mb-8"
          >
            <div className="relative">
              <img src={item.image} alt={item.name} />
              <div className="absolute top-1/2 left-1/2 hover:opacity-70 cursor-pointer transform -translate-x-1/2 -translate-y-1/2">
                <img
                  src={item.icon}
                  alt=""
                />
              </div>
            </div>
            <div className="text-left w-full mt-6">
              <h2 className="text-lg tracking-widest mb-2 text-[#3B0D17] text-left font-semibold">
                {item.name}
              </h2>
              <p className="text-left text-sm tracking-wider">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default growth;
