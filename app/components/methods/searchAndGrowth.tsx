"use client";
import Growth from "@components/ui/icons/Growth";
import Task from "@components/ui/icons/taskList";
import Search from "@components/ui/icons/search";
import SearchCards from "./searchCards";
import Container from "../Container";
import { MethodPage } from "@/types/sanity";

export default function SearchAndGrowth({
  section1: data,
}: {
  section1: MethodPage["section1"];
}): JSX.Element {
  return (
    <Container>
      <div className="relative py-[120px] h-fit  flex flex-col bg-white justify-center items-center">
        <div className="sm:absolute relative top-[-100px] flex flex-col items-center justify-center rounded h-[180px] sm:h-[250px] bg gradient-with-image ">
          <div className="w-[90%] min-w-3xl h-[80%] sm:h-full gap-[20px] flex flex-col justify-center">
            <p className="text-white text-[20px] sm:text-[28.40px] font-DM-sans font-bold sm:w-[60%] w-[80%] leading-6 sm:leading-10">
              {data?.ctoCard?.text}
            </p>
            <button className="w-[260px] h-[50px] sm:h-[61px] relative bg-amber-400 rounded text-center text-dark-red text-sm font-bold font-DM-Sans uppercase leading-[21px] tracking-widest">
              {data?.ctoCard?.cta?.heading}
            </button>
          </div>
        </div>
        <div className="w-[90%]  sm:p-0 p-4 mt-[-15%] sm:mt-[15%]">
          <p className="sm:text-xxl text-lg font-medium tracking-wide w-[100%]">
            {data?.heading}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 mt-[50px] relative gap-[20px]">
            {data?.featureCards?.map((e, i) => (
              <SearchCards
                key={i}
                {...{
                  title: e.title!,
                  description: e.description!,
                  icon: e.icon!,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
