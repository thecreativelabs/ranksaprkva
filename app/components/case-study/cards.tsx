import React from 'react';
import Image from 'next/image';
interface CardsProps {
    className?: string;
    color: string;
    image: string;
    logo: string;
}

const Cards: React.FC<CardsProps> = ({ className, color, image, logo }) => {
    return (
        <div
            className={`${className} h-[256px] rounded flex justify-center relative items-center bg-cover`}
            style={{
                backgroundImage: `url(${'./methods/Vector-3.png'})`,
                backgroundColor: color
            }}
        >
            <Image src={image} className="max-h-[100px] h-[100px] w-fit " width={1000} height={1000} alt='logo' />
           {

           logo && <Image width={100} height={100}
                alt='logo'
                src={logo}
                className="absolute h-[100px] w-[100px] top-[-35px] right-[-20px]"
            />
           }
        </div>
    );
}
export default Cards
