import Learn from "@components/whoWeServe/Individual/Learn";
import Container from "../Container";

export default function ServiceLearn() {
    const data = {
        title: 'Learn about our measures of success.',
        content: 'We’ll navigate the art of optimization so you can concentrate on growing your business.',
        points: [
            {
                heading: 'Inbound Channel Tracking',
                content: 'By tracking traffic data across acquisition channels, we help you determine which marketing efforts are most effective and whether your SEO tactics are paying off.'
            },
            {
                heading: 'Inbound Channel Tracking',
                content: 'By tracking traffic data across acquisition channels, we help you determine which marketing efforts are most effective and whether your SEO tactics are paying off.'
            },
            {
                heading: 'Inbound Channel Tracking',
                content: 'By tracking traffic data across acquisition channels, we help you determine which marketing efforts are most effective and whether your SEO tactics are paying off.'
            },
            {
                heading: 'Inbound Channel Tracking',
                content: 'By tracking traffic data across acquisition channels, we help you determine which marketing efforts are most effective and whether your SEO tactics are paying off.'
            },

        ]
    }
    return (
        <Container>

            <Learn data={data} />
        </Container>
    )
}