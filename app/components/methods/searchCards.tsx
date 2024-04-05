import { urlForImage } from "@sanity/lib/image";
import { Image } from "@/types/sanity";
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
      <img src={urlForImage(icon)} height={40} width={40} />
      <p className="sm:text-xl text-base font-bold tracking-wider mt-[10px] w-[97%]">
        {title}
      </p>
      <p className="sm:text-[16px] text-xs font-normal leading-[18px] sm:leading-[26px]">
        {description}
      </p>
    </div>
  );
}
