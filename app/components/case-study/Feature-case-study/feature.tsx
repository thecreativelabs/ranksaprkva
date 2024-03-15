'use client'
import FeatureCard from './featureCard';



const data = {
    title: 'Featured Case Studies',
    cards: [
        {
            image: '/case-study/image-1.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',
            button: {
                text: 'READ CASE STUDY',
                url: '',
            },
        },
        {
            image: '/methods/Lychee-the-Label.png',
            logo: '/case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            button: {
                text: 'READ CASE STUDY',
                url: '',
            },
        },
        {
            image: '/case-study/image-2.png',
            logo: '/case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',
            button: {
                text: 'READ CASE STUDY',
                url: '',
            },
        },
    ],
};

export default function Feature_case_Study() {
    return (
        <div className="w-full py-[100px] bg-[#F0F0ED] flex justify-center items-center">
            <div className="w-[80%] max-w-[1200px] h-[70%]">
                <p className="text-dark-red text-2xl lg:text-[37.30px] font-normal font-Amiri tracking-wide leading-[67.34px]">
                    {data.title}
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {data.cards.map((card, i) => (
                        <FeatureCard key={i} data={card} />
                    ))}
                </div>
            </div>
        </div>
    );
}
