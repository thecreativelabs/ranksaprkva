import Container from "../Container";
import ServeCards from '@components/whoWeServe/serveCards';

import { GoArrowRight } from "react-icons/go";
const data = {
    title: 'TAILORED TO YOUR NICHE AND SIZE',
    heading: 'Experience world-class SEO that makes a world of difference.',
    content: 'Our SEO services focus your resources where they’ll drive the most value for your business. Based on your competitive landscape and target audience, we have plans to help you achieve your goals.',
    cards: [
        {
            icon: "",
            heading: "Link Building",
            content: "Increase organic traffic and boost rankings with backlinks.",
            button: {
                text: "",
                url: "",
            },
            points: ['Local citation building', 'Google Search Profile optimization', 'Localized keyword strategies'],
        },
        {
            icon: "",
            heading: "Content Services",
            content: "Build topical authority to earn top-of-funnel trust.",
            button: {
                text: "",
                url: "",
            },
            points: ['Local citation building', 'Google Search Profile optimization', 'Localized keyword strategies'],
        },
        {
            icon: "",
            heading: "Implementation",
            content: "Turn SEO insights into better search performance.",
            button: {
                text: "",
                url: "",
            },
            points: ['Local citation building', 'Google Search Profile optimization', 'Localized keyword strategies'],
        },
    ],
    bigcard: {
        heading: 'A Proven SEO Framework That Supports Your Success',
        content: 'With everything you need and nothing you don’t, we center your strategy on your goals to create reliable, high-ROl results, time and time again.With everything you need and nothing you don’t, we center your strategy on your goals to create reliable, high-ROl results, time and time again.With everything you need and nothing you don’t, we center your strategy on your goals to create reliable, high-ROl results, time and time again. ',
        points: [
            {
                title: 'At Onboarding',
                points: ['Competitive Analysis', 'Keyword Strategy', 'External Anchor Text Analysis', 'Page Optimizations', 'Google Analytics Audit', 'Technical SEO Audit', 'Primary Keyword Site Audit']
            },
            {
                title: 'Monthly',
                points: ['Competitive Analysis', 'Keyword Strategy', 'External Anchor Text Analysis']
            },
            {
                title: 'Semi-Annually',
                points: ['Competitive Analysis', 'Keyword Strategy', 'External Anchor Text Analysis', 'Google Analytics Audit', 'Technical SEO Audit', 'Primary Keyword Site Audit']
            },
        ],
        button: {
            text: 'start your seo journey',
            url: ''
        }
    }

}

export default function Services() {
    return (

        <Container >
            <div className="flex justify-center items-center">
                <div className=" w-[93%] ml-0 sm:ml-[20px] sm:py-[120px] md:py-[80px] py-[40px] flex flex-col gap-y-[40px]">
                    <p className="text-light-red text-sm sm:text-sm font-bold font-DM-sans uppercase tracking-widest">
                        {data.title}
                    </p>
                    <p className="text-dark-red sm:w-[60%] w-[60%] text-xxl lg:text-xxxxl font-normal font-Amiri  leading-[32px] lg:leading-[55px]">
                        {data.heading}
                    </p>
                    <p className="text-dark-red text-sm lg:text-[17px] leading-[26px] font-normal mt-[-7px] font-DM-Sans lg:max-w-[72%]">
                        {data.content}
                    </p>

                    <div className="w-[100%] mt-[20px] gap-[30px] flex md:flex-row flex-col">
                        <div className="md:w-[50%] w-[100%] space-y-[23px]">
                            {
                                data.cards.map((card: any, i: any) => {
                                    return (
                                        <div key={i}>
                                            <ServeCards data={card} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="md:w-[50%] w-[100%] space-y-6 prose p-10 bg-dark-red">
                            {/* <p className="text-white text-sm sm:text-sm font-bold font-DM-sans uppercase tracking-widest">
                                {data.title}
                            </p> */}
                            <p className="text-white sm:w-[100%] w-[100%] text-xxl lg:text-xxxl font-normal font-Amiri  leading-[25px] lg:leading-[40px]">
                                {data.bigcard.heading}
                            </p>
                            <p className="text-white text-sm lg:text-[15px]  leading-[26px] font-normal mt-[-7px] font-DM-Sans ">
                                {data.bigcard.content}
                            </p>
                            <div className="mt-[20px]">
                                {
                                    data.bigcard.points.map((points: any, i: any) => {
                                        return (
                                            <div className="space-y-2" key={i} >
                                                <p className="text-xl  text-white pr-2 mt-[5px] font-bold tracking-wider">
                                                    {points.title}
                                                </p>
                                                <ul className="leading-[25px] text-white list-disc ml-[15px]">
                                                    {points.points.map((point: any, i: any) => {
                                                        return (
                                                            <li key={i}>{point}</li>
                                                        )
                                                    })}
                                                </ul>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="bg-darkyellow pr-2 text-dark-red rounded-lg w-fit md:h-14 h-14 md:flex md:items-center items-center gap-4 hover:bg-light-red hover:text-white transition-all duration-300">
                            <button className="relative md:inline-flex text-dark-red inline-flex items-center md:items-center group gap-px">
                                <a
                                    href={data.bigcard.button.url}
                                    className="inline-flex items-center gap-px md:inline-flex md:items-center md:gap-px"
                                >
                                    <span className="text-base uppercase md:mt-0 font-medium mt-4 ml-5 cursor-pointer">
                                        {data.bigcard.button.text}
                                    </span>
                                    <GoArrowRight
                                        className="ml-1 font-bold md:mt-0 mt-4 mr-2"
                                        size={25}
                                    />

                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Container >

    )
}