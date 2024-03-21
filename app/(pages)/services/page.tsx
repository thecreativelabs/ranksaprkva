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
export default function CaseStudyIndividual() {
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
