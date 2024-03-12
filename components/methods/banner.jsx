
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
    <div className="w-full h-[60vh] flex flex-col justify-center items-center bg-dark-red">
      <div className="flex gap-[10px]">
        {
          data.logos.map((logo, i) => {
            return <img key={i} src={logo} className="h-[170px] w-[170px]" />;
          })
        }
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-xxxl text-white font-Amiri">{data.text}</p>
        <button className="text-sm font-bold mt-[20px] uppercase flex justify-center tracking-widest gap-[15px] items-center text-white">
          See All Awards
          <span className="w-[38px] rounded-[50%] bg-[#F0B342] hover:bg-white">
            <CircleArrow />
          </span>
        </button>
      </div>
    </div>
  )
}
