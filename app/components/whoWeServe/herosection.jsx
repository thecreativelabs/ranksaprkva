import Image from "next/image"
const data = {
    title: "BEST SEO CASE STUDIES",
    heading: "Page One Results — No Matter Your Niche or Size",
    content: "Discover how we’ve helped businesses like yours climb the ranks, boost organic traffic, and achieve unprecedented growth.",
    boldheading: 'Writing our own success story, one SEO case study at a time.',
    logos: [
        "/methods/logo1.png",

        "/methods/logo2.png",
        "/methods/logo3.png",
        "/methods/logo4.png",
    ],

}

export default function Hero() {
    return (
        <div className="sm:h-[70vh] h-fit sm:py-0 py-[100px]  w-full max-h-[600px] flex flex-col justify-center items-center">
            <div className="sm:w-[80%] w-[90%] max-w-[1200px] h-[] sm:h-[55%] mt-[8%] sm:space-y-1 space-y-[30px] flex flex-col justify-between ">
                <p className=" text-light-red text-sm font-bold font-DM-sans uppercase leading-[21px] tracking-widest">
                    {data.title}
                </p>
                <p className="sm:w-[80%] text-red-950 text-4xl lg:text-[67.30px] font-normal font-Amiri leading-[35px] sm:leading-[67.34px]">
                    {data.heading}
                </p>
                <p className="sm:w-[55%] w-[100%]  text-red-950  sm:mt-[-10px] text-[18px] font-normal font-DM-Sans leading-[28px] sm:leading-[29.70px]">
                    {data.content}
                </p>


            </div>
        </div>
    )
}