import SEO from "@components/methods/seo/seo";
import Container from "../Container";

export default function AdditonalService() {
    const data = {
        heading: "Additional SEO Services",
        content: 'Accelerate your results and increase the return on your investment with more optimization.',
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
                <SEO data={data} />
            </div>
        </Container>
    )
}