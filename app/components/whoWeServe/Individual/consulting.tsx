import Container from "@/components/Container";
import Growth from "@components/ui/icons/Growth";
import Task from "@components/ui/icons/taskList";
import Search from "@components/ui/icons/search";
import SearchCards from "@/components/methods/searchCards";
import { Image } from "@/types";
import SvgDecorative from "@/components/SvgDecorative";

export default function Consulting({
  title,
  heading,
  description,
  grid,
}: {
  title: string;
  heading: string;
  description: string;
  grid: {
    title: string;
    description: string;
    icon: Image;
  }[];
}) {
  return (
    <div className="">
      <Container className="relative">
        <SvgDecorative />
        <div className="w-full flex justify-center border-b-[1px] border-violet">
          <div className="w-[90%] space-y-[30px] sm:py-[80px] py-[40px] sm:mt-[30px] mt-[15px] ">
            <p className="text-light-red text-sm sm:text-sm font-bold font-primary uppercase tracking-widest">
              {title}
            </p>
            <p className="text-dark-red sm:w-[70%] w-[60%] text-xxl lg:text-xxxxl font-normal font-Amiri  leading-[32px] lg:leading-[55px]">
              {heading}
            </p>
            <p className="text-dark-red text-sm lg:text-[17px] leading-[26px] font-normal mt-[-7px] font-primary lg:max-w-[50%]">
              {description}
            </p>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 mt-[50px] relative gap-[40px]">
                {grid?.map((item, key) => <SearchCards key={key} {...item} />)}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
