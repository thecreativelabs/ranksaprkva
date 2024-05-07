"use client";
import { useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import UpArrow from "@components/ui/icons/upArrow";
import CircleArrow from "@components/ui/icons/circleButtonArrow";
import Script from "next/script";
import { Swiper, SwiperSlide } from "swiper/react";
import Nextbutton from "@components/methods/Nextbutton";
import PrevButton from "@components/methods/PrevButton";
import "swiper/css";
import Image from "next/image";
import Bgimg from "../../../public/methods/Vector-3.png";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FaArrowUp } from "react-icons/fa";
import ImageDecorative from "../ImageDecorative";
import Button from "../Button";

export default function Slider(props: any) {
  const data =
    props.data == null || props == null
      ? [
          {
            image: "/methods/Lychee-the-Label.png",
            logo: "/methods/logo4.png",
            color: "#F6917C",
            counter: [
              {
                number: {
                  Icon: <UpArrow />,
                  text: "1,122%",
                },
                text: "Page One Keywords",
              },
              {
                number: {
                  Icon: <UpArrow />,
                  text: "214%",
                },
                text: "YoY Monthly Revenue",
              },
            ],
            content:
              "See how Victorious helped Lychee The Label increase monthly revenue by 214%.",
            button: "Read case study",
          },
          {
            image: "/methods/Lychee-the-Label.png",
            logo: "/methods/logo2.png",
            color: "#00a88f",
            counter: [
              {
                number: {
                  Icon: <UpArrow />,
                  text: "1,122%",
                },
                text: "Page One Keywords",
              },
              {
                number: {
                  Icon: <UpArrow />,
                  text: "214%",
                },
                text: "YoY Monthly Revenue",
              },
            ],
            content:
              "See how Victorious helped Lychee The Label increase monthly revenue by 214%.",
            button: "Read case study",
          },
        ]
      : props.data;
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
      <div className="w-full h-auto md:h-[400px] bg-transparent">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          speed={350}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          className="h-[100%] relative"
        >
          {data.map((dataa: any, i: any) => {
            return (
              <SwiperSlide key={i} className="">
                <div className="flex sm:flex-row flex-col w-full h-full justify-between  items-center">
                  <div
                    className={`rounded-3xl h-[90%] sm:mt-[10px] mt-[45px] sm:w-[50%] w-full flex justify-center relative items-center bg-cover`}
                    style={{
                      backgroundImage: `url(${"./methods/Vector-3.png"})`,
                      backgroundColor: dataa.color,
                    }}
                  >
                    <Image
                      height={200}
                      width={200}
                      alt="image"
                      src={dataa.image}
                      className="h-[200px] max-w-fit"
                    ></Image>
                  </div>
                  <div className="sm:w-[40%] space-y-[30px] flex flex-col justify-evenly items-center">
                    <div className="w-full flex">
                      <div className="flex w-1/2 flex-col border-r-[1px] ml-[-10px] pb-2 border-[#dcdcdc] justify-center items-center">
                        <div className="flex justify-center items-center">
                          {dataa.Icon != null || dataa.Icon != "" ? (
                            <FaArrowUp
                              className="h-[30px] relative w-[30px] font-bold"
                              style={{ color: dataa.color }}
                            />
                          ) : (
                            ""
                          )}
                          <p
                            className="font-bold text-xxxl font-primary"
                            style={{ color: dataa.color }}
                          >
                            {dataa.counter[0].number.text}
                          </p>
                        </div>
                        <p className="text-sm ml-[8px] font-primary font-normal tracking-wider">
                          {dataa.counter[0].text}
                        </p>
                      </div>
                      <div className="flex w-1/2 flex-col pb-2 justify-center items-center">
                        <div className="flex justify-center items-center">
                          {dataa.Icon != null || dataa.Icon != "" ? (
                            <FaArrowUp
                              className="h-[30px] relative w-[30px] font-bold"
                              style={{ color: dataa.color }}
                            />
                          ) : (
                            ""
                          )}
                          <p
                            className="font-bold text-xxxl   font-primary"
                            style={{ color: dataa.color }}
                          >
                            {dataa.counter[1].number.text}
                          </p>
                        </div>
                        <p className="text-sm ml-[8px]  font-primary font-normal tracking-wider">
                          {dataa.counter[1].text}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-dark-red sm:text-xxl text-xl font-bold font-primary w-[100%]">
                        {dataa.content}
                      </p>
                      <Button props={{ text: dataa.button }} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="h-[50px] z-20 absolute sm:bottom-4 bottom-2 right-10">
            <PrevButton />
            <Nextbutton />
          </div>
        </Swiper>
      </div>
    </>
  );
}
