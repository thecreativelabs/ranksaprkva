'use client'
import Growth from "../../ui/icons/Growth";

const data = {
  heading: "Additional SEO Services",
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
export default function SEO() {
  return (

    <div
      class="bg-white relative z-10 mt-[50px] flex flex-col gap-[10%] justify-center items-center w-[90%] border-t-[3px] border-solid border-yellow-500 h-[45%]">
      <p class="text-xxl font-bold tracking-wider">{data.heading}</p>
      <div class="flex  w-[85%] ">
        {
          data.services.map((service, i) => {
            return (
              <div key={i} class="w-full flex flex-col gap-[25px]">
                <Growth />
                <a class="text-xl font-bold">{service.heading}</a>
                <ul
                  class=" ml-[13px] w-[80%] list-disc space-y-2 text-[#f60]"
                >
                  {service.points.map((point, i) => {
                    return (
                      <li key={i} class="leading-[25px]">
                        <span class="text-black">{point}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })
        }
      </div>
    </div>

  )
}
