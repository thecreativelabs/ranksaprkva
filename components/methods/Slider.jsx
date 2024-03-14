'use client'
import UpArrow from "@components/ui/icons/upArrow";
import CircleArrow from '@components/ui/icons/circleButtonArrow'
import Script from "next/script";
import { Swiper, SwiperSlide } from 'swiper/react';
import Nextbutton from '@components/methods/Nextbutton'
import PrevButton from '@components/methods/PrevButton'
import 'swiper/css';
import Image from "next/image";
const data = [
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
];
export default function Slider() {
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
      <div className="w-full h-[100%] bg-transparent">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          speed={200}
          className="h-[100%] relative"
        >
          {
            data.map((dataa, i) => {
              return (
                <SwiperSlide key={i} className="">
                  <div className="flex sm:flex-row flex-col w-full h-full justify-center  items-center">
                    <div
                      className={` h-[60%] sm:mt-[0px] mt-[50px] sm:w-[45%] w-[80%] flex justify-center relative items-center bg-cover`}
                      style={{
                        backgroundImage: `url(${'./methods/Vector-3.png'})`,
                        backgroundColor: dataa.color
                      }}>
                      
                      <Image height={200} width={200} alt="image" src={dataa.image} className="h-[200px] max-w-fit"  ></Image>
                      <Image height={100} width={100} alt="image"
                        src={dataa.logo}
                        className="absolute h-[100px] max-w-fit top-[-35px] right-[-35px]"></Image>
                     
                    </div>
                    <div className="sm:w-[40%] w-[80%] ml-[30px] gap-y-[30px] flex flex-col justify-evenly items-center">
                      <div className="w-full ml- flex">
                        <div className="flex w-1/2 flex-col border-r-[1px] ml-[-10px] pb-2 border-[#dcdcdc] justify-center items-center">
                          <div className="flex w-[50%] justify-center items-center">
                            <UpArrow
                              className="h-[30px] relative w-[30px] font-bold"
                              color={dataa.color}
                              weight="15"
                            />
                            <p
                              className="font-bold text-xxxl font-DM-sans"
                              style={{ color: dataa.color }}>
                              {dataa.counter[0].number.text}
                            </p>
                          </div>
                          <p className="text-sm ml-[8px] font-DM-sans font-normal tracking-wider">
                            {dataa.counter[0].text}
                          </p>
                        </div>
                        <div className="flex w-1/2 flex-col pb-2 justify-center items-center">
                          <div className="flex justify-center items-center">

                            <UpArrow
                              className="h-[30px] relative w-[30px] font-bold"
                              color={dataa.color}
                              weight="15"
                            />
                            <p
                              className="font-bold text-xxxl   font-DM-sans"
                              style={{ color: dataa.color }}>
                              {dataa.counter[1].number.text}
                            </p>
                          </div>
                          <p className="text-sm ml-[8px]  font-DM-sans font-normal tracking-wider">
                            {dataa.counter[1].text}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-dark-red sm:text-xxl text-xl font-bold font-DM-sans w-[100%]">
                          {dataa.content}
                        </p>
                        <div className="text-sm justify-start w-[50%] font-bold mt-[20px]  uppercase flex tracking-widest gap-[15px] items-center text-light-red">
                          {dataa.button}
                          <button className="mt-[-2px] w-[38px] rounded-[50%] bg-light-red hover:bg-black">
                            <CircleArrow
                              className=""
                              style={{ color: 'black' }}
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
            })
          }
          <div className="h-[50px] z-20 absolute sm:bottom-4 bottom-2 right-10">
            <PrevButton/>
            <Nextbutton />
          </div>
        </Swiper>

      </div >
     


    </>
  )
}