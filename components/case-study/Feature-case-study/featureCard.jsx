'use client'
import Image from "next/image"
import Cards from '@components/case-study/cards'
import CircleArrow from '@components/ui/icons/circleButtonArrow'
// import CircleArrow from "../../ui/icons/circleButtonArrow"
export default function FeatureCard(props) {
    return (
        <div className="flex flex-col justify-between">
            <Cards className='h-[256px]' color={props.data.color} image={props.data.image} logo={props.data.logo} />
            {/* <div
                className={` h-[256px]  flex justify-center relative items-center bg-cover`}
                style={{
                    backgroundImage: `url(${'./methods/Vector-3.png'})`,
                    backgroundColor: props.data.color
                }}>
                <img src={props.data.image} className="max-h-[100px] " />
                <img
                    src={props.data.logo}
                    className="absolute h-[100px] top-[-35px] right-[-20px]"
                />

            </div> */}
            <div>
                <p className="text-dark-red text-xl font-bold font-DM-sans w-[100%]">
                    {props.data.title}
                </p>
                <div className="text-sm justify-start w-[100%] font-bold mt-[12px]  uppercase flex tracking-widest gap-[15px] items-center text-light-red">
                    {props.data.button.text}
                    <button className=" w-[38px] rounded-[50%] bg-light-red hover:bg-black">
                        <CircleArrow
                            className=""
                            style={{ color: 'black' }}
                            bg="light-pink"
                            color="white"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}