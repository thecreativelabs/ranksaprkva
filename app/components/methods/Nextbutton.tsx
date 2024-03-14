'use client'
import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';

interface NextButtonProps {
    className?: string;
    color?: string;
    for?: string;
}

export default function NextButton(props: NextButtonProps): JSX.Element {
    const [button, setButton] = useState<boolean>(false);
    useEffect(() => {
        if (props != null && props.for === 'button')
            setButton(true);
    }, [props, props.for]);

    const swiper = useSwiper();

    return (
        (!button) ? (
            <button title='button' type='button' onClick={() => swiper.slideNext()} className={`${props.className} p-1 bg-white`}>
                <svg fill={(props.color != null) ? props.color : "#000000"} height="50px" width="50px" viewBox="-29.7 -29.7 389.40 389.40" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path>
                    </g>
                </svg>
            </button>
        ) : (
            <>
                <svg className={props.className} fill={props.color} height="50px" width="50px" viewBox="-29.7 -29.7 389.40 389.40" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path>
                    </g>
                </svg>
                <style jsx>{`
                    svg:hover path {
                        fill: black;
                    }
                `}</style>
            </>
        )
    );
}
