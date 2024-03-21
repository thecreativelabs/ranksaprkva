'use client'
import Cards from '@components/case-study/cards';
import { useState } from 'react';
import Nextbutton from '@components/methods/Nextbutton';
import Prevbutton from '@components/methods/PrevButton';
import Link from 'next/link';



const data = {
    title: 'Take it from our case studies, SEO is a powerful marketing pipeline.',
    cards: [


        {
            image: '/case-study/image-4.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/case-study/abc',
            text: 'ForeSee Medical',

        },
        {
            image: '/methods/Lychee-the-Label.png',
            logo: '/case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-3.png',
            logo: '/case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'ForeSee Medical',

        },
        {
            image: '/case-study/image-6.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/methods/Lychee-the-Label.png',
            logo: '/case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            link:'/',
            text: 'Eden Health',

        },
        {
            image: '/case-study/image-5.png',
            logo: '/case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-1.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Eden Health',

        },
        {
            image: '/methods/Lychee-the-Label.png',
            logo: '/case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-2.png',
            logo: '/case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'ForeSee Medical',

        },
        {
            image: '/case-study/image-4.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/methods/Lychee-the-Label.png',
            logo: '/case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-3.png',
            logo: '/case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Eden Health',

        },
        {
            image: '/case-study/image-6.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/methods/Lychee-the-Label.png',
            logo: '/case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-5.png',
            logo: '/case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Eden Health',

        },
        {
            image: '/case-study/image-1.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'ForeSee Medical',

        },
        {
            image: '/methods/Lychee-the-Label.png',
            logo: '/case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-2.png',
            logo: '/case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-4.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/methods/Lychee-the-Label.png',
            logo: '/case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-3.png',
            logo: '/case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-6.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'L3 Funding',

        },
        {
            image: '/methods/Lychee-the-Label.png',
            logo: '/case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-5.png',
            logo: '/case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-1.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'L3 Funding',

        },
        {
            image: '/methods/Lychee-the-Label.png',
            logo: '/case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-2.png',
            logo: '/case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-4.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/methods/Lychee-the-Label.png',
            logo: '/case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-3.png',
            logo: '/case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-6.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'L3 Funding',

        },
        {
            image: '/methods/Lychee-the-Label.png',
            logo: '/case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-5.png',
            logo: '/case-study/logo-2.png',
            color: 'pink',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Gentry Dentistry',

        },
        {
            image: '/case-study/image-1.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Eden Health',

        },
        {
            image: '/methods/Lychee-the-Label.png',
            logo: '/case-study/logo-1.png',
            color: 'yellow',
            title: '#1 Ranking for "music foundation"',
            link:'/',
            text: 'L3 Funding',

        },
        {
            image: '/case-study/image-2.png',
            logo: '/case-study/logo-2.png',
            color: 'blue',
            title: '#1 Ranking for "cargo shorts men"',

            link:'/',
            text: 'Gentry Dentistry',

        }
    ]
}

export default function SeoCases() {
    const [page, setPage] = useState<number>(0);
    const pageSize: number = 16;
    const lastPage: number = Math.ceil(data.cards.length / pageSize);

    const handlePrevPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 0));
    };

    const handleNextPage = () => {
        setPage(prevPage => Math.min(prevPage + 1, lastPage - 1));
    };

    return (
        <div className='flex justify-center items-center'>
            <div className='w-full relative min-h-fit max-w-[1200px] lg:w-[75%] flex justify-center items-center flex-col'>
                <div className='w-full flex m justify-center items-center mt-[70px]'>
                    <p className="text-dark-red w-[80%] lg:w-[unset] text-[27.30px] lg:text-[46px] font-normal font-Amiri tracking-wide leading-[35px] sm:leading-[67.34px]">
                        {data.title}
                    </p>
                </div>
                <div className='grid grid-cols-1 min-h-[] lg:grid-cols-4 gap-[25px] mt-[50px] lg:mt-[70px] sm:mb-[0px] mb-[0px] gap-y-[70px]'>
                    {data.cards.slice(page * pageSize, (page + 1) * pageSize).map((card, index) => (
                        <div key={index} className='space-y-[12px]'>
                            <Cards className='h-[256px]' color={card.color} image={card.image} logo={card.logo} logoclass='top-[-35px] right-[-20px]' />
                            <p className='font-DM-sans text-sm lg:text-base font-normal'>{card.text}</p>
                            <Link href={card.link} className="text-dark-red text-xl lg:text-[2xl] font-bold font-DM-sans w-[100%]">
                                {card.title}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className='grid grid-cols-4 absolute bottom-[-50px] gap-[10px] ml-[20px] justify-center items-center mt-[50px]'>
                    <div className='hover:cursor-pointer' onClick={handlePrevPage}>
                        {page > 0 && <Prevbutton for="button" color="#ccc" className="h-[15px] lg:h-[20px] font-bold text-blue-300" />}
                    </div>
                    <button className='font-bold text-[black]'>{page + 1}</button>
                    <button onClick={handleNextPage} className='text-[#CCC] ml-[-10px] font-bold hover:text-[black]'>
                        {page < lastPage - 1 && page + 2}
                    </button>
                    <div className='hover:cursor-pointer' onClick={handleNextPage}>
                        {page < lastPage - 1 && <Nextbutton for="button" color="#ccc" className="h-[15px] lg:h-[20px] text-blue-300 font-bold hover:text-black" />}
                    </div>
                </div>
            </div>
        </div>
    );
}
