import React from 'react';
import Image from 'next/image';


const Cards=(props:any) => {
    return (
        <div
            className={`${props.className}  rounded flex justify-center relative items-center bg-cover `}
            style={{
                backgroundImage: `url(${'/methods/Vector-3.png'})`,
                backgroundColor: props.color
            }}
        >
            <Image src={props.image} className="max-h-[100px] h-[100px] w-fit " width={1000} height={1000} alt='logo' />
           {

           props.logo && <Image width={1000} height={1000}
                alt='logo'
                src={props.logo}
                className={`absolute h-[100px] w-[100px] ${props.logoclass}`}
            />
           }
        </div>
    );
}
export default Cards
