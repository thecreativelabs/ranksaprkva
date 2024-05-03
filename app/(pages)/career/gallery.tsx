import React from "react";
import Container from "@/components/Container";
import { Careers } from "@/types/sanity";
import { urlForImage } from "@sanity/lib/image";

const gallery = ({ images: data }: Pick<Careers, "images">) => {
  return (
    <Container>
      <div className="relative">
        <div className="mt-24 mb-8 w-[300px] h-[200px] md:w-auto md:h-auto">
          <img
            src={urlForImage(data?.image1)}
            alt=""
            className="w-full h-full object-cover rounded-3xl md:rounded-[3rem]"
          />
        </div>
        <div className="flex flex-col md:gap-6 md:flex-row">
          <div className="w-[300px] h-[200px] md:h-auto md:w-1/2">
            <img
              src={urlForImage(data?.image2)}
              alt=""
              className="w-full rounded-3xl md:rounded-[3rem]"
            />
          </div>
          <div className="w-[300px] h-[200px] md:h-auto md:w-1/2">
            <img
              src={urlForImage(data?.image3)}
              alt=""
              className="w-full rounded-3xl md:rounded-[3rem]"
            />
          </div>
        </div>
        <svg
          className="-top-20 -right-20 absolute -z-10"
          width="264"
          height="194"
          viewBox="0 0 264 194"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M243.987 65.7804L140.992 6.22579C140.992 6.22579 131.359 -0.955048 116.251 0.107205C101.144 1.16946 3.81375 3.78259 3.81375 3.78259C3.81375 3.78259 -4.12201 5.291 2.90137 11.1334C9.92471 16.9758 95.3727 97.4197 95.3727 97.4197C95.3727 97.4197 118.628 117.666 101.484 140.547L57.1792 189.198C57.1792 189.198 59.5133 195.19 67.5763 193.787L177.361 189.517C177.361 189.517 185.296 190.494 192.935 181.571C200.574 172.649 253.174 115.586 253.174 115.586C253.174 115.586 282.824 85.7234 243.987 65.7804Z"
            fill="#E5E2F7"
          />
        </svg>
        <svg
          className="-bottom-20 -left-20 absolute -z-10"
          width="264"
          height="194"
          viewBox="0 0 264 194"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.0133 65.7804L123.008 6.22579C123.008 6.22579 132.641 -0.955048 147.749 0.107205C162.856 1.16946 260.186 3.78259 260.186 3.78259C260.186 3.78259 268.122 5.291 261.099 11.1334C254.075 16.9758 168.627 97.4197 168.627 97.4197C168.627 97.4197 145.372 117.666 162.516 140.547L206.821 189.198C206.821 189.198 204.487 195.19 196.424 193.787L86.6393 189.517C86.6393 189.517 78.7035 190.494 71.0648 181.571C63.4261 172.649 10.826 115.586 10.826 115.586C10.826 115.586 -18.8241 85.7234 20.0133 65.7804Z"
            fill="#E5E2F7"
          />
        </svg>
      </div>
    </Container>
  );
};

export default gallery;
