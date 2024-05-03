import Rating from "@/components/case-study/rating";

export default function TesimonialCard({
  data,
}: {
  data: {
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
  };
}) {
  return (
    <div className="p-[30px] border-[0.5px] border-[#ededed] rounded-3xl bg-violetExtraLight">
      <div className="flex gap-[15px]">
        <div className="w-[37px] h-[37px] capitalize font-Amiri text-xl text-white flex justify-center items-center bg-violet rounded-[50%]">
          {data.name?.[0]}
        </div>
        <div className="gap-y-[7px] w-[60%] flex flex-col">
          <p className=" font-primary text-sm tracking-widest font-bold ">
            {data.name}
          </p>
          <p className="text-sm  font-light leading-5 ">{data.title}</p>
        </div>
      </div>
      <div className="space-y-[15px] mt-[15px]">
        <Rating rating={data.rating} className="text-violet text-[22px] m-1" />
        <p className="text-base font-normal font-primary tracking-wide leading-6 w-[90%]">
          {data.description}
        </p>
      </div>
    </div>
  );
}
