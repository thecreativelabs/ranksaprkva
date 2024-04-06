import Banner from "@/components/methods/banner";
import Companies from "@/components/methods/Companies";
import Hero from "@/components/methods/HeroSection";
import ContentAndServices from "@/components/methods/ContentServices";
import InnovativeSection from "@/components/methods/InnovativeSEOSection";
import Results from "@/components/methods/Results";
import SearchAndGrowth from "@/components/methods/searchAndGrowth";
import Framework from "@/components/methods/seo/framework";
import Help from "@/components/Cta";
import Cta from "@/components/Cta";
import { client } from "@sanity/lib/client";
import { MethodPage } from "@/types/sanity";

export default async function Methods() {
  const data = (await client.fetch(`*[_type == "methodPage"][0] {
    ...,
    section5 {
      ...,
      logo->,
      caseStudiesCarousel[] {
        ...,
        caseStudy->{
          ...,
          awards[]->
        }
      }
    }
  }`)) as MethodPage;
  return (
    <>
      <Hero header={data.header} mainImage={data.mainImage} />
      <SearchAndGrowth section1={data.section1} />
      <Framework section2={data.section2} />
      <ContentAndServices section3={data.section3} />
      <Banner data={data.awardsSection} />
      <InnovativeSection section4={data.section4} />
      <Companies section5={data.section5} />
      <Results section6={data.section6} />
    </>
  );
}
