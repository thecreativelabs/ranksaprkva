"use client";
import Image from "next/image";
import Container from "../Container";
import { MethodPage, Header } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";
import SvgDecorative from "../SvgDecorative";

export default function Hero({
  header,
  mainImage,
}: {
  header: MethodPage["header"];
  mainImage: MethodPage["mainImage"];
}) {
  return (
    <>
      <div className="max-h-full  h-fit bg-white py-[50px] sm:py-[80px] md:py-[130px] relative w-full">
        <Container className="relative">
          <SvgDecorative variant="left" />
          <div className="max-h-full h-full w-full bg-contain bg-no-repeat flex gap-[12px] flex-col justify-center items-center">
            <p className="h-[21px] text-center text-light-red text-sm font-medium font-primary uppercase leading-[21px] tracking-widest">
              {header?.header?.topText}
            </p>
            <p className="w-[x] text-center text-dark-red text-xxl sm:text-xxxxxl font-normal font-Amiri sm:leading-[67.34px]">
              {header?.header?.title}
            </p>
            <p className="w-[80%] sm:w-[40%] text-center text-dark-red text-xs sm:text-[18px] font-normal font-primary leading-[17px] sm:leading-[29.70px]">
              {header?.description}
            </p>
            {/* <img src={herosection.image} className="sm:h-[544px] h-[220px] mt-[4%]" /> */}
            <img
              alt={mainImage?.alt}
              src={urlForImage(mainImage)}
              width={500}
              height={544}
              className="sm:h-[544px] min-w-fit h-[220px] mt-[3%]"
            />
          </div>
        </Container>
      </div>
    </>
  );
}
