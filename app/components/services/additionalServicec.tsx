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
      <div className="mt-[50px]">
        <div className="bg-white relative z-10 sm:py-[50px] py-4 flex flex-col gap-[10%] justify-center items-center w-[100%]  ">
          <p className="text-xxl font-bold tracking-wider">{data?.heading}</p>
          {/* {
                (data != null && data.content != null) &&
                <p className="text-dark-red mt-[20px] text-sm lg:text-[17px] leading-[26px] font-normal font-DM-Sans lg:max-w-[50%]">
                    {data.content}
                </p>
            } */}
          <div className="flex sm:flex-row flex-col w-[95%] justify-between py-[30px]">
            {data?.services?.map((service, i) => (
              <div key={i} className="w-full flex flex-col gap-[20px]">
                <div className="sm:flex flex-col hidden">
                  <Growth />
                  <a className="text-xl mt-[15px] font-bold">
                    {service?.heading}
                  </a>
                </div>
                <div className="flex sm:hidden mt-[20px]">
                  <Growth />
                  <a className="text-xl mt-[6px] font-bold">{service?.url}</a>
                </div>
                <ul className="ml-[13px] w-[80%] list-disc space-y-2 text-[#f60]">
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
