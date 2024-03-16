import Image from "next/image";
import HeroSection from "../case-study/heroSection";



const data = {
    title: "BEST SEO CASE STUDIES",
    heading: "Page One Results — No Matter Your Niche or Size",
    content: "Discover how we’ve helped businesses like yours climb the ranks, boost organic traffic, and achieve unprecedented growth.",
    // boldheading: 'Writing our own success story, one SEO case study at a time.',
   
}

export default function Hero() {
    return (
        <div className="md:py-[120px] sm:py-[80px] py-[40px] h-fit  w-full max-h-[600px] flex flex-col justify-center items-center">
            {/* <div className="sm:w-[80%] w-[90%] max-w-[1200px] h-[] sm:h-[55%] mt-[8%] sm:space-y-1 space-y-[30px] flex flex-col justify-between ">
                <p className="text-light-red text-sm font-bold font-DM-sans uppercase leading-[21px] tracking-widest">
                    {data.title}
                </p>
                <p className="sm:w-[80%] text-dark-red text-4xl lg:text-[67.30px] font-normal font-Amiri leading-[35px] sm:leading-[67.34px]">
                    {data.heading}
                </p>
                <p className="sm:w-[55%] w-[100%]  text-dark-red  sm:mt-[-10px] text-[18px] font-normal font-DM-Sans leading-[28px] sm:leading-[29.70px]">
                    {data.content}
                </p>
            </div> */}
            <HeroSection data={data} />
        </div>
    );
}
