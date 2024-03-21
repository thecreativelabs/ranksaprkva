"use client";
import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Rating from "@components/case-study/rating";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

// Initialize Swiper core components
// SwiperCore.use([Pagination]);

// import 'swiper/css';
const data = {
  title: "REALIZING WHAT’S POSSIBLE WITH SEO CASE STUDIES",
  heading: "Your business deserves to shine, and we're here to make it happen.",
  leftcontent:
    "For businesses in the digital age, a strong online presence is fundamental for success — and SEO is the backbone of it all. Without effective SEO strategies, it’s all too easy to get lost in the search landscape. And if your business isn’t showing up on page one of search engine results pages (SERPs), then potential customers aren’t finding you.",
  rightcontent:
    "When it comes to making the right investment in your SEO success, case studies help you see what your business could achieve through a meaningful SEO agency partnership. Our success stories span a variety of markets and verticals, and in each case study, SEO plays a pivotal role in improving online visibility and driving organic traffic to businesses’ websites, whether it’s a small local law firm or an enterprise-level service provider. ",
  testimonial: {
    title: "Victorious Reviews",
    rating: 4.9,
    totalreviews: "90",
    cards: [
      {
        rating: 2.0,
        review:
          '"They seemed to prioritize the clients perception of them as a company over their actual results."',
        reviewby: "UX Prestidigitator, B2B ID Card Printing Platform",
        verified: true,
      },
      {
        rating: 4.5,
        review:
          "“The quality of work Victorious provides for the cost is really great — we get a lot for what we pay.”",
        reviewby: "UX Prestidigitator, B2B ID Card Printing Platform",
        verified: true,
      },
      {
        rating: 4.2,
        review:
          '"They seemed to prioritize the clients perception of them as a company over their actual results."',
        reviewby: "UX Prestidigitator, B2B ID Card Printing Platform",
        verified: true,
      },
      {
        rating: 3.8,
        review:
          "“The quality of work Victorious provides for the cost is really great — we get a lot for what we pay.”",
        reviewby: "UX Prestidigitator, B2B ID Card Printing Platform",
        verified: true,
      },
      {
        rating: 3.3,
        review:
          '"They seemed to prioritize the clients perception of them as a company over their actual results."',
        reviewby: "UX Prestidigitator, B2B ID Card Printing Platform",
        verified: true,
      },
      {
        rating: 1.4,
        review:
          "“The quality of work Victorious provides for the cost is really great — we get a lot for what we pay.”",
        reviewby: "UX Prestidigitator, B2B ID Card Printing Platform",
        verified: true,
      },
      {
        rating: 4.5,
        review:
          '"They seemed to prioritize the clients perception of them as a company over their actual results."',
        reviewby: "UX Prestidigitator, B2B ID Card Printing Platform",
        verified: true,
      },
      {
        rating: 4.4,
        review:
          '"They seemed to prioritize the clients perception of them as a company over their actual results."',
        reviewby: "UX Prestidigitator, B2B ID Card Printing Platform",
        verified: true,
      },
      {
        rating: 2.0,
        review:
          '"They seemed to prioritize the clients perception of them as a company over their actual results."',
        reviewby: "UX Prestidigitator, B2B ID Card Printing Platform",
        verified: true,
      },
      {
        rating: 2.0,
        review:
          '"They seemed to prioritize the clients perception of them as a company over their actual results."',
        reviewby: "UX Prestidigitator, B2B ID Card Printing Platform",
        verified: true,
      },
      {
        rating: 2.0,
        review:
          '"They seemed to prioritize the clients perception of them as a company over their actual results."',
        reviewby: "UX Prestidigitator, B2B ID Card Printing Platform",
        verified: true,
      },
    ],
  },
};
export default function Review() {
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  };

  return (
    <div className="h-[150vh] w-full min-h-[1300px] sm:max-h-[1500px] max-h-1500px flex flex-col justify-center items-center">
      {/* Content */}
      <div className="w-full sm:h-[100vh] max-w-[1200px] max-h-[700px] px-4 lg:px-0 lg:w-4/5 flex flex-col justify-center">
        {/* Title and heading */}
        <p className="text-light-red text-sm sm:text-sm font-bold font-DM-sans uppercase tracking-widest">
          {data.title}
        </p>
        <p className="text-dark-red sm:w-[70%] w-[100%] text-xxl lg:text-xxxxl font-normal font-Amiri mt-8 lg:mt-6 leading-[32px] lg:leading-relaxed">
          {data.heading}
        </p>
        {/* Left and right content */}
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-12 gap-6 lg:gap-12">
          <p className="text-dark-red text-base lg:text-xl font-normal font-DM-Sans leading-normal lg:max-w-[48%]">
            {data.leftcontent}
          </p>
          <p className="text-dark-red text-base lg:text-xl font-normal font-DM-Sans leading-normal lg:max-w-[47%]">
            {data.rightcontent}
          </p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="w-full pb-[20px] max-h-fit flex flex-col justify-center items-center bg-[#f9f9f9] mt-8 lg:mt-12">
        {/* Title, rating, and total reviews */}
        <div className="flex max-w-[1200px] w-full mt-[70px] justify-center items-center ">
          <div className="flex sm:flex-row flex-col w-[78%] gap-[20px] items-center">
            <p className="text-2xl font-['Roboto'] font-normal">
              {data.testimonial.title}
            </p>
            <div className="flex items-center gap-[10px]">
              <p className="text-xl font-['Roboto'] font-normal">
                {data.testimonial.rating}
              </p>
              <div>
                <Rating
                  rating={data.testimonial.rating}
                  className="text-light-red"
                />
              </div>
              <p className="text-xs text-light-red">
                {data.testimonial.totalreviews} reviews
              </p>
            </div>
          </div>
        </div>

        {/* Swiper container */}
        <div className="h-[65%] max-w-[1250px] w-full mt-[20px] relative justify-center items-center flex">
          <div className="w-[80%] flex">
            <button
              title="title"
              type="button"
              className="mr-[5px] mt-[-20px]"
              onClick={handlePrev}
            >
              {" "}
              <IoIosArrowBack className="h-[30px] w-[30px]  text-light-red" />{" "}
            </button>
            <Swiper
              ref={swiperRef}
              // spaceBetween={25}
              slidesPerView={4}
              loop={true}
              // pagination={{ clickable: true }}

              className="h-[100%] flex w-[95%] p-52  relative"
              breakpoints={breakpoints}
            >
              {data.testimonial.cards.map((card, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className=" bg-white hover:shadow-xl shadow p-4  flex flex-col mb-10 ">
                      <div className="flex gap-[10px] h-[40px] items-center ">
                        <p className="text-xl font-['Roboto'] font-normal">
                          {card.rating}
                        </p>
                        <div className="h-[20px]">
                          <Rating
                            rating={card.rating}
                            className="text-light-red"
                          />
                        </div>
                      </div>
                      <div className="text-[#17313B] mt-[20px] flex flex-col justify-evenly">
                        <p className='text-sm font-["Roboto"] h-[54px] line-clamp-3 truncate overflow-hidden overflow-ellipsis whitespace-normal '>
                          {" "}
                          {card.review}{" "}
                        </p>
                        <p className='text-xs text-[#6A7A7E] mt-[15px] font-["Roboto"]'>
                          {card.reviewby}
                        </p>
                        {card.verified && (
                          <div className="flex relative mt-[15px]">
                            <IoMdCheckmarkCircleOutline className="text-light-red" />
                            <p className=' ml-[10px] text-sm text-[#6A7A7E] capitalize font-["Roboto"]'>
                              Verified review
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button
              title="title"
              type="button"
              className="ml-[5px] mt-[-20px]"
              onClick={handleNext}
            >
              <IoIosArrowForward className="h-[30px] w-[30px]  text-light-red" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
