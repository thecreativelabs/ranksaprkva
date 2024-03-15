import Container from "@/components/Container"
import TesimonialCard from "./testimonialcard"

const data = {
    heading: 'Real Companies. Real Gains.',
    cards: [
        {
            name: 'ELIZABETH NEWILL',
            role: 'Chief Creative and Digital Officer, Rank & Style',
            star: 4,
            review: 'Their work has been extremely effective so far, leading to significant increases in clicks on the site, over 400% increase in impressions, and over 500% increase in organic traffic. The team is thorough, dedicated, and highly skilled at what they do. They’re extremely meticulous with their analysis, technical feedback, and support.'

        },
        {
            name: 'ELIZABETH NEWILL',
            role: 'Chief Creative and Digital Officer, Rank & Style',
            star: 4,
            review: 'Their work has been extremely effective so far, leading to significant increases in clicks on the site, over 400% increase in impressions, and over 500% increase in organic traffic. The team is thorough, dedicated, and highly skilled at what they do. They’re extremely meticulous with their analysis, technical feedback, and support.'

        },
        {
            name: 'ELIZABETH NEWILL',
            role: 'Chief Creative and Digital Officer, Rank & Style',
            star: 4,
            review: 'Their work has been extremely effective so far, leading to significant increases in clicks on the site, over 400% increase in impressions, and over 500% increase in organic traffic. The team is thorough, dedicated, and highly skilled at what they do. They’re extremely meticulous with their analysis, technical feedback, and support.'

        },

    ]
}

export default function Testimonial() {
    return (
        <Container>
            <div className=" w-full flex flex-col justify-center items-center pt-[100px] gap-[50px]">
                <p className=" text-center text-dark-red sm:w-[80%] w-[80%] text-xxl lg:text-xxxxl font-normal font-Amiri  leading-[32px] lg:leading-[55px]">
                    {data.heading}
                </p>
                <div className="grid gap-[30px] grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
                    {
                        data.cards.map((card, i) => {
                            return (
                                <div key={i}>
                                    <TesimonialCard data={card} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}