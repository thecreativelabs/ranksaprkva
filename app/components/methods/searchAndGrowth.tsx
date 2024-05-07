"use client";
import Growth from "@components/ui/icons/Growth";
import Task from "@components/ui/icons/taskList";
import Search from "@components/ui/icons/search";
import SearchCards from "./searchCards";
import Container from "../Container";
import { MethodPage } from "@/types/sanity";
import Banner from "../whoWeServe/Individual/Banner";
import Button from "../Button";
import Image from "next/image";
import { urlForImage } from "@sanity/lib/image";

export default function SearchAndGrowth({
  section1: data,
}: {
  section1: MethodPage["section1"];
}): JSX.Element {
  return (
    <Container>
      <div className="relative h-fit flex flex-col bg-white justify-center items-center">
        <div className="bg-violetExtraLight rounded-[3rem] overflow-hidden relative px-[20px] sm:px-[70px] sm:py-[50px] pt-[20px] bg-[url(/whoWeServe/vector.svg)] bg-contain bg-no-repeat bg-right shadow-[0_0_25px_0px] shadow-violetLight">
          <p className=" sm:text-xxxl leading-[25px] text-xxl w-[100%] md:w-[55%] font-normal font-Amiri">
            {data?.ctoCard?.text}
          </p>
          <Button props={data?.ctoCard?.cta?.button} />
          <Image
            src={urlForImage(data?.ctoCard?.image) || ""}
            className="translate-x-8 md:translate-x-0 md:absolute bottom-0 right-0"
            height={550}
            width={550}
            alt={data?.ctoCard?.image?.alt || ""}
          />
        </div>

        <div className="sm:p-0 p-4 my-[15%]">
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
