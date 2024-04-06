"use client";

import React, { useState, useRef } from "react";
import Container from "@/components/Container";
import { MdPlayCircle } from "react-icons/md";
import { Careers } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";

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
      icon: "https://victorious.com/wp-content/uploads/2023/08/icon-play.svg",
    },
    {
      name: "JACK WHITE",
      title: "SEO Team Lead",
      image:
        "https://cdn.shortpixel.ai/spai/q_glossy+w_334+to_auto+ret_img/victorious.com/wp-content/uploads/2023/10/jack-white-testimonial-2.jpg",
      icon: "https://victorious.com/wp-content/uploads/2023/08/icon-play.svg",
    },
    {
      name: "AUBRIE LANKFORD",
      title: "Sales Operation Specialist",
      image:
        "https://cdn.shortpixel.ai/spai/q_glossy+w_334+to_auto+ret_img/victorious.com/wp-content/uploads/2023/10/aubrie-lankford-testimonial-2.jpg",
      icon: "https://victorious.com/wp-content/uploads/2023/08/icon-play.svg",
    },
    {
      name: "KEVIN WALLNER",
      title: "Product Manager",
      image:
        "https://cdn.shortpixel.ai/spai/q_glossy+w_334+to_auto+ret_img/victorious.com/wp-content/uploads/2023/10/kevin-wallner-testimonial-cover-copy.jpg",
      icon: "https://victorious.com/wp-content/uploads/2023/08/icon-play.svg",
    },
  ],
};

const Growth = ({ testimonials: data }: Pick<Careers, "testimonials">) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // const handleTogglePlay = () => {
  //   if (videoRef.current) {
  //     if (videoRef.current.paused) {
  //       videoRef.current.play();
  //       setIsPlaying(true);
  //     } else {
  //       videoRef.current.pause();
  //       setIsPlaying(false);
  //     }
  //   }
  // };

  return (
    <Container>
      <div className="mt-20">
        <h1 className="text-light-red tracking-widest leading-6 md:text-md lg:text-md mb-6 text-sm font-semibold ">
          {data?.header?.topText}
        </h1>
        <div className="h-auto">
          <p className="md:text-5xl h-auto leading-10 tracking-wide font-medium text-3xl font-tertiary mt-4 text-dark-red w-auto md:w-[70%]">
            {data?.header?.title}
          </p>
          <p className="mt-8 tracking-wider text-md md:text-md w-auto md:w-[60%]">
            {data?.description}
          </p>
        </div>
      </div>
      <div className="mt-20 flex flex-wrap gap-6 justify-center items-center">
        {data?.testimonials?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mb-8"
          >
            <div className="relative">
              <video
                ref={videoRef}
                width="280"
                height="360"
                poster={urlForImage(item?.posterImage)}
                controls={true}
                // onClick={handleTogglePlay}
              >
                <source src="careers/1.mp4" />
              </video>
              {!isPlaying && (
                <div
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                  // onClick={handleTogglePlay}
                >
                  <img
                    src="https://victorious.com/wp-content/uploads/2023/08/icon-play.svg"
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="text-left w-full mt-6">
              <h2 className="text-lg tracking-widest mb-2 text-dark-red text-left font-semibold">
                {item?.author}
              </h2>
              <p className="text-left text-sm tracking-wider">{item?.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Growth;
