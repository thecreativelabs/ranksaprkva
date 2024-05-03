import React from "react";
import Container from "./Container";
import SvgDecorative from "./SvgDecorative";

const Badges = ({
  data,
}: {
  data: { title: string; image: { asset: { url: string; alt: string } } }[];
}) => {
  return (
    <Container className="relative">
      <div className="translate-y-[20rem] -translate-x-[20rem] scale-50">
        <SvgDecorative variant="left" />
      </div>

      <div className="mt-2 max-w-auto md:w-auto flex flex-col items-center justify-center">
        <div className="flex gap-x-10 gap-y-4 md:gap-20 lg:gap-20 items-center justify-center mt-6 flex-wrap">
          {data?.map((stat, key) => (
            <div key={key}>
              <div className="text-gray-500 my-2 h-7 md:h-9">
                <img
                  src={stat.image.asset.url}
                  alt={stat.image.asset.alt}
                  className="w-full h-[70px] object-contain"
                />
              </div>
              <p className="text-center mt-12 font-bold text-xl text-dark-red">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Badges;
