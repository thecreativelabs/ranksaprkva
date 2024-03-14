
// import Methods from "@components/methods/HeroSection.astro";
// import Growthh from "@components/methods/searchAndGrowth.astro";
// import Layout from "@layouts/Layout.astro";
// import Framework from "@components/methods/seo/framework.astro";
// import ContentService from "components/methods/contentServices.astro";
import Banner from "@/components/methods/banner";
import Navbar from "@/components/navbar/Navbar";
import Topnav from "@/components/navbar/Topnav";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

import Companies from "@/components/methods/Companies";
import Hero from '@/components/methods/HeroSection'
import ContentAndServices from '@/components/methods/ContentServices'
import InnovativeSection from '@/components/methods/InnovativeSEOSection'
import Results from '@/components/methods/Results'
import SearchAndGrowth from '@/components/methods/searchAndGrowth'
import Framework from '@/components/methods/seo/framework'
import Help from '@/components/methods/Help'
export default function Methods() {
    return (
        <>
         <Topnav />
      <Navbar />
            <Hero />
            <SearchAndGrowth />
            <Framework/>
            <ContentAndServices />
            <Banner />
            <InnovativeSection />
            <Companies />
            <Results />
            {/* <Help /> */}
            <Cta />
            <Footer />
        </>
    )
}

// <Layout>
//   <HeroSection />
//   <Growthh />
//   <Framework />
//   <ContentService />
//   <Banner />
//   <InnovativeSEOSection />
//   <Companies />
//   <Results />
//   <Help />
// </Layout>
