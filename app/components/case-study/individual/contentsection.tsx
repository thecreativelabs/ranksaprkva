import Container from "@/components/Container";
import LeftContent from "./leftContent";
import RightContent from "./rightContent";
import Feature_case_Study from "../Feature-case-study/feature";
import Findout from "./findout";

export default function ContentSection() {
    const data = {
        title: 'Find out why leading businesses choose to do business with Victorious.',
        cards: [
            {
                image: '/case-study/image-1.png',
                logo: '',
                color: '#EB1D27',
                title: '#1 Ranking for "cargo shorts men"',
                button: {
                    text: 'READ CASE STUDY',
                    url: '',
                },
            },
            {
                image: '/methods/Lychee-the-Label.png',
                logo: '/case-study/logo-1.png',
                color: '#26384F',
                title: '#1 Ranking for "music foundation"',
                button: {
                    text: 'READ CASE STUDY',
                    url: '',
                },
            },
            {
                image: '/case-study/image-2.png',
                logo: '/case-study/logo-2.png',
                color: '#F0B342',
                title: '#1 Ranking for "cargo shorts men"',
                button: {
                    text: 'READ CASE STUDY',
                    url: '',
                },
            },
        ],
    }
    return (
        <div className="border-b-[1px] border-[#a8a8a8] ">
            <Container>
                <div className="flex  lg:flex-row flex-col-reverse justify-center  py-[60px] mt-[90px] gap-[30px] ">

                    <LeftContent />
                    <RightContent />
                </div>
            </Container>
        </div>

    )
}