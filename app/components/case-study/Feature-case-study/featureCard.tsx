import Cards from "@components/case-study/cards";
import { IoMdArrowForward } from "react-icons/io";
import { CaseStudy } from "@/types/sanity";
import { CaseStudyWithReferences } from "@/(pages)/case-study/page";
export default function FeatureCard(data?: CaseStudyWithReferences) {
  return (
    <div className="flex flex-col justify-between">
      <Cards
        className="h-[256px]"
        image={data?.headerImage}
        awards={data?.awards}
        awardClass="top-[-35px] right-[-20px]"
      />
      <div>
        <p className="text-dark-red text-xl font-bold font-primary w-[100%]">
          {data?.pageMeta?.description}
        </p>
        <div className="text-sm justify-start w-[100%] font-bold mt-[12px]  uppercase flex tracking-widest gap-[15px] items-center text-light-red">
          READ CASE STUDY
          <button
            type="button"
            title="arrow"
            className="w-[38px] flex justify-center items-center h-[38px] rounded-[50%] bg-light-red hover:bg-black"
          >
            <IoMdArrowForward className="text-white h-[25px] w-[25px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
