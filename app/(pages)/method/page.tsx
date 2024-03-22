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
export default function Methods() {
  return (
    <>
      <Hero />
      <SearchAndGrowth />
      <Framework />
      <ContentAndServices />
      <Banner />
      <InnovativeSection />
      <Companies />
      <Results />
    </>
  );
}

// <Layout>
//   <HeroSection />
//   <Growthh />
//   <Framework />
//   <ContentService />
//   <Banner />
//   <InnovativeSEOSection />
//   <Companies />
//   <Results />
//   <Help />
// </Layout>
