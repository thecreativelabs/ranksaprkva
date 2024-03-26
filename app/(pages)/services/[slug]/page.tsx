import HeroCaseIndividual from "@/components/services/hero";
import Navbar from "@/components/navbar/Navbar";
import Topnav from "@/components/navbar/Topnav";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Brands from "@/components/Brands";
import CaseStudyConsulting from "@/components/services/consulting";
import Services from "@/components/services/service";
import AdditonalService from "@/components/services/additionalServicec";
import ServiceSlider from "@/components/services/slider";
import ServiceMarketing from "@/components/services/Marketing";
import ServiceLearn from "@/components/services/learn";
import ServiceBanner from "@/components/services/banner";
import ServiceQandA from "@/components/services/QandA";
import { client } from "@sanity/lib/client";

export default async function CaseStudyIndividual({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  console.log(params);
  const page =
    await client.fetch(`*[_type == "services" && slug.current == "${params.slug}" ] {
    ...
  }[0]`);
  console.log(page);
  if (!page) return <></>;
  return (
    <>
      <HeroCaseIndividual />
      <Brands />
      <CaseStudyConsulting />
      <Services />
      <AdditonalService />
      <ServiceSlider />
      <ServiceMarketing />
      <ServiceLearn />
      <ServiceBanner />
      <ServiceQandA />
    </>
  );
}
