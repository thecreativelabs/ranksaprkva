import React from "react";
import Container from "./Container";
import { client } from "@sanity/lib/client";

const Brands = async () => {
  const page = await client.fetch(`*[_type == "logos"] {  
    title,
    logos[] {asset->{url}, alt}
  }[0]`);
  // console.log(page);
  if (!page) return <></>;

  return (
    <Container>
      <div className="mt-20 bg-white">
        <h2 className="font-bold font-primary text-center text-xl text-dark-red">
          {page.title}
        </h2>
        <div className="mt-10 flex gap-x-16 gap-y-4 md:gap-x-26 lg:gap-x-32 items-center justify-center flex-wrap">
          {page.logos?.map((logo: any, key: number) => (
            <div key={key}>
              <div className="text-gray-500 my-2 h-7 md:h-9 mt-10">
                <img
                  src={logo.asset.url}
                  alt={logo.alt}
                  className="w-full h-[30px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Brands;
