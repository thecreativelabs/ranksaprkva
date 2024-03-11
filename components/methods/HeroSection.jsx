'use client'
const herosection = {
  title: "Top of Search, Top of the Game",
  heading: "Boost your brand's visibility.",
  content:
    "SEO is an untapped marketing channel with the power to unlock high-conversion traffic and long-term ROI — we’ll help you find the key.",
  image: "./methods/hero.webp",
};
export default function Hero() {
  return (
    <>
    <style jsx>{`
        .background-overlay::before {
          content: "";
          background-image: url("./methods/Vector.png");
          background-position: 0px 30px;
          opacity: 0.4;
          position: absolute;
          top: 30%;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: 105%;
          background-repeat: no-repeat;
        }
      `}</style>
      <div class="max-h-full h-[165vh] bg-[#F0F0ED] relative w-full">
        <div
          class="max-h-full h-full w-full  bg-contain bg-no-repeat flex gap-[12px] flex-col background-overlay justify-center items-center">
          <p
            class=" h-[21px] text-center text-red-500 text-sm font-medium font-DM-sans uppercase leading-[21px] tracking-widest">
            {herosection.title}
          </p>
          <p
            class="w-[x]  text-center text-red-950 text-[67.30px] font-normal font-['Amiri'] leading-[67.34px]">
            {herosection.heading}
          </p>
          <p
            class="max-w-[40%] text-center text-red-950 text-[18px] font-normal font-DM-Sans leading-[29.70px]">
            {herosection.content}
          </p>
          <img src={herosection.image} class="h-[544px] mt-[4%]" />
        </div>
        
      </div>
    </>
  )
}






