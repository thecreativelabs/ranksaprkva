import Slider from '@components/methods/Slider';
import Image from 'next/image';
import Container from '../Container';
// import Logo from '@/assets/methods/logos.png'

const data = {
  title: "Real companies, real gains.​",
  logo: ["/methods/logos.png"],
};

export default function Companies() {
  return (
    <div className='bg-[#F0F0ED]'>
 <Container>
      <div className="md:pb-[80px] sm:pb-[40px] pb-[20px] pt-[50px] h-fit  w-full  flex flex-col justify-evenly items-center">
        <div className='h-[45%] w-[70%] py-[50px] border-b-[1px] gap-[20%] border-solid border-[#ccc] flex flex-col justify-center items-center'>
          <p className="sm:text-[50px] text-[25px] sm:leading-[60px] leading-[30px] font-Amiri font-normal text-dark-red">
            {data.title}
          </p>
          <div className="grid sm:grid-cols-6 mt-[30px] grid-cols-3 sm:gap-[25px] gap-[10px] ">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i}>
                <Image src={data.logo[0]} width={100} height={100} className="sm:h-[50px] max-w-fit h-[30px]" alt={`logo-${i}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="h-[60%] flex mt-[50px] justify-center items-center w-[100%]">
          <Slider />
        </div>
      </div>
    </Container>
    </div>
  );
}
