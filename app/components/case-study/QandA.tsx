"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CaseStudyLanding } from "@/types/sanity";
import { PortableText } from "../PortableText";

const QAndA = ({ data }: { data: CaseStudyLanding["faqSection"] }) => {
  const size = data?.faqs ? data?.faqs.length : 0;
  const initialArray = Array(size).fill(false);
  const [open, setOpen] = useState<boolean[]>(initialArray);
  const setElement = (index: number, value: boolean) => {
    if (index >= 0 && index < size) {
      setOpen((prevArray) => {
        const newArray = [...prevArray];
        newArray[index] = value;
        return newArray;
      });
    } else {
      console.log("Index out of bounds");
    }
  };

  return (
    <div className="flex justify-center  pt-[120px] pb-[60px] items-center">
      <div className="lg:w-[100%] max-w-[1200px] w-full flex sm:flex-row flex-col justify-between">
        <p className="text-dark-red sm:w-[45%] w-[90%] text-xxxl lg:text-xxxl font-normal font-Amiri leading-[32px] lg:leading-relaxed">
          {data?.title}
        </p>
        <div className="sm:w-[45%]   w-[100%] sm:items-start items-center sm:mt-[0px] mt-[20px] justify-center flex flex-col ">
          {data?.faqs?.map((card, i) => (
            <div key={i} className="w-[100%] border-t-[1px] border-black py-4">
              <div className="relative w-full flex justify-between items-center">
                <button
                  className="text-xl text-left w-[80%] hover:text-light-pink hover:cursor-pointer font-primary font-bold"
                  style={{ color: open[i] ? "#895BF7" : "" }}
                  onClick={() => setElement(i, !open[i])}
                >
                  {card.question}
                </button>
                <IoIosArrowDown
                  className={
                    open[i]
                      ? "text-light-pink h-[25px] w-[25px] hover:cursor-pointer rotate-[180deg] "
                      : "text-light-pink w-[25px] h-[25px] hover:cursor-pointer  rotate-[0deg]"
                  }
                  onClick={() => setElement(i, !open[i])}
                />
              </div>
              <div
                className={` overflow-hidden `}
                style={{
                  maxHeight: open[i] ? "1000px" : "0px",
                  transition: "max-height 0.5s ease-in-out",
                }}
              >
                <div>
                  <PortableText value={card.answer} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QAndA;
