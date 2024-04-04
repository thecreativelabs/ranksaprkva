import React from "react";
import Container from "@/components/Container";
import { Careers } from "@/types/sanity";
import { PortableText } from "@/components/PortableText";

const howcare = ({benefits: data}: Pick<Careers,"benefits">) => {
  return (
    <Container>
      <div className="grid mb-20 md:grid-cols-2 gap-x-8">
        <div className="mt-20">
          <h1 className="text-3xl font-tertiary leading-8 text-dark-red md:text-5xl font-medium w-auto md:w-[350px] tracking-wide md:tracking-wide">
            {data?.title}
          </h1>
        </div>
        <div className="mt-20 grid gap-x-12 divide-neutral-200 w-full">
          {data?.faqs?.map((item, index) => (
            <div key={index}>
              {/* <div className="mx-auto bg-black h-[1px] w-full"></div> */}
              <div className="py-8 border-b">
                <summary className="flex text-xl md:text-3xl font-semibold tracking-wide justify-between items-center font-sans list-none text-dark-red">
                  <span>{item.question}</span>
                </summary>
                <div
                  className="text-dark-red mt-3 group-open:animate-fadeIn"
                  style={{ transition: "transform 1s ease-in-out" }}
                >
                  <PortableText value={item?.answer} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default howcare;
