'use client'
// import { reactive } from "@astrojs/reactivity";
import { useState, useEffect } from "react";
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
      image: "./methods/01-predictable.webp",
      testimonial: {
        text: "“The collaborative strategy we’ve developed with Victorious has shown consistent increases month over month.”",
        author: "Steve Barth, Director of Marketing at Global Basecamps",
      },
    },
    {
      name: "Repeatable",
      heading: "Systemized plans that flex to fit your needs.​",
      content:
        "SEO solutions should fit you, not the other way around. Victorious campaigns use proven and repeatable strategies that deliver sustainable gains while flexing to your needs for a bespoke experiences.",
      image: "./methods/02-repeatable.webp",
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
      image: "./methods/03-dependable.webp",
      testimonial: {
        text: "“Choosing to work with Victorious is hands down one of the best business investment decisions I have ever made.”",
        author: "Adnan, Owner at Ojivape",
      },
    },
  ],
};
let selectedIndex = 0;

export default function InnovativeSection() {

  const [buttonIndex, setButtonIndex] = useState(0)


  return (
    <div
      class="h-[120vh] flex flex-col justify-center items-center w-full bg-white">
      <div class="w-[73%] flex flex-col justify-center items-center">
        <p class="text-center text-xxxl w-[100%] font-normal font-Amiri">
          {data.heading}
        </p>
        <p
          class="text-[17.5px] font-DM-sans w-[60%] mt-[10px] text-[#3B0D17] font-normal tracking-wider space-x-5 leading-[30px]">
          {data.content}
        </p>
        <hr class="text-black mt-[100px] w-full border border-dashed" />
        <div class="w-full relative h-full">
          <div class="absolute gap-[30px] inset-0 flex justify-center items-center">
            {
              data.cards.map((card, i) => {
                return (
                  <button
                    key={i}
                    class=" w-[150px]   h-[60px] border-black border-2" style={{ backgroundColor: (i === buttonIndex) ? "#8AC7C7" : '#fff' }} onClick={() => setButtonIndex(i)} >
                    {card.name}
                  </button>
                );
              })
            }
          </div>
        </div>
        <div class="w-full mt-[50px] justify-center items-center">



          {
            data.cards.map((card, i) => {
              return (
                <div
                  key={i}

                  class={(i == buttonIndex) ? `w-[100%] justify-evenly items-center mt-[20px] flex` : `w-[100%] justify-evenly items-center mt-[20px] hidden`}>
                  <img
                    id={`rotatingImage3`}
                    src={card.image}
                    class="imagee h-[320px] rotatingImage w-[320px] "
                  />
                  <div class="w-[60%] flex flex-col space-y-4 ">
                    <p class="text-[#E55447] text-xl font-bold">{card.heading} </p>
                    <p class="text-lg leading-[29px]  font-normal tracking-wide space-y-2">
                      {card.content}{" "}
                    </p>
                    <div class=" space-y-[6px] mt-[25px] border-l-2 border-[#E55447] pl-4">
                      <p class="text-base leading-[24px] font-bold tracking-wide w-[67%] text-[#3B0D17]">
                        {card.testimonial.text}
                      </p>

                      <p class="text-base leading-[24px] font-normal tracking-wide w-[100%] text-[#000]">
                        {card.testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>

    </div>
  )
}


