import Container from "@/components/Container";
import Slider from "@/components/methods/Slider";
import Image from "next/image";

export default function Marketing({
  data,
}: {
  data: {
    heading: string;
    description: string;
    list: string[];
    image: { asset: { url: string }; alt: string };
  }[];
}) {
  return (
    <>
      <Container>
        <div className="w-full flex justify-center">
          <div className=" w-[90%] sm:space-y-[150px] space-y-[50px] sm:py-[150px] py-[30px]">
            {data?.map((card, i) => {
              return (
                <div
                  key={i}
                  className="flex sm:flex-row flex-col justify-between items-center"
                >
                  {i % 2 == 1 && (
                    <div className="sm:w-[50%] w-[100%] flex">
                      <Image
                        src={card.image?.asset.url}
                        width={550}
                        height={550}
                        alt={card.image?.alt}
                      />
                    </div>
                  )}
                  <div
                    className="sm:w-[50%] sm:my-[0px] my-[20px] w-[100%] flex flex-col"
                    style={{ alignItems: i % 2 == 1 ? "end" : "" }}
                  >
                    <div className="sm:w-[80%] w-[100%] space-y-[20px]">
                      <a className="text-xxl mt-[6px] font-semibold">
                        {card.heading}
                      </a>
                      <p className="sm:leading-[28px]  sm:text-[17px] w-[90%] leading-[22px] text-[13px]">
                        {card.description}
                      </p>

                      <ul className="ml-[20px] w-[80%] list-disc space-y-2 text-lightyellow">
                        {card.list.map((point, j) => (
                          <li
                            key={j}
                            className="sm:leading-[28px] sm:text-[17px] leading-[22px] text-[13px]"
                          >
                            <span className="text-black">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {i % 2 == 0 && (
                    <div className="sm:w-[50%] w-[100%] flex justify-end">
                      <Image
                        src={card.image?.asset.url}
                        width={550}
                        height={550}
                        alt={card.image?.alt}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}
