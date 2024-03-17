import Banner from "@components/whoWeServe/Individual/Banner";
import Container from "../Container";
export default function ServiceBanner(){
    const data = {
        heading: "Don't let your competitors outshine you online.",
        content: 'Discover how search engine optimization services can benefit your business in the long run.',
        button: {
            text: 'STAND OUT IN SEARCH',
            url: ''
        },
        bg: './whoWeServe/Vector.png',
        image:'/whoWeServe/newbanner.webp'

    };
    return(
        <Container>
            <Banner data={data} />
        </Container>
    )
}