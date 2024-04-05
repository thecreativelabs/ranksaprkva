import React from "react";
import CircleArrow from "@components/ui/icons/circleButtonArrow";
import { GoArrowRight } from "react-icons/go";

const Button = ({
  variant,
  props,
}: {
  variant?: "fill" | "link";
  props?: {
    text?: string;
    path?: string;
  };
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
    <button className="bg-darkyellow mt-10 px-4 rounded text-dark-red w-[270px] md:w-auto md:h-14 h-14 md:items-center items-center gap-4 hover:bg-[#c92045] hover:text-white transition-all duration-300 relative md:inline-flex inline-flex justify-center">
      <a
        href={props.path}
        className="flex items-center gap-px md:inline-flex md:items-center md:gap-px"
      >
        <span className="text-md md:py-0 px-2 py-2 font-medium cursor-pointer">
          {props.text}
        </span>
        <GoArrowRight className="font-bold" size={25} />
      </a>
    </button>
  );
};

export default Button;
