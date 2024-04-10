"use client";
import Cards from "@components/case-study/cards";
import { useState } from "react";
import Nextbutton from "@components/methods/Nextbutton";
import Prevbutton from "@components/methods/PrevButton";
import Link from "next/link";
import { client } from "@sanity/lib/client";
import { CaseStudy, Award } from "@/types/sanity";
import { CaseStudyWithReferences } from "@/(pages)/case-study/page";

export default function SeoCases({
  heading,
  caseStudies,
}: {
  heading?: string;
  caseStudies?: CaseStudyWithReferences[];
}) {
  const [page, setPage] = useState<number>(0);
  const pageSize: number = 16;
  const size = caseStudies ? caseStudies.length : 0;
  const lastPage: number = Math.ceil(size / pageSize);
  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, lastPage - 1));
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full relative min-h-fit max-w-[1200px] lg:w-[75%] flex justify-center items-center flex-col">
        <div className="w-full flex m justify-center items-center mt-[70px]">
          <p className="text-dark-red w-[80%] lg:w-[unset] text-[27.30px] lg:text-[46px] font-normal font-Amiri tracking-wide leading-[35px] sm:leading-[67.34px]">
            {heading}
          </p>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[25px] mt-[50px] lg:mt-[70px] sm:mb-[0px] mb-[0px] gap-y-[70px]">
          {caseStudies
            ?.slice(page * pageSize, (page + 1) * pageSize)
            .map((card, index) => (
              <div key={index} className="space-y-[12px]">
                <Link
                  href={`/case-study/${card.pageMeta?.slug?.current}`}
                  className="text-dark-red text-xl lg:text-[2xl] font-bold font-primary w-[100%]"
                >
                  <Cards
                    className="h-[256px]"
                    image={card.headerImage}
                    awards={card.awards}
                    awardClass="top-[-35px] right-[-20px]"
                  />
                  <p className="font-primary text-sm lg:text-base font-normal">
                    {card.pageMeta?.name}
                  </p>
                  {card.pageMeta?.description}
                </Link>
              </div>
            ))}
        </div>
        <div className="grid grid-cols-4 absolute bottom-[-50px] gap-[10px] ml-[20px] justify-center items-center mt-[50px]">
          <div className="hover:cursor-pointer" onClick={handlePrevPage}>
            {page > 0 && (
              <Prevbutton
                for="button"
                color="#ccc"
                className="h-[15px] lg:h-[20px] font-bold text-blue-300"
              />
            )}
          </div>
          <button className="font-bold text-[black]">{page + 1}</button>
          <button
            onClick={handleNextPage}
            className="text-[#CCC] ml-[-10px] font-bold hover:text-[black]"
          >
            {page < lastPage - 1 && page + 2}
          </button>
          <div className="hover:cursor-pointer" onClick={handleNextPage}>
            {page < lastPage - 1 && (
              <Nextbutton
                for="button"
                color="#ccc"
                className="h-[15px] lg:h-[20px] text-blue-300 font-bold hover:text-black"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
