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
import { client } from "@sanity/lib/client";
import Faq from "@/components/Faq";

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
          grid[] {title,description,icon},
        },
        bulletList {
          heading,
          description,
          list[],
          image{asset->{url}, alt},
        }[],
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

      {/* TODO: Replace the following 3 with Pricing */}
      <Services />
      <AdditonalService />
      <ServiceSlider />

      <ServiceMarketing data={page.features.bulletList} />
      <ServiceLearn data={page.features.numberList} />
      <ServiceBanner data={page.cta} />
      <Faq {...page.faqs} />
    </>
  );
}
