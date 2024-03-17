import Marketing from "@components/whoWeServe/Individual/Marketing";
import Container from "../Container";

export default function ServiceMarketing() {
    const data = [
        {
            title: 'How SEO Fuels a Prosperous SaaS Marketing Funnel',
            content: 'Incorporating a partnership with a SaaS SEO company into your current marketing strategy is an investment in your business’ visibility and profitability.',
            points: ['Keep your SaaS solution at the forefront of future users’ minds.', 'Improve crawlability and create a better user experience for visitors.', 'Drive continuous traffic while reducing ongoing ad spend.'],
            image: '/whoWeServe/redimage1.png'
        },
    ]
    return(
        <Container>
            <Marketing data={data} />
        </Container>
    )
}