export default function RightContent() {
    const data = {
        content: 'We started working with Victorious SEO a number of months ago and already we have seen massive improvements in our SEO. The team we have been working with have been fantastic. We are very happy with everything thus far and look forward to working with Victorious going forward.',
        name: 'ALEX BARADI',
        role: 'President',
        services: [
            { text: 'On Page SEO Services', link: '/who-we-serve' },
            { text: 'Local SEO Services', link: '/who-we-serve' },

            { text: 'Citation Building', link: '/who-we-serve' },

            { text: 'Portfolio Dilution', link: '/who-we-serve' },

            { text: 'On Page SEO Services', link: '' },

        ]
    }
    return (
        <div className="lg:w-[30%] w-[100%] p-[40px] bg-graybg">

            <p className=" font-DM-sans text-[22px] font-bold">
                {data.content}
            </p>
            <div className="flex  border-b-[1px] pb-[40px] border-[#a1a1a1] mt-[20px] gap-[10px]">
                <div className="w-[40px] h-[40px] capitalize font-Amiri text-xl bg-dark-red flex justify-center items-center text-[#fed7aa] rounded-[50%]">
                    {data.name[0]}

                </div>
                <div className="gap-y-[4px] w-[60%] flex flex-col">
                    <p className=" font-DM-sans text-sm tracking-widest font-bold ">{data.name}</p>
                    <p className="text-sm  font-light leading-5 ">{data.role}</p>
                </div>
            </div>
            <p className=" pt-[30px] font-DM-sans text-[22px] font-bold">
                Services
            </p>
            <ul className=" list-disc mt-[10px] ml-[18px]">
                {
                    data.services.map((service: any, i: any) => {
                        return (
                            (service.link == '') ? <li key={i} className="text-[17px] font-DM-sans"> {service.text} </li>
                                :
                                <li key={i} className="text-[17px]  font-DM-sans"> <a href={service.link} className="text-light-pink">{service.text}</a> </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}