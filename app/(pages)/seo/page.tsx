import Brands from "@/components/Brands";
import CalInline from "@/components/CalInline";
import Container from "@/components/Container";
import AdditonalService from "@/components/services/additionalServicec";
import ServiceSlider from "@/components/services/slider";

export default async function CaseStudyIndividual({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <>
      <Container>
        <div className="mt-20 max-h-full h-full w-full bg-contain bg-no-repeat flex gap-[12px] flex-col justify-center items-center">
          <p className="h-[21px] text-center text-light-red text-sm font-medium font-primary uppercase leading-[21px] tracking-widest">
            {"GET A FREE SEO CONSULTATION"}
          </p>
          <p className="w-[x] text-center text-dark-red text-xxl sm:text-xxxxxl font-normal font-Amiri sm:leading-[67.34px]">
            {"Unlock your true search potential."}
          </p>
          <p className="w-[80%] sm:w-[60%] text-center text-dark-red text-xs sm:text-[18px] font-normal font-primary leading-[17px] sm:leading-[29.70px]">
            {
              "Transform your online presence, outshine your competitors, and drive more traffic, leads, and sales with sustainable SEO services from the best search engine optimization company. "
            }
          </p>
        </div>
        <div className="mt-12">
          <CalInline />
        </div>
        <Brands />
      </Container>
      <div className="bg-violetExtraLight rounded-[3rem] mt-12 py-6 md:py-16">
        <AdditonalService />
      </div>
      <ServiceSlider className="!bg-white" />
    </>
  );
}
