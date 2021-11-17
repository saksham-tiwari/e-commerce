import React from 'react'
import ReactStars from "react-rating-stars-component";


const Stars = (props) => {
    const secondExample = {
        size: props.size?props.size:20,
        count: 5,
        value: props.rating,
        isHalf: true,
        edit: props.edit
      };
    return (
        <div>
            <ReactStars {...secondExample} />
            
        </div>
    )
}

export default Stars
