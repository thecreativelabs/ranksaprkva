import React from "react";
import Container from "./Container";

const Badges = () => {
  return (
    <Container>
      <div className="mt-2 max-w-auto md:w-auto flex flex-col items-center justify-center">
        <div className="flex gap-x-10 gap-y-4 md:gap-20 lg:gap-20 items-center justify-center mt-6 flex-wrap">
          <div>
            <div className="text-gray-500 my-2 h-7 md:h-9">
              <img
                src="https://cdn.shortpixel.ai/spai/ret_img/victorious.com/wp-content/uploads/2023/11/awards-stat.webp"
                alt=""
                className="w-full h-[70px] object-contain"
              />
            </div>
            <p className="text-center mt-12 font-bold text-xl text-[#3B0D17]">
              166+ Awards
            </p>
          </div>
          <div>
            <div className="text-gray-500 my-2 h-7 md:h-9">
              <img
                src="https://victorious.com/wp-content/uploads/2023/11/clutch-stat.webp"
                alt=""
                className="w-full h-[70px] object-contain"
              />
            </div>
            <p className="text-center mt-12 font-bold text-xl text-[#3B0D17]">
              90+ Reviews
            </p>
          </div>
          <div>
            <div className="text-gray-500 my-2 h-7 md:h-9">
              <img
                src="https://cdn.shortpixel.ai/spai/ret_img/victorious.com/wp-content/uploads/2023/11/team-stat.webp"
                alt=""
                className="w-full h-[70px] object-contain"
              />
            </div>
            <p className="text-center mt-12 font-bold text-xl text-[#3B0D17]">
              75+ Experts
            </p>
          </div>
          <div>
            <div className="text-gray-500 my-2 h-7 md:h-9">
              <img
                src="https://victorious.com/wp-content/uploads/2023/11/google-stat.webp"
                alt=""
                className="w-full h-[70px] object-contain"
              />
            </div>
            <p className="text-center mt-12 font-bold text-xl text-[#3B0D17]">
              69+ Reviews
            </p>
          </div>
          <div>
            <div className="text-gray-500 my-2 h-7 md:h-9">
              <img
                src="https://victorious.com/wp-content/uploads/2023/11/clients-stat.webp"
                alt=""
                className="w-full h-[70px] object-contain"
              />
            </div>
            <p className="text-center mt-12 font-bold text-xl text-[#3B0D17]">
              651+ Served
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Badges;
