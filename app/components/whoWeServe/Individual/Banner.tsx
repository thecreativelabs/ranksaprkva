import Container from "@/components/Container";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import Button from "@/components/Button";

export default function Banner({
  heading,
  description,
  button,
  image,
}: {
  heading: string;
  description: string;
  button: { text: string; path: string };
  image: { asset: { url: string }; alt: string };
}) {
  return (
    <Container>
      <div className="bg-violetExtraLight rounded-[3rem] overflow-hidden relative px-[20px] sm:px-[70px] sm:py-[50px] pt-[20px] pb-[250px] bg-[url(/whoWeServe/vector.svg)] bg-cover sm:bg-contain bg-no-repeat bg-right shadow-[0_0_25px_0px] shadow-violetLight">
        <p className=" sm:text-xxxl leading-[25px] text-xxl w-[100%] md:w-[55%] font-normal font-Amiri">
          {heading}
        </p>
        <p className="sm:text-lg font-primary sm:w-[60%] w-[80%] mt-[10px] text-dark-red font-normal tracking-wider space-x-5 sm:leading-[30px] text-[12px] leading-[17px]">
          {description}
        </p>
        <Button props={{ text: button.text }} />
        <Image
          src={image?.asset.url}
          className="absolute bottom-0 right-0"
          height={550}
          width={550}
          alt={image?.alt || ""}
        />
      </div>
    </Container>
  );
}
