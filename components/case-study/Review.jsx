'use client'
import Rating from '@components/case-study/rating'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Prevbutton from '@components/methods/PrevButton';
import Nextbutton from '@components/methods/Nextbutton';
import { useSwiper } from 'swiper/react';

// import 'swiper/css';
const data = {
    title: "REALIZING WHAT’S POSSIBLE WITH SEO CASE STUDIES",
    heading: "Your business deserves to shine, and we're here to make it happen.",
    leftcontent: 'For businesses in the digital age, a strong online presence is fundamental for success — and SEO is the backbone of it all. Without effective SEO strategies, it’s all too easy to get lost in the search landscape. And if your business isn’t showing up on page one of search engine results pages (SERPs), then potential customers aren’t finding you.',
    rightcontent: "When it comes to making the right investment in your SEO success, case studies help you see what your business could achieve through a meaningful SEO agency partnership. Our success stories span a variety of markets and verticals, and in each case study, SEO plays a pivotal role in improving online visibility and driving organic traffic to businesses’ websites, whether it’s a small local law firm or an enterprise-level service provider. ",
    testimonial: {
        title: 'Victorious Reviews',
        rating: 4.9,
        totalreviews: '90',
        cards: [
            {
                rating: 2.0,
                review: '"They seemed to prioritize the clients perception of them as a company over their actual results."',
                reviewby: 'UX Prestidigitator, B2B ID Card Printing Platform',
                verified: true
            },
            {
                rating: 4.5,
                review: '“The quality of work Victorious provides for the cost is really great — we get a lot for what we pay.”',
                reviewby: 'UX Prestidigitator, B2B ID Card Printing Platform',
                verified: true
            },
            {
                rating: 4.2,
                review: '"They seemed to prioritize the clients perception of them as a company over their actual results."',
                reviewby: 'UX Prestidigitator, B2B ID Card Printing Platform',
                verified: true
            },
            {
                rating: 3.8,
                review: '“The quality of work Victorious provides for the cost is really great — we get a lot for what we pay.”',
                reviewby: 'UX Prestidigitator, B2B ID Card Printing Platform',
                verified: true
            },
            {
                rating: 3.3,
                review: '"They seemed to prioritize the clients perception of them as a company over their actual results."',
                reviewby: 'UX Prestidigitator, B2B ID Card Printing Platform',
                verified: true
            },
            {
                rating: 1.4,
                review: '“The quality of work Victorious provides for the cost is really great — we get a lot for what we pay.”',
                reviewby: 'UX Prestidigitator, B2B ID Card Printing Platform',
                verified: true
            },
            {
                rating: 4.5,
                review: '"They seemed to prioritize the clients perception of them as a company over their actual results."',
                reviewby: 'UX Prestidigitator, B2B ID Card Printing Platform',
                verified: true
            },
            {
                rating: 4.4,
                review: '"They seemed to prioritize the clients perception of them as a company over their actual results."',
                reviewby: 'UX Prestidigitator, B2B ID Card Printing Platform',
                verified: true
            },
            {
                rating: 2.0,
                review: '"They seemed to prioritize the clients perception of them as a company over their actual results."',
                reviewby: 'UX Prestidigitator, B2B ID Card Printing Platform',
                verified: true
            },
            {
                rating: 2.0,
                review: '"They seemed to prioritize the clients perception of them as a company over their actual results."',
                reviewby: 'UX Prestidigitator, B2B ID Card Printing Platform',
                verified: true
            },
            {
                rating: 2.0,
                review: '"They seemed to prioritize the clients perception of them as a company over their actual results."',
                reviewby: 'UX Prestidigitator, B2B ID Card Printing Platform',
                verified: true
            },

        ]
    }
}

export default function Review() {
    const swiper = useSwiper();
    const swiperRef = useRef(null);
    const handlePrev = () => {
        // Simulate a click on the hidden button
        if (swiperRef.current && swiperRef.current.swiper) {
            // Access swiper instance and perform slideNext action
            swiperRef.current.swiper.slidePrev();
        }
    };
    const handleNext = () => {
        // Simulate a click on the hidden button
        if (swiperRef.current && swiperRef.current.swiper) {
            // Access swiper instance and perform slideNext action
            swiperRef.current.swiper.slideNext();
        }
    };
    return (
        <div className="min-h-[150vh] w-full flex flex-col justify-center items-center">
            <div className="w-full sm:h-[100vh] px-4 lg:px-0 lg:w-4/5 flex flex-col justify-center">
                <p className="text-light-red  text-sm sm:text-sm font-bold font-DM-sans uppercase tracking-widest">
                    {data.title}
                </p>
                <p className="text-dark-red sm:w-[70%] w-[100%] text-xxl lg:text-xxxxl font-normal font-Amiri mt-8 lg:mt-6 leading-[32px] lg:leading-relaxed">
                    {data.heading}
                </p>
                <div className="flex flex-col lg:flex-row mt-8 lg:mt-12 gap-6 lg:gap-12">
                    <p className="text-dark-red text-base lg:text-xl font-normal font-DM-Sans leading-normal lg:max-w-[48%]">
                        {data.leftcontent}
                    </p>
                    <p className="text-dark-red text-base lg:text-xl font-normal font-DM-Sans leading-normal lg:max-w-[47%]">
                        {data.rightcontent}
                    </p>
                </div>
            </div>
            <div className="w-full lg:h-[60vh]  flex flex-col bg-[#f9f9f9] mt-8 lg:mt-12">
                <div className='flex w-full mt-[70px] justify-center items-center '>
                    <div className='flex w-[65%] gap-[20px]  items-center'>
                        <p className="text-2xl font-['Roboto'] font-normal">
                            {data.testimonial.title}
                        </p>
                        <p className="text-xl font-['Roboto'] font-normal">
                            {data.testimonial.rating}
                        </p>
                        <div>
                            <Rating rating={data.testimonial.rating} />
                        </div>
                        <p className='text-xs text-light-red'>
                            {data.testimonial.totalreviews} reviews
                        </p>
                    </div>
                </div>
                <div className='h-[65%] w-full mt-[20px] relative justify-center items-center flex'>
                    <div className='w-[68%] flex'>
                        <button className='mr-[5px]' onClick={handlePrev}> <svg fill={"#C42A1C"} height="30px" width="30px" viewBox="-29.7 -29.7 389.40 389.40" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" transform="rotate(180)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path>
                            </g>
                        </svg></button>
                        <Swiper
                            ref={swiperRef}

                            spaceBetween={25}
                            slidesPerView={4}
                            // navigation
                            loop={true}
                            pagination={{ clickable: true }}

                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            className="h-[100%] flex w-[95%] p-52  relative"
                        >



                            {
                                data.testimonial.cards.map((card, i) => {
                                    return (
                                        <SwiperSlide key={i} >
                                            <div className=' bg-white hover:shadow-xl shadow p-4  flex flex-col mb-10 '>
                                                <div className='flex gap-[10px] h-[40px] items-center '>
                                                    <p className="text-xl font-['Roboto'] font-normal">
                                                        {card.rating}
                                                    </p>
                                                    <div className='h-[20px]'>
                                                        <Rating rating={card.rating} />
                                                    </div>
                                                </div>
                                                <div className='text-[#17313B] mt-[20px] flex flex-col justify-evenly'>
                                                    <p className='text-sm font-["Roboto"] h-[54px] line-clamp-3 truncate overflow-hidden overflow-ellipsis whitespace-normal '> {card.review} </p>
                                                    <p className='text-xs text-[#6A7A7E] mt-[15px] font-["Roboto"]'>{card.reviewby}</p>
                                                    {
                                                        card.verified && <div className='flex relative'>
                                                            <svg className='absolute bottom-[2px]' width="14px" height="14px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#C42A1C"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.04"></g><g id="SVGRepo_iconCarrier"> <path fill="#C42A1C" fill-rule="evenodd" d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"></path> </g></svg>
                                                            <p className=' ml-[21px] text-sm text-[#6A7A7E] capitalize mt-[15px] font-["Roboto"]'>Verified review</p>
                                                        </div>
                                                    }

                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }


                        </Swiper>
                        <button className='ml-[5px]' onClick={handleNext}><svg fill={"#C42A1C"} height="30px" width="30px" viewBox="-29.7 -29.7 389.40 389.40" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path>
                            </g>
                        </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}