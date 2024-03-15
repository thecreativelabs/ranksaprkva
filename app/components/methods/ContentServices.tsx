import Growth from "@components/ui/icons/Growth";
import bgimg from '@/assets/methods/Group 1.png'
import Image from "next/image";
interface Card {
  icon: string;
  heading: string;
  content: string;
  button: {
    text: string;
    url: string;
  };
}

interface Data {
  title: string;
  text: string;
  cards: Card[];
  bg_image: string;
}

const data: Data = {
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
  bg_image: "../methods/Group 1.png",
};

export default function ContentAndServices() {
  return (
    <div className="sm:h-[180vh] h-fit w-full flex flex-col gap-[30px] justify-center items-center">
      <p className="text-light-red text-sm font-medium font-DM-sans uppercase mb-[5px] leading-[21px] tracking-widest">
        {data.title}
      </p>
      <p className="text-center text-dark-red text-xxl sm:text-xxxl sm:w-[40%] w-[90%] font-normal font-Amiri">
        {data.text}
      </p>
      <div className="w-[73%] grid grid-cols-1 sm:grid-cols-3 gap-[25px]">
        {data.cards.map((card, i) => (
          <div key={i} className="bg-[#F0F0ED] px-4 flex justify-center items-center min-h-[290px] max-h-[500px]">
            <div className="flex flex-col h-full w-[90%] justify-evenly items-start">
              <div className="bg-white h-fit w-fit p-2 rounded-[50%]">
                <Growth className="p-1" />
              </div>
              <p className="text-xl mt-[-15px] font-bold tracking-wider">
                {card.heading}
              </p>
              <p className="text-[16px] mt-[-20px] w-[95%] font-normal font-DM-sans leading-[26px]">
                {card.content}
              </p>
              <button className="text-base font-bold text-light-pink">
                {card.button.text}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[73%] sm:mt-[50px] mt-[10px] max-h-fit">
        <img src='./methods/Group 1.png' alt="background"  />
      </div>
    </div>
  );
}
