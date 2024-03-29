import Container from "@/components/Container";
import TesimonialCard from "./testimonialcard";
import { Testimonials } from "@/types/sanity";

export default function Testimonial({
  heading,
  testimonials,
}: {
  heading?: string;
  testimonials?: {
    name?: string;
    title?: string;
    description?: string;
    rating?: number;
    image?: {
      asset: {
        url?: string;
      };
      alt?: string;
    };
  }[];
}) {
  return (
    <Container>
      <div className=" w-full flex flex-col justify-center items-center pt-[100px] gap-[50px]">
        <p className=" text-center text-dark-red sm:w-[80%] w-[80%] text-xxl lg:text-xxxxl font-normal font-Amiri  leading-[32px] lg:leading-[55px]">
          {heading}
        </p>
        <div className="grid gap-[30px] grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
          {testimonials?.map((card, i) => {
            return (
              <div key={i}>
                <TesimonialCard data={card} />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
