import Image from "next/image";
import Cards from "@components/case-study/cards";
import Container from "@/components/Container";
import { Award, CaseStudy } from "@/types/sanity";

export default function CaseStudyIndividualBanner({
  image,
  awards,
}: {
  image: CaseStudy["headerImage"];
  awards?: Award[];
}) {
  return (
    <Container>
      <div className="mt-24 relative">
        <Cards
          className="h-[256px]"
          image={image}
          awards={awards}
          awardClass="bottom-[-65px] h-[150px] w-[150px] left-[-5px]"
        />
        <svg
          className="absolute -top-20 -right-10 -z-10"
          width="264"
          height="194"
          viewBox="0 0 264 194"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M243.987 65.7804L140.992 6.22579C140.992 6.22579 131.359 -0.955048 116.251 0.107205C101.144 1.16946 3.81375 3.78259 3.81375 3.78259C3.81375 3.78259 -4.12201 5.291 2.90137 11.1334C9.92471 16.9758 95.3727 97.4197 95.3727 97.4197C95.3727 97.4197 118.628 117.666 101.484 140.547L57.1792 189.198C57.1792 189.198 59.5133 195.19 67.5763 193.787L177.361 189.517C177.361 189.517 185.296 190.494 192.935 181.571C200.574 172.649 253.174 115.586 253.174 115.586C253.174 115.586 282.824 85.7234 243.987 65.7804Z"
            fill="#E5E2F7"
          />
        </svg>
        <svg
          className="absolute -bottom-20 left-10 -z-10"
          width="264"
          height="194"
          viewBox="0 0 264 194"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.0133 128.22L123.008 187.774C123.008 187.774 132.641 194.955 147.749 193.893C162.856 192.831 260.186 190.217 260.186 190.217C260.186 190.217 268.122 188.709 261.099 182.867C254.075 177.024 168.627 96.5803 168.627 96.5803C168.627 96.5803 145.372 76.3338 162.516 53.4528L206.821 4.80156C206.821 4.80156 204.487 -1.18954 196.424 0.212633L86.6393 4.48289C86.6393 4.48289 78.7035 3.50561 71.0648 12.4285C63.4261 21.3515 10.826 78.4144 10.826 78.4144C10.826 78.4144 -18.8241 108.277 20.0133 128.22Z"
            fill="#E5E2F7"
          />
        </svg>
      </div>
    </Container>
  );
}
