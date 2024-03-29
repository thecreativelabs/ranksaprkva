import CardSection from "@components/whoWeServe/CardSection";
import Help from "@/components/Cta";
import Navbar from "@/components/navbar/Navbar";
import Topnav from "@/components/navbar/Topnav";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { client } from "@sanity/lib/client";
import { WhoWeServe } from "@/types/sanity";
import HeroSection from "@components/case-study/heroSection";

export default async function whoWeServe() {
  const data = (await client.fetch(
    `*[_type == "whoWeServe"][0]`
  )) as WhoWeServe;

  return (
    <>
      <div className="md:py-[120px] sm:py-[80px] py-[40px] h-fit  w-full max-h-[600px] flex flex-col justify-center items-center">
        <HeroSection {...data} _type="caseStudyLanding" />
      </div>
      <CardSection />
    </>
  );
}
