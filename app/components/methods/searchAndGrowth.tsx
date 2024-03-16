'use client'
import Growth from "@components/ui/icons/Growth";
import Task from "@components/ui/icons/taskList";
import Search from "@components/ui/icons/search";
import SearchCards from "./searchCards";
import Container from "../Container";


const data = {
    banner: {
        text: "Uncover the path to success with a search strategy tailored to your business.",
        button: {
            text: "GET A CUSTOM QUOTE",
            url: "/seo",
        },
    },
    text: "We've developed a strategic framework for evidence-based search tactics that generate long-lasting value and success-building impact.",
    cards: [
        {
            Icon: <Growth />,
            heading: "Sustainable Growth With Long-Term ROI",
            content:
                "Forget the vanity metrics. We identify new opportunities based on your digital marketing goals and offer recommendations that focus your resources where they'll drive the most value for your business.",
        },
        {
            Icon: <Task />,
            heading: "Immediate Impact With Dependable Gains",
            content:
                "We hit the ground running with high-impact keyword research early in our partnership. The result? Relevant keywords that fuel the focus of your strategy while building on your existing momentum for an expeditious boost in performance.",
        },
        {
            Icon: <Search />,
            heading: "Full Disclosure Backed By Data",
            content:
                "We set clear metric-based campaign goals with monthly progress reports. You also get 24/7 access to a personalized dashboard to track your campaign progress.",
        },
    ],
};

export default function SearchAndGrowth(): JSX.Element {
    return (
        <Container>
            <div className="relative py-[120px] h-fit  flex flex-col bg-white justify-center items-center">
                <div className="sm:absolute relative top-[-100px] flex flex-col items-center justify-center rounded h-[180px] sm:h-[250px] bg gradient-with-image ">
                    <div className="w-[90%] min-w-3xl h-[80%] sm:h-full gap-[20px] flex flex-col justify-center">
                        <p className="text-white text-[20px] sm:text-[28.40px] font-DM-sans font-bold sm:w-[60%] w-[80%] leading-6 sm:leading-10">
                            {data.banner.text}
                        </p>
                        <button className="w-[260px] h-[50px] sm:h-[61px] relative bg-amber-400 rounded text-center text-dark-red text-sm font-bold font-DM-Sans uppercase leading-[21px] tracking-widest">
                            {data.banner.button.text}
                        </button>
                    </div>
                </div>
                <div className="w-[90%]  sm:p-0 p-4 mt-[-15%] sm:mt-[15%]">
                    <p className="sm:text-xxl text-lg font-medium tracking-wide w-[100%]">{data.text}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 mt-[50px] relative gap-[20px]">
                        {data.cards.map((e, i) => (
                            <SearchCards key={i} data={e} />

                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}
