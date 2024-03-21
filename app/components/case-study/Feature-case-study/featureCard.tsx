import Cards from '@components/case-study/cards';
import { IoMdArrowForward } from "react-icons/io";




export default function FeatureCard(props: any) {
    return (
        <div className="flex flex-col justify-between">
            <Cards className='h-[256px]' color={props.data.color} image={props.data.image} logo={props.data.logo} logoclass='top-[-35px] right-[-20px]' />
            <div>
                <p className="text-dark-red text-xl font-bold font-DM-sans w-[100%]">
                    {props.data.title}
                </p>
                <div className="text-sm justify-start w-[100%] font-bold mt-[12px]  uppercase flex tracking-widest gap-[15px] items-center text-light-red">
                    {props.data.button.text}
                    <button type='button' title='arrow' className="w-[38px] flex justify-center items-center h-[38px] rounded-[50%] bg-light-red hover:bg-black">
                        <IoMdArrowForward
                            className="text-white h-[25px] w-[25px]"                          
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
