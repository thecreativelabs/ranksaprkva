import Image from "next/image";
import Container from "@/components/Container";
import ImageDecorative from "@/components/ImageDecorative";

export default function HeroSection({
  title,
  heading,
  description,
  mainImage,
  color,
}: {
  title?: string;
  heading?: string;
  description?: string;
  mainImage?: { asset: { url: string }; alt: string };
  color?: string;
}) {
  return (
    <div className="h-fit sm:py-[100px] py-[50px] relative">
      <Container>
        <div className="w-full justify-center flex">
          <div className="z-20 relative flex justify-center">
            <div className="w-[100%] flex sm:space-y-0  space-y-4 sm:flex-row flex-col justify-between">
              <ImageDecorative asset={mainImage} />
              <div className="sm:w-[50%] w-[100%] ml-0 sm:ml-[20px] space-y-[20px]">
                <p className="text-light-red text-sm sm:text-sm font-bold font-primary uppercase tracking-widest">
                  {title}
                </p>
                <p className="text-dark-red sm:w-[80%] w-[80%] text-xxl lg:text-xxxxl font-normal font-Amiri  leading-[32px] lg:leading-[55px]">
                  {heading}
                </p>
                <p className="text-dark-red text-sm lg:text-[17px] leading-[26px] font-normal mt-[-7px] font-primary lg:max-w-[97%]">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
