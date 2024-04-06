import HeroSection from "@components/case-study/heroSection";
import Image from "next/image";
// import HeroSection from "../case-study/heroSection";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Container from "../Container";

const data = {
  header: {
    topText: "",
    title: "11 Keyword Monitoring Tools To Track Your Rankings",
  },

  tagline:
    "Understanding which of your target keywords you're ranking for and and how well your pages rank for them provides valuable insight into the effectiveness of your SEO strategy.",
  image:
    "https://cdn.shortpixel.ai/spai/ret_img/victorious.com/wp-content/uploads/2023/09/Staff-Writer-Profile-Pic-96x96.webp",
  author: "Victorious Team Member",
  date: "Mar 22, 2024",
  topic: "Ranking Strategies, SEO Reporting & Metrics",
  social: [
    {
      Icon: <FaFacebook />,
      url: "",
    },
    {
      Icon: <FaInstagram />,
      url: "",
    },
    {
      Icon: <FaTwitter />,
      url: "",
    },
  ],
};

export default function Hero() {
  return (
    <div className="md:py-[120px] bg-gray sm:py-[80px] py-[40px] h-fit  w-full max-h-[600px] flex  justify-center items-center">
      <Container>
        <div className="w-[100%] flex sm:flex-row flex-col gap-[20px] sm:gap-[0px] items-center">
          <div className="w-[80%]">
            <p className="w-[100%] sm:w-[90%] text-dark-red text-3xl lg:text-xxxxl font-normal font-Amiri leading-[30px] sm:leading-[67.34px]">
              {data.header?.title}
            </p>

            {data.tagline && (
              <p className="text-base md:text-md lg:text-xl font-bold tracking-wide mt-[15px] w-full">
                {data.tagline}
              </p>
            )}
            <div className="flex items-center sm:gap-[20px] gap-[10px] mt-[20px]">
              <img
                src={data.image}
                className="sm:h-[90px] sm:w-[90px] h-[40px] w-[40px] rounded-[50%] border-[2px] border-solid border-light-pink"
                alt="image"
              />
              <p className="text-dark-red flex capitalize sm:mt-[-10px] text-[10px] lg:text-base font-normal font-primary leading-[12px] sm:leading-[29.70px]">
                by {data.author} <span className="sm:w-[25px] w-[40px]"></span>{" "}
                {data.date} <span className="sm:w-[25px] w-[40px]" />{" "}
                {data.topic}
              </p>
            </div>
          </div>
          <div className="w-[20%] h-full justify-center gap-[20px] items-center flex">
            {data.social?.map((social, i) => {
              return (
                <div key={i} className="text-light-pink text-[23px]">
                  {social.Icon}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
