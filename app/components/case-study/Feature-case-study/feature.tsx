"use client";
import { CaseStudyLandingWithReferences } from "@/(pages)/case-study/page";
import FeatureCard from "./featureCard";

export default function Feature_case_Study(
  data: CaseStudyLandingWithReferences
) {
  return (
    <div className="w-full py-[100px] bg-graybg flex justify-center items-center">
      <div className="w-[80%] max-w-[1200px] h-[70%]">
        <p className="text-dark-red text-2xl lg:text-[37.30px] font-normal font-Amiri tracking-wide leading-[67.34px]">
          {data?.featuredCaseStudiesSection?.heading}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.featuredCaseStudiesSection?.featuredCaseStudies?.map(
            (card, i) => <FeatureCard key={i} {...card} />
          )}
        </div>
      </div>
    </div>
  );
}
