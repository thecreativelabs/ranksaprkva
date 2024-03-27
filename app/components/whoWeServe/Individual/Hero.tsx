import Image from "next/image";
import Container from "@/components/Container";

export default function HeroSection({
  title,
  heading,
  description,
  mainImage,
  color,
}: {
  title: string;
  heading: string;
  description: string;
  mainImage: { asset: { url: string }; alt: string };
  color: string;
}) {
  return (
    <div className="h-fit sm:py-[100px] py-[50px] bg-graybg relative">
      <Image
        src="/whoWeServe/herofill.png"
        className="sm:h-[500px] w-fit z-10 absolute bottom-0"
        width={1000}
        height={1000}
        alt="hero"
      />
      <Container>
        <div className="w-full justify-center flex">
          <div className="z-20 w-[90%] relative flex justify-center">
            <div className="w-[100%] flex sm:space-y-0  space-y-4 sm:flex-row flex-col">
              <div className="sm:w-[50%] w-[100%] flex items-center">
                <div
                  className={" w-[35px] h-[82%] rounded-l-lg   bg-cover"}
                  style={{
                    backgroundImage: 'url("/whoWeServe/Vector-6.png")',
                    backgroundColor: color || "#E55447",
                  }}
                ></div>
                <Image
                  src={mainImage?.asset?.url}
                  className="max-h-fit w-fit sm:h-[350px] h-fit bottom-0"
                  width={1000}
                  height={1000}
                  alt={mainImage?.alt || ""}
                />
              </div>
              <div className="sm:w-[50%] w-[100%] ml-0 sm:ml-[20px] space-y-[20px]">
                <p className="text-light-red text-sm sm:text-sm font-bold font-DM-sans uppercase tracking-widest">
                  {title}
                </p>
                <p className="text-dark-red sm:w-[80%] w-[80%] text-xxl lg:text-xxxxl font-normal font-Amiri  leading-[32px] lg:leading-[55px]">
                  {heading}
                </p>
                <p className="text-dark-red text-sm lg:text-[17px] leading-[26px] font-normal mt-[-7px] font-DM-Sans lg:max-w-[97%]">
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
