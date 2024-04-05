import Image from 'next/image';
import SEO from '@components/methods/seo/seo';
import Container from '@/components/Container';
import { MethodPage } from "@/types/sanity";
import { urlForImage } from '@sanity/lib/image';





const data1 = {
    image: "/methods/v-isotype.png",
    title: "OUR STRATEGIC FRAMEWORK",
    text: "Get clear-cut results you can count on.",
    headingImage: "/methods/framework-titles-3.png",
    planBenefits: [
        {
            heading: "Identify ranking barriers and establish success indicators.",
            points: [
                "Competitive Analysis",
                "Keyword Strategy Primary Keyword Themes, Metadata Optimizations, Supporting Keyword Themes,Keyword Opportunities",
                "External Anchor Text Analysis",
                "Page Optimizations",
                "Google Analytics Audit",
                "Technical SEO Audit",
                "Primary Keyword Site Audit",
            ],
            image: '/methods/framework-onboarding-2.svg'
        },
        {
            heading: "Build and maintain your site authority.",
            points: ["Link Building", "Technical Site Sweep"],
            image: '/methods/framework-monthly-2b.svg'
        },
        {
            heading: "Remove barriers to continued growth.",
            points: [
                "Competitive Analysis",
                "Keyword Strategy Refresh",
                "Page Optimizations",
                "Keyword Cannibalization Audit",
                "Featured Snippet Optimization",
            ],
            image: '/methods/framework-semi-anual-2.svg'
        },
        {
            heading: "Leverage the momentum of foundational SEO success.",
            points: [
                "SERP Feature Schema Optimization",
                "E-E-A-T Optimization",
                "Internal Link Audit",
            ],
            image: '/methods/framework-anual-2.svg',
        },
    ],
    cardImageForSmallScreen: []
};

export default function Framework({ section2:data }: {
  section2:MethodPage['section2'];
}){
  const serviceList=[data?.serviceList1, data?.serviceList2, data?.serviceList3, data?.serviceList4]
    return (
      
        <div className="relative background  h-fit sm:py-[100px] py-10  w-full bg-graybg">
            <Container>
                <img
                    alt='image'
                    src={urlForImage(data?.heading?.mainImage)}
                    height={1000}
                    width={1000}
                    className="absolute sm:top-[-60px] top-[-20px] left-[45%] sm:h-[120px] sm:w-[120px] h-[50px] w-[50px]"
                />
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <p className="text-light-red text-sm font-medium font-DM-sans uppercase mb-[5px] leading-[21px] tracking-widest">
                        {data?.heading?.header?.topText}
                    </p>
                    <p className="text-center text-dark-red sm:text-[37.30px] text-[20px] font-normal font-Amiri leading-[30px] sm:leading-[67.34px]">
                        {data?.heading?.header?.title}

                    </p>
                    <img alt='image' src='/methods/framework-titles-3.png' width={1000} height={1000} className=" sm:flex hidden w-[90%] max-h-fit mt-[4%]" />
                    <div className="flex sm:flex-row flex-col gap-[40px] mt-[20px] w-[90%]">
                        {serviceList?.map((e, i) => (
                            <div key={i} className={i !== 0 ? "w-[100%]" : "sm:w-[128%] w-[100%]"}>
                                {/* <Image width={1000} height={1000} alt='image' src={e. } className="flex  sm:hidden mb-2" /> */}
                                <p className="sm:text-base text-sm font-bold">{e?.heading}</p>
                                <ul className="mt-[25px] list-disc space-y-2">
                                    {e?.services?.map((point, k) => (
                                        <li className="sm:leading-[28px] sm:text-[17px] leading-[22px] text-[13px]" key={k}>{point.text}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white relative z-10 px-[50px] w-[100%] mt-[50px] border-t-[3px] border-solid border-yellow-500 h-[45%]">

                        <SEO data={data}/>
                    </div>
                </div>
            </Container>
        </div>
    );
}
