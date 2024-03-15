import React from 'react';
import { IoStar } from "react-icons/io5";

import { FaStarHalfStroke } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";





const RatingStars = (props:any) => {
    const stars = [];
    const fullStars = Math.floor(props.rating);
    const remainder = props.rating - fullStars;
    const hasHalfStar = props.rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<IoStar className={props.className} />);
    }

    if (remainder >= 0.75) {
        stars.push(<IoStar className={props.className} />);
    } else if (remainder >= 0.25) {
        // stars.push(<Star key="half" filled={true} />);
        stars.push(<IoStarHalfOutline className={props.className} />);
    } else if(remainder >0.1 ) {
        stars.push(<IoStarOutline className={props.className} />);
    }

    // while (stars.length < 5) {
    //     stars.push(<Star key={stars.length} filled={false} />);
    // }

    return <div className="flex">{stars}</div>;
}

// Example usage:
const Rating = (props:any) => {
    return (
        <div>
            <RatingStars rating={props.rating} className={props.className} />
        </div>
    );
}
export default Rating
