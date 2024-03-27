import HeroSection from "@components/case-study/heroSection";
import FeatureCaseStudy from "@components/case-study/Feature-case-study/feature";
import SeoCases from "@components/case-study/SeoCases";
import Review from "@components/case-study/Review";
import QAndA from "@components/case-study/QandA";
import Help from "@/components/Cta";
import Navbar from "@/components/navbar/Navbar";
import Topnav from "@/components/navbar/Topnav";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { client } from "@sanity/lib/client";
import { CaseStudyLanding } from "@/types/sanity";

export default async function Case_study() {
  const data = (await client.fetch(`*[_type == "caseStudyLanding"][0] {
    ...,
    featuredAwards[]->,
    featuredCaseStudiesSection {
      ...,
      featuredCaseStudies[] {
        ...,
        caseStudy->{
          ...,
          awards[]->
        }
      }
    }
  }`)) as CaseStudyLanding;

  return (
    <>
      <HeroSection />
      <FeatureCaseStudy />
      <SeoCases />
      <Review />
      <QAndA />
    </>
  );
}
