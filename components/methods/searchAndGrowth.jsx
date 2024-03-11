'use client'
import Growth from "../ui/icons/Growth";
import Task from "../ui/icons/taskList";
import Search from "../ui/icons/search";


const data = {
  banner: {
    text: "Uncover the path to success with a search strategy tailored to your business.​",
    button: {
      text: "GET A CUSTOM QUOTE",
      url: "/seo",
    },
  },
  text: "We've developed a strategic framework for evidence-based search tactics that generate long-lasting value and success-building impact.",
  cards: [
    {
      Icon: <Growth/>,
      heading: "Sustainable Growth With Long-Term ROI",
      content:
        "Forget the vanity metrics. We identify new opportunities based on your digital marketing goals and offer recommendations that focus your resources where they'll drive the most value for your business.",
    },
    {
      Icon: <Task/>,
      heading: "Immediate Impact With Dependable Gains",
      content:
        "We hit the ground running with high-impact keyword research early in our partnership. The result? Relevant keywords that fuel the focus of your strategy while building on your existing momentum for an expeditious boost in performance.",
    },
    {
      Icon: <Search/>,
      heading: "Full Disclosure Backed By Data",
      content:
        "We set clear metric-based campaign goals with monthly progress reports. You also get 24/7 access to a personalized dashboard to track your campaign progress.",
    },
  ],
};


export default function SearchAndGrowth() {
  return (
    <div class="relative h-[120vh] w-full flex bg-white justify-center items-center">
      <div
        class="absolute top-[-100px] flex items-center justify-center rounded h-[250px] bg gradient-with-image min-w-[76%] max-w-3xl">
        <div
          class="w-[90%] min-w-3xl h-full gap-[20px] flex flex-col justify-center">
          <p
            class="text-white text-[28.40px] font-DM-sans font-bold w-[60%] leading-10">
            {data.banner.text}
          </p>
          <button
            class="w-[260px] h-[61px] relative bg-amber-400 rounded text-center text-red-950 text-sm font-bold font-['DM Sans'] uppercase leading-[21px] tracking-widest">
            {data.banner.button.text}
          </button>
        </div>
      </div>
      <div class="min-w-[76%] max-w-3xl mt-[15%]">
        <p class="text-xxl font-medium tracking-wide w-[100%]">{data.text}</p>
        <div class="grid grid-cols-3 mt-[50px] relative gap-[20px]">
          {
            data.cards.map((e, i) => {
              return <div class='max-w-[100%] flex flex-col gap-2' key={i}>
                {e.Icon}
                <p class="text-xl font-bold tracking-wider mt-[10px] w-[97%]">{e.heading}</p>
                <p class="text-[16px] font-normal  leading-[26px]">
                  {e.content}
                </p>
              </div>;
            })
          }
        </div>
      </div>
    </div>
  )
}


