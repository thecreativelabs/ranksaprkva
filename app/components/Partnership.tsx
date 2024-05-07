import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import Container from "./Container";
import { PortableText } from "@components/PortableText";
import Button from "@components/Button";
import SvgDecorative from "./SvgDecorative";
import Link from "next/link";

const Partnership = ({ data }: { data: any[] }) => {
  return (
    <Container className="relative">
      <SvgDecorative variant="left" />
      <div className="mt-18 mb-20">
        <div className="grid md:grid-cols-2 py-10">
          <div className="grid md:ml-16 mt-14">
            <div className="max-w-lg">
              <h3 className="md:text-4xl font-tertiary font-medium mt-4 text-3xl text-dark-red">
                {data?.[0].title}
              </h3>
              <PortableText value={data?.[0].description} />
              {/* <div className="mt-10">
                <Button props={data?.[0].button} variant="link" />
              </div> */}
            </div>
          </div>

          <div className="grid place-items-center">
            <div className="sm:grid-cols-2 md:grid-cols-3 mt-16 gap-8 md:gap-20">
              <div className="bg-graybg w-full flex flex-col gap-4 mb-6 items-start group rounded-[3rem] transition-all px-8 py-6">
                <div className="items-center justify-between">
                  <div className="mt-1 mb-6 bg-white border shadow shadow-indigo-100/50 border-indigo-100 transition-colors rounded-full grid place-items-center p-2 w-14 h-14 shrink-0">
                    <span className="text-light-red text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M30.9798 25.8398L36.2099 31.0699C37.6299 32.4899 37.6299 34.7898 36.2099 36.2098C34.7899 37.6298 32.4899 37.6298 31.0699 36.2098L25.8398 30.9798"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7.05 19.9499V20.0999C7.05 20.7499 7.58 21.2799 8.23 21.2799H10.13C11.09 21.2799 11.86 20.4999 11.86 19.5499V18.3099C11.86 17.3499 11.08 16.5799 10.13 16.5799H8.73C7.77 16.5799 7 15.6999 7 14.7499V13.6099C7 12.6499 7.78 11.8799 8.73 11.8799H10.63C11.28 11.8799 11.81 12.4099 11.81 13.0599V13.2099"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M18.6998 21.2804H15.2099C14.8699 21.2804 14.5898 21.0004 14.5898 20.6604V12.4803C14.5898 12.1403 14.8699 11.8604 15.2099 11.8604H18.6998"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M17.6698 16.5703H14.5898"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M23.6695 11.8604H23.6595C22.0634 11.8604 20.7695 13.1543 20.7695 14.7504V18.3904C20.7695 19.9865 22.0634 21.2804 23.6595 21.2804H23.6695C25.2656 21.2804 26.5595 19.9865 26.5595 18.3904V14.7504C26.5595 13.1543 25.2656 11.8604 23.6695 11.8604Z"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M16.62 31.24C24.6944 31.24 31.24 24.6944 31.24 16.62C31.24 8.54559 24.6944 2 16.62 2C8.54559 2 2 8.54559 2 16.62C2 24.6944 8.54559 31.24 16.62 31.24Z"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <h3 className="font-semibold text-md font-sans text-left md:text-2xl text-dark-red">
                    {data?.[1].title}
                  </h3>
                </div>
                <div>
                  <PortableText value={data?.[1].description} />
                </div>
                <div className="mt-10 flex items-center mb-8 text-violet underline  cursor-pointer">
                  <Link
                    href={data?.[1].button.path || "/"}
                    className="flex items-center"
                  >
                    <p className="mr-2 font-sans font-semibold text-red-600tracking-wide">
                      {data?.[1].button.text}
                    </p>
                  </Link>
                </div>
              </div>
              <div className="bg-graybg w-full flex flex-col gap-4 mb-6 items-start group rounded-[3rem] transition-all px-8 py-6">
                <div className="w-full items-center justify-between">
                  <div className="mt-1 mb-6 bg-white border  shadow-indigo-100/50 border-indigo-100 transition-colors rounded-full grid place-items-center p-2 w-14 h-14 shrink-0">
                    <span className="text-light-red">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M10.04 10.8096H23.03"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M8.61035 20.29H21.7404"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M8.61035 15.54H24.4604"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M8.61035 25.04H18.3604"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M8.61035 29.79H16.8204"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M29.0601 29.79V33.25C29.0601 34.16 28.32 34.91 27.4 34.91H5.66003C4.75003 34.91 4 34.17 4 33.25V6.66C4 5.75 4.74003 5 5.66003 5H27.2201C28.1301 5 28.88 5.74 28.88 6.66V14.09"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M22.3799 24.4195L20.0699 30.0995C19.8599 30.6095 20.3699 31.1095 20.8799 30.9095L26.5599 28.5995L36.22 18.9395C37.04 18.1195 37.04 16.7995 36.22 15.9795L34.9999 14.7595C34.1799 13.9395 32.8599 13.9395 32.0399 14.7595L22.3799 24.4195Z"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M34.9905 20.1702L30.8105 15.9902"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M22.3799 24.4199L24.98 27.0199L26.5599 28.5999"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M24.4697 26.5101L32.8997 18.0801"
                          stroke="#895BF7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <h3 className="font-semibold text-md font-sans text-left md:text-2xl text-dark-red">
                    {data?.[2].title}
                  </h3>
                </div>
                <div>
                  <PortableText value={data?.[2].description} />
                </div>
                <div className="mt-10 flex items-center mb-8 text-violet underline  cursor-pointer">
                  <Link
                    href={data?.[2].button.path || "/"}
                    className="flex items-center"
                  >
                    <p className="mr-2 font-sans font-semibold text-red-600tracking-wide">
                      {data?.[2].button.text}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Partnership;
