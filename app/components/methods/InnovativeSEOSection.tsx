"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "../Container";
import { MethodPage } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";

export default function InnovativeSection({
  section4: data,
}: {
  section4: MethodPage["section4"];
}) {
  const [buttonIndex, setButtonIndex] = useState<number>(0);

  return (
    <Container>
      <div className="md:py-[120px] sm:py-[80px] py-[40px] h-fit flex  flex-col justify-center items-center w-full bg-white">
        <div className="w-[95%] flex flex-col justify-center items-center">
          <p className="text-center sm:text-xxxl text-xxl w-[100%] font-normal font-Amiri">
            {data?.heading}
          </p>
          <p className="sm:text-[17.5px] font-primary sm:w-[60%] w-[100%] mt-[10px] text-dark-red font-normal tracking-wider space-x-5 sm:leading-[30px] text-[12px] leading-[17px]">
            {data?.description}
          </p>
          <hr className="text-black mt-[100px] w-full border border-dashed" />
          <div className="w-full relative h-full">
            <div className="absolute gap-[30px] inset-0 flex  justify-center items-center">
              {data?.featureSets?.map((card, i) => (
                <button
                  type="button"
                  title="button"
                  key={i}
                  className="sm:w-[150px] w-[150px] h-[40px] sm:h-[60px]  border-black border-2"
                  style={{
                    backgroundColor: i === buttonIndex ? "#8AC7C7" : "#fff",
                  }}
                  onClick={() => setButtonIndex(i)}
                >
                  {card?.name}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full mt-[50px] justify-center items-center">
            {data?.featureSets?.map((card, i) => (
              <div
                key={i}
                className={`${
                  i === buttonIndex ? "flex" : "hidden"
                } w-[100%] justify-evenly items-center mt-[20px] sm:flex-row flex-col flex`}
              >
                <img
                  alt="img"
                  id={`rotatingImage3`}
                  src={urlForImage(card.image)}
                  height={150}
                  width={150}
                  className="imagee sm:h-[320px] h-[250px] rotatingImage sm:w-[320px] w-[250px]"
                />

                <div className="sm:w-[60%] w-[100%] flex flex-col space-y-4 ">
                  <p className="text-light-pink sm:text-xl text-lg font-bold">
                    {card?.heading}
                  </p>
                  <p className="sm:text-lg sm:leading-[29px]  text-sm leading-[20px] font-normal tracking-wide space-y-2">
                    {card?.description}
                  </p>
                  <div className="space-y-[6px] mt-[25px] border-l-2 border-light-pink pl-4">
                    <p className="text-base leading-[24px] font-bold tracking-wide w-[67%] text-dark-red">
                      {card?.quote?.text}
                    </p>
                    <p className="text-base leading-[24px] font-normal tracking-wide w-[100%] text-[#000]">
                      {card?.quote?.author}
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
