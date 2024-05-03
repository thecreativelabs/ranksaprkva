import CircleArrow from "@components/ui/icons/circleButtonArrow";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import Container from "../Container";
import { MethodPage } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";
import Button from "../Button";

export default function Banner({
  data,
}: {
  data?: MethodPage["awardsSection"];
}) {
  return (
    <div className="w-full md:py-[80px] sm:py-[40px] py-[20px]  h-fit flex flex-col justify-center items-center bg-violetExtraLight">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-[10px] gap-[5px]">
          {data?.awards?.map((logo, i) => (
            <img
              key={i}
              src={urlForImage(logo.image)}
              height={1000}
              width={1000}
              className="sm:h-[170px] sm:w-[170px] h-[90px] w-[90px]"
              alt={`logo-${i}`}
            />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="sm:text-xxxl text-xxl text-center text-black font-Amiri">
            {data?.heading}
          </p>
          <Button props={data?.cta?.button} />
        </div>
      </Container>
    </div>
  );
}
