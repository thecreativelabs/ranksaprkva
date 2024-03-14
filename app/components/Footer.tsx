import React from "react";
import Container from "./Container";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// import { Icon } from "astro-icon/components";

const footermenu = {
  company: [
    {
      title: "Company",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/careers",
    },
    {
      title: "Careers",
      path: "/blog",
    },
    {
      title: "Method",
      path: "/contact",
    },
    {
      title: "Awards",
      path: "/contact",
    },
    {
      title: "Reviews",
      path: "/contact",
    },
  ],
  Learn: [
    {
      title: "Why SEO Matters",
      path: "/about",
    },
    {
      title: "How To Outsource SEO",
      path: "/careers",
    },
    {
      title: "Keyword Research Explained",
      path: "/blog",
    },
    {
      title: "On-Page SEO Explained",
      path: "/contact",
    },
    {
      title: "Off-Page SEO Explained",
      path: "/contact",
    },
    {
      title: "2024 SEO Checklist",
      path: "/contact",
    },
  ],
  Services: [
    {
      title: "SEO Services",
      path: "/about",
    },
    {
      title: "On-Page SEO",
      path: "/careers",
    },
    {
      title: "Keyword Research",
      path: "/blog",
    },
    {
      title: "SEO Audit",
      path: "/contact",
    },
    {
      title: "Off-Page SEO",
      path: "/contact",
    },
    {
      title: "Link Building",
      path: "/contact",
    },
    {
      title: "SEO Content Writing",
      path: "/contact",
    },
    {
      title: "Web Implementation",
      path: "/contact",
    },
  ],
  Where: [
    {
      title: "San Francisco SEO",
      path: "/about",
    },
    {
      title: "Austin SEO Agency",
      path: "/careers",
    },
    {
      title: "Boston SEO Agency",
      path: "/blog",
    },
    {
      title: "Chicago SEO Agency",
      path: "/contact",
    },
    {
      title: "Denver SEO Agency",
      path: "/contact",
    },
    {
      title: "Des Moines SEO Agency",
      path: "/contact",
    },
    {
      title: "DC SEO Company",
      path: "/contact",
    },
    {
      title: "Los Angeles SEO Agency",
      path: "/contact",
    },
    {
      title: "New York City SEO Agency",
      path: "/contact",
    },
    {
      title: "Phoenix SEO Agency",
      path: "/contact",
    },
    {
      title: "San Diego SEO Agency",
      path: "/contact",
    },
    {
      title: "Seattle SEO Agencyy",
      path: "/contact",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="py-14 bg-[#3b0d17] border-t border-slate-100">
      <div className="flex flex-col md:flex-row justify-center md:gap-20">
        <div className="flex items-center mb-4 md:mb-0 md:mr-4">
          <img
            src="https://victorious.com/wp-content/uploads/2021/02/GLobal-SEO.svg"
            className="w-20 h-20"
          />
          <div className="ml-4 text-white">
            <p className="text-md">Global SEO Agency of the Year</p>
            <p className="text-xs">Search Engine Land®</p>
          </div>
        </div>

        <div className="flex items-center mb-4 md:mb-0 md:mr-4">
          <img
            src="https://victorious.com/wp-content/uploads/2021/02/Best-National-SEO-20.svg"
            className="w-20 h-20"
          />
          <div className="ml-4 text-white">
            <p className="text-md">U.S. SEO Agency of the Year</p>
            <p className="text-xs">U.S. Search Awards®</p>
          </div>
        </div>

        <div className="flex items-center">
          <img
            src="https://victorious.com/wp-content/uploads/2021/02/Enterprise-SEO.svg"
            className="w-20 h-20"
          />
          <div className="ml-4 text-white">
            <p className="text-md">Enterprise SEO Agency of the Year</p>
            <p className="text-xs">Clutch®</p>
          </div>
        </div>
      </div>

      <Container>
        <div className="mx-auto my-10 bg-[#e55447] h-[1px] w-full"></div>
        <div className="flex-wrap justify-between gap-4 lg:flex md:flex sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="text-white w-[200px] mb-8 flex sm:col-span-2 md:col-span-3 lg:col-span-2">
            <a
              href="/"
              className="text-lg flex items-start justify-start transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3B0D17] focus-visible:outline-none focus-visible:shadow-outline-[#3B0D17] px-2 -ml-2"
            >
              <div className="w-auto md:w-auto">
                <img
                  src="https://cdn.shortpixel.ai/spai/q_glossy+to_auto+ret_img/victorious.com/wp-content/uploads/2021/02/victorious-white-logo.svg"
                  alt="logo"
                />
              </div>
            </a>
          </div>

          <div className=" w-[200px] mb-10 text-white ">
            <h3 className="font-medium text-lg">Company</h3>
            <div className="flex flex-col mt-3">
              {footermenu.company.map((item) => (
                <a
                  key=""
                  href={item.path || "#"}
                  className="py-2 text-sm text-white  hover:text-[#e55447]"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <div className=" w-[200px] mb-10">
            <h3 className="font-medium text-lg text-white">Learn</h3>
            <div className="flex flex-col mt-3">
              {footermenu.Learn.map((item) => (
                <a
                  key=""
                  href={item.path || "#"}
                  className="py-2 text-sm text-white  hover:text-[#e55447]"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <div className=" w-[200px] mb-10">
            <h3 className="font-medium text-lg text-white">Services</h3>
            <div className="flex flex-col mt-3">
              {footermenu.Services.map((item) => (
                <a
                  key=""
                  href={item.path || "#"}
                  className="py-2 text-sm text-white  hover:text-[#e55447]"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <div className=" w-[200px]">
            <h3 className="font-medium text-lg text-white">Where We Are</h3>
            <div className="flex flex-col mt-3">
              {footermenu.Where.map((item) => (
                <a
                  key=""
                  href={item.path || "#"}
                  className="py-2 text-sm text-white  hover:text-[#e55447]"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="mx-auto my-10 bg-[#e55447] h-[1px] w-full"></div>
      </Container>

      <div className="mt-4 pt-10 px-5 ">
        <Container >
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col items-center lg:flex-row lg:items-start">
            <p className="text-center text-sm text-white  [text-wrap:balance] mb-4 lg:mb-0 lg:mr-2 lg:text-left">
              Copyright © {new Date().getFullYear()} Victorious. All rights
              reserved.
            </p>
            <span className="mr-4"></span>
            <p className="text-center text-sm text-white mt-2 lg:mt-0 lg:text-left">
              <a href="/privacy" className="hover:text-[#e55447]">
                Privacy Policy
              </a>{" "}
              ・
              <a href="/term" className="hover:text-[#e55447]">
                Terms of Use
              </a>{" "}
              ・
              <a href="/privacy" className="hover:text-[#e55447]">
                Sitemap
              </a>
            </p>
          </div>

          <div className="flex gap-3 mt-4 items-center lg:mt-0 lg:ml-auto">
            <div className="bg-[#e55447] hover:bg-[#fff] transition-all duration-200 rounded-full w-10 h-10 flex items-center justify-center text-[#3b0d17]">
              <FaFacebookF name="bx:bxl-facebook" className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </div>
            <div className="bg-[#e55447] hover:bg-[#fff] transition-all duration-200 rounded-full w-10 h-10 flex items-center justify-center text-[#3b0d17]">
              <FaInstagram name="bx:bxl-linkedin" className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </div>
            <div className="bg-[#e55447] hover:bg-[#fff] transition-all duration-200 rounded-full w-10 h-10 flex items-center justify-center text-[#3b0d17]">
              <FaLinkedin name="bx:bxl-twitter" className="w-6 h-6" />
              <span className="sr-only">Twitter or X</span>
            </div>
            <div className="bg-[#e55447] hover:bg-[#fff] transition-all duration-200 rounded-full w-10 h-10 flex items-center justify-center text-[#3b0d17]">
              <FaTwitter name="bx:bxl-youtube" className="w-6 h-6" />
              <span className="sr-only">Youtube</span>
            </div>
          </div>
        </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
