'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "../Container";


const data = {
  heading: "Discover SEO that doesn't settle.",
  content:
    "At the heart of everything we do is a commitment to empower one another and our customers. We’re dedicated to developing innovative solutions, offering cutting-edge services that deliver exceptional results.",
  cards: [
    {
      name: "Predictable",
      heading: "Singular focus on one goal at a time.",
      content:
        "The difference between questionable and clear-cut results? A relentless pursuit of progress. From keyword research to backlink earning, every aspect of your strategy centers on achieving your goals with predictable success.",
      image: "/methods/01-predictable.webp",
      testimonial: {
        text:
          "“The collaborative strategy we’ve developed with Victorious has shown consistent increases month over month.”",
        author: "Steve Barth, Director of Marketing at Global Basecamps",
      },
    },
    {
      name: "Repeatable",
      heading: "Systemized plans that flex to fit your needs.​",
      content:
        "SEO solutions should fit you, not the other way around. Victorious campaigns use proven and repeatable strategies that deliver sustainable gains while flexing to your needs for a bespoke experiences.",
      image: "/methods/02-repeatable.webp",
      testimonial: {
        text: "“Their systematic SEO workflow is state-of-the-art.”",
        author: "Steve Barth, Director of Marketing at Global Basecamps",
      },
    },
    {
      name: "Dependable",
      heading: "Diversified services rooted in innovation.​",
      content:
        "Delivered with data and designed for results, we take search updates to our own SEO strategy learning lab — developing dependable solutions that support rank retention and recovery.",
      image: "/methods/03-dependable.webp",
      testimonial: {
        text:
          "“Choosing to work with Victorious is hands down one of the best business investment decisions I have ever made.”",
        author: "Adnan, Owner at Ojivape",
      },
    },
  ],
};

export default function InnovativeSection() {
  const [buttonIndex, setButtonIndex] = useState<number>(0);

  return (
    <Container>
      <div className="md:py-[120px] sm:py-[80px] py-[40px] h-fit flex  flex-col justify-center items-center w-full bg-white">
        <div className="w-[95%] flex flex-col justify-center items-center">
          <p className="text-center sm:text-xxxl text-xxl w-[100%] font-normal font-Amiri">
            {data.heading}
          </p>
          <p className="sm:text-[17.5px] font-DM-sans sm:w-[60%] w-[100%] mt-[10px] text-dark-red font-normal tracking-wider space-x-5 sm:leading-[30px] text-[12px] leading-[17px]">
            {data.content}
          </p>
          <hr className="text-black mt-[100px] w-full border border-dashed" />
          <div className="w-full relative h-full">
            <div className="absolute gap-[30px] inset-0 flex  justify-center items-center">
              {data.cards.map((card, i) => (
                <button
                  type='button' title='button'
                  key={i}
                  className="sm:w-[150px] w-[150px] h-[40px] sm:h-[60px]  border-black border-2"
                  style={{
                    backgroundColor:
                      i === buttonIndex ? "#8AC7C7" : "#fff",
                  }}
                  onClick={() => setButtonIndex(i)}
                >
                  {card.name}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full mt-[50px] justify-center items-center">
            {data.cards.map((card, i) => (
              <div
                key={i}
                className={`${i === buttonIndex ? "flex" : "hidden"
                  } w-[100%] justify-evenly items-center mt-[20px] sm:flex-row flex-col flex`}
              >
                <Image alt="img"
                  id={`rotatingImage3`}
                  src={card.image}
                  height={150}
                  width={150}
                  className="imagee sm:h-[320px] h-[250px] rotatingImage sm:w-[320px] w-[250px]" />

                <div className="sm:w-[60%] w-[100%] flex flex-col space-y-4 ">
                  <p className="text-light-pink sm:text-xl text-lg font-bold">
                    {card.heading}
                  </p>
                  <p className="sm:text-lg sm:leading-[29px]  text-sm leading-[20px] font-normal tracking-wide space-y-2">
                    {card.content}
                  </p>
                  <div className="space-y-[6px] mt-[25px] border-l-2 border-light-pink pl-4">
                    <p className="text-base leading-[24px] font-bold tracking-wide w-[67%] text-dark-red">
                      {card.testimonial.text}
                    </p>
                    <p className="text-base leading-[24px] font-normal tracking-wide w-[100%] text-[#000]">
                      {card.testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
