"use client";

import React, { useEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "./styles.css";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Container from "../Container";
import { Services, WhoWeServe } from "@/(pages)/layout";
import { urlForImage } from "@sanity/lib/image";
import Button from "../Button";

const menuItems = [
  {
    title: "Method",
    path: "/method",
  },
  {
    title: "Services",
    trigger: true,
  },
  {
    title: "Case Studies",
    path: "/case-study",
  },
  {
    title: "Who We Serve",
    trigger: true,
  },

  {
    title: "Company",
    path: "/company",
  },
  {
    title: "Learn",
    path: "/learn",
  },
];

const RadixNavbar = ({
  services,
  whoWeServe,
}: {
  services: Services[];
  whoWeServe: WhoWeServe[];
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const servicesList = services
    .filter((item) => !item.subCategory)
    .map((item) => ({
      ...item,
      childrens: services.filter(
        (child) => item.slug.current === child.subCategory?.slug.current
      ),
    }))
    .sort((a, b) => b.childrens.length - a.childrens.length);

  const whoWeServeList = [
    {
      type: "Industry",
      list: whoWeServe.filter((item) => item.type === "industry"),
      viewAll: "See all Industries",
    },
    {
      type: "Platform",
      list: whoWeServe.filter((item) => item.type === "platform"),
      viewAll: "See all Platforms",
    },
    {
      type: "Market",
      list: whoWeServe.filter((item) => item.type === "market"),
      viewAll: "See all Markets",
    },
  ];

  return (
    <div
      className={classNames(
        "z-[1000] sticky top-0 py-2 transition-all duration-300 bg-violetLight"
      )}
    >
      <Container className="relative">
        <NavigationMenu.Root
          className={classNames(
            "bg-violetLight relative rounded-full flex items-center justify-between"
          )}
        >
          {/* logo */}
          <Link href="/">
            <div className="w-32 md:w-40 md:ml-4">
              <img src="/logo.png" alt="RankSpark logo" className="p-2" />
            </div>
          </Link>

          {/* list */}
          <div className="hidden md:block">
            <NavigationMenu.List className="flex justify-center">
              {menuItems.map((item, key) =>
                item.trigger ? (
                  <NavigationMenu.Item key={key}>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                      {item.title}
                      <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="NavigationMenuContent">
                      {item.title == "Services" ? (
                        <div className="p-8 w-[850px] grid grid-rows-2 grid-flow-col gap-4">
                          {servicesList.map((item, key) => (
                            <div
                              className={
                                item.childrens.length > 0
                                  ? "row-span-2"
                                  : "row-span-1"
                              }
                              key={key}
                            >
                              <div className="flex flex-col">
                                <Link
                                  href={`/services/${item.slug.current}`}
                                  className="ListItemLink"
                                >
                                  <div className="flex space-x-4">
                                    <img
                                      className="h-[50px] w-[50px] p-2"
                                      src={urlForImage(item.icon)}
                                      alt={item.icon?.alt}
                                    />
                                    <div>
                                      <p className="text-dark-red text-md font-semibold ">
                                        {item.title}
                                      </p>
                                      <p className="text-sm pt-2">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                                <div className="pt-4 grid grid-cols-2 gap-2 ml-16">
                                  {item.childrens.map((child, key) => (
                                    <div key={key}>
                                      <Link
                                        href={`/services/${child.slug.current}`}
                                      >
                                        <p className="text-violet">
                                          {child.title}
                                        </p>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-8 w-[800px] grid grid-cols-3 space-x-4">
                          {whoWeServeList.map((item, key) => (
                            <NavigationMenu.Link asChild key={key}>
                              <div>
                                <p className="text-center border-b border-slate-200 pb-2">
                                  {item.type}
                                </p>
                                <div className="mt-4">
                                  {item.list.map((item, key) => (
                                    <Link
                                      href={`/who-we-serve/${item.pageMeta.slug.current}`}
                                      className="ListItemLink"
                                      key={key}
                                    >
                                      <div className="flex items-center space-x-4">
                                        <img
                                          src={urlForImage(item.pageMeta.icon)}
                                          alt={item.pageMeta.icon.alt}
                                          className="h-[50px] w-[50px] p-2"
                                        ></img>
                                        <p>{item.pageMeta.name}</p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                                <div className="pt-4">
                                  <Link href={`/who-we-serve#${item.type}`}>
                                    <p className="text-center text-violet underline">
                                      {item.viewAll}
                                    </p>
                                  </Link>
                                </div>
                              </div>
                            </NavigationMenu.Link>
                          ))}
                        </div>
                      )}
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                ) : (
                  <NavigationMenu.Item key={key}>
                    <Link className="NavigationMenuLink" href={item.path || ""}>
                      {item.title}
                    </Link>
                  </NavigationMenu.Item>
                )
              )}

              <NavigationMenu.Indicator className="NavigationMenuIndicator z-[1000]">
                <div className="Arrow" />
              </NavigationMenu.Indicator>
            </NavigationMenu.List>
          </div>

          <div className="ViewportPosition z-[1000] mt-[-9px]">
            <NavigationMenu.Viewport className="NavigationMenuViewport" />
          </div>

          {/* Hamburger menu on mobile */}
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
                width="50"
                height="50"
                viewBox="0 0 50 50"
                className="w-6 h-6 text-2xl font-bold text-primary"
              >
                <path d="M5 8A2 2 0 0 0 5 12L45 12A2 2 0 0 0 45 8L5 8zM5 23A2 2 0 0 0 5 27L45 27A2 2 0 0 0 45 23L5 23zM5 38A2 2 0 0 0 5 42L45 42A2 2 0 0 0 45 38L5 38z"></path>
              </svg>
            )}
          </div>
          <div className="hidden md:block">
            <Button
              props={{ text: "EXPLORE OUR METHOD", path: "/seo" }}
              className="!mt-0"
            />
          </div>
        </NavigationMenu.Root>

        {/* Mobile dropdown */}
        {dropdownOpen && (
          <div
            className={
              "md:hidden shadow-lg absolute top-10 inset-x-0 bg-violetLight z-[100] flex flex-col py-4 px-8 rounded-b-3xl max-h-[60vh] overflow-y-scroll"
            }
          >
            <ul className="space-y-2">
              {menuItems.map((item, key) =>
                item.trigger ? (
                  <details key={key}>
                    <summary className="text-lg">{item.title}</summary>
                    <ul className="ml-4 bg-violetExtraLight rounded-3xl px-4 py-2 mt-4">
                      {item.title == "Services"
                        ? servicesList.map((item, key) => (
                            <li key={key} className="mt-2">
                              <Link href={`/services/${item.slug.current}`}>
                                <div className="flex items-center space-x-2">
                                  <img
                                    src={urlForImage(item.icon)}
                                    className="w-8 h-8"
                                  />
                                  <span className="text-lg underline underline-offset-4 decoration-dashed decoration-violet">
                                    {item.title}
                                  </span>
                                </div>
                              </Link>
                              <ul className="ml-14 space-y-2 mt-2 list-disc text-violet">
                                {item.childrens.map((child, key) => (
                                  <li key={key}>
                                    <Link
                                      href={`/services/${child.slug.current}`}
                                    >
                                      <span className="text-lg text-black">
                                        {child.title}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))
                        : whoWeServeList.map((item, key) => (
                            <li key={key} className="space-y-2 mt-4">
                              <p className="text-lg">{item.type}</p>
                              <ul className="ml-4 space-y-2">
                                {item.list.map((item, key) => (
                                  <li key={key}>
                                    <Link
                                      href={`/who-we-serve/${item.pageMeta.slug.current}`}
                                    >
                                      <div className="flex items-center space-x-2">
                                        <img
                                          src={urlForImage(item.pageMeta.icon)}
                                          className="w-8 h-8"
                                        />
                                        <span className="text-lg underline underline-offset-4 decoration-dashed decoration-violet">
                                          {item.pageMeta.name}
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                    </ul>
                  </details>
                ) : (
                  <li key={key}>
                    <Link href={item.path || ""}>
                      <span className="text-lg underline underline-offset-4 decoration-dashed decoration-violet">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default RadixNavbar;
