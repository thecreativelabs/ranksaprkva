export default function SearchCards(props:any) {
    return (
        <div className="max-w-[100%] flex flex-col gap-2" >
            {props.data.Icon}
            <p className="sm:text-xl text-base font-bold tracking-wider mt-[10px] w-[97%]">{props.data.heading}</p>
            <p className="sm:text-[16px] text-xs font-normal leading-[18px] sm:leading-[26px]">
                {props.data.content}
            </p>
        </div>
    )
}