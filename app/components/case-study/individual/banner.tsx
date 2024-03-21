import Image from "next/image"
import Cards from "@components/case-study/cards"
import Container from "@/components/Container"

export default function CaseStudyIndividualBanner() {
    const data = {
        image: '/case-study/image-2.png',
        logo: '/case-study/logo-2.png',
        color: 'blue',
        title: '#1 Ranking for "cargo shorts men"',

        link: '/',
        text: 'Gentry Dentistry',

    }

    return (
        <Container >
            <Cards className='h-[256px]' color={data.color} image={data.image} logo={data.logo} logoclass='bottom-[-65px] h-[150px] w-[150px] left-[-5px]' />

        </Container>
    )
}