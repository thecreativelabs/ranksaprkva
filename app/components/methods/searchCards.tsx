import { Image } from "@/types";
import { urlForImage } from "@sanity/lib/image";

export default function SearchCards({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: Image;
}) {
  return (
    <div className="max-w-[100%] flex flex-col gap-2">
      {icon && (
        <div className="shadow-[0_0_30px_20px] shadow-violetLight bg-gradient-to-t from-[#7B4EE7] to-[#AFA8F6] rounded-full w-24 aspect-square flex items-center justify-center">
          <img src={urlForImage(icon)} className="p-6 aspect-square" />
        </div>
      )}
      <p className="sm:text-xl text-base font-bold tracking-wider mt-[10px] w-[97%]">
        {title}
      </p>
      <p className="sm:text-[16px] text-xs font-normal leading-[18px] sm:leading-[26px]">
        {description}
      </p>
    </div>
  );
}
