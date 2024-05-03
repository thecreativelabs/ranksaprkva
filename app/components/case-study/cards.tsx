import React from "react";
// import Image from "next/image";
import { CaseStudy, Award } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";
const Cards = ({
  className,
  image,
  awards,
  awardClass,
}: {
  className: string;
  image: CaseStudy["headerImage"];
  awards?: Award[];
  awardClass: string;
}) => {
  return (
    <div
      className={`${className} rounded-3xl flex justify-center relative items-center bg-cover `}
      style={{
        backgroundImage: `url(${"/methods/Vector-3.png"})`,
        backgroundColor: image?.color,
      }}
    >
      <img
        src={urlForImage(image)}
        className="h-[100px] p-8"
        alt={image?.alt}
      />
      {/* {

           props.logo && <Image width={1000} height={1000}
                alt='logo'
                src={props.logo}
                className={`absolute h-[100px] w-[100px] ${props.logoclass}`}
            />
           } */}
      {awards?.map((award, i) => (
        <img
          key={i}
          width={1000}
          height={1000}
          alt="logo"
          src={urlForImage(award.image)}
          className={`absolute h-[100px] w-[100px] ${awardClass}`}
        />
      ))}
    </div>
  );
};
export default Cards;
