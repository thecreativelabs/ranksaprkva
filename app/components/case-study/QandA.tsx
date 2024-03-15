'use client';
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";








const QAndA = (props: any) => {
    const data = (props==null || props.data == null)?{
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
    }:props.data;
    const size = data.QandA.length;
    const initialArray = Array(size).fill(false);
    const [open, setOpen] = useState<boolean[]>(initialArray);

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
                <p className="text-dark-red ml-[20px] sm:w-[40%] w-[90%] text-xxxl lg:text-xxxl font-normal font-Amiri leading-[32px] lg:leading-relaxed">
                    {data.title}
                </p>
                <div className="sm:w-[50%] w-[100%] sm:items-start items-center sm:mt-[0px] mt-[20px] justify-center flex flex-col ">
                    {data.QandA.map((card:any, i:any) => (
                        <div key={i} className="w-[90%] border-t-[1px] border-black py-4">
                            <div className="relative w-full flex justify-between items-center">
                                <button
                                    className="text-xl text-left w-[80%] hover:text-light-pink hover:cursor-pointer font-DM-sans font-bold"
                                    style={{ color: open[i] ? "#E55447" : "" }}
                                    onClick={() => setElement(i, !open[i])}
                                >
                                    {card.question}
                                </button>
                                <IoIosArrowDown className={(open[i])?"text-light-pink h-[25px] w-[25px] hover:cursor-pointer rotate-[180deg] ":"text-light-pink w-[25px] h-[25px] hover:cursor-pointer  rotate-[0deg]"} onClick={() => setElement(i, !open[i])} />
                                
                            </div>
                            <div className={` overflow-hidden `} style={{ maxHeight: open[i] ? "1000px" : "0px", transition: "max-height 0.5s ease-in-out" }}>
                                <p className="font-DM-sans text-base leading-[25px] font-normal mt-[20px]">
                                    {card.answer.split('\n').map((line:any, i:any) => (
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
