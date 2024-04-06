import Growth from "@components/ui/icons/Growth";
import bgimg from "@/assets/methods/Group 1.png";
import Image from "next/image";
import Container from "../Container";
import { MethodPage } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";

export default function ContentAndServices({
  section3: data,
}: {
  section3: MethodPage["section3"];
}) {
  return (
    <Container>
      <div className="md:py-[120px] sm:py-[80px] py-[40px] h-fit w-full flex flex-col gap-[30px] justify-center items-center">
        <p className="text-light-red text-sm font-medium font-primary uppercase mb-[5px] leading-[21px] tracking-widest">
          {data?.header?.topText}
        </p>
        <p className="text-center text-dark-red text-xxl sm:text-xxxl sm:w-[60%] w-[90%] font-normal font-Amiri">
          {data?.header?.title}
        </p>
        <div className="w-[90%] grid grid-cols-1 sm:grid-cols-3 gap-[25px]">
          {data?.featureCards?.map((card, i) => (
            <div
              key={i}
              className="bg-graybg px-4 flex justify-center items-center min-h-[290px] max-h-[500px]"
            >
              <div className="flex flex-col h-full w-[90%] justify-evenly items-start">
                <div className="bg-white h-fit w-fit p-2 rounded-[50%]">
                  <Growth className="p-1" />
                </div>
                <p className="text-xl mt-[-15px] font-bold tracking-wider">
                  {card?.title}
                </p>
                <p className="text-[16px] mt-[-20px] w-[95%] font-normal font-primary leading-[26px]">
                  {card?.description}
                </p>
                <button className="text-base font-bold text-light-pink">
                  {card?.cta?.heading}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[90%] sm:mt-[50px] mt-[10px] max-h-fit">
          <img src={urlForImage(data?.mainImage)} />
        </div>
      </div>
    </Container>
  );
}
