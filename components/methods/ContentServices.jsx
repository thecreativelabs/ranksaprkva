'use client'
import Growth from "../ui/icons/Growth";
const data = {
  title: "SUPERCHARGE YOUR SEARCH POTENTIAL",
  text: "Accelerate your results and uncover additional paths to success.",
  cards: [
    {
      icon: "",
      heading: "Link Building",
      content: "Increase organic traffic and boost rankings with backlinks.",
      button: {
        text: "Learn more",
        url: "",
      },
    },
    {
      icon: "",
      heading: "Content Services",
      content: "Build topical authority to earn top-of-funnel trust.",
      button: {
        text: "Learn more",
        url: "",
      },
    },
    {
      icon: "",
      heading: "Web Implementation",
      content: "Turn SEO insights into better search performance.",
      button: {
        text: "Learn more",
        url: "",
      },
    },
  ],
  bg_image: "./methods/Group 1.png",
};
export default function ContentAndServices() {
  return (
    <div
      className="h-[180vh]  w-full flex flex-col gap-[30px] justify-center items-center"
    >
      <p
        className="text-red-500 text-sm font-medium font-DM-sans uppercase mb-[5px] leading-[21px] tracking-widest"
      >
        {data.title}
      </p>
      <p className="text-center text-red-950 text-xxxl w-[40%] font-normal font-Amiri">
        {data.text}
      </p>
      <div className="w-[73%] grid grid-cols-3 gap-[25px]">
        {
          data.cards.map((card, i) => {
            return (
              <div key={i} className="bg-[#F0F0ED] px-4 flex justify-center items-center min-h-[290px] max-h-[500px]">
                <div className="flex flex-col h-full w-[90%] justify-evenly items-start">
                  <div className="bg-white h-fit w-fit p-2 rounded-[50%]">
                    <Growth className="p-1" />
                  </div>
                  <p className="text-xl mt-[-15px] font-bold tracking-wider">
                  
                    {card.heading}{" "}
                  </p>
                  <p className="text-[16px] mt-[-20px] w-[95%] font-normal font-DM-sans leading-[26px]">
                    {card.content}
                  </p>
                  <button className="text-base font-bold  text-[#E55447]">
                    {card.button.text}
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
      <div className="w-[73%] mt-[50px] max-h-fit">
        <img src={data.bg_image} />
      </div>
    </div>
  )
}


