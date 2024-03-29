export default function SearchCards({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
}) {
  return (
    <div className="max-w-[100%] flex flex-col gap-2">
      {icon}
      <p className="sm:text-xl text-base font-bold tracking-wider mt-[10px] w-[97%]">
        {title}
      </p>
      <p className="sm:text-[16px] text-xs font-normal leading-[18px] sm:leading-[26px]">
        {description}
      </p>
    </div>
  );
}
