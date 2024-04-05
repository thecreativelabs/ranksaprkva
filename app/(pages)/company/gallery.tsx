"use client";

import Container from "@components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import NextButton from "@components/ui/icons/Nextbutton";
import PrevButton from "@components/ui/icons/PrevButton";
import "swiper/css";
import Image from "next/image";

const data = {
  heading: "Together, We Make It Happen",
  item: [
    {
      image: "/company/team-slider-01.png",
    },
    {
      image: "/company/team-slider-02.png",
    },
    {
      image: "/company/team-slider-03.png",
    },
    {
      image: "/company/team-slider-04.png",
    },
  ],
};

const Slider = () => {
  return (
    <div className="w-full mt-20 mb-20">
      <Container>
        <p className="mt-8 tracking-wider text-dark-red font-bold leading-6 py-6 text-lg md:text-2xl w-auto md:w-[70%]">
          {data.heading}
        </p>
        <div className="w-full h-auto md:h-[700px]">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            speed={1000}
            className="h-full relative"
            style={{ transitionDuration: "2s" }}
          >
            {data.item.map((items, i) => {
              return (
                <SwiperSlide key={i} className="">
                  <div className="flex sm:flex-row flex-col w-full h-[300px] md:h-[600px] justify-center mb-[30px]">
                    <Image
                      layout="responsive"
                      width={800}
                      height={500}
                      alt="image"
                      src={items.image}
                      className="object-cover"
                    ></Image>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="absolute bottom-1 left-0 md:bottom-[35px] md:left-10 z-10 flex items-center">
              <PrevButton className="w-16 h-16 mr-4 rounded-full bg-slate-200" />
              <NextButton className="w-16 h-16 rounded-full bg-slate-200" />
            </div>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Slider;
