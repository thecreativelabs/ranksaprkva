import Container from "@/components/Container"
import Image from "next/image"
import { GoArrowRight } from "react-icons/go"
import { FaStar } from "react-icons/fa";

const data = {
    heading: 'Want to see how a SaaS SEO consultant can help your business rise above the rest?',
    content: 'Our team of award-winning SaaS SEO experts (and all-around awesome people) are ready to take your business to the top of search results.',
    button: {
        text: 'STAND OUT IN SEARCH',
        url: ''
    },
    bg: './whoWeServe/Vector.png'
}

export default function Banner() {
    return (
        <Container >
            <div className="bg-lightblue relative px-[20px] sm:px-[70px] sm:py-[50px] pt-[20px] pb-[250px] bg-[url(../../public/whoWeServe/Vector.png)] bg-cover sm:bg-contain bg-no-repeat bg-right ">
                <p className=" sm:text-xxxl leading-[25px] text-xxl w-[100%] md:w-[55%] font-normal font-Amiri">
                    {data.heading}
                </p>
                <p className="sm:text-lg font-DM-sans sm:w-[60%] w-[80%] mt-[10px] text-dark-red font-normal tracking-wider space-x-5 sm:leading-[30px] text-[12px] leading-[17px]">
                    {data.content}
                </p>
                <div className="bg-darkyellow mt-10 pr-2 text-dark-red w-fit md:h-14 h-14 md:flex md:items-center items-center gap-4 hover:bg-light-red hover:text-white transition-all duration-300">
                    <button className="relative md:inline-flex inline-flex items-center md:items-center group gap-px">
                        <a
                            href={data.button.url}
                            className="inline-flex items-center gap-px md:inline-flex md:items-center md:gap-px"
                        >
                            <span className="text-base md:mt-0 font-medium mt-4 ml-5 cursor-pointer">
                                {data.button.text}
                            </span>
                            <GoArrowRight
                                className="ml-1 font-bold md:mt-0 mt-4 mr-2"
                                size={25}
                            />
                            
                        </a>
                    </button>
                </div>
                <Image src='/whoWeServe/cutout.png' className="absolute bottom-0 right-0" height={550} width={550} alt='bg' />
            </div>
        </Container>
    )
}