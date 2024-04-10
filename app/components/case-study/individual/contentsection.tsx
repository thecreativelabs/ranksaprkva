import Container from "@/components/Container";
import Feature_case_Study from "../Feature-case-study/feature";
import Findout from "./findout";
import { CaseStudyWithReferences } from "@/(pages)/case-study/page";
import SmallCards from "./smallCards";
import Link from "next/link";
import { PortableText } from "@/components/PortableText";

export default function ContentSection(data?: CaseStudyWithReferences) {
  return (
    <div className="border-b-[1px] border-[#a8a8a8] ">
      <Container>
        <div className="flex  lg:flex-row flex-col-reverse justify-center  py-[60px] mt-[90px] gap-[30px] ">
          {/* LeftContent */}

          <div className="lg:w-[70%] w-[100%]">
            <p className="w-full text-dark-red text-3xl lg:text-xxxxl font-normal font-Amiri leading-[30px] sm:leading-[57.34px]">
              {data?.title}
            </p>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-[50px] gap-[15px]">
              {data?.stats?.map((stat, i) => {
                return (
                  <div key={i}>
                    <SmallCards
                      index={i}
                      className={`bg-${stat?.color}  h-[150px]`}
                      stat={stat.statistic}
                      context={stat.context}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-[20px] sm:mt-[50px] sm:py-[50px] py-[20px]">
              <p className="text-light-red text-sm sm:text-sm font-bold font-primary uppercase tracking-widest">
                Challenge
              </p>
              <PortableText value={data?.challenge!} />
              <p className="text-light-red text-sm sm:text-sm font-bold font-primary uppercase tracking-widest">
                Solution
              </p>
              <PortableText value={data?.solution!} />
              <p className="text-light-red text-sm sm:text-sm font-bold font-primary uppercase tracking-widest">
                Result
              </p>
              <PortableText value={data?.result!} />

              <PortableText value={data?.body!} />
            </div>
          </div>

          {/* RightContent */}

          <div className="lg:w-[30%] w-[100%] p-[40px] bg-graybg h-fit">
            <p className=" font-primary text-[22px] font-bold">
              {data?.testimony?.text}
            </p>
            <div className="flex  border-b-[1px] pb-[40px] border-[#a1a1a1] mt-[20px] gap-[10px]">
              <div className="w-[40px] h-[40px] capitalize font-Amiri text-xl bg-dark-red flex justify-center items-center text-[#fed7aa] rounded-[50%]">
                {data?.testimony?.name?.[0]}
              </div>
              <div className="gap-y-[4px] w-[60%] flex flex-col">
                <p className=" font-primary text-sm tracking-widest font-bold ">
                  {data?.testimony?.name}
                </p>
                <p className="text-sm  font-light leading-5 ">
                  {data?.testimony?.designation}
                </p>
              </div>
            </div>
            <p className=" pt-[30px] font-primary text-[22px] font-bold">
              Services
            </p>
            <ul className=" list-disc mt-[10px] ml-[18px]">
              {data?.services?.map((service, i) => {
                // return service.link == "" ? (
                //   <li key={i} className="text-[17px] font-primary">
                //     {" "}
                //     {service.text}{" "}
                //   </li>
                // ) : (
                //   <li key={i} className="text-[17px]  font-primary">
                //     {" "}
                //     <a href={service.link} className="text-light-pink">
                //       {service.text}
                //     </a>{" "}
                //   </li>
                // );
                return (
                  <Link
                    key={i}
                    href={`/services/${service.slug?.current}`}
                    className="text-[17px]  font-primary text-light-pink"
                  >
                    <div>{service.title}</div>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
