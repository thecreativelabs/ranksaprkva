'use client'
import Cards from '@components/case-study/cards'
import { useState, useEffect } from 'react';
import Nextbutton from '@components/methods/Nextbutton';
import Prevbutton from '@components/methods/PrevButton';

const data = {
    title: 'Take it from our case studies, SEO is a powerful marketing pipeline.',
    cards: [


        {
            image: './case-study/image-4.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'ForeSee Medical',

        },
        {
            image: './methods/Lychee-the-Label.png',
            logo: './case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-3.png',
            logo: './case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'ForeSee Medical',

        },
        {
            image: './case-study/image-6.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Gentry Dentistry',

        },
        {
            image: './methods/Lychee-the-Label.png',
            logo: './case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            text: 'Eden Health',

        },
        {
            image: './case-study/image-5.png',
            logo: './case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-1.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Eden Health',

        },
        {
            image: './methods/Lychee-the-Label.png',
            logo: './case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-2.png',
            logo: './case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'ForeSee Medical',

        },
        {
            image: './case-study/image-4.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Gentry Dentistry',

        },
        {
            image: './methods/Lychee-the-Label.png',
            logo: './case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-3.png',
            logo: './case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Eden Health',

        },
        {
            image: './case-study/image-6.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Gentry Dentistry',

        },
        {
            image: './methods/Lychee-the-Label.png',
            logo: './case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-5.png',
            logo: './case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Eden Health',

        },
        {
            image: './case-study/image-1.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'ForeSee Medical',

        },
        {
            image: './methods/Lychee-the-Label.png',
            logo: './case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-2.png',
            logo: './case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-4.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Gentry Dentistry',

        },
        {
            image: './methods/Lychee-the-Label.png',
            logo: './case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-3.png',
            logo: './case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-6.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'L3 Funding',

        },
        {
            image: './methods/Lychee-the-Label.png',
            logo: './case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-5.png',
            logo: './case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-1.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'L3 Funding',

        },
        {
            image: './methods/Lychee-the-Label.png',
            logo: './case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-2.png',
            logo: './case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-4.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Gentry Dentistry',

        },
        {
            image: './methods/Lychee-the-Label.png',
            logo: './case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-3.png',
            logo: './case-study/logo-2.png',
            color: '#F0B342',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-6.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'L3 Funding',

        },
        {
            image: './methods/Lychee-the-Label.png',
            logo: './case-study/logo-1.png',
            color: '#26384F',
            title: '#1 Ranking for "music foundation"',
            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-5.png',
            logo: './case-study/logo-2.png',
            color: 'pink',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Gentry Dentistry',

        },
        {
            image: './case-study/image-1.png',
            logo: '',
            color: '#EB1D27',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Eden Health',

        },
        {
            image: './methods/Lychee-the-Label.png',
            logo: './case-study/logo-1.png',
            color: 'yellow',
            title: '#1 Ranking for "music foundation"',
            text: 'L3 Funding',

        },
        {
            image: './case-study/image-2.png',
            logo: './case-study/logo-2.png',
            color: 'blue',
            title: '#1 Ranking for "cargo shorts men"',

            text: 'Gentry Dentistry',

        }
    ]
}

export default function SeoCases() {
    const [page, setPage] = useState(0);
    console.log(data.cards.length)
    const lastnum = parseInt((data.cards.length % 16 == 0) ? data.cards.length / 16 : (data.cards.length / 16) + 1)
    console.log(lastnum)
    return (
        <div className='flex justify-center items-center'>
            <div className='w-full lg:w-[75%] flex justify-center items-center flex-col'>
                <div className='w-full flex justify-center items-center mt-[70px]'>
                    <p className="text-dark-red w-[80%] lg:w-[unset] text-[27.30px] lg:text-[46px] font-normal font-Amiri tracking-wide leading-[35px] sm:leading-[67.34px]">
                        {data.title}
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-[25px] mt-[50px] lg:mt-[70px] gap-y-[70px]'>
                    {
                        [...Array(16)].map((_, i) => {
                            return (
                                (data.cards[i + page * 16] != null) && <div key={i} className='space-y-[12px]'>
                                    <Cards className='h-[256px]' color={data.cards[i + page * 16].color} image={data.cards[i + page * 16].image} logo={data.cards[i + page * 16].logo} />
                                    <p className='font-DM-sans text-sm lg:text-base font-normal'>{data.cards[i + page * 16].text}</p>
                                    <p className="text-dark-red text-xl lg:text-[2xl] font-bold font-DM-sans w-[100%]">
                                        {data.cards[i + page * 16].title}
                                    </p>

                                </div>
                            )
                        })
                    }
                </div>
                <div className='grid grid-cols-4 gap-[10px] ml-[20px]  justify-center items-center mt-[20px]'>
                    <div className='hover:cursor-pointer' onClick={() => setPage(page > 0 ? page - 1 : page)}>{(page > 0) ? <Prevbutton for="button" color="#ccc" className="h-[15px] lg:h-[20px] font-bold text-blue-300" /> : ""}</div>
                    <button className='font-bold text-[black]' >{page + 1}</button>
                    <button onClick={() => setPage((page < lastnum - 1) ? page + 1 : page)} className='text-[#CCC] ml-[-10px] font-bold hover:text-[black]' >{((page < lastnum - 1)) && page + 2}</button>

                    <div className='hover:cursor-pointer' onClick={() => setPage((page < lastnum - 1) ? page + 1 : page)}>{(page < lastnum - 1) ? <Nextbutton for="button" color="#ccc" className="h-[15px] lg:h-[20px] text-blue-300  font-bold hover:text-black" /> : ""}</div>
                </div>
            </div>
        </div>
    )
}