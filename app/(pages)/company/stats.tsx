"use client";
import { useState } from "react";
import Container from "@components/Container";
import UpArrow from "@components/ui/icons/upArrow";
import CircleArrow from "@components/ui/icons/circleButtonArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import Nextbutton from "@components/ui/icons/Nextbutton";
import PrevButton from "@components/ui/icons/PrevButton";
import "swiper/css";
import Image from "next/image";

interface Counter {
  number: {
    Icon: JSX.Element;
    text: string;
  };
  text: string;
}

interface Data {
  image: string;
  logo: string;
  color: string;
  counter: Counter[];
  content: string;
  button: string;
}

const data: Data[] = [
  {
    image: "/homepage/Everlance-White.png",
    logo: "/homepage/award_global-search-2021-winner-best-use-search-fashion.png",
    color: "#00a88f",
    counter: [
      {
        number: {
          Icon: <UpArrow />,
          text: "270%",
        },
        text: "Organic Traffic",
      },
      {
        number: {
          Icon: <UpArrow />,
          text: "+55",
        },
        text: "Top 3 Keywords",
      },
    ],
    content:
      "Learn how featured snippets helped Eden Health grow organic traffic by 200%",
    button: "Read case study",
  },
];

const Stats = () => {
  return (
    <>
      <style>
        {`
          .swiper-button {
            color: black;
            background-color: white;
            height: 60px;
            width: 50px;
          }
          `}
      </style>
      <div className="w-full h-auto md:h-[550px] mt-20 mb-20 bg-graybg">
        <Container>
          <div className="w-full h-auto md:h-[550px]">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              speed={1000}
              className="h-[100%] relative"
              style={{ transitionDuration: "2s" }}
            >
              {data.map((dataa, i) => {
                return (
                  <SwiperSlide key={i} className="">
                    <div className="flex sm:flex-row flex-col w-full h-full justify-center mb-[30px] items-center">
                      <div
                        className={` h-[60%] sm:mt-[0px] mt-[80px] md:mt-[30px] sm:w-[45%] w-[80%] flex justify-center relative items-center bg-cover`}
                        style={{
                          backgroundImage: `url(${"./methods/Vector-3.png"})`,
                          backgroundColor: dataa.color,
                        }}
                      >
                        <div>
                          <Image
                            height={60}
                            width={300}
                            alt="image"
                            src={dataa.image}
                            className="h-[150px] py-[60px] px-16 md:h-auto max-w-fit"
                          />
                        </div>
                      </div>
                      <div className="sm:w-[48%] w-[80%] ml-0 md:ml-[30px] gap-y-[30px] flex flex-col justify-evenly items-center">
                        <div className="w-full md:ml-[0px] flex">
                          <div className="flex md:mt-4 mt-6 w-1/2 flex-col md:border-r-[1px] border-r-[1px] px-6 pb-2 border-[#dcdcdc] justify-center items-center">
                            <div className="flex w-auto md:mt-0 mt-3 justify-center items-center">
                              <UpArrow
                                className="h-[30px] relative w-[30px] font-bold"
                                color={dataa.color}
                                weight="15"
                              />
                              <p
                                className="font-bold text-xxl md:text-xxxl font-DM-sans"
                                style={{ color: dataa.color }}
                              >
                                {dataa.counter[0].number.text}
                              </p>
                            </div>
                            <p className="text-sm w-auto ml-[10px] md:ml-[8px] font-DM-sans font-normal tracking-wide">
                              {dataa.counter[0].text}
                            </p>
                          </div>
                          <div className="flex md:mt-4 mt-6 w-1/2 flex-col pb-2 px-6 border-[#dcdcdc] justify-center items-center">
                            <div className="flex w-auto md:mt-0 mt-3 justify-center items-center">
                              <UpArrow
                                className="h-[30px] relative w-[30px] font-bold"
                                color={dataa.color}
                                weight="15"
                              />
                              <p
                                className="font-bold text-xxl md:text-xxxl  font-DM-sans"
                                style={{ color: dataa.color }}
                              >
                                {dataa.counter[1].number.text}
                              </p>
                            </div>
                            <p className="text-sm w-auto md:w-auto ml-[10px] md:ml-[8px] font-DM-sans text-center md:text-start font-normal tracking-wide">
                              {dataa.counter[1].text}
                            </p>
                          </div>
                        </div>
                        <div className="text-left">
                          <p className="text-dark-red text-left sm:text-xxl md:text-xxl tracking-wider leading-7 md:leading-10 text-md font-bold font-DM-sans w-[100%]">
                            {dataa.content}
                          </p>
                          <div className="md:text-sm text-xs justify-start w-auto font-bold mt-[20px] uppercase flex tracking-wide gap-[15px] items-center text-light-red">
                            {dataa.button}
                            <button
                              type="button"
                              title="button"
                              className="mt-[-2px] w-[38px] rounded-[50%] bg-light-red hover:bg-black"
                            >
                              <CircleArrow
                                className=""
                                style={{ color: "black" }}
                                bg="light-pink"
                                color="white"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Stats;
