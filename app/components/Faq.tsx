"use client";

import React from "react";
import Arrow from "./ui/icons/Arrow";
import Container from "./Container";
import { useState } from "react";
import { PortableText } from "@components/PortableText";

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
