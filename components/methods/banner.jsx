
// import { CircleArrow } from "../ui/icons/index";
import CircleArrow from '@components/ui/icons/circleButtonArrow'
// import {image} from '../../assets'
// import {image} from  '../../assets/method/logo1.png'
const data = {
  logos: [
    "./methods/logo1.png",

    "./methods/logo2.png",
    "./methods/logo3.png",
    "./methods/logo4.png",
  ],
  text: "Award-winning strategies, exceptional results.",
  button: {
    text: "See All Awards",
    url: "",
  },
};

export default function Banner() {
  return (
    <div className="w-full sm:h-[60vh]  h-fit flex flex-col justify-center items-center bg-dark-red">
      <div className=" grid grid-cols-2 sm:grid-cols-4 sm:gap-[10px] gap-[5px]">
        {
          data.logos.map((logo, i) => {
            return <img key={i} src={logo} className="sm:h-[170px] sm:w-[170px] h-[90px] w-[90px]" />;
          })
        }
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="sm:text-xxxl text-xxl text-center text-white font-Amiri">{data.text}</p>
        <button className="sm:text-sm text-xs font-bold mt-[20px] uppercase flex justify-center tracking-widest gap-[15px] items-center text-white">
          See All Awards
          <span className="sm:w-[38px] sm:mb-0 mb-2 rounded-[50%] bg-[#F0B342] hover:bg-white">
            <CircleArrow />
          </span>
        </button>
      </div>
    </div>
  )
}
