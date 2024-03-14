'use client';
import React, { useState } from "react";

interface QAndAItem {
    question: string;
    answer: string;
}

const data: { title: string; QandA: QAndAItem[] } = {
    title: "Your SEO Case Study Question, Answered",
    QandA: [
        {
            question: 'How can I use an SEO case study to assess an agency?',
            answer: 'The best SEO case studies offer more than just numbers; they provide a narrative that gives you a glimpse into the agency’s approach to customer relationships and problem-solving. When reading them, consider how the agency discusses its collaboration with the customer. This can give you an idea of the agency’s communication style and commitment to customer success   A good case study should clearly outline what the customer’s objectives were and how the agency’s SEO strategy aimed to meet those goals.If the focus is solely on vanity metrics without tying back to the customer’s business objectives, it may be a red flag. \n Our case studies clearly illustrate our commitment to partnership and our singular focus on our customers’ success.',
        },
        {
            question: 'How do your SEO case studies illustrate your methodology?',
            answer: 'We designed our case studies to be transparent roadmaps of our unique approach to SEO. Each one starts with our customers’ specific challenge, from low organic traffic and poor keyword rankings to content that wasn’t driving conversions. \n We then delve into the tailored strategies we employed to tackle these issues. Whether it was on-page optimization, link building, or a comprehensive content overhaul, we detail the services and tactics that were part of the solution. \n But we don’t stop there. Our case studies also highlight the measurable outcomes of our efforts. We provide clear before-and-after metrics to show the impact of our actions on key performance indicators like organic traffic, conversion rates, and search engine rankings. \n In essence, our case studies serve as a comprehensive guide to our methodology, offering you a transparent look at our approach, execution, and the results we deliver.',
        },
        {
            question: 'How can I use an SEO case study to assess an agency?',
            answer: 'The best SEO case studies offer more than just numbers; they provide a narrative that gives you a glimpse into the agency’s approach to customer relationships and problem-solving. When reading them, consider how the agency discusses its collaboration with the customer. This can give you an idea of the agency’s communication style and commitment to customer success   A good case study should clearly outline what the customer’s objectives were and how the agency’s SEO strategy aimed to meet those goals.If the focus is solely on vanity metrics without tying back to the customer’s business objectives, it may be a red flag. \n Our case studies clearly illustrate our commitment to partnership and our singular focus on our customers’ success.',
        },
        {
            question: 'How do your SEO case studies illustrate your methodology?',
            answer: 'We designed our case studies to be transparent roadmaps of our unique approach to SEO. Each one starts with our customers’ specific challenge, from low organic traffic and poor keyword rankings to content that wasn’t driving conversions. \n We then delve into the tailored strategies we employed to tackle these issues. Whether it was on-page optimization, link building, or a comprehensive content overhaul, we detail the services and tactics that were part of the solution. \n But we don’t stop there. Our case studies also highlight the measurable outcomes of our efforts. We provide clear before-and-after metrics to show the impact of our actions on key performance indicators like organic traffic, conversion rates, and search engine rankings. \n In essence, our case studies serve as a comprehensive guide to our methodology, offering you a transparent look at our approach, execution, and the results we deliver.',
        },
        {
            question: 'How can I use an SEO case study to assess an agency?',
            answer: 'The best SEO case studies offer more than just numbers; they provide a narrative that gives you a glimpse into the agency’s approach to customer relationships and problem-solving. When reading them, consider how the agency discusses its collaboration with the customer. This can give you an idea of the agency’s communication style and commitment to customer success   A good case study should clearly outline what the customer’s objectives were and how the agency’s SEO strategy aimed to meet those goals.If the focus is solely on vanity metrics without tying back to the customer’s business objectives, it may be a red flag. \n Our case studies clearly illustrate our commitment to partnership and our singular focus on our customers’ success.',
        },
        {
            question: 'How do your SEO case studies illustrate your methodology?',
            answer: 'We designed our case studies to be transparent roadmaps of our unique approach to SEO. Each one starts with our customers’ specific challenge, from low organic traffic and poor keyword rankings to content that wasn’t driving conversions. \n We then delve into the tailored strategies we employed to tackle these issues. Whether it was on-page optimization, link building, or a comprehensive content overhaul, we detail the services and tactics that were part of the solution. \n But we don’t stop there. Our case studies also highlight the measurable outcomes of our efforts. We provide clear before-and-after metrics to show the impact of our actions on key performance indicators like organic traffic, conversion rates, and search engine rankings. \n In essence, our case studies serve as a comprehensive guide to our methodology, offering you a transparent look at our approach, execution, and the results we deliver.',
        },
        {
            question: 'How can I use an SEO case study to assess an agency?',
            answer: 'The best SEO case studies offer more than just numbers; they provide a narrative that gives you a glimpse into the agency’s approach to customer relationships and problem-solving. When reading them, consider how the agency discusses its collaboration with the customer. This can give you an idea of the agency’s communication style and commitment to customer success   A good case study should clearly outline what the customer’s objectives were and how the agency’s SEO strategy aimed to meet those goals.If the focus is solely on vanity metrics without tying back to the customer’s business objectives, it may be a red flag. \n Our case studies clearly illustrate our commitment to partnership and our singular focus on our customers’ success.',
        },
        {
            question: 'How do your SEO case studies illustrate your methodology?',
            answer: 'We designed our case studies to be transparent roadmaps of our unique approach to SEO. Each one starts with our customers’ specific challenge, from low organic traffic and poor keyword rankings to content that wasn’t driving conversions. \n We then delve into the tailored strategies we employed to tackle these issues. Whether it was on-page optimization, link building, or a comprehensive content overhaul, we detail the services and tactics that were part of the solution. \n But we don’t stop there. Our case studies also highlight the measurable outcomes of our efforts. We provide clear before-and-after metrics to show the impact of our actions on key performance indicators like organic traffic, conversion rates, and search engine rankings. \n In essence, our case studies serve as a comprehensive guide to our methodology, offering you a transparent look at our approach, execution, and the results we deliver.',
        },
        {
            question: 'How can I use an SEO case study to assess an agency?',
            answer: 'The best SEO case studies offer more than just numbers; they provide a narrative that gives you a glimpse into the agency’s approach to customer relationships and problem-solving. When reading them, consider how the agency discusses its collaboration with the customer. This can give you an idea of the agency’s communication style and commitment to customer success   A good case study should clearly outline what the customer’s objectives were and how the agency’s SEO strategy aimed to meet those goals.If the focus is solely on vanity metrics without tying back to the customer’s business objectives, it may be a red flag. \n Our case studies clearly illustrate our commitment to partnership and our singular focus on our customers’ success.',
        },
        {
            question: 'How do your SEO case studies illustrate your methodology?',
            answer: 'We designed our case studies to be transparent roadmaps of our unique approach to SEO. Each one starts with our customers’ specific challenge, from low organic traffic and poor keyword rankings to content that wasn’t driving conversions. \n We then delve into the tailored strategies we employed to tackle these issues. Whether it was on-page optimization, link building, or a comprehensive content overhaul, we detail the services and tactics that were part of the solution. \n But we don’t stop there. Our case studies also highlight the measurable outcomes of our efforts. We provide clear before-and-after metrics to show the impact of our actions on key performance indicators like organic traffic, conversion rates, and search engine rankings. \n In essence, our case studies serve as a comprehensive guide to our methodology, offering you a transparent look at our approach, execution, and the results we deliver.',
        },
        {
            question: 'How can I use an SEO case study to assess an agency?',
            answer: 'The best SEO case studies offer more than just numbers; they provide a narrative that gives you a glimpse into the agency’s approach to customer relationships and problem-solving. When reading them, consider how the agency discusses its collaboration with the customer. This can give you an idea of the agency’s communication style and commitment to customer success   A good case study should clearly outline what the customer’s objectives were and how the agency’s SEO strategy aimed to meet those goals.If the focus is solely on vanity metrics without tying back to the customer’s business objectives, it may be a red flag. \n Our case studies clearly illustrate our commitment to partnership and our singular focus on our customers’ success.',
        },
        {
            question: 'How do your SEO case studies illustrate your methodology?',
            answer: 'We designed our case studies to be transparent roadmaps of our unique approach to SEO. Each one starts with our customers’ specific challenge, from low organic traffic and poor keyword rankings to content that wasn’t driving conversions. \n We then delve into the tailored strategies we employed to tackle these issues. Whether it was on-page optimization, link building, or a comprehensive content overhaul, we detail the services and tactics that were part of the solution. \n But we don’t stop there. Our case studies also highlight the measurable outcomes of our efforts. We provide clear before-and-after metrics to show the impact of our actions on key performance indicators like organic traffic, conversion rates, and search engine rankings. \n In essence, our case studies serve as a comprehensive guide to our methodology, offering you a transparent look at our approach, execution, and the results we deliver.',
        },
        {
            question: 'How can I use an SEO case study to assess an agency?',
            answer: 'The best SEO case studies offer more than just numbers; they provide a narrative that gives you a glimpse into the agency’s approach to customer relationships and problem-solving. When reading them, consider how the agency discusses its collaboration with the customer. This can give you an idea of the agency’s communication style and commitment to customer success   A good case study should clearly outline what the customer’s objectives were and how the agency’s SEO strategy aimed to meet those goals.If the focus is solely on vanity metrics without tying back to the customer’s business objectives, it may be a red flag. \n Our case studies clearly illustrate our commitment to partnership and our singular focus on our customers’ success.',
        },
        {
            question: 'How do your SEO case studies illustrate your methodology?',
            answer: 'We designed our case studies to be transparent roadmaps of our unique approach to SEO. Each one starts with our customers’ specific challenge, from low organic traffic and poor keyword rankings to content that wasn’t driving conversions. \n We then delve into the tailored strategies we employed to tackle these issues. Whether it was on-page optimization, link building, or a comprehensive content overhaul, we detail the services and tactics that were part of the solution. \n But we don’t stop there. Our case studies also highlight the measurable outcomes of our efforts. We provide clear before-and-after metrics to show the impact of our actions on key performance indicators like organic traffic, conversion rates, and search engine rankings. \n In essence, our case studies serve as a comprehensive guide to our methodology, offering you a transparent look at our approach, execution, and the results we deliver.',
        },
        {
            question: 'How can I use an SEO case study to assess an agency?',
            answer: 'The best SEO case studies offer more than just numbers; they provide a narrative that gives you a glimpse into the agency’s approach to customer relationships and problem-solving. When reading them, consider how the agency discusses its collaboration with the customer. This can give you an idea of the agency’s communication style and commitment to customer success   A good case study should clearly outline what the customer’s objectives were and how the agency’s SEO strategy aimed to meet those goals.If the focus is solely on vanity metrics without tying back to the customer’s business objectives, it may be a red flag. \n Our case studies clearly illustrate our commitment to partnership and our singular focus on our customers’ success.',
        },
        {
            question: 'How do your SEO case studies illustrate your methodology?',
            answer: 'We designed our case studies to be transparent roadmaps of our unique approach to SEO. Each one starts with our customers’ specific challenge, from low organic traffic and poor keyword rankings to content that wasn’t driving conversions. \n We then delve into the tailored strategies we employed to tackle these issues. Whether it was on-page optimization, link building, or a comprehensive content overhaul, we detail the services and tactics that were part of the solution. \n But we don’t stop there. Our case studies also highlight the measurable outcomes of our efforts. We provide clear before-and-after metrics to show the impact of our actions on key performance indicators like organic traffic, conversion rates, and search engine rankings. \n In essence, our case studies serve as a comprehensive guide to our methodology, offering you a transparent look at our approach, execution, and the results we deliver.',
        },
        {
            question: 'How can I use an SEO case study to assess an agency?',
            answer: 'The best SEO case studies offer more than just numbers; they provide a narrative that gives you a glimpse into the agency’s approach to customer relationships and problem-solving. When reading them, consider how the agency discusses its collaboration with the customer. This can give you an idea of the agency’s communication style and commitment to customer success   A good case study should clearly outline what the customer’s objectives were and how the agency’s SEO strategy aimed to meet those goals.If the focus is solely on vanity metrics without tying back to the customer’s business objectives, it may be a red flag. \n Our case studies clearly illustrate our commitment to partnership and our singular focus on our customers’ success.',
        },
        {
            question: 'How do your SEO case studies illustrate your methodology?',
            answer: 'We designed our case studies to be transparent roadmaps of our unique approach to SEO. Each one starts with our customers’ specific challenge, from low organic traffic and poor keyword rankings to content that wasn’t driving conversions. \n We then delve into the tailored strategies we employed to tackle these issues. Whether it was on-page optimization, link building, or a comprehensive content overhaul, we detail the services and tactics that were part of the solution. \n But we don’t stop there. Our case studies also highlight the measurable outcomes of our efforts. We provide clear before-and-after metrics to show the impact of our actions on key performance indicators like organic traffic, conversion rates, and search engine rankings. \n In essence, our case studies serve as a comprehensive guide to our methodology, offering you a transparent look at our approach, execution, and the results we deliver.',
        },
    ]
}

interface QAndAProps {
    className?: string;
 }

function Arrow(props: { color: string; rotate: number; className:string; onClick: () => void }): JSX.Element {
    
// 
    return (
        <svg
            fill={props.color}
            onClick={props.onClick}
            style={{ transform: `rotate(${props.rotate}deg)`, transition: " 0.3s ease-out" }}
            className={`${props.className} hover:cursor-pointer`}
            height="20px"
            width="20px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
           
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    id="XMLID_222_"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                ></path>
            </g>
        </svg>
    );
}

const QAndA: React.FC<QAndAProps> = () => {
    const size = data.QandA.length;
    const initialArray = Array(size).fill(false);
    const [open, setOpen] = useState < boolean[] > (initialArray);

    const setElement = (index: number, value: boolean) => {
        if (index >= 0 && index < size) {
            setOpen(prevArray => {
                const newArray = [...prevArray];
                newArray[index] = value;
                return newArray;
            });
        } else {
            console.log("Index out of bounds");
        }
    };

    return (
        <div className="flex justify-center pt-[120px] pb-[60px] items-center">
            <div className="lg:w-4/5 max-w-[1200px] w-full flex sm:flex-row flex-col justify-between">
                <p className="text-dark-red ml-[20px] sm:w-[50%] w-[100%] text-xxl lg:text-xxxxl font-normal font-Amiri leading-[32px] lg:leading-relaxed">
                    {data.title}
                </p>
                <div className="sm:w-[50%] w-[100%] sm:items-start items-center sm:mt-[0px] mt-[20px] justify-center flex flex-col ">
                    {data.QandA.map((card, i) => (
                        <div key={i} className="w-[90%] border-t-[1px] border-black py-4">
                            <div className="relative w-full flex justify-between items-center">
                                <button
                                    className="text-xl text-left w-[80%] hover:text-light-pink hover:cursor-pointer font-DM-sans font-bold"
                                    style={{ color: open[i] ? "#E55447" : "" }}
                                    onClick={() => setElement(i, !open[i])}
                                >
                                    {card.question}
                                </button>
                                <Arrow
                                    color="#E55447"
                                    className="h-[15px] w-[15px]"
                                    rotate={open[i] ? 270 : 90}
                                    onClick={() => setElement(i, !open[i])}
                                />
                            </div>
                            <div className={` overflow-hidden `} style={{ maxHeight: open[i] ? "1000px" : "0px", transition: "max-height 0.5s ease-in-out" }}>
                                <p className="font-DM-sans text-base leading-[25px] font-normal mt-[20px]">
                                    {card.answer.split('\n').map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            <br /> <br />
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QAndA;
