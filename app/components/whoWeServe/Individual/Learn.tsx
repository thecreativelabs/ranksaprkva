import Container from "@/components/Container"


export default function Learn(props:any) {
    const data =(props==null || props.data==null)? {
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
    }:props.data;
    return (
        <Container >
            <div className="w-full flex justify-center">
                <div className=" sm:w-[58%] w-[90%]  sm:py-[80px] py-[30px]">
                    <p className="text-dark-red text-2xl lg:text-[37.30px] font-normal font-Amiri tracking-wide leading-[30px] sm:leading-[67.34px]">
                        {data.title}
                    </p>
                    <p className="font-DM-sans  text-base sm:text-lg leading-[28px] tracking-wide font-normal mt-[15px]">
                        {data.content}
                    </p>

                    <div className="mt-[50px]">
                        {
                            data.points.map((point:any, i:any) => {
                                return (
                                    <div key={i}>
                                        <div key={i} className="w-[100%] border-t-[1px] border-black py-6">
                                            <div className="relative gap-[12px] flex">
                                                <p className="text-xxl text-left  text-light-pink font-DM-sans font-bold">
                                                    {(i + 1 < 10) ? `0${i + 1}` : i + 1}
                                                </p>
                                                <p
                                                    className="text-lg sm:text-xl text-left  font-DM-sans font-bold"

                                                >
                                                    {point.heading}
                                                </p>

                                            </div>
                                            <div className={` overflow-hidden `} >
                                                <p className="font-DM-sans  text-base sm:text-lg leading-[28px] tracking-wide font-normal mt-[15px]">
                                                    {point.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </Container>
    )
}