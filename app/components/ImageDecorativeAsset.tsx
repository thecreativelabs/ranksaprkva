import { Image as ImageType } from "@/types";
import { urlForImage } from "@sanity/lib/image";
import Image from "next/image";
import React from "react";

const ImageDecorativeAsset = ({ asset }: { asset?: ImageType }) => {
  return (
    <div className="sm:w-[50%] w-[100%] flex items-center relative">
      <svg
        className="absolute -top-20 right-10 -z-10 hidden md:block"
        width="303"
        height="223"
        viewBox="0 0 303 223"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M279.884 75.4502L161.736 7.14098C161.736 7.14098 150.686 -1.09544 133.355 0.122964C116.025 1.34137 4.37494 4.33864 4.37494 4.33864C4.37494 4.33864 -4.72839 6.06877 3.32831 12.77C11.385 19.4712 109.405 111.74 109.405 111.74C109.405 111.74 136.082 134.963 116.415 161.208L65.592 217.011C65.592 217.011 68.2695 223.882 77.5189 222.274L203.456 217.376C203.456 217.376 212.559 218.497 221.322 208.263C230.084 198.028 290.423 132.577 290.423 132.577C290.423 132.577 324.436 98.3247 279.884 75.4502Z"
          fill="#E5E2F7"
        />
      </svg>

      <img
        src={urlForImage(asset) || ""}
        className="rounded-3xl h-[28rem] object-cover"
        alt={asset?.alt || ""}
      />
      <svg
        className="absolute -bottom-32 -left-0 -z-20 hidden md:block"
        width="302"
        height="223"
        viewBox="0 0 302 223"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.2747 144.448L140.209 214.814C140.209 214.814 151.114 223.242 168.463 222.327C185.812 221.412 297.498 220.369 297.498 220.369C297.498 220.369 306.63 218.799 298.692 211.958C290.753 205.117 194.363 111.146 194.363 111.146C194.363 111.146 168.096 87.4601 188.22 61.5638L240.012 6.65875C240.012 6.65875 237.455 -0.258859 228.179 1.18732L102.175 3.88071C102.175 3.88071 93.0929 2.60063 84.1526 12.6803C75.2123 22.76 13.737 87.1453 13.737 87.1453C13.737 87.1453 -20.8698 120.797 23.2747 144.448Z"
          fill="#E5E2F7"
        />
      </svg>
    </div>
  );
};

export default ImageDecorativeAsset;
