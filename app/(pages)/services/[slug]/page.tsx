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
  const page =
    await client.fetch(`*[_type == "services" && slug.current == "${params.slug}" ] {
      header {
        title,
        heading,
        description,
        mainImage {asset->{url}, alt},
        color
      },
      features {
        grid {
          title,
          heading,
          description,        
          grid[] {title,description},
        },
        bulletList {
          heading,
          description,
          list[],
          image{asset->{url}, alt},
        },
        numberList {
          heading,
          description,
          list[] {
            title, description,
          },
        },
      },
      cta {
        heading,
        description,
        button->{text, path},
        image {asset->{url}, alt},
      },
      faqs {
        title,
        faqs[] { question, answer }
      },
    }[0]`);
  // console.log(page);
  if (!page) return <></>;
  return (
    <>
      <HeroCaseIndividual {...page.header} />
      <Brands />
      <CaseStudyConsulting {...page.features.grid} />
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
