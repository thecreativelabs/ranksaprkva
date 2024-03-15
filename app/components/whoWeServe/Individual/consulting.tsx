import Container from "@/components/Container";
import Growth from "@components/ui/icons/Growth";
import Task from "@components/ui/icons/taskList";
import Search from "@components/ui/icons/search";
import SearchCards from "@/components/methods/searchCards";

const data = {
    title: 'SAAS SEO CONSULTING',
    heading: 'Turn searches into subscribers.',
    content: 'Standing out in search starts with enlisting a SaaS SEO agency to help you navigate the sea of competition.',
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
}
export default function Consulting() {
    return (

        <Container>
            <div className="w-full flex justify-center">
                <div className="w-[90%] space-y-[30px] sm:py-[80px] py-[40px] sm:mt-[30px] mt-[15px] border-b-[1px] border-[#CCC]">
                    <p className="text-light-red text-sm sm:text-sm font-bold font-DM-sans uppercase tracking-widest">
                        {data.title}
                    </p>
                    <p className="text-dark-red sm:w-[70%] w-[60%] text-xxl lg:text-xxxxl font-normal font-Amiri  leading-[32px] lg:leading-[55px]">
                        {data.heading}
                    </p>
                    <p className="text-dark-red text-sm lg:text-[17px] leading-[26px] font-normal mt-[-7px] font-DM-Sans lg:max-w-[50%]">
                        {data.content}
                    </p>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 mt-[50px] relative gap-[40px]">
                            {data.cards.map((e, i) => (
                                <SearchCards key={i} data={e} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}