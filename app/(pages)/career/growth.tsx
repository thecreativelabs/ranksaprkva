"use client";

import React, { useState, useRef } from "react";
import Container from "@/components/Container";
import { MdPlayCircle } from "react-icons/md";
import { Careers } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";
import testimonials from "@sanity/schemas/testimonials";

const Growth = ({ testimonials: data }: Pick<Careers, "testimonials">) => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
                className="rounded-3xl overflow-hidden"
              >
                {/* @ts-ignore */}
                <source src={item.media?.asset?.url} />
              </video>
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
