import Growth from "@components/ui/icons/Growth";

export default function ServeCards(props) {
    return (

        <div className="bg-[#F0F0ED] pl-4 pr-3 py-3 flex justify-center items-center h-[220px] max-h-[300px]">
            <div className="flex flex-col h-full w-[90%] gap-y-2 items-start">
                <div className="bg-white h-fit w-fit p-2 rounded-[50%]">
                    <Growth className="p-1" />
                </div>
                <p className="text-xl font-bold tracking-wider">

                    {props.data.heading}
                </p>
                <p className="text-[16px]  w-[95%] font-normal font-DM-sans leading-[26px]">
                    {props.data.content}
                </p>
                {
                    (props.data.button.text!='')&&<button className="text-base font-bold  text-light-pink">
                        {props.data.button.text}
                    </button>
                }
            </div>
        </div>

    )
}