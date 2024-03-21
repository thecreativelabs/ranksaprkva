import CaseStudyIndividualBanner from "@/components/case-study/individual/banner"
import ContentSection from "@/components/case-study/individual/contentsection"
import Findout from "@/components/case-study/individual/findout"
import Navbar from "@/components/navbar/Navbar";
import Topnav from "@/components/navbar/Topnav";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
export default function CaseStudyIndividual() {
    return (
        <div>
            <Topnav />
            <Navbar />
            <CaseStudyIndividualBanner />
            <ContentSection />
            <Findout />
            <Cta />
            <Footer />
        </div>
    )
}