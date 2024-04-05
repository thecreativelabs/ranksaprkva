import Container from "@/components/Container";
import LeftContent from "./leftContent";
import RightContent from "./rightContent";
import Feature_case_Study from "../Feature-case-study/feature";
import Findout from "./findout";

export default function ContentSection() {
  return (
    <div className="border-b-[1px] border-[#a8a8a8] ">
      <Container>
        <div className="flex  lg:flex-row flex-col-reverse justify-center  py-[60px] mt-[90px] gap-[30px] ">
          <LeftContent />
          <RightContent />
        </div>
      </Container>
    </div>
  );
}
