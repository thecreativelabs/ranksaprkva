'use client'
import SEO from './seo.jsx'
const data = {
  image: "./methods/v-isotype.png",
  title: "OUR STRATEGIC FRAMEWORK",
  text: "Get clear-cut results you can count on.",
  headingImage: "./methods/framework-titles-3.png",
  planBenefits: [
    {
      heading: "Identify ranking barriers and establish success indicators.",
      points: [
        "Competitive Analysis",
        "Keyword Strategy Primary Keyword Themes, Metadata Optimizations, Supporting Keyword Themes,Keyword Opportunities",
        "External Anchor Text Analysis",
        "Page Optimizations",
        "Google Analytics Audit",
        "Technical SEO Audit",
        "Primary Keyword Site Audit",
      ],
    },
    {
      heading: "Build and maintain your site authority.",
      points: ["Link Building", "Technical Site Sweep"],
    },
    {
      heading: "Remove barriers to continued growth.",
      points: [
        "Competitive Analysis",
        "Keyword Strategy Refresh",
        "Page Optimizations",
        "Keyword Cannibalization Audit",
        "Featured Snippet Optimization",
      ],
    },
    {
      heading: "Leverage the momentum of foundational SEO success.",
      points: [
        "SERP Feature Schema Optimization",
        "E-E-A-T Optimization",
        "Internal Link Audit",
      ],
    },
  ],
};
export default function Framework() {
  return (
    <div className="relative background h-[220vh] w-full bg-[#F0F0ED]">
      <img
        src={data.image}
        className="absolute top-[-60px] left-[45%] h-[120px] w-[120px]"
      />
      <div
        className="w-full h-full flex flex-col justify-center items-center">
        <p
          className="text-light-red text-sm font-medium font-DM-sans uppercase mb-[5px] leading-[21px] tracking-widest">
          {data.title}
        </p>
        <p
          className="text-center text-red-950 text-[37.30px] font-normal font-['Amiri'] leading-[67.34px]">
          {data.text}
        </p>
        <img src={data.headingImage} className="w-[73%] mt-[4%]" />
        <div className="flex gap-[40px] mt-[20px] w-[73%]">
          {
            data.planBenefits.map((e, i) => {
              return i != 0 ? (
                <div className="w-[100%]">
                  <p className="text-base font-bold">{e.heading}</p>
                  <ul className="mt-[25px] list-disc space-y-2">
                    {e.points.map((point, k) => {
                      return <li key={k}>{point}</li>;
                    })}
                  </ul>
                </div>
              ) : (
                <div className="w-[128%] ">
                  <p className="text-base font-bold">{e.heading}</p>
                  <ul className="mt-[25px] list-disc space-y-2">
                    {e.points.map((point, k) => {
                      return <li key={k}>{point}</li>;
                    })}
                  </ul>
                </div>
              );
            })
          }
        </div>
        <SEO />
      </div>
    </div>
  )
}

