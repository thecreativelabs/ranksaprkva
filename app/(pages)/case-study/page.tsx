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
import { Award, CaseStudyLanding, CaseStudy, Services } from "@/types/sanity";
import Faq from "@/components/Faq";
import { groq } from "next-sanity";
import services from "@sanity/schemas/services";

export type CaseStudyLandingWithReferences = Omit<
  CaseStudyLanding,
  "featuredAwards" | "featuredCaseStudiesSection"
> & {
  featuredAwards?: Award[];
  featuredCaseStudiesSection?: Omit<
    CaseStudyLanding["featuredCaseStudiesSection"],
    "featuredCaseStudies"
  > & {
    heading?: string;
    featuredCaseStudies?: (Omit<CaseStudy, "awards" | "services"> & {
      awards?: Award[];
      servics?: Services[];
    })[];
  };
};

export type CaseStudyWithReferences = Omit<CaseStudy, "awards" | "services"> & {
  awards?: Award[];
  services?: Services[];
};

export default async function Case_study() {
  const data = (await client.fetch(`*[_type == "caseStudyLanding"][0] {
    ...,
    featuredAwards[]->,
    featuredCaseStudiesSection {
      ...,
      featuredCaseStudies[]->{
        ...,
        awards[]->
      }
    }
  }`)) as CaseStudyLandingWithReferences;

  const caseStudies = (await client.fetch(
    `*[_type == "caseStudy"]{
        ...,
        awards[]->,
        services[]->,
    }`
  )) as CaseStudyWithReferences[];
  return (
    <>
      <HeroSection {...data} />
      <FeatureCaseStudy {...data} />
      <SeoCases heading={data.section2?.heading} caseStudies={caseStudies} />
      <Review data={data.section3} reviews={data.section4} />
      <QAndA data={data.faqSection} />
    </>
  );
}
