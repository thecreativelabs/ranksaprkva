import Container from "@/components/Container"
import FeatureCard from "../Feature-case-study/featureCard"
import Cards from "../cards"
import Link from "next/link"
export default function Findout() {
    const data = {
        title: 'Find out why leading businesses choose to do business with Victorious.',
        cards: [
            {
                image: '/case-study/image-3.png',
                logo: '/case-study/logo-2.png',
                color: '#F0B342',
                title: '#1 Ranking for "cargo shorts men"',

                link: '/',
                text: 'Gentry Dentistry',

            },
            {
                image: '/case-study/image-6.png',
                logo: '',
                color: '#EB1D27',
                title: '#1 Ranking for "cargo shorts men"',

                link: '/',
                text: 'L3 Funding',

            },
            {
                image: '/methods/Lychee-the-Label.png',
                logo: '/case-study/logo-1.png',
                color: '#26384F',
                title: '#1 Ranking for "music foundation"',
                link: '/',
                text: 'Gentry Dentistry',

            },
            {
                image: '/case-study/image-5.png',
                logo: '/case-study/logo-2.png',
                color: 'pink',
                title: '#1 Ranking for "cargo shorts men"',

                link: '/',
                text: 'Gentry Dentistry',

            },
        ],
    }
    return (
        <Container >
            <div className="w-full py-[100px]  flex justify-center items-center">
                <div className="w-[100%] max-w-[1200px] h-[70%]">
                    <p className="text-dark-red w-[80%] text-2xl lg:text-[37.30px] font-normal font-Amiri tracking-wide leading-[47.34px]">
                        {data.title}
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-[28px]">
                        {data.cards.map((card: any, i: any) => (
                            <div key={i} className="flex flex-col gap-[15px]">
                                <Cards key={i} className='h-[256px]' color={card.color} image={card.image} logo={card.logo} logoclass='top-[-35px] right-[-20px]' />
                                <p className='font-DM-sans text-sm lg:text-base font-normal'>{card.text}</p>
                                <Link href={card.link} className="text-dark-red text-xl lg:text-[2xl] font-bold font-DM-sans w-[100%]">
                                    {card.title}
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </Container>
    )
}