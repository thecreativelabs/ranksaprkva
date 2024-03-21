import Slider from "@components/methods/Slider"
import { FaArrowUp } from "react-icons/fa";
import Container from "../Container";

export default function ServiceSlider() {
    const data = [
        {
            image: "/methods/Lychee-the-Label.png",
            logo: "/methods/logo4.png",
            color: "#F6917C",
            counter: [
                {
                    number: {
                        Icon: <FaArrowUp />,
                        text: "1,122%",
                    },
                    text: "Page One Keywords",
                },
                {
                    number: {
                        Icon: <FaArrowUp />,
                        text: "214%",
                    },
                    text: "YoY Monthly Revenue",
                },
            ],
            content:
                "See how Victorious helped Lychee The Label increase monthly revenue by 214%.",
            button: "Read case study",
        },

    ];
    return (
        <div className="bg-graybg md:py-[80px] sm:py-[40px] py-[25px]">
            <Container>
                <Slider data={data} />
            </Container>
        </div>
    )
}