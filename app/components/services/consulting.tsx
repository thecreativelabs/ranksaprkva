import Consulting from "@/components/whoWeServe/Individual/consulting";
import { FaAlignRight, FaAccusoft, FaKickstarter } from "react-icons/fa";
import { GrKey } from "react-icons/gr";

export default function CaseStudyConsulting(features: {
  title: string;
  heading: string;
  description: string;
  grid: {
    title: string;
    description: string;
  }[];
}) {
  const icons = [
    <FaAlignRight
      key={0}
      className="w-[35px] h-[35px] font-light text-light-pink"
    />,
    <FaAccusoft
      key={1}
      className="w-[35px] h-[35px] font-light text-light-pink"
    />,
    <GrKey key={2} className="w-[35px] h-[35px] font-light text-light-pink" />,
  ];
  return <Consulting {...features} icons={icons} />;
}
