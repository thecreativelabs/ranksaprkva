import { FaArrowUp } from "react-icons/fa6";
import Image from "next/image";
import { CaseStudy } from "@/types/sanity";
export default function SmallCards({
  index,
  className,
  stat,
  context,
}: {
  index: number;
  className?: string;
  stat?: string;
  context?: string;
}) {
  return (
    <div
      className={`${className}   rounded flex flex-col justify-center relative items-center bg-cover bg-${index % 3 === 0 ? "lightblue" : index % 3 === 1 ? "dark-red" : "darkyellow"} `}
      style={{
        backgroundImage: `url('/case-study/bg${index % 3 == 0 ? 2 : index % 3 == 1 ? 3 : 1}.png')`,
        // backgroundColor: props.index % 3 == 0 ? '#DAF4F4' : props.index % 3 == 1 ? '#3B0D17' : '#3B0D17'
      }}
    >
      <div className="flex justify-center items-center">
        <p
          className={`font-bold text-xxxl font-primary text-${index % 3 === 0 ? "dark-red" : index % 3 === 1 ? "lightyellow" : "dark-red"}`}
        >
          {stat}
        </p>
      </div>
      <p
        className={`text-sm ml-[8px]  font-primary font-normal tracking-wider text-${index % 3 === 0 ? "dark-red" : index % 3 === 1 ? "lightyellow" : "dark-red"}`}
      >
        {context}
      </p>
    </div>
  );
}
