import React from 'react';
import Container from '@/components/Container'
import { BsArrowRightCircleFill } from "react-icons/bs";

const Topnav = () => {
  const menuitems = [
    {
      title: 'Contact',
      path: '/contact', 
    },
    {
      title: 'Careers',
      path: '/career',
    },
    {
      title: 'Customer Login',
      path: '/',
    },
  ];

  return (
    <div className="bg-[#3B0D17] text-white">
      <Container>
        <div className="navbar flex flex-col w-full h-12 text-sm justify-center">
          <div className="flex flex-col items-center justify-between ml-2 lg:flex-row lg:ml-[100px] lg:mr-[100px]">
            <div className="cursor-pointer items-center space-x-2 hidden lg:flex">
              <a href="/">
                <span>🎉 We&apos;re the 2023 SEO Agency of the Year!</span>
              </a>
              <BsArrowRightCircleFill size="20" className="text-red-500" />
            </div>
            <div className="flex items-center space-x-4">
              {menuitems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center cursor-pointer space-x-2 hover:text-red-500 transition-all duration-400"
                >
                  <a href={item.path}>
                    <span>{item.title}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Topnav;
