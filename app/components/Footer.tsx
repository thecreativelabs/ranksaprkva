import React from "react";
import Container from "./Container";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Blog, Location, Services } from "@/(pages)/layout";
// import { Icon } from "astro-icon/components";

const Footer = ({
  blogs,
  services,
  locations,
}: {
  blogs: Blog[];
  services: Services[];
  locations: Location[];
}) => {
  const footermenu = {
    copyright: "RankSpark. All rights reserved.",
    logo: "/logo_initial.png",
    heading: [
      {
        title: "Company",
        item: [
          {
            title: "Company",
            path: "/company",
          },
          {
            title: "Contact",
            path: "/contact",
          },
          {
            title: "Careers",
            path: "/career",
          },
          {
            title: "Method",
            path: "/method",
          },
          {
            title: "Awards",
            path: "/",
          },
          {
            title: "Reviews",
            path: "/",
          },
          {
            title: "Sitemap",
            path: "/sitemap",
          },
        ],
      },
      {
        title: "Learn",
        item: blogs?.map((blog) => ({
          title: blog.footerName,
          path: `/blog/${blog.slug.current}`,
        })),
      },
      {
        title: "Services",
        item: services?.map((service) => ({
          title: service.title,
          path: `/services/${service.slug.current}`,
        })),
      },
      {
        title: "Where We Are",
        item: locations?.map((location) => ({
          title: location.name,
          path: `/location/${location.slug.current}`,
        })),
      },
    ],
    item: [
      {
        logo: "https://victorious.com/wp-content/uploads/2021/02/GLobal-SEO.svg",
        title: "Global SEO Agency of the Year",
        discription: "Search Engine Land®",
      },
      {
        logo: "https://victorious.com/wp-content/uploads/2021/02/Best-National-SEO-20.svg",
        title: "U.S. SEO Agency of the Year",
        discription: "U.S. Search Awards®",
      },
      {
        logo: "https://victorious.com/wp-content/uploads/2021/02/Enterprise-SEO.svg",
        title: "Enterprise SEO Agency of the Year",
        discription: "Clutch®",
      },
    ],
    tnc: [
      {
        title: "Privacy Policy",
        path: "/privacy",
      },
      {
        title: "Terms of Use",
        path: "/tnc",
      },
      {
        title: " Sitemap",
        path: "/blog",
      },
    ],
    media: [
      {
        icon: <FaFacebookF name="bx:bxl-facebook" className="w-6 h-6" />,
        name: "Facebook",
      },
      {
        icon: <FaInstagram name="bx:bxl-linkedin" className="w-6 h-6" />,
        name: "Instagram",
      },
      {
        icon: <FaLinkedin name="bx:bxl-twitter" className="w-6 h-6" />,
        name: "LinkedIn",
      },
      {
        icon: <FaTwitter name="bx:bxl-youtube" className="w-6 h-6" />,
        name: "Twitter",
      },
    ],
  };
  return (
    <footer className="py-14 bg-violet border-t border-slate-100">
      {/* <Container>
        <div className="flex flex-col md:flex-row justify-center md:gap-20">
          {footermenu.item.map((item, index) => (
            <div key={index} className="flex items-center mb-4 md:mb-0 md:mr-4">
              <img src={item.logo} className="w-20 h-20" alt={item.title} />
              <div className="ml-4 text-white">
                <p className="text-md">{item.title}</p>
                <p className="text-xs">{item.discription}</p>
              </div>
            </div>
          ))}
        </div>
      </Container> */}

      <Container>
        <div className="mx-auto my-8 bg-light-pink h-[1px] w-full"></div>
        <div className="flex-wrap  gap-4 lg:flex md:flex sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="text-white w-[200px] mb-8 flex sm:col-span-2 md:col-span-3 lg:col-span-2">
            <a
              href="/"
              className="text-lg h-fit transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-dark-red px-4 "
            >
              <div className="w-auto md:w-auto">
                <img src={footermenu.logo} alt="logo" />
              </div>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white md:px-14">
            {footermenu.heading.map((section) => (
              <div
                key={section.title}
                className="w-[200px] mb-10 md:mr-0 mr-20"
              >
                <h3 className="font-medium text-lg">{section.title}</h3>
                <div className="flex flex-col mt-3">
                  {section.item.map((item, index) => (
                    <a
                      key={index}
                      href={item.path || "#"}
                      className="py-2 text-sm text-white hover:text-white/80"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container>
        <div className="mx-auto my-10 bg-violetLight h-[1px] w-full"></div>
      </Container>

      <div className="mt-4 pt-10 px-5 ">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col items-center lg:flex-row lg:items-start">
              <p className="text-center text-sm text-white  [text-wrap:balance] mb-4 lg:mb-0 lg:mr-2 lg:text-left">
                Copyright © {new Date().getFullYear()} {footermenu.copyright}
              </p>
              <span className="mr-4"></span>
              <p className="text-center text-sm text-white mt-2 lg:mt-0 lg:text-left">
                {footermenu.tnc.map((item, index) => (
                  <>
                    <a href={item.path} className="hover:text-white/80">
                      {item.title}
                    </a>
                    {index !== footermenu.tnc.length - 1 && " ・ "}
                  </>
                ))}
              </p>
            </div>

            <div className="flex gap-3 mt-4 items-center lg:mt-0 lg:ml-auto">
              {footermenu.media.map((item, index) => (
                <div
                  key={index}
                  className="bg-light-pink hover:bg-[#fff] transition-all duration-200 rounded-full w-10 h-10 flex items-center justify-center text-dark-red"
                >
                  {item.icon}
                  <span className="sr-only">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
