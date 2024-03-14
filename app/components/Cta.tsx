import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import Pattern from "../assets/yellow-linework.svg";
import Container from "./Container";

const data = [
  {
    heading: "How Can We Help You?",
    subHeading: "Find out how our SEO services can help grow your business.",
  },
];

const Cta = () => {
  return (
    <div
      className="w-full relative h-full flex flex-wrap justify-center bg-[#fed7aa]"
      style={{
        backgroundImage: `url('${Pattern.src}')`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="md:px-10 xs:pt-4 sm:pt-4 lg:px-2 md:mt-4 flex flex-col mb-2 text-left w-[560px] md:text-left">
        <div className="top-10 mr-[60px]">
          <h3 className="text-[#3B0D17] w-full mt-8 md:mt-10 font-bold text-2xl md:text-xl ml-4 mr-4 lg:text-2xl tracking-tight">
            {data[0].heading}
          </h3>
          <p className="text-[#3B0D17]/70 mt-4 ml-4 mr-4 text-xs md:text-sm">
            {data[0].subHeading}
          </p>
        </div>
      </div>

      <div className="p-4 justify-start md:p-8 w-full md:w-[560px] flex flex-col items-center text-center">
        <form action="#" method="post">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-left block text-sm font-medium text-[#3B0D17]"
            >
              Email<span className="text-[#f52d2d]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border rounded w-full md:w-[540px]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="interest"
              className="text-left block text-sm font-medium text-[#3B0D17]"
            >
              What are you looking for?
            </label>
            <select
              id="interest"
              name="interest"
              className="mt-1 p-2 border rounded w-full md:w-[540px]"
              required
            >
              <option value="" selected>
                Please Select
              </option>
              <option value="">
                Convert more prospects to customers from organic search
              </option>
              <option value="">
                Improve my website&apos;s search rankings
              </option>
              <option value="">
                Learn more about SEO and search-first strategies
              </option>
              <option value="">Understand SEO agency pricing</option>
            </select>
          </div>

          <div className="mt-6 text-left">
            <button
              type="submit"
              className="bg-[#e66262] w-[100px] text-white p-2 rounded"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cta;
