import CaseStudyIndividualBanner from "@/components/case-study/individual/banner";
import ContentSection from "@/components/case-study/individual/contentsection";
import Findout from "@/components/case-study/individual/findout";
import Navbar from "@/components/navbar/Navbar";
import Topnav from "@/components/navbar/Topnav";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import { client } from "@sanity/lib/client";
import { notFound, useParams } from "next/navigation";
import { CaseStudyWithReferences } from "../page";

export default async function CaseStudyIndividual({
  params,
}: {
  params: { individual: string };
}) {
  const slug = params.individual;

  const data = (await client.fetch(
    `*[_type == "caseStudy" && pageMeta.slug.current == $slug][0]{
      ...,
      awards[]->,
      services[]->,
    }`,
    {
      slug,
    }
  )) as CaseStudyWithReferences;
  if (!data) {
    return notFound();
  }
  return (
    <div>
      <CaseStudyIndividualBanner
        image={data?.headerImage}
        awards={data?.awards}
      />
      <ContentSection {...data} />
      {/* <Findout /> */}
    </div>
  );
}
