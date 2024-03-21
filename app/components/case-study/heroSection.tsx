"use client";
import Image from "next/image";

const data = {
  title: "BEST SEO CASE STUDIES",
  heading: "We don't just promise — we deliver.",
  content:
    "Discover how we’ve helped businesses like yours climb the ranks, boost organic traffic, and achieve unprecedented growth.",
  boldheading: "Writing our own success story, one SEO case study at a time.",
  logos: [
    "/methods/logo1.png",
    "/methods/logo2.png",
    "/methods/logo3.png",
    "/methods/logo4.png",
  ],
};

export default function HeroSection(props: any) {
  const data =
    props == null || props.data == null
      ? {
          title: "BEST SEO CASE STUDIES",
          heading: "We don't just promise — we deliver.",
          content:
            "Discover how we’ve helped businesses like yours climb the ranks, boost organic traffic, and achieve unprecedented growth.",
          boldheading:
            "Writing our own success story, one SEO case study at a time.",
          logos: [
            "/methods/logo1.png",
            "/methods/logo2.png",
            "/methods/logo3.png",
            "/methods/logo4.png",
          ],
        }
      : props.data;
  return (
    <div className="w-full md:py-[80px] sm:py-[60px] py-[30px] flex flex-col justify-center items-center">
      <div className="w-[80%] max-w-[1200px] gap-[25px] flex flex-col justify-evenly">
        <p className="text-light-red text-sm font-bold font-DM-sans uppercase leading-[21px] tracking-widest pb-4">
          {data.title}
        </p>
        <p className="w-full text-dark-red text-3xl lg:text-xxxxxl font-normal font-Amiri leading-[30px] sm:leading-[67.34px]">
          {data.heading}
        </p>
        <p className="sm:w-[55%] w-full text-dark-red sm:mt-[-10px] text-base lg:text-[18px] font-normal font-DM-Sans leading-[20px] sm:leading-[29.70px]">
          {data.content}
        </p>
        <p className="text-md lg:text-2xl font-bold tracking-wide mt-[10px] w-full">
          {data.boldheading}
        </p>
        <div className="sm:w-[60%] w-[100%] grid sm:grid-cols-4 grid-cols-4 gap-[10px]">
          {data.logos?.map((logo: any, i: any) => (
            <Image key={i} width={170} height={170} src={logo} alt="logo" />
          ))}
        </div>
      </div>
    </div>
  );
}
