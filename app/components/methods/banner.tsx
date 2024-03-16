import CircleArrow from '@components/ui/icons/circleButtonArrow';
import Image from 'next/image';
import { IoMdArrowForward } from 'react-icons/io';
import Container from '../Container';

const data = {
  logos: [
    "/methods/logo1.png",
    "/methods/logo2.png",
    "/methods/logo3.png",
    "/methods/logo4.png",
  ],
  text: "Award-winning strategies, exceptional results.",
  button: {
    text: "See All Awards",
    url: "",
  },
};

export default function Banner() {
  return (
    <div className="w-full md:py-[120px] sm:py-[80px] py-[40px]  h-fit flex flex-col justify-center items-center bg-dark-red">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-[10px] gap-[5px]">
          {data.logos.map((logo, i) => (
            <Image key={i} src={logo} height={1000} width={1000} className="sm:h-[170px] sm:w-[170px] h-[90px] w-[90px]" alt={`logo-${i}`} />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="sm:text-xxxl text-xxl text-center text-white font-Amiri">{data.text}</p>
          <button className="sm:text-sm text-xs font-bold mt-[20px] uppercase flex justify-center tracking-widest gap-[15px] items-center text-white">
            {data.button.text}
            <span className=" h-[38px] w-[38px] sm:mb-0 mb-2 flex justify-center items-center rounded-[50%] bg-[#F0B342] hover:bg-white">
              <IoMdArrowForward className='h-[25px] w-[25px] hover:text-dark-red' />
            </span>
          </button>
        </div>
      </Container>
    </div>
  );
}
