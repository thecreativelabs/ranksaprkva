import React from 'react';
import Image from 'next/image';


const Cards=(props:any) => {
    return (
        <div
            className={`${props.className} h-[256px] rounded flex justify-center relative items-center bg-cover`}
            style={{
                backgroundImage: `url(${'./methods/Vector-3.png'})`,
                backgroundColor: props.color
            }}
        >
            <Image src={props.image} className="max-h-[100px] h-[100px] w-fit " width={1000} height={1000} alt='logo' />
           {

           props.logo && <Image width={100} height={100}
                alt='logo'
                src={props.logo}
                className="absolute h-[100px] w-[100px] top-[-35px] right-[-20px]"
            />
           }
        </div>
    );
}
export default Cards
