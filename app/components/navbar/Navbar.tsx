"use client";

import Link from "next/link";
import Container from "../Container";
import Dropdown from "../navbar/Dropdown";
import Image from "next/image";
import { useEffect, useState } from "react";

const menuitems = [
  {
    title: "Method",
    path: "/methods",
  },
  {
    title: "Services",
    path: "/services",
    // children: marketingSolutions?.map((solution) => ({
    //   title: solution.title,
    //   path: "/marketing-solutions/" + solution.slug.current,
    // })),
  },
  {
    title: "Case Studies",
    children: [
      {
        title: "About Us",
        path: "/about",
      },
      {
        title: "Blogs",
        path: "/blog",
      },
      {
        title: "Careers",
        path: "/careers",
      },
    ],
    path: "/case-study",
  },
  {
    title: "Who We Serve",
    children: [
      {
        title: "Success Stories",
        path: "/success-stories",
      },
    ],
    path: "/who-we-serve",
  },

  {
    title: "Company",
    path: "/company",
  },
  {
    title: "Learn",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = `border border-slate-200 transition-all duration-300 ${
    isSticky ? "sticky top-0 bg-white rounded-md" : ""
  }`;

  const defaultClasses =
    "mt-4 py-2 z-50 border-transparent bg-white mx-auto w-full lg:w-[1200px]";
  const activeClasses =
    "top-4 z-50 py-2 border-gray-200 backdrop-blur-lg mx-auto w-[95%] lg:w-[1200px]";

  // const navbar = () => {
  return (
    <header
      className={`${headerClasses} ${
        isSticky ? activeClasses : defaultClasses
      }`}
    >
      <Container>
        <div className="bg-white flex flex-col lg:flex-row justify-between items-center relative z-50 transition-none">
          <div className="flex w-full lg:w-auto items-center justify-between">
            <a
              href="/"
              className="text-lg flex items-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3B0D17] focus-visible:outline-none focus-visible:shadow-outline-[#3B0D17] rounded-full px-2 -ml-2"
            >
              <div className="w-32 md:w-32">
                <Image
                  src="https://victorious.com/wp-content/uploads/2023/08/victorious-logo.svg"
                  alt="logo"
                  width={120}
                  height={120}
                />
              </div>
            </a>
            <div
              className="block lg:hidden cursor-pointer"
              onClick={handleDropdownToggle}
            >
              {dropdownOpen ? (
                // Cross icon for close
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-2xl font-bold text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon for open
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  className="w-6 h-6 text-2xl font-bold text-primary"
                >
                  <path d="M5 8A2 2 0 0 0 5 12L45 12A2 2 0 0 0 45 8L5 8zM5 23A2 2 0 0 0 5 27L45 27A2 2 0 0 0 45 23L5 23zM5 38A2 2 0 0 0 5 42L45 42A2 2 0 0 0 45 38L5 38z"></path>
                </svg>
              )}
            </div>
          </div>
          <div
            className={`md:ml-[150px] text-[#3B0D17] gap-y-2 text-lg w-full lg:w-auto mt-2 lg:flex lg:mt-0 ${
              dropdownOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col font-primary font-semibold lg:flex-row lg:gap-2">
              {menuitems.map((item, index) => (
                <>
                  {item.children ? (
                    <Dropdown
                      path={item.path}
                      title={item.title}
                      childrens={item.children}
                      lastItem={index === menuitems.length - 1}
                    />
                  ) : (
                    <li className="relative">
                      <a
                        href={item.path}
                        className="relative flex lg:px-3 py-2 border-spacing-y-3 text-sm text-[#3B0D17] transition hover:text-[#F0B342] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo focus-visible:outline-none"
                      >
                        {item.title}
                        <span className="absolute left-0 right-0 bottom-0 rounded-none transform transition-transform origin-bottom"></span>
                      </a>
                    </li>
                  )}
                </>
              ))}
            </ul>
            <button className="rounded-sm bg-[#F0B342] text-[#3B0D17] py-4 px-6 lg:hidden flex items-center gap-4 hover:bg-[#c92045] hover:text-white transition-all duration-300">
              <span className="font-medium text-sm font-semibold cursor-pointer">
                FREE SEO REVIEW
              </span>
            </button>
          </div>
          <div className="rounded-sm bg-[#F0B342] text-[#3B0D17] w-[200px] h-12 hidden lg:flex items-center gap-4 hover:bg-[#c92045] hover:text-white transition-all duration-300">
            <button className="relative inline-flex items-center group gap-px text-center">
              <span className="ml-6 font-medium cursor-pointer">
                FREE SEO REVIEW
              </span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
