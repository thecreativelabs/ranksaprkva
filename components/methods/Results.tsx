'use client'
 import CircleArrow from '@components/ui/icons/circleButtonArrow';
import Image from 'next/image';
interface ResultsData {
    image: string;
    title: string;
    content: string;
    button: string;
}

const data: ResultsData = {
    image: "/methods/bigcta.png",
    title: "Ready to rank higher?",
    content:
        "Our free site analysis includes customized SEO recommendations focused on high-impact results.",
    button: "GET YOUR CUSTOM STRATEGY",
};

export default function Results(): JSX.Element {
    return (
        <div
            className="sm:h-[145vh] h-fit w-full sm:py-0 py-10 bg-cover bg-no-repeat flex flex-col justify-center items-center"
            style={{ backgroundImage: "url('./methods/cta-bg.png')", backgroundPositionY: "200px" }}>
            <div className="w-[80%] mt-[80px] h-[100%]">
                <Image src={data.image} className="w-[100%] max-h-fit" height={1000} width={1000} alt="Result" />
                <p className="text-[50px] mt-[50px] leading-[50px] font-Amiri font-normal text-dark-red">
                    {data.title}
                </p>
                <p className=" text-red-950 mt-[30px] text-[18px] font-normal font-DM-Sans leading-[29.70px]">
                    {data.content}
                </p>
                <button  type='button' title='button' className="text-sm font-bold mt-[40px] uppercase flex justify-center tracking-widest gap-[15px] items-center text-light-red">
                    {data.button}
                    <span className="w-[38px] rounded-[50%] bg-light-red hover:bg-white">
                        <CircleArrow color="white" />
                    </span>
                </button>
            </div>
        </div>
    );
}
