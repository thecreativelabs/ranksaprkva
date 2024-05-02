import React from "react";
import ServeCards from "@components/whoWeServe/serveCards";
import { client } from "@sanity/lib/client";
import { Vertical } from "@/types/sanity";
import Growth from "@components/ui/icons/Growth";
import { urlForImage } from "@sanity/lib/image";
import Link from "next/link";

export default async function CardSection() {
  const data = (await client.fetch(`*[_type == "vertical"]`)) as Vertical[];

  const verticals = [
    {
      name: "Industry",
      cards: data.filter((card) => card.type === "industry"),
    },
    {
      name: "Platform",
      cards: data.filter((card) => card.type === "platform"),
    },
    { name: "Market", cards: data.filter((card) => card.type === "market") },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      {verticals.map((vertical, i) => (
        <div
          key={i}
          className=" w-[100%]  flex justify-center items-center py-[70px] border-b-[1px] border-[#ccc]"
        >
          <div className="w-[76%] max-w-[1200px]">
            <p className="sm:text-[50px] mt-[20px] text-[25px] sm:leading-[60px] leading-[30px] font-Amiri font-normal text-dark-red">
              {vertical.name}
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 py-[30px] sm:grid-cols-2 grid-cols-1 gap-[30px]">
              {vertical.cards?.map((card, i) => {
                return (
                  <Link
                    href={`/who-we-serve/${card.pageMeta?.slug?.current}`}
                    key={i}
                  >
                    <div className="bg-graybg rounded-3xl pl-4 pr-3 py-6 flex min-w-fit justify-center items-center min-h-fit  ">
                      <div className="flex flex-col h-full w-[90%] gap-y-4 items-start">
                        <div className="w-[50px] h-[50px] object-contain flex items-center justify-center p-2 rounded-[50%]">
                          <img
                            src={urlForImage(card.pageMeta?.icon)}
                            alt={card.pageMeta?.icon?.alt}
                          />
                        </div>
                        <p className="text-xl pr-2 mt-[5px] font-bold tracking-wider">
                          {card.pageMeta?.name}
                        </p>
                        <p className="text-[16px]  w-[95%] font-normal font-primary leading-[26px]">
                          {card.pageMeta?.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
