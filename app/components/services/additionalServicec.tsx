import SEO from "@components/methods/seo/seo";
import Container from "../Container";
import Growth from "../ui/icons/Growth";

export default function AdditonalService() {
  const data = {
    heading: "Additional SEO Services",
    content:
      "Accelerate your results and increase the return on your investment with more optimization.",
    services: [
      {
        icon: "",
        heading: "Keyword Research",
        url: "",
        points: [
          "Competitive Analysis",
          "Search Intent Optimization",
          "Keyword Strategy Refresh",
          "Supporting Keyword Themes",
          "Keyword Opportunities",
        ],
      },
      {
        icon: "",
        heading: "Technical SEO",
        url: "",
        points: [
          "Google Analytics Audit",
          "International SEO Audit",
          "301 Redirect Mapping",
          "GA Implementation",
        ],
      },
      {
        icon: "",
        heading: "On-Page SEO",
        url: "",
        points: [
          "Internal Link Audit",
          "Page Optimization",
          "Keyword Cannibalization",
          "Featured Snippet Optimization",
          "SERP Feature Schema Optimization",
          "Site Architecture Audit",
          "Conversion Rate Optimization",
          "Content Audit",
        ],
      },
      {
        icon: "",
        heading: "Off-Page SEO",
        url: "",
        points: [
          "Link Building",
          "Backlink Audit With Manual Disavow",
          "App Store Optimization",
          "YouTube Optimization",
          "Google Business Profile Optimization",
          "Local Citation Audit",
          "Local Citation Building",
        ],
      },
    ],
  };
  return (
    <Container>
      <div className="border border-gray rounded-3xl md:rounded-[3rem] overflow-hidden shadow-lg">
        <div className="bg-white relative z-10 p-4 md:py-8 flex flex-col gap-[10%] justify-center items-center w-[100%]  ">
          <p className="text-xxl font-bold tracking-wider">{data?.heading}</p>
          <div className="h-[1px] bg-violet w-full mt-4"></div>

          <div className="flex md:space-x-8 sm:flex-row flex-col w-[95%] justify-between md:py-[30px]">
            {data?.services?.map((service, i) => (
              <div key={i} className="w-full flex flex-col gap-[20px] pt-4">
                <div className="text-violet rounded-full flex flex-row border border-violet py-1 px-4 items-center justify-center">
                  <Growth />
                  <p className="text-xl mt-[15px] font-bold text-black">
                    {service?.heading}
                  </p>
                </div>
                <ul className="ml-[13px] w-[80%] list-disc space-y-2 text-black">
                  {service?.points?.map((point, j) => (
                    <li
                      key={j}
                      className="sm:leading-[28px] sm:text-[17px] leading-[22px] text-[13px]"
                    >
                      <span className="text-black">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
