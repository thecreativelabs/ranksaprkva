import React from 'react';
import ServeCards from '@components/whoWeServe/serveCards';



const data = [
    {
        title: 'Industries',
        cards: [
            {
                icon: "",
                heading: "Link Building",
                content: "Increase organic traffic and boost rankings with backlinks.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Content Services",
                content: "Build topical authority to earn top-of-funnel trust.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Implementation",
                content: "Turn SEO insights into better search performance.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Link Building",
                content: "Increase organic traffic and boost rankings with backlinks.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Content Services",
                content: "Build topical authority to earn top-of-funnel trust.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Implementation",
                content: "Turn SEO insights into better search performance.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Link Building",
                content: "Increase organic traffic and boost rankings with backlinks.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Content Services",
                content: "Build topical authority to earn top-of-funnel trust.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Implementation",
                content: "Turn SEO insights into better search performance.",
                button: {
                    text: "",
                    url: "",
                },
            },
        ],
    },
    {
        title: 'Platforms',
        cards: [
            {
                icon: "",
                heading: "Link Building",
                content: "Increase organic traffic and boost rankings with backlinks.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Content Services",
                content: "Build topical authority to earn top-of-funnel trust.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Implementation",
                content: "Turn SEO insights into better search performance.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Link Building",
                content: "Increase organic traffic and boost rankings with backlinks.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Content Services",
                content: "Build topical authority to earn top-of-funnel trust.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Implementation",
                content: "Turn SEO insights into better search performance.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Link Building",
                content: "Increase organic traffic and boost rankings with backlinks.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Content Services",
                content: "Build topical authority to earn top-of-funnel trust.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Implementation",
                content: "Turn SEO insights into better search performance.",
                button: {
                    text: "",
                    url: "",
                },
            },
        ],
    },
    {
        title: 'Markets',
        cards: [
            {
                icon: "",
                heading: "Link Building",
                content: "Increase organic traffic and boost rankings with backlinks.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Content Services",
                content: "Build topical authority to earn top-of-funnel trust.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Implementation",
                content: "Turn SEO insights into better search performance.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Link Building",
                content: "Increase organic traffic and boost rankings with backlinks.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Content Services",
                content: "Build topical authority to earn top-of-funnel trust.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Implementation",
                content: "Turn SEO insights into better search performance.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Link Building",
                content: "Increase organic traffic and boost rankings with backlinks.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Content Services",
                content: "Build topical authority to earn top-of-funnel trust.",
                button: {
                    text: "",
                    url: "",
                },
            },
            {
                icon: "",
                heading: "Implementation",
                content: "Turn SEO insights into better search performance.",
                button: {
                    text: "",
                    url: "",
                },
            },
        ],
    },
]


export default function CardSection() {
    return (
        <div className="flex flex-col justify-center items-center">
            {
                data.map((data, i) => {
                    return (
                        <div key={i} className=' w-[100%]  flex justify-center items-center py-[70px] border-b-[1px] border-[#ccc]'>
                            <div className='w-[76%] max-w-[1200px]'>
                                <p className="sm:text-[50px] mt-[20px] text-[25px] sm:leading-[60px] leading-[30px] font-Amiri font-normal text-dark-red">

                                    {data.title}</p>
                                <div className='grid md:grid-cols-3 lg:grid-cols-4 py-[30px] sm:grid-cols-2 grid-cols-1 gap-[30px]'>
                                    {
                                        data.cards.map((card, i) => {
                                            return (
                                                <ServeCards key={i} data={card} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}