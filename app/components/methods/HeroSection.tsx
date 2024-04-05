"use client";
import Image from "next/image";
import Container from "../Container";
import { MethodPage, Header } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";

export default function Hero({
  header,
  mainImage,
}: {
  header: MethodPage["header"];
  mainImage: MethodPage["mainImage"];
}) {
  return (
    <>
      <style jsx>{`
        .background-overlay::before {
          content: "";
          background-image: url("./methods/Vector.png");
          background-position: 0px 30px;
          opacity: 0.4;
          position: absolute;
          top: 30%;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: 105%;
          background-repeat: no-repeat;
        }
      `}</style>
      <div className="max-h-full  h-fit bg-graybg py-[50px] sm:py-[80px] md:py-[130px] relative w-full">
        <Container>
          <div className="max-h-full h-full w-full bg-contain bg-no-repeat flex gap-[12px] flex-col background-overlay justify-center items-center">
            <p className="h-[21px] text-center text-light-red text-sm font-medium font-DM-sans uppercase leading-[21px] tracking-widest">
              {header?.header?.topText}
            </p>
            <p className="w-[x] text-center text-dark-red text-xxl sm:text-xxxxxl font-normal font-Amiri sm:leading-[67.34px]">
              {header?.header?.title}
            </p>
            <p className="w-[80%] sm:w-[40%] text-center text-dark-red text-xs sm:text-[18px] font-normal font-DM-Sans leading-[17px] sm:leading-[29.70px]">
              {header?.description}
            </p>
            {/* <img src={herosection.image} className="sm:h-[544px] h-[220px] mt-[4%]" /> */}
            <img
              alt="img"
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
