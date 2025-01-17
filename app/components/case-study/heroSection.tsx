"use client";
import { CaseStudyLandingWithReferences } from "@/(pages)/case-study/page";
import { CaseStudyLanding, WhoWeServe } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";
import Image from "next/image";

export default function HeroSection(data: CaseStudyLandingWithReferences) {
  return (
    <div className="w-full md:py-[80px] sm:py-[60px] py-[30px] flex flex-col justify-center items-center">
      <div className="w-[80%] max-w-[1200px] gap-[25px] flex flex-col justify-evenly">
        <p className="text-light-red text-sm font-bold font-primary uppercase leading-[21px] tracking-widest pb-4">
          {data.header?.topText}
        </p>
        <p className="w-[70%] text-dark-red text-3xl lg:text-xxxxxl font-normal font-Amiri leading-[30px] sm:leading-[67.34px]">
          {data.header?.title}
        </p>
        <p className="sm:w-[55%] w-full text-dark-red sm:mt-[-10px] text-base lg:text-[18px] font-normal font-primary leading-[20px] sm:leading-[29.70px]">
          {data.description}
        </p>
        {data.tagline && (
          <p className="text-md lg:text-2xl font-bold tracking-wide mt-[10px] w-full">
            {data.tagline}
          </p>
        )}
        <div className="sm:w-[60%] w-[100%] grid sm:grid-cols-4 grid-cols-4 gap-[10px]">
          {data.featuredAwards?.map((award, i) => (
            <Image
              key={i}
              width={170}
              height={170}
              src={urlForImage(award.image) || ""}
              alt={award.image?.alt || ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
