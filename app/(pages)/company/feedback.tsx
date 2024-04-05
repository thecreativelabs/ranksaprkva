import React from "react";
import Container from "@/components/Container";
import { About } from "@/types/sanity";
import Rating from "@/components/case-study/rating";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-500"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Feedback = ({ testimonials: data }: Pick<About, "testimonials">) => {
  return (
    <Container>
      <h2 className="md:text-5xl text-center h-auto leading-10 tracking-wider font-medium text-3xl font-tertiary mt-14 text-dark-red w-auto md:w-auto">
        {data?.heading}
      </h2>
      <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-0">
        {data?.testimonials?.map((item, index) => (
          <div
            key={index}
            className="max-w-[26rem] border border-slate-200 px-4 bg-white md:h-auto w-auto h-auto md:w-[360px] flex flex-col gap-0 md:gap-4 mb-0 md:mb-6 items-start group rounded transition-all md:px-8 py-6"
          >
            <div className="mx-0 flex items-center gap-4 pt-0 pb-2">
              <div className="rounded-full flex justify-center items-center bg-[#FFDBAC] w-[40px] h-[40px]">
                <span className="text-center font-tertiary text-lg">
                  {item.name?.[0]}
                </span>
              </div>
              <div className="flex w-auto text-dark-red flex-col">
                <p className="tracking-widest mb-2 font-semibold w-[200px] text-sm ">
                  {item.name}
                </p>
                <p className="blue-gray w-[200px] font-normal text-xs">
                  {item.title}
                </p>
              </div>
            </div>
            <div className="flex items-center md:mt-0 mt-2 gap-2">
              <Rating
                rating={item.rating}
                className="text-darkyellow text-[22px] m-1"
              />
            </div>
            <div className="mb-6 mt-4 md:mt-0 text-dark-red p-0 tracking-wider leading-6 text-sm md:text-md">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Feedback;
