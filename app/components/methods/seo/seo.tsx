import Growth from "../../ui/icons/Growth";
import { MethodPage } from "@/types/sanity";



export default function SEO({ data:data }: {
  data?:MethodPage['section2'];
}) {
    const additionalServicesCard=data?.additionalServicesCard;
    return (
        <div className="bg-white relative z-10 sm:py-[50px] py-4 flex flex-col gap-[10%] justify-center items-center w-[100%]  ">
            <p className="text-xxl font-bold tracking-wider">{additionalServicesCard?.title}</p>
            {/* {
                (data != null && data.content != null) &&
                <p className="text-dark-red mt-[20px] text-sm lg:text-[17px] leading-[26px] font-normal font-DM-Sans lg:max-w-[50%]">
                    {data.content}
                </p>
            } */}
            <div className="flex sm:flex-row flex-col w-[95%] justify-between py-[30px]">
                {additionalServicesCard?.cards?.map((service, i) => (
                    <div key={i} className="w-full flex flex-col gap-[20px]">
                        <div className="sm:flex flex-col hidden">
                            <Growth />
                            <a className="text-xl mt-[15px] font-bold">{service?.title}</a>
                        </div>
                        <div className="flex sm:hidden mt-[20px]">
                            <Growth />
                            <a className="text-xl mt-[6px] font-bold">{service?.title}</a>
                        </div>
                        <ul className="ml-[13px] w-[80%] list-disc space-y-2 text-[#f60]">
                            {service?.services?.map((point, j) => (
                                <li key={j} className="sm:leading-[28px] sm:text-[17px] leading-[22px] text-[13px]">
                                    <span className="text-black">{point.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
