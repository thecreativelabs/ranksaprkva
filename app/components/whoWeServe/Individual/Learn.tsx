import Container from "@/components/Container";

export default function Learn({
  heading,
  description,
  list,
}: {
  heading: string;
  description: string;
  list: { title: string; description: string }[];
}) {
  return (
    <Container>
      <div className="w-full flex justify-center">
        <div className=" sm:w-[58%] w-[90%]  sm:py-[80px] py-[30px]">
          <p className="text-dark-red text-2xl text-center lg:text-[37.30px] font-normal font-Amiri tracking-wide leading-[30px] sm:leading-[67.34px]">
            {heading}
          </p>
          <p className="font-DM-sans  text-base sm:text-lg leading-[28px] tracking-wide font-normal mt-[15px]">
            {description}
          </p>

          <div className="mt-[50px]">
            {list?.map((point, i) => {
              return (
                <div key={i}>
                  <div
                    key={i}
                    className="w-[100%] border-t-[1px] border-black py-6"
                  >
                    <div className="relative gap-[12px] flex">
                      <p className="text-xxl text-left  text-light-pink font-DM-sans font-bold">
                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                      </p>
                      <p className="text-lg sm:text-xl text-left  font-DM-sans font-bold">
                        {point.title}
                      </p>
                    </div>
                    <div className={` overflow-hidden `}>
                      <p className="font-DM-sans  text-base sm:text-lg leading-[28px] tracking-wide font-normal mt-[15px]">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
