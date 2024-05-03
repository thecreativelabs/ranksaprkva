import Cards from "@components/case-study/cards";
import { IoMdArrowForward } from "react-icons/io";
import { CaseStudy } from "@/types/sanity";
import { CaseStudyWithReferences } from "@/(pages)/case-study/page";
import Button from "@/components/Button";
export default function FeatureCard(data?: CaseStudyWithReferences) {
  return (
    <div className="flex flex-col justify-between">
      <Cards
        className="h-[256px] rounded-3xl"
        image={data?.headerImage}
        awards={data?.awards}
        awardClass="top-[-35px] right-[-20px]"
      />
      <div>
        <p className="text-dark-red text-xl font-bold font-primary w-[100%] pt-4">
          {data?.pageMeta?.description}
        </p>
        <Button props={{ text: "READ CASE STUDY" }} className="!mt-4 mx-auto" />
      </div>
    </div>
  );
}
