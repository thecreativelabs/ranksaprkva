import React from "react";
import Container from "@/components/Container";
import { GoArrowRight } from "react-icons/go";
import { About } from "@/types/sanity";
import Button from "@/components/Button";

const team = ({ teamSection }: Pick<About, "teamSection">) => {
  return (
    <div className="mt-20 py-16 bg-graybg">
      <Container>
        <div className="h-full py-8">
          <p className="md:text-3xl mt-10 h-auto leading-8 tracking-wider font-semibold text-xl font-primary text-[#3B0D17] w-auto md:w-[800px]">
            <span>{teamSection?.heading}</span>
          </p>
          <p className="mt-6 w-auto h-auto text-[#3B0D17] tracking-wide md:w-[740px]">
            {teamSection?.description}
          </p>
        </div>
        <Button props={teamSection?.cta} />
      </Container>
    </div>
  );
};

export default team;
