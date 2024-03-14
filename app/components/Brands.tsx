import React from "react";
import Container from "./Container";

const logos = {
  title: "Trusted by top brands for page one results.",
};

const Brands = () => {
  return (
    <Container>
      <div className="mt-20 bg-white">
        <h2 className="font-bold text-center text-xl text-[#3B0D17]">
          {logos?.title}
        </h2>
        <div className="mt-10 flex gap-x-16 gap-y-4 md:gap-26 lg:gap-32 items-center justify-center flex-wrap">
          <div>
            <div className="text-gray-500 my-2 h-7 md:h-9 mt-10">
              <img
                src="https://cdn.shortpixel.ai/spai/q_glossy+to_auto+ret_img/victorious.com/wp-content/uploads/2023/10/Spotify.svg"
                alt=""
                className="w-full h-[30px] object-contain"
              />
            </div>
          </div>
          <div>
            <div className="text-gray-500 my-2 h-7 md:h-9 mt-10">
              <img
                src="https://cdn.shortpixel.ai/spai/q_glossy+to_auto+ret_img/victorious.com/wp-content/uploads/2023/10/Salesforce.svg"
                alt=""
                className="w-full h-[50px] object-contain"
              />
            </div>
          </div>
          <div>
            <div className="text-gray-500 my-2 h-7 md:h-9 mt-10">
              <img
                src="https://cdn.shortpixel.ai/spai/q_glossy+to_auto+ret_img/victorious.com/wp-content/uploads/2023/10/Bissel.svg"
                alt=""
                className="w-full h-[50px] object-contain"
              />
            </div>
          </div>
          <div>
            <div className="text-gray-500 my-2 h-7 md:h-9 mt-10">
              <img
                src="https://cdn.shortpixel.ai/spai/q_glossy+to_auto+ret_img/victorious.com/wp-content/uploads/2023/08/Wayfair.svg"
                alt=""
                className="w-full h-[24px] object-contain"
              />
            </div>
          </div>
          <div>
            <div className="text-gray-500 my-2 h-7 md:h-9 mt-10">
              <img
                src="https://cdn.shortpixel.ai/spai/q_glossy+to_auto+ret_img/victorious.com/wp-content/uploads/2023/08/Yahoo.svg"
                alt=""
                className="w-full h-[24px] object-contain"
              />
            </div>
          </div>
          <div>
            <div className="text-gray-500 my-2 h-7 md:h-9 mt-10">
              <img
                src="https://cdn.shortpixel.ai/spai/q_glossy+w_125+to_auto+ret_img/victorious.com/wp-content/uploads/2023/10/GE-DIgital.png"
                alt=""
                className="w-full h-[35px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Brands;
