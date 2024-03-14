import Cards from '@components/case-study/cards';
import CircleArrow from '@components/ui/icons/circleButtonArrow';

interface FeatureCardProps {
    data: {
        image: string;
        logo: string;
        color: string;
        title: string;
        button: {
            text: string;
        };
    };
}

export default function FeatureCard(props: FeatureCardProps) {
    return (
        <div className="flex flex-col justify-between">
            <Cards className='h-[256px]' color={props.data.color} image={props.data.image} logo={props.data.logo} />
            <div>
                <p className="text-dark-red text-xl font-bold font-DM-sans w-[100%]">
                    {props.data.title}
                </p>
                <div className="text-sm justify-start w-[100%] font-bold mt-[12px]  uppercase flex tracking-widest gap-[15px] items-center text-light-red">
                    {props.data.button.text}
                    <button type='button' title='arrow' className="w-[38px] rounded-[50%] bg-light-red hover:bg-black">
                        <CircleArrow
                            className=""
                            style={{ color: 'black' }}
                            bg="light-pink"
                            color="white"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
