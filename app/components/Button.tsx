import React from "react";
import CircleArrow from "@components/ui/icons/circleButtonArrow";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const Button = ({
  variant,
  props,
  className,
}: {
  variant?: "fill" | "link";
  props?: {
    text?: string;
    path?: string;
  };
  className?: string;
}) => {
  if (!props) return <></>;
  return variant === "link" ? (
    <a
      href={props.path}
      className="group md:text-sm text-xs justify-start w-auto font-semibold mt-[20px] uppercase cursor-pointer flex tracking-wide gap-[15px] items-center text-light-red"
    >
      <div className="flex">
        {props.text}
        <button
          type="button"
          title="button"
          className="mt-[-12px] ml-2 w-[38px] rounded-[50%] bg-light-red group-hover:bg-dark-red transition duration-300"
        >
          <CircleArrow
            className=""
            style={{ color: "black" }}
            bg="light-pink"
            color="white"
          />
        </button>
      </div>
    </a>
  ) : (
    <button
      className={
        "flex flex-col bg-violet text-white text-sm mt-10 px-8 pt-1 pb-2 md:pt-4 md:pb-3 rounded-full w-[270px] md:w-auto md:items-center items-center gap-4 hover:bg-violet/90 hover:text-white transition-all duration-300" +
        " " +
        className
      }
    >
      <div className="flex items-center justify-center">
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.2234 0.529728L9.9703 2.15177C9.9703 2.15177 8.92435 2.1949 7.94942 3.09333C6.9745 3.99177 0.465222 9.49466 0.465222 9.49466C0.465222 9.49466 0.00443278 10.0307 0.799787 10.0401C1.59514 10.0496 11.7772 10.7961 11.7772 10.7961C11.7772 10.7961 14.4595 10.8882 14.5235 13.369L14.1232 19.0734C14.1232 19.0734 14.6061 19.3495 15.0814 18.8137L22.3522 12.5175C22.3522 12.5175 22.9472 12.1491 22.9873 11.1295C23.0275 10.1099 23.5404 3.38441 23.5404 3.38441C23.5404 3.38441 23.9539 -0.251389 20.2234 0.529728Z"
            fill="white"
          />
        </svg>
        <Link
          href={props.path || "/"}
          className="flex items-center gap-px md:inline-flex md:items-center md:gap-px"
        >
          <span className="text-md md:py-0 px-2 py-2 font-medium cursor-pointer">
            {props.text}
          </span>
        </Link>
      </div>
      <svg
        className="-mt-4 md:-mt-3"
        width="105"
        height="6"
        viewBox="0 0 105 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3" cy="3" r="3" fill="#D4C3FF" />
        <circle cx="22" cy="3" r="3" fill="#C8BBEB" />
        <circle cx="42" cy="3" r="3" fill="#E7DFFD" />
        <circle cx="62" cy="3" r="3" fill="white" />
        <circle cx="82" cy="3" r="3" fill="white" />
        <circle cx="102" cy="3" r="3" fill="white" />
      </svg>
    </button>
  );
};

export default Button;
