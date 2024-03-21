import { FaArrowUp } from "react-icons/fa6"
import SmallCards from "./smallCards"

export default function LeftContent() {
    const data = {
        heading: 'A 513% Increase in Organic Traffic Solidifies a Niche App’s Authority',
        cards: [
            {
                icon: <FaArrowUp className="h-[30px] relative w-[30px] font-bold text-dark-red"
                />,
                title: '571%',
                content: 'Organic Traffic',
                color: 'lightblue',

            },
            {
                icon: '',
                title: '223%',
                content: 'More Ranking Keywords',


            },
            {
                icon: <FaArrowUp className="h-[30px] relative w-[30px] font-bold text-dark-red"
                />,
                title: '463%',
                content: 'Page One Keywords',


            },
            {
                icon: <FaArrowUp className="h-[30px] relative w-[30px] font-bold text-dark-red"
                />,
                title: '463%',
                content: 'Page One Keywords',


            },
        ]
    }
    return (
        <div className="lg:w-[70%] w-[100%]">
            <p className="w-full text-dark-red text-3xl lg:text-xxxxl font-normal font-Amiri leading-[30px] sm:leading-[57.34px]">
                {data.heading}
            </p>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[50px] gap-[15px]">
                {
                    data.cards.map((card: any, i: any) => {
                        return (
                            <div key={i}>

                                <SmallCards className={`bg-${card.color}  h-[150px]`} index={i} data={card} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="mt-[20px] sm:mt-[50px] sm:py-[50px] py-[20px]">
                <p>content</p>
            </div>
        </div>
    )
}