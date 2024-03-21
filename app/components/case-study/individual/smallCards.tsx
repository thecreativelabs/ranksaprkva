import { FaArrowUp } from "react-icons/fa6"
import Image from "next/image"
export default function SmallCards(props: any) {
    return (
        <div
            className={`${props.className}   rounded flex flex-col justify-center relative items-center bg-cover bg-${props.index % 3 === 0 ? 'lightblue' : props.index % 3 === 1 ? 'dark-red' : 'darkyellow'} `}
            style={{
                backgroundImage: `url('/case-study/bg${props.index % 3 == 0 ? 2 : props.index % 3 == 1 ? 3 : 1}.png')`,
                // backgroundColor: props.index % 3 == 0 ? '#DAF4F4' : props.index % 3 == 1 ? '#3B0D17' : '#3B0D17'
            }}
        >
            <div className="flex justify-center items-center">

                {(props.data.icon != '') ? props.data.icon : ""}
                <p
                    className={`font-bold text-xxxl font-DM-sans text-${props.index % 3 === 0 ? 'dark-red' : props.index % 3 === 1 ? 'lightyellow' : 'dark-red'}`}>

                    {props.data.title}
                </p>
            </div>
            <p className={`text-sm ml-[8px]  font-DM-sans font-normal tracking-wider text-${props.index % 3 === 0 ? 'dark-red' : props.index % 3 === 1 ? 'lightyellow' : 'dark-red'}`}>
                {props.data.content}
            </p>

        </div>
    )
}