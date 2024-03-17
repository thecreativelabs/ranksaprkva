import Container from "@/components/Container";
import Slider from "@/components/methods/Slider";
import Image from "next/image";

export default function Marketing(props:any) {
    const data = (props==null || props.data==null)?[
        {
            title: 'How SEO Fuels a Prosperous SaaS Marketing Funnel',
            content: 'Incorporating a partnership with a SaaS SEO company into your current marketing strategy is an investment in your business’ visibility and profitability.',
            points: ['Keep your SaaS solution at the forefront of future users’ minds.', 'Improve crawlability and create a better user experience for visitors.', 'Drive continuous traffic while reducing ongoing ad spend.'],
            image: '/whoWeServe/redimage1.png'
        },
        {
            title: 'How SEO Fuels a Prosperous SaaS Marketing Funnel',
            content: 'Incorporating a partnership with a SaaS SEO company into your current marketing strategy is an investment in your business’ visibility and profitability.',
            points: ['Keep your SaaS solution at the forefront of future users’ minds.', 'Improve crawlability and create a better user experience for visitors.', 'Drive continuous traffic while reducing ongoing ad spend.'],
            image: '/whoWeServe/redimage2.png'
        }
    ]:props.data;
    return (
        <>
            <Container>
                <div className="w-full flex justify-center">
                    <div className=" w-[90%] sm:space-y-[150px] space-y-[50px] sm:py-[150px] py-[30px]">
                        {
                            data.map((card:any, i:any) => {
                                console.log(i)
                                return (
                                    <div key={i} className="flex sm:flex-row flex-col justify-between items-center">

                                        {
                                            (i % 2 == 1) && <div className="sm:w-[50%] w-[100%] flex">
                                                <Image src={card.image} width={550} height={550} alt='text' />
                                            </div>
                                        }
                                        <div className="sm:w-[50%] sm:my-[0px] my-[20px] w-[100%] flex flex-col" style={{ alignItems: (i % 2 == 1) ? 'end' : '' }}>
                                            <div className="sm:w-[80%] w-[100%] space-y-[20px]">

                                                <a className="text-xxl mt-[6px] font-semibold">{card.title}</a>
                                                <p className="sm:leading-[28px]  sm:text-[17px] w-[90%] leading-[22px] text-[13px]">{card.content}</p>

                                                <ul className="ml-[20px] w-[80%] list-disc space-y-2 text-lightyellow">
                                                    {card.points.map((point:any, j:any) => (
                                                        <li key={j} className="sm:leading-[28px] sm:text-[17px] leading-[22px] text-[13px]">
                                                            <span className="text-black">{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        {
                                            (i % 2 == 0) && <div className="sm:w-[50%] w-[100%] flex justify-end">
                                                <Image src={card.image} width={550} height={550} alt='text' />
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </Container>
            
        </>
    )
} 