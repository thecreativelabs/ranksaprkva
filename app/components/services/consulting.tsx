import Consulting from "@/components/whoWeServe/Individual/consulting";
import { FaAlignRight, FaAccusoft, FaKickstarter } from "react-icons/fa";
import { GrKey } from "react-icons/gr";
import { Image } from "@/types";

export default function CaseStudyConsulting(features: {
  title: string;
  heading: string;
  description: string;
  grid: {
    title: string;
    description: string;
    icon: Image;
  }[];
}) {
  return <Consulting {...features} />;
}
