import Growth from "@components/ui/icons/Growth";

const ServeCards = (props: any) => {
  return (
    <div className="bg-graybg pl-4 pr-3 py-6 flex min-w-fit justify-center items-center min-h-fit  ">
      <div className="flex flex-col h-full w-[90%] gap-y-4 items-start">
        <div className="bg-white h-fit w-fit p-2 rounded-[50%]">
          <Growth className="p-1" />
        </div>
        <p className="text-xl pr-2 mt-[5px] font-bold tracking-wider">
          {props.data.heading}
        </p>
        <p className="text-[16px]  w-[95%] font-normal font-DM-sans leading-[26px]">
          {props.data.content}
        </p>
        <ul className="leading-[25px] list-disc ml-[15px]">
          {props.data.points != null &&
            props.data.points.map((point: any, i: any) => {
              return <li key={i}>{point}</li>;
            })}
        </ul>
        {props.data.button.text !== "" && (
          <button className="text-base font-bold text-light-pink">
            {props.data.button.text}
          </button>
        )}
      </div>
    </div>
  );
};

export default ServeCards;
