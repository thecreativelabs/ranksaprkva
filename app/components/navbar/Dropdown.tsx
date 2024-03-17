import React, { useState } from "react";

export interface NavItem {
  title: string;
  path: string;
}

interface NavDropdownProps {
  title: string;
  lastItem?: boolean;
  childrens: NavItem[];
  path:string;
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  title,
  lastItem,
  childrens,
  path,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="relative z-50 isolate">
      <div className="group">
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-1 text-sm w-full lg:w-auto transition lg:px-3 py-2 text-[#3B0D17] hover:text-[#F0B342] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo focus-visible:outline-none focus-visible:shadow-outline-indigo rounded-full"
        >
          <a href={path}>{title}</a>
          {/* <span>{title}</span> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className={`w-3 h-3 mt-0.5 ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <div
            className={`lg:absolute w-full lg:w-48 z-50 border-l lg:border-0 border-slate-200 ${
              lastItem
                ? "lg:right-0 origin-top-right"
                : "lg:left-0 origin-top-left"
            }`}
          >
            <div className="mx-auto w-[300px] h-[200px] px-4 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col overflow-hidden">
              {childrens.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="py-1 text-sm text-gray-600 hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo rounded"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default NavDropdown;
