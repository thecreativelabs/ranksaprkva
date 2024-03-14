
// import Methods from "@components/methods/HeroSection.astro";
// import Growthh from "@components/methods/searchAndGrowth.astro";
// import Layout from "@layouts/Layout.astro";
// import Framework from "@components/methods/seo/framework.astro";
// import ContentService from "components/methods/contentServices.astro";
import Banner from "../../../components/methods/banner";
// import InnovativeSEOSection from "components/methods/InnovativeSEOSection.astro";
// import HeroSection from "@components/methods/HeroSection.astro";
// import Companies from "@components/methods/Companies.astro";
// import Results from "@components/methods/Results.astro";
// import Help from "@components/methods/Help.astro";
// import Methods from "";
import Companies from "../../../components/methods/Companies";
import Hero from '../../../components/methods/HeroSection'
import ContentAndServices from '../../../components/methods/ContentServices'
import InnovativeSection from '../../../components/methods/InnovativeSEOSection'
import Results from '../../../components/methods/Results'
import SearchAndGrowth from '../../../components/methods/searchAndGrowth'
import Framework from '../../../components/methods/seo/framework'
import Help from '../../../components/methods/Help'
export default function Methods() {
    return (
        <>
            <Hero />
            <SearchAndGrowth />
            <Framework/>
            <ContentAndServices />
            <Banner />
            <InnovativeSection />
            <Companies />
            <Results />
            <Help />
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
