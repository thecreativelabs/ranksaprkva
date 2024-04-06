"use client";
import CircleArrow from "@components/ui/icons/circleButtonArrow";
import Image from "next/image";
import Container from "../Container";
import { MethodPage } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";

export default function Results({
  section6: data,
}: {
  section6: MethodPage["section6"];
}) {
  return (
    <div
      className="py- h-fit w-full sm:pb-[50px] pb-0 sm:mt-[40px] mt-[0px] bg-cover bg-no-repeat flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('./methods/cta-bg.png')",
        backgroundPositionY: "200px",
      }}
    >
      <Container>
        <div className="w-[100%] mt-[80px] h-[100%]">
          <img
            src={urlForImage(data?.mainImage)}
            className="w-[100%] max-h-fit"
            height={1000}
            width={1000}
            alt="Result"
          />
          <p className="text-[50px] mt-[50px] leading-[50px] font-Amiri font-normal text-dark-red">
            {data?.heading}
          </p>
          <p className=" text-dark-red mt-[30px] text-[18px] font-normal font-primary leading-[29.70px]">
            {data?.description}
          </p>
          <button
            type="button"
            title="button"
            className="text-sm font-bold mt-[40px] uppercase flex justify-center tracking-widest gap-[15px] items-center text-light-red"
          >
            {data?.cta?.button?.text}
            <span className="w-[38px] rounded-[50%] bg-light-red hover:bg-white">
              <CircleArrow color="white" />
            </span>
          </button>
        </div>
      </Container>
    </div>
  );
}
