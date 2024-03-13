import HeroSection from "@components/case-study/heroSection"
import FeatureCaseStudy from '@components/case-study/Feature-case-study/feature'
import SeoCases from '@components/case-study/SeoCases'
import Review from '@components/case-study/Review'
import QAndA from "@components/case-study/QandA"
import Help from '@components/methods/Help'
export default function Case_study() {
    return (
        <div>
            <HeroSection />
            <FeatureCaseStudy />
            <SeoCases />
            <Review />
            <QAndA />
            <Help />
        </div>
    )
}