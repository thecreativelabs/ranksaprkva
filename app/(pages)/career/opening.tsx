import React from "react";
import Container from "@/components/Container";
import { Careers } from "@/types/sanity";

const data = [
  {
    section: "Current Job Openings",
    departmentOptions: [
      { value: "", label: "All Departments" },
      { value: "Content", label: "Content" },
      { value: "SEO", label: "SEO" },
    ],
    jobOpenings: [
      {
        heading: "Content",
        subheading: "Content Strategist",
        description: "remote",
      },
      {
        heading: "SEO",
        subheading: "Senior SEO Specialist",
        description: "remote",
      },
    ],
  },
];

const Opening = ({
  jobOpeningsSection: data1,
}: Pick<Careers, "jobOpeningsSection">) => {
  return (
    <div className="bg-graybg mt-10 sm:mt-20 md:mt-24 h-[560px] sm:h-[600px] flex justify-center">
      <Container>
        <div className="text-center mt-10 sm:mt-20">
          {data.map((sectionData, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-3xl sm:text-5xl tracking-wide text-dark-red font-tertiary">
                {sectionData?.section}
              </h2>
              <div className="mb-4 mt-14 sm:mt-14">
                <label
                  htmlFor="interest"
                  className="block text-xs sm:text-sm font-medium text-gray-500"
                >
                  Department
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="mt-1 p-1 text-center border text-gray-600 text-sm rounded w-full md:w-[200px]"
                  required
                >
                  {sectionData.departmentOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {sectionData.jobOpenings.map((item, index) => (
                  <div key={index} className="mt-6">
                    <h2 className="text-lg sm:text-xl font-bold text-dark-red">
                      {item.heading}
                    </h2>
                    <p className="text-md sm:text-lg mt-4 font-semibold text-violet">
                      {item.subheading}
                    </p>
                    <p className="text-sm sm:text-md">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Opening;
