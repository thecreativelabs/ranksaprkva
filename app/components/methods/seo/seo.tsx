import Growth from "../../ui/icons/Growth";

interface Service {
    icon: string;
    heading: string;
    url: string;
    points: string[];
}

interface SEOData {
    heading: string;
    services: Service[];
}

const data: SEOData = {
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

export default function SEO(): JSX.Element {
    return (
        <div className="bg-white relative z-10 sm:py-[50px] py-4 mt-[50px] flex flex-col gap-[10%] justify-center items-center w-[100%] border-t-[3px] border-solid border-yellow-500 h-[45%]">
            <p className="text-xxl font-bold tracking-wider">{data.heading}</p>
            <div className="flex sm:flex-row flex-col w-[85%] py-[30px]">
                {data.services.map((service, i) => (
                    <div key={i} className="w-full flex flex-col gap-[25px]">
                        <div className="sm:block hidden">
                            <Growth />
                            <a className="text-xl font-bold">{service.heading}</a>
                        </div>
                        <div className="flex sm:hidden mt-[20px]">
                            <Growth />
                            <a className="text-xl mt-[6px] font-bold">{service.heading}</a>
                        </div>
                        <ul className="ml-[13px] w-[80%] list-disc space-y-2 text-[#f60]">
                            {service.points.map((point, j) => (
                                <li key={j} className="sm:leading-[28px] sm:text-[17px] leading-[22px] text-[13px]">
                                    <span className="text-black">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
