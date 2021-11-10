import React from 'react'
import ReactStars from "react-rating-stars-component";


const Stars = (props) => {
    const secondExample = {
        size: 20,
        count: 5,
        value: props.rating,
        isHalf: true,
        edit: false
      };
    return (
        <div>
            <ReactStars {...secondExample} />
            
        </div>
    )
}

export default Stars
