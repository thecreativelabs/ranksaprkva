import React from "react";
import Container from "@/components/Container";
import { Careers } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";

// const data = [
//   {
//     image:
//       "https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_auto/victorious.com/wp-content/uploads/2023/08/image-grid-02.webp",
//   },
//   {
//     image:
//       "https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_auto/victorious.com/wp-content/uploads/2023/10/team-careers-01.webp",
//   },
// ];

const gallery = ({ images: data }: Pick<Careers, "images">) => {
  return (
    <Container>
      <div>
        <div className="mt-24 mb-8 w-[300px] h-[200px] md:w-auto md:h-auto">
          <img
            src={urlForImage(data?.image1)}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col md:gap-6 md:flex-row">
          <div className="w-[300px] h-[200px] md:h-auto md:w-1/2">
            <img src={urlForImage(data?.image2)} alt="" className="w-full" />
          </div>
          <div className="w-[300px] h-[200px] md:h-auto md:w-1/2">
            <img src={urlForImage(data?.image3)} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default gallery;
