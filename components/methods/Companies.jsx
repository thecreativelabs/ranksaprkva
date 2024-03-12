import Slider from './Slider.jsx'
const data = {
  title: "Real companies, real gains.​",
  logo: ["./methods/logos.png"],
};

export default function Companies() {
  return (
    <div
      className="h-[125vh] w-full bg-[#F0F0ED] flex flex-col justify-evenly items-center">
      
      <div className='h-[45%] w-[70%] border-b-[1px] gap-[20%] border-solid border-[#ccc] flex flex-col justify-center items-center'>
        <p className="text-[50px] font-Amiri font-normal text-dark-red">
          {data.title}
        </p>
        <div className="grid grid-cols-6 gap-[25px] ">
          {
            [...Array(12)].map((logo, i) => {
              return (
                <div key={i}>
                  <img src={data.logo[0]} className="h-[50px]" />
                </div>
              );
            })
          }
        </div>
      </div>
      <div className="h-[60%] w-[100%]">
        <Slider/> 
      </div>
    </div>
  )
}


