import Consulting from "@/components/whoWeServe/Individual/consulting";
import { FaAlignRight,FaAccusoft, FaKickstarter } from "react-icons/fa";
import { GrKey } from "react-icons/gr";
export default function CaseStudyConsulting(){
    const data = {
        title: 'SAAS SEO CONSULTING',
        heading: 'Turn searches into subscribers.',
        content: 'Standing out in search starts with enlisting a SaaS SEO agency to help you navigate the sea of competition.',
        cards: [
            {
                Icon: <FaAlignRight  className="w-[35px] h-[35px] font-light text-light-pink" />,
                heading: "Sustainable Growth With Long-Term ROI",
                content:
                    "Forget the vanity metrics. We identify new opportunities based on your digital marketing goals and offer recommendations that focus your resources where they'll drive the most value for your business.",
            },
            {
                Icon: <FaAccusoft  className="w-[35px] h-[35px] font-light text-light-pink" />,
                heading: "Immediate Impact With Dependable Gains",
                content:
                    "We hit the ground running with high-impact keyword research early in our partnership. The result? Relevant keywords that fuel the focus of your strategy while building on your existing momentum for an expeditious boost in performance.",
            },
            {
                Icon: <GrKey  className="w-[35px] h-[35px] font-light text-light-pink" />,
                heading: "Full Disclosure Backed By Data",
                content:
                    "We set clear metric-based campaign goals with monthly progress reports. You also get 24/7 access to a personalized dashboard to track your campaign progress.",
            },
        ],
    }
    return(
        <Consulting data={data} />
    )
}