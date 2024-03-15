import Slider from '@components/methods/Slider';
import Image from 'next/image';
// import Logo from '@/assets/methods/logos.png'

const data = {
  title: "Real companies, real gains.​",
  logo: ["/methods/logos.png"],
};

export default function Companies() {
  return (
    <div className="sm:h-[125vh] h-fit sm:py-0 py-10 w-full bg-[#F0F0ED] flex flex-col justify-evenly items-center">
      <div className='h-[45%] w-[70%] border-b-[1px] gap-[20%] border-solid border-[#ccc] flex flex-col justify-center items-center'>
        <p className="sm:text-[50px] text-[25px] sm:leading-[60px] leading-[30px] font-Amiri font-normal text-dark-red">
          {data.title}
        </p>
        <div className="grid sm:grid-cols-6 grid-cols-3 sm:gap-[25px] gap-[10px] ">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i}>
              <Image src={data.logo[0]} width={100} height={100} className="sm:h-[50px] max-w-fit h-[30px]" alt={`logo-${i}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="h-[60%] flex justify-center items-center w-[100%]">
        <Slider />
      </div>
    </div>
  );
}
