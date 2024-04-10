import Image from "next/image";
import Cards from "@components/case-study/cards";
import Container from "@/components/Container";
import { Award, CaseStudy } from "@/types/sanity";

export default function CaseStudyIndividualBanner({
  image,
  awards,
}: {
  image: CaseStudy["headerImage"];
  awards?: Award[];
}) {
  return (
    <Container>
      <Cards
        className="h-[256px]"
        image={image}
        awards={awards}
        awardClass="bottom-[-65px] h-[150px] w-[150px] left-[-5px]"
      />
      <div></div>
    </Container>
  );
}
