import Rating from "@/components/case-study/rating";

export default function TesimonialCard(props: any) {
    return (
        <div className="p-[30px] border-[0.5px] border-[#ededed] rounded-lg ">
            <div className="flex gap-[15px]">
                <div className="w-[37px] h-[37px] capitalize font-Amiri text-xl text-dark-red flex justify-center items-center bg-[#fed7aa] rounded-[50%]">
                    {props.data.name[0]}

                </div>
                <div className="gap-y-[7px] w-[60%] flex flex-col">
                    <p className=" font-DM-sans text-sm tracking-widest font-bold ">{props.data.name}</p>
                    <p className="text-sm  font-light leading-5 ">{props.data.role}</p>
                </div>
            </div>
            <div className="space-y-[15px] mt-[15px]">
                <Rating rating={props.data.star} className='text-darkyellow text-[22px] m-1' />
                <p className="text-base font-normal font-DM-sans tracking-wide leading-6 w-[90%]">{props.data.review}</p>
            </div>
        </div>
    )
}