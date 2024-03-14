import HeroSection from "@components/whoWeServe/herosection";
import CardSection from "@components/whoWeServe/CardSection";
import Help from "@components/methods/Help";
import Navbar from "@/components/navbar/Navbar";
import Topnav from "@/components/navbar/Topnav";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
export default function whoWeServe() {
    return (
        <>
            <Topnav />
            <Navbar />
            <HeroSection />
            <CardSection />
            {/* <Help /> */}
            <Cta />
            <Footer />
        </>
    )
}
