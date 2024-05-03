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
      className={`${className} flex flex-col justify-center relative items-center bg-cover bg-violetExtraLight rounded-3xl`}
    >
      <div className="flex justify-center items-center">
        <p className={`font-bold text-xxxl font-primary text-dark-red}`}>
          {stat}
        </p>
      </div>
      <p
        className={`text-sm ml-[8px]  font-primary font-normal tracking-wider text-dark-red}`}
      >
        {context}
      </p>
    </div>
  );
}
